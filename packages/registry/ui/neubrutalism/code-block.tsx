"use client";

import * as React from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "../../lib/utils";
import {
  useCopyToClipboard,
  highlightCodeToElements,
} from "../../lib/code-block-utils";
import type { CodeBlockProps, SyntaxColors } from "../types/code-block";

/**
 * Neubrutalism CodeBlock
 * Bold borders, hard shadows, accent colors
 */
const syntaxColors: SyntaxColors = {
  keyword: "text-accent",
  string: "text-primary",
  component: "text-primary",
};

const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      code,
      language = "bash",
      showTerminalIcon = false,
      showCopyButton = true,
      className,
    },
    ref,
  ) => {
    const { copied, copyToClipboard } = useCopyToClipboard(code);

    // Terminal style (for CLI commands)
    if (showTerminalIcon) {
      return (
        <div
          ref={ref}
          className={cn(
            "flex items-center rounded-lg overflow-hidden w-full",
            "bg-black text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
            "dark:border-white dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]",
            className,
          )}
        >
          <div className="px-4 py-4 flex items-center bg-accent text-black border-r-2 border-black dark:border-white">
            <Terminal className="h-5 w-5" />
          </div>
          <code className="font-mono text-sm flex-1 px-6 py-4 text-primary">
            {code}
          </code>
          {showCopyButton && (
            <button
              onClick={copyToClipboard}
              className="px-6 py-4 hover:bg-primary hover:text-black border-l-2 border-white/20 transition-colors"
              aria-label="Copy code"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
      );
    }

    // Syntax highlighted code block
    return (
      <div
        ref={ref}
        className={cn(
          "font-mono text-sm overflow-x-auto rounded-lg relative",
          "bg-[#1e1e1e] border-2 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
          "dark:border-white dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]",
          className,
        )}
      >
        <pre className="text-gray-300">
          <code>{highlightCodeToElements(code, language, syntaxColors)}</code>
        </pre>
        {showCopyButton && (
          <button
            onClick={copyToClipboard}
            className="absolute top-4 right-4 p-2 rounded hover:bg-white/10 transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4 text-gray-400" />
            )}
          </button>
        )}
      </div>
    );
  },
);
CodeBlock.displayName = "CodeBlock";

export { CodeBlock };
