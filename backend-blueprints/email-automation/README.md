# Email Automation Blueprint

Production email automation should notify dispatch and passengers when ride requests are submitted or updated.

## Recommended Provider Options

- Resend
- Postmark
- SendGrid
- Mailgun
- SMTP from the client's domain host

## Required Emails

1. Dispatch notification
2. Passenger confirmation
3. Passenger follow-up if not confirmed
4. Admin status update notification, optional

## Delivery Rules

- A failed email should not erase a booking.
- Email failures should be logged.
- Dispatch notification should include full request details.
- Passenger confirmation should avoid sensitive medical detail.
- Passenger messages should include phone number and support instructions.

## Sender Requirements

- Use a domain-owned sender such as `noreply@tisatotransportationservices.com`.
- Verify SPF/DKIM/DMARC with the chosen provider.
- Send dispatch emails to `info@tisatotransportationservices.com` unless client chooses another inbox.

