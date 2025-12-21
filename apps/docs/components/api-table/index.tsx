"use client";

import { useStyle } from "@/components/style-provider";
import { ApiTableMinimal } from "./api-table-minimal";
import { ApiTableNeubrutalism } from "./api-table-neubrutalism";
import { ApiTableProps } from "./api-table-types";

export function ApiTable(props: ApiTableProps) {
  const { style } = useStyle();

  if (style === "minimal") {
    return <ApiTableMinimal {...props} />;
  }

  return <ApiTableNeubrutalism {...props} />;
}

// Re-export
export { ApiTableMinimal } from "./api-table-minimal";
export { ApiTableNeubrutalism } from "./api-table-neubrutalism";
export type { ApiTableProps, PropDefinition } from "./api-table-types";
