# Vercel Caching Setup Guide

This guide explains the caching improvements implemented for optimal performance on Vercel.

## Overview

The application now uses **Vercel Serverless Functions** as a caching layer between the browser and Strapi CMS. This provides:

- **Secure API tokens** (kept server-side)
- **Global CDN caching** via Vercel Edge Network
- **Automatic cache revalidation** via webhooks
- **Faster page loads** with stale-while-revalidate strategy

## Architecture

```
Browser → Vercel API Routes (with caching) → Strapi CMS
          ↑
          └─ Vercel Edge CDN caches responses
```

## API Routes Created

All routes are in `/api/` directory:

| Route | Cache TTL | Purpose |
|-------|-----------|---------|
| `/api/articles` | 5 min | List all articles |
| `/api/articles/[slug]` | 30 min | Get single article |
| `/api/categories` | 1 hour | List all categories |
| `/api/homepage` | 1 hour | Homepage content |
| `/api/global` | 1 hour | Global settings |
| `/api/revalidate` | N/A | Webhook for cache purging |

## Caching Strategy

Each endpoint uses `Cache-Control` headers:

```
s-maxage=<seconds>, stale-while-revalidate=<seconds>
```

- **s-maxage**: How long Vercel CDN caches the response
- **stale-while-revalidate**: How long to serve stale content while fetching fresh data in the background

## Setup Instructions

### 1. Deploy to Vercel

Deploy the `/website` directory to Vercel:

```bash
cd website
vercel
```

### 2. Configure Environment Variables in Vercel

Go to your Vercel project → Settings → Environment Variables and add:

#### Required Variables:

```env
STRAPI_URL=https://your-strapi-instance.strapiapp.com
STRAPI_TOKEN=your_strapi_api_token_here
REVALIDATE_SECRET=your_secure_random_string_here
```

#### Optional Variables (for cache purging):

```env
VERCEL_TOKEN=your_vercel_api_token_here
VERCEL_TEAM_ID=your_vercel_team_id_here
```

### 3. Create Strapi API Token

1. Log in to your Strapi admin panel
2. Go to **Settings** → **API Tokens**
3. Click **Create new API Token**
4. Set:
   - **Name**: "Vercel Production"
   - **Token type**: Read-only (or Custom with read permissions)
   - **Token duration**: Unlimited
5. Copy the token and add it to Vercel environment variables as `STRAPI_TOKEN`

### 4. Generate Revalidation Secret

Generate a secure random string:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Add this to Vercel as `REVALIDATE_SECRET`.

### 5. (Optional) Set Up Vercel Token for Cache Purging

For automatic cache invalidation:

1. Go to https://vercel.com/account/tokens
2. Create a new token with name "Cache Purging"
3. Add to Vercel as `VERCEL_TOKEN`
4. Find your Team ID in Vercel team settings and add as `VERCEL_TEAM_ID`

### 6. Configure Strapi Webhook

Set up a webhook in Strapi to trigger cache revalidation:

1. Go to Strapi admin → **Settings** → **Webhooks**
2. Click **Create new webhook**
3. Configure:
   - **Name**: "Vercel Cache Revalidation"
   - **URL**: `https://your-vercel-domain.vercel.app/api/revalidate`
   - **Headers**:
     - Key: `x-webhook-secret`
     - Value: (same as `REVALIDATE_SECRET`)
   - **Events**: Select:
     - `entry.create`
     - `entry.update`
     - `entry.delete`
     - `entry.publish`
     - `entry.unpublish`
   - **Content types**: Select relevant types (article, homepage, global, category)

4. Save and test the webhook

## How It Works

### Development Mode

When running locally (`npm run dev`):
- API calls go directly to Strapi (no caching)
- Uses `VITE_STRAPI_URL` environment variable

### Production Mode

When deployed to Vercel:
1. Browser makes requests to `/api/*` endpoints
2. Vercel Edge Network checks cache:
   - **Cache hit**: Returns cached response immediately
   - **Cache miss**: Fetches from Strapi, caches, and returns
3. When content changes in Strapi:
   - Webhook triggers `/api/revalidate`
   - Cache is purged for affected URLs
   - Next request fetches fresh data

## Cache Headers Explained

### For Dynamic Content (Articles):

```http
Cache-Control: s-maxage=300, stale-while-revalidate=600
```

- Cache for 5 minutes
- Serve stale for up to 10 minutes while revalidating in background

### For Static Content (Homepage, Global):

```http
Cache-Control: s-maxage=3600, stale-while-revalidate=86400
```

- Cache for 1 hour
- Serve stale for up to 24 hours while revalidating

### For Static Assets:

```http
Cache-Control: public, max-age=31536000, immutable
```

- Cache for 1 year (assets have hashed filenames)

## Monitoring & Testing

### Test Caching

Check response headers in browser DevTools:

```http
X-Vercel-Cache: HIT    # Served from cache
X-Vercel-Cache: MISS   # Cache miss, fetched from origin
X-Vercel-Cache: STALE  # Serving stale content while revalidating
```

### Test Webhook

After publishing content in Strapi:

1. Check Strapi webhook logs (Settings → Webhooks → View logs)
2. Verify the webhook received a 200 OK response
3. Check new content appears on your site within cache TTL

### Manual Cache Purge

If needed, trigger cache purge manually:

```bash
curl -X POST https://your-vercel-domain.vercel.app/api/revalidate \
  -H "x-webhook-secret: YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"model":"article"}'
```

## Performance Benefits

Before vs After:

| Metric | Before | After |
|--------|--------|-------|
| API Token Security | ❌ Exposed in browser | ✅ Server-side only |
| Response Time (cached) | ~500-1000ms | ~50-100ms |
| Strapi API Calls | Every page load | Once per cache TTL |
| Global CDN | ❌ No | ✅ Vercel Edge Network |
| Cache Invalidation | ❌ Manual | ✅ Automatic via webhook |

## Troubleshooting

### Issue: 500 errors from API routes

**Solution**: Check Vercel logs for detailed error messages. Ensure `STRAPI_URL` and `STRAPI_TOKEN` are set correctly.

### Issue: Webhook not working

**Solution**:
- Verify `REVALIDATE_SECRET` matches in both Strapi webhook and Vercel env vars
- Check Strapi webhook logs for error messages
- Test webhook URL manually with curl

### Issue: Cache not invalidating

**Solution**:
- If using Vercel token: Verify `VERCEL_TOKEN` and `VERCEL_TEAM_ID` are correct
- If not using token: Cache will expire based on TTL settings (wait for `s-maxage` duration)

### Issue: Old data showing after publish

**Solution**: This is expected behavior with `stale-while-revalidate`. Wait up to the SWR duration, or adjust cache TTLs in API route files.

## Customization

To adjust cache durations, edit the API route files:

```typescript
// Example: website/api/articles.ts
res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
//                                        ↑ 5min cache    ↑ 10min stale
```

Common TTL values:
- Frequently updated: `60` (1 min) / `300` (5 min)
- Moderately updated: `300` (5 min) / `1800` (30 min)
- Rarely updated: `3600` (1 hour) / `86400` (1 day)

## Additional Resources

- [Vercel Edge Caching](https://vercel.com/docs/concepts/edge-network/caching)
- [Vercel API Routes](https://vercel.com/docs/concepts/functions/serverless-functions)
- [Strapi API Tokens](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/api-tokens.html)
- [Strapi Webhooks](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/webhooks.html)
