# Product Requirements Document (PRD)

## Emerald Window Tinting — Website Rebuild

---

## 1. Overview

**Company:** Emerald Window Tinting (formerly Halal Tints)
**Location:** Germantown, MD 20876
**Service Area:** DMV (DC, Maryland, Virginia)
**Phone:** (240) 756-5906
**Email:** emeraldwindowtinting@gmail.com *(update to Emerald-branded email when available)*
**Instagram:** [@emeraldwindowtinting](https://www.instagram.com/emeraldwindowtinting/)
**Hours:** Drop Offs by Appointments ONLY, From 9am-6pm
**Current Site:** [halaltints.com](https://www.halaltints.com/)

**Mission:** Build a premium, mobile-first marketing site that positions Emerald Window Tinting as the go-to high-end window tinting provider in the DMV area. The site should convert visitors into leads — not display pricing.

---

## 2. Goals & Success Metrics

| Goal | Metric |
|---|---|
| Generate qualified leads | Form submissions, calls, texts, emails per week |
| Rank for high-intent local keywords | Top 5 Google Maps + organic for target terms |
| Establish premium brand perception | Bounce rate < 40%, avg session > 2 min |
| Mobile-first experience | 95+ Lighthouse mobile performance score |

---

## 3. Brand & Visual Identity

### 3.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--emerald` | `#50C878` | Primary accent, CTAs, highlights |
| `--emerald-dark` | `#2E8B57` | Hover states, gradients |
| `--emerald-glow` | `#00FF7F` | Neon glow accents (subtle) |
| `--black` | `#0A0A0A` | Backgrounds, primary text on light |
| `--black-card` | `#111111` | Card / glass surfaces |
| `--white` | `#FFFFFF` | Primary text on dark, section bg |
| `--white-muted` | `#FFFFFFB3` | Secondary text, 70% opacity |
| `--glass-bg` | `rgba(255,255,255,0.06)` | Glassmorphism card fill |
| `--glass-border` | `rgba(255,255,255,0.12)` | Glassmorphism border |

### 3.2 Typography

| Context | Typeface | Weight | Notes |
|---|---|---|---|
| Hero headline | **PP Hatton** | Bold / Ultrabold | Large display sizes (clamp-based fluid) |
| Section headings | PP Hatton or system sans | Medium–Bold | Maintain premium feel |
| Body / UI | `Inter` or `General Sans` | Regular 400 / Medium 500 | Clean, modern, highly legible |
| Buttons / Labels | Body typeface | Semi-bold 600 | ALL CAPS or Title Case |

**Sizing philosophy:** Big, bold headlines with generous line-height. Minimum body 16 px on mobile. Hero headings should be `clamp(2.5rem, 8vw, 6rem)` or similar.

### 3.3 Design System — Glassmorphism

- **Glass cards:** `backdrop-filter: blur(16px)`, semi-transparent fill, subtle 1 px border (`--glass-border`), soft shadow.
- **Dark mode default.** Entire site on near-black background. Glass surfaces float above.
- **Depth:** Use layered glass panels with varying opacity to create spatial depth.
- **Gradients:** Subtle emerald-to-transparent radial gradients as background accents behind sections — never overwhelming.
- **Imagery:** Full-bleed, high-quality photos with dark overlays where text sits above.

### 3.4 Spacing & Layout Philosophy

- **Generous whitespace.** Every section breathes — minimum `clamp(80px, 12vh, 160px)` vertical padding between sections.
- **Few words.** Headlines ≤ 6 words. Subheadings ≤ 15 words. Body copy kept to 2–3 short sentences max per block.
- **Even rhythm.** Consistent vertical spacing from top to bottom — no section should feel crammed or suddenly spacious relative to neighbors.
- **Content width:** Max `1200px` centered, with full-bleed backgrounds where needed.
- **Mobile grid:** Single-column, stacked layout. No side-by-side on small screens unless it's a 2-col icon grid.
- **Desktop grid:** 12-column CSS grid or flexbox, 2–3 columns for service cards, gallery.

---

## 4. SEO Strategy (DMV / High-End Clients)

### 4.1 Target Keywords

| Priority | Keywords |
|---|---|
| **Primary** | window tinting rockville md, window tint dmv, ceramic window tint maryland, car window tinting near me rockville |
| **Secondary** | best window tinting dc area, luxury car window tint maryland, auto tint germantown md, paint protection film dmv |
| **Long-tail** | professional ceramic window tinting rockville maryland, carbon window film installer near rockville, tint removal dmv area |
| **Service** | glass coating rockville, windshield tint maryland, tint removal near me germantown |

### 4.2 On-Page SEO Requirements

- **Title tag format:** `{Service} in Rockville, MD | Emerald Window Tinting`
- **Meta descriptions:** Unique per page, include CTA + location + differentiator. 150–160 chars.
- **H1:** One per page, keyword-rich, natural language.
- **Schema markup:** `LocalBusiness`, `AutoRepair`, `Service`, `Review`, `FAQPage` structured data (JSON-LD).
- **Open Graph & Twitter cards:** Custom image (logo + car), title, description per page.
- **Canonical URLs:** Self-referencing canonicals on every page.
- **Alt text:** Descriptive alt on every image (`"Ceramic window tint on black BMW 5 Series in Rockville MD"`).
- **Internal linking:** Every service page links to related services + CTA.
- **Mobile-first indexing ready:** All content accessible without JS interaction.

### 4.3 Technical SEO

- Sitemap.xml (auto-generated)
- Robots.txt (allow all, block admin/api routes)
- Page speed: target < 2s LCP on mobile (compress images, lazy load below fold, minimal JS)
- Core Web Vitals: green across CLS, FID/INP, LCP
- HTTPS enforced
- Clean URL structure: `/services/window-tinting`, `/services/tint-removal`, `/gallery`, `/contact`

### 4.4 Local SEO

- **Google Business Profile** link prominent (update name to Emerald Window Tinting)
- **NAP consistency** (Name, Address, Phone) across site footer, contact page, schema
- **Embedded Google Map** on contact page
- **Service area pages** (optional phase 2): Rockville, Bethesda, Silver Spring, DC, Arlington, Tysons

---

## 5. Site Map & Page Structure

```
Home (/)
├── Services (/services)
│   ├── Window Tinting (/services/window-tinting)
│   ├── Tint Removal (/services/tint-removal)
│   
├── Gallery (/gallery)
├── About (/about)
├── Contact (/contact)
└── Legal
    ├── Privacy Policy (/privacy)
    └── Terms (/terms)
```

---

## 6. Page-by-Page Specifications

### 6.1 Home Page (`/`)

The homepage is the primary conversion funnel. It is a single scroll experience composed of distinct, well-spaced sections.

#### Section 1 — Hero

- **Full viewport height** (100svh).
- **Background:** High-quality dark image or looping video of a tinted luxury vehicle, with a dark gradient overlay (bottom heavier).
- **Headline:** Large PP Hatton text — something like:
  > "Precision Tinting.\nElevated Style."
- **Subheadline:** One short line in body typeface, muted white:
  > "Premium window tinting in the DMV area."
- **CTA Buttons:** Two glass-style buttons side by side (stack on mobile):
  - `Get a Free Quote` → scrolls to / links to contact form
  - `Call Now` → `tel:2407565906`
- **Subtle scroll indicator** at bottom (animated chevron or line).
- **Animation:** Headline words fade/slide up with stagger. Buttons fade in after headline.

#### Section 2 — Trust Bar

- **Slim, horizontally centered row.**
- Show: `5.0 ★ Google Reviews` | `DMV's Trusted Tint Shop` | `7 Days a Week`
- Minimal, icon + short text. Glass card or transparent bg.
- **Animation:** Fade in on scroll.

#### Section 3 — Services Overview

- **Heading:** "What We Do" or "Our Craft" (PP Hatton, large).
- **3 glass cards** (stack vertically on mobile, 3-col on desktop):
  1. **Window Tinting** — icon + 1-sentence description + `Learn More →` link.
  2. **Tint Removal** — icon + 1-sentence description + `Learn More →` link.
  3. **Glass Coating** — icon + 1-sentence description + `Learn More →` link.
- Each card has a subtle emerald gradient glow on hover.
- **No pricing anywhere.**
- **Animation:** Cards slide up with stagger on scroll-into-view.

#### Section 4 — Featured Brands

- **Heading:** "Films We Trust" (PP Hatton).
- Logos displayed: **PureMax Supreme Carbon**, **KOOLMAX Supreme Ceramic**, **GlassParency**.
- White logos on dark bg, arranged in a row (or subtle glass card).
- Brief 1-liner under heading: "Industry-leading films for unmatched protection and clarity."
- **Animation:** Logos fade in with slight scale.

#### Section 5 — Gallery Preview

- **Heading:** "Our Work" (PP Hatton).
- **Grid or masonry layout** showcasing 6–8 best photos from the local gallery assets (`/galleryimages`).
- **Featured video:** Embed `emrldvideo.mov` as an inline autoplay (muted, looping) clip within the grid — give it a larger card span (2-col on desktop) so it stands out.
- On hover: subtle zoom + emerald overlay with "View Gallery →" link.
- `See All Work →` button below linking to `/gallery`.
- **Animation:** Images reveal with a clip/fade on scroll.

#### Section 6 — Testimonials (Infinite Scroller)

- **Heading:** "What Clients Say" (PP Hatton).
- **Google Reviews displayed in an infinite horizontal auto-scroll carousel.**
- **Behavior:**
  - Continuously scrolls left at a steady, comfortable pace (CSS `@keyframes` or `requestAnimationFrame`).
  - **Desktop:** When the mouse cursor enters the carousel area, the animation **pauses**. Resumes when cursor leaves.
  - **Mobile:** When a finger **touches and holds** (touchstart), the animation **pauses**. Resumes on touchend / touchcancel.
  - Cards are duplicated in the DOM to create seamless infinite loop (no gap/jump).
- **Card design:** Glass card with reviewer name, star rating (★★★★★), and review excerpt. Keep text short — truncate if needed, no "read more."
- **Reviews to include (pull from Google):**

  | Reviewer | Review |
  |---|---|
  | Zafir Kazi | "He knows what he's doing with his tints. Got my taillights blacked out by him, he did an amazing job, completely changed the look of the car. Planning on going back to get windows tinted as well seeing his amazing work with other cars." |
  | Tattiana Ledon | "Very outgoing guy, a professional. He knows what he's doing. 35% quick and lovely. Tints now compliment my car. Definitely recommend." |
  | Ryan Sani | "So happy with my tint, he removed my original tint and added a new one for an amazing price." |
  | *(Add more as they appear on Google profile — aim for 8–12 total)* | |

- **"Review us on Google" button** linking to Google Maps review page.
- **Animation:** Smooth continuous scroll. Slight parallax depth between rows if 2-row variant is used.

#### Section 7 — CTA / Quote Section

- **Full-width dark section** with centered text.
- **Headline:** "Ready to Transform Your Ride?" (PP Hatton, large).
- **Sub:** "Get a free, no-obligation quote in minutes."
- **Two CTA buttons:**
  - `Get Your Free Quote` → `/contact` or inline form
  - `(240) 756-5906` → `tel:` link
- Option to include embedded short form here (Name, Phone, Service dropdown, Submit) — or link to full contact page.
- **Animation:** Text fades up, buttons scale in gently.

#### Section 8 — Footer

- **Glass panel** on dark bg.
- **Logo** (Emerald Window Tinting) top-left.
- **Columns:**
  - Quick Links: Home, Services, Gallery, About, Contact
  - Services: Window Tinting, Tint Removal, Glass Coating
  - Contact: Address, Phone (clickable), Email (clickable), Hours
- **Social icon:** Instagram link.
- **Bottom row:** `© 2026 Emerald Window Tinting. All rights reserved.` | Privacy | Terms
- **NAP must match Google Business Profile exactly.**

---

### 6.2 Service Pages (`/services/window-tinting`, etc.)

- **Hero banner:** Service name (PP Hatton, large) + 1-line description + dark photo bg.
- **Content blocks:** Alternate between text and image. Glass card style.
- **Window Tinting page** includes:
  - PureMax Supreme Carbon package details (features as icon + 1-liner, not bullet walls).
  - KOOLMAX Supreme Ceramic package details (same treatment).
  - Maryland tint law summary (brief, link to official source).
- **Tint Removal page:** Description, process steps (numbered, minimal text), before/after photos (if available).
- **Glass Coating page:** GlassParency details, benefits as icon grid, warranty info.
- **Every page ends with a CTA section** (same as Section 7 on homepage).
- **No pricing.** Every mention of cost → "Request a free quote."

---

### 6.3 Gallery Page (`/gallery`)

- **Source:** Local image assets provided in `/galleryimages` folder (client is actively adding more). No Instagram API needed.
- **Video:** Include `emrldvideo.mov` prominently at the top of the gallery — hero-style inline video player (autoplay muted loop on desktop, tap-to-play on mobile). Convert to MP4 (H.264) + WebM for browser compatibility.
- **Layout:** Responsive masonry grid (2-col mobile, 3-col tablet, 4-col desktop).
- **Lightbox:** Click/tap to open full-size image with dark overlay. Swipe to navigate on mobile. Video opens in a modal with playback controls.
- **Filter tabs (optional):** All | Cars | SUVs | Trucks *(if enough content to categorize).*
- **CTA at bottom:** "Like what you see? Let's tint yours." + Quote button.
- **Image optimization:** Convert to WebP/AVIF, lazy-load below fold, use `srcset` for responsive sizes.
- **Instagram link:** Include a subtle "Follow us on Instagram" link/button at the bottom of the gallery pointing to [@emeraldwindowtinting](https://www.instagram.com/emeraldwindowtinting/).

> **Developer note:** Gallery images are in `D:\EMRLDTINTS\galleryimages` — client is still adding to this folder. Video source is `D:\EMRLDTINTS\emrldvideo.mov` — transcode to MP4 (H.264) and WebM before deployment. Current images: `musk1.jpg`, `vette1.jpg`, `vette2.jpg` (more incoming).

---

### 6.4 About Page (`/about`)

- **Brief brand story.** 3–4 short sentences about who Emerald Window Tinting is. Emphasize: DMV-based, quality-obsessed, customer-first.
- **Photo of the owner / work environment** (if available).
- **Values:** 3 glass cards — e.g., "Precision," "Quality Films," "Customer First."
- **CTA section at bottom.**

---

### 6.5 Contact Page (`/contact`)

- **Two-column layout** (stacked on mobile):
  - **Left:** Form (Name, Email, Phone, Service dropdown [Window Tinting / Tint Removal / Glass Coating / Other], Vehicle info text field, Message textarea, Submit button).
  - **Right:** Contact details (phone, email, address, hours), embedded Google Map.
- **Form submission:** Sends email notification to business + stores in a database or service (Formspree, Netlify Forms, or custom backend).
- **Confirmation:** Show success message on submit — "We'll get back to you within 24 hours."
- **Additional contact options displayed prominently:**
  - 📞 Call: `(240) 756-5906`
  - 💬 Text: `(240) 756-5906`
  - ✉️ Email: `emeraldwindowtinting@gmail.com` *(or updated Emerald email)*

---

## 7. Animations & Micro-Interactions

| Element | Animation | Trigger |
|---|---|---|
| Hero headline | Words stagger fade-up (translate Y + opacity) | Page load |
| Hero CTA buttons | Fade in + slight scale | After headline completes |
| Scroll indicator | Gentle bounce loop | Page load |
| Trust bar items | Fade in | Scroll into view |
| Service cards | Stagger slide-up | Scroll into view |
| Service card hover | Emerald glow border + subtle lift (translateY -4px) | Mouse hover / focus |
| Brand logos | Fade in + scale from 0.9 → 1 | Scroll into view |
| Gallery images | Clip-path reveal or fade up | Scroll into view |
| Testimonial carousel | Continuous horizontal scroll, pause on hover/touch | Auto + interaction |
| CTA section text | Fade up | Scroll into view |
| Glass card hover | Border glow intensifies, slight backdrop blur change | Hover |
| Page transitions | Smooth fade or slide (if SPA) | Navigation |
| Button hover | Background shifts to solid emerald, text to black | Hover / focus |
| Mobile nav | Slide-in from right, glass bg with blur | Menu toggle |

**Implementation:** Use CSS `@keyframes` and `IntersectionObserver` for scroll-triggered animations. Keep JS minimal — prefer CSS transitions/animations. Consider `prefers-reduced-motion` media query to disable animations for accessibility.

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile (default) | `0–639px` | Single column, stacked layout, touch-optimized |
| Tablet | `640–1023px` | 2-column grids, slightly larger type |
| Desktop | `1024–1439px` | Full layout, 3-col services, hover states |
| Large desktop | `1440px+` | Max-width container, larger hero type |

**Mobile-first CSS:** All base styles target mobile. Use `min-width` media queries to scale up.

---

## 9. Technical Requirements

### 9.1 Stack (Recommended)

| Layer | Technology | Rationale |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** or **Astro** | SSR/SSG for SEO, fast loads, image optimization |
| Styling | **Tailwind CSS 4** | Utility-first, rapid development, responsive |
| Animations | **CSS @keyframes + Intersection Observer** | Lightweight, no heavy libs needed |
| Forms | **Formspree** or **Resend + Server Action** | Simple email delivery, no backend needed |
| Hosting | **Vercel** or **Netlify** | Edge CDN, auto HTTPS, preview deploys |
| Images | **WebP/AVIF**, lazy-loaded, `srcset` | Performance |
| Fonts | **PP Hatton** (self-hosted woff2) + **Inter** (Google or self-hosted) | Performance, brand |
| Analytics | **Google Analytics 4** + **Google Search Console** | Track conversions, search performance |
| Maps | **Google Maps Embed API** | Contact page map |

### 9.2 Performance Targets

- Lighthouse Mobile: **95+** Performance, **100** Accessibility, **100** Best Practices, **100** SEO
- LCP: **< 2.0s**
- CLS: **< 0.05**
- INP: **< 200ms**
- Total page weight: **< 1.5 MB** (initial load, above fold)

### 9.3 Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigable (focus rings, skip links)
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Sufficient color contrast (white on dark bg meets AA)
- `prefers-reduced-motion` support
- `aria-labels` on interactive elements
- Form labels and error states

---

## 10. Conversion Points (No Pricing)

The site must **never display prices.** All conversion pathways lead to direct contact:

| CTA | Destination | Placement |
|---|---|---|
| "Get a Free Quote" | `/contact` form | Hero, CTA section, service pages, gallery |
| "Call Now" / Phone number | `tel:2407565906` | Hero, nav (mobile), footer, CTA section |
| "Text Us" | `sms:2407565906` | Contact page |
| "Email Us" | `mailto:` link | Contact page, footer |
| "Book Appointment" | `/contact` form (or future scheduling tool) | Nav CTA button |

The nav should have a persistent **"Book Now"** or **"Free Quote"** button (emerald bg, stands out from other nav items).

---

## 11. Content Needs from Client

| Asset | Status | Notes |
|---|---|---|
| Logo files (SVG, PNG) | ✅ Available | Use Emerald Window Tinting logo from brand image |
| Gallery photos | ✅ In progress | Located in `/galleryimages` — client is actively adding more |
| Gallery video | ✅ Available | `emrldvideo.mov` — transcode to MP4 + WebM for web |
| Owner photo / team photo | ⏳ **Needed** | For About page |
| Updated email (Emerald-branded) | ⏳ **Needed** | Replace halaltints255@gmail.com if rebranded |
| Updated address (if Rockville vs Germantown) | ⏳ **Needed** | Confirm exact service address for NAP |
| Google Business Profile access | ⏳ **Needed** | Update name, verify info |
| Brand story / bio copy | ⏳ **Needed** | Or we can draft and client approves |
| Google reviews (additional) | ⏳ Ongoing | Embed or manually curate 8–12 best reviews |
| PP Hatton font license/files | ⏳ **Needed** | Ensure commercial web license is secured |

---

## 12. Milestones

| Phase | Deliverable |
|---|---|
| **Phase 1 — Design** | Figma mockups: Mobile + Desktop (Home, Services, Gallery, Contact) |
| **Phase 2 — Development** | Build all pages, responsive, animations, form integration |
| **Phase 3 — Content & SEO** | Final copy, images optimized, schema markup, meta tags, sitemap |
| **Phase 4 — QA & Launch** | Cross-browser testing, Lighthouse audit, Google Search Console setup, domain switch |
| **Phase 5 — Post-Launch** | Monitor analytics, iterate on conversions, add service area pages |

---

## 13. Out of Scope (Phase 1)

- Online booking / scheduling system (future integration)
- Blog / content marketing
- E-commerce / online payments
- Multi-language support
- Service area sub-pages (Phase 2)
- Chat widget / AI chatbot


## OTHER NOTES
- This site is meant to attract people who do not really care about price and want the job done right
- The business is run by one person
- add this video to the gallery - D:\EMRLDTINTS\emrldvideo.mov

---

*Document version: 1.0 — March 12, 2026*
