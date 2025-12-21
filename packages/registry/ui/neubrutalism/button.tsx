import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type { ButtonProps } from "../types/button";

/**
 * Neubrutalism Button
 * Bold borders, hard shadows, vivid colors, uppercase text
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap text-sm font-bold uppercase tracking-wide",
    "border-2 border-black rounded-lg",
    "shadow-[4px_4px_0_black]",
    "transition-all duration-200",
    "hover:-translate-y-0.5 hover:shadow-[6px_6px_0_black]",
    "active:translate-y-0 active:shadow-[2px_2px_0_black]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    // Dark mode
    "dark:border-white dark:shadow-[4px_4px_0_white]",
    "dark:hover:shadow-[6px_6px_0_white]",
    "dark:active:shadow-[2px_2px_0_white]",
    "dark:focus-visible:ring-white",
  ],
  {
    variants: {
      variant: {
        default: "bg-yellow-400 text-black hover:bg-yellow-300",
        destructive: "bg-red-500 text-white hover:bg-red-400",
        outline:
          "bg-white text-black hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800",
        secondary: "bg-violet-500 text-white hover:bg-violet-400",
        ghost:
          "border-transparent shadow-none hover:bg-gray-100 hover:shadow-none dark:hover:bg-gray-800",
        link: "border-transparent shadow-none underline-offset-4 hover:underline hover:shadow-none",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
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
