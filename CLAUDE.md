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

Seven agents in `.claude/agents/`. Invoke the one matching your task:

| Agent          | Use when…                                                        |
| -------------- | ---------------------------------------------------------------- |
| `architect`    | Repository structure, boundaries, data flow, diagrams            |
| `frontend`     | React, Next.js App Router, TypeScript, Tailwind code             |
| `backend`      | Route Handlers, Server Actions, server-side TypeScript           |
| `design`       | Layouts, spacing, hierarchy, motion, accessibility               |
| `spec`         | Data schemas, TypeScript contracts, API specs, prop interfaces   |
| `devops`       | CI/CD, Vercel deployment, security headers, environments         |
| `enhancement`  | Roadmap, future features, improvement prioritisation             |

> `docs` is an internal assembler agent used by `/build-readme` — not invoked directly.

---

## Skills

Invoke with `/skill-name`. Grouped by the agent best suited for the task.

### `architect` — Repository structure, boundaries, and diagrams

- `/arch-diagram` — generate Excalidraw diagrams of repository structure, data flow, and system architecture
- `/superpowers:brainstorming` — explore architectural constraints and trade-offs before proposing structure changes
- `/superpowers:writing-plans` — draft a stepwise architecture refactor or re-organization plan before implementation
- `/superpowers:executing-plans` — execute architecture changes with checkpoints and boundary validation
- `/superpowers:verification-before-completion` — verify architecture changes with lint/typecheck/tests before declaring done
- `/simplify` — tighten folder/module structure and reduce unnecessary complexity after changes
- `/claude-md-management:claude-md-improver` — audit and improve this CLAUDE.md

### `frontend` — React, Next.js, TypeScript, Tailwind

- `/review-fe` — run lint + typecheck, then review all components for TypeScript, React, Next.js, performance, a11y, and security issues
- `/superpowers:brainstorming` — explore requirements before building
- `/frontend-design` — polished, distinctive UI; avoids generic AI aesthetics
- `/feature-dev` — guided feature development with codebase understanding
- `/superpowers:test-driven-development` — write tests before implementation
- `/simplify` — review changed code for quality and efficiency
- `/superpowers:verification-before-completion` — run checks before claiming done

### `backend` — Route Handlers, Server Actions, server-side TS

- `/claude-api` — scaffold Claude API / Anthropic SDK integrations
- `/superpowers:systematic-debugging` — structured root-cause analysis before fixing
- `/superpowers:test-driven-development` — write tests before implementation

### `design` — Layouts, spacing, hierarchy, motion, accessibility

- `/review-design` — review all components for spacing, visual hierarchy, typography, colour, responsive design, motion, and accessibility
- `/frontend-design` — create distinctive interfaces with intentional aesthetics
- `/simplify` — refine and tighten visual implementation after changes

### `spec` — Data schemas, contracts, and API design

- `/superpowers:brainstorming` — explore contract requirements and data shape decisions before implementation
- `/superpowers:writing-plans` — plan schema migrations or contract changes before touching code
- `/superpowers:verification-before-completion` — verify type safety and schema consistency before declaring done

### `devops` — CI/CD, deployment, and infrastructure

- `/superpowers:brainstorming` — explore deployment strategy and CI requirements before setting up pipelines
- `/superpowers:writing-plans` — plan infrastructure changes with rollback checkpoints
- `/superpowers:verification-before-completion` — verify deployment config and CI checks before merging

### `architect` + all agents — README and documentation

- `/build-readme` — dispatch all 7 agents in parallel to write their section, then assemble a complete README.md
- `/arch-diagram` — regenerate architecture diagrams; auto-updates the `## Architecture` section

### `enhancement` — Roadmap and improvement planning

- `/feature-dev` — plan and execute new portfolio sections end-to-end
- `/claude-code-setup` — analyse repo and recommend Claude Code automations
- `/superpowers:brainstorming` — explore feature requirements and trade-offs before committing to a roadmap item

### Workflow (any agent)

Scale steps to task size — not all are required:

- **Tiny** (typo, tweak): just do it
- **Small** (update a section): execute → verify → commit
- **Medium** (new component): brainstorm → plan → execute → verify → commit
- **Large** (major feature): all steps in order

1. `/superpowers:brainstorming` — explore intent and requirements first
2. `/superpowers:writing-plans` — write an implementation plan before touching code
3. `/superpowers:executing-plans` — execute the plan with review checkpoints
4. `/superpowers:verification-before-completion` — run checks before claiming done
5. `/superpowers:requesting-code-review` — verify work meets requirements before merging
6. `/superpowers:finishing-a-development-branch` — wrap up when implementation is complete

For independent parallel tasks at any stage: `/superpowers:dispatching-parallel-agents`
