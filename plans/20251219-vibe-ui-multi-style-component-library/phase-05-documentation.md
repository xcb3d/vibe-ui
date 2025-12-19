# Phase 05: Documentation Site

## Context

- Plan: [plan.md](./plan.md)
- Depends on: Phase 01, Phase 02, Phase 03
- Priority: P1 (High)
- Status: Pending

---

## Overview

Build Next.js documentation site with interactive style switcher, component playground, and code snippets.

---

## Features

1. **Landing Page** - Hero, features, installation
2. **Style Showcase** - Live style switcher
3. **Component Docs** - Props, examples, code
4. **Playground** - Interactive editor
5. **Themes** - Dark/light mode

---

## Site Structure

```
apps/docs/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout
│   ├── docs/
│   │   ├── page.tsx             # Docs home
│   │   ├── getting-started/
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── button/
│   │   │   │   └── page.tsx
│   │   │   ├── card/
│   │   │   │   └── page.tsx
│   │   │   └── ...
│   │   └── styles/
│   │       └── page.tsx
│   └── playground/
│       └── page.tsx
├── components/
│   ├── docs/
│   │   ├── component-preview.tsx
│   │   ├── code-block.tsx
│   │   ├── props-table.tsx
│   │   └── style-switcher.tsx
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   └── footer.tsx
│   └── ui/                      # Vibe UI components
├── lib/
│   ├── styles.ts                # Style definitions
│   └── registry.ts              # Component registry
└── styles/
    ├── globals.css
    └── themes/                  # All style CSS
```

---

## Style Switcher Component

```tsx
// components/docs/style-switcher.tsx
"use client";

import { useStyle } from "@/lib/hooks/use-style";
import { styles } from "@/lib/styles";

export function StyleSwitcher() {
  const { currentStyle, setStyle } = useStyle();

  return (
    <div className="flex gap-2 p-2 rounded-lg bg-muted">
      {styles.map((style) => (
        <button
          key={style.name}
          onClick={() => setStyle(style.name)}
          className={cn(
            "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
            currentStyle === style.name
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted-foreground/10",
          )}
        >
          {style.displayName}
        </button>
      ))}
    </div>
  );
}
```

---

## Component Preview

```tsx
// components/docs/component-preview.tsx
"use client";

import { useState } from "react";
import { useStyle } from "@/lib/hooks/use-style";
import { CodeBlock } from "./code-block";

interface ComponentPreviewProps {
  name: string;
  children: React.ReactNode;
  code: string;
}

export function ComponentPreview({
  name,
  children,
  code,
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);
  const { currentStyle } = useStyle();

  return (
    <div className="rounded-lg border">
      {/* Preview */}
      <div
        className="p-6 flex items-center justify-center min-h-[200px]"
        data-style={currentStyle}
      >
        {children}
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between border-t px-4 py-2 bg-muted/50">
        <span className="text-sm text-muted-foreground">{name}</span>
        <button
          onClick={() => setShowCode(!showCode)}
          className="text-sm hover:text-foreground"
        >
          {showCode ? "Hide Code" : "View Code"}
        </button>
      </div>

      {/* Code */}
      {showCode && (
        <div className="border-t">
          <CodeBlock code={code} language="tsx" />
        </div>
      )}
    </div>
  );
}
```

---

## Style Context

```tsx
// lib/hooks/use-style.tsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";

type StyleContextType = {
  currentStyle: string;
  setStyle: (style: string) => void;
};

const StyleContext = createContext<StyleContextType | undefined>(undefined);

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [currentStyle, setCurrentStyle] = useState("minimal");

  useEffect(() => {
    // Load saved style from localStorage
    const saved = localStorage.getItem("vibe-ui-style");
    if (saved) setCurrentStyle(saved);
  }, []);

  const setStyle = (style: string) => {
    setCurrentStyle(style);
    localStorage.setItem("vibe-ui-style", style);
    document.documentElement.setAttribute("data-style", style);
  };

  return (
    <StyleContext.Provider value={{ currentStyle, setStyle }}>
      {children}
    </StyleContext.Provider>
  );
}

export function useStyle() {
  const context = useContext(StyleContext);
  if (!context) throw new Error("useStyle must be used within StyleProvider");
  return context;
}
```

---

## Landing Page Sections

### Hero

```tsx
<section className="py-24 text-center">
  <h1 className="text-5xl font-bold tracking-tight">Vibe UI</h1>
  <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
    Beautiful components with 20+ visual styles. Pick your vibe, copy the code.
  </p>
  <div className="mt-8 flex gap-4 justify-center">
    <Button size="lg">Get Started</Button>
    <Button size="lg" variant="outline">
      Browse Components
    </Button>
  </div>
</section>
```

### Style Showcase

```tsx
<section className="py-16">
  <h2 className="text-3xl font-bold text-center">Pick Your Style</h2>
  <StyleSwitcher className="mt-8" />
  <div className="mt-12 grid grid-cols-3 gap-6">
    {/* Preview cards showing different styles */}
    <PreviewCard style="minimal" />
    <PreviewCard style="glass" />
    <PreviewCard style="brutalist" />
  </div>
</section>
```

### Installation

```tsx
<section className="py-16 bg-muted/50">
  <h2 className="text-3xl font-bold text-center">Quick Start</h2>
  <div className="mt-8 max-w-2xl mx-auto">
    <CodeBlock code={`npx vibe-ui init`} />
    <CodeBlock code={`npx vibe-ui add button card`} />
  </div>
</section>
```

---

## MDX for Component Docs

````mdx
// app/docs/components/button/page.mdx
import { ComponentPreview } from '@/components/docs/component-preview'
import { PropsTable } from '@/components/docs/props-table'
import { Button } from '@/components/ui/button'

# Button

Displays a button or a component that looks like a button.

## Installation

```bash
npx vibe-ui add button
```
````

## Usage

<ComponentPreview name="Button">
  <Button>Click me</Button>
</ComponentPreview>

## Variants

<ComponentPreview name="Button Variants">
  <div className="flex gap-2">
    <Button variant="default">Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
    <Button variant="destructive">Destructive</Button>
  </div>
</ComponentPreview>

## Props

<PropsTable
props={[
{ name: 'variant', type: 'string', default: 'default' },
{ name: 'size', type: 'string', default: 'default' },
{ name: 'asChild', type: 'boolean', default: false },
]}
/>

```

---

## Implementation Steps

1. Setup Next.js 15 app with App Router
2. Configure Tailwind with all styles
3. Create layout (header, sidebar, footer)
4. Build StyleProvider context
5. Build StyleSwitcher component
6. Build ComponentPreview component
7. Build CodeBlock component
8. Create landing page
9. Create component docs pages
10. Add MDX support
11. Deploy to Vercel

---

## Todo List

- [ ] Setup Next.js 15 app
- [ ] Configure multiple style CSS
- [ ] Create layout components
- [ ] Build StyleProvider & StyleSwitcher
- [ ] Build ComponentPreview
- [ ] Build CodeBlock with syntax highlight
- [ ] Create landing page
- [ ] Create getting-started page
- [ ] Create component doc pages (20)
- [ ] Add search (cmdk)
- [ ] Deploy to Vercel

---

## Dependencies

- next 15
- @next/mdx
- shiki (syntax highlighting)
- cmdk (command palette)
- next-themes (dark mode)
- framer-motion (animations)

---

## Success Criteria

- Docs site live at vibe-ui.dev
- Style switcher changes all components
- All 20 components documented
- Installation instructions clear
- Mobile responsive

---

## Next Steps

After completion → [Phase 06: Initial Styles](./phase-06-initial-styles.md)
```
