"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type { ToggleProps } from "../types/toggle";

/**
 * Neubrutalism Toggle - Bold borders with playful styling
 */
const toggleVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide",
    "rounded-lg border-2 border-black shadow-[2px_2px_0_black]",
    "transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_black]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[state=on]:bg-yellow-400 data-[state=on]:text-black",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "dark:border-white dark:shadow-[2px_2px_0_white] dark:hover:shadow-[4px_4px_0_white]",
    "dark:focus-visible:ring-white dark:data-[state=on]:bg-yellow-500",
  ],
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-gray-800",
        outline: "bg-transparent",
      },
      size: {
        default: "h-10 px-4 min-w-10 text-sm",
        sm: "h-8 px-3 min-w-8 text-xs",
        lg: "h-12 px-6 min-w-12 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    data-slot="toggle"
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));
Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
