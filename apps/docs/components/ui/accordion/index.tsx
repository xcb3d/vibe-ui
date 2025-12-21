"use client";

import * as React from "react";
import { useStyle } from "@/components/style-provider";

// Export shared types
export type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from "./accordion-core";

// Import theme-specific implementations
import {
  AccordionMinimal,
  AccordionItemMinimal,
  AccordionTriggerMinimal,
  AccordionContentMinimal,
} from "./accordion-minimal";
import {
  AccordionNeubrutalism,
  AccordionItemNeubrutalism,
  AccordionTriggerNeubrutalism,
  AccordionContentNeubrutalism,
} from "./accordion-neubrutalism";
import type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from "./accordion-core";

// =============================================================================
// THEME-AWARE ACCORDION
// =============================================================================
const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const { style } = useStyle();

    if (style === "minimal") {
      return <AccordionMinimal ref={ref} {...props} />;
    }
    return <AccordionNeubrutalism ref={ref} {...props} />;
  },
);
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<HTMLDetailsElement, AccordionItemProps>(
  (props, ref) => {
    const { style } = useStyle();

    if (style === "minimal") {
      return <AccordionItemMinimal ref={ref} {...props} />;
    }
    return <AccordionItemNeubrutalism ref={ref} {...props} />;
  },
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<HTMLElement, AccordionTriggerProps>(
  (props, ref) => {
    const { style } = useStyle();

    if (style === "minimal") {
      return <AccordionTriggerMinimal ref={ref} {...props} />;
    }
    return <AccordionTriggerNeubrutalism ref={ref} {...props} />;
  },
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>((props, ref) => {
  const { style } = useStyle();

  if (style === "minimal") {
    return <AccordionContentMinimal ref={ref} {...props} />;
  }
  return <AccordionContentNeubrutalism ref={ref} {...props} />;
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
