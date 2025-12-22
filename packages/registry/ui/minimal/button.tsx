import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type { ButtonProps } from "../types/button";

/**
 * Minimal Button
 * Clean, subtle, Swiss-style design
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap text-sm font-medium",
    "rounded-md border",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
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
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
