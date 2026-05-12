#!/usr/bin/env node
// One-off migration: parse boutique addresses out of the `bottomContent` markdown
// on the About (Our Story) entry, populate the new `discoverLocations` repeatable
// component, and strip the "Where to Discover" section from `bottomContent`.
//
// Usage:
//   STRAPI_URL=https://cms.emigeneva.ch \
//   STRAPI_API_TOKEN=... \
//   node scripts/migrate-about-boutiques.mjs --dry-run
//
//   # then, once the dry-run output looks correct, drop --dry-run to write.
//
// Idempotent: if `discoverLocations` is already populated for a locale, that
// locale is skipped. Safe to re-run.

import fs from 'node:fs';
import path from 'node:path';

const LOCALES = ['en', 'fr', 'it', 'de'];
const DRY_RUN = process.argv.includes('--dry-run');

function loadDotEnv() {
  // Look at sibling backend/.env so the caller doesn't need to copy-paste secrets.
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
const TOKEN = process.env.STRAPI_API_TOKEN;
if (!STRAPI_URL || !TOKEN) {
  console.error('Missing STRAPI_URL or STRAPI_API_TOKEN');
  process.exit(1);
}

const auth = { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' };

function parseBoutiques(bottomContent) {
  if (!bottomContent) return null;
  // Capture from "## Where to Discover" to the next top-level heading or EOF.
  const match = bottomContent.match(/##\s*Where to Discover[^\n]*\n([\s\S]*?)(?=\n##\s|\n#\s|$)/i);
  if (!match) return null;
  const body = match[1].trim();
  if (!body) return [];
  const entries = body.split(/\n\s*\n/);
  return entries
    .map((entry) => {
      const lines = entry.split('\n').map((l) => l.trim()).filter(Boolean);
      if (lines.length < 2) return null;
      const nameLine = lines[0];
      const nameMatch = nameLine.match(/^\*\*(.+?)\*\*$/);
      const name = nameMatch ? nameMatch[1].trim() : nameLine.replace(/\*\*/g, '').trim();
      const address = lines[1];
      const hours = lines.slice(2).join(' ').trim() || undefined;
      if (!name || !address) return null;
      return { name, address, ...(hours ? { hours } : {}) };
    })
    .filter(Boolean);
}

function stripBoutiqueSection(bottomContent) {
  if (!bottomContent) return bottomContent;
  return bottomContent
    .replace(/##\s*Where to Discover[^\n]*\n[\s\S]*?(?=\n##\s|\n#\s|$)/i, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

async function fetchAbout(locale) {
  const params = new URLSearchParams({ locale, 'populate[discoverLocations]': '*' });
  const res = await fetch(`${STRAPI_URL}/api/about?${params}`, { headers: auth });
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`GET /about?locale=${locale} → ${res.status}: ${await res.text()}`);
  }
  const json = await res.json();
  return json.data;
}

async function updateAbout(locale, payload) {
  const params = new URLSearchParams({ locale });
  const res = await fetch(`${STRAPI_URL}/api/about?${params}`, {
    method: 'PUT',
    headers: auth,
    body: JSON.stringify({ data: payload }),
  });
  if (!res.ok) {
    throw new Error(`PUT /about?locale=${locale} → ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

async function runLocale(locale) {
  console.log(`\n--- ${locale} ---`);
  const entry = await fetchAbout(locale);
  if (!entry) {
    console.log('  no entry, skipping');
    return;
  }
  if (entry.discoverLocations && entry.discoverLocations.length > 0) {
    console.log(`  discoverLocations already populated (${entry.discoverLocations.length}), skipping`);
    return;
  }
  const boutiques = parseBoutiques(entry.bottomContent);
  if (!boutiques || boutiques.length === 0) {
    console.log('  no "Where to Discover" section found in bottomContent, skipping');
    return;
  }
  const newBottomContent = stripBoutiqueSection(entry.bottomContent);

  console.log(`  parsed ${boutiques.length} boutiques:`);
  for (const b of boutiques) console.log(`    - ${b.name} | ${b.address}${b.hours ? ` | ${b.hours}` : ''}`);
  console.log(`  new bottomContent length: ${newBottomContent.length} (was ${entry.bottomContent.length})`);

  if (DRY_RUN) {
    console.log('  [dry-run] not writing');
    return;
  }
  await updateAbout(locale, {
    discoverLocations: boutiques,
    bottomContent: newBottomContent,
  });
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
