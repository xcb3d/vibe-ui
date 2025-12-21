import * as React from "react";
import { cn } from "../../lib/utils";
import type { InputProps } from "../types/input";

/**
 * Minimal Input
 * Clean, subtle borders, simple focus ring
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md px-3 py-1 text-base md:text-sm",
          "bg-transparent text-zinc-900 border border-gray-300 shadow-sm",
          "placeholder:text-gray-400",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "dark:text-white dark:border-gray-600",
          "dark:placeholder:text-gray-500",
          "dark:focus-visible:ring-gray-500",
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
