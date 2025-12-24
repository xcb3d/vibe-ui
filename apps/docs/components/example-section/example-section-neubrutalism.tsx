"use client";

import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/code-block";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@vibe-ui/registry/ui/neubrutalism/tabs";
import {
  ExampleSectionProps,
  ExamplesContainerProps,
  colorMap,
} from "./example-section-types";

export function ExampleSectionNeubrutalism({
  title,
  color = "primary",
  preview,
  code,
  id,
  showPattern = false,
  className,
}: ExampleSectionProps) {
  return (
    <section id={id} className={cn("flex flex-col gap-4", className)}>
      <h3 className="text-xl font-bold uppercase bg-secondary p-2 border-2 border-black w-fit shadow-[4px_4px_0px_0px_#000] text-foreground flex items-center gap-3 dark:border-white dark:shadow-[4px_4px_0px_0px_#fff]">
        <span
          className={cn(
            "w-4 h-4 border-2 border-black dark:border-white block rounded-full",
            colorMap[color],
          )}
        />
        {title}
      </h3>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="bg-transparent gap-2 p-0 h-auto border-b-4 border-black dark:border-white">
          <TabsTrigger
            value="preview"
            className="px-6 py-3 relative top-[2px] z-10 transition-all text-foreground font-bold text-sm uppercase border-b-4 border-primary -mb-[2px] data-[state=inactive]:border-transparent data-[state=inactive]:text-muted-foreground data-[state=inactive]:font-medium"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="px-6 py-3 transition-all text-muted-foreground font-medium text-sm uppercase hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-bold data-[state=active]:border-b-4 data-[state=active]:border-primary data-[state=active]:-mb-[2px]"
          >
            Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-0">
          <div className="min-h-[350px] flex items-center justify-center p-8 lg:p-12 relative overflow-hidden border-2 border-black dark:border-white bg-card">
            {showPattern && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  opacity: 0.2,
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

export function ExamplesContainerNeubrutalism({
  children,
  className,
}: ExamplesContainerProps) {
  return (
    <div id="examples" className={cn("flex flex-col gap-2 mt-4", className)}>
      <h2 className="text-4xl font-black uppercase drop-shadow-[2px_2px_0px_rgba(255,255,255,0.2)] text-foreground">
        Examples
      </h2>
      <p className="font-medium text-lg text-muted-foreground mb-6">
        Customize the component to fit your needs.
      </p>
      <div className="flex flex-col gap-10">{children}</div>
    </div>
  );
}
