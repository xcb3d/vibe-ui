import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Introduction</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Beautiful React components with 20+ visual styles. Pick your vibe,
          copy the code.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">What is Vibe UI?</h2>
        <p className="text-muted-foreground">
          Vibe UI is a collection of re-usable components that you can copy and
          paste into your apps. Unlike traditional component libraries, Vibe UI
          gives you full ownership of the code.
        </p>
        <p className="text-muted-foreground">
          The key difference from other libraries is our{" "}
          <strong>multi-style system</strong>. Each component can be rendered in
          different visual styles - minimal and clean or vivid neubrutalism.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>
            <strong>2 Visual Styles</strong> - Minimal and Brutalist
          </li>
          <li>
            <strong>18 Components</strong> - Button, Card, Input, Dialog, and
            more
          </li>
          <li>
            <strong>Accessible</strong> - Built on Radix UI primitives
          </li>
          <li>
            <strong>Customizable</strong> - CSS variables for easy theming
          </li>
          <li>
            <strong>Copy & Paste</strong> - Full ownership of the code
          </li>
          <li>
            <strong>CLI Tool</strong> - Add components with a single command
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick Start</h2>
        <div className="rounded-lg border bg-muted/50 p-4">
          <code className="text-sm">npx vibe-ui init</code>
        </div>
        <p className="text-muted-foreground">Then add components:</p>
        <div className="rounded-lg border bg-muted/50 p-4">
          <code className="text-sm">npx vibe-ui add button card input</code>
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          href="/docs/installation"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Get Started
        </Link>
        <Link
          href="/components/button"
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
        >
          Browse Components
        </Link>
      </div>
    </div>
  );
}
