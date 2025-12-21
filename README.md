# Vibe UI

A multi-style React component library inspired by shadcn/ui. Choose from 20+ visual styles and copy components directly into your project.

## Features

- **Multi-Style System** - Switch between styles (minimal, neubrutalism)
- **Copy-Paste Components** - Own your code, no package lock-in
- **Radix UI Primitives** - Accessible, unstyled components as foundation
- **Tailwind CSS v4** - Modern styling with CSS variables
- **TypeScript** - Full type safety
- **CLI Tool** - Easy component installation

## Quick Start

### Using CLI (Recommended)

```bash
# Install CLI globally
npm install -g @vibe-ui/cli

# Initialize in your project
vibe-ui init

# Add components
vibe-ui add button card input --style minimal
```

### Manual Installation

1. Copy components from `packages/registry/ui/`
2. Add `lib/utils.ts` helper
3. Install Radix dependencies as needed

## Available Styles

| Style          | Description                              |
| -------------- | ---------------------------------------- |
| `minimal`      | Clean, simple design with subtle shadows |
| `neubrutalism` | Vivid colors and hard shadows            |

## Components (28)

**Form**: Button, Input, Label, Textarea, Checkbox, Switch, Select, Slider, Radio Group

**Display**: Card, Badge, Avatar, Separator, Skeleton, Table, Progress, Scroll Area

**Feedback**: Alert, Tooltip, Sonner (Toast)

**Overlay**: Dialog, Dropdown Menu, Popover, Sheet, Command

**Navigation**: Tabs, Accordion, Collapsible

## Project Structure

```
vibe-ui/
├── apps/
│   └── docs/          # Documentation site (Next.js)
├── packages/
│   ├── cli/           # CLI tool
│   ├── registry/      # Component source files
│   ├── ui/            # Publishable UI package
│   └── config/        # Shared configs
├── docs/              # Development documentation
└── plans/             # Implementation plans
```

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build all packages
pnpm build

# Type check
pnpm type-check

# Format code
pnpm format
```

## CLI Commands

```bash
# List available styles and components
vibe-ui list

# Add components with specific style
vibe-ui add button card --style glass

# Initialize project configuration
vibe-ui init
```

## Tech Stack

- **Monorepo**: Turborepo + pnpm workspaces
- **Framework**: React 19, Next.js 15
- **Styling**: Tailwind CSS v4
- **Primitives**: Radix UI
- **Build**: tsup, esbuild
- **Language**: TypeScript 5

## License

MIT
