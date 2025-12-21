"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Example previews for accordion component
export const accordionPreviews: Record<string, React.ReactNode> = {
  "Single Item": (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "Multiple Items": (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>First Section</AccordionTrigger>
        <AccordionContent>Content for first section.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Section</AccordionTrigger>
        <AccordionContent>Content for second section.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "With Icons": (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span className="flex items-center gap-2">
            <Settings className="size-4" />
            Settings
          </span>
        </AccordionTrigger>
        <AccordionContent>
          Configure your application settings here.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "Complex Content": (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Login Form</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <Input type="email" placeholder="Email" />
            <Button className="w-full">Sign In</Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "Loading State": (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="loading">
        <AccordionTrigger>Skeleton Loader</AccordionTrigger>
        <AccordionContent>
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-full" />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "Scrollable Content": (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="scrollable">
        <AccordionTrigger>Terms of Service</AccordionTrigger>
        <AccordionContent>
          <div className="h-48 overflow-y-auto pr-3 space-y-4">
            <div className="bg-muted/30 p-3 border border-border/50 rounded-lg">
              <h4 className="font-bold">1. Introduction</h4>
              <p className="text-sm text-muted-foreground">
                Welcome to our service. By using this application, you agree to
                these terms.
              </p>
            </div>
            <div className="bg-muted/30 p-3 border border-border/50 rounded-lg">
              <h4 className="font-bold">2. Privacy</h4>
              <p className="text-sm text-muted-foreground">
                We respect your privacy and protect your personal data.
              </p>
            </div>
            <div className="bg-muted/30 p-3 border border-border/50 rounded-lg">
              <h4 className="font-bold">3. Usage</h4>
              <p className="text-sm text-muted-foreground">
                You may use this service for personal and commercial purposes.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "Disabled State": (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" disabled>
        <AccordionTrigger>Disabled Item</AccordionTrigger>
        <AccordionContent>This content cannot be accessed.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Combined example previews registry
export const examplePreviews: Record<
  string,
  Record<string, React.ReactNode>
> = {
  accordion: accordionPreviews,
};

// Get example preview for a specific component and example title
export function getExamplePreview(
  slug: string,
  exampleTitle: string,
): React.ReactNode {
  return (
    examplePreviews[slug]?.[exampleTitle] || (
      <p className="text-muted-foreground">No preview available.</p>
    )
  );
}
