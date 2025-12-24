"use client";

import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/code-block";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@vibe-ui/registry/ui/minimal/tabs";
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
    <section id={id} className={cn("flex flex-col gap-4", className)}>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="bg-transparent gap-2 p-0 h-auto border-b border-border">
          <TabsTrigger
            value="preview"
            className="px-6 py-3 relative top-[2px] z-10 transition-all text-foreground font-semibold text-sm border-b-2 border-foreground -mb-[1px] data-[state=inactive]:border-transparent data-[state=inactive]:text-muted-foreground data-[state=inactive]:font-medium"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="px-6 py-3 transition-all text-muted-foreground font-medium text-sm hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:-mb-[1px]"
          >
            Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-0">
          <div className="min-h-[350px] flex items-center justify-center p-8 lg:p-12 relative overflow-hidden rounded-xl bg-muted/30 border border-border/60">
            {showPattern && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  opacity: 0.03,
                }}
              />
            )}
            <div className="relative z-10 w-full max-w-[500px] mx-auto">
              {preview}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-0">
          <CodeBlock code={code} language="tsx" showCopyButton />
        </TabsContent>
      </Tabs>
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
