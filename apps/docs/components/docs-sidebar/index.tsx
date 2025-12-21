"use client";

import { useStyle } from "@/components/style-provider";
import { DocsSidebarMinimal, MobileSidebarMinimal } from "./sidebar-minimal";
import {
  DocsSidebarNeubrutalism,
  MobileSidebarNeubrutalism,
} from "./sidebar-neubrutalism";

export function DocsSidebar() {
  const { style } = useStyle();

  if (style === "minimal") {
    return <DocsSidebarMinimal />;
  }

  return <DocsSidebarNeubrutalism />;
}

export function MobileSidebar() {
  const { style } = useStyle();

  if (style === "minimal") {
    return <MobileSidebarMinimal />;
  }

  return <MobileSidebarNeubrutalism />;
}

// Re-export individual components
export { DocsSidebarMinimal, MobileSidebarMinimal } from "./sidebar-minimal";
export {
  DocsSidebarNeubrutalism,
  MobileSidebarNeubrutalism,
} from "./sidebar-neubrutalism";
export { componentCategories, navigation } from "./sidebar-data";
