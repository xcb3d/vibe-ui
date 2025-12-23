import * as React from "react";
import { cn } from "../../lib/utils";
import type { TextareaProps } from "../types/textarea";

/**
 * Neubrutalism Textarea - Bold borders, hard shadow with press effect
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md px-4 py-3 text-sm font-bold",
          "bg-white text-black border-2 border-black",
          "shadow-[4px_4px_0px_0px_#000]",
          "placeholder:text-gray-500",
          "focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none",
          "transition-all",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
          "dark:bg-zinc-800 dark:text-white dark:border-white",
          "dark:shadow-[4px_4px_0px_0px_#fff]",
          "dark:placeholder:text-gray-400",
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
