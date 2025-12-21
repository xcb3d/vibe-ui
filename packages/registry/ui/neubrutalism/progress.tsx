"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../lib/utils";
import type { ProgressProps } from "../types/progress";

/**
 * Neubrutalism Progress - Bold borders with playful styling
 */
const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    data-slot="progress"
    className={cn(
      "relative h-5 w-full overflow-hidden rounded-md",
      "bg-gray-100 border-2 border-black shadow-[2px_2px_0_black]",
      "dark:bg-gray-800 dark:border-white dark:shadow-[2px_2px_0_white]",
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className="h-full w-full flex-1 bg-yellow-400 transition-all dark:bg-yellow-500"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
