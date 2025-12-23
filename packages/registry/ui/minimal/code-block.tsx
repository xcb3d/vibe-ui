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
 * Minimal CodeBlock
 * Clean dark theme with subtle borders
 */
const syntaxColors: SyntaxColors = {
  keyword: "text-purple-400",
  string: "text-emerald-400",
  component: "text-blue-400",
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
            "bg-slate-950 border border-slate-800 shadow-sm hover:border-slate-700 transition-colors",
            className,
          )}
        >
          <div className="px-4 py-3 flex items-center bg-slate-900 border-r border-slate-800">
            <Terminal className="h-[18px] w-[18px] text-slate-400" />
          </div>
          <code className="font-mono text-sm flex-1 px-4 py-3 text-slate-300">
            {code}
          </code>
          {showCopyButton && (
            <button
              onClick={copyToClipboard}
              className="px-4 py-3 hover:bg-slate-900 text-slate-500 hover:text-slate-200 border-l border-slate-800 transition-colors"
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
          "font-mono text-sm rounded-lg relative",
          "bg-slate-950 border border-slate-800 p-6 shadow-sm",
          className,
        )}
      >
        <pre className="text-slate-400 whitespace-pre-wrap break-words">
          <code>{highlightCodeToElements(code, language, syntaxColors)}</code>
        </pre>
        {showCopyButton && (
          <button
            onClick={copyToClipboard}
            className="absolute top-4 right-4 p-2 rounded hover:bg-slate-800 text-slate-500 hover:text-slate-200 transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4 text-slate-500" />
            )}
          </button>
        )}
      </div>
    );
  },
);
CodeBlock.displayName = "CodeBlock";

export { CodeBlock };
