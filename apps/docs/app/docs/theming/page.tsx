"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useStyle } from "@/components/style-provider";
import { StyleSwitcherGrid } from "@/components/style-switcher";
import { ThemeSwitcher, ThemeToggle } from "@/components/theme-switcher";
import { Button } from "@vibe-ui/registry/ui/neubrutalism/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@vibe-ui/registry/ui/neubrutalism/card";

export default function ThemingPage() {
  const { style } = useStyle();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Theming</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Customize the look and feel of Vibe UI components.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Style System</h2>
        <p className="text-muted-foreground">
          Vibe UI comes with 2 built-in styles. Click to switch:
        </p>
        <StyleSwitcherGrid />
        <p className="text-sm text-muted-foreground">
          Current style: <code className="bg-muted px-1 rounded">{style}</code>
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Dark Mode</h2>
        <p className="text-muted-foreground">
          Vibe UI supports light, dark, and system themes. Both styles have
          light and dark variants.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Try it:</span>
            <ThemeSwitcher />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Or toggle:</span>
            <ThemeToggle />
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Current theme:{" "}
          <code className="bg-muted px-1 rounded">
            {mounted ? theme : "..."}
          </code>
          {mounted && theme === "system" && (
            <span>
              {" "}
              (resolved:{" "}
              <code className="bg-muted px-1 rounded">{resolvedTheme}</code>)
            </span>
          )}
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Live Preview</h2>
        <Card>
          <CardHeader>
            <CardTitle>Sample Card</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">CSS Variables</h2>
        <p className="text-muted-foreground">
          Each style is defined using CSS variables. You can customize them in
          your <code className="bg-muted px-1 rounded">globals.css</code>:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 overflow-x-auto">
          <pre className="text-sm">{`@theme {
  --color-background: hsl(0 0% 100%);
  --color-foreground: hsl(0 0% 3.9%);
  --color-primary: hsl(0 0% 9%);
  --color-primary-foreground: hsl(0 0% 98%);
  --color-secondary: hsl(0 0% 96.1%);
  --color-secondary-foreground: hsl(0 0% 9%);
  --color-muted: hsl(0 0% 96.1%);
  --color-muted-foreground: hsl(0 0% 45.1%);
  --color-accent: hsl(0 0% 96.1%);
  --color-accent-foreground: hsl(0 0% 9%);
  --color-destructive: hsl(0 84.2% 60.2%);
  --color-border: hsl(0 0% 89.8%);
  --color-ring: hsl(0 0% 3.9%);
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Available Styles</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Minimal</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Clean, Swiss-style design. White background, subtle borders, small
              border radius.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Brutalist</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Raw, high contrast design. No border radius, bold black borders,
              offset shadows.
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Switching Styles</h2>
        <p className="text-muted-foreground">
          Use the <code className="bg-muted px-1 rounded">useStyle</code> hook
          to switch styles programmatically:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 overflow-x-auto">
          <pre className="text-sm">{`import { useStyle } from '@/components/style-provider'

function MyComponent() {
  const { style, setStyle, styles } = useStyle()

  return (
    <select value={style} onChange={(e) => setStyle(e.target.value)}>
      {styles.map((s) => (
        <option key={s.name} value={s.name}>
          {s.label}
        </option>
      ))}
    </select>
  )
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Switching Themes</h2>
        <p className="text-muted-foreground">
          Use the <code className="bg-muted px-1 rounded">useTheme</code> hook
          from next-themes to switch themes programmatically:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 overflow-x-auto">
          <pre className="text-sm">{`import { useTheme } from 'next-themes'

function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('system')}>System</button>
      <p>Current: {theme} (resolved: {resolvedTheme})</p>
    </div>
  )
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Dark Mode CSS</h2>
        <p className="text-muted-foreground">
          Dark mode is applied using the{" "}
          <code className="bg-muted px-1 rounded">.dark</code> class on the HTML
          element. Each style has its own dark variant:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 overflow-x-auto">
          <pre className="text-sm">{`/* Light mode (default) */
:root {
  --color-background: hsl(0 0% 100%);
  --color-foreground: hsl(0 0% 3.9%);
}

/* Dark mode */
.dark {
  --color-background: hsl(0 0% 3.9%);
  --color-foreground: hsl(0 0% 98%);
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Dynamic Theme Loading</h2>
        <p className="text-muted-foreground">
          Styles are loaded dynamically via CSS file injection. Each theme has
          its own standalone CSS file:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 overflow-x-auto">
          <pre className="text-sm">{`/styles/minimal.css
/styles/neubrutalism.css`}</pre>
        </div>
        <p className="text-muted-foreground">
          The StyleProvider automatically loads the correct CSS file when you
          change styles.
        </p>
      </div>
    </div>
  );
}
