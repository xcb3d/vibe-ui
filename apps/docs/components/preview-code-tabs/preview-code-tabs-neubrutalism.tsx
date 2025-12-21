"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@vibe-ui/registry/ui/neubrutalism/tabs";
import { CodeBlock } from "@/components/code-block";
import { cn } from "@/lib/utils";
import { PreviewCodeTabsProps } from "./preview-code-tabs-types";

export function PreviewCodeTabsNeubrutalism({
  preview,
  code,
  className,
}: PreviewCodeTabsProps) {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div className="flex items-center justify-between pb-0 border-b-4 border-black">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="bg-transparent gap-2 p-0 h-auto">
            <TabsTrigger
              value="preview"
              className="px-6 py-3 relative top-[2px] z-10 transition-all text-black bg-primary font-black uppercase text-sm border-x-2 border-t-2 border-black rounded-t-lg data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground data-[state=inactive]:border-transparent"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="px-6 py-3 transition-all text-muted-foreground font-bold uppercase text-sm hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:border-x-2 data-[state=active]:border-t-2 data-[state=active]:border-black data-[state=active]:rounded-t-lg"
            >
              Code
            </TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="mt-0">
            <div className="min-h-[450px] flex items-center justify-center p-8 lg:p-12 relative overflow-hidden rounded-xl bg-secondary/50 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  opacity: 0.1,
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
