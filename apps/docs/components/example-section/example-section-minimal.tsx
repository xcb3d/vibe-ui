"use client";

import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/code-block";
import { Card } from "@vibe-ui/registry/ui/minimal/card";
import {
  ExampleSectionProps,
  ExamplesContainerProps,
} from "./example-section-types";

export function ExampleSectionMinimal({
  title,
  preview,
  code,
  id,
  showPattern = false,
  className,
}: ExampleSectionProps) {
  return (
    <section id={id} className={cn("flex flex-col gap-6", className)}>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
          {showPattern && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #000 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                opacity: 0.03,
              }}
            />
          )}
          <div className="w-full max-w-sm relative z-10">{preview}</div>
        </Card>

        <CodeBlock
          code={code}
          language="tsx"
          showCopyButton
          className="flex items-center"
        />
      </div>
    </section>
  );
}

export function ExamplesContainerMinimal({
  children,
  className,
}: ExamplesContainerProps) {
  return (
    <div id="examples" className={cn("flex flex-col gap-2 mt-4", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground">
        Examples
      </h2>
      <p className="text-lg text-muted-foreground mb-6">
        Customize the component to fit your needs.
      </p>
      <div className="flex flex-col gap-10">{children}</div>
    </div>
  );
}
