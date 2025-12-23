# Demos & Previews System

## Structure Overview

```
apps/docs/components/demos/
├── create-stateless-previews.tsx    # Factory: stateless preview JSX
├── create-stateful-previews.tsx     # Factory: stateful preview JSX (uses hooks)
├── create-stateful-demos.tsx        # Factory: demo components
│
├── minimal/
│   ├── stateless-previews.tsx       # Minimal theme → stateless previews
│   ├── stateful-previews.tsx        # Minimal theme → stateful previews
│   ├── example-previews.tsx         # Merge file (stateless + stateful)
│   └── stateful-demos.tsx           # Demo components
│
└── neubrutalism/
    ├── stateless-previews.tsx       # Neubrutalism theme → stateless previews
    ├── stateful-previews.tsx        # Neubrutalism theme → stateful previews
    ├── example-previews.tsx         # Merge file (stateless + stateful)
    └── stateful-demos.tsx           # Demo components
```

## File Responsibilities

| File                             | Purpose                                                                          |
| -------------------------------- | -------------------------------------------------------------------------------- |
| `create-stateless-previews.tsx`  | Define preview JSX for components WITHOUT hooks (Button, Card, Table, etc.)      |
| `create-stateful-previews.tsx`   | Define preview JSX for components WITH hooks (Calendar, Form, Collapsible, etc.) |
| `create-stateful-demos.tsx`      | Define full demo components (used in component pages)                            |
| `{theme}/stateless-previews.tsx` | Import theme components → call factory → export `statelessPreviews`              |
| `{theme}/stateful-previews.tsx`  | Import theme components → call factory → export `statefulPreviews`               |
| `{theme}/example-previews.tsx`   | Merge `statelessPreviews` + `statefulPreviews` → export `examplePreviews`        |
| `{theme}/stateful-demos.tsx`     | Export demo components for the theme                                             |

## How to Add a New Component Preview

### Stateless Component (no hooks)

1. **Edit** `create-stateless-previews.tsx`:
   - Add component type to `ThemeComponents` interface
   - Create preview object (e.g., `badgePreviews`)
   - Add to `examplePreviews` registry
   - Return in factory output

2. **Edit** `{theme}/stateless-previews.tsx` (both themes):
   - Import the component
   - Pass to `createStatelessPreviews()`

### Stateful Component (uses hooks)

1. **Edit** `create-stateful-previews.tsx`:
   - Add component type to `StatefulPreviewComponents` interface
   - Create preview function(s) with hooks
   - Create preview object (e.g., `dialogPreviews`)
   - Add to `statefulPreviews` registry
   - Return in factory output

2. **Edit** `{theme}/stateful-previews.tsx` (both themes):
   - Import the component
   - Pass to `createStatefulPreviews()`
   - Export new preview object

## Example: Adding Badge Previews

```tsx
// 1. In create-stateless-previews.tsx
export interface ThemeComponents {
  // ... existing
  Badge: React.ComponentType<{ variant?: string; children?: React.ReactNode }>;
}

export function createStatelessPreviews(C: ThemeComponents) {
  // ... existing previews

  const badgePreviews: Record<string, React.ReactNode> = {
    "Default": <C.Badge>Badge</C.Badge>,
    "Secondary": <C.Badge variant="secondary">Secondary</C.Badge>,
  };

  const examplePreviews = {
    // ... existing
    badge: badgePreviews,
  };

  return {
    // ... existing
    badgePreviews,
    examplePreviews,
  };
}

// 2. In {theme}/stateless-previews.tsx
import { Badge } from "@vibe-ui/registry/ui/{theme}/badge";

const { badgePreviews, ... } = createStatelessPreviews({
  // ... existing
  Badge,
});

export { badgePreviews, ... };
```

## Current Components

### Stateless Previews

- `accordion` - 7 examples
- `button` - 5 examples
- `card` - 5 examples
- `table` - 5 examples

### Stateful Previews

- `calendar` - 5 examples (Single Date, Date Range, Multiple Dates, Disabled Dates, Two Months)
- `collapsible` - 1 example
- `datepicker` - 1 example
- `form` - 1 example
- `sonner` - 1 example

## Key Principles

1. **DRY**: JSX defined once in factory, components injected per theme
2. **Separation**: Stateless vs Stateful clearly separated
3. **Single Merge Point**: `example-previews.tsx` only imports and merges
4. **Theme Agnostic**: Factory files don't know about themes
