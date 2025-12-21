import type * as React from "react";
import type * as SheetPrimitive from "@radix-ui/react-dialog";
import type { VariantProps } from "class-variance-authority";

export type SheetProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Root
>;
export type SheetTriggerProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Trigger
>;
export type SheetCloseProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Close
>;
export type SheetPortalProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Portal
>;
export type SheetOverlayProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Overlay
>;

export type SheetContentProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Content
> & {
  side?: "top" | "bottom" | "left" | "right";
};

export type SheetHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export type SheetFooterProps = React.HTMLAttributes<HTMLDivElement>;
export type SheetTitleProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Title
>;
export type SheetDescriptionProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Description
>;
