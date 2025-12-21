"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../../lib/utils";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/**
 * Minimal Checkbox - Clean and simple
 */
const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm",
      "border border-gray-300 shadow-sm",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-zinc-900 data-[state=checked]:text-white data-[state=checked]:border-zinc-900",
      "dark:border-gray-600",
      "dark:data-[state=checked]:bg-white dark:data-[state=checked]:text-zinc-900 dark:data-[state=checked]:border-white",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
      <CheckIcon />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
