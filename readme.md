# Emerald Window Tinting

Premium automotive window tinting services in the DMV area. Built on Next.js, React, and Tailwind CSS.

## 🚀 Features
- **Next.js 14 App Router:** Cutting-edge framework for optimal performance/SEO
- **Smooth Scrolling:** Refined scrolling UX powered by Lenis
- **Optimized Assets:** High-performance responsive images via Next.js
- **Resend Email Integration:** Reliable contact form delivery
- **Glassmorphism UI:** Modern, sleek interface tailored for automotive services
- **Netlify Ready:** Pre-configured security headers and deployment specs (`netlify.toml` + `middleware.ts`)

## 📂 Project Structure

```text
EMRLDTINTS/
+---public                 # Static assets (images, logos, videos)
|   +---brands
|   +---fonts
|   +---gallery
|   \---video
+---src
|   +---app                # Next.js App Router (Pages & API)
|   |   |   apple-icon.png
|   |   |   globals.css  # Global Tailwind and custom CSS 
|   |   |   icon.png
|   |   |   layout.tsx   # Root layout with SmoothScroll wrapper
|   |   |   page.tsx     # Homepage
|   |   |
|   |   +---about
|   |   +---api\contact  # Next.js Serverless Route for emails
|   |   +---contact
|   |   +---disclaimer
|   |   +---gallery
|   |   +---privacy
|   |   +---services
|   |   |   +---tint-removal
|   |   |   \---window-tinting
|   |   \---terms
|   |
|   \---components         # Reusable React UI Components
|       |   ContactForm.tsx
|       |   Footer.tsx
|       |   Header.tsx
|       |   SmoothScroll.tsx  # Lenis scroll provider
|       |
|       \---home           # Homepage specific modules
|               Brands.tsx
|               CTASection.tsx
|               FAQ.tsx
|               GalleryPreview.tsx
|               Hero.tsx
|               Services.tsx
|               Testimonials.tsx
|               TrustBar.tsx
|
|-- middleware.ts          # Edge middleware (Security headers)
|-- next.config.js         # Next.js configuration
|-- netlify.toml           # Netlify build configuration
|-- tailwind.config.ts     # Tailwind styling rules
```

## 🛠️ Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛡️ Security / Rate Limiting
- A custom `middleware.ts` injects standard HTTP security headers across the app.
- A `netlify.toml` is included to provide X-Frame-Options and stricter HSTS policies directly at Netlify's edge.
- Netlify natively handles Layer 3/4 DDOS protection. For strict app-level API rate limiting in the future, @upstash/ratelimit is recommended.
