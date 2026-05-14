# TiSaTo Handoff Package

This repository is a structured handoff package for TISATO Transportation Services.

It includes a static public website, a runnable production starter app, production blueprints, and annotated reference code for the booking system, admin portal, and email automation.

## Start Here

Read `README_FIRST.md` first. It explains how the package is organized and how the client should move from static hosting to a production booking system.

## What This Package Includes

- `public-site/`
  Static public website files and a demo admin prototype.

- `production-starter/`
  Runnable Node.js application with real booking API routes, admin login sessions, server-side JSON persistence, audit logging, and file-based email outbox automation.

- `backend-blueprints/`
  API contracts, data model, database schema, admin requirements, and email automation maps.

- `reference-implementation/`
  Annotated Next.js API reference code for booking intake, admin login/logout, protected booking listing, booking status updates, email service boundaries, auth boundaries, and database boundaries.

- `deployment/`
  Hosting guides, environment variable checklist, launch checklist, and security notes.

- `client-facing/`
  Client-ready handoff letter and scope summary.

- `source-recovery/`
  Recovered planning notes and legacy reference material.

## Static Website Preview

Open:

```txt
public-site/index.html
```

The static site can be hosted immediately on Netlify, Vercel, Cloudflare Pages, GitHub Pages, or cPanel-style hosting.

## Runnable Starter App

Run:

```bash
cd production-starter
ADMIN_EMAIL=owner@example.com ADMIN_PASSWORD="<local-demo-password>" npm start
```

Then open:

```txt
http://localhost:8080
http://localhost:8080/admin.html
```

## Production Warning

The `public-site/` admin prototype and booking demo are intentionally static. They are for review and planning only.

Production booking, admin, and email automation require:

- Backend API
- Database
- Admin authentication
- Email provider
- Environment variables
- Launch/security checks

Those pieces are specified in `backend-blueprints/`, demonstrated in `reference-implementation/`, and implemented as a runnable baseline in `production-starter/`.
