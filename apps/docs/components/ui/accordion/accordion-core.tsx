"use client";

import * as React from "react";

// =============================================================================
// SHARED CONTEXT & TYPES
// =============================================================================
export interface AccordionContextValue {
  type: "single" | "multiple";
  collapsible?: boolean;
  value: string[];
  onValueChange: (value: string) => void;
}

export const AccordionContext =
  React.createContext<AccordionContextValue | null>(null);

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

export interface AccordionTriggerProps extends React.HTMLAttributes<HTMLElement> {}

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

// =============================================================================
// SHARED HOOK FOR ACCORDION STATE
// =============================================================================
export function useAccordionState({
  type = "single",
  collapsible = false,
  defaultValue,
  controlledValue,
  onValueChange,
}: {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string | string[];
  controlledValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}) {
  const [internalValue, setInternalValue] = React.useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  });

  const value = controlledValue
    ? Array.isArray(controlledValue)
      ? controlledValue
      : [controlledValue]
    : internalValue;

  const handleValueChange = React.useCallback(
    (itemValue: string) => {
      let newValue: string[];

      if (type === "single") {
        if (value.includes(itemValue)) {
          newValue = collapsible ? [] : value;
        } else {
          newValue = [itemValue];
        }
      } else {
        if (value.includes(itemValue)) {
          newValue = value.filter((v) => v !== itemValue);
        } else {
          newValue = [...value, itemValue];
        }
      }

      if (!controlledValue) {
        setInternalValue(newValue);
      }

      if (onValueChange) {
        onValueChange(type === "single" ? (newValue[0] ?? "") : newValue);
      }
    },
    [type, value, collapsible, controlledValue, onValueChange],
  );

  return {
    type,
    collapsible,
    value,
    onValueChange: handleValueChange,
  };
}

// =============================================================================
// SHARED HOOK FOR ACCORDION ITEM
// =============================================================================
export function useAccordionItem({
  value,
  disabled = false,
}: {
  value: string;
  disabled?: boolean;
}) {
  const context = React.useContext(AccordionContext);
  const isOpen = context?.value.includes(value) ?? false;

  const handleToggle = React.useCallback(
    (e: React.SyntheticEvent<HTMLDetailsElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      context?.onValueChange(value);
    },
    [context, value, disabled],
  );

  return {
    isOpen,
    handleToggle,
  };
}
