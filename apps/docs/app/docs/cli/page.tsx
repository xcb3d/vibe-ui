export default function CLIPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">CLI Reference</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Command line interface for managing Vibe UI components.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">vibe-ui init</h2>
        <p className="text-muted-foreground">
          Initialize Vibe UI in your project.
        </p>
        <div className="rounded-lg border bg-muted/50 p-4">
          <code className="text-sm">npx vibe-ui init [options]</code>
        </div>
        <h3 className="text-lg font-medium mt-4">Options</h3>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 font-medium">Option</th>
                <th className="text-left p-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">
                  <code>--style &lt;style&gt;</code>
                </td>
                <td className="p-3 text-muted-foreground">
                  Default style to use
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3">
                  <code>-y, --yes</code>
                </td>
                <td className="p-3 text-muted-foreground">
                  Skip prompts and use defaults
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-medium mt-4">Example</h3>
        <div className="rounded-lg border bg-muted/50 p-4 space-y-2">
          <div>
            <code className="text-sm text-muted-foreground">
              # Interactive mode
            </code>
          </div>
          <div>
            <code className="text-sm">npx vibe-ui init</code>
          </div>
          <div className="pt-2">
            <code className="text-sm text-muted-foreground">
              # Quick setup with defaults
            </code>
          </div>
          <div>
            <code className="text-sm">npx vibe-ui init -y</code>
          </div>
          <div className="pt-2">
            <code className="text-sm text-muted-foreground">
              # With specific style
            </code>
          </div>
          <div>
            <code className="text-sm">npx vibe-ui init --style neon</code>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">vibe-ui add</h2>
        <p className="text-muted-foreground">Add components to your project.</p>
        <div className="rounded-lg border bg-muted/50 p-4">
          <code className="text-sm">
            npx vibe-ui add [components...] [options]
          </code>
        </div>
        <h3 className="text-lg font-medium mt-4">Options</h3>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 font-medium">Option</th>
                <th className="text-left p-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">
                  <code>--style &lt;style&gt;</code>
                </td>
                <td className="p-3 text-muted-foreground">
                  Override default style
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3">
                  <code>--overwrite</code>
                </td>
                <td className="p-3 text-muted-foreground">
                  Overwrite existing components
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3">
                  <code>-a, --all</code>
                </td>
                <td className="p-3 text-muted-foreground">
                  Add all available components
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-medium mt-4">Example</h3>
        <div className="rounded-lg border bg-muted/50 p-4 space-y-2">
          <div>
            <code className="text-sm text-muted-foreground">
              # Add specific components
            </code>
          </div>
          <div>
            <code className="text-sm">npx vibe-ui add button card input</code>
          </div>
          <div className="pt-2">
            <code className="text-sm text-muted-foreground">
              # Add all components
            </code>
          </div>
          <div>
            <code className="text-sm">npx vibe-ui add --all</code>
          </div>
          <div className="pt-2">
            <code className="text-sm text-muted-foreground">
              # Interactive selection
            </code>
          </div>
          <div>
            <code className="text-sm">npx vibe-ui add</code>
          </div>
          <div className="pt-2">
            <code className="text-sm text-muted-foreground">
              # Override existing files
            </code>
          </div>
          <div>
            <code className="text-sm">npx vibe-ui add button --overwrite</code>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">vibe-ui list</h2>
        <p className="text-muted-foreground">
          List available components and styles.
        </p>
        <div className="rounded-lg border bg-muted/50 p-4">
          <code className="text-sm">npx vibe-ui list [options]</code>
        </div>
        <h3 className="text-lg font-medium mt-4">Options</h3>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 font-medium">Option</th>
                <th className="text-left p-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">
                  <code>-c, --components</code>
                </td>
                <td className="p-3 text-muted-foreground">
                  List only components
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3">
                  <code>-s, --styles</code>
                </td>
                <td className="p-3 text-muted-foreground">List only styles</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-medium mt-4">Example</h3>
        <div className="rounded-lg border bg-muted/50 p-4 space-y-2">
          <div>
            <code className="text-sm text-muted-foreground">
              # List everything
            </code>
          </div>
          <div>
            <code className="text-sm">npx vibe-ui list</code>
          </div>
          <div className="pt-2">
            <code className="text-sm text-muted-foreground">
              # List only components
            </code>
          </div>
          <div>
            <code className="text-sm">npx vibe-ui list --components</code>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Configuration File</h2>
        <p className="text-muted-foreground">
          The CLI reads configuration from{" "}
          <code className="bg-muted px-1 rounded">vibe-ui.json</code> in your
          project root:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 overflow-x-auto">
          <pre className="text-sm">{`{
  "$schema": "https://vibe-ui.dev/schema.json",
  "style": "minimal",        // Default style
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
}`}</pre>
        </div>
      </div>
    </div>
  );
}
