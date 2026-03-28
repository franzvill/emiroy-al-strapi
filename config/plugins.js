module.exports = () => ({
  i18n: {
    enabled: true,
  },
  seo: {
    enabled: true,
  },
  sitemap: {
    enabled: true,
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        'product-card': {
          field: 'slug',
          references: 'name',
        },
      },
    },
  },
});
