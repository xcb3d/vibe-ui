import type * as React from "react";
import type { Command as CommandPrimitive } from "cmdk";
import type { DialogProps } from "@radix-ui/react-dialog";

export type CommandProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive
>;
export type CommandDialogProps = DialogProps;
export type CommandInputProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Input
>;
export type CommandListProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.List
>;
export type CommandEmptyProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Empty
>;
export type CommandGroupProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Group
>;
export type CommandItemProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Item
>;
export type CommandSeparatorProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Separator
>;
