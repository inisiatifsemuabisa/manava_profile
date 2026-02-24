# conventions.md — 10Labs Static Website Standards (Antigravity)

## 1) Non-Negotiables (Static Website Rules)
- Must be deployable to Cloudflare Pages as static output (`out/`)
- NO server runtime:
  - No `app/api/*`
  - No SSR-only APIs (`cookies()`, `headers()`, auth server)
  - No ISR/revalidate that requires server
- Any dynamic routes must be statically generated via `generateStaticParams()`

## 2) Project Structure (Recommended)
- `src/app/(site)/...` for pages
- `src/components/`
  - `ui/` primitives (Button, Card, Badge)
  - `layout/` (Header, Footer, MobileNav)
  - `sections/` (Hero, ServicesGrid, Credentials, CTA)
- `src/content/` for all editable content (services, case studies, site config)
- `public/` for assets (logos, images, og)

## 3) Naming & Style
- Components: `PascalCase` (e.g., `HeroSection.tsx`)
- Files (non-component): `kebab-case` (e.g., `format-date.ts`)
- Keep components small, single responsibility
- Avoid duplicated UI — prefer reusable components

## 4) Content & Copywriting Rules
- Tone: professional, clear, enterprise-ready, human (not terlalu NGO emosional)
- Avoid buzzwords berlebihan
- Case study structure mandatory:
  - **Problem → Solution → Impact**
- CTA wording:
  - Primary: “Talk to Us” / “Start a Conversation”
  - Avoid: “Click here”

## 5) Design System Rules
- Spacing: 8px scale (8/16/24/32/48/64)
- Typography:
  - H1 only for hero headline
  - H2 section title, H3 sub, body 16–18px
- Consistent layout:
  - Max width container
  - Clear section separation
  - Enough whitespace

## 6) Accessibility & Semantics
- Use semantic HTML (header/nav/main/footer)
- Buttons for actions, links for navigation
- Ensure readable contrast and keyboard navigation basic

## 7) Performance Requirements
- Compress images before commit
- Lazy load non-critical media where applicable
- Minimize third-party scripts (Typeform only on contact)
- Keep JS bundle lean (avoid heavy libraries)

## 8) SEO Requirements
- Unique title + description per page
- robots + sitemap available
- OG default image present
- No duplicate H1 on a page

## 9) Quality Gates (Before Merge/Release)
- `npm run build` passes and outputs `out/`
- No console errors on key pages
- Responsive check complete
- All routes navigable
- Case studies render correctly for each slug