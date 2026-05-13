#!/usr/bin/env node
// One-off migration: regroup the obsolete flat `items` on the FAQ page into the
// 8-section structure already used by EN/DE. Applies to locales that still have
// flat items (FR, IT). Idempotent — skips locales whose sections are already
// populated.
//
// Usage:
//   STRAPI_URL=https://cms.emigeneva.ch \
//   STRAPI_API_TOKEN=... \
//   node scripts/migrate-faq-items-to-sections.mjs --dry-run
//
//   # then drop --dry-run to write.

import fs from 'node:fs';
import path from 'node:path';

const LOCALES = ['en', 'fr', 'it', 'de'];
const DRY_RUN = process.argv.includes('--dry-run');

// Fixed: order of items in FR/IT mirrors EN/DE exactly. (3+4+2+3+4+2+1+1 = 20)
const GROUP_SIZES = [3, 4, 2, 3, 4, 2, 1, 1];
const SECTION_TITLES = {
  fr: ['Commandes', 'Livraison', 'Paiements', 'Retours', 'Garantie', 'Produits', 'Nos boutiques', 'Assistance'],
  it: ['Ordini', 'Spedizione', 'Pagamenti', 'Resi', 'Garanzia', 'Prodotti', 'Le nostre boutique', 'Assistenza'],
};

function loadDotEnv() {
  const candidates = [
    path.resolve(process.cwd(), '../website/backend/.env'),
    path.resolve(process.cwd(), 'website/backend/.env'),
  ];
  for (const file of candidates) {
    if (!fs.existsSync(file)) continue;
    const raw = fs.readFileSync(file, 'utf8');
    for (const line of raw.split('\n')) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
      if (!m) continue;
      if (!process.env[m[1]]) process.env[m[1]] = m[2].trim();
    }
    return;
  }
}

loadDotEnv();

const STRAPI_URL = process.env.STRAPI_URL;
const TOKEN = process.env.STRAPI_API_TOKEN || process.env.STRAPI_FULL_ACCESS;
if (!STRAPI_URL || !TOKEN) {
  console.error('Missing STRAPI_URL or STRAPI_API_TOKEN/STRAPI_FULL_ACCESS');
  process.exit(1);
}

const auth = { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' };

async function fetchFaq(locale) {
  const qs = `locale=${locale}&populate[items]=*&populate[sections][populate]=items`;
  const res = await fetch(`${STRAPI_URL}/api/faq-page?${qs}`, { headers: auth });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GET /faq-page?locale=${locale} → ${res.status}: ${await res.text()}`);
  const json = await res.json();
  return json.data;
}

async function updateFaq(locale, payload) {
  const res = await fetch(`${STRAPI_URL}/api/faq-page?locale=${locale}`, {
    method: 'PUT',
    headers: auth,
    body: JSON.stringify({ data: payload }),
  });
  if (!res.ok) throw new Error(`PUT /faq-page?locale=${locale} → ${res.status}: ${await res.text()}`);
  return res.json();
}

function groupItems(items) {
  const groups = [];
  let cursor = 0;
  for (const size of GROUP_SIZES) {
    groups.push(items.slice(cursor, cursor + size));
    cursor += size;
  }
  return groups;
}

async function runLocale(locale) {
  console.log(`\n--- ${locale} ---`);
  const entry = await fetchFaq(locale);
  if (!entry) {
    console.log('  no entry, skipping');
    return;
  }
  const items = entry.items || [];
  const sections = entry.sections || [];

  if (sections.length > 0 && items.length === 0) {
    console.log(`  already migrated (${sections.length} sections, no flat items), skipping`);
    return;
  }
  if (!SECTION_TITLES[locale]) {
    console.log(`  no SECTION_TITLES mapping for "${locale}" (and locale still has flat items) — skipping`);
    return;
  }
  if (items.length !== 20) {
    console.error(`  expected 20 items, got ${items.length} — aborting this locale to avoid data loss`);
    return;
  }

  const titles = SECTION_TITLES[locale];
  const groups = groupItems(items);
  const newSections = titles.map((title, i) => ({
    title,
    items: groups[i].map(({ question, answer }) => ({ question, answer })),
  }));

  console.log(`  source: ${items.length} items, ${sections.length} sections`);
  console.log(`  target: ${newSections.length} sections, 0 items`);
  for (const s of newSections) {
    console.log(`    - ${s.title} (${s.items.length})`);
    for (const it of s.items) console.log(`        Q: ${(it.question || '').slice(0, 90)}`);
  }

  if (DRY_RUN) {
    console.log('  [dry-run] not writing');
    return;
  }
  await updateFaq(locale, { sections: newSections, items: [] });
  console.log('  written');
}

async function main() {
  if (DRY_RUN) console.log('DRY RUN — no writes will be made.');
  for (const locale of LOCALES) {
    try {
      await runLocale(locale);
    } catch (err) {
      console.error(`  ERROR for ${locale}:`, err.message);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
