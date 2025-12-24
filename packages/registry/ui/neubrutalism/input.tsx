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
          "bg-zinc-100 dark:bg-zinc-800 text-stone-900 dark:text-stone-50 border-2 border-black",
          "placeholder:text-stone-500 dark:placeholder:text-stone-400",
          "transition-all duration-200",
          "focus:outline-none focus:ring-0 focus:shadow-[5px_5px_0_black]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Dark mode
          "dark:border-white dark:bg-zinc-800 dark:text-stone-50",
          "dark:placeholder:text-stone-400",
          "dark:focus:shadow-[5px_5px_0_white]",
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
