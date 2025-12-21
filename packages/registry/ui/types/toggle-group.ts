import type * as React from "react";
import type * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

export type ToggleGroupProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Root
> & {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
};

export type ToggleGroupItemProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Item
> & {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
};
