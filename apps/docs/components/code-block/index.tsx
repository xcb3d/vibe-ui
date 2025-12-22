"use client";

import { useStyle } from "@/components/style-provider";
import { CodeBlock as CodeBlockMinimal } from "@vibe-ui/registry/ui/minimal/code-block";
import { CodeBlock as CodeBlockNeubrutalism } from "@vibe-ui/registry/ui/neubrutalism/code-block";
import type { CodeBlockProps } from "@vibe-ui/registry/ui/types/code-block";

export function CodeBlock(props: CodeBlockProps) {
  const { style } = useStyle();

  if (style === "minimal") {
    return <CodeBlockMinimal {...props} />;
  }

  return <CodeBlockNeubrutalism {...props} />;
}

// Re-export types
export type { CodeBlockProps } from "@vibe-ui/registry/ui/types/code-block";
