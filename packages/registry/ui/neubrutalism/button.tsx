import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";
import type { ButtonProps } from "../types/button";

/**
 * Neubrutalism Button Styles
 * Bold borders, hard shadows, vivid colors
 * Using plain object instead of CVA to avoid Tailwind v4 scanning issues
 */
export const buttonStyles = {
  base: [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap text-sm font-bold",
    "rounded-md",
    "ring-offset-background transition-all",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),

  variants: {
    default: [
      "border-2 border-black bg-primary text-black",
      "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
      "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      "dark:border-white",
      "dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
      "dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
      "dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
    ].join(" "),
    primary: [
      "border-2 border-black bg-primary text-black",
      "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
      "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      "dark:border-white",
      "dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
      "dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
      "dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
    ].join(" "),
    secondary: [
      "border-2 border-black bg-white text-black",
      "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
      "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      "dark:border-white dark:bg-zinc-800 dark:text-white",
      "dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
      "dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
      "dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
    ].join(" "),
    destructive: [
      "border-2 border-black bg-destructive text-destructive-foreground",
      "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
      "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      "dark:border-white",
      "dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
      "dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
      "dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
    ].join(" "),
    outline: [
      "border-2 border-black bg-background text-foreground",
      "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-muted",
      "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      "dark:border-white",
      "dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
      "dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
      "dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
    ].join(" "),
    accent: [
      "border-2 border-black bg-accent text-white",
      "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
      "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      "dark:border-white",
      "dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
      "dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
      "dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
    ].join(" "),
    ghost: [
      "border-2 border-dashed border-black bg-transparent text-foreground",
      "shadow-none",
      "hover:bg-muted hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
      "dark:border-white",
      "dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]",
    ].join(" "),
    link: [
      "border-none bg-transparent text-primary",
      "shadow-none",
      "underline-offset-4 hover:underline",
      "hover:translate-x-0 hover:translate-y-0",
    ].join(" "),
  },

  sizes: {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-xs",
    lg: "h-12 px-8 py-3",
    icon: "h-10 w-10 p-0",
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
