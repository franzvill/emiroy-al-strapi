import { upsertSingleType, upsertCollectionType } from './lib/upsert.mjs';

const argv = process.argv.slice(2);
const onlyIdx = argv.indexOf('--only');
const only = onlyIdx >= 0 ? argv[onlyIdx + 1] : null;

const single = (type, importer) => [
  type,
  async () => upsertSingleType(type, (await importer()).default),
];
const collection = (type, importer) => [
  type,
  async () => upsertCollectionType(type, (await importer()).default),
];

const tasks = [
  single('global', () => import('./payloads/global.de.mjs')),
];

let failed = 0;
for (const [name, run] of tasks) {
  if (only && only !== name) continue;
  try {
    await run();
  } catch (e) {
    console.error(`[ERR] ${name}: ${e.message}`);
    failed += 1;
  }
}

if (failed > 0) {
  console.error(`Done with ${failed} error(s).`);
  process.exit(1);
}
