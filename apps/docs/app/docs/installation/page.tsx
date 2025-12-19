export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Installation</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          How to install and set up Vibe UI in your project.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Prerequisites</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>React 18+</li>
          <li>Tailwind CSS 4.0+</li>
          <li>TypeScript (recommended)</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Initialize Vibe UI</h2>
        <p className="text-muted-foreground">
          Run the init command to set up your project:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4">
          <code className="text-sm">npx vibe-ui init</code>
        </div>
        <p className="text-muted-foreground">
          This will create a{" "}
          <code className="bg-muted px-1 rounded">vibe-ui.json</code> config
          file and set up the necessary directories.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Install Dependencies</h2>
        <p className="text-muted-foreground">
          Install the required dependencies:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 space-y-2">
          <div>
            <code className="text-sm text-muted-foreground"># npm</code>
          </div>
          <div>
            <code className="text-sm">
              npm install clsx tailwind-merge class-variance-authority
            </code>
          </div>
        </div>
        <div className="rounded-lg border bg-muted/50 p-4 space-y-2">
          <div>
            <code className="text-sm text-muted-foreground"># pnpm</code>
          </div>
          <div>
            <code className="text-sm">
              pnpm add clsx tailwind-merge class-variance-authority
            </code>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Add Components</h2>
        <p className="text-muted-foreground">Add components to your project:</p>
        <div className="rounded-lg border bg-muted/50 p-4">
          <code className="text-sm">npx vibe-ui add button card input</code>
        </div>
        <p className="text-muted-foreground">Or add all components at once:</p>
        <div className="rounded-lg border bg-muted/50 p-4">
          <code className="text-sm">npx vibe-ui add --all</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Configure Path Aliases</h2>
        <p className="text-muted-foreground">
          Make sure your{" "}
          <code className="bg-muted px-1 rounded">tsconfig.json</code> has the
          correct path aliases:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 overflow-x-auto">
          <pre className="text-sm">{`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Structure</h2>
        <p className="text-muted-foreground">
          After initialization, your project will have this structure:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 overflow-x-auto">
          <pre className="text-sm">{`├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ...
│   └── lib/
│       └── utils.ts
├── vibe-ui.json
└── ...`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Configuration</h2>
        <p className="text-muted-foreground">
          The <code className="bg-muted px-1 rounded">vibe-ui.json</code> file
          contains your project configuration:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 overflow-x-auto">
          <pre className="text-sm">{`{
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
}`}</pre>
        </div>
      </div>
    </div>
  );
}
