# TiSaTo Transportation Services — Website Rebrand Notes

> **Client:** Tisato Transportation Services INC
> **Spec Version:** 1.0 (March 2026)
> **Prepared by:** Goal Line Growth
> **Project Type:** NEMT (Non-Emergency Medical Transportation) Website Rebrand
> **Status:** 📝 Note-taking — nothing built yet

---

## 🎯 Project Summary

Dialysis-focused NEMT provider serving **Winter Garden, Clermont, and Central Florida**. Current site is a single-page layout on GHL — visually outdated, poor mobile experience, no booking system, no chat. Rebrand = modern, mobile-first, with online booking + AI chat widget.

**Target audience:** Seniors, patients with mobility challenges, caregivers, dialysis patients, healthcare facilities.

**Primary conversions:** Ride scheduling, phone calls, contact form submissions.

---

## 📄 Site Architecture (5 Pages)

| Page | Goal | Key Sections |
|------|------|-------------|
| **Home** | Capture interest, drive bookings | Hero, How We Operate, Services overview, Trust/Proof, CTA |
| **Services** | Show full service range | Service list, Coverage area, Vehicle info |
| **FAQs** | Answer questions, reduce friction | Accordion FAQ, CTA block |
| **Contact Us** | Capture leads + ride requests | Booking form, Phone, Map |
| **About** | Build trust | Story, Values, Team |

---

## 🧭 Navigation

### Desktop
- Sticky header (appears after 80px scroll)
- Transparent on hero → white background after scroll
- Logo (left) | Menu (center): Home, Services, FAQs, Contact Us, About | CTA (right): "Schedule My Ride"
- Phone number visible: **(844) 884-7286**

### Mobile
- Hamburger menu (right side) → full-screen overlay
- **Sticky bottom bar** (appears on scroll, hides on scroll up): Schedule | Call | Chat (icons + labels)

---

## 🎨 Design System

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Navy | `#0D2B4E` | Primary dark, headers, navbar |
| Warm Blue | `#1A6BB5` | Buttons, links, accents |
| Sky Accent | `#4EA8DE` | Hover states, icons, highlights |
| Soft White | `#F8FAFC` | Section backgrounds |
| Pure White | `#FFFFFF` | Cards, overlays |
| Charcoal | `#1E293B` | Body text |
| Gray | `#64748B` | Secondary text |
| Success Green | `#10B981` | Confirmation states |
| Error Red | `#EF4444` | Form errors |

### Typography

| Role | Font | Size |
|------|------|------|
| Display/Hero | Playfair Display or Lora (serif) | 56px / 36px mobile |
| H2 | Same serif | 40px / 28px |
| H3 | Same serif | 28px / 22px |
| Body | Inter or DM Sans | 18px / 16px |
| Small/Caption | Same sans-serif | 14px |

- Line-height: headings 1.2, body 1.7
- Weights: headings 700, body 400, emphasis 600

### Spacing
- Base: 8px | Scale: 8, 16, 24, 32, 48, 64, 96, 128px
- Section padding: 96px desktop / 64px mobile
- Card padding: 32px / 24px mobile
- Button padding: 16px 32px / 12px 24px mobile

### Components
- **Buttons:** Primary (warm blue bg, white text, 8px radius, 48px h), Secondary (white bg, navy border), CTA hero (56px h, bold)
- **Cards:** White bg, 12px radius, shadow `0 4px 16px rgba(0,0,0,0.08)`, hover: deeper shadow + Y-4px
- **Icons:** Outline style, 24px standard / 32px feature cards, warm blue default

---

## 📑 Page-by-Page Breakdown

### Home Page

| Section | Details |
|---------|---------|
| **Hero** | Full-viewport video bg (reuse existing MP4), autoplay/muted/loop, H.264, max 10MB. Mobile = static image fallback. Headline: *"A Ride Can Change Everything."* Sub: *"Transportation should never stand in the way of your health."* Primary CTA → booking, Secondary → tel link. Fade-in 0.8s. Scroll chevron. |
| **How We Operate** | 3-step cards: 1) Book online/call → confirmation 2) On-time pickup + mobility assist 3) Safe arrival. Horizontal desktop / vertical mobile. |
| **Services Overview** | 3-col grid (1-col mobile) of icon+label tiles: Medical Appts, Dialysis, Acute Care, Pharmacies, Adult Day Care, Chemo, Hospital Admit/Discharge, PT/OT/Speech, Other Healthcare Trips |
| **Trust/Proof** | 3 stat counters (count-up on scroll): ADA-Compliant Vehicles, CPR-Trained Drivers, Background-Checked Staff. Trust copy + optional partner logos. |
| **Final CTA** | Headline: *"Ready to schedule your first ride?"* Primary: Book Online, Secondary: Call, Tertiary: Chat |

### Services Page
- Hero banner (image + overlay text)
- Full list with icons + 2-3 sentence descriptions
- Coverage area: Winter Garden, Clermont, Central FL
- Vehicle section: ADA-compliant, wheelchair-accessible, securement systems
- Recurring rides callout for dialysis/therapy patients
- CTA: "Schedule My Ride"

### FAQs Page
- Accordion format — keep 4 existing + expand to 8-10 total
- Suggested additions: recurring scheduling, service areas, wheelchair access, advance booking, cancel/reschedule
- Bottom CTA: "Still have questions? Chat with us or give us a call."

### Contact Us Page
- Two-column desktop / stacked mobile
- Left: Booking form (see Booking System)
- Right: Contact info + Google Maps embed
- **Phone:** (844) 884-7286
- **Address:** 4071 LB McLeod Rd, Ste D #220, Orlando, FL 32811
- **Hours:** Mon–Fri 8AM–6PM | Weekends by appointment
- WhatsApp link (if applicable)

### About Page
- Brand story (existing copy, refined)
- 5 Core Values (icon cards): Safety, Compassion, Reliability, Integrity, Excellence
- Owner/founder section (photo + bio — client to provide)
- Optional: driver profiles / team section
- CTA: "Schedule Your Ride"

---

## 📋 Online Booking System

> **Model:** Request-and-confirm (no live calendar at launch). Calendly/Cal.com integration = Phase 2.

### 2-Step Form

**Step 1 — Passenger Info:**
- Full name (req), Phone (req), Email (req)
- Mobility needs dropdown: Walking, Wheelchair, Stretcher, Other
- Button: "Next →"

**Step 2 — Trip Details:**
- Pickup address (req), Destination (req)
- Date picker (req), Time picker (req)
- Trip type radio: One-way / Round trip
- Recurring toggle → if Yes: frequency dropdown (Daily, Weekly, MWF, TThF)
- Insurance radio: Medicaid / Private Insurance / Self-Pay
- Notes textarea (optional)
- Button: "Submit Ride Request"

### Behavior
- Auto-advance after Step 1 validation
- Progress bar (Step 1 of 2 / Step 2 of 2)
- Validate on blur, inline errors
- Disabled submit until all required fields valid
- hCaptcha (invisible)

### Post-Submission
- Redirect → `/thank-you` with confirmation message, next steps, call CTA
- Internal email to dispatch
- Auto-reply email to passenger

---

## 🤖 AI Chat Widget

### Interface
- **Desktop:** Fixed bottom-right, 60×60 collapsed → 360×560 panel. Tisato logo + "Tisato Assistant" header.
- **Mobile:** Bottom-right icon → full-screen overlay, swipe/X to close.
- Suggested question chips, typing indicator, "Start over" button

### Knowledge Base (Approved Topics)
Services, coverage area, vehicle types, booking process, hours, insurance, recurring scheduling, driver qualifications, cancellation process, contact info

### High-Intent Triggers
| Keywords | Action |
|----------|--------|
| book, schedule, ride | Booking steps + CTA |
| Medicaid, insurance, pay | Coverage explanation + call CTA |
| wheelchair, accessible | ADA compliance confirmation |
| recurring, dialysis, weekly | Recurring scheduling info |
| price, cost, how much | Private pay info + call for estimate |

### Guardrails — Bot must NEVER:
- Quote specific pricing
- Guarantee ride availability
- Provide medical advice
- Make coverage promises without verification
- Engage off-topic

### Implementation Options
- **Platform:** Voiceflow, Botpress, or Landbot
- **Custom:** Next.js + OpenAI API with RAG pipeline
- Knowledge base via structured JSON files

---

## 📧 Lead Capture & Email

### Capture Points
Booking form, Contact form, Chat widget (email capture on high-intent outside hours)

### Email Flows

| Trigger | Content | Timing |
|---------|---------|--------|
| Ride request submitted | Confirmation + trip summary | Immediate |
| Contact form submitted | "We'll be in touch within 2 hours" | Immediate |
| Ride request, no follow-up | "Still need a ride?" + CTA | 24h later |

Email service: Mailchimp, SendGrid, or GHL (client to confirm — GHL already in use)

---

## ⚡ Performance & Technical

### Core Web Vitals Targets
- LCP < 2.5s | FID < 100ms | CLS < 0.1

### Optimization
- Hero video: max 10MB, H.264, static fallback on mobile
- Images: WebP, lazy load below fold, max 500KB
- Fonts: self-hosted, `font-display: swap`
- Minified CSS/JS, Gzip/Brotli, CDN for static assets

### Breakpoints
| Breakpoint | Width | Notes |
|------------|-------|-------|
| Mobile | < 640px | Single column, 44px tap targets, no hover |
| Tablet | 640–1024px | 2-column grids |
| Desktop | > 1024px | Full layout |

### Accessibility (WCAG 2.1 AA)
Keyboard navigable, focus indicators, alt text, ARIA labels, 4.5:1 contrast, labels above inputs, skip-to-content link

### Security
HTTPS, CSRF, input sanitization, hCaptcha, rate limiting (5/IP/hr), env vars for API keys, GDPR cookie consent

---

## 🚀 Delivery Phases

### Phase 1 — Prototype (Monday Deliverable)
- [x] Home page redesign (full fidelity)
- [x] Mobile layout demonstrated
- [x] Booking form (2-step, front-end only)
- [x] Chat widget interface (pre-scripted, no AI backend)
- [x] Navigation structure

### Phase 2 — Full Build
- [ ] All 5 pages rebuilt
- [ ] Booking form → backend + email automation
- [ ] AI chat widget live with knowledge base
- [ ] Analytics + tracking events
- [ ] Performance optimization

---

## ❓ Open Questions for Client

1. Keep GHL or migrate to new CMS/hosting?
2. Logo file in SVG or high-res PNG?
3. Professional photos (team, vehicles, riders)?
4. Email service: GHL, Mailchimp, or SendGrid?
5. Preferred AI provider for chat widget?
6. Chat widget 24/7 or business hours only?
7. Spanish language support needed?
8. Specific Medicaid broker integrations (LogistiCare, MTM)?
9. Facility partner logos available?

---

## 📊 Success Metrics (First 90 Days)

| Metric | Target |
|--------|--------|
| Online ride requests | 20+/month |
| Phone calls from site | Track via call tracking |
| Chat sessions | 50+/month |
| Mobile bounce rate | < 50% |
| Page load time | < 3s on 4G |
| Form completion rate | > 60% |
