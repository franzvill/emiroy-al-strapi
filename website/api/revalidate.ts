import type { VercelRequest, VercelResponse } from '@vercel/node';

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify webhook secret
  const webhookSecret = req.headers['x-webhook-secret'];
  if (webhookSecret !== REVALIDATE_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const body = req.body;
    const model = body.model; // e.g., 'article', 'homepage', 'global'
    const event = body.event; // e.g., 'entry.create', 'entry.update', 'entry.delete'
    const slug = body.entry?.slug;

    console.log(`Revalidation triggered for model: ${model}, event: ${event}, slug: ${slug}`);

    // If Vercel token is available, use Vercel's cache purging API
    if (VERCEL_TOKEN && VERCEL_TEAM_ID) {
      const urlsToPurge: string[] = [];
      const deploymentDomain = req.headers.host;

      // Determine which URLs to purge based on the model
      switch (model) {
        case 'article':
          // Purge article list and specific article
          urlsToPurge.push(`https://${deploymentDomain}/api/articles`);
          if (slug) {
            urlsToPurge.push(`https://${deploymentDomain}/api/articles/${slug}`);
          }
          break;

        case 'category':
          // Purge categories and articles list (which includes category info)
          urlsToPurge.push(`https://${deploymentDomain}/api/categories`);
          urlsToPurge.push(`https://${deploymentDomain}/api/articles`);
          break;

        case 'homepage':
          urlsToPurge.push(`https://${deploymentDomain}/api/homepage`);
          break;

        case 'global':
          urlsToPurge.push(`https://${deploymentDomain}/api/global`);
          break;

        default:
          // For unknown models, purge all API routes
          urlsToPurge.push(
            `https://${deploymentDomain}/api/articles`,
            `https://${deploymentDomain}/api/categories`,
            `https://${deploymentDomain}/api/homepage`,
            `https://${deploymentDomain}/api/global`
          );
      }

      // Purge cache for each URL
      const purgeResults = await Promise.allSettled(
        urlsToPurge.map(url =>
          fetch(`https://api.vercel.com/v1/purge?url=${encodeURIComponent(url)}&teamId=${VERCEL_TEAM_ID}`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${VERCEL_TOKEN}`,
            },
          })
        )
      );

      const failures = purgeResults.filter(r => r.status === 'rejected');
      if (failures.length > 0) {
        console.error('Some cache purge requests failed:', failures);
      }

      return res.status(200).json({
        revalidated: true,
        purgedUrls: urlsToPurge,
        timestamp: new Date().toISOString(),
      });
    }

    // If no Vercel token, just return success
    // Cache will naturally expire based on stale-while-revalidate
    return res.status(200).json({
      revalidated: true,
      message: 'Cache will expire naturally based on TTL settings',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error during revalidation:', error);
    return res.status(500).json({ error: 'Failed to revalidate' });
  }
}
