// Seeds the terms-page single type in all five locales.
// Run after the new terms-page content type has been deployed to live Strapi.

import { upsertSingleEntry } from './lib/strapi-client.mjs';

const locales = ['en', 'fr', 'it', 'es', 'de'];

let failed = 0;
for (const locale of locales) {
  try {
    const payload = (await import(`./payloads/terms-page.${locale}.mjs`)).default;
    await upsertSingleEntry('terms-page', payload, locale);
    console.log(`[OK] terms-page (${locale})`);
  } catch (e) {
    console.error(`[ERR] terms-page (${locale}): ${e.message}`);
    failed += 1;
  }
}

if (failed > 0) {
  console.error(`Done with ${failed} error(s).`);
  process.exit(1);
}
