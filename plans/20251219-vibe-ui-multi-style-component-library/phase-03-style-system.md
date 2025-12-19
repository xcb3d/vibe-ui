# Phase 03: Style System Design

## Context

- Plan: [plan.md](./plan.md)
- Depends on: Phase 01, Phase 02
- Priority: P0 (Critical)
- Status: Pending

---

## Overview

Design and implement the multi-style theming system using CSS variables and Tailwind presets.

---

## Initial 5 Styles

| Style         | Description         | Colors                    | Best For             |
| ------------- | ------------------- | ------------------------- | -------------------- |
| **Minimal**   | Clean, Swiss-style  | Monochrome, single accent | Enterprise, SaaS     |
| **Glass**     | Glassmorphism       | Translucent, vibrant BG   | Modern SaaS, Finance |
| **Brutalist** | Raw, high contrast  | Primary colors, black     | Creative, Portfolio  |
| **Soft**      | Neumorphism evolved | Pastels, soft shadows     | Wellness, Health     |
| **Neon**      | Cyberpunk, dark     | Neon accents on dark      | Gaming, Tech         |

---

## Style Directory Structure

```
packages/registry/styles/
├── minimal/
│   ├── globals.css          # CSS variables
│   ├── tailwind.preset.ts   # Tailwind preset
│   └── metadata.json        # Style info
├── glass/
│   ├── globals.css
│   ├── tailwind.preset.ts
│   └── metadata.json
├── brutalist/
│   ├── globals.css
│   ├── tailwind.preset.ts
│   └── metadata.json
├── soft/
│   ├── globals.css
│   ├── tailwind.preset.ts
│   └── metadata.json
└── neon/
    ├── globals.css
    ├── tailwind.preset.ts
    └── metadata.json
```

---

## CSS Variables Schema

Each style defines these core variables:

```css
/* globals.css for each style */
@layer base {
  :root {
    /* Colors - HSL format */
    --background: 0 0% 100%;
    --foreground: 222 47% 11%;

    --card: 0 0% 100%;
    --card-foreground: 222 47% 11%;

    --primary: 222 47% 11%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96%;
    --secondary-foreground: 222 47% 11%;

    --muted: 210 40% 96%;
    --muted-foreground: 215 16% 47%;

    --accent: 210 40% 96%;
    --accent-foreground: 222 47% 11%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 210 40% 98%;

    --border: 214 32% 91%;
    --input: 214 32% 91%;
    --ring: 222 47% 11%;

    /* Radius */
    --radius: 0.5rem;

    /* Shadows (style-specific) */
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  }

  .dark {
    --background: 222 47% 11%;
    --foreground: 210 40% 98%;
    /* ... dark mode overrides */
  }
}
```

---

## Style Examples

### 1. Minimal Style

```css
/* packages/registry/styles/minimal/globals.css */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96%;
    --muted-foreground: 0 0% 45%;
    --accent: 0 0% 96%;
    --accent-foreground: 0 0% 9%;
    --border: 0 0% 90%;
    --input: 0 0% 90%;
    --ring: 0 0% 9%;
    --radius: 0.375rem;

    /* Minimal shadows */
    --shadow-sm: none;
    --shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 2px 4px 0 rgb(0 0 0 / 0.06);
    --shadow-lg: 0 4px 6px 0 rgb(0 0 0 / 0.07);
  }
}
```

### 2. Glass Style

```css
/* packages/registry/styles/glass/globals.css */
@layer base {
  :root {
    --background: 220 13% 95%;
    --foreground: 222 47% 11%;
    --primary: 221 83% 53%;
    --primary-foreground: 210 40% 98%;
    --secondary: 0 0% 100% / 0.7;
    --secondary-foreground: 222 47% 11%;
    --card: 0 0% 100% / 0.5;
    --card-foreground: 222 47% 11%;
    --border: 0 0% 100% / 0.2;
    --radius: 1rem;

    /* Glass-specific */
    --glass-blur: 16px;
    --glass-saturation: 180%;

    /* Glass shadows */
    --shadow-sm: 0 2px 8px rgb(0 0 0 / 0.08);
    --shadow: 0 4px 16px rgb(0 0 0 / 0.12);
    --shadow-md: 0 8px 24px rgb(0 0 0 / 0.16);
    --shadow-lg: 0 16px 48px rgb(0 0 0 / 0.2);
  }
}
```

### 3. Brutalist Style

```css
/* packages/registry/styles/brutalist/globals.css */
@layer base {
  :root {
    --background: 60 100% 97%;
    --foreground: 0 0% 0%;
    --primary: 0 0% 0%;
    --primary-foreground: 60 100% 97%;
    --secondary: 0 100% 50%;
    --secondary-foreground: 0 0% 0%;
    --accent: 240 100% 50%;
    --accent-foreground: 0 0% 100%;
    --border: 0 0% 0%;
    --radius: 0px;

    /* Brutalist shadows - hard offset */
    --shadow-sm: 2px 2px 0 0 rgb(0 0 0);
    --shadow: 4px 4px 0 0 rgb(0 0 0);
    --shadow-md: 6px 6px 0 0 rgb(0 0 0);
    --shadow-lg: 8px 8px 0 0 rgb(0 0 0);

    /* Brutalist borders */
    --border-width: 3px;
  }
}
```

### 4. Soft Style (Neumorphism)

```css
/* packages/registry/styles/soft/globals.css */
@layer base {
  :root {
    --background: 220 20% 97%;
    --foreground: 222 20% 20%;
    --primary: 220 70% 50%;
    --primary-foreground: 0 0% 100%;
    --secondary: 220 20% 95%;
    --secondary-foreground: 222 20% 20%;
    --muted: 220 20% 93%;
    --border: 220 20% 90%;
    --radius: 1rem;

    /* Soft shadows - inset + outset */
    --shadow-sm:
      2px 2px 4px rgb(166 180 200 / 0.4), -2px -2px 4px rgb(255 255 255 / 0.7);
    --shadow:
      4px 4px 8px rgb(166 180 200 / 0.4), -4px -4px 8px rgb(255 255 255 / 0.7);
    --shadow-md:
      6px 6px 12px rgb(166 180 200 / 0.4), -6px -6px 12px rgb(255 255 255 / 0.7);
    --shadow-lg:
      8px 8px 16px rgb(166 180 200 / 0.4), -8px -8px 16px rgb(255 255 255 / 0.7);
    --shadow-inset:
      inset 2px 2px 4px rgb(166 180 200 / 0.4),
      inset -2px -2px 4px rgb(255 255 255 / 0.7);
  }
}
```

### 5. Neon Style

```css
/* packages/registry/styles/neon/globals.css */
@layer base {
  :root {
    --background: 222 47% 5%;
    --foreground: 0 0% 100%;
    --primary: 170 100% 50%;
    --primary-foreground: 222 47% 5%;
    --secondary: 280 100% 60%;
    --secondary-foreground: 0 0% 100%;
    --accent: 330 100% 60%;
    --accent-foreground: 0 0% 100%;
    --muted: 222 30% 15%;
    --muted-foreground: 222 20% 60%;
    --border: 222 30% 20%;
    --radius: 0.5rem;

    /* Neon glows */
    --glow-primary:
      0 0 10px hsl(170 100% 50%), 0 0 20px hsl(170 100% 50% / 0.5);
    --glow-secondary:
      0 0 10px hsl(280 100% 60%), 0 0 20px hsl(280 100% 60% / 0.5);
    --glow-accent: 0 0 10px hsl(330 100% 60%), 0 0 20px hsl(330 100% 60% / 0.5);

    /* Neon shadows */
    --shadow-sm: 0 0 5px currentColor;
    --shadow: 0 0 10px currentColor;
    --shadow-md: 0 0 15px currentColor, 0 0 30px currentColor;
    --shadow-lg:
      0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
  }
}
```

---

## Tailwind Preset Structure

```typescript
// packages/registry/styles/minimal/tailwind.preset.ts
import type { Config } from "tailwindcss";

export const minimalPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
    },
  },
};
```

---

## Style Metadata

```json
// packages/registry/styles/minimal/metadata.json
{
  "name": "minimal",
  "displayName": "Minimal",
  "description": "Clean, Swiss-style design with high contrast and geometric shapes",
  "category": "professional",
  "tags": ["clean", "corporate", "enterprise", "saas"],
  "author": "Vibe UI",
  "preview": "/previews/minimal.png",
  "colors": {
    "light": {
      "background": "#ffffff",
      "foreground": "#0a0a0a",
      "primary": "#171717"
    },
    "dark": {
      "background": "#0a0a0a",
      "foreground": "#fafafa",
      "primary": "#fafafa"
    }
  }
}
```

---

## Implementation Steps

1. Create base CSS variables schema
2. Implement Minimal style (reference)
3. Implement Glass style
4. Implement Brutalist style
5. Implement Soft style
6. Implement Neon style
7. Create Tailwind presets for each
8. Add metadata.json for each style
9. Test style switching in docs

---

## Todo List

- [ ] Define CSS variables schema
- [ ] Create Minimal style (globals.css + preset)
- [ ] Create Glass style
- [ ] Create Brutalist style
- [ ] Create Soft style
- [ ] Create Neon style
- [ ] Add metadata.json for each style
- [ ] Test all styles with Button component
- [ ] Verify dark mode works for each

---

## Success Criteria

- 5 styles fully defined
- Each style has light + dark mode
- Tailwind presets work correctly
- Components look distinct per style
- Style switching works in docs

---

## Next Steps

After completion → [Phase 04: CLI Development](./phase-04-cli-development.md)
