# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Agents

Four specialised agents live in `.claude/agents/`. Invoke the one that matches your task:

| Agent ID | File | Use when… |
|---|---|---|
| `frontend` | `frontend.md` | Reviewing React, Next.js App Router, TypeScript, Tailwind code |
| `backend` | `backend.md` | Reviewing Route Handlers, Server Actions, TypeScript server-side code |
| `design` | `design.md` | Reviewing layouts, spacing, hierarchy, motion, states, accessibility |
| `portfolio` | `portfolio.md` | Ideas for features, content, SEO, and recruiter experience |

---

## Commands

```bash
bun dev        # Start development server
bun build      # Production build
bun start      # Start production server
bun lint       # Run ESLint
```

## Architecture

Single-page Next.js 16 portfolio using the App Router. All content renders on one page (`src/app/page.tsx`) with anchor-based section navigation (`#about`, `#experience`, `#projects`).

**Layout:** Two-column on desktop — fixed left sidebar (hero + nav + social links) and scrollable right main content. On mobile, the layout stacks vertically.

**Styling:** Tailwind CSS v4 via PostCSS. Theme colors defined as CSS custom properties in `src/app/globals.css`:
- `--background: #0a192f` (dark blue)
- `--foreground: #8892b0` (slate gray)
- `--accent: #64ffda` (cyan)

**Path alias:** `@/*` maps to `./src/*`.

## Content & Data

Portfolio content lives in two places:
- `src/data/hero-data.ts` — hero section data (name, title, bio, avatar)
- Inline arrays inside section components — experience cards and project cards are defined directly in `ExperienceSection.tsx` and `ProjectsSection.tsx`

Static images go in `public/images/`.

## Key Components

- `Navigation.tsx` — client component; uses `IntersectionObserver` to highlight the active section as the user scrolls
- `MouseGlow.tsx` — client component; ambient glow that follows the cursor (desktop only)
- `figma/ImageWithFallback.tsx` — `<Image>` wrapper with error fallback

## ESLint

Import ordering is enforced (alphabetical, grouped by type). The config is in `eslint.config.mjs` and extends `eslint-config-next`.

## React Compiler

`reactCompiler: true` is set in `next.config.ts`, enabling the experimental React Compiler for automatic memoization.
