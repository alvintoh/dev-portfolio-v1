# dev-portfolio-v1

Personal developer portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

[Live site](https://yourname.dev) · [Architecture](docs/diagrams/architecture.svg)

## Overview

Multi-page portfolio with a fixed left sidebar layout on the home page and a dedicated Tech Stack page with scrollspy navigation. Dark/light mode is detected from `prefers-color-scheme` on first visit and persisted to `localStorage`. All content is static TypeScript — no server, no CMS, no database.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Lucide Icons · React Icons

## Getting started

```bash
bun install   # install dependencies
bun dev       # start development server
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `bun dev`       | Start the development server             |
| `bun build`     | Build the app for production             |
| `bun start`     | Start the production server after build  |
| `bun lint`      | Run ESLint across the codebase           |
| `bun typecheck` | Type-check without emitting output files |

## Architecture

A multi-page Next.js 16 app using the App Router, composed in three layers: the app entry points (`src/app`) orchestrate layout and page structure, UI components (`src/components`) render each section in isolation grouped by page, and a static data layer (`src/data`) owns all content as typed TypeScript modules grouped by page.

### Folder structure

![Folder Structure](docs/diagrams/structure.svg)

### Data flow

![Data Flow](docs/diagrams/dataflow.svg)

### System architecture

![System Architecture](docs/diagrams/architecture.svg)

Run `/arch-diagram` in Claude Code to regenerate these diagrams if the component structure changes.

#### Pages

| Route        | File                         | Description                                                                                       |
| ------------ | ---------------------------- | ------------------------------------------------------------------------------------------------- |
| `/`          | `src/app/page.tsx`           | Home — fixed sidebar (hero, nav, social links) + scrollable content (about, experience, projects) |
| `/techstack` | `src/app/techstack/page.tsx` | Tech Stack — scrollspy category nav + 12-category tool grid with brand icons                      |

#### Key components

| Component          | Boundary       | Description                                                                                    |
| ------------------ | -------------- | ---------------------------------------------------------------------------------------------- |
| `ThemeProvider`    | `"use client"` | Dark/light context provider; persists to `localStorage`; lives in root layout                  |
| `HeaderNavigation` | `"use client"` | Sticky top nav with theme toggle, active-route highlight, mobile hamburger with portal overlay |
| `HomeNavigation`   | `"use client"` | Desktop-only scroll-spy nav using `IntersectionObserver`                                       |
| `TechStackGrid`    | `"use client"` | Scrollspy sidebar + mobile pill strip (hide-on-scroll-down, reveal-on-scroll-up)               |
| `MouseGlow`        | `"use client"` | `rAF`-throttled radial gradient cursor effect, desktop only, respects `prefers-reduced-motion` |

All section components (`HeroSection`, `AboutSection`, `ExperiencesSection`, `ProjectsSection`, `SocialLinks`, `Footer`) are Server Components — no `"use client"` boundary.

## Data contracts & schemas

All content is static TypeScript defined in `src/data/`, organised into page-scoped subdirectories. There is no runtime data fetching, no CMS, and no database — schemas are compile-time only.

### `src/data/home/`

| File                   | Exported type  | Description                                                                                     |
| ---------------------- | -------------- | ----------------------------------------------------------------------------------------------- |
| `hero-data.ts`         | `HeroData`     | Name, title, bio, and optional avatar path                                                      |
| `experience-data.ts`   | `Experience[]` | Work history cards with period, role, company, location, URL, description, and stack            |
| `project-data.ts`      | `Project[]`    | Portfolio cards with title, description, image path, stack, live URL, and optional GitHub stats |
| `social-links-data.ts` | `Social[]`     | Icon links — each entry holds a `react-icons` `IconType`, href, and accessible label            |
| `about-data.ts`        | `AboutData`    | About section copy with optional avatar, summary prose, and resume link                         |

### `src/data/techstack/`

| File                 | Exported type    | Description                                                                                                                                 |
| -------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `tech-stack-data.ts` | `TechCategory[]` | 12 categories, 30+ tools — each tool has name, icon, author, URL, and description; each category has a label, icon, and rationale paragraph |

Import via the `@/data/*` path alias (resolves to `./src/data/`):

```ts
import { heroData } from "@/data/home/hero-data";
import { techStackData } from "@/data/techstack/tech-stack-data";
```

**Conventions:** `as const` is used on static arrays for stricter literal inference. Optional fields (`?`) are used only where the value is genuinely absent in real data.

## Design system

Theme tokens are defined as CSS custom properties in `src/app/globals.css` and surfaced to Tailwind via `@theme inline`, which maps each token to a utility class (e.g. `bg-background`, `text-foreground`, `text-accent`).

**Dark mode is the default** (`:root`). Light mode is activated by setting `data-theme="light"` on the `<html>` element. On first visit the theme is read from `prefers-color-scheme` and then persisted to `localStorage`. `ThemeProvider` handles the hydration handshake — the server always renders dark, and a one-time `useEffect` corrects to the stored preference without a flash.

Theme switches transition smoothly via:

```css
transition:
  background-color 0.2s ease,
  color 0.2s ease;
```

### Token reference

| Token          | Dark (default) | Light (`data-theme="light"`) |
| -------------- | -------------- | ---------------------------- |
| `--background` | `#1e1e2e`      | `#f8fafc`                    |
| `--foreground` | `#a6adc8`      | `#3f4b5c`                    |
| `--heading`    | `#e2e8f0`      | `#0f172a`                    |
| `--accent`     | `#54d8b9`      | `#0f766e`                    |
| `--surface`    | `#313244`      | `#e2e8f0`                    |

Additional tokens (`--accent-rgb`, `--glow-rgb`, `--glow-opacity`, `--glow-size`, `--glow-fade`) support the `MouseGlow` ambient cursor effect and are defined per theme in `globals.css`.

## Environment variables

No environment variables are required to run this project locally.

If environment variables are added in future (for example, to support a contact form or external API), they should be:

1. Added to a `.env.example` file at the project root (committed, with values redacted)
2. Configured in Vercel under **Project Settings → Environment Variables**

## Deployment & CI/CD

Deployed on [Vercel](https://vercel.com). Merging to `main` triggers a production deployment automatically via Vercel's GitHub integration.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/dev-portfolio-v1)

Preview deployments are created automatically for every pull request — each PR gets its own isolated URL for review before merging to production.

### CI checks (GitHub Actions)

> **Note:** No CI workflow is configured yet. The workflow below is the recommended starting point — add it at `.github/workflows/ci.yml` to gate merges on passing checks.

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - name: Install dependencies
        run: bun install --frozen-lockfile
      - name: Lint
        run: bun lint
      - name: Type-check
        run: bun typecheck
      - name: Build
        run: bun build
```

This workflow runs on every push and PR: **install** → **lint** → **typecheck** → **build**. The `--frozen-lockfile` flag ensures the lockfile is never silently updated in CI.

## Roadmap

### In progress

- [ ] Currently exploring page for newest experiments and projects with new tools
- [ ] CV download button in the hero section (one-click PDF; recruiter-critical above the fold)
- [ ] Project archive page to showcase all past projects
- [ ] Heroes / Inspiration list (GitHub contributors with a one-liner description)

### Planned

- [ ] SEO metadata — personalised `<title>`, Open Graph tags, Twitter Card, and a branded OG image
- [ ] Contact form — Server Actions + Resend, lower friction than a bare email link
- [ ] Scroll-reveal entrance animations — subtle `opacity` + `translateY` respecting `prefers-reduced-motion`
- [ ] `Person` JSON-LD structured data for Google search presence
- [ ] `sitemap.xml` and `robots.txt` to ensure full indexing
- [ ] Custom domain — a Vercel subdomain signals an unfinished project to hiring managers

### Stretch goals

- [ ] Blog / technical writing section — 2–3 articles demonstrate communication depth beyond a badge list
- [ ] Project detail pages with full case studies (problem, role, technical decisions, outcomes)
- [ ] Command palette (`⌘K`) — keyboard-driven navigation that senior engineers notice
- [ ] Lighthouse CI in GitHub Actions — automate Core Web Vitals regression checks on every push
- [ ] Filtered project list — filter by language or domain
