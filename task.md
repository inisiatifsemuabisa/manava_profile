# task.md — 10Labs Static Website (Ready to Execute)

## A) Project Setup
- [ ] Init Next.js App Router + TypeScript
- [ ] Install TailwindCSS + PostCSS
- [ ] Setup ESLint + Prettier (format on save)
- [ ] Setup path alias `@/*` (tsconfig)
- [ ] Add `.env.example` (hanya untuk public config bila perlu)

## B) Static Export Configuration (Cloudflare-ready)
- [ ] Configure `next.config.ts`:
  - `output: "export"`
  - `trailingSlash: true`
  - `images.unoptimized: true`
- [ ] Ensure no usage of:
  - `app/api/*` routes
  - `cookies()`, `headers()`, server-only auth
  - ISR/revalidate server features
- [ ] Confirm build output directory: `out/`

## C) Information Architecture & Routes
- [ ] Create route group: `src/app/(site)/`
- [ ] Implement pages:
  - [ ] Home: `/`
  - [ ] Services: `/services/`
  - [ ] Case Studies list: `/case-studies/`
  - [ ] Case Study detail: `/case-studies/[slug]/`
  - [ ] Training: `/training/`
  - [ ] About: `/about/`
  - [ ] Contact: `/contact/`

## D) Content Model (Content-driven)
- [ ] Create `src/content/site.ts` (brand, tagline, nav)
- [ ] Create `src/content/services.ts` (4 service categories)
- [ ] Create `src/content/case-studies/*` (per case study file)
- [ ] Case study data format (minimum):
  - slug, title, client/org
  - problem (text)
  - solution (text)
  - impact (text / bullets)
  - optional: tech stack, screenshots (public path)

## E) UI Components
### Layout
- [ ] Header (desktop + mobile nav)
- [ ] Footer (alamat & links)

### Sections (Home)
- [ ] Hero (headline + short description + CTA)
- [ ] Philosophy (10 & Labs explanation)
- [ ] Services overview (4 cards)
- [ ] Credentials preview (highlight 3–5)
- [ ] CTA block (Contact)

### Reusable
- [ ] Button, Card, Badge, Container, SectionHeading
- [ ] CaseStudyCard, ServiceCard

## F) Case Studies Implementation
- [ ] Case Studies list page maps from `content`
- [ ] Detail page uses `generateStaticParams()` for static generation
- [ ] Template layout: Problem → Solution → Impact
- [ ] Case study items to include (from brief):
  - Ganjar Website (Problem + Solution TBD)
  - Askara Nusantara
  - Filantropi Indonesia
  - UI Connect
  - ImpactLeap
  - (Optional placeholder) “More coming soon”

## G) Training Page
- [ ] List training topics (placeholder allowed if detail belum lengkap)
- [ ] Section: “How we train (real project needs)”
- [ ] CTA to Typeform

## H) Contact Page (Typeform)
- [ ] Provide Typeform link button
- [ ] Optional: embed Typeform (client-side script)
- [ ] Copy: business inquiry + training inquiry

## I) SEO & Performance
- [ ] Per-page metadata (title + description)
- [ ] `robots.ts` and `sitemap.ts` (static)
- [ ] OG image default in `/public/og/`
- [ ] Image usage:
  - Prefer `<img>` for static export simplicity
  - Compress assets before commit (webp/jpg)
- [ ] Lighthouse target: 90+ (best effort)

## J) QA Checklist
- [ ] Responsive check: 375px / 768px / 1280px
- [ ] Navigation works (no broken links)
- [ ] Case study slugs valid
- [ ] No console errors
- [ ] Build success locally:
  - `npm run build` → generates `out/`
  - Serve output (optional) for smoke test

## K) Deployment (Cloudflare Pages)
- [ ] Cloudflare Pages project setup
- [ ] Build command: `npm run build`
- [ ] Output directory: `out`
- [ ] Custom domain mapping (if ready)
- [ ] Final smoke test on production URL

## Done Definition
Project considered done when:
- Deployed on Cloudflare Pages
- All pages complete & content loaded from `src/content`
- Static export succeeds with no server-only features