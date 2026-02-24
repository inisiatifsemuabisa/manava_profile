# plan.md — 10Labs (Manava Collective) Company Profile Website (Static + Cloudflare)

## 1) Project Goal
Membangun website company profile untuk **10Labs (Manava Collective / Yayasan Penghubung Kebaikan)** yang:
- Meningkatkan kredibilitas (enterprise-ready look & feel)
- Menjelaskan layanan (Consulting, Solutions, Outsourcing, Training)
- Menampilkan credentials/case studies berbasis storytelling (Problem → Solution → Impact)
- 100% **static** (no server runtime) dan bisa di-deploy ke **Cloudflare Pages**

## 2) Key Message
- Hero headline: **"Engineering solutions, empowering people."**
- Short description (ringkas): 10Labs membantu bisnis bergerak lebih cepat lewat arah teknologi, solusi, dan people enablement.

## 3) Scope Pages (Sitemap)
1. Home
2. Services
3. Case Studies (list)
4. Case Study Detail (slug-based, statically generated)
5. Training
6. About (Philosophy 10 & Labs)
7. Contact (Typeform link/embed)
8. Footer (alamat PT Inisiatif Semua Bisa)

## 4) Technical Approach (Static Export)
- Framework: Next.js (App Router) + TypeScript + Tailwind
- Mode: **Static export** (`output: "export"`) → output folder `out/`
- Hosting: **Cloudflare Pages**
- Content-driven: Data layanan & case studies disimpan di `src/content/*` (TS/JSON), bukan CMS (phase 1)

## 5) Milestones & Deliverables
### Milestone A — Foundation (Setup & IA)
Deliverables:
- Repo setup (Next.js + TS + Tailwind + lint/format)
- Sitemap & routing selesai
- Global layout (Header, Footer, Navigation, Mobile)
- Base styling + typography scale

### Milestone B — Pages Implementation (UI + Content)
Deliverables:
- Home section lengkap (Hero, Philosophy, Services overview, Credentials preview, CTA)
- Services page (4 kategori)
- Case Studies list + detail pages (static)
- Training page
- About page
- Contact page (Typeform)

### Milestone C — Quality & Release
Deliverables:
- SEO basics (metadata per page, sitemap, robots)
- Performance pass (image optimization manual, lazyload where needed)
- Responsive QA (mobile/tablet/desktop)
- Cloudflare Pages deploy & smoke test

## 6) Acceptance Criteria
- Semua halaman bekerja & responsive
- Tidak ada SSR / server dependency (static export sukses)
- Build menghasilkan folder `out/` dan deploy Cloudflare Pages sukses
- Case study detail bisa diakses via `/case-studies/<slug>/`
- CTA Contact mengarah ke Typeform (link/embed)
- Copywriting clear dan tidak “buzzwordy”

## 7) Out of Scope (Phase 1)
- Blog/CMS
- Backend/API routes
- Auth/login
- Dashboard/admin
- Payment/transaction