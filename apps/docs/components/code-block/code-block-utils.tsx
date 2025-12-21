import * as React from "react";

// Shared types
export interface CodeBlockProps {
  code: string;
  language?: string;
  showTerminalIcon?: boolean;
  showCopyButton?: boolean;
  className?: string;
}

// Syntax highlighting colors per theme
export interface SyntaxColors {
  keyword: string;
  string: string;
  component: string;
}

// Copy to clipboard hook - shared across themes
export function useCopyToClipboard(code: string) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return { copied, copyToClipboard };
}

// Syntax highlighting - shared across themes
export function highlightCodeToElements(
  code: string,
  language: string,
  colors: SyntaxColors,
): React.ReactNode {
  if (language !== "tsx" && language !== "jsx" && language !== "typescript") {
    return code;
  }

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  const combined =
    /(\b(?:import|from|export|function|return|const|let|var|if|else|async|await|type|interface)\b)|("[^"]*"|'[^']*')|(<\/?[A-Z][a-zA-Z]*)/g;

  let match;
  while ((match = combined.exec(code)) !== null) {
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

  if (lastIndex < code.length) {
    parts.push(code.slice(lastIndex));
  }

  return parts;
}
