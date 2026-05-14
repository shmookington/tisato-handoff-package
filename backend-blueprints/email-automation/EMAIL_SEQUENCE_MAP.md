# Email Sequence Map

## Booking Submitted

Trigger:
- `POST /api/bookings` succeeds.

Emails:
- Dispatch notification immediately.
- Passenger confirmation immediately.

## Booking Needs Information

Trigger:
- Admin changes status to `needs_information`.

Emails:
- Passenger action-needed email.

## Booking Confirmed

Trigger:
- Admin changes status to `confirmed`.

Emails:
- Passenger confirmation update.
- Optional internal dispatch copy.

## 24-Hour Follow-Up

Trigger:
- Booking remains `pending` or `needs_information` for 24 hours.

Emails:
- Internal dispatch reminder.
- Optional passenger follow-up if appropriate.

