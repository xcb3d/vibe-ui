import type * as React from "react";
import type * as LabelPrimitive from "@radix-ui/react-label";
import type { Slot } from "@radix-ui/react-slot";

export type FormItemProps = React.HTMLAttributes<HTMLDivElement>;
export type FormLabelProps = React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
>;
export type FormControlProps = React.ComponentPropsWithoutRef<typeof Slot>;
export type FormDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
export type FormMessageProps = React.HTMLAttributes<HTMLParagraphElement>;
