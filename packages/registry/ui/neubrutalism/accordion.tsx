"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from "../types/accordion";

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// =============================================================================
// CONTEXT
// =============================================================================
interface AccordionContextValue {
  type: "single" | "multiple";
  collapsible?: boolean;
  value: string[];
  onValueChange: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(
  null,
);

/**
 * Neubrutalism Accordion - Bold borders with playful styling
 */
const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      type = "single",
      collapsible = false,
      defaultValue,
      value: controlledValue,
      onValueChange,
      className,
      children,
      ...props
    },
    ref,
  ) => {
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

    return (
      <AccordionContext.Provider
        value={{
          type,
          collapsible,
          value,
          onValueChange: handleValueChange,
        }}
      >
        <div
          ref={ref}
          data-slot="accordion"
          className={cn(
            "flex flex-col overflow-hidden rounded-lg",
            "border-2 border-black shadow-[4px_4px_0_black]",
            "dark:border-white dark:shadow-[4px_4px_0_white]",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  },
);
Accordion.displayName = "Accordion";

// =============================================================================
// ACCORDION ITEM
// =============================================================================
const AccordionItem = React.forwardRef<HTMLDetailsElement, AccordionItemProps>(
  ({ className, value, disabled = false, children, ...props }, ref) => {
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

    return (
      <details
        ref={ref}
        data-slot="accordion-item"
        data-state={isOpen ? "open" : "closed"}
        data-disabled={disabled ? "" : undefined}
        open={isOpen}
        onToggle={handleToggle}
        className={cn(
          "group border-b-2 border-black last:border-b-0",
          "dark:border-white",
          disabled && "opacity-60 cursor-not-allowed",
          className,
        )}
        {...props}
      >
        {children}
      </details>
    );
  },
);
AccordionItem.displayName = "AccordionItem";

// =============================================================================
// ACCORDION TRIGGER
// =============================================================================
const AccordionTrigger = React.forwardRef<HTMLElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <summary
        ref={ref as React.Ref<HTMLElement>}
        data-slot="accordion-trigger"
        className={cn(
          "w-full cursor-pointer flex items-center justify-between transition-all",
          "list-none [&::-webkit-details-marker]:hidden",
          "px-4 py-3 text-sm font-bold uppercase tracking-wide",
          "hover:bg-yellow-100 dark:hover:bg-yellow-900/20",
          "[&[data-disabled]]:cursor-not-allowed",
          className,
        )}
        {...props}
      >
        {children}
        <div
          data-slot="accordion-icon"
          className={cn(
            "shrink-0 flex items-center justify-center transition-transform duration-300",
            "w-6 h-6 rounded-md bg-yellow-400 border border-black",
            "dark:bg-yellow-500 dark:border-white",
            "group-open:rotate-180",
          )}
        >
          <ChevronDownIcon />
        </div>
      </summary>
    );
  },
);
AccordionTrigger.displayName = "AccordionTrigger";

// =============================================================================
// ACCORDION CONTENT
// =============================================================================
const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="accordion-content"
      className={cn(
        "px-4 pb-4 pt-0 text-sm text-gray-700",
        "dark:text-gray-300",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
