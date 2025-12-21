import * as React from "react";
import { cn } from "../../lib/utils";
import type { TextareaProps } from "../types/textarea";

/**
 * Neubrutalism Textarea - Bold borders, hard shadow on focus
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-lg px-4 py-3 text-base",
          "bg-white text-black border-2 border-black",
          "placeholder:text-gray-500",
          "focus:outline-none focus:shadow-[4px_4px_0_black]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "dark:bg-gray-900 dark:text-white dark:border-white",
          "dark:placeholder:text-gray-400",
          "dark:focus:shadow-[4px_4px_0_white]",
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
