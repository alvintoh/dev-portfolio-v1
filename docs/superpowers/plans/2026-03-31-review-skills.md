# Review Skills Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `/review-fe` and `/review-design` slash commands that run automated checks and systematically review all components against established best-practice criteria.

**Architecture:** Two skill files in `.claude/skills/` — one per review type. Each skill instructs Claude to run the relevant automated checks, read all component files in `src/app/`, apply the corresponding agent's review criteria, and return a single prioritised findings list. CLAUDE.md is updated to document both commands.

**Tech Stack:** Claude Code skills (markdown), Next.js/TypeScript (bun lint, tsc), Tailwind CSS

---

### Task 1: Create `/review-fe` skill

**Files:**
- Create: `.claude/skills/review-fe.md`

- [ ] **Step 1: Create `.claude/skills/` directory and write the skill file**

Create `.claude/skills/review-fe.md` with this exact content:

```markdown
---
name: review-fe
description: Review all frontend components in src/app/ against TypeScript, React, Next.js App Router, performance, accessibility, and security best practices. Runs lint and typecheck first, then returns a prioritised findings list.
---

You are running a structured frontend code review of this Next.js + TypeScript + Tailwind portfolio.

## Step 1 — Automated checks

Run the following commands and note any errors or warnings:

```bash
bun lint
bun typecheck
```

## Step 2 — Read all component files

Read every file in `src/app/`:
- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/AboutSection.tsx`
- `src/app/ExperiencesSection.tsx`
- `src/app/Footer.tsx`
- `src/app/HeroSection.tsx`
- `src/app/MouseGlow.tsx`
- `src/app/Navigation.tsx`
- `src/app/ProjectsSection.tsx`
- `src/app/SocialLinks.tsx`
- `src/app/figma/ImageWithFallback.tsx`

Also read any data files referenced:
- `src/data/hero-data.ts`
- `src/data/experience-data.ts`
- `src/data/project-data.ts`
- `src/data/social-links-data.ts`

## Step 3 — Review against these criteria

**TypeScript**
- Prefer `type` over `interface` unless declaration merging is needed
- Avoid `any` — use `unknown`, generics, or narrowed types
- Type component props explicitly — never rely on inferred JSX prop types
- Use `as const` for static data arrays
- Avoid type assertions (`as Foo`)

**React & Hooks**
- Keep components single-responsibility
- Avoid index keys in lists — use stable, unique IDs
- Never create objects/arrays/functions inline in JSX props
- Use `useReducer` for complex local state over multiple `useState` calls
- Avoid `useEffect` for derived state — compute during render

**Next.js App Router**
- Default to Server Components — `"use client"` only for event handlers, browser APIs, or hooks
- Push `"use client"` as far down the tree as possible
- Use `generateMetadata` for SEO — never hardcode `<title>` in JSX
- Use `next/image` for all images with explicit `width`, `height`, and `alt`
- Use `next/font` — never load fonts via a `<link>` tag

**Performance & Bundle**
- Each `"use client"` boundary increases the JS bundle — flag unnecessary ones
- Avoid barrel files (`index.ts` re-exports) — they prevent tree-shaking
- Import only what you need — never import entire icon sets
- Prefer CSS transitions over JS-driven animations for simple effects

**Accessibility**
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<button>`) — never `<div>` for interactive elements
- All interactive elements must be keyboard-navigable with visible focus styles
- Every `<img>` needs a descriptive `alt`; use `alt=""` only for decorative images
- Icon-only buttons must have `aria-label`
- Colour contrast: 4.5:1 for normal text, 3:1 for large text (WCAG AA)

**Security**
- Never use `dangerouslySetInnerHTML` with user content
- Never put secrets in `NEXT_PUBLIC_` env vars
- Validate URLs in `href` props to prevent `javascript:` injection

## Step 4 — Return findings

Return a **numbered list of improvements, most impactful first**. For each finding:
- Short explanation of the issue
- Which file and line it appears in
- Code snippet only if it makes the fix significantly clearer

Include automated check output (lint/typecheck errors) at the top if any were found.
```

- [ ] **Step 2: Verify the file was created**

```bash
ls .claude/skills/
```
Expected: `review-fe.md` appears in the output.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/review-fe.md
git commit -m "feat(skills): add /review-fe slash command"
```

---

### Task 2: Create `/review-design` skill

**Files:**
- Create: `.claude/skills/review-design.md`

- [ ] **Step 1: Write the skill file**

Create `.claude/skills/review-design.md` with this exact content:

```markdown
---
name: review-design
description: Review all components in src/app/ against UI/UX best practices — spacing, visual hierarchy, typography, colour, responsive design, motion, and accessibility. Returns a prioritised findings list.
---

You are running a structured UI/UX design review of this Next.js + Tailwind CSS portfolio.

## Step 1 — Read all component and style files

Read every file in `src/app/`:
- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/AboutSection.tsx`
- `src/app/ExperiencesSection.tsx`
- `src/app/Footer.tsx`
- `src/app/HeroSection.tsx`
- `src/app/MouseGlow.tsx`
- `src/app/Navigation.tsx`
- `src/app/ProjectsSection.tsx`
- `src/app/SocialLinks.tsx`
- `src/app/figma/ImageWithFallback.tsx`

## Step 2 — Review against these criteria

**Spacing & Layout**
- Use an 8pt grid — all spacing should be multiples of 4 or 8 (Tailwind: `2`, `4`, `6`, `8`, `12`, `16`, `24`, `32`)
- Sections need generous vertical breathing room (`py-20` to `py-32`)
- Prefer `gap` over `margin` for spacing between siblings in flex/grid
- Whitespace is content — empty space directs attention and reduces cognitive load

**Visual Hierarchy**
- One primary focal point per section — don't split the user's attention
- Hierarchy: size → weight → colour → position
- Accent colour (`#64ffda`) should be used sparingly — overuse kills its meaning
- Headings should form a scannable outline

**Typography**
- Minimum body font size: 16px
- Line length: 60–75 characters for prose (`max-w-xl` to `max-w-2xl`)
- Line height: `leading-relaxed` for body copy, `leading-tight` for headings
- One `<h1>` per page, `<h2>` per section, `<h3>` for subsections — never skip levels
- Avoid pure white text on dark backgrounds — use off-white to reduce eye strain

**Colour**
- WCAG AA contrast: 4.5:1 for normal text, 3:1 for large text and UI components
- Never communicate information through colour alone — pair with icons or labels
- Palette: background `#0a192f`, foreground `#8892b0`, accent `#64ffda` — flag any deviations

**Component Design**
- Cards: consistent border-radius, padding, and shadow across all instances
- Buttons/links: always distinguishable from plain text
- Icons: consistent size within context; paired with a label unless universally obvious

**Interactive States**
Every interactive element needs:
- **Hover** — subtle change confirming interactivity (`transition-colors duration-150`)
- **Focus** — visible ring for keyboard users (`focus-visible:ring-2`)
- **Active** — brief feedback on click
- **Disabled** — reduced opacity, `cursor-not-allowed`

**Motion & Animation**
- Animation must have purpose — not decoration
- Entrance: 150–300ms `ease-out`; exit: 100–200ms `ease-in`
- Always support `prefers-reduced-motion`
- `MouseGlow.tsx` — verify it only runs on desktop and respects reduced motion

**Responsive Design**
- Mobile-first — base styles for mobile, layer up with `md:` and `lg:`
- Test breakpoints: 375px, 390px, 768px, 1280px, 1920px
- Sidebar layout (`lg:` fixed left panel) must stack vertically on mobile
- Text must never overflow — flag missing `truncate`, `line-clamp`, or `break-words`
- Use `h-dvh` not `h-screen` — accounts for mobile browser chrome

**Navigation**
- Active section highlight must be visible (Navigation.tsx uses IntersectionObserver — verify it works)
- Anchor links must account for sticky header height via `scroll-margin-top`

**Images & Media**
- Explicit `width` and `height` on all `next/image` usage to prevent CLS
- `alt` text describes content meaningfully

**Accessibility**
- Semantic HTML throughout — never `<div>` for interactive elements
- Visible focus styles on all interactive elements
- Minimum 44×44px touch targets on mobile
- Layout must not break at 200% browser zoom

## Step 3 — Return findings

Return a **numbered list of improvements, most impactful first**. For each finding:
- Short explanation of the issue
- Which file and approximate line it appears in
- Tailwind snippet only if it makes the fix significantly clearer
```

- [ ] **Step 2: Verify the file was created**

```bash
ls .claude/skills/
```
Expected: both `review-fe.md` and `review-design.md` appear.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/review-design.md
git commit -m "feat(skills): add /review-design slash command"
```

---

### Task 3: Update CLAUDE.md to document both commands

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Add review commands to the Skills section**

In `CLAUDE.md`, find the `### \`frontend\` — React, Next.js, TypeScript, Tailwind` section and add `/review-fe` as the first bullet:

```markdown
- `/review-fe` — run lint + typecheck, then review all components for TypeScript, React, Next.js, performance, a11y, and security issues
```

Find the `### \`design\` — Layouts, spacing, hierarchy, motion, accessibility` section and add `/review-design` as the first bullet:

```markdown
- `/review-design` — review all components for spacing, visual hierarchy, typography, colour, responsive design, motion, and accessibility
```

- [ ] **Step 2: Verify CLAUDE.md renders correctly**

Read `CLAUDE.md` and confirm both commands appear under their respective agent sections with correct formatting.

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs(CLAUDE.md): document /review-fe and /review-design commands"
```
