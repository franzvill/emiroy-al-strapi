# i18n seed (de)

One-shot script to seed German (`de`) localizations for every i18n-enabled content type in the live Strapi.

The German translations live as ES-module payload files under `payloads/`, one per content type. The script reads each EN entry, then upserts a `de` sibling localization with the corresponding payload.

## Run

```bash
cd strapi
STRAPI_API_TOKEN=<token> node scripts/i18n/seed-de.mjs                  # all content types
STRAPI_API_TOKEN=<token> node scripts/i18n/seed-de.mjs --only global    # one type
```

`STRAPI_URL` defaults to the production instance and can be overridden via env.

## Idempotency

The script upserts. Re-running with updated payload files propagates updates without creating duplicates.
