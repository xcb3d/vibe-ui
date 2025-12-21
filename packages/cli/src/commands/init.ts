import { Command } from "commander";
import prompts from "prompts";
import pc from "picocolors";
import ora from "ora";
import fs from "fs-extra";
import path from "path";
import { getAvailableStyles, resolveStyleCSS } from "../utils/registry";

export const init = new Command("init")
  .description("Initialize Vibe UI in your project")
  .option("--style <style>", "Default style to use")
  .option("-y, --yes", "Skip prompts and use defaults")
  .action(async (options) => {
    console.log(pc.bold("\n  Vibe UI Setup\n"));

    // Get available styles
    let styles: string[] = [];
    try {
      styles = await getAvailableStyles();
    } catch {
      styles = ["minimal", "neubrutalism"];
    }

    const styleChoices = styles.map((s) => ({
      title: s.charAt(0).toUpperCase() + s.slice(1),
      value: s,
      description: getStyleDescription(s),
    }));

    // Use defaults if --yes flag
    let config;
    if (options.yes) {
      config = {
        style: options.style || "minimal",
        componentsPath: "src/components/ui",
        utilsPath: "src/lib",
        typescript: true,
      };
    } else {
      // Prompt for configuration
      config = await prompts([
        {
          type: "select",
          name: "style",
          message: "Which style would you like to use?",
          choices: styleChoices,
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
          initial: "src/lib",
        },
        {
          type: "confirm",
          name: "typescript",
          message: "Are you using TypeScript?",
          initial: true,
        },
      ]);
    }

    if (!config.style) {
      console.log(pc.red("Setup cancelled."));
      process.exit(1);
    }

    const spinner = ora("Setting up Vibe UI...").start();

    try {
      // Create config file
      const vibeConfig = {
        $schema: "https://vibe-ui.dev/schema.json",
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
        typescript: config.typescript,
      };

      await fs.writeJson("vibe-ui.json", vibeConfig, { spaces: 2 });

      // Create utils directory and file
      const utilsDir = path.join(process.cwd(), config.utilsPath);
      await fs.ensureDir(utilsDir);

      const utilsContent = `import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`;
      await fs.writeFile(path.join(utilsDir, "utils.ts"), utilsContent);

      // Create components/ui directory
      const componentsDir = path.join(process.cwd(), config.componentsPath);
      await fs.ensureDir(componentsDir);

      // Get and inject style CSS
      spinner.text = "Fetching style CSS...";
      const styleCSS = await resolveStyleCSS(config.style);
      if (styleCSS) {
        // Try to find globals.css and append style
        const globalsCssPath = path.join(process.cwd(), "src/app/globals.css");
        if (await fs.pathExists(globalsCssPath)) {
          const existingCSS = await fs.readFile(globalsCssPath, "utf-8");
          // Check if style already exists
          if (!existingCSS.includes(`[data-style="${config.style}"]`)) {
            await fs.appendFile(globalsCssPath, "\n" + styleCSS);
            spinner.text = "Injected style CSS into globals.css";
          }
        }
      }

      spinner.succeed("Vibe UI initialized successfully!");

      console.log("\n" + pc.green("Next steps:"));
      console.log(`  1. Install dependencies:`);
      console.log(
        `     ${pc.cyan("pnpm add clsx tailwind-merge class-variance-authority")}`,
      );
      console.log(`  2. Add components:`);
      console.log(`     ${pc.cyan("npx vibe-ui add button card input")}`);
      console.log(`  3. List all components:`);
      console.log(`     ${pc.cyan("npx vibe-ui list")}`);
      console.log("\n");
    } catch (error) {
      spinner.fail("Failed to initialize Vibe UI");
      console.error(error);
      process.exit(1);
    }
  });

function getStyleDescription(style: string): string {
  const descriptions: Record<string, string> = {
    minimal: "Clean, Swiss-style design",
    neubrutalism: "Vivid colors and hard shadows",
  };
  return descriptions[style] || "";
}
