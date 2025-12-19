# Research Report: Building Scalable Component Libraries (2025)

## Executive Summary

Building a production-ready component library in 2025 requires a shift from "npm package delivery" to "code ownership and DX." The industry is moving towards the **"shadcn model"** (Copy-Paste/CLI-driven) for high-customization needs, while maintaining **"Radix model"** (NPM primitives) for core accessibility. For scalability, a **Monorepo** using Turborepo and pnpm is the gold standard, coupled with a robust CLI for component installation and MDX-based documentation.

## Research Methodology

- **Sources consulted:** 15+ (Official Docs, GitHub Repos, Tech Blogs)
- **Date range:** 2024-2025
- **Key search terms:** monorepo vs single package, shadcn architecture, visual regression testing 2025, component library CLI best practices.

## Key Findings

### 1. Project Structure: The Monorepo Dominance

For 2025, a monorepo is mandatory for scalability.

- **Tools:** **Turborepo** (task orchestration) + **pnpm** (workspaces/efficient storage).
- **Organization Pattern:**
  - `apps/docs`: Next.js site for documentation.
  - `packages/ui`: The core component library.
  - `packages/hooks`: Shared logic (use-media-query, use-theme, etc.).
  - `packages/cli`: Tools for component installation.
  - `tooling/*`: Shared ESLint, TypeScript, and Tailwind configs.
- **Naming Conventions:** Use **Kebab-case** for files (`button-group.tsx`) and **PascalCase** for components (`ButtonGroup`). Follow "Atomic Design-lite" (components, modules, layouts).

### 2. Documentation & Style Switcher

- **Interactive Switcher:** Use `next-themes` for light/dark/system modes. For multiple visual styles (e.g., "Default" vs "New York"), use CSS variables scoped to a data-attribute (e.g., `[data-style="new-york"]`).
- **Playground:** **React Sandpack** (CodeSandbox) is preferred for complex/multi-file demos. **React-Live** is better for lightweight, simple single-file previews.
- **Code Generation:** Use `rehype-pretty-code` or `shiki` for static snippets; use dynamic string templates for generating "Copy to Clipboard" CLI commands.

### 3. Developer Experience (DX)

- **CLI-First:** Modern libraries (like shadcn/ui or Park UI) use a CLI (`init` and `add` commands).
  - `init`: Configures `components.json`, styles, and tailwind.
  - `add`: Fetches component source from a registry and writes it to the user's `components/ui` folder.
- **Tree-shaking:** Ensure `sideEffects: false` in `package.json` and export ESM.
- **TypeScript:** Ship with `.d.ts` files. Use `tsup` for extremely fast bundling.

### 4. Testing & Quality

- **Visual Regression:** **Chromatic** is the industry leader for Storybook users. **Playwright Visual Comparisons** (`toHaveScreenshot`) is the best open-source/free alternative.
- **Accessibility:** Integrate `@storybook/addon-a11y` (Axe-core) and `jest-axe`.
- **Strategy:**
  1. Unit tests for hooks/logic (Vitest).
  2. Interaction tests for components (Storybook Test Runner).
  3. Visual regression for UI consistency.

### 5. Reference Projects

- **shadcn/ui:** Best for "copy-paste" and Tailwind integration.
- **Park UI:** Best for "multi-framework" (React/Vue/Solid) using Ark UI.
- **Radix Themes:** Best for "plug-and-play" with a strict design system.
- **DaisyUI:** Best for CSS-only/class-based simplicity.

## Implementation Recommendations

### Scalable Architecture Plan

1. **Initialize Monorepo:** Use `npx create-turbo@latest`.
2. **Headless Base:** Build on **Radix UI Primitives** or **Ark UI**. NEVER build complex components (Dialog, Select) from scratch.
3. **Styling:** Use **Tailwind CSS** with **CSS Variables** for easy theming.
4. **CLI Development:** Build a CLI using `commander` or `clack` to handle component distribution.

### Code Example: CLI-ready Component Structure

```tsx
// packages/ui/src/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("inline-flex items-center justify-center...", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      destructive: "bg-destructive...",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

## Common Pitfalls

- **Building from Scratch:** Spending months on a custom Select component that isn't accessible. Use Radix/Ark.
- **Rigid Styling:** Hardcoding colors instead of using CSS variables.
- **Bundle Bloat:** Not optimizing exports, leading to users importing the entire library for one button.

## Unresolved Questions

- Should the CLI support automated dependency updates (e.g., `vibe-ui update`)?
- Will the library support multiple CSS frameworks (Tailwind + Panda CSS) or stick to one?

## Sources:

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [shadcn/ui Architecture](https://ui.shadcn.com/docs/architecture)
- [Chromatic Visual Testing](https://www.chromatic.com/docs/visual-regression-testing)
- [Radix Primitives](https://www.radix-ui.com/primitives)
- [Park UI / Ark UI](https://park-ui.com/)
