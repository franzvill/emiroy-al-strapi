const STRAPI_URL = process.env.STRAPI_URL ?? 'https://awesome-prosperity-f883a3373a.strapiapp.com';
const TOKEN = process.env.STRAPI_API_TOKEN;
if (!TOKEN) throw new Error('STRAPI_API_TOKEN is required');

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${TOKEN}`,
};

export async function getEntry(type, { locale, populate = '*' } = {}) {
  const params = new URLSearchParams();
  if (locale) params.set('locale', locale);
  if (populate) params.set('populate', populate);
  const res = await fetch(`${STRAPI_URL}/api/${type}?${params}`, { headers });
  if (!res.ok && res.status !== 404) {
    throw new Error(`GET /api/${type} (${locale}) → ${res.status} ${await res.text()}`);
  }
  if (res.status === 404) return null;
  return res.json();
}

export async function getCollection(type, { locale, populate = '*', pageSize = 100 } = {}) {
  const params = new URLSearchParams();
  if (locale) params.set('locale', locale);
  if (populate) params.set('populate', populate);
  params.set('pagination[pageSize]', String(pageSize));
  const res = await fetch(`${STRAPI_URL}/api/${type}?${params}`, { headers });
  if (!res.ok) {
    throw new Error(`GET /api/${type} (${locale}) → ${res.status} ${await res.text()}`);
  }
  return res.json();
}

export async function createLocalization(type, documentId, payload) {
  const res = await fetch(`${STRAPI_URL}/api/${type}?locale=de`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ data: { documentId, ...payload } }),
  });
  if (!res.ok) {
    throw new Error(`POST /api/${type}?locale=de → ${res.status} ${await res.text()}`);
  }
  return res.json();
}

export async function updateLocalization(type, documentId, payload) {
  const res = await fetch(`${STRAPI_URL}/api/${type}/${documentId}?locale=de`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ data: payload }),
  });
  if (!res.ok) {
    throw new Error(`PUT /api/${type}/${documentId}?locale=de → ${res.status} ${await res.text()}`);
  }
  return res.json();
}
