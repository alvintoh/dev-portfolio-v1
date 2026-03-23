# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Commands

```bash
bun dev        # Start development server
bun build      # Production build
bun start      # Start production server
bun lint       # Run ESLint
bun typecheck  # Type-check without emitting (tsc --noEmit)
```

**No environment variables required.**

## Architecture

Single-page Next.js 16 portfolio using App Router. All content renders on `src/app/page.tsx` with anchor-based navigation (`#about`, `#experience`, `#projects`).

**Layout:** Fixed left sidebar (hero + nav + social links) on desktop; stacks vertically on mobile.

**Styling:** Tailwind CSS v4 via PostCSS. Theme tokens in `src/app/globals.css`:

- `--background: #0a192f` · `--foreground: #8892b0` · `--accent: #64ffda`

**Path alias:** `@/*` → `./src/*`

## Content & Data

- `src/data/hero-data.ts` — hero section (name, title, bio, avatar)
- Inline arrays in `ExperienceSection.tsx` and `ProjectsSection.tsx` — experience and project cards
- Static images → `public/images/`

## Key Components

- `Navigation.tsx` — `IntersectionObserver` for active section highlight
- `MouseGlow.tsx` — cursor ambient glow (desktop only)
- `figma/ImageWithFallback.tsx` — `<Image>` wrapper with error fallback

## Tooling

- **ESLint:** Import ordering enforced (alphabetical, grouped). Config in `eslint.config.mjs`.
- **React Compiler:** `reactCompiler: true` in `next.config.ts` — automatic memoization enabled.
- **Tailwind CSS v4:** Config is CSS-only (no `tailwind.config.js`). Theme tokens live in `globals.css`, not a JS config file.

---

## Agents

Four agents in `.claude/agents/`. Invoke the one matching your task:

| Agent       | Use when…                                              |
| ----------- | ------------------------------------------------------ |
| `frontend`  | React, Next.js App Router, TypeScript, Tailwind code   |
| `backend`   | Route Handlers, Server Actions, server-side TypeScript |
| `design`    | Layouts, spacing, hierarchy, motion, accessibility     |
| `portfolio` | Features, content, SEO, recruiter experience           |

---

## Skills

Invoke with `/skill-name`. Grouped by the agent best suited for the task.

### `frontend` — React, Next.js, TypeScript, Tailwind

- `/superpowers:brainstorming` — explore requirements before building any component
- `/frontend-design` — generate polished, distinctive UI; avoids generic AI aesthetics
- `/feature-dev` — guided feature development with codebase understanding
- `/superpowers:test-driven-development` — write tests before implementation code
- `/simplify` — review changed code for quality and efficiency
- `/superpowers:verification-before-completion` — run checks before claiming work is done

### `backend` — Route Handlers, Server Actions, server-side TS

- `/superpowers:brainstorming` — clarify requirements before writing server-side logic
- `/claude-api` — scaffold Claude API / Anthropic SDK integrations
- `/superpowers:systematic-debugging` — structured root-cause analysis before fixing
- `/superpowers:test-driven-development` — write tests before implementation

### `design` — Layouts, spacing, hierarchy, motion, accessibility

- `/superpowers:brainstorming` — explore design direction and constraints first
- `/frontend-design` — create distinctive interfaces with intentional aesthetics
- `/simplify` — refine and tighten visual implementation after changes

### `portfolio` — Features, content, SEO, recruiter experience

- `/superpowers:brainstorming` — ideate features and content strategy
- `/feature-dev` — plan and execute new portfolio sections end-to-end
- `/claude-code-setup` — analyse repo and recommend Claude Code automations
- `/claude-md-management:claude-md-improver` — audit and improve this CLAUDE.md

### Workflow (any agent)

- `/superpowers:writing-plans` — write an implementation plan before touching code
- `/superpowers:executing-plans` — execute a written plan with review checkpoints
- `/superpowers:dispatching-parallel-agents` — run 2+ independent tasks in parallel
- `/superpowers:requesting-code-review` — verify work meets requirements before merging
- `/superpowers:finishing-a-development-branch` — structured options when implementation is complete
