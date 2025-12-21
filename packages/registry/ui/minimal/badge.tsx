import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type { BadgeProps } from "../types/badge";

/**
 * Minimal Badge
 * Clean, subtle, simple colors
 */
const badgeVariants = cva(
  [
    "inline-flex items-center px-2.5 py-0.5 text-xs font-semibold",
    "rounded-md border transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-white border-transparent shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-gray-100",
        secondary:
          "bg-gray-100 text-zinc-900 border-transparent hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
        destructive:
          "bg-red-600 text-white border-transparent shadow-sm hover:bg-red-500",
        outline:
          "bg-transparent text-zinc-900 border-gray-300 dark:text-white dark:border-gray-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
