# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Next.js dev server (Turbopack), http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals + next/typescript)

npm run preview  # build with OpenNext and serve it in the local Workers runtime (:8787)
npm run deploy   # build with OpenNext and deploy the Worker to Cloudflare
npm run upload   # build and upload a new Worker version without promoting it
```

There is no test runner configured. `eslint-config-next` treats `jest` as expected tooling but no Jest setup exists.

## Stack

Next.js 16 (App Router) + React 19 + TypeScript (strict) + Tailwind CSS v4. Live at https://www.elpis.cc/. Deployable to Vercel (zero config) and to Cloudflare Workers through the OpenNext adapter (see Deployment).

## Architecture

**This is a static content-driven portfolio site.** There is no backend, database, or API route. All displayed data is hardcoded in `source/`, and every route is statically prerendered.

Pages are **Server Components** that export their own `metadata` and compose sections; only the interactive pieces are client components (`"use client"`): nav, command palette, theme toggle, lightbox, hero showcase, contact form, and small islands such as `Reveal`, `LocalTime`, `Years`, `DimensionLine`, `CopyEmail`.

### Routes

- `/` — hero, selected work (the case studies), experience, how I work + toolkit, about teaser.
- `/projects` — case study rows, then the "More work" card grid.
- `/projects/[slug]` — one page per project that has a `caseStudy` (`generateStaticParams`, `dynamicParams = false`).
- `/about` — story, experience + education, toolkit (`#toolkit`), principles, photos, résumé links.
- `/contact` — channels and the EmailJS form.
- `/skills` permanently redirects to `/about#toolkit` (`next.config.ts`).
- `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`.

### Directory layout

- `app/` — routes only, plus `layout.tsx` (fonts, metadata, JSON-LD, theme init script) and `styles/global.css`.
- `source/config.ts` — all site content that isn't projects: profile, social links, résumé links, stats, principles, experience, education, toolkit, about copy/images, availability note. **Edit this file to change site copy.**
- `source/projects.tsx` — the `PROJECTS` array (typed `Project[]`). Projects with a `caseStudy` object get a case study page and appear first; the rest are "More work" cards. `CASE_STUDIES`, `MORE_WORK`, `getProject()` are derived from it. Retired projects are listed in a comment at the bottom.
- `source/theme.ts` — theme switching (see below).
- `source/utils.ts` — `cn()` (clsx + tailwind-merge), `calculateExperience` / `experienceLabel` (computed from `YEARS_OF_EXPERIENCE_START_DATE` at render so "years of experience" is always current), `pad()`.
- `source/components/general/` — site chrome used by every page via `AppProvider`: `NavBar`, `Footer` (title block + `ContactCTA` on every page except `/contact`), `SiteBackground`, `CommandPalette`, `ThemeToggle`, `Lightbox`.
- `source/components/reusables/` — `PageTransition`, `Reveal`, `SectionHeader`, `Frame`, `Shot`, `Logo`, `Icons` (inline brand SVGs), `LocalTime`, `Years`, `DimensionLine`, `CopyEmail`.
- `source/components/home/`, `work/`, `contact/` — page sections.
- `source/components/providers/` — `AppProvider` wraps all pages (top loader, toaster, nav, footer, background, command palette); `TimerProvider` exposes `useTimer()`, a 1-second ticking timestamp context (used by `LocalTime`).
- `source/og/og-image.html` — source for `public/og-image.png`; the render command is in its header comment.

### Key conventions

- **Path alias:** `@/*` maps to the repo root, so imports are `@/source/...` and `@/app/...`.
- **Design language:** an engineering-drawing motif. Serif display type, mono "annotation" labels, hairline rules, numbered sections (`§ 01`), figure captions (`Fig. 01`), registration marks (`.regmark`), and a title block in the footer. Keep new UI inside that vocabulary.
- **Theming:** two themes driven by `data-theme` on `<html>`: `dark` ("blueprint", the server default) and `light` ("paper"). An inline script in `layout.tsx` applies the stored choice, or the system preference, before first paint. **Components only use the semantic tokens** defined in `global.css` (`bg-bg`, `bg-raise`, `bg-sunk`, `text-ink`, `text-muted`, `text-faint`, `border-line`, `border-line-strong`, `text-accent`, `bg-accent`, `text-accent-ink`, `bg-ok`). Never hardcode `white`/`black` or hex colours in components.
- **Styling is Tailwind v4 via `@import "tailwindcss"` in `global.css`** — no `tailwind.config`. Theme tokens, a fully custom breakpoint scale (`xsm`…`7xl`), and the component classes (`.shell`, `.label`, `.display`, `.prose-body`, `.btn` / `.btn-primary` / `.btn-ghost`, `.link`, `.chip`, `.frame`, `.field`, `.regmark`) all live in `app/styles/global.css`.
- **Fonts** are self-hosted woff2 loaded via `next/font/local` from `public/fonts/`, with their CSS variables set on `<html>`: Geist (`font-sans`), Geist Mono (`font-mono`), Instrument Serif (`font-display`, used through `.display`).
- **Motion:**
  - Above-the-fold entrances and route changes are CSS only (`.rise` with a `--i` stagger index, `.page-enter`), so server-rendered content is never hidden behind JavaScript.
  - Scroll reveals use `<Reveal>` (IntersectionObserver toggling `.reveal.is-in`).
  - JS-driven animation (palette, lightbox, nav pill, hero showcase) imports from `motion/react`.
  - Everything respects `prefers-reduced-motion`.
- **Every page wraps its content in `<PageTransition>`.**
- **Images:** plain `<img>` through `Shot` (not `next/image`). Local project screenshots live in `public/work/` as `<name>-800.webp` and `<name>-1600.webp`; reference them as `/work/<name>` and `Shot` builds the `srcSet`. Cloudinary URLs get `f_auto,q_auto,c_scale,w_<n>` injected after `/upload/`. `Frame` wraps a `Shot` in the browser-chrome frame.
- **A fixed/absolute overlay must not be rendered inside the header:** the header uses `backdrop-filter`, which makes it the containing block for fixed descendants (the mobile menu is a sibling for this reason).

## Deployment (Cloudflare Workers)

The Worker is named `elpis-portfolio`. Configuration lives in three files:

- `wrangler.jsonc` — Worker name, compatibility date and flags, the static-assets binding. There are no R2, D1, KV or Images bindings because the site has no ISR, no `next/image` and no server state. The custom-domain route is present but commented out.
- `open-next.config.ts` — uses the static-assets incremental cache with cache interception, so prerendered pages are served from the Worker's assets without booting the Next.js server. If a route ever uses `revalidate` or `use cache`, switch to an R2 or KV cache.
- `public/_headers` — long-lived cache headers for `/_next/static/*`, `/fonts/*` and `/work/*`.

`@opennextjs/cloudflare` requires Next.js 16.4.5 or newer; keep `next` and `eslint-config-next` on the same version. Build output goes to `.open-next/` (git-ignored). `next.config.ts` redirects work unchanged on Workers.

`NEXT_PUBLIC_*` variables are inlined at **build** time, so they must be in `.env` (local `npm run deploy`) or in the build variables (Workers Builds); setting them as Worker runtime `vars` has no effect.

## Environment

`.env` holds EmailJS credentials for the contact form (`NEXT_PUBLIC_EMAILJS_*`). `NEXT_PUBLIC_HOST_URL` sets `HOST_URL` (used for metadata, canonical URLs, sitemap); when unset it falls back to `https://www.elpis.cc` in production builds and `http://localhost:3000` in development. See `.env.example`.
