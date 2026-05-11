// Seeds the watches-page single type's `content` field for all five locales.
// The frontend (Watches.tsx) renders this markdown as the intro block at the
// top of the collection page.

import { upsertSingleEntry } from './lib/strapi-client.mjs';

const locales = ['en', 'fr', 'it', 'de', 'es'];

let failed = 0;
for (const locale of locales) {
  try {
    const payload = (await import(`./payloads/watches-page.${locale}.mjs`)).default;
    await upsertSingleEntry('watches-page', payload, locale);
    console.log(`[OK] watches-page (${locale})`);
  } catch (e) {
    console.error(`[ERR] watches-page (${locale}): ${e.message}`);
    failed += 1;
  }
}

if (failed > 0) {
  console.error(`Done with ${failed} error(s).`);
  process.exit(1);
}
