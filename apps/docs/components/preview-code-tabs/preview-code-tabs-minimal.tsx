"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@vibe-ui/registry/ui/minimal/tabs";
import { PreviewCodeTabsBase } from "./preview-code-tabs-base";
import { PreviewCodeTabsProps } from "./preview-code-tabs-types";

const minimalClassNames = {
  container: "flex items-center justify-between pb-0 border-b border-border",
  previewTrigger:
    "px-6 py-3 relative top-[2px] z-10 transition-all text-foreground font-semibold text-sm border-b-2 border-foreground -mb-[1px] data-[state=inactive]:border-transparent data-[state=inactive]:text-muted-foreground data-[state=inactive]:font-medium",
  codeTrigger:
    "px-6 py-3 transition-all text-muted-foreground font-medium text-sm hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:-mb-[1px]",
  previewContainer:
    "min-h-[450px] flex items-center justify-center p-8 lg:p-12 relative overflow-hidden rounded-xl bg-muted/30 border border-border/60",
  dotPatternOpacity: 0.03,
};

export function PreviewCodeTabsMinimal(props: PreviewCodeTabsProps) {
  return (
    <PreviewCodeTabsBase
      {...props}
      Tabs={Tabs}
      TabsContent={TabsContent}
      TabsList={TabsList}
      TabsTrigger={TabsTrigger}
      classNames={minimalClassNames}
    />
  );
}
