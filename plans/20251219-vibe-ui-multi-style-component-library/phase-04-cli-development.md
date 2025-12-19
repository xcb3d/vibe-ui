# Phase 04: CLI Development

## Context

- Plan: [plan.md](./plan.md)
- Depends on: Phase 01, Phase 02, Phase 03
- Priority: P1 (High)
- Status: Pending

---

## Overview

Build CLI tool for component installation with style selection, similar to shadcn-ui CLI.

---

## CLI Commands

```bash
# Initialize project
npx vibe-ui init

# Add components
npx vibe-ui add button
npx vibe-ui add button card dialog

# Add with style
npx vibe-ui add button --style glass

# List available components
npx vibe-ui list

# List available styles
npx vibe-ui styles
```

---

## Architecture

```
packages/cli/
├── src/
│   ├── commands/
│   │   ├── init.ts          # Init command
│   │   ├── add.ts           # Add components
│   │   ├── list.ts          # List components
│   │   └── styles.ts        # List styles
│   ├── utils/
│   │   ├── registry.ts      # Fetch registry
│   │   ├── config.ts        # Read/write config
│   │   ├── transform.ts     # Transform imports
│   │   ├── logger.ts        # Console output
│   │   └── prompts.ts       # Interactive prompts
│   ├── types.ts             # TypeScript types
│   └── index.ts             # Entry point
├── templates/
│   └── vibe-ui.json         # Config template
├── package.json
└── tsconfig.json
```

---

## Config File (vibe-ui.json)

```json
{
  "$schema": "https://vibe-ui.dev/schema.json",
  "style": "minimal",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/app/globals.css"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  },
  "typescript": true
}
```

---

## Init Command

```typescript
// src/commands/init.ts
import { Command } from "commander";
import prompts from "prompts";
import { writeConfig, installDependencies } from "../utils";

export const init = new Command("init")
  .description("Initialize Vibe UI in your project")
  .option("--style <style>", "Default style to use")
  .option("-y, --yes", "Skip prompts and use defaults")
  .action(async (options) => {
    // 1. Detect framework (Next.js, Vite, etc.)
    const framework = await detectFramework();

    // 2. Prompt for configuration
    const config = await prompts([
      {
        type: "select",
        name: "style",
        message: "Which style would you like to use?",
        choices: [
          { title: "Minimal", value: "minimal" },
          { title: "Glass", value: "glass" },
          { title: "Brutalist", value: "brutalist" },
          { title: "Soft", value: "soft" },
          { title: "Neon", value: "neon" },
        ],
        initial: 0,
      },
      {
        type: "text",
        name: "componentsPath",
        message: "Where should components be installed?",
        initial: "src/components/ui",
      },
      {
        type: "text",
        name: "utilsPath",
        message: "Where should utils be installed?",
        initial: "src/lib/utils",
      },
    ]);

    // 3. Write config file
    await writeConfig("vibe-ui.json", {
      style: config.style,
      tailwind: {
        config: "tailwind.config.js",
        css: "src/app/globals.css",
      },
      aliases: {
        components: "@/components",
        utils: "@/lib/utils",
        ui: "@/components/ui",
      },
    });

    // 4. Install base dependencies
    await installDependencies([
      "clsx",
      "tailwind-merge",
      "class-variance-authority",
    ]);

    // 5. Copy utils.ts
    await copyUtils(config.utilsPath);

    // 6. Inject CSS variables
    await injectStyles(config.style);

    console.log("✓ Vibe UI initialized successfully!");
  });
```

---

## Add Command

```typescript
// src/commands/add.ts
import { Command } from "commander";
import { fetchRegistry, resolveComponent, transformComponent } from "../utils";

export const add = new Command("add")
  .description("Add components to your project")
  .argument("<components...>", "Components to add")
  .option("--style <style>", "Override default style")
  .option("--overwrite", "Overwrite existing components")
  .action(async (components: string[], options) => {
    // 1. Load config
    const config = await loadConfig();
    const style = options.style || config.style;

    // 2. Fetch registry
    const registry = await fetchRegistry();

    // 3. Resolve components + dependencies
    const resolved = await resolveComponents(components, registry);

    // 4. For each component
    for (const component of resolved) {
      // 4a. Fetch component source
      const source = await fetchComponent(component.name, style);

      // 4b. Transform imports
      const transformed = transformComponent(source, config);

      // 4c. Write to project
      await writeComponent(component.name, transformed, config);

      // 4d. Install npm dependencies
      if (component.dependencies.length > 0) {
        await installDependencies(component.dependencies);
      }

      console.log(`✓ Added ${component.name}`);
    }
  });
```

---

## Transform Logic

```typescript
// src/utils/transform.ts
export function transformComponent(
  source: string,
  config: VibeUIConfig,
): string {
  let result = source;

  // Replace import aliases
  result = result.replace(/@\/components\/ui/g, config.aliases.ui);

  result = result.replace(/@\/lib\/utils/g, config.aliases.utils);

  // Remove TypeScript types if JS project
  if (!config.typescript) {
    result = removeTypeAnnotations(result);
  }

  return result;
}
```

---

## Registry Fetching

```typescript
// src/utils/registry.ts
const REGISTRY_URL = "https://registry.vibe-ui.dev";

export async function fetchRegistry(): Promise<Registry> {
  const response = await fetch(`${REGISTRY_URL}/registry.json`);
  return response.json();
}

export async function fetchComponent(
  name: string,
  style: string,
): Promise<ComponentSource> {
  const response = await fetch(
    `${REGISTRY_URL}/styles/${style}/ui/${name}.json`,
  );
  return response.json();
}

export async function resolveComponents(
  names: string[],
  registry: Registry,
): Promise<ResolvedComponent[]> {
  const resolved: ResolvedComponent[] = [];
  const visited = new Set<string>();

  const resolve = (name: string) => {
    if (visited.has(name)) return;
    visited.add(name);

    const component = registry.items.find((i) => i.name === name);
    if (!component) throw new Error(`Component ${name} not found`);

    // Resolve dependencies first
    for (const dep of component.registryDependencies) {
      resolve(dep);
    }

    resolved.push(component);
  };

  for (const name of names) {
    resolve(name);
  }

  return resolved;
}
```

---

## Implementation Steps

1. Setup CLI package with Commander.js
2. Implement config file read/write
3. Implement registry fetching
4. Implement `init` command
5. Implement `add` command
6. Implement transform logic
7. Implement `list` command
8. Implement `styles` command
9. Add interactive prompts
10. Test with real project

---

## Todo List

- [ ] Setup packages/cli with Commander.js
- [ ] Create config schema and types
- [ ] Implement registry fetcher
- [ ] Implement init command
- [ ] Implement add command
- [ ] Implement transform utils
- [ ] Implement list command
- [ ] Implement styles command
- [ ] Add error handling
- [ ] Test CLI end-to-end

---

## Dependencies

- commander (CLI framework)
- prompts (interactive prompts)
- picocolors (colored output)
- ora (spinners)
- fs-extra (file operations)
- zod (schema validation)

---

## Success Criteria

- `npx vibe-ui init` works
- `npx vibe-ui add button` installs button
- Dependencies auto-resolved
- Import aliases correctly transformed
- Works with Next.js, Vite, Remix

---

## Next Steps

After completion → [Phase 05: Documentation](./phase-05-documentation.md)
