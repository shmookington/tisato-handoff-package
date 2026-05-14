# Reference Implementation

This folder contains annotated production-style code for the booking, admin, and email systems.

It is not intended to be copied into production without adaptation. The client or their technical provider must first choose:

- Hosting platform
- Database
- Authentication strategy
- Email provider
- Data retention policy

Once those choices are made, the files in `nextjs-api/` provide the recommended structure for a Next.js implementation.

## Recommended Build Order

1. Create a new private repository owned by the client.
2. Add the static site or Next.js frontend.
3. Add database and environment variables.
4. Implement `lib/database.js`.
5. Implement `lib/email-service.js`.
6. Implement admin authentication in `lib/auth.js`.
7. Connect `POST /api/bookings`.
8. Connect admin booking list and status update routes.
9. Add automated tests.
10. Complete the launch checklist.

