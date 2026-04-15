# CLAUDE.md

## Quick Start

```bash
bun install   # install dependencies
bun dev       # start development server
```

## Commands

```bash
bun build      # production build
bun start      # start production server
bun lint       # run ESLint
bun typecheck  # type-check without emitting (tsc --noEmit)
```

**Code review:** Ask Claude directly — "review `ComponentName.tsx` for design issues" — no commands needed.

No environment variables required.

## Architecture

Single-page Next.js 16 portfolio using App Router. All content renders on `src/app/page.tsx` with anchor-based navigation (`#about`, `#experience`, `#projects`).

**Layout:** Fixed left sidebar (hero + nav + social links) on desktop; stacks vertically on mobile.

**Styling:** Tailwind CSS v4 via PostCSS. Theme tokens in `src/app/globals.css`:

- `--background: #1e1e2e` · `--foreground: #a6adc8` · `--accent: #54d8b9`

**Path alias:** `@/*` → `./src/*`

## Content, Data & Key Components

- `src/data/hero-data.ts` — hero section (name, title, bio, avatar)
- `src/data/experience-data.ts` — experience cards
- `src/data/project-data.ts` — project cards
- `src/data/social-links-data.ts` — social links (GitHub, LinkedIn, YouTube, Email)
- Static images → `public/images/`
- `Navigation.tsx` — `IntersectionObserver` for active section highlight
- `MouseGlow.tsx` — cursor ambient glow (desktop only)
- `figma/ImageWithFallback.tsx` — `<Image>` wrapper with error fallback

## Tooling

- **ESLint:** Import ordering enforced (alphabetical, grouped). Config in `eslint.config.mjs`.
- **React Compiler:** `reactCompiler: true` in `next.config.ts` — automatic memoization enabled.
- **Tailwind CSS v4:** Config is CSS-only (no `tailwind.config.js`). Theme tokens live in `globals.css`, not a JS config file.

---

## Agents

Eight agents in `.claude/agents/` (7 user-facing + 1 internal). Invoke the one matching your task:

| Agent          | Use when…                                                        |
| -------------- | ---------------------------------------------------------------- |
| `architect`    | Repository structure, boundaries, data flow, diagrams            |
| `frontend`     | React, Next.js App Router, TypeScript, Tailwind code             |
| `backend`      | Route Handlers, Server Actions, server-side TypeScript           |
| `design`       | Layouts, spacing, hierarchy, motion, accessibility               |
| `spec`         | Data schemas, TypeScript contracts, API specs, prop interfaces   |
| `devops`       | CI/CD, Vercel deployment, security headers, environments         |
| `enhancement`  | Roadmap, future features, improvement prioritisation             |

> `docs` is an internal assembler agent used by `/docs-assemble` — not invoked directly.

---

## Skills

Project-specific skills in `.claude/skills/`. Invoke with `/skill-name`.

| Skill | Agent | Purpose |
| -------------- | ----------- | ------------------------------------------------------- |
| `/fe-create` | `frontend` | Scaffold and build a new frontend feature following existing project patterns, then lint + typecheck |
| `/fe-review` | `frontend` | Lint + typecheck, then review all components for TypeScript, React, Next.js, performance, a11y, and security |
| `/design-review` | `design` | Review all components for spacing, hierarchy, typography, colour, responsive design, motion, and accessibility |
| `/arch-diagram` | `architect` | Generate Excalidraw diagrams of repository structure, data flow, and system architecture |
| `/arch-add` | `architect` | Evaluate whether adding a new library or tool is architecturally sound before installing |
| `/arch-replace` | `architect` | Evaluate whether a library or tool replacement is sound before committing to migration |
| `/docs-assemble` | `docs` | Dispatch all agents in parallel to write their section, then assemble a complete README.md |
| `/commit-review` | any | Stage all changes, review them, and suggest a commit message before deciding to commit/push |
