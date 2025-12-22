import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";
import type { ButtonProps } from "../types/button";

/**
 * Minimal Button Styles
 * Clean, subtle, Swiss-style design
 * Using plain object instead of CVA to avoid Tailwind v4 scanning issues
 */
export const buttonStyles = {
  base: [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap text-sm font-medium",
    "rounded-md border",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),

  variants: {
    default:
      "bg-zinc-900 text-white border-zinc-900 shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:border-white dark:hover:bg-gray-100",
    primary:
      "bg-blue-600 text-white border-blue-600 shadow-sm hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400",
    secondary:
      "bg-gray-100 text-zinc-900 border-gray-200 shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700",
    destructive:
      "bg-red-600 text-white border-red-600 shadow-sm hover:bg-red-500",
    outline:
      "bg-transparent text-zinc-900 border-gray-300 shadow-sm hover:bg-gray-50 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800",
    accent:
      "bg-purple-600 text-white border-purple-600 shadow-sm hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-400",
    ghost: "border-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
    link: "border-transparent text-zinc-900 underline-offset-4 hover:underline dark:text-white",
  },

  sizes: {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3 text-xs",
    lg: "h-10 px-8",
    icon: "h-9 w-9",
  },
};

/**
 * Helper function to get button classes (replaces CVA)
 */
export function getButtonClasses(
  variant: keyof typeof buttonStyles.variants = "default",
  size: keyof typeof buttonStyles.sizes = "default",
  className?: string,
) {
  return cn(
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.sizes[size],
    className,
  );
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={getButtonClasses(variant, size, className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
