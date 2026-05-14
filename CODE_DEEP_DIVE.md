# Code Deep Dive

This handoff is split into three layers:

1. `public-site/`
   The hostable static website and prototype interactions.

2. `backend-blueprints/`
   Contracts, schemas, workflow maps, and production requirements.

3. `reference-implementation/`
   Annotated Next.js API code showing how the production booking, admin, and email systems should be assembled.

## Static Site Layer

### `public-site/index.html`

The homepage is intentionally static so it can be hosted on almost any platform. It contains:

- Header and navigation.
- Hero section with primary booking CTA.
- Service cards.
- Booking request form.
- FAQ section.
- About section.
- Footer with contact details.

The booking form currently posts through `assets/js/site.js`, which stores demo requests in browser `localStorage`. This is for handoff review only. Production should replace that local behavior with a real `POST /api/bookings` call.

### `public-site/assets/js/site.js`

This file demonstrates the browser-side booking shape:

- Reads fields from the form.
- Generates a temporary booking ID.
- Stores the request in `localStorage`.
- Sends the visitor to `thank-you.html`.

The important part is the data shape. It maps directly to the production API contract in `backend-blueprints/booking-system/API_CONTRACT.md`.

### `public-site/admin.html`

This is a visual prototype for dispatch/admin staff. It proves the intended interface:

- Metrics.
- Booking table.
- Pending status.
- Demo booking seed button.
- Clear demo data button.

Production must not use this as a secure admin portal. The real admin portal must read from a server-side database and enforce server-side authentication.

## Backend Blueprint Layer

The backend blueprint documents the expected production behavior without binding the client to one vendor.

The core system is:

- `POST /api/bookings` for public booking intake.
- `GET /api/admin/bookings` for protected admin listing.
- `PATCH /api/admin/bookings/:id` for protected status updates.
- Email automation for dispatch and passenger notifications.
- Database persistence for operational records.

## Reference Implementation Layer

The reference implementation is a staged Next.js API build. It is intentionally organized as code modules:

- `lib/booking-validation.js`: validates and normalizes ride requests.
- `lib/booking-ids.js`: creates human-friendly booking IDs.
- `lib/database.js`: database boundary and SQL examples.
- `lib/email-service.js`: email provider boundary.
- `lib/auth.js`: admin session and password-hash boundary.
- `lib/rate-limit.js`: request throttling boundary.
- `lib/audit-log.js`: status-change audit helper.
- `app/api/bookings/route.js`: production booking intake route.
- `app/api/admin/login/route.js`: admin login route.
- `app/api/admin/logout/route.js`: admin logout route.
- `app/api/admin/bookings/route.js`: admin booking list route.
- `app/api/admin/bookings/[id]/route.js`: admin booking update route.

The reference code is not meant to be blindly pasted into an unknown host. It is a clean implementation map that a developer can adapt after choosing the database, auth provider, and email provider.

## Production Gating

Before the dynamic systems go live, the client should confirm:

- The database exists and backups are enabled.
- Admin password storage uses hashes, not plain text.
- Email provider domain verification is complete.
- Booking submissions are rate limited.
- Passenger data is not exposed in public files.
- Status changes are logged.
- The static demo behavior has been removed or disabled.

