# TiSaTo Transportation Services — Master Checklist

> **Project:** NEMT Website Rebrand
> **Client:** Tisato Transportation Services INC
> **Last Updated:** March 18, 2026

---

## Part 1: Project Setup & Foundation

- [ ] 1.1 Initialize project (framework selection — Next.js / Vite / etc.)
- [ ] 1.2 Set up project directory structure
- [ ] 1.3 Configure build tooling, linting, formatting
- [ ] 1.4 Set up version control (Git init, `.gitignore`)
- [ ] 1.5 Install core dependencies (fonts, icons, etc.)
- [ ] 1.6 Create environment variable structure (`.env.example`)
- [ ] 1.7 Set up deployment pipeline (Vercel / Netlify — TBD by client)

---

## Part 2: Design System Implementation

- [ ] 2.1 **Color Tokens**
  - [ ] Define CSS custom properties for all brand colors
  - [ ] Deep Navy `#0D2B4E`, Warm Blue `#1A6BB5`, Sky Accent `#4EA8DE`
  - [ ] Soft White `#F8FAFC`, Pure White `#FFFFFF`
  - [ ] Charcoal `#1E293B`, Gray `#64748B`
  - [ ] Success Green `#10B981`, Error Red `#EF4444`
- [ ] 2.2 **Typography**
  - [ ] Import Playfair Display (or Lora) + Inter (or DM Sans)
  - [ ] Self-host fonts for performance (`font-display: swap`)
  - [ ] Define type scale (Display 56/36, H2 40/28, H3 28/22, Body 18/16, Small 14)
  - [ ] Set line-heights (headings 1.2, body 1.7) and weights (700, 400, 600)
- [ ] 2.3 **Spacing System**
  - [ ] Define 8px base unit spacing scale (8, 16, 24, 32, 48, 64, 96, 128)
  - [ ] Section padding: 96px desktop / 64px mobile
  - [ ] Card padding: 32px / 24px mobile
  - [ ] Button padding: 16px 32px / 12px 24px mobile
- [ ] 2.4 **Button Components**
  - [ ] Primary button (warm blue bg, white text, 8px radius, 48px height)
  - [ ] Secondary button (white bg, navy border, navy text)
  - [ ] CTA button (56px height, bold label)
  - [ ] Hover, focus, active, disabled states for all
- [ ] 2.5 **Card Components**
  - [ ] Base card (white bg, 12px radius, shadow `0 4px 16px rgba(0,0,0,0.08)`)
  - [ ] Hover state (deeper shadow + Y-4px translate)
- [ ] 2.6 **Icon System**
  - [ ] Choose icon library (outline style)
  - [ ] 24px standard / 32px feature cards
  - [ ] Default color: warm blue

---

## Part 3: Layout & Navigation

- [ ] 3.1 **Global Layout Shell**
  - [ ] Header + main content + footer structure
  - [ ] Responsive container (max-width, padding)
- [ ] 3.2 **Desktop Navigation**
  - [ ] Sticky header (appears after 80px scroll)
  - [ ] Transparent on hero → white background on scroll
  - [ ] Logo left
  - [ ] Menu items center: Home, Services, FAQs, Contact Us, About
  - [ ] CTA right: "Schedule My Ride" (primary button)
  - [ ] Phone number visible: (844) 884-7286
- [ ] 3.3 **Mobile Navigation**
  - [ ] Hamburger icon (right side)
  - [ ] Full-screen overlay menu on open
  - [ ] Smooth open/close transitions
- [ ] 3.4 **Mobile Sticky Bottom Bar**
  - [ ] 3 actions: Schedule | Call | Chat (icons + labels)
  - [ ] Appears on scroll, hides on scroll up
  - [ ] `tel:` link for Call, booking link for Schedule, chat trigger for Chat
- [ ] 3.5 **Footer**
  - [ ] Contact info, phone, email, address
  - [ ] Hours of operation
  - [ ] Navigation links
  - [ ] Social links (if applicable)
  - [ ] Copyright

---

## Part 4: Home Page

- [ ] 4.1 **Hero Section**
  - [ ] Full-viewport video background (reuse existing MP4)
  - [ ] Video: autoplay, muted, loop, H.264, max 10MB
  - [ ] Static image fallback on mobile
  - [ ] Dark overlay for text readability
  - [ ] Headline: "A Ride Can Change Everything."
  - [ ] Subheadline: "Transportation should never stand in the way of your health."
  - [ ] Primary CTA: "Schedule My Ride" → booking
  - [ ] Secondary CTA: "Call Us Now" → `tel:(844)884-7286`
  - [ ] Fade-in animation on load (0.8s ease)
  - [ ] Animated scroll chevron
- [ ] 4.2 **How We Operate (3-Step Process)**
  - [ ] Step 1: Book online or call → confirmation
  - [ ] Step 2: On-time door-to-door pickup + mobility assistance
  - [ ] Step 3: Safe, comfortable arrival
  - [ ] Horizontal step cards (desktop) / vertical stack (mobile)
  - [ ] Numbered icons
- [ ] 4.3 **Services Overview Grid**
  - [ ] 3-column grid (desktop) / 1-column (mobile)
  - [ ] Icon + label tiles for all 9 services
  - [ ] Medical Appointments, Dialysis Centers, Acute Care, Pharmacies, Adult Day Care, Chemo, Hospital Admit/Discharge, PT/OT/Speech, Other Healthcare Trips
- [ ] 4.4 **Trust / Proof Section**
  - [ ] 3 stat counters with count-up animation on scroll
  - [ ] "ADA-Compliant Vehicles"
  - [ ] "CPR-Trained Drivers"
  - [ ] "Background-Checked Staff"
  - [ ] Trust copy: "Locally owned, family operated, serving Central Florida."
  - [ ] Optional: facility partner logos
- [ ] 4.5 **Final CTA Block**
  - [ ] Headline: "Ready to schedule your first ride?"
  - [ ] Primary: "Book Online Now"
  - [ ] Secondary: "Call (844) 884-7286"
  - [ ] Tertiary: "Chat With Us" (triggers AI widget)

---

## Part 5: Services Page

- [ ] 5.1 Hero banner (image + overlay text)
- [ ] 5.2 Full services list with icons + 2-3 sentence descriptions each
- [ ] 5.3 Coverage area section (Winter Garden, Clermont, Central FL)
- [ ] 5.4 Vehicle section (ADA-compliant, wheelchair-accessible, securement systems)
- [ ] 5.5 Recurring rides callout (dialysis/therapy patients)
- [ ] 5.6 CTA: "Schedule My Ride"

---

## Part 6: FAQs Page

- [ ] 6.1 Hero / page header
- [ ] 6.2 Accordion component (expand/collapse, smooth animation)
- [ ] 6.3 Retain 4 existing FAQs
- [ ] 6.4 Add new FAQs (target 8-10 total)
  - [ ] Do you offer recurring ride scheduling?
  - [ ] What areas do you serve?
  - [ ] Are your vehicles wheelchair accessible?
  - [ ] How far in advance should I book?
  - [ ] What if I need to cancel or reschedule?
- [ ] 6.5 Bottom CTA: "Still have questions? Chat with us or give us a call."

---

## Part 7: Contact Us Page

- [ ] 7.1 Two-column layout (desktop) / stacked (mobile)
- [ ] 7.2 Booking form (left column — see Part 9)
- [ ] 7.3 Contact info panel (right column)
  - [ ] Phone: (844) 884-7286 (`tel:` linked)
  - [ ] Email
  - [ ] Address: 4071 LB McLeod Rd, Ste D #220, Orlando, FL 32811
  - [ ] Hours: Mon–Fri 8AM–6PM | Weekends by appointment
- [ ] 7.4 Google Maps embed
- [ ] 7.5 WhatsApp direct link (if applicable)

---

## Part 8: About Page

- [ ] 8.1 Brand story section (existing copy, refined for readability)
- [ ] 8.2 Core Values section (5 icon cards)
  - [ ] Safety
  - [ ] Compassion
  - [ ] Reliability
  - [ ] Integrity
  - [ ] Excellence
- [ ] 8.3 Owner/founder section (photo + bio — client to provide)
- [ ] 8.4 Optional: driver profiles / team section
- [ ] 8.5 CTA: "Schedule Your Ride"

---

## Part 9: Online Booking System

- [ ] 9.1 **Step 1 — Passenger Info**
  - [ ] Full name (required)
  - [ ] Phone number (required)
  - [ ] Email (required)
  - [ ] Mobility needs dropdown: Walking, Wheelchair, Stretcher, Other
  - [ ] "Next →" button
- [ ] 9.2 **Step 2 — Trip Details**
  - [ ] Pickup address (required)
  - [ ] Destination address (required)
  - [ ] Date picker (required)
  - [ ] Time picker (required)
  - [ ] Trip type radio: One-way / Round trip
  - [ ] Recurring toggle → frequency dropdown (Daily, Weekly, MWF, TThF)
  - [ ] Insurance radio: Medicaid / Private Insurance / Self-Pay
  - [ ] Notes textarea (optional)
  - [ ] "Submit Ride Request" button
- [ ] 9.3 **Form Behavior**
  - [ ] Auto-advance after Step 1 validation
  - [ ] Progress bar (Step 1 of 2 / Step 2 of 2)
  - [ ] Validation on blur, inline errors
  - [ ] Disabled submit until all required fields valid
  - [ ] hCaptcha (invisible)
- [ ] 9.4 **Post-Submission**
  - [ ] `/thank-you` page with confirmation message
  - [ ] Next steps bullets
  - [ ] CTA: "Call us to confirm faster: (844) 884-7286"
- [ ] 9.5 **Backend (Phase 2)**
  - [ ] Internal email notification to dispatch
  - [ ] Auto-reply email to passenger
  - [ ] Email service integration (GHL / Mailchimp / SendGrid — TBD)

---

## Part 10: AI Chat Widget

- [ ] 10.1 **Desktop UI**
  - [ ] Fixed bottom-right icon (60×60 collapsed)
  - [ ] Expanded panel (360×560)
  - [ ] Header: Tisato logo + "Tisato Assistant"
  - [ ] Minimize/close controls
- [ ] 10.2 **Mobile UI**
  - [ ] Bottom-right icon
  - [ ] Full-screen overlay on open
  - [ ] Swipe-down or X to close
- [ ] 10.3 **Chat Interface**
  - [ ] Message bubbles (user vs. bot styling)
  - [ ] Suggested question chips (horizontal scroll)
  - [ ] Typing indicator animation
  - [ ] "Start over" button
- [ ] 10.4 **Pre-Scripted Responses (Phase 1)**
  - [ ] "How do I schedule a ride?"
  - [ ] "Do you accept Medicaid?"
  - [ ] "Are your vehicles wheelchair accessible?"
  - [ ] "What areas do you serve?"
  - [ ] "What are your hours?"
  - [ ] Out-of-scope fallback with Call / Book CTAs
- [ ] 10.5 **High-Intent Triggers**
  - [ ] book/schedule/ride → booking steps + CTA
  - [ ] Medicaid/insurance/pay → coverage + call CTA
  - [ ] wheelchair/accessible → ADA confirmation
  - [ ] recurring/dialysis/weekly → recurring scheduling info
  - [ ] price/cost/how much → private pay + call for estimate
- [ ] 10.6 **Guardrails**
  - [ ] Never quote pricing
  - [ ] Never guarantee availability
  - [ ] Never give medical advice
  - [ ] Never make unverified coverage promises
  - [ ] Never engage off-topic
- [ ] 10.7 **CTA Buttons in Chat**
  - [ ] "Schedule a Ride" → booking form
  - [ ] "Call Us Now" → `tel:(844)884-7286`
  - [ ] "View Our Services" → Services page
- [ ] 10.8 **AI Backend (Phase 2)**
  - [ ] Platform selection (Voiceflow / Botpress / Landbot / Custom OpenAI)
  - [ ] Knowledge base via structured JSON
  - [ ] RAG pipeline (if custom)

---

## Part 11: Lead Capture & Email Automation

- [ ] 11.1 Capture points wired: booking form, contact form, chat widget
- [ ] 11.2 Data collected: name, phone, email, trip details, mobility, insurance, source, timestamp
- [ ] 11.3 **Email Flows**
  - [ ] Ride request → confirmation + trip summary (immediate)
  - [ ] Contact form → "We'll be in touch within 2 hours" (immediate)
  - [ ] Ride request no follow-up → "Still need a ride?" + CTA (24h later)
- [ ] 11.4 Email service configured (GHL / Mailchimp / SendGrid — TBD)

---

## Part 12: Performance & Optimization

- [ ] 12.1 **Core Web Vitals**
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1
- [ ] 12.2 **Asset Optimization**
  - [ ] Hero video: max 10MB, H.264, static fallback on mobile
  - [ ] Images: WebP, lazy load below fold, max 500KB
  - [ ] Fonts: self-hosted, `font-display: swap`
- [ ] 12.3 **Build Optimization**
  - [ ] Minified CSS/JS
  - [ ] Gzip/Brotli compression
  - [ ] CDN for static assets
- [ ] 12.4 Lighthouse audit — all pages score 90+

---

## Part 13: Responsive & Mobile

- [ ] 13.1 **Breakpoints implemented**
  - [ ] Mobile (< 640px): single column, 44px tap targets, no hover
  - [ ] Tablet (640–1024px): 2-column grids
  - [ ] Desktop (> 1024px): full layout
- [ ] 13.2 Mobile sticky bottom bar functional
- [ ] 13.3 Hero: static image on mobile instead of video
- [ ] 13.4 Booking form: full-width, large inputs on mobile
- [ ] 13.5 All phone numbers `tel:` linked (tap to call)
- [ ] 13.6 Chat widget: full-screen overlay on mobile
- [ ] 13.7 Font sizes never below 16px (prevent iOS zoom)

---

## Part 14: Accessibility (WCAG 2.1 AA)

- [ ] 14.1 Keyboard navigation for all interactive elements
- [ ] 14.2 Visible focus indicators on all tab stops
- [ ] 14.3 Alt text on all images
- [ ] 14.4 ARIA labels on icon-only buttons
- [ ] 14.5 Color contrast minimum 4.5:1 for all text
- [ ] 14.6 Form labels above inputs (not placeholder-only)
- [ ] 14.7 Skip-to-content link

---

## Part 15: Security

- [ ] 15.1 HTTPS enforced
- [ ] 15.2 CSRF protection on all forms
- [ ] 15.3 Input sanitization (XSS prevention)
- [ ] 15.4 hCaptcha on booking and contact forms
- [ ] 15.5 Rate limiting: max 5 submissions per IP per hour
- [ ] 15.6 API keys in environment variables only
- [ ] 15.7 GDPR cookie consent banner

---

## Part 16: Testing & QA

- [ ] 16.1 Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] 16.2 Mobile device testing (iOS Safari, Android Chrome)
- [ ] 16.3 Form validation testing (all fields, edge cases)
- [ ] 16.4 Navigation link verification (all pages, CTAs)
- [ ] 16.5 Chat widget interaction testing
- [ ] 16.6 Performance audit (Lighthouse, WebPageTest)
- [ ] 16.7 Accessibility audit (axe, manual keyboard nav)
- [ ] 16.8 SEO validation (titles, meta descriptions, headings, semantic HTML)

---

## Part 17: Deployment & Launch

- [ ] 17.1 Hosting platform confirmed (Vercel / Netlify / GHL — awaiting client)
- [ ] 17.2 Domain / DNS configuration
- [ ] 17.3 SSL certificate active
- [ ] 17.4 Analytics configured (GA4 / tracking events)
- [ ] 17.5 Call tracking number set up
- [ ] 17.6 Final client review & sign-off
- [ ] 17.7 Go live

---

## Open Questions (Blocking Items)

- [ ] ❓ Keep GHL or migrate to new CMS/hosting?
- [ ] ❓ Logo file in SVG or high-res PNG?
- [ ] ❓ Professional photos available (team, vehicles, riders)?
- [ ] ❓ Email service: GHL, Mailchimp, or SendGrid?
- [ ] ❓ Preferred AI provider for chat widget?
- [ ] ❓ Chat widget 24/7 or business hours only?
- [ ] ❓ Spanish language support needed?
- [ ] ❓ Medicaid broker integrations (LogistiCare, MTM)?
- [ ] ❓ Facility partner logos available?
