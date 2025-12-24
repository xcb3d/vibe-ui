"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "../../lib/utils";
import type { LabelProps } from "../types/label";

/**
 * Neubrutalism Label Styles
 * Bold uppercase with optional solid tag/badge style
 * Using plain object instead of CVA to avoid Tailwind v4 scanning issues
 */
export const labelStyles = {
  base: "font-black uppercase tracking-wider leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",

  variants: {
    default: "",
    solid: [
      "inline-flex items-center justify-center",
      "border-2 border-black dark:border-white",
      "rounded-sm",
    ].join(" "),
  },

  colors: {
    default: {
      default: "text-black dark:text-white",
      solid: "bg-black text-white dark:bg-white dark:text-black",
    },
    primary: {
      default: "text-primary",
      solid: "bg-primary text-black",
    },
    secondary: {
      default: "text-secondary-foreground",
      solid: "bg-secondary text-black dark:text-black",
    },
    accent: {
      default: "text-accent",
      solid: "bg-accent text-white",
    },
    destructive: {
      default: "text-destructive",
      solid: "bg-destructive text-white",
    },
    muted: {
      default: "text-muted-foreground",
      solid: "bg-muted text-muted-foreground border-dashed",
    },
    success: {
      default: "text-[#4ade80]",
      solid: "bg-[#4ade80] text-black",
    },
  },

  sizes: {
    default: {
      default: "text-sm",
      solid: "text-sm px-3 py-1",
    },
    sm: {
      default: "text-xs",
      solid: "text-xs px-2 py-0.5",
    },
    md: {
      default: "text-base",
      solid: "text-base px-3 py-1.5",
    },
    lg: {
      default: "text-lg",
      solid: "text-lg px-4 py-2",
    },
  },

  shadows: {
    sm: "shadow-[1px_1px_0px_0px_#000] dark:shadow-[1px_1px_0px_0px_#fff]",
    default: "shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]",
    md: "shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]",
    lg: "shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff]",
  },
};

/**
 * Helper function to get label classes
 */
export function getLabelClasses(
  variant: keyof typeof labelStyles.variants = "default",
  color: keyof typeof labelStyles.colors = "default",
  size: keyof typeof labelStyles.sizes = "default",
  className?: string,
) {
  const variantClasses = labelStyles.variants[variant];
  const colorClasses = labelStyles.colors[color][variant];
  const sizeClasses = labelStyles.sizes[size][variant];
  const shadowClasses = variant === "solid" ? labelStyles.shadows[size] : "";

  return cn(
    labelStyles.base,
    variantClasses,
    colorClasses,
    sizeClasses,
    shadowClasses,
    className,
  );
}

const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  LabelProps
>(
  (
    {
      className,
      variant = "default",
      color = "default",
      size = "default",
      required,
      children,
      ...props
    },
    ref,
  ) => (
    <LabelPrimitive.Root
      ref={ref}
      className={getLabelClasses(variant, color, size, className)}
      {...props}
    >
      {children}
      {required && (
        <span
          className="text-destructive text-lg leading-none ml-1"
          aria-hidden="true"
        >
          *
        </span>
      )}
    </LabelPrimitive.Root>
  ),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
