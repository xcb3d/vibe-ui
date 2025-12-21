"use client";

import { useStyle } from "@/components/style-provider";
import { TableOfContentsMinimal } from "./table-of-contents-minimal";
import { TableOfContentsNeubrutalism } from "./table-of-contents-neubrutalism";
import { TableOfContentsProps } from "./table-of-contents-utils";

export function TableOfContents(props: TableOfContentsProps) {
  const { style } = useStyle();

  if (style === "minimal") {
    return <TableOfContentsMinimal {...props} />;
  }

  return <TableOfContentsNeubrutalism {...props} />;
}

// Re-export
export { TableOfContentsMinimal } from "./table-of-contents-minimal";
export { TableOfContentsNeubrutalism } from "./table-of-contents-neubrutalism";
export type { TableOfContentsProps, TOCItem } from "./table-of-contents-utils";
