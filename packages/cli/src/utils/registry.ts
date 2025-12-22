import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface RegistryItem {
  name: string;
  type: "registry:ui" | "registry:lib";
  description: string;
  files: { path: string; type: string }[];
  dependencies: string[];
  registryDependencies: string[];
}

export interface Registry {
  $schema: string;
  name: string;
  version: string;
  styles: string[];
  items: RegistryItem[];
}

export interface ResolvedComponent {
  name: string;
  content: string;
  dependencies: string[];
  registryDependencies: string[];
}

// For local development, use file system
// For production, fetch from URL
const REGISTRY_BASE_URL =
  process.env.VIBE_UI_REGISTRY_URL || "https://registry.vibe-ui.dev";

function getLocalRegistryPath(): string | null {
  // Check multiple possible locations for the registry
  const possiblePaths = [
    // Monorepo development (from packages/cli/dist/)
    path.resolve(__dirname, "../../../registry"),
    // Monorepo development (from packages/cli/src/)
    path.resolve(__dirname, "../../registry"),
    // Local development from workspace root
    path.resolve(process.cwd(), "packages/registry"),
    // Environment variable
    process.env.VIBE_UI_LOCAL_REGISTRY,
  ].filter(Boolean) as string[];

  for (const p of possiblePaths) {
    if (fs.existsSync(path.join(p, "registry.json"))) {
      return p;
    }
  }
  return null;
}

export async function getRegistry(): Promise<Registry> {
  // Try local registry first (for development)
  const localPath = getLocalRegistryPath();
  if (localPath) {
    const registryFile = path.join(localPath, "registry.json");
    if (await fs.pathExists(registryFile)) {
      return fs.readJson(registryFile);
    }
  }

  // Fallback to remote
  const response = await fetch(`${REGISTRY_BASE_URL}/registry.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch registry: ${response.statusText}`);
  }
  return response.json();
}

export async function getAvailableStyles(): Promise<string[]> {
  const registry = await getRegistry();
  return registry.styles;
}

export async function getAvailableComponents(): Promise<RegistryItem[]> {
  const registry = await getRegistry();
  return registry.items;
}

export async function getComponentInfo(
  name: string,
): Promise<RegistryItem | null> {
  const registry = await getRegistry();
  return registry.items.find((item) => item.name === name) || null;
}

export async function resolveComponent(
  name: string,
  style: string,
): Promise<ResolvedComponent | null> {
  const info = await getComponentInfo(name);
  if (!info) return null;

  // Try local file first (style-specific path)
  const localPath = getLocalRegistryPath();
  if (localPath) {
    // Use style-specific path: ui/{style}/{name}.tsx
    const componentPath = path.join(localPath, "ui", style, `${name}.tsx`);
    if (await fs.pathExists(componentPath)) {
      const content = await fs.readFile(componentPath, "utf-8");
      return {
        name,
        content,
        dependencies: info.dependencies,
        registryDependencies: info.registryDependencies,
      };
    }
  }

  // Fallback to remote
  try {
    const response = await fetch(
      `${REGISTRY_BASE_URL}/styles/${style}/ui/${name}.tsx`,
    );
    if (!response.ok) {
      return null;
    }
    const content = await response.text();
    return {
      name,
      content,
      dependencies: info.dependencies,
      registryDependencies: info.registryDependencies,
    };
  } catch {
    return null;
  }
}

export async function resolveStyleCSS(style: string): Promise<string | null> {
  // Try local file first
  const localPath = getLocalRegistryPath();
  if (localPath) {
    const stylePath = path.join(localPath, "styles", style, "globals.css");
    if (await fs.pathExists(stylePath)) {
      return fs.readFile(stylePath, "utf-8");
    }
  }

  // Fallback to remote
  try {
    const response = await fetch(
      `${REGISTRY_BASE_URL}/styles/${style}/globals.css`,
    );
    if (!response.ok) {
      return null;
    }
    return response.text();
  } catch {
    return null;
  }
}

export async function resolveComponentWithDeps(
  name: string,
  style: string,
  resolved: Map<string, ResolvedComponent> = new Map(),
): Promise<Map<string, ResolvedComponent>> {
  // Skip if already resolved
  if (resolved.has(name)) {
    return resolved;
  }

  const component = await resolveComponent(name, style);
  if (!component) {
    throw new Error(`Component "${name}" not found in registry`);
  }

  resolved.set(name, component);

  // Resolve registry dependencies recursively
  for (const dep of component.registryDependencies) {
    await resolveComponentWithDeps(dep, style, resolved);
  }

  return resolved;
}

export function collectAllDependencies(
  components: Map<string, ResolvedComponent>,
): string[] {
  const deps = new Set<string>();
  for (const component of components.values()) {
    for (const dep of component.dependencies) {
      deps.add(dep);
    }
  }
  return Array.from(deps);
}
