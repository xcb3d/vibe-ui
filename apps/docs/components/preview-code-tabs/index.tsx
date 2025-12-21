"use client";

import { useStyle } from "@/components/style-provider";
import { PreviewCodeTabsMinimal } from "./preview-code-tabs-minimal";
import { PreviewCodeTabsNeubrutalism } from "./preview-code-tabs-neubrutalism";
import { PreviewCodeTabsProps } from "./preview-code-tabs-types";

export function PreviewCodeTabs(props: PreviewCodeTabsProps) {
  const { style } = useStyle();

  if (style === "minimal") {
    return <PreviewCodeTabsMinimal {...props} />;
  }

  return <PreviewCodeTabsNeubrutalism {...props} />;
}

// Re-export
export { PreviewCodeTabsMinimal } from "./preview-code-tabs-minimal";
export { PreviewCodeTabsNeubrutalism } from "./preview-code-tabs-neubrutalism";
export type { PreviewCodeTabsProps } from "./preview-code-tabs-types";
