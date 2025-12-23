import * as React from "react";
import type {
  TabsProps,
  TabsContentProps,
  TabsListProps,
  TabsTriggerProps,
} from "@vibe-ui/registry/ui/types/tabs";

// Shared types
export interface PreviewCodeTabsProps {
  preview: React.ReactNode;
  code: string;
  className?: string;
}

// Base component types
export interface PreviewCodeTabsClassNames {
  container: string;
  previewTrigger: string;
  codeTrigger: string;
  previewContainer: string;
  dotPatternOpacity: number;
}

export interface PreviewCodeTabsComponents {
  Tabs: React.ComponentType<TabsProps>;
  TabsContent: React.ComponentType<TabsContentProps>;
  TabsList: React.ComponentType<TabsListProps>;
  TabsTrigger: React.ComponentType<TabsTriggerProps>;
}

export interface PreviewCodeTabsBaseProps
  extends PreviewCodeTabsProps, PreviewCodeTabsComponents {
  classNames: PreviewCodeTabsClassNames;
}
