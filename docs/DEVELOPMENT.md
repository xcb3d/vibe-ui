# Vibe UI - Development Guide

## Tổng quan

Vibe UI là một component library giống shadcn/ui nhưng hỗ trợ **nhiều visual styles** (hiện tại 5, target 20+).

**Tech Stack:**

- React + TypeScript
- Tailwind CSS v4
- Radix UI primitives
- Turborepo monorepo
- pnpm workspaces

## Cấu trúc Project

```
vibe-ui/
├── apps/
│   └── docs/                   # Next.js 15 documentation site
│       ├── app/
│       │   ├── page.tsx        # Homepage với style switcher
│       │   ├── docs/           # Documentation pages
│       │   └── components/     # Component documentation
│       ├── components/
│       │   ├── ui/             # UI components (18 components)
│       │   ├── style-provider.tsx
│       │   ├── style-switcher.tsx
│       │   └── docs-sidebar.tsx
│       └── lib/
│           ├── utils.ts
│           └── component-docs.ts
│
├── packages/
│   ├── cli/                    # CLI tool (@vibe-ui/cli)
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── commands/
│   │   │   │   ├── init.ts
│   │   │   │   ├── add.ts
│   │   │   │   └── list.ts
│   │   │   └── utils/
│   │   │       └── registry.ts
│   │   └── dist/               # Built CLI
│   │
│   ├── registry/               # Component registry
│   │   ├── registry.json       # Component metadata
│   │   ├── ui/                 # Component source files
│   │   ├── styles/             # Style CSS files
│   │   │   ├── minimal/
│   │   │   └── neubrutalism/
│   │   └── lib/
│   │
│   ├── ui/                     # NPM package (future)
│   └── config/                 # Shared configs
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

### 2 Styles hiện có

| Style          | Mô tả                                |
| -------------- | ------------------------------------ |
| `minimal`      | Clean, Swiss-style, white background |
| `neubrutalism` | Vivid colors and hard shadows        |

### Cách hoạt động

1. CSS variables được định nghĩa trong `globals.css` với selector `[data-style="..."]`
2. `StyleProvider` context quản lý state và set `data-style` attribute trên `<html>`
3. Components sử dụng CSS variables (`bg-primary`, `text-foreground`, etc.)

### Thêm style mới

1. Thêm CSS trong `apps/docs/app/globals.css`:

```css
[data-style="new-style"] {
  --color-background: hsl(...);
  --color-foreground: hsl(...);
  /* ... other variables */
}
```

2. Update `apps/docs/components/style-provider.tsx`:

```typescript
const styles = [
  // ... existing styles
  { name: "new-style", label: "New Style", description: "Description" },
];
```

3. Copy CSS to `packages/registry/styles/new-style/globals.css`

4. Update `packages/registry/registry.json` để thêm style mới

## Components

### 18 Components hiện có

**Form:** button, input, label, textarea, checkbox, switch, select
**Display:** card, badge, avatar, separator, skeleton
**Feedback:** alert, tooltip, sonner
**Overlay:** dialog, dropdown-menu
**Navigation:** tabs

### Thêm component mới

1. Tạo component trong `apps/docs/components/ui/new-component.tsx`

2. Copy sang `packages/registry/ui/new-component.tsx`

3. Update `packages/registry/registry.json`:

```json
{
  "name": "new-component",
  "type": "registry:ui",
  "description": "...",
  "files": [{ "path": "ui/new-component.tsx", "type": "registry:ui" }],
  "dependencies": ["@radix-ui/react-xxx"],
  "registryDependencies": []
}
```

4. Thêm docs trong `apps/docs/lib/component-docs.ts`

5. Update sidebar trong `apps/docs/components/docs-sidebar.tsx`

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

| Command                    | Mô tả                       |
| -------------------------- | --------------------------- |
| `vibe-ui init`             | Khởi tạo project            |
| `vibe-ui add <components>` | Thêm components             |
| `vibe-ui list`             | Liệt kê components & styles |

### Environment Variables

```bash
# Use local registry (for development)
VIBE_UI_LOCAL_REGISTRY="/path/to/packages/registry"

# Override remote registry URL
VIBE_UI_REGISTRY_URL="https://registry.vibe-ui.dev"
```

## Development Workflow

### Thêm feature mới

1. **Component mới:**
   - Tạo trong `apps/docs/components/ui/`
   - Test trên docs site
   - Copy sang `packages/registry/ui/`
   - Update registry.json & component-docs.ts

2. **Style mới:**
   - Thêm CSS variables trong globals.css
   - Update StyleProvider
   - Copy CSS sang registry

3. **CLI feature:**
   - Edit files trong `packages/cli/src/`
   - Build và test local

### File quan trọng

| File                                      | Mục đích                        |
| ----------------------------------------- | ------------------------------- |
| `apps/docs/app/globals.css`               | CSS variables cho tất cả styles |
| `apps/docs/components/style-provider.tsx` | Style context & hook            |
| `packages/registry/registry.json`         | Component metadata              |
| `packages/cli/src/utils/registry.ts`      | Registry resolver               |

## Roadmap

- [ ] Thêm 15+ styles nữa (target 20+)
- [ ] Thêm components: Accordion, Sheet, Popover, Command, Calendar...
- [ ] Publish @vibe-ui/cli lên npm
- [ ] Deploy docs lên Vercel
- [ ] Thêm dark mode cho mỗi style
- [ ] Component playground trên docs

## Links

- Docs: http://localhost:3000
- Radix UI: https://www.radix-ui.com/primitives
- Tailwind CSS v4: https://tailwindcss.com/docs
- shadcn/ui (reference): https://ui.shadcn.com
