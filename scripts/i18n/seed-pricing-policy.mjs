// Seeds the pricing-policy-page single type with an empty default-locale stub.
// Run once after deploying the new content type to bootstrap the document so
// the Strapi admin can render it (fixes the "fetching draft relations" error).

import { upsertSingleEntry } from './lib/strapi-client.mjs';

const locales = ['en'];

let failed = 0;
for (const locale of locales) {
  try {
    const payload = (await import(`./payloads/pricing-policy-page.${locale}.mjs`)).default;
    await upsertSingleEntry('pricing-policy-page', payload, locale);
    console.log(`[OK] pricing-policy-page (${locale})`);
  } catch (e) {
    console.error(`[ERR] pricing-policy-page (${locale}): ${e.message}`);
    failed += 1;
  }
}

if (failed > 0) {
  console.error(`Done with ${failed} error(s).`);
  process.exit(1);
}
