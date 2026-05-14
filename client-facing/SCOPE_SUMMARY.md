# Scope Summary

## Phase 1: Public Static Website

Purpose: restore the public-facing online presence.

Included:
- Homepage content
- Services section
- Booking request interface
- FAQ section
- About section
- Contact information
- Mobile-responsive styling
- Static thank-you page

Status: included in `public-site/`.

## Phase 2: Booking System

Purpose: turn ride request submissions into persistent operational records.

Required:
- Backend API
- Database
- Spam/rate protection
- Validation
- Dispatch notification
- Passenger confirmation

Status: specified in `backend-blueprints/booking-system/`.

## Phase 3: Admin Portal

Purpose: allow authorized staff to review, update, and manage ride requests.

Required:
- Secure login
- Session management
- Booking list/detail pages
- Status updates
- Audit trail
- Password reset or admin recovery process

Status: prototype included at `public-site/admin.html`; production requirements are specified in `backend-blueprints/admin-portal/`.

## Phase 4: Email Automation

Purpose: notify dispatch and passengers during the ride request lifecycle.

Required:
- Verified sender email
- Email provider account
- Dispatch notification template
- Passenger confirmation template
- Reminder/follow-up templates
- Delivery logs

Status: specified in `backend-blueprints/email-automation/`.

