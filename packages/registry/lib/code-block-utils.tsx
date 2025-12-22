"use client";

import * as React from "react";
import type { SyntaxColors } from "../ui/types/code-block";

/**
 * Hook for copy to clipboard functionality
 * Shows "copied" state for 2 seconds after copying
 */
export function useCopyToClipboard(code: string) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return { copied, copyToClipboard };
}

/**
 * Simple syntax highlighting for TSX/JSX code
 * Highlights keywords, strings, and React components
 */
export function highlightCodeToElements(
  code: string,
  language: string,
  colors: SyntaxColors,
): React.ReactNode {
  // Only highlight TSX/JSX/TypeScript
  if (language !== "tsx" && language !== "jsx" && language !== "typescript") {
    return code;
  }

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  // Regex to match keywords, strings, and React components
  const combined =
    /(\b(?:import|from|export|function|return|const|let|var|if|else|async|await|type|interface)\b)|("[^"]*"|'[^']*')|(<\/?[A-Z][a-zA-Z]*)/g;

  let match;
  while ((match = combined.exec(code)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(code.slice(lastIndex, match.index));
    }

    const [, keyword, string, component] = match;

    if (keyword) {
      parts.push(
        <span key={key++} className={colors.keyword}>
          {keyword}
        </span>,
      );
    } else if (string) {
      parts.push(
        <span key={key++} className={colors.string}>
          {string}
        </span>,
      );
    } else if (component) {
      parts.push(
        <span key={key++} className={colors.component}>
          {component}
        </span>,
      );
    }

    lastIndex = combined.lastIndex;
  }

  // Add remaining text
  if (lastIndex < code.length) {
    parts.push(code.slice(lastIndex));
  }

  return parts;
}
