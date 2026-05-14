# Implementation Gates

These gates prevent the client from treating a static website prototype as a live operational system.

## Gate 1: Database

Production cannot accept live ride requests until a database is configured.

Required proof:
- A `bookings` table exists.
- The app can create a booking.
- The app can list bookings for an authenticated admin.
- Backups are enabled.

## Gate 2: Email

Production cannot promise dispatch notifications until email is configured.

Required proof:
- Sender domain is verified.
- Dispatch notification test succeeds.
- Passenger confirmation test succeeds.
- Email failures are logged.

## Gate 3: Admin Security

Production cannot expose passenger data until admin auth is complete.

Required proof:
- Login uses hashed password verification or a trusted auth provider.
- Admin session is HTTP-only.
- Admin API routes reject unauthenticated requests.
- Logout clears the session.

## Gate 4: Static Demo Removal

The demo `localStorage` booking behavior must either be removed or intentionally replaced.

Required proof:
- Public form sends to production API.
- `admin.html` is not treated as the live staff dashboard.
- Test booking reaches database and dispatch inbox.

