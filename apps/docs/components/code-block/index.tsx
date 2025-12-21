"use client";

import { useStyle } from "@/components/style-provider";
import { CodeBlockMinimal } from "./code-block-minimal";
import { CodeBlockNeubrutalism } from "./code-block-neubrutalism";
import { CodeBlockProps } from "./code-block-utils";

export function CodeBlock(props: CodeBlockProps) {
  const { style } = useStyle();

  if (style === "minimal") {
    return <CodeBlockMinimal {...props} />;
  }

  return <CodeBlockNeubrutalism {...props} />;
}

// Re-export
export { CodeBlockMinimal } from "./code-block-minimal";
export { CodeBlockNeubrutalism } from "./code-block-neubrutalism";
export type { CodeBlockProps } from "./code-block-utils";
