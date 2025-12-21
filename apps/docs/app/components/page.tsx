import Link from "next/link";
import { componentDocs } from "@/lib/component-docs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@vibe-ui/registry/ui/neubrutalism/card";

export default function ComponentsPage() {
  const components = Object.values(componentDocs);

  // Group by category
  const categories = {
    Form: [
      "button",
      "input",
      "label",
      "textarea",
      "checkbox",
      "switch",
      "select",
      "slider",
      "radio-group",
      "form",
      "toggle",
      "toggle-group",
    ],
    Display: [
      "card",
      "badge",
      "avatar",
      "separator",
      "skeleton",
      "table",
      "progress",
      "scroll-area",
      "calendar",
      "breadcrumb",
      "pagination",
    ],
    Feedback: ["alert", "alert-dialog", "tooltip", "sonner"],
    Overlay: [
      "dialog",
      "dropdown-menu",
      "popover",
      "sheet",
      "command",
      "date-picker",
    ],
    Navigation: ["tabs", "accordion", "collapsible", "navigation-menu"],
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Components</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          38 beautifully designed components. Copy, paste, and customize.
        </p>
      </div>

      {Object.entries(categories).map(([category, slugs]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-2xl font-semibold">{category}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {slugs.map((slug) => {
              const doc = componentDocs[slug];
              if (!doc) return null;
              return (
                <Link key={slug} href={`/components/${slug}`}>
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg">{doc.name}</CardTitle>
                      <CardDescription>{doc.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      <div className="rounded-lg border bg-muted/50 p-6">
        <h3 className="font-semibold">Add all components at once</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Use the CLI to add all components to your project:
        </p>
        <div className="mt-4 rounded-lg border bg-background p-3">
          <code className="text-sm">npx vibe-ui add --all</code>
        </div>
      </div>
    </div>
  );
}
