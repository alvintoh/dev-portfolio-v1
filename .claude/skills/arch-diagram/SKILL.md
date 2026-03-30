---
name: arch-diagram
description: >
  Generate Excalidraw architecture diagrams for the current repository.
  Use when the user asks to "diagram the architecture", "map project structure",
  "visualize module boundaries", "show data flow", or "draw system design".
  Creates 3 diagrams: folder structure, data flow, and system architecture.
  Saves output to docs/diagrams/ in the project.
disable-model-invocation: true
argument-hint: "[all|structure|dataflow|architecture]"
---

# Architecture Diagram Generator

Generate Excalidraw diagrams for the current repository and save them
to `docs/diagrams/` in the project root.

## Arguments

- `/arch-diagram all` — Generate all 3 diagrams (default)
- `/arch-diagram structure` — Folder/file structure only
- `/arch-diagram dataflow` — Data flow diagram only
- `/arch-diagram architecture` — System architecture only

If no argument given, generate all 3.

## Step 1: Analyze the Repository

Before drawing anything, gather context:

```bash
# Get project structure (2 levels deep, ignore noise)
find . -maxdepth 3 -type f \
  -not -path '*/node_modules/*' \
  -not -path '*/.git/*' \
  -not -path '*/dist/*' \
  -not -path '*/build/*' \
  -not -path '*/.next/*' \
  -not -path '*/gen/*' \
  -not -name '*.lock' \
  -not -name '*.sum' \
  | head -80

# Get directory tree (folders only)
find . -maxdepth 3 -type d \
  -not -path '*/node_modules/*' \
  -not -path '*/.git/*' \
  -not -path '*/dist/*' \
  -not -path '*/build/*' \
  | sort

# Check for key config files that reveal the stack
cat package.json 2>/dev/null | head -30
cat go.mod 2>/dev/null | head -20
cat buf.yaml 2>/dev/null || cat buf.gen.yaml 2>/dev/null
ls proto/ 2>/dev/null || ls *.proto 2>/dev/null
```

Read the project's CLAUDE.md if it exists for additional context about
the architecture, conventions, and structure.

## Step 2: Create Output Directory

```bash
mkdir -p docs/diagrams
```

## Step 3: Generate Diagrams

Use the **Excalidraw MCP tool** (`create_view`) to render each diagram
inline in the conversation. Follow the Excalidraw format rules strictly.

### General Diagram Rules

- ALWAYS start with a `cameraUpdate` as the first element
- Use the Excalidraw color palette consistently:
  - Light Blue `#a5d8ff` — Frontend / UI layer
  - Light Green `#b2f2bb` — Backend / API layer
  - Light Orange `#ffd8a8` — External services / infra
  - Light Purple `#d0bfff` — Middleware / processing
  - Light Teal `#c3fae8` — Data / storage layer
  - Light Yellow `#fff3bf` — Config / definitions (like .proto files)
  - Light Red `#ffc9c9` — Generated code (don't edit)
- Use `roundness: { "type": 3 }` on all rectangles
- Minimum fontSize: 16 for labels, 20+ for titles
- Use labeled shapes (the `label` property) instead of separate text elements
- Use arrow bindings to connect shapes cleanly
- Use background zone rectangles (opacity: 30-35) to group related components
- Use multiple `cameraUpdate` elements to guide attention progressively

---

### Diagram A: Folder Structure

**Purpose:** Show the directory layout with color-coded layers.

**Layout approach:**

- Tree/hierarchy flowing top-to-bottom or left-to-right
- Root project at top, major directories as branches
- Color-code by layer (frontend = blue, backend = green, shared = yellow)
- Mark /gen or generated folders in red with "DO NOT EDIT" annotation
- Show key files inside each directory (main entry points, config files)
- Camera: start at XL (1200x900), may need XXL for large repos

Draw each directory as a labeled rectangle. Use arrows to show
parent → child relationships. Group with translucent zone backgrounds.

---

### Diagram B: Data Flow

**Purpose:** Show how data moves through the system end-to-end.

**Layout approach:**

- Horizontal left-to-right flow
- Start from source-of-truth contracts/data definitions
- Show generation/transformation steps where relevant
- Show request and response paths through client, transport, server, and storage
- Use labeled arrows for key transitions

---

### Diagram C: System Architecture

**Purpose:** High-level birds-eye view of the entire system.

**Layout approach:**

- Layered zones: frontend, application/API, backend/data
- Show external services on the side (if applicable)
- Highlight type-safety or contract boundaries where present
- Start with broad overview, then zoom by layer

---

## Step 4: Save Diagram Data

After rendering each diagram inline with the Excalidraw tool,
also save the element JSON so diagrams can be reopened and edited.

Repeat for `structure.excalidraw`, `dataflow.excalidraw`, and `architecture.excalidraw` in `docs/diagrams/`.

## Step 5: Summary

After generating all diagrams, report:

- Which diagrams were created
- File paths saved to `docs/diagrams/`
- A one-line description of what each shows
- Any parts of the architecture that were unclear or assumed
