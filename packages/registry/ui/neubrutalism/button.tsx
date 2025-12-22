import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type { ButtonProps } from "../types/button";

/**
 * Neubrutalism Button
 * Bold borders, hard shadows, vivid colors
 * Based on mockup: shadow 4px, hover translate x+y, active 2px
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap text-sm font-bold",
    "rounded-md",
    "ring-offset-background transition-all",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-2 border-black bg-primary text-black",
          "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
          "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
          "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
          // Dark mode
          "dark:border-white",
          "dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
          "dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
          "dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
        ],
        primary: [
          "border-2 border-black bg-primary text-black",
          "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
          "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
          "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
          // Dark mode
          "dark:border-white",
          "dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
          "dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
          "dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
        ],
        secondary: [
          "border-2 border-black bg-white text-black",
          "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
          "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
          "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
          // Dark mode
          "dark:border-white dark:bg-zinc-800 dark:text-white",
          "dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
          "dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
          "dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
        ],
        destructive: [
          "border-2 border-black bg-destructive text-destructive-foreground",
          "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
          "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
          "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
          // Dark mode
          "dark:border-white",
          "dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
          "dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
          "dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
        ],
        outline: [
          "border-2 border-black bg-background text-foreground",
          "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
          "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-muted",
          "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
          // Dark mode
          "dark:border-white",
          "dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
          "dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
          "dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
        ],
        accent: [
          "border-2 border-black bg-accent text-white",
          "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
          "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
          "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
          // Dark mode
          "dark:border-white",
          "dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
          "dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
          "dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
        ],
        ghost: [
          "border-2 border-dashed border-black bg-transparent text-foreground",
          "shadow-none",
          "hover:bg-muted hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
          // Dark mode
          "dark:border-white",
          "dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]",
        ],
        link: [
          "border-none bg-transparent text-primary",
          "shadow-none",
          "underline-offset-4 hover:underline",
          "hover:translate-x-0 hover:translate-y-0",
        ],
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-12 py-3",
        icon: "h-10 w-10 p-0",
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
