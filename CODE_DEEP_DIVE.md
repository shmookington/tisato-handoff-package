# Code Deep Dive

This handoff is split into five layers:

1. `public-site/`
   The hostable static website and prototype interactions.

2. `backend-blueprints/`
   Contracts, schemas, workflow maps, and production requirements.

3. `visual-reference/`
   Polished static visual references for the homepage, booking flow, admin portal, and email automation.

4. `production-starter/`
   Runnable Node.js starter code for booking intake, admin sessions, status updates, audit logs, and email outbox automation.

5. `reference-implementation/`
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

## Visual Reference Layer

`visual-reference/` is a client-facing screen reference package. It provides rebuild direction rather than source-code recovery, establishing layout, tone, interaction states, and visual hierarchy.

The folder includes:

- `index.html`: visual reference hub and design system overview.
- `homepage-reference.html`: public website direction with hero, service cards, process steps, trust messaging, and booking CTA.
- `booking-flow-reference.html`: multi-step ride request experience with interactive passenger, trip, mobility, and review states.
- `admin-portal-reference.html`: dispatch portal reference with metrics, booking queue, selected trip details, status controls, and activity log.
- `email-reference.html`: email automation references for dispatch alerts, passenger confirmations, and passenger status updates.
- `assets/css/visual-reference.css`: shared design system, layout, responsive behavior, and motion.
- `assets/js/visual-reference.js`: lightweight interactivity for tabs, booking flow steps, queue preview states, and selectable mobility options.

## Production Starter Layer

`production-starter/` is the actual executable baseline. It can be run locally with Node.js and does not require third-party packages.

The starter app includes:

- `server.js`: Node HTTP server that wires API routes and static files.
- `src/http/router.js`: lightweight route matcher with dynamic `:id` parameters.
- `src/services/bookings.js`: booking creation, validation, rate limiting, audit logging, and email automation orchestration.
- `src/services/admin.js`: admin login, logout, password checks, signed cookies, and protected route access.
- `src/storage/json-store.js`: atomic JSON read/write boundary that can later be replaced with a database.
- `src/security/passwords.js`: PBKDF2 password hashing and timing-safe verification.
- `src/security/sessions.js`: signed admin session cookies with expiration.
- `src/templates/email-templates.js`: HTML templates for dispatch notifications and passenger updates.
- `public/assets/js/booking.js`: browser booking form submission to the real API.
- `public/assets/js/admin.js`: admin dashboard fetching protected bookings and sending status updates.

This layer deliberately stores demo runtime data in `production-starter/data/`. That makes the workflow reviewable without requiring database credentials. For production, the storage modules should be swapped for Postgres, Supabase, Neon, or another managed database.

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
