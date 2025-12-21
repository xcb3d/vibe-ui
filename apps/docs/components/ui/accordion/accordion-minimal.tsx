"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AccordionContext,
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
  useAccordionState,
  useAccordionItem,
} from "./accordion-core";

// =============================================================================
// ACCORDION - Minimal Style
// =============================================================================
const AccordionMinimal = React.forwardRef<HTMLDivElement, AccordionProps>(
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
    const state = useAccordionState({
      type,
      collapsible,
      defaultValue,
      controlledValue,
      onValueChange,
    });

    return (
      <AccordionContext.Provider value={state}>
        <div
          ref={ref}
          data-slot="accordion"
          className={cn(
            // Matches mockup: bg-card border border-border/60 rounded-lg shadow-soft overflow-hidden divide-y divide-border/60
            "bg-card border border-border/60 rounded-lg overflow-hidden",
            "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)]",
            "divide-y divide-border/60",
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
AccordionMinimal.displayName = "AccordionMinimal";

// =============================================================================
// ACCORDION ITEM - Minimal Style
// =============================================================================
const AccordionItemMinimal = React.forwardRef<
  HTMLDetailsElement,
  AccordionItemProps
>(({ className, value, disabled = false, children, ...props }, ref) => {
  const { isOpen, handleToggle } = useAccordionItem({ value, disabled });

  return (
    <details
      ref={ref}
      data-slot="accordion-item"
      data-state={isOpen ? "open" : "closed"}
      data-disabled={disabled ? "" : undefined}
      open={isOpen}
      onToggle={handleToggle}
      className={cn(
        "group bg-card",
        disabled && "opacity-60 cursor-not-allowed",
        className,
      )}
      {...props}
    >
      {children}
    </details>
  );
});
AccordionItemMinimal.displayName = "AccordionItemMinimal";

// =============================================================================
// ACCORDION TRIGGER - Minimal Style
// =============================================================================
const AccordionTriggerMinimal = React.forwardRef<
  HTMLElement,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => {
  return (
    <summary
      ref={ref as React.Ref<HTMLElement>}
      data-slot="accordion-trigger"
      className={cn(
        // Matches mockup: w-full cursor-pointer flex items-center justify-between p-4 bg-transparent hover:bg-muted/30 transition-colors list-none outline-none
        "w-full cursor-pointer flex items-center justify-between",
        "p-4 bg-transparent hover:bg-muted/30 transition-colors",
        "list-none [&::-webkit-details-marker]:hidden outline-none",
        "[&[data-disabled]]:cursor-not-allowed",
        className,
      )}
      {...props}
    >
      <span className="text-foreground text-sm font-medium">{children}</span>
      <ChevronDown className="text-muted-foreground h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" />
    </summary>
  );
});
AccordionTriggerMinimal.displayName = "AccordionTriggerMinimal";

// =============================================================================
// ACCORDION CONTENT - Minimal Style
// =============================================================================
const AccordionContentMinimal = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="accordion-content"
      className={cn(
        "px-4 pb-4 pt-0",
        "text-muted-foreground text-sm leading-relaxed",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
AccordionContentMinimal.displayName = "AccordionContentMinimal";

export {
  AccordionMinimal,
  AccordionItemMinimal,
  AccordionTriggerMinimal,
  AccordionContentMinimal,
};
