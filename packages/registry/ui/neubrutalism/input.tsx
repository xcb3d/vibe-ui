import * as React from "react";
import { cn } from "../../lib/utils";
import type { InputProps } from "../types/input";

/**
 * Neubrutalism Input
 * Bold borders, hard shadow on focus
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md px-4 py-2 text-sm font-bold",
          "bg-secondary text-foreground border-2 border-black",
          "placeholder:text-muted-foreground",
          "transition-all duration-200",
          "focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0_black]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Dark mode
          "dark:border-white dark:bg-secondary dark:text-foreground",
          "dark:placeholder:text-muted-foreground",
          "dark:focus:shadow-[4px_4px_0_white]",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
