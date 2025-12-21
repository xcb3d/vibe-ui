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
// ACCORDION - Neubrutalism Style
// =============================================================================
const AccordionNeubrutalism = React.forwardRef<HTMLDivElement, AccordionProps>(
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
          className={cn("flex flex-col gap-4", className)}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  },
);
AccordionNeubrutalism.displayName = "AccordionNeubrutalism";

// =============================================================================
// ACCORDION ITEM - Neubrutalism Style
// =============================================================================
const AccordionItemNeubrutalism = React.forwardRef<
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
        "group",
        disabled && "opacity-60 cursor-not-allowed",
        className,
      )}
      {...props}
    >
      {children}
    </details>
  );
});
AccordionItemNeubrutalism.displayName = "AccordionItemNeubrutalism";

// =============================================================================
// ACCORDION TRIGGER - Neubrutalism Style
// =============================================================================
const AccordionTriggerNeubrutalism = React.forwardRef<
  HTMLElement,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => {
  return (
    <summary
      ref={ref as React.Ref<HTMLElement>}
      data-slot="accordion-trigger"
      className={cn(
        // Base styles
        "w-full cursor-pointer flex items-center justify-between p-5",
        "text-foreground text-xl font-black uppercase tracking-wide",
        "bg-card border-[length:var(--border-width)] border-border rounded-[var(--radius-md)]",
        "shadow-[var(--component-shadow)]",
        // Transitions
        "transition-all duration-150",
        // Hover state
        "hover:translate-y-[var(--hover-translate-y,0)] hover:shadow-[var(--component-shadow-hover)] hover:bg-accent",
        // Open state
        "group-open:bg-primary group-open:text-primary-foreground",
        "group-open:hover:bg-primary group-open:hover:translate-y-0 group-open:hover:shadow-[var(--component-shadow)]",
        // Hide default marker
        "list-none [&::-webkit-details-marker]:hidden",
        // Disabled state
        "[&[data-disabled]]:cursor-not-allowed",
        // Position for z-index stacking
        "relative z-20",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <span
        data-slot="accordion-icon"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[length:var(--border-width)] border-border transition-transform duration-300 group-open:rotate-180"
        style={{ backgroundColor: "var(--accordion-icon-bg)" }}
      >
        <ChevronDown
          className="h-4 w-4"
          style={{ color: "var(--accordion-icon-color)" }}
        />
      </span>
    </summary>
  );
});
AccordionTriggerNeubrutalism.displayName = "AccordionTriggerNeubrutalism";

// =============================================================================
// ACCORDION CONTENT - Neubrutalism Style
// =============================================================================
const AccordionContentNeubrutalism = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="accordion-content"
      className={cn(
        // Base styles
        "bg-card border-[length:var(--border-width)] border-border border-t-0 rounded-b-[var(--radius-md)]",
        "p-6 mx-2 -mt-2",
        "shadow-[var(--component-shadow)]",
        "relative z-10",
        // Text styles
        "text-foreground font-medium text-base leading-relaxed",
        className,
      )}
      {...props}
    >
      <div className="pt-2">{children}</div>
    </div>
  );
});
AccordionContentNeubrutalism.displayName = "AccordionContentNeubrutalism";

export {
  AccordionNeubrutalism,
  AccordionItemNeubrutalism,
  AccordionTriggerNeubrutalism,
  AccordionContentNeubrutalism,
};
