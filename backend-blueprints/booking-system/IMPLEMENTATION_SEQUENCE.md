# Booking Implementation Sequence

This sequence is intentionally staged so the client does not accidentally publish a form that collects personal data without secure storage and dispatch handling.

1. Choose backend host and database.
2. Create the `bookings` database table.
3. Create `POST /api/bookings`.
4. Add validation and sanitization.
5. Add rate limiting or captcha.
6. Add dispatch email notification.
7. Add passenger confirmation email.
8. Connect the public booking form to the API.
9. Test successful submission.
10. Test validation failure.
11. Test email delivery failure handling.
12. Connect admin portal listing.
13. Complete launch checklist.

