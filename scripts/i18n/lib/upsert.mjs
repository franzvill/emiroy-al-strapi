import { upsertSingleEntry, upsertEntryLocalization } from './strapi-client.mjs';

export async function upsertSingleType(type, payload) {
  await upsertSingleEntry(type, payload);
  console.log(`[OK] ${type} (single)`);
}

export async function upsertCollectionType(type, payloadsByDocumentId) {
  for (const [documentId, payload] of Object.entries(payloadsByDocumentId)) {
    await upsertEntryLocalization(type, documentId, payload);
    console.log(`[OK] ${type} (${documentId})`);
  }
}
