# Booking System Blueprint

The static site includes a booking form prototype. Production booking requires a backend that validates requests, stores records, notifies dispatch, and returns a booking reference to the passenger.

## Production Responsibilities

- Validate required fields.
- Rate-limit submissions.
- Store ride requests in a database.
- Generate a booking ID.
- Send dispatch notification.
- Send passenger confirmation.
- Expose booking data to the admin portal.
- Protect customer data.

## Recommended Data Flow

1. Passenger submits booking form.
2. Frontend sends `POST /api/bookings`.
3. API validates and sanitizes data.
4. API writes booking to database.
5. API queues email notifications.
6. API returns `{ success: true, bookingId }`.
7. Passenger sees thank-you page.
8. Admin portal lists booking as `pending`.

## Required Statuses

- `pending`
- `reviewed`
- `confirmed`
- `needs_information`
- `cancelled`
- `completed`

## Minimum Production Features

- Passenger name, phone, and email.
- Pickup and destination address.
- Date and time.
- Trip type.
- Mobility needs.
- Insurance/payment note.
- SMS/contact consent.
- Internal notes.
- Status tracking.
- Created and updated timestamps.

