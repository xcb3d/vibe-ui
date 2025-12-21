import * as React from "react";
import { cn } from "../../lib/utils";
import type { TextareaProps } from "../types/textarea";

/**
 * Minimal Textarea - Clean and simple
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md px-3 py-2 text-base md:text-sm",
          "bg-transparent text-zinc-900 border border-gray-300 shadow-sm",
          "placeholder:text-gray-400",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "dark:text-white dark:border-gray-600",
          "dark:placeholder:text-gray-500",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
