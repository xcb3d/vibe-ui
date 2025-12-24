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
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/**
 * Neubrutalism Checkbox - Bold borders, hard shadows
 */
const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-6 w-6 shrink-0 rounded-md cursor-pointer",
      // Base: border + shadow (matching button pattern)
      "border-2 border-black",
      "shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
      // Hover: translate up-left, larger shadow
      "-translate-x-0 -translate-y-0",
      "hover:-translate-x-px hover:-translate-y-px",
      "hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]",
      // Active/press: translate down-right, smaller shadow
      "active:translate-x-0.5 active:translate-y-0.5",
      "active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]",
      // Transition for smooth effects
      "transition-all",
      // Focus
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2",
      // Disabled
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:hover:translate-x-0 disabled:hover:translate-y-0",
      // Checked state
      "data-[state=checked]:bg-yellow-400 data-[state=checked]:text-black",
      // Dark mode
      "dark:border-white",
      "dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]",
      "dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)]",
      "dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)]",
      "dark:focus-visible:ring-yellow-500",
      "dark:data-[state=checked]:bg-yellow-400",
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
