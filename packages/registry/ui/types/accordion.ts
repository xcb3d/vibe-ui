import type * as React from "react";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDetailsElement> {
  value: string;
  disabled?: boolean;
}

export type AccordionTriggerProps = React.HTMLAttributes<HTMLElement>;
export type AccordionContentProps = React.HTMLAttributes<HTMLDivElement>;
