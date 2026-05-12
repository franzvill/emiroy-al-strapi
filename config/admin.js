module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: env.bool('PREVIEW_ENABLED', true),
    config: {
      allowedOrigins: env('FRONTEND_URL', 'http://localhost:8081'),
      async handler(uid, { documentId, locale, status }) {
        const frontendUrl = env('FRONTEND_URL', 'http://localhost:8081');
        const secret = env('PREVIEW_SECRET');
        if (!secret) {
          strapi.log.warn('[preview] PREVIEW_SECRET is not set; preview disabled');
          return null;
        }

        // Static UID → path map. Returns either a string or an async function
        // that resolves to a string for dynamic content (e.g. articles by slug).
        const staticMap = {
          'api::homepage.homepage': '/',
          'api::about.about': '/about',
          'api::watches-page.watches-page': '/collection',
          'api::corporate-page.corporate-page': '/corporate-requests',
          'api::retailers-page.retailers-page': '/retailers-partnership',
          'api::personalized-page.personalized-page': '/personalized',
          'api::shipping-returns-page.shipping-returns-page': '/shipping-returns-refund',
          'api::terms-page.terms-page': '/terms-conditions',
          'api::warranty-page.warranty-page': '/warranty-policy',
          'api::faq-page.faq-page': '/faq',
          'api::newsroom-page.newsroom-page': '/newsroom',
          'api::collectors-page.collectors-page': '/collectors-presentation',
        };

        let path = staticMap[uid] ?? null;

        if (!path && uid === 'api::news-article.news-article') {
          try {
            const doc = await strapi.documents(uid).findOne({ documentId, status, locale });
            if (doc?.slug) path = `/newsroom/${doc.slug}`;
          } catch (err) {
            strapi.log.warn(`[preview] failed to resolve news-article slug: ${err.message}`);
          }
        }

        if (!path) return null;

        const params = new URLSearchParams({
          path,
          secret,
          status: status || 'draft',
        });
        if (locale) params.set('locale', locale);
        return `${frontendUrl}/preview?${params.toString()}`;
      },
    },
  },
});
