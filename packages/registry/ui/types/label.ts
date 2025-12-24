import type * as React from "react";
import type * as LabelPrimitive from "@radix-ui/react-label";

export type LabelVariant = "default" | "solid";
export type LabelColor =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "destructive"
  | "muted"
  | "success";
export type LabelSize = "sm" | "default" | "md" | "lg";

export interface LabelProps extends React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
> {
  variant?: LabelVariant;
  color?: LabelColor;
  size?: LabelSize;
  required?: boolean;
}
