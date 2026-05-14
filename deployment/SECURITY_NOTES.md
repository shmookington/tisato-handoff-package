# Security Notes

## Static Website

Static files are safe to host publicly as long as they do not contain secrets.

Do not include:
- API keys
- Admin passwords
- Database URLs
- Email provider tokens
- SMS provider credentials
- Private customer data

## Booking Data

Ride requests may include personal information. Production storage should include:
- HTTPS
- Admin authentication
- Access logging
- Data retention policy
- Backup policy
- Staff access control

## Admin Portal

The included admin page is a prototype. A production portal must include:
- Secure authentication
- Server-side authorization
- Session expiration
- Password reset/recovery process
- Audit log for status changes
- No client-side-only password checks

