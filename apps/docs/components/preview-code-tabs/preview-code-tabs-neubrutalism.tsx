"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@vibe-ui/registry/ui/neubrutalism/tabs";
import { PreviewCodeTabsBase } from "./preview-code-tabs-base";
import { PreviewCodeTabsProps } from "./preview-code-tabs-types";

const neubrutalismClassNames = {
  container: "flex items-center justify-between pb-0 border-b-4 border-black",
  previewTrigger:
    "px-6 py-3 relative top-[2px] z-10 transition-all text-black bg-primary font-black uppercase text-sm border-x-2 border-t-2 border-black rounded-t-lg data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground data-[state=inactive]:border-transparent",
  codeTrigger:
    "px-6 py-3 transition-all text-muted-foreground font-bold uppercase text-sm hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:border-x-2 data-[state=active]:border-t-2 data-[state=active]:border-black data-[state=active]:rounded-t-lg",
  previewContainer:
    "min-h-[450px] flex items-center justify-center p-8 lg:p-12 relative overflow-hidden rounded-xl bg-secondary/50 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]",
  dotPatternOpacity: 0.1,
};

export function PreviewCodeTabsNeubrutalism(props: PreviewCodeTabsProps) {
  return (
    <PreviewCodeTabsBase
      {...props}
      Tabs={Tabs}
      TabsContent={TabsContent}
      TabsList={TabsList}
      TabsTrigger={TabsTrigger}
      classNames={neubrutalismClassNames}
    />
  );
}
