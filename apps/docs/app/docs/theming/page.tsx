"use client";

import { useStyle } from "@/components/style-provider";
import { StyleSwitcherGrid } from "@/components/style-switcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ThemingPage() {
  const { style } = useStyle();

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
          Vibe UI comes with 5 built-in styles. Click to switch:
        </p>
        <StyleSwitcherGrid />
        <p className="text-sm text-muted-foreground">
          Current style: <code className="bg-muted px-1 rounded">{style}</code>
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
              <CardTitle>Glass</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Glassmorphism with blur effects. Dark background, frosted glass
              cards, transparency.
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
          <Card>
            <CardHeader>
              <CardTitle>Soft</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Neumorphism with soft shadows. Dual light/dark shadows, large
              border radius.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Neon</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Cyberpunk dark mode. Glowing borders, magenta/cyan accents, text
              shadows.
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
        <h2 className="text-2xl font-semibold">Data Attribute</h2>
        <p className="text-muted-foreground">
          Styles are applied using the{" "}
          <code className="bg-muted px-1 rounded">data-style</code> attribute on
          the HTML element:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 overflow-x-auto">
          <pre className="text-sm">{`<html data-style="minimal">
  <!-- Your app -->
</html>`}</pre>
        </div>
        <p className="text-muted-foreground">
          The StyleProvider automatically sets this attribute when you change
          styles.
        </p>
      </div>
    </div>
  );
}
