import {
  getCollection,
  upsertSingleEntry,
  createLocalization,
  updateLocalization,
} from './strapi-client.mjs';

export async function upsertSingleType(type, payload) {
  await upsertSingleEntry(type, payload);
  console.log(`[OK] ${type} (single)`);
}

export async function upsertCollectionType(type, payloadsByDocumentId) {
  const deResp = await getCollection(type, { locale: 'de' });
  const existing = new Set((deResp?.data ?? []).map((r) => r.documentId));

  for (const [documentId, payload] of Object.entries(payloadsByDocumentId)) {
    const exists = existing.has(documentId);
    if (exists) {
      await updateLocalization(type, documentId, payload);
    } else {
      await createLocalization(type, documentId, payload);
    }
    console.log(`[OK ${exists ? 'upd' : 'new'}] ${type} (${documentId})`);
  }
}
