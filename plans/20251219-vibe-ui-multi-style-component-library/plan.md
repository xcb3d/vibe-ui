# Vibe UI - Multi-Style Component Library

## Overview

Build a shadcn/ui-style component library supporting 20-30 visual styles with both copy-paste CLI and NPM package distribution.

**Tech Stack:** React + Tailwind CSS + Radix UI + CVA
**Distribution:** CLI (shadcn-style) + NPM Package
**Documentation:** Next.js with interactive style switcher

---

## Project Structure

```
vibe-ui/
├── apps/
│   └── docs/                    # Next.js documentation site
├── packages/
│   ├── cli/                     # CLI tool for component installation
│   ├── registry/                # Component registry & source
│   │   ├── styles/              # Style definitions
│   │   │   ├── minimal/         # Minimalism style
│   │   │   ├── glass/           # Glassmorphism style
│   │   │   ├── brutalist/       # Brutalism style
│   │   │   ├── neon/            # Cyberpunk/Neon style
│   │   │   └── ...              # 20-30 styles
│   │   ├── ui/                  # Base component source
│   │   └── registry.json        # Component manifest
│   ├── ui/                      # NPM package (compiled)
│   └── config/                  # Shared configs (ESLint, TS, Tailwind)
├── turbo.json                   # Turborepo config
└── package.json                 # Root package.json
```

---

## Phases

| Phase | Name                        | Status  | Priority |
| ----- | --------------------------- | ------- | -------- |
| 01    | Project Setup & Monorepo    | Pending | P0       |
| 02    | Core Component Architecture | Pending | P0       |
| 03    | Style System Design         | Pending | P0       |
| 04    | CLI Development             | Pending | P1       |
| 05    | Documentation Site          | Pending | P1       |
| 06    | Initial Styles (5 styles)   | Pending | P1       |
| 07    | Extended Styles (15 more)   | Pending | P2       |
| 08    | Testing & QA                | Pending | P2       |
| 09    | NPM Package Build           | Pending | P2       |
| 10    | Launch & Publishing         | Pending | P3       |

---

## Key Decisions

### 1. Style System Architecture

- **CSS Variables** for theming (colors, radius, shadows)
- **Style-specific Tailwind presets** for each style
- **CVA variants** stay consistent, only token values change

### 2. Component Strategy

- **20 core components** initially (Button, Card, Input, etc.)
- **Radix UI primitives** for accessibility
- **Single source, multi-style output**

### 3. Distribution Model

- **CLI first** (like shadcn) for copy-paste
- **NPM fallback** for teams preferring packages
- **Registry JSON** serves as source of truth

---

## Dependencies

- Turborepo (monorepo)
- Next.js 15 (docs)
- Radix UI (primitives)
- Tailwind CSS v4
- class-variance-authority (CVA)
- tailwind-merge + clsx

---

## Success Criteria

- [ ] 20 core components working across 5 initial styles
- [ ] CLI can install components with style selection
- [ ] Docs site shows live style switching
- [ ] NPM package published and usable
- [ ] All components pass accessibility audit

---

## Detailed Phases

See individual phase files:

- [Phase 01: Project Setup](./phase-01-project-setup.md)
- [Phase 02: Core Components](./phase-02-core-components.md)
- [Phase 03: Style System](./phase-03-style-system.md)
- [Phase 04: CLI Development](./phase-04-cli-development.md)
- [Phase 05: Documentation](./phase-05-documentation.md)
