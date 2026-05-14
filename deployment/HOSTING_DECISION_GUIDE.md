# Hosting Decision Guide

## Static-Only Hosting

Best when the client wants the public website online quickly.

Compatible platforms:
- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages
- Traditional cPanel hosting

Uploads:
- Upload the contents of `public-site/`.

Limitations:
- Booking requests will only run as a browser demo unless connected to a backend or form service.
- Admin portal is a prototype only.
- Email automation will not run.

## Static Site Plus Form Service

Best when the client wants simple booking intake without a custom backend.

Recommended services:
- Netlify Forms
- Formspree
- Basin
- Jotform embed
- GoHighLevel form embed

Requirements:
- Replace the demo JavaScript booking behavior with the chosen form provider action.
- Route submissions to dispatch email.
- Store submissions in the provider dashboard.

Limitations:
- Admin portal may live in the form provider dashboard, not the website.
- Custom booking statuses and audit trails may be limited.

## Full Production App

Best when the client wants booking records, a real admin portal, and email automation.

Recommended stack:
- Frontend: static website or Next.js
- API: Next.js API routes, Express, Laravel, or serverless functions
- Database: Supabase Postgres, Neon Postgres, Firebase, or hosted MySQL
- Email: Resend, SendGrid, Postmark, or Mailgun
- Auth: Clerk, Supabase Auth, NextAuth, or custom admin password/session system

Benefits:
- Persistent booking records
- Secure admin login
- Email automation
- Status tracking
- Future SMS/A2P integration

