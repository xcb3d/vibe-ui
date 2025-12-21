import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type { BadgeProps } from "../types/badge";

/**
 * Neubrutalism Badge
 * Bold borders, hard shadows, vivid colors
 */
const badgeVariants = cva(
  [
    "inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wide",
    "border-2 border-black rounded-md",
    "dark:border-white",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-yellow-400 text-black shadow-[2px_2px_0_black] dark:shadow-[2px_2px_0_white]",
        secondary:
          "bg-violet-500 text-white shadow-[2px_2px_0_black] dark:shadow-[2px_2px_0_white]",
        destructive:
          "bg-red-500 text-white shadow-[2px_2px_0_black] dark:shadow-[2px_2px_0_white]",
        outline: "bg-transparent text-black dark:text-white",
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
