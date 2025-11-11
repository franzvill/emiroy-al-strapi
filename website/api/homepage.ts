import type { VercelRequest, VercelResponse } from '@vercel/node';

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (STRAPI_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
    }

    const response = await fetch(
      `${STRAPI_URL}/api/homepage?populate[hero][populate]=backgroundImage&populate[collectionSection]=*&populate[footer]=*`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status}`);
    }

    const data = await response.json();

    // Homepage content - cache for 1 minute, serve stale for up to 5 minutes
    // This ensures changes appear quickly without needing cache purging
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    res.setHeader('CDN-Cache-Control', 'max-age=60');

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching homepage:', error);
    res.status(500).json({ error: 'Failed to fetch homepage' });
  }
}
