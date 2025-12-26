"use client";

import { CodeBlock } from "@/components/code-block";
import { cn } from "@/lib/utils";
import { PreviewCodeTabsBaseProps } from "./preview-code-tabs-types";

/**
 * Base component for PreviewCodeTabs.
 * Accepts themed Tabs components and classNames via props to avoid duplication.
 */
export function PreviewCodeTabsBase({
  preview,
  code,
  className,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  classNames,
}: PreviewCodeTabsBaseProps) {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div className={classNames.container}>
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="bg-transparent gap-2 p-0 h-auto">
            <TabsTrigger value="preview" className={classNames.previewTrigger}>
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className={classNames.codeTrigger}>
              Code
            </TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="mt-0">
            <div className={classNames.previewContainer}>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  opacity: classNames.dotPatternOpacity,
                }}
              />
              <div className="relative z-10 w-full max-w-[500px] mx-auto flex items-center justify-center">
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
