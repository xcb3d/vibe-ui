# Vibe UI - Development Guide

## Overview

Vibe UI is a component library like shadcn/ui but supports **multiple visual styles** (currently 2, target 20+).

**Tech Stack:**

- React + TypeScript
- Tailwind CSS v4
- Radix UI primitives
- Turborepo monorepo
- pnpm workspaces

## Project Structure

```
vibe-ui/
├── apps/
│   └── docs/                           # Next.js 15 documentation site
│       ├── app/
│       │   ├── page.tsx                # Homepage with style switcher
│       │   ├── docs/                   # Documentation pages
│       │   └── components/             # Component documentation
│       ├── components/
│       │   ├── demos/                  # Demo & Preview system
│       │   │   ├── create-stateless-previews.tsx   # Factory: stateless JSX
│       │   │   ├── create-stateful-previews.tsx    # Factory: stateful JSX
│       │   │   ├── create-stateful-demos.tsx       # Factory: demo components
│       │   │   ├── theme-registry.ts               # Theme component registry
│       │   │   ├── index.tsx                       # Themed demo exports
│       │   │   ├── minimal/
│       │   │   │   ├── stateless-previews.tsx      # Minimal stateless
│       │   │   │   ├── stateful-previews.tsx       # Minimal stateful
│       │   │   │   ├── example-previews.tsx        # Merge file
│       │   │   │   └── stateful-demos.tsx          # Demo components
│       │   │   └── neubrutalism/
│       │   │       ├── stateless-previews.tsx      # Neubrutalism stateless
│       │   │       ├── stateful-previews.tsx       # Neubrutalism stateful
│       │   │       ├── example-previews.tsx        # Merge file
│       │   │       └── stateful-demos.tsx          # Demo components
│       │   ├── style-provider.tsx      # Style context & hook
│       │   ├── style-switcher/         # Style switcher component
│       │   ├── theme-switcher/         # Dark/light mode switcher
│       │   ├── docs-sidebar/           # Sidebar navigation
│       │   ├── site-header/            # Header component
│       │   ├── preview-code-tabs/      # Code preview tabs
│       │   └── ...
│       └── lib/
│           ├── utils.ts
│           └── component-docs.ts       # Component documentation data
│
├── packages/
│   ├── cli/                            # CLI tool (@vibe-ui/cli)
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── commands/
│   │   │   │   ├── init.ts
│   │   │   │   ├── add.ts
│   │   │   │   └── list.ts
│   │   │   └── utils/
│   │   │       └── registry.ts
│   │   └── dist/                       # Built CLI
│   │
│   ├── registry/                       # Component registry
│   │   ├── registry.json               # Component metadata
│   │   ├── ui/                         # Component source files
│   │   │   ├── minimal/                # Minimal theme components
│   │   │   └── neubrutalism/           # Neubrutalism theme components
│   │   ├── styles/                     # Style CSS files
│   │   │   ├── minimal/
│   │   │   └── neubrutalism/
│   │   └── lib/
│   │
│   ├── ui/                             # NPM package (future)
│   └── config/                         # Shared configs
│
└── docs/                               # Development documentation
    ├── DEVELOPMENT.md                  # This file
    └── demos-and-previews.md           # Demo system documentation
```

## Commands

```bash
# Install dependencies
pnpm install

# Run docs site
pnpm dev --filter @vibe-ui/docs

# Build CLI
pnpm build --filter @vibe-ui/cli

# Build all
pnpm build
```

## Style System

### Current Styles

| Style          | Description                          |
| -------------- | ------------------------------------ |
| `minimal`      | Clean, Swiss-style, white background |
| `neubrutalism` | Vivid colors and hard shadows        |

### How It Works

1. Each style has its own component folder in `packages/registry/ui/{style}/`
2. Components use **direct Tailwind classes** (e.g., `bg-zinc-900`, `text-white`)
3. Dark mode uses Tailwind's `dark:` variant (e.g., `dark:bg-gray-800`)
4. `StyleProvider` context manages which style folder to use
5. No shared CSS variables - each style defines its own colors inline

### Adding a New Style

1. Create component folder `packages/registry/ui/new-style/`

2. Create components with style-specific Tailwind classes:

```tsx
// packages/registry/ui/new-style/button.tsx
export const buttonStyles = {
  base: "inline-flex items-center justify-center ...",
  variants: {
    default: "bg-your-color text-white hover:bg-your-hover dark:bg-dark-color",
    // ... other variants
  },
};
```

3. Update `apps/docs/components/style-provider.tsx`:

```typescript
const styles = [
  // ... existing styles
  { name: "new-style", label: "New Style", description: "Description" },
];
```

4. Update `packages/registry/registry.json` to add new style

5. Create demo files in `apps/docs/components/demos/new-style/`

6. (Optional) Create CSS file `packages/registry/styles/new-style/globals.css` for any shared variables

## Components

### Current Components (47)

**Form:** button, input, label, textarea, checkbox, switch, select, form, radio-group
**Display:** card, badge, avatar, separator, skeleton, calendar, table
**Feedback:** alert, tooltip, sonner, progress
**Overlay:** dialog, dropdown-menu, popover, sheet, alert-dialog, context-menu
**Navigation:** tabs, accordion, collapsible, navigation-menu, breadcrumb, pagination, menubar
**Data Entry:** slider, toggle, toggle-group, command, date-picker
**Layout:** aspect-ratio, scroll-area, resizable
**Typography:** hover-card

### Adding a New Component

1. Create component in `packages/registry/ui/{theme}/new-component.tsx`

2. Update `packages/registry/registry.json`:

```json
{
  "name": "new-component",
  "type": "registry:ui",
  "description": "...",
  "files": [{ "path": "ui/{theme}/new-component.tsx", "type": "registry:ui" }],
  "dependencies": ["@radix-ui/react-xxx"],
  "registryDependencies": []
}
```

3. Add docs in `apps/docs/lib/component-docs.ts`

4. Add preview (see [Demos & Previews](./demos-and-previews.md))

## Demo & Preview System

See [demos-and-previews.md](./demos-and-previews.md) for detailed documentation.

### Quick Reference

| File                             | Purpose                              |
| -------------------------------- | ------------------------------------ |
| `create-stateless-previews.tsx`  | Factory for components WITHOUT hooks |
| `create-stateful-previews.tsx`   | Factory for components WITH hooks    |
| `create-stateful-demos.tsx`      | Factory for full demo components     |
| `{theme}/stateless-previews.tsx` | Theme-specific stateless previews    |
| `{theme}/stateful-previews.tsx`  | Theme-specific stateful previews     |
| `{theme}/example-previews.tsx`   | Merge stateless + stateful           |
| `{theme}/stateful-demos.tsx`     | Theme-specific demo components       |

### Adding a Preview

**Stateless (no hooks):** Edit `create-stateless-previews.tsx` + `{theme}/stateless-previews.tsx`

**Stateful (uses hooks):** Edit `create-stateful-previews.tsx` + `{theme}/stateful-previews.tsx`

## CLI

### Build & Test

```bash
cd packages/cli
pnpm build

# Test locally
node dist/index.mjs list
node dist/index.mjs init -y
node dist/index.mjs add button card
```

### Commands

| Command                    | Description              |
| -------------------------- | ------------------------ |
| `vibe-ui init`             | Initialize project       |
| `vibe-ui add <components>` | Add components           |
| `vibe-ui list`             | List components & styles |

### Environment Variables

```bash
# Use local registry (for development)
VIBE_UI_LOCAL_REGISTRY="/path/to/packages/registry"

# Override remote registry URL
VIBE_UI_REGISTRY_URL="https://registry.vibe-ui.dev"
```

## Development Workflow

### Adding a New Feature

1. **New Component:**
   - Create in `packages/registry/ui/{theme}/`
   - Update registry.json & component-docs.ts
   - Add preview in demos system

2. **New Style:**
   - Add CSS variables in globals.css
   - Update StyleProvider
   - Copy CSS to registry
   - Create theme folder in `packages/registry/ui/`

3. **CLI Feature:**
   - Edit files in `packages/cli/src/`
   - Build and test locally

### Important Files

| File                                      | Purpose                      |
| ----------------------------------------- | ---------------------------- |
| `apps/docs/app/globals.css`               | CSS variables for all styles |
| `apps/docs/components/style-provider.tsx` | Style context & hook         |
| `packages/registry/registry.json`         | Component metadata           |
| `packages/cli/src/utils/registry.ts`      | Registry resolver            |
| `apps/docs/components/demos/`             | Demo & preview system        |

## Roadmap

- [ ] Add 15+ more styles (target 20+)
- [ ] Publish @vibe-ui/cli to npm
- [ ] Deploy docs to Vercel
- [ ] Add dark mode for each style
- [ ] Component playground on docs

## Links

- Docs: http://localhost:3000
- Radix UI: https://www.radix-ui.com/primitives
- Tailwind CSS v4: https://tailwindcss.com/docs
- shadcn/ui (reference): https://ui.shadcn.com
