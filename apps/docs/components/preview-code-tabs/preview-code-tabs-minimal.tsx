"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@vibe-ui/registry/ui/minimal/tabs";
import { CodeBlock } from "@/components/code-block";
import { cn } from "@/lib/utils";
import { PreviewCodeTabsProps } from "./preview-code-tabs-types";

export function PreviewCodeTabsMinimal({
  preview,
  code,
  className,
}: PreviewCodeTabsProps) {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div className="flex items-center justify-between pb-0 border-b border-border">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="bg-transparent gap-2 p-0 h-auto">
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
            <div className="min-h-[450px] flex items-center justify-center p-8 lg:p-12 relative overflow-hidden rounded-xl bg-muted/30 border border-border/60">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  opacity: 0.03,
                }}
              />
              <div className="relative z-10 w-full max-w-[500px] mx-auto">
                {preview}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-0">
            <CodeBlock code={code} language="tsx" showCopyButton />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
