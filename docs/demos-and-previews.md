# Demos & Previews System

## Quick Start: Adding Component Examples

### Checklist

- [ ] Add component types to factory interface
- [ ] Create preview objects in factory
- [ ] Register in `examplePreviews`
- [ ] Export from factory return
- [ ] Import component in theme files (both themes)
- [ ] Pass to factory + export previews
- [ ] **Add `examples` to `component-docs.ts`** ← Required for display!

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
│   ├── example-previews.tsx         # Deep merge (stateless + stateful)
│   └── stateful-demos.tsx           # Demo components
│
└── neubrutalism/
    ├── stateless-previews.tsx       # Neubrutalism theme → stateless previews
    ├── stateful-previews.tsx        # Neubrutalism theme → stateful previews
    ├── example-previews.tsx         # Deep merge (stateless + stateful)
    └── stateful-demos.tsx           # Demo components
```

## File Responsibilities

| File                              | Purpose                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `create-stateless-previews.tsx`   | Define preview JSX for components WITHOUT hooks                |
| `create-stateful-previews.tsx`    | Define preview JSX for components WITH hooks                   |
| `{theme}/stateless-previews.tsx`  | Import theme components → call factory → export                |
| `{theme}/stateful-previews.tsx`   | Import theme components → call factory → export                |
| `{theme}/example-previews.tsx`    | **Deep merge** stateless + stateful → export `examplePreviews` |
| `apps/docs/lib/component-docs.ts` | **Register examples metadata** (titles, code snippets)         |

## How to Add Component Examples

### Step 1: Factory (Stateless or Stateful)

**Stateless** (`create-stateless-previews.tsx`):

```tsx
// 1. Add to interface
export interface ThemeComponents {
  Textarea: React.ComponentType<{ placeholder?: string; disabled?: boolean }>;
  Label: React.ComponentType<{ children?: React.ReactNode }>;
}

// 2. Create previews
const textareaPreviews: Record<string, React.ReactNode> = {
  Default: <C.Textarea placeholder="Type here..." />,
  "Disabled State": <C.Textarea disabled placeholder="Disabled" />,
};

// 3. Register
const examplePreviews = { ...existing, textarea: textareaPreviews };

// 4. Return
return { ...existing, textareaPreviews, examplePreviews };
```

**Stateful** (`create-stateful-previews.tsx`):

```tsx
// Same pattern but with hooks
function CharacterCounterPreview() {
  const [value, setValue] = React.useState("");
  return (
    <C.Textarea value={value} onChange={(e) => setValue(e.target.value)} />
  );
}

const textareaPreviews = { "Character Counter": <CharacterCounterPreview /> };
```

### Step 2: Theme Files (Both Themes)

```tsx
// {theme}/stateless-previews.tsx
import { Textarea } from "@vibe-ui/registry/ui/{theme}/textarea";
import { Label } from "@vibe-ui/registry/ui/{theme}/label";

const { textareaPreviews, ... } = createStatelessPreviews({
  ...existing,
  Textarea,
  Label,
});

export { textareaPreviews, ... };
```

### Step 3: Component Docs (CRITICAL!)

```tsx
// apps/docs/lib/component-docs.ts
textarea: {
  name: "Textarea",
  slug: "textarea",
  description: "A multi-line text input.",
  examples: [
    {
      title: "Default",           // Must match key in preview object!
      color: "primary",
      code: `<Textarea placeholder="Type here..." />`,
    },
    {
      title: "Disabled State",
      color: "muted",
      code: `<Textarea disabled placeholder="Disabled" />`,
    },
  ],
},
```

> **Important:** The `title` in `examples` must exactly match the key in the preview object!

## Deep Merge (Mixed Stateless + Stateful)

When a component has BOTH stateless and stateful examples (like Textarea), the merge in `example-previews.tsx` uses deep merge:

```tsx
// example-previews.tsx - Deep merge to combine both
const examplePreviews: Record<string, Record<string, React.ReactNode>> = {
  ...statelessPreviews,
};

Object.entries(statefulPreviews).forEach(([key, value]) => {
  if (examplePreviews[key]) {
    examplePreviews[key] = { ...examplePreviews[key], ...value };
  } else {
    examplePreviews[key] = value;
  }
});
```

This ensures stateful previews ADD to stateless instead of overwriting.

## Current Components

### Stateless Previews

- `accordion` - 7 examples
- `button` - 5 examples
- `card` - 5 examples
- `table` - 5 examples
- `textarea` - 6 examples (Default, With Label, Custom Placeholder, With Button, Error, Disabled)

### Stateful Previews

- `calendar` - 5 examples
- `collapsible` - 1 example
- `datepicker` - 1 example
- `form` - 1 example
- `sonner` - 1 example
- `textarea` - 1 example (Character Counter)

## Key Principles

1. **DRY**: JSX defined once in factory, components injected per theme
2. **Separation**: Stateless vs Stateful clearly separated
3. **Deep Merge**: Components can have both stateless and stateful examples
4. **Theme Agnostic**: Factory files don't know about themes
5. **Two Registrations**: Preview system + component-docs.ts
