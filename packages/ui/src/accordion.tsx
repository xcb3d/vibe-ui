"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "./lib/utils";

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

// =============================================================================
// ACCORDION ROOT
// =============================================================================
interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

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
          className={cn("flex flex-col overflow-hidden", className)}
          style={{
            gap: "var(--accordion-gap)",
            backgroundColor: "var(--accordion-bg)",
            borderRadius: "var(--accordion-radius)",
            borderWidth: "var(--accordion-border-width)",
            borderStyle: "solid",
            borderColor: "hsl(var(--border))",
            boxShadow: "var(--accordion-shadow)",
          }}
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
interface AccordionItemProps extends React.HTMLAttributes<HTMLDetailsElement> {
  value: string;
  disabled?: boolean;
}

const AccordionItem = React.forwardRef<HTMLDetailsElement, AccordionItemProps>(
  ({ className, value, disabled = false, children, style, ...props }, ref) => {
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
          "group",
          disabled && "opacity-60 cursor-not-allowed",
          className,
        )}
        style={{
          borderBottom: "var(--accordion-divide)",
          ...style,
        }}
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
interface AccordionTriggerProps extends React.HTMLAttributes<HTMLElement> {}

const AccordionTrigger = React.forwardRef<HTMLElement, AccordionTriggerProps>(
  ({ className, children, style, ...props }, ref) => {
    return (
      <summary
        ref={ref as React.Ref<HTMLElement>}
        data-slot="accordion-trigger"
        className={cn(
          "w-full cursor-pointer flex items-center justify-between transition-all",
          "list-none [&::-webkit-details-marker]:hidden",
          "[&[data-disabled]]:cursor-not-allowed",
          className,
        )}
        style={{
          padding: "var(--accordion-trigger-padding)",
          fontSize: "var(--accordion-trigger-font-size)",
          fontWeight: "var(--accordion-trigger-font-weight)",
          textTransform:
            "var(--accordion-trigger-text-transform)" as React.CSSProperties["textTransform"],
          letterSpacing: "var(--accordion-trigger-letter-spacing)",
          ...style,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor =
            "var(--accordion-trigger-hover-bg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
        }}
        {...props}
      >
        {children}
        <div
          data-slot="accordion-icon"
          className="shrink-0 flex items-center justify-center transition-transform duration-300 group-open:rotate-180"
          style={{
            width: "var(--accordion-icon-size)",
            height: "var(--accordion-icon-size)",
            backgroundColor: "var(--accordion-icon-bg)",
            border: "var(--accordion-icon-border)",
            borderRadius: "var(--accordion-icon-radius)",
          }}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </summary>
    );
  },
);
AccordionTrigger.displayName = "AccordionTrigger";

// =============================================================================
// ACCORDION CONTENT
// =============================================================================
interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, style, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="accordion-content"
      className={cn("text-sm", className)}
      style={{
        padding: "var(--accordion-content-padding)",
        paddingTop: "var(--accordion-content-padding-top)",
        color: "var(--accordion-content-color)",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
