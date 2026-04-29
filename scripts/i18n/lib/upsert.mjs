import {
  getEntry,
  getCollection,
  createLocalization,
  updateLocalization,
} from './strapi-client.mjs';

export async function upsertSingleType(type, payload) {
  const enResp = await getEntry(type, { locale: 'en' });
  if (!enResp?.data?.documentId) {
    throw new Error(`No EN entry for ${type}`);
  }
  const documentId = enResp.data.documentId;

  const deResp = await getEntry(type, { locale: 'de' });
  if (deResp?.data) {
    await updateLocalization(type, documentId, payload);
    console.log(`[OK upd] ${type} (${documentId})`);
  } else {
    await createLocalization(type, documentId, payload);
    console.log(`[OK new] ${type} (${documentId})`);
  }
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
