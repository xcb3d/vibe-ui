"use client";

import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  CodeBlockProps,
  useCopyToClipboard,
  highlightCodeToElements,
} from "./code-block-utils";

const syntaxColors = {
  keyword: "text-purple-400",
  string: "text-emerald-400",
  component: "text-blue-400",
};

export function CodeBlockMinimal({
  code,
  language = "bash",
  showTerminalIcon = false,
  showCopyButton = true,
  className,
}: CodeBlockProps) {
  const { copied, copyToClipboard } = useCopyToClipboard(code);

  // Terminal style
  if (showTerminalIcon) {
    return (
      <div
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
      className={cn(
        "font-mono text-sm overflow-x-auto rounded-lg relative",
        "bg-slate-950 border border-slate-800 p-6 shadow-sm",
        className,
      )}
    >
      <pre className="text-slate-400">
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
}
