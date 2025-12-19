import { Command } from "commander";
import pc from "picocolors";
import { getAvailableComponents, getAvailableStyles } from "../utils/registry";

export const list = new Command("list")
  .description("List available components and styles")
  .option("-c, --components", "List only components")
  .option("-s, --styles", "List only styles")
  .action(async (options) => {
    const showAll = !options.components && !options.styles;

    try {
      // List styles
      if (showAll || options.styles) {
        const styles = await getAvailableStyles();
        console.log("\n" + pc.bold("Available Styles:"));
        console.log(pc.dim("─".repeat(40)));
        styles.forEach((style) => {
          console.log(`  ${pc.cyan("●")} ${style}`);
        });
      }

      // List components
      if (showAll || options.components) {
        const components = await getAvailableComponents();
        console.log("\n" + pc.bold("Available Components:"));
        console.log(pc.dim("─".repeat(40)));

        // Group by type if possible
        const grouped = new Map<string, typeof components>();
        for (const comp of components) {
          const category = getCategory(comp.name);
          if (!grouped.has(category)) {
            grouped.set(category, []);
          }
          grouped.get(category)!.push(comp);
        }

        for (const [category, comps] of grouped) {
          console.log(`\n  ${pc.yellow(category)}`);
          comps.forEach((comp) => {
            const deps =
              comp.dependencies.length > 0
                ? pc.dim(` (${comp.dependencies.length} deps)`)
                : "";
            console.log(`    ${pc.cyan("●")} ${comp.name}${deps}`);
            if (comp.description) {
              console.log(`      ${pc.dim(comp.description)}`);
            }
          });
        }
      }

      console.log("");
    } catch (error) {
      console.error(pc.red("Failed to fetch registry"));
      if (error instanceof Error) {
        console.error(pc.dim(error.message));
      }
      process.exit(1);
    }
  });

function getCategory(name: string): string {
  const categories: Record<string, string[]> = {
    Form: [
      "button",
      "input",
      "textarea",
      "label",
      "checkbox",
      "switch",
      "select",
    ],
    Display: ["card", "badge", "avatar", "separator", "skeleton"],
    Feedback: ["alert", "sonner", "tooltip"],
    Overlay: ["dialog", "dropdown-menu"],
    Navigation: ["tabs"],
  };

  for (const [category, components] of Object.entries(categories)) {
    if (components.includes(name)) {
      return category;
    }
  }
  return "Other";
}
