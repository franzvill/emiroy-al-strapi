const STRAPI_URL = process.env.STRAPI_URL ?? 'https://cms.emigeneva.ch';
const TOKEN = process.env.STRAPI_FULL_ACCESS ?? process.env.STRAPI_API_TOKEN;
if (!TOKEN) throw new Error('STRAPI_FULL_ACCESS (or STRAPI_API_TOKEN) is required');

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${TOKEN}`,
};

async function request(method, path, body) {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  if (res.status === 404) return { ok: false, status: 404, data: null };
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`${method} ${path} → ${res.status} ${text}`);
  }
  return { ok: true, status: res.status, data: text ? JSON.parse(text) : null };
}

export async function getEntry(type, { locale, populate = '*' } = {}) {
  const params = new URLSearchParams();
  if (locale) params.set('locale', locale);
  if (populate) params.set('populate', populate);
  const r = await request('GET', `/api/${type}?${params}`);
  return r.data;
}

export async function getCollection(type, { locale, populate = '*', pageSize = 100 } = {}) {
  const params = new URLSearchParams();
  if (locale) params.set('locale', locale);
  if (populate) params.set('populate', populate);
  params.set('pagination[pageSize]', String(pageSize));
  const r = await request('GET', `/api/${type}?${params}`);
  return r.data;
}

// Strapi v5 single-type upsert: PUT /api/{type}?locale={locale} creates or updates.
export async function upsertSingleEntry(type, payload, locale = 'de') {
  const r = await request('PUT', `/api/${type}?locale=${locale}`, { data: payload });
  return r.data;
}

// Strapi v5 collection-type localization upsert: PUT /api/{type}/{documentId}?locale={locale}
// creates the localization if missing, or updates it if present.
export async function upsertEntryLocalization(type, documentId, payload, locale = 'de') {
  const r = await request('PUT', `/api/${type}/${documentId}?locale=${locale}`, { data: payload });
  return r.data;
}
