"use client";

import * as React from "react";
import { Settings, Mail, ArrowRight, Loader2 } from "lucide-react";

// Type for themed components injected by each theme
export interface ThemeComponents {
  Button: React.ComponentType<{
    variant?:
      | "default"
      | "secondary"
      | "outline"
      | "ghost"
      | "destructive"
      | "link";
    size?: "default" | "sm" | "lg" | "icon";
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
  }>;
  Input: React.ComponentType<{
    type?: string;
    placeholder?: string;
  }>;
  Accordion: React.ComponentType<{
    type?: "single" | "multiple";
    collapsible?: boolean;
    className?: string;
    children?: React.ReactNode;
  }>;
  AccordionContent: React.ComponentType<{ children?: React.ReactNode }>;
  AccordionItem: React.ComponentType<{
    value: string;
    disabled?: boolean;
    children?: React.ReactNode;
  }>;
  AccordionTrigger: React.ComponentType<{ children?: React.ReactNode }>;
}

/**
 * Factory function that creates example previews with injected themed components.
 * This enables DRY code - JSX is defined once, components are injected per theme.
 */
export function createExamplePreviews(C: ThemeComponents) {
  // Example previews for accordion component
  const accordionPreviews: Record<string, React.ReactNode> = {
    "Single Item": (
      <C.Accordion type="single" collapsible className="w-full">
        <C.AccordionItem value="item-1">
          <C.AccordionTrigger>Is it accessible?</C.AccordionTrigger>
          <C.AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </C.AccordionContent>
        </C.AccordionItem>
      </C.Accordion>
    ),
    "Multiple Items": (
      <C.Accordion type="multiple" className="w-full">
        <C.AccordionItem value="item-1">
          <C.AccordionTrigger>First Section</C.AccordionTrigger>
          <C.AccordionContent>Content for first section.</C.AccordionContent>
        </C.AccordionItem>
        <C.AccordionItem value="item-2">
          <C.AccordionTrigger>Second Section</C.AccordionTrigger>
          <C.AccordionContent>Content for second section.</C.AccordionContent>
        </C.AccordionItem>
      </C.Accordion>
    ),
    "With Icons": (
      <C.Accordion type="single" collapsible className="w-full">
        <C.AccordionItem value="item-1">
          <C.AccordionTrigger>
            <span className="flex items-center gap-2">
              <Settings className="size-4" />
              Settings
            </span>
          </C.AccordionTrigger>
          <C.AccordionContent>
            Configure your application settings here.
          </C.AccordionContent>
        </C.AccordionItem>
      </C.Accordion>
    ),
    "Complex Content": (
      <C.Accordion type="single" collapsible className="w-full">
        <C.AccordionItem value="item-1">
          <C.AccordionTrigger>Login Form</C.AccordionTrigger>
          <C.AccordionContent>
            <div className="space-y-4">
              <C.Input type="email" placeholder="Email" />
              <C.Button className="w-full">Sign In</C.Button>
            </div>
          </C.AccordionContent>
        </C.AccordionItem>
      </C.Accordion>
    ),
    "Loading State": (
      <C.Accordion type="single" collapsible className="w-full">
        <C.AccordionItem value="loading">
          <C.AccordionTrigger>Skeleton Loader</C.AccordionTrigger>
          <C.AccordionContent>
            <div className="animate-pulse space-y-3">
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-full" />
            </div>
          </C.AccordionContent>
        </C.AccordionItem>
      </C.Accordion>
    ),
    "Scrollable Content": (
      <C.Accordion type="single" collapsible className="w-full">
        <C.AccordionItem value="scrollable">
          <C.AccordionTrigger>Terms of Service</C.AccordionTrigger>
          <C.AccordionContent>
            <div className="h-48 overflow-y-auto pr-3 space-y-4">
              <div className="bg-muted/30 p-3 border border-border/50 rounded-lg">
                <h4 className="font-bold">1. Introduction</h4>
                <p className="text-sm text-muted-foreground">
                  Welcome to our service. By using this application, you agree
                  to these terms.
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
          </C.AccordionContent>
        </C.AccordionItem>
      </C.Accordion>
    ),
    "Disabled State": (
      <C.Accordion type="single" collapsible className="w-full">
        <C.AccordionItem value="item-1" disabled>
          <C.AccordionTrigger>Disabled Item</C.AccordionTrigger>
          <C.AccordionContent>
            This content cannot be accessed.
          </C.AccordionContent>
        </C.AccordionItem>
      </C.Accordion>
    ),
  };

  // Example previews for button component
  const buttonPreviews: Record<string, React.ReactNode> = {
    Variants: (
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <C.Button>Default</C.Button>
        <C.Button variant="secondary">Secondary</C.Button>
        <C.Button variant="outline">Outline</C.Button>
        <C.Button variant="ghost">Ghost</C.Button>
        <C.Button variant="destructive">Destructive</C.Button>
        <C.Button variant="link">Link</C.Button>
      </div>
    ),
    Sizes: (
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <C.Button size="sm">Small</C.Button>
        <C.Button size="default">Default</C.Button>
        <C.Button size="lg">Large</C.Button>
        <C.Button size="icon">
          <Settings className="h-4 w-4" />
        </C.Button>
      </div>
    ),
    "With Icons": (
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <C.Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </C.Button>
        <C.Button variant="secondary">
          Next Step <ArrowRight className="ml-2 h-4 w-4" />
        </C.Button>
      </div>
    ),
    "Loading State": (
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <C.Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </C.Button>
      </div>
    ),
    Disabled: (
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <C.Button disabled>Disabled</C.Button>
      </div>
    ),
  };

  // Combined example previews registry
  const examplePreviews: Record<string, Record<string, React.ReactNode>> = {
    accordion: accordionPreviews,
    button: buttonPreviews,
  };

  // Get example preview for a specific component and example title
  function getExamplePreview(
    slug: string,
    exampleTitle: string,
  ): React.ReactNode {
    return (
      examplePreviews[slug]?.[exampleTitle] || (
        <p className="text-muted-foreground">No preview available.</p>
      )
    );
  }

  return {
    accordionPreviews,
    buttonPreviews,
    examplePreviews,
    getExamplePreview,
  };
}
