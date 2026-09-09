# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Next.js dev server (Turbopack), http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals + next/typescript)
```

There is no test runner configured. `eslint-config-next` treats `jest` as expected tooling but no Jest setup exists.

## Stack

Next.js 16 (App Router) + React 19 + TypeScript (strict) + Tailwind CSS v4. Deployed on Vercel. Live at https://www.elpis.cc/.

## Architecture

**This is a static content-driven portfolio site.** There is no backend, database, or API route. Every page is a client component (`"use client"`) and all displayed data is hardcoded in `source/`.

### Directory layout

- `app/` — routes only. One folder per page (`/`, `/about`, `/skills`, `/projects`, `/contact`), plus `layout.tsx`, `not-found.tsx`, and `styles/global.css`. Pages compose components and pull their data from `source/`.
- `source/config.ts` — all site content that isn't projects: social links, resume links, skill categories with proficiency levels, certifications, about-page bio/images/fun-facts, and the experience/birth-date anchors. **Edit this file to change site copy.**
- `source/projects.tsx` — the `PROJECTS` array (typed `Project[]`) plus large blocks of commented-out project entries kept as an archive. Portfolio images are Cloudinary URLs; `featured.images` drives the project lightbox gallery.
- `source/utils.ts` — `cn()` (clsx + tailwind-merge), plus `calculateAge` / `calculateExperience` which compute from date strings in `config.ts` at render time so "years of experience" is always current.
- `source/components/general/` — site chrome used by every page via `AppProvider` (NavBar, Footer, SiteBackground, ProjectLightbox).
- `source/components/reusables/` — animated text/UI effects (DecryptedText, TextType, SplitText, CountUp, GradientText, SpotlightCard, FloatingLines, PageTransition) and `reusables/image/` for progressive image loading.
- `source/components/providers/` — `AppProvider` wraps all pages (top loader, tooltip, toaster, nav, footer, background); `TimerProvider` exposes `useTimer()`, a 1-second ticking timestamp context.

### Key conventions

- **Path alias:** `@/*` maps to the repo root, so imports are `@/source/...` and `@/app/...`.
- **Animation:** the dependency is `motion` (v12), but code imports from **both** `framer-motion` and `motion/react` (framer-motion is a transitive dep). Match whichever the file you're editing already uses.
- **Every page wraps its content in `<PageTransition>`** for route-change animation.
- **Styling is Tailwind v4 via `@import "tailwindcss"` in `global.css`** — no `tailwind.config`. Theme tokens, a fully custom breakpoint scale (`xsm`…`7xl`), custom utilities (`.glass`, `.text-gradient`, `.electric-glow`, `.full-screen-minus-footer`, `.animate-lightning`), and base resets all live in `app/styles/global.css`. Brand palette: `brand-primary` (#00f2ff cyan), `brand-secondary` (#7000ff purple), `bg-dark`, `card-dark`.
- **Dark theme only** — `colorScheme: "dark"` is fixed in `app/layout.tsx`.
- **Fonts** are self-hosted variable fonts loaded via `next/font/local` from `public/fonts/` (Inter → `--font-inter`, JetBrains Mono → `--font-jetbrains-mono`).
- **Images:** remote images (Cloudinary, Twitter avatars) are loaded through `SafeImage` / `LazyImage` / `LazyCDImage` (plain `<img>` with progressive low-res→high-res swap), **not** `next/image`. `LazyCDImage` rewrites Cloudinary URLs by injecting `/upload/c_scale,w_<n>/` for responsive sizing.

## Environment

`.env` holds EmailJS credentials for the contact form (`NEXT_PUBLIC_EMAILJS_*`). `NEXT_PUBLIC_HOST_URL` sets `HOST_URL` (used for metadata/canonical), defaulting to `http://localhost:3000`. See `.env.example`.
