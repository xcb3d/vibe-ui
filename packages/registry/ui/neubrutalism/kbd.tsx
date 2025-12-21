import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type { KbdProps } from "../types/kbd";

/**
 * Neubrutalism Kbd - Bold keyboard key
 */
const kbdVariants = cva(
  [
    "inline-flex items-center justify-center font-mono font-bold",
    "border-2 border-black rounded-md shadow-[2px_2px_0_black]",
    "dark:border-white dark:shadow-[2px_2px_0_white]",
  ],
  {
    variants: {
      variant: {
        default: "bg-gray-100 text-black dark:bg-gray-800 dark:text-white",
        outline: "bg-transparent text-black dark:text-white",
      },
      size: {
        sm: "h-5 min-w-5 px-1 text-[10px]",
        md: "h-6 min-w-6 px-1.5 text-xs",
        lg: "h-7 min-w-7 px-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, variant, size, ...props }, ref) => (
    <kbd
      ref={ref}
      className={cn(kbdVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Kbd.displayName = "Kbd";

export { Kbd, kbdVariants };
