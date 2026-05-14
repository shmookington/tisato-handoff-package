# Admin User Stories

## Dispatcher

As a dispatcher, I need to see new ride requests in one list so I can respond quickly.

Acceptance criteria:
- New requests appear with passenger name, phone, ride date, pickup, destination, and status.
- Most recent requests appear first.
- Pending requests are visually distinct.

## Dispatcher

As a dispatcher, I need to open a booking and change its status so the team can track progress.

Acceptance criteria:
- Status can move from `pending` to `reviewed`, `confirmed`, `needs_information`, `cancelled`, or `completed`.
- Each update records timestamp and admin user.
- Internal notes are visible only to staff.

## Owner

As an owner, I need to control admin access so only authorized staff can see passenger details.

Acceptance criteria:
- Admin users must log in.
- Sessions expire.
- Passwords are not stored in plain text.
- Staff can be removed when no longer authorized.

