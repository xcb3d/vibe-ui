# Phase 01: Project Setup & Monorepo

## Context

- Plan: [plan.md](./plan.md)
- Priority: P0 (Critical)
- Status: Pending

---

## Overview

Initialize Turborepo monorepo with proper workspace structure for multi-package development.

---

## Requirements

### Functional

- Monorepo with shared configs
- TypeScript strict mode
- ESLint + Prettier
- Tailwind CSS v4
- Build pipeline

### Non-Functional

- Fast builds (Turborepo caching)
- Hot reload in dev
- Type safety across packages

---

## Architecture

```
vibe-ui/
├── apps/
│   └── docs/                    # Next.js 15 app
│       ├── app/
│       ├── components/
│       └── package.json
├── packages/
│   ├── cli/                     # Commander.js CLI
│   │   ├── src/
│   │   │   ├── commands/
│   │   │   │   ├── init.ts
│   │   │   │   └── add.ts
│   │   │   └── index.ts
│   │   └── package.json
│   ├── registry/                # Component source
│   │   ├── styles/
│   │   ├── ui/
│   │   └── registry.json
│   ├── ui/                      # Compiled NPM package
│   │   ├── src/
│   │   └── package.json
│   └── config/                  # Shared configs
│       ├── eslint/
│       ├── typescript/
│       └── tailwind/
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

## Implementation Steps

### 1. Create Monorepo Base

```bash
mkdir vibe-ui && cd vibe-ui
pnpm init
```

### 2. Configure PNPM Workspaces

Create `pnpm-workspace.yaml`:

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

### 3. Create Turborepo Config

Create `turbo.json`:

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {},
    "type-check": {}
  }
}
```

### 4. Create Shared TypeScript Config

`packages/config/typescript/base.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "bundler",
    "declaration": true,
    "declarationMap": true
  }
}
```

### 5. Create Shared Tailwind Config

`packages/config/tailwind/base.ts`:

```typescript
import type { Config } from "tailwindcss";

export const baseConfig: Partial<Config> = {
  content: [],
  theme: {
    extend: {
      // Base design tokens
    },
  },
};
```

### 6. Initialize Apps/Docs

```bash
cd apps
pnpm create next-app@latest docs --typescript --tailwind --eslint --app --src-dir
```

### 7. Initialize Packages

```bash
# CLI package
mkdir -p packages/cli/src/commands
cd packages/cli && pnpm init

# Registry package
mkdir -p packages/registry/{styles,ui}
cd packages/registry && pnpm init

# UI package
mkdir -p packages/ui/src
cd packages/ui && pnpm init
```

---

## Files to Create

| Path                                   | Action | Description       |
| -------------------------------------- | ------ | ----------------- |
| `pnpm-workspace.yaml`                  | Create | Workspace config  |
| `turbo.json`                           | Create | Turborepo config  |
| `package.json`                         | Create | Root package.json |
| `packages/config/typescript/base.json` | Create | Shared TS config  |
| `packages/config/tailwind/base.ts`     | Create | Shared Tailwind   |
| `packages/cli/package.json`            | Create | CLI package       |
| `packages/registry/package.json`       | Create | Registry package  |
| `packages/ui/package.json`             | Create | UI package        |
| `apps/docs/`                           | Create | Next.js app       |

---

## Todo List

- [ ] Create root package.json with Turborepo
- [ ] Configure pnpm workspaces
- [ ] Setup shared TypeScript config
- [ ] Setup shared ESLint config
- [ ] Setup shared Tailwind config
- [ ] Initialize docs app (Next.js 15)
- [ ] Initialize CLI package
- [ ] Initialize registry package
- [ ] Initialize UI package
- [ ] Verify `pnpm dev` runs all packages

---

## Success Criteria

- `pnpm install` works from root
- `pnpm dev` starts docs app
- TypeScript types shared across packages
- Turborepo caching working

---

## Dependencies

- pnpm (package manager)
- turborepo (monorepo tool)
- next.js 15 (docs)
- typescript 5.x

---

## Next Steps

After completion → [Phase 02: Core Components](./phase-02-core-components.md)
