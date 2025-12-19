# Phase 02: Core Component Architecture

## Context

- Plan: [plan.md](./plan.md)
- Depends on: Phase 01
- Priority: P0 (Critical)
- Status: Pending

---

## Overview

Design and implement the base component architecture with Radix UI primitives and CVA for variants.

---

## Core Components (20 Initial)

### Form Components

1. **Button** - Primary, secondary, outline, ghost, link variants
2. **Input** - Text, email, password, number
3. **Textarea** - Multi-line text input
4. **Select** - Dropdown selection
5. **Checkbox** - Boolean toggle
6. **Radio** - Single selection from group
7. **Switch** - Toggle switch
8. **Slider** - Range input

### Layout Components

9. **Card** - Container with header, content, footer
10. **Dialog** - Modal overlay
11. **Drawer** - Side panel
12. **Tabs** - Tabbed content
13. **Accordion** - Collapsible sections

### Feedback Components

14. **Alert** - Status messages
15. **Toast** - Notifications
16. **Progress** - Loading indicator
17. **Skeleton** - Loading placeholder

### Navigation Components

18. **Avatar** - User avatar
19. **Badge** - Status badge
20. **Tooltip** - Hover information

---

## Component Structure

### File Structure (per component)

```
packages/registry/ui/button/
├── button.tsx           # Main component
├── button.styles.ts     # CVA variants (style-agnostic)
├── button.types.ts      # TypeScript types
└── index.ts             # Exports
```

### Base Button Example

```typescript
// button.types.ts
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button.styles";

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
```

```typescript
// button.styles.ts
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  // Base styles (style-agnostic)
  [
    "inline-flex items-center justify-center",
    "font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        default: "h-10 px-4 py-2 rounded-md",
        lg: "h-12 px-8 text-lg rounded-lg",
        icon: "h-10 w-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
```

```typescript
// button.tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { buttonVariants } from './button.styles'
import type { ButtonProps } from './button.types'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
```

---

## Utils & Helpers

### cn() Function

```typescript
// packages/registry/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Registry JSON Structure

```json
{
  "$schema": "./schema.json",
  "name": "vibe-ui",
  "version": "1.0.0",
  "styles": ["minimal", "glass", "brutalist", "neon", "soft"],
  "items": [
    {
      "name": "button",
      "type": "registry:ui",
      "files": [
        { "path": "ui/button/button.tsx", "type": "component" },
        { "path": "ui/button/button.styles.ts", "type": "styles" },
        { "path": "ui/button/button.types.ts", "type": "types" }
      ],
      "dependencies": ["@radix-ui/react-slot"],
      "registryDependencies": []
    },
    {
      "name": "dialog",
      "type": "registry:ui",
      "files": [{ "path": "ui/dialog/dialog.tsx", "type": "component" }],
      "dependencies": ["@radix-ui/react-dialog"],
      "registryDependencies": ["button"]
    }
  ]
}
```

---

## Implementation Steps

1. Create `packages/registry/lib/utils.ts` with `cn()` helper
2. Create component template structure
3. Implement Button component (reference)
4. Implement remaining 19 components
5. Create registry.json manifest
6. Add TypeScript types for all components

---

## Todo List

- [ ] Create lib/utils.ts with cn() helper
- [ ] Create component template/boilerplate
- [ ] Implement Button component
- [ ] Implement Input component
- [ ] Implement Card component
- [ ] Implement Dialog component
- [ ] Implement remaining 16 components
- [ ] Create registry.json
- [ ] Type-check all components

---

## Success Criteria

- All 20 components implemented
- Components work without styles (base classes)
- registry.json valid and complete
- All components pass TypeScript strict check

---

## Next Steps

After completion → [Phase 03: Style System](./phase-03-style-system.md)
