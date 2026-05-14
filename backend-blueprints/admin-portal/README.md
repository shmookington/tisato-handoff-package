# Admin Portal Blueprint

The included `public-site/admin.html` is a static prototype that demonstrates the expected review interface. It is not secure and should not be used as a production admin portal.

## Production Requirements

- Admin login.
- Server-side session verification.
- Protected booking list.
- Booking detail view.
- Status update controls.
- Internal notes.
- Logout.
- Audit log.
- Password recovery or admin reset path.

## Recommended Views

1. Login
2. Dashboard
3. Booking list
4. Booking detail
5. Status update modal
6. Admin settings

## Recommended Admin Roles

- `owner`: full access
- `dispatcher`: booking review and status updates
- `viewer`: read-only access

## Required Security

- Passwords must be hashed.
- Sessions must be HTTP-only cookies or managed by a trusted auth provider.
- Admin routes must validate permissions on the server.
- Protected data must never rely on client-side-only checks.

