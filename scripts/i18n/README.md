# i18n seed (de)

One-shot script to seed German (`de`) localizations for every i18n-enabled content type in the live Strapi.

The German translations live as ES-module payload files under `payloads/`, one per content type. The script reads each EN entry, then upserts a `de` sibling localization with the corresponding payload.

## Run

The script needs a Strapi API token with **Full Access** permissions on every content type. Read it from `strapi/.env` (`STRAPI_FULL_ACCESS=...`) and source it before running:

```bash
cd strapi
set -a; source .env; set +a
NODE_EXTRA_CA_CERTS=/opt/homebrew/etc/ca-certificates/cert.pem \
  node scripts/i18n/seed-de.mjs                  # all content types
NODE_EXTRA_CA_CERTS=/opt/homebrew/etc/ca-certificates/cert.pem \
  node scripts/i18n/seed-de.mjs --only global    # one type
```

The client reads `STRAPI_FULL_ACCESS` first, falling back to `STRAPI_API_TOKEN` for compatibility. `STRAPI_URL` defaults to the production instance and can be overridden via env.

### TLS / cert note

Node 22's bundled CA store is missing the intermediate cert chain used by the Strapi cloud instance, so plain `node` produces `UNABLE_TO_GET_ISSUER_CERT_LOCALLY`. Pointing `NODE_EXTRA_CA_CERTS` at the Homebrew bundle (`/opt/homebrew/etc/ca-certificates/cert.pem`) fixes it. On non-Homebrew systems try `/etc/ssl/cert.pem` or any up-to-date `cacert.pem`.

## Idempotency

The script upserts. Re-running with updated payload files propagates updates without creating duplicates.
