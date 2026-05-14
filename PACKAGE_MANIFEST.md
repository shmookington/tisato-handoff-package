# Package Manifest

## Immediate Website Files

- `public-site/index.html`
- `public-site/thank-you.html`
- `public-site/admin.html`
- `public-site/assets/css/styles.css`
- `public-site/assets/js/site.js`
- `public-site/assets/js/admin.js`
- `public-site/assets/img/`
- `public-site/robots.txt`
- `public-site/sitemap.xml`

## Runnable Production Starter Code

- `production-starter/package.json`
- `production-starter/server.js`
- `production-starter/src/http/`
- `production-starter/src/services/`
- `production-starter/src/storage/`
- `production-starter/src/security/`
- `production-starter/src/templates/`
- `production-starter/src/utils/`
- `production-starter/public/index.html`
- `production-starter/public/admin.html`
- `production-starter/public/thank-you.html`
- `production-starter/public/assets/css/app.css`
- `production-starter/public/assets/js/booking.js`
- `production-starter/public/assets/js/admin.js`
- `production-starter/scripts/hash-password.js`
- `production-starter/data/`

## Business Handoff Documents

- `README_FIRST.md`
- `client-facing/CLIENT_HANDOFF_LETTER.md`
- `client-facing/SCOPE_SUMMARY.md`

## Production Implementation Documents

- `CODE_DEEP_DIVE.md`
- `backend-blueprints/booking-system/README.md`
- `backend-blueprints/booking-system/API_CONTRACT.md`
- `backend-blueprints/booking-system/DATA_MODEL.json`
- `backend-blueprints/booking-system/DATABASE_SCHEMA.sql`
- `backend-blueprints/booking-system/IMPLEMENTATION_SEQUENCE.md`
- `backend-blueprints/admin-portal/README.md`
- `backend-blueprints/admin-portal/ADMIN_USER_STORIES.md`
- `backend-blueprints/admin-portal/PRODUCTION_ADMIN_CHECKLIST.md`
- `backend-blueprints/email-automation/README.md`
- `backend-blueprints/email-automation/EMAIL_SEQUENCE_MAP.md`
- `backend-blueprints/email-automation/templates/`
- `reference-implementation/README.md`
- `reference-implementation/nextjs-api/app/api/bookings/route.js`
- `reference-implementation/nextjs-api/app/api/admin/login/route.js`
- `reference-implementation/nextjs-api/app/api/admin/logout/route.js`
- `reference-implementation/nextjs-api/app/api/admin/bookings/route.js`
- `reference-implementation/nextjs-api/app/api/admin/bookings/[id]/route.js`
- `reference-implementation/nextjs-api/lib/`
- `reference-implementation/nextjs-api/docs/`

## Deployment Documents

- `deployment/HOSTING_DECISION_GUIDE.md`
- `deployment/ENVIRONMENT_VARIABLES_EXAMPLE.md`
- `deployment/LAUNCH_CHECKLIST.md`
- `deployment/NETLIFY_STATIC_HOSTING.md`
- `deployment/VERCEL_STATIC_HOSTING.md`
- `deployment/CPANEL_HOSTING.md`
- `deployment/SECURITY_NOTES.md`

## Recovery References

- `source-recovery/original-rebrand-notes.md`
- `source-recovery/original-master-checklist.md`

## Handoff Positioning

The package is intentionally divided into phases. The public static website can be hosted first, while `production-starter/` gives developers a runnable implementation of booking, admin, persistence, audit logging, and email automation. The production specs remain included so the starter can be upgraded into a database-backed hosted application without mixing public website files with private credentials, customer data, and operational systems.
