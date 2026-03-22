# Dorgu Website — Implementation Plan

**Domain:** dorgu.in
**Type:** Single-page marketing site with waitlist
**Status:** Planning (March 2026)

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| **Framework** | Next.js 15 (App Router, static export) | SSG for fast marketing pages, great SEO, trivial Vercel deploy |
| **Language** | TypeScript | Type safety, better DX |
| **Styling** | Tailwind CSS 4 + shadcn/ui | User-specified; theme CSS already defined |
| **Animations** | Framer Motion | Required by all selected 21stdev components |
| **3D Background** | Three.js (lazy-loaded) | DottedSurface particle effect in hero |
| **Form** | React Hook Form + Zod | Multi-step waitlist with validation |
| **Icons** | Lucide React | Already used by shadcn + selected components |
| **Waitlist Backend** | Google Sheets (via Apps Script web app) | Simple, free, shareable — good for early stage |
| **Analytics** | Vercel Analytics (free tier) | Zero-config, privacy-friendly, no overhead |
| **Hosting** | Vercel | Free tier, auto-deploys from GitHub, Edge CDN, SSL |

---

## Domain & Hosting Setup

1. Purchase `dorgu.in` from registrar (Namecheap, Cloudflare, etc.)
2. Create `dorgu-ai/dorgu-website` GitHub repo
3. Connect repo to Vercel project
4. In Vercel dashboard: Settings → Domains → Add `dorgu.in`
5. Point domain DNS to Vercel (either nameservers or CNAME)
6. Enable Vercel Analytics (free, one toggle)

---

## Site Structure

Single page with smooth-scroll anchor sections:

```
dorgu.in/
├── / (landing page)
│   ├── <Header>         — Sticky nav: logo + mascot, nav links, GitHub star button, dark mode
│   ├── #hero            — Animated hero with DottedSurface background
│   ├── #features        — BentoGrid (6 feature cards with GlowingEffect)
│   ├── #how-it-works    — 4-step quick start with code snippets
│   ├── #pricing         — Free / Pro / Enterprise tier cards
│   ├── #waitlist        — Multi-step questionnaire form
│   └── <Footer>         — Repo links, docs, license, mascot
├── /api/waitlist        — Next.js API route → Google Sheets
└── (external redirects)
    ├── Docs → https://dorguai.mintlify.app/
    ├── GitHub CLI → https://github.com/dorgu-ai/dorgu
    ├── GitHub Operator → https://github.com/dorgu-ai/dorgu-operator
    └── GitHub Platform → https://github.com/dorgu-ai/dorgu-platform
```

---

## Component Architecture

### From 21stdev (copy to `components/ui/`)

| Component | Used In | Notes |
|-----------|---------|-------|
| `BentoGrid` | Features section | Customized with dorgu feature data |
| `HeroSection` | Hero | Adapted with dorgu tagline + CTAs |
| `HeroHeader` | Sticky header | Logo + mascot image + nav items |
| `TextEffect` | Hero tagline | Animated text reveal |
| `AnimatedGroup` | How-it-works, features | Staggered scroll animations |
| `AnimatedContainer` | Multiple sections | Scroll-triggered fade-in |
| `GlowingEffect` | Feature cards, pricing | Hover glow borders |
| `GridItem` | Pricing cards | Card wrapper with glow |
| `NavBar` | Mobile navigation | Floating bottom nav bar |
| `Footer` | Page footer | Customized links |
| `DottedSurface` | Hero background | Three.js particle animation |
| `Button` | CTAs throughout | shadcn button variants |

### Custom Components (build fresh)

| Component | Purpose |
|-----------|---------|
| `WaitlistForm` | Multi-step form with progress indicator |
| `WaitlistStep` | Individual step wrapper (question + options) |
| `CodeBlock` | Syntax-highlighted code snippets for how-it-works |
| `PricingCard` | Tier card with feature list and CTA |
| `Logo` | Text wordmark "dorgu" + mascot image |
| `ThemeToggle` | Dark/light mode switch |
| `GitHubStarButton` | GitHub star count badge |

---

## Branding

### Logo
- Text wordmark: **"dorgu"** in primary font, styled with brand color (`--primary`)
- Mascot: Black cat with green eyes + circuit/K8s cube necklace (provided PNG)
- Header: mascot (small, 32px) + wordmark side by side
- Hero: larger mascot placement near CTA or as floating element

### Theme
- Light/dark mode with CSS variables (already defined in website-plan.md)
- Primary: warm brown `#644a40` (light) / warm cream `#ffe0c2` (dark)
- Secondary: golden `#ffdfb5` (light) / dark amber `#393028` (dark)
- Background: near-white `#f9f9f9` (light) / near-black `#111111` (dark)

---

## Waitlist Questionnaire

6 steps, designed for 2-5 minute completion:

### Step 1 — Your Role (single select)
- Individual Developer
- Platform Engineer / DevOps
- SRE / Reliability Engineer
- Engineering Manager / Tech Lead
- Student / Learning
- Other → free text

### Step 2 — Kubernetes Experience (single select)
- Just getting started / Exploring
- Running in development environments
- Running in production (1–5 clusters)
- Running in production (5+ clusters)
- Not using Kubernetes yet

### Step 3 — Biggest Pain Points (multi-select, pick up to 3)
- Writing & maintaining K8s manifests
- Cluster bootstrapping & tooling setup
- Deployment validation & guardrails
- Observability & monitoring setup
- GitOps workflow configuration
- Resource right-sizing
- Security policy enforcement
- Onboarding new team members to K8s

### Step 4 — Features You're Most Interested In (multi-select)
- AI-powered manifest generation
- Blessed Stack (curated production tooling)
- Application & Cluster Personas (CRDs)
- Real-time platform dashboard
- Compliance templates (Pro)
- Multi-cluster management (Enterprise)
- LLM-powered root cause analysis (Pro)

### Step 5 — Sandboxed Environments (single select)
> "Would sandboxed Kubernetes environments (powered by vcluster) help you test deployments before promoting to staging/production?"
- Yes, this would be very valuable
- Somewhat — depends on the implementation
- No, we already have a solution for this
- Not sure / Need to learn more

### Step 6 — Contact Info
- Email (required)
- Phone (optional)
- Company / Organization (optional)
- How did you hear about dorgu? (optional dropdown: GitHub, Twitter/X, Reddit, HackerNews, Friend/Colleague, Search, Other)

---

## Google Sheets Waitlist Backend

### Setup
1. Create a Google Sheet with columns matching form fields
2. Deploy a Google Apps Script as a web app that accepts POST requests
3. Next.js API route (`/api/waitlist`) forwards form data to the Apps Script URL
4. Apps Script appends a row to the sheet per submission

### API Route (`/api/waitlist`)
- Accepts POST with JSON body
- Validates with Zod schema (server-side)
- Forwards to Google Sheets Apps Script
- Returns success/error response
- Rate-limited (simple in-memory counter, prevent spam)

### Google Sheet Columns
```
Timestamp | Role | K8s Experience | Pain Points | Interested Features | Sandbox Interest | Email | Phone | Company | Referral Source
```

---

## Implementation Phases

### Phase 1 — Project Scaffold (~1 session)
- [ ] `npx create-next-app@latest` with TypeScript, Tailwind, App Router
- [ ] Install dependencies: `shadcn`, `framer-motion`, `three`, `@types/three`, `lucide-react`, `react-hook-form`, `zod`, `@hookform/resolvers`
- [ ] Initialize shadcn/ui (`npx shadcn@latest init`)
- [ ] Set up theme CSS variables (light + dark from website-plan.md)
- [ ] Set up project structure:
  ```
  src/
  ├── app/
  │   ├── layout.tsx
  │   ├── page.tsx
  │   └── api/waitlist/route.ts
  ├── components/
  │   ├── ui/          ← shadcn + 21stdev components
  │   ├── sections/    ← page sections (Hero, Features, etc.)
  │   └── waitlist/    ← multi-step form components
  ├── lib/
  │   ├── utils.ts
  │   └── schemas.ts   ← Zod schemas
  └── assets/
      └── mascot.png
  ```
- [ ] Add mascot image to assets
- [ ] Basic layout with metadata, fonts, favicon

### Phase 2 — Header + Hero (~1 session)
- [ ] Copy & adapt HeroHeader component
- [ ] Create Logo component (wordmark + mascot)
- [ ] Create ThemeToggle component
- [ ] Copy & adapt HeroSection + TextEffect
- [ ] Integrate DottedSurface (lazy-loaded with `dynamic()`)
- [ ] Hero content: tagline, subtitle, two CTA buttons
  - "Get Started" → docs link
  - "Join Waitlist" → smooth scroll to #waitlist
- [ ] Responsive layout (mobile: stacked, desktop: side-by-side with mascot)

### Phase 3 — Features Section (~1 session)
- [ ] Copy & adapt BentoGrid + GlowingEffect
- [ ] Create 6 feature cards with dorgu content:
  1. **AI Manifest Generation** — `dorgu generate` (col-span-2)
  2. **Application Personas** — CRD-based app identity
  3. **Cluster Setup Wizard** — Blessed Stack (6 components)
  4. **Kubernetes Operator** — Validation, webhooks, learning
  5. **Platform Dashboard** — Real-time visualization (col-span-2)
  6. **GitOps Native** — ArgoCD App-of-Apps, GitHub Actions
- [ ] AnimatedContainer for scroll reveal

### Phase 4 — How It Works (~1 session)
- [ ] 4-step flow with AnimatedGroup:
  1. Install CLI (`go install ...`)
  2. Generate manifests (`dorgu generate ./my-app`)
  3. Bootstrap cluster (`dorgu cluster setup`)
  4. Visualize (`dorgu platform serve`)
- [ ] Code snippet blocks with syntax highlighting (simple CSS, no heavy lib)
- [ ] Terminal-style dark boxes for commands

### Phase 5 — Pricing Section (~1 session)
- [ ] 3 pricing cards using GridItem + GlowingEffect:
  - **Free (Open Source)** — Apache 2.0, all core features, "Get Started" CTA
  - **Pro ($49/mo)** — "Coming Soon" badge, security/compliance/notifications
  - **Enterprise** — "Contact Us" CTA, multi-cluster, SSO, audit
- [ ] Feature comparison list per tier
- [ ] Free tier highlighted as current/recommended

### Phase 6 — Waitlist Form (~1 session)
- [ ] Multi-step form component with progress bar (Step X of 6)
- [ ] Each step as its own sub-component
- [ ] Form state managed by React Hook Form
- [ ] Zod validation per step + final submission
- [ ] Smooth transitions between steps (Framer Motion)
- [ ] Submit → POST to `/api/waitlist`
- [ ] Success state with confirmation message + mascot
- [ ] API route with Google Sheets integration

### Phase 7 — Footer + Mobile Nav (~0.5 session)
- [ ] Adapt Footer component with dorgu links:
  - Product: Features, Pricing, Docs
  - Open Source: CLI, Operator, Platform, Helm Charts
  - Community: GitHub, Twitter/X
  - Legal: License (Apache 2.0)
- [ ] Floating NavBar for mobile (Home, Features, Pricing, Waitlist)

### Phase 8 — Polish & Deploy (~1 session)
- [ ] SEO: meta tags, Open Graph image, structured data
- [ ] Responsive audit (mobile, tablet, desktop)
- [ ] Performance: lazy-load Three.js, optimize images (next/image)
- [ ] Accessibility: keyboard nav, aria labels, contrast check
- [ ] Enable Vercel Analytics
- [ ] Deploy to Vercel, connect dorgu.in domain
- [ ] Test waitlist end-to-end (form → Google Sheet)

---

## File Tree (Final)

```
dorgu-website/
├── public/
│   ├── mascot.png
│   ├── og-image.png          ← Open Graph preview image
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx         ← Root layout, fonts, metadata
│   │   ├── page.tsx           ← Single page composing all sections
│   │   ├── globals.css        ← Theme variables + Tailwind
│   │   └── api/
│   │       └── waitlist/
│   │           └── route.ts   ← POST handler → Google Sheets
│   ├── components/
│   │   ├── ui/                ← shadcn + 21stdev components
│   │   │   ├── bento-grid.tsx
│   │   │   ├── button.tsx
│   │   │   ├── text-effect.tsx
│   │   │   ├── animated-group.tsx
│   │   │   ├── animated-container.tsx
│   │   │   ├── glowing-effect.tsx
│   │   │   ├── grid-item.tsx
│   │   │   ├── dotted-surface.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── card.tsx
│   │   │   └── progress.tsx
│   │   ├── sections/
│   │   │   ├── header.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── features.tsx
│   │   │   ├── how-it-works.tsx
│   │   │   ├── pricing.tsx
│   │   │   ├── waitlist-section.tsx
│   │   │   └── footer.tsx
│   │   ├── waitlist/
│   │   │   ├── waitlist-form.tsx
│   │   │   ├── step-role.tsx
│   │   │   ├── step-experience.tsx
│   │   │   ├── step-pain-points.tsx
│   │   │   ├── step-features.tsx
│   │   │   ├── step-sandbox.tsx
│   │   │   └── step-contact.tsx
│   │   ├── logo.tsx
│   │   ├── theme-toggle.tsx
│   │   ├── code-block.tsx
│   │   ├── pricing-card.tsx
│   │   ├── github-star-button.tsx
│   │   └── mobile-nav.tsx
│   └── lib/
│       ├── utils.ts           ← cn() helper
│       └── schemas.ts         ← Zod schemas for waitlist
├── .env.local                 ← GOOGLE_SHEETS_URL (Apps Script URL)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── IMPLEMENTATION_PLAN.md     ← This file
```

---

## Content Copy (Draft)

### Hero
- **Tagline:** "The understanding layer for Kubernetes"
- **Subtitle:** "AI-powered manifest generation, application personas, and a curated production stack — from Dockerfile to production-ready cluster in minutes."
- **CTA 1:** "Get Started" → docs
- **CTA 2:** "Join the Waitlist" → #waitlist

### Features (BentoGrid card descriptions)
1. **AI Manifest Generation** — "Point dorgu at your Dockerfile or Compose file. Get production-ready Deployments, Services, Ingress, HPA, ArgoCD config, CI/CD workflows, and a human-readable persona doc."
2. **Application Personas** — "Give your apps identity. ApplicationPersona CRDs capture what your app needs — resources, scaling, health, dependencies, ownership — and persist it in the cluster."
3. **Cluster Setup Wizard** — "Bootstrap a production stack in minutes. cert-manager, ingress-nginx, CloudNativePG, OpenObserve, Argo CD, External Secrets — with an educational wizard that teaches as it installs."
4. **Kubernetes Operator** — "Validate deployments against personas. Advisory or enforcing webhooks, Prometheus-based resource learning, ArgoCD sync tracking — all read-only, never touching your workloads."
5. **Platform Dashboard** — "Real-time cluster visualization. See nodes, resources, addons, and application health via WebSocket-powered live updates."
6. **GitOps Native** — "Generates ArgoCD Applications, scaffolds App-of-Apps directories, respects your GitOps workflows. Helm or declarative — your choice."

---

## Key Decisions Log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| SPA vs MPA | Single page | Focus is visibility + waitlist; no blog/about needed yet |
| Waitlist storage | Google Sheets | Simplest, free, sharable, sufficient for early traction |
| Hosting | Vercel | Free, auto-deploy, perfect Next.js fit |
| Domain | dorgu.in | User choice |
| Analytics | Vercel Analytics | Free tier, zero-config, no GDPR cookie banner needed |
| Logo | Text wordmark + mascot PNG | No designed logo yet; mascot provides visual identity |
| 3D background | Three.js DottedSurface, lazy-loaded | Visual polish without blocking page load |
