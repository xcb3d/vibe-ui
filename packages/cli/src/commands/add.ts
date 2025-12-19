import { Command } from "commander";
import prompts from "prompts";
import pc from "picocolors";
import ora from "ora";
import fs from "fs-extra";
import path from "path";
import {
  resolveComponentWithDeps,
  collectAllDependencies,
  getAvailableComponents,
  type ResolvedComponent,
} from "../utils/registry";

interface VibeUIConfig {
  style: string;
  aliases: {
    components: string;
    utils: string;
    ui: string;
  };
  typescript: boolean;
}

async function loadConfig(): Promise<VibeUIConfig | null> {
  const configPath = path.join(process.cwd(), "vibe-ui.json");
  if (await fs.pathExists(configPath)) {
    return fs.readJson(configPath);
  }
  return null;
}

function transformImports(content: string, config: VibeUIConfig): string {
  // Replace @/lib/utils with configured path
  const utilsAlias = config.aliases.utils || "@/lib/utils";
  return content.replace(/@\/lib\/utils/g, utilsAlias);
}

async function writeComponent(
  component: ResolvedComponent,
  targetDir: string,
  config: VibeUIConfig,
  overwrite: boolean,
): Promise<{ written: boolean; skipped: boolean }> {
  const filePath = path.join(targetDir, `${component.name}.tsx`);

  if ((await fs.pathExists(filePath)) && !overwrite) {
    return { written: false, skipped: true };
  }

  const transformedContent = transformImports(component.content, config);
  await fs.writeFile(filePath, transformedContent);
  return { written: true, skipped: false };
}

export const add = new Command("add")
  .description("Add components to your project")
  .argument("[components...]", "Components to add (leave empty to select)")
  .option("--style <style>", "Override default style")
  .option("--overwrite", "Overwrite existing components")
  .option("-a, --all", "Add all available components")
  .action(async (componentArgs: string[], options) => {
    const config = await loadConfig();

    if (!config) {
      console.log(
        pc.red("\nNo vibe-ui.json found. Run `npx vibe-ui init` first.\n"),
      );
      process.exit(1);
    }

    let components = componentArgs;

    // If --all flag, get all components
    if (options.all) {
      const available = await getAvailableComponents();
      components = available.map((c) => c.name);
    }

    // If no components specified, prompt for selection
    if (components.length === 0) {
      const available = await getAvailableComponents();
      const { selected } = await prompts({
        type: "multiselect",
        name: "selected",
        message: "Which components would you like to add?",
        choices: available.map((c) => ({
          title: c.name,
          value: c.name,
          description: c.description,
        })),
        hint: "- Space to select, Enter to confirm",
      });

      if (!selected || selected.length === 0) {
        console.log(pc.yellow("\nNo components selected.\n"));
        process.exit(0);
      }

      components = selected;
    }

    const style = options.style || config.style;
    const spinner = ora(
      `Resolving ${components.length} component(s)...`,
    ).start();

    try {
      // Resolve all components with their dependencies
      const resolved = new Map<string, ResolvedComponent>();
      for (const name of components) {
        await resolveComponentWithDeps(name, style, resolved);
      }

      // Get target directory from config
      const uiAlias = config.aliases.ui || "@/components/ui";
      const targetDir = path.join(process.cwd(), uiAlias.replace("@/", "src/"));
      await fs.ensureDir(targetDir);

      spinner.text = `Writing ${resolved.size} component(s)...`;

      // Write all components
      const results = {
        written: [] as string[],
        skipped: [] as string[],
      };

      for (const [name, component] of resolved) {
        const result = await writeComponent(
          component,
          targetDir,
          config,
          options.overwrite,
        );
        if (result.written) {
          results.written.push(name);
        } else if (result.skipped) {
          results.skipped.push(name);
        }
      }

      spinner.succeed(`Done!`);

      // Show results
      if (results.written.length > 0) {
        console.log("\n" + pc.green("Components added:"));
        results.written.forEach((name) =>
          console.log(`  ${pc.cyan("✓")} ${name}`),
        );
      }

      if (results.skipped.length > 0) {
        console.log("\n" + pc.yellow("Skipped (already exist):"));
        results.skipped.forEach((name) =>
          console.log(`  ${pc.dim("○")} ${name}`),
        );
        console.log(pc.dim("  Use --overwrite to replace existing files"));
      }

      // Show npm dependencies to install
      const allDeps = collectAllDependencies(resolved);
      if (allDeps.length > 0) {
        console.log("\n" + pc.blue("Required dependencies:"));
        console.log(`  ${pc.cyan("pnpm add")} ${allDeps.join(" ")}`);
      }

      console.log("");
    } catch (error) {
      spinner.fail("Failed to add components");
      if (error instanceof Error) {
        console.error(pc.red(error.message));
      }
      process.exit(1);
    }
  });
