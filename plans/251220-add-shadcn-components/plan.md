# Plan: Add 8 Shadcn UI Components

Implementation plan for adding 8 prioritized components to Vibe UI across the registry, UI package, and documentation.

## Components & Dependencies

| Component        | Primative / Library            | Additional Deps |
| ---------------- | ------------------------------ | --------------- |
| **Drawer**       | `vaul`                         | `lucide-react`  |
| **Context Menu** | `@radix-ui/react-context-menu` | `lucide-react`  |
| **Hover Card**   | `@radix-ui/react-hover-card`   | -               |
| **Aspect Ratio** | `@radix-ui/react-aspect-ratio` | -               |
| **Input OTP**    | `input-otp`                    | `lucide-react`  |
| **Carousel**     | `embla-carousel-react`         | `lucide-react`  |
| **Resizable**    | `react-resizable-panels`       | `lucide-react`  |
| **Menubar**      | `@radix-ui/react-menubar`      | `lucide-react`  |

## Batch Implementation Strategy (Parallelizable)

### Batch 1: Simple Layout & UI

- **Aspect Ratio**
- **Hover Card**
- **Context Menu**

### Batch 2: Interactive Inputs & Navigation

- **Input OTP**
- **Drawer**
- **Menubar**

### Batch 3: Complex Layout & Display

- **Carousel**
- **Resizable**

## File Changes per Component

1.  **Registry Source**: `packages/registry/ui/[name].tsx`
2.  **UI Package**: `packages/ui/src/[name].tsx`
3.  **UI Exports**: Update `packages/ui/src/index.ts`
4.  **Docs App**: `apps/docs/components/ui/[name].tsx`
5.  **Docs Metadata**: Update `apps/docs/lib/component-docs.ts`
6.  **Docs Registry**: Update `packages/registry/registry.json`
7.  **Interactive Demo**: Update `apps/docs/components/component-demo.tsx`

## Implementation Steps

1.  **Dependency Installation**: Install all required libraries in relevant packages (`packages/ui`, `packages/registry`, `apps/docs`).
2.  **Component Creation**: Copy/adapt shadcn/ui source to the three locations (registry, ui/src, docs/components/ui).
3.  **Registration**: Add entries to `registry.json` and `component-docs.ts`.
4.  **Demo Development**: Add interactive preview code to `component-demo.tsx`.
5.  **Verification**: Ensure builds pass and components render correctly in the docs app.

## Unresolved Questions

- Should we use the exact shadcn/ui styling or apply Vibe UI specific "styles" (minimal, glass, etc.) immediately? (Assuming default shadcn styling first for consistency).
- Are there specific embla-carousel plugins required for the Carousel component? (Assuming standard `embla-carousel-react`).
