# TISATO Production Starter

This folder is a runnable Node.js starter app for the booking system, admin portal, and email automation workflow.

It is intentionally dependency-light so the client can inspect the actual implementation without framework noise.

## Run It Locally

```bash
cd production-starter
npm install
ADMIN_EMAIL=owner@example.com ADMIN_PASSWORD="<local-demo-password>" npm start
```

Open:

```txt
http://localhost:8080
http://localhost:8080/admin.html
```

For production, generate a password hash:

```bash
npm run hash-password -- "replace-with-real-admin-password"
```

Then set:

```bash
ADMIN_PASSWORD_HASH=pbkdf2_sha256$...
ADMIN_SESSION_SECRET=replace-with-a-long-random-secret
```

## Included Code

- `server.js`
  Starts the HTTP server and wires API routes plus static files.

- `src/http/`
  Small routing, JSON parsing, cookie, response, and static-file helpers.

- `src/services/bookings.js`
  Creates booking records, validates passenger input, rate-limits submissions, writes audit events, and queues emails.

- `src/services/admin.js`
  Handles admin login, logout, cookie sessions, password verification, and protected route access.

- `src/services/email.js`
  Queues email messages to `data/outbox/` so a production email provider can replace the file-based transport later.

- `src/storage/`
  JSON persistence layer with atomic writes for bookings, email logs, and audit logs.

- `src/security/`
  Password hashing, signed sessions, and in-memory rate limiting.

- `public/`
  Public booking UI, thank-you page, and admin dashboard UI.

## Data Files

Runtime data is stored in:

```txt
data/bookings.json
data/audit-log.json
data/email-log.json
data/outbox/
```

This keeps the starter self-contained. In production, swap the storage modules for Postgres, Supabase, Neon, or another managed database.

Set `DATA_DIR=/secure/server/path` if runtime data should live outside the application folder.

## Production Upgrade Path

1. Replace JSON storage with a database.
2. Replace file outbox emails with Resend, SendGrid, Postmark, or another provider.
3. Set `ADMIN_PASSWORD_HASH` and remove local `ADMIN_PASSWORD`.
4. Set a long random `ADMIN_SESSION_SECRET`.
5. Deploy behind HTTPS.
6. Add backups, monitoring, and operational access controls.
