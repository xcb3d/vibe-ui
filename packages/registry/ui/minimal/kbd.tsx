import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type { KbdProps } from "../types/kbd";

/**
 * Minimal Kbd - Clean keyboard key
 */
const kbdVariants = cva(
  "inline-flex items-center justify-center rounded border font-mono font-medium",
  {
    variants: {
      variant: {
        default:
          "bg-gray-100 text-gray-600 border-gray-200 shadow-sm dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700",
        outline:
          "bg-transparent text-zinc-900 border-gray-300 dark:text-white dark:border-gray-600",
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
