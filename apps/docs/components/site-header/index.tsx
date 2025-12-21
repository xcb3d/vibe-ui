"use client";

import { useStyle } from "@/components/style-provider";
import { SiteHeaderMinimal } from "./header-minimal";
import { SiteHeaderNeubrutalism } from "./header-neubrutalism";

export function SiteHeader() {
  const { style } = useStyle();

  if (style === "minimal") {
    return <SiteHeaderMinimal />;
  }

  return <SiteHeaderNeubrutalism />;
}

// Re-export individual components
export { SiteHeaderMinimal } from "./header-minimal";
export { SiteHeaderNeubrutalism } from "./header-neubrutalism";
