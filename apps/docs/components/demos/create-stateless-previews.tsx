"use client";

import * as React from "react";
import { Settings, Mail, ArrowRight, Loader2 } from "lucide-react";

// Type for themed components injected by each theme
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    className?: string;
  }>;
  Card: React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  CardHeader: React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  CardTitle: React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  CardDescription: React.ComponentType<{
    children?: React.ReactNode;
  }>;
  CardContent: React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  CardFooter: React.ComponentType<{
    children?: React.ReactNode;
  }>;
  Avatar: React.ComponentType<{
    children?: React.ReactNode;
  }>;
  AvatarFallback: React.ComponentType<{
    children?: React.ReactNode;
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
  Table: React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  TableHeader: React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  TableBody: React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  TableFooter: React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  TableRow: React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  TableHead: React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  TableCell: React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  TableCaption: React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  Badge: React.ComponentType<{
    variant?: "default" | "secondary" | "destructive" | "outline";
    className?: string;
    children?: React.ReactNode;
  }>;
}

/**
 * Factory function that creates example previews with injected themed components.
 * This enables DRY code - JSX is defined once, components are injected per theme.
 */
export function createStatelessPreviews(C: ThemeComponents) {
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

  // Example previews for card component
  const cardPreviews: Record<string, React.ReactNode> = {
    "Basic Card": (
      <C.Card>
        <C.CardHeader>
          <C.CardTitle>Card Title</C.CardTitle>
          <C.CardDescription>Card description goes here.</C.CardDescription>
        </C.CardHeader>
        <C.CardContent>
          <p>Your content here.</p>
        </C.CardContent>
      </C.Card>
    ),
    "With Footer": (
      <C.Card>
        <C.CardHeader>
          <C.CardTitle>Account</C.CardTitle>
          <C.CardDescription>Manage your account settings.</C.CardDescription>
        </C.CardHeader>
        <C.CardContent>
          <p>Configure your preferences below.</p>
        </C.CardContent>
        <C.CardFooter>
          <C.Button>Save Changes</C.Button>
        </C.CardFooter>
      </C.Card>
    ),
    "Login Form": (
      <C.Card className="w-[350px]">
        <C.CardHeader>
          <C.CardTitle>Login</C.CardTitle>
          <C.CardDescription>Enter your credentials.</C.CardDescription>
        </C.CardHeader>
        <C.CardContent className="space-y-4">
          <C.Input placeholder="Email" />
          <C.Input type="password" placeholder="Password" />
        </C.CardContent>
        <C.CardFooter>
          <C.Button className="w-full">Sign In</C.Button>
        </C.CardFooter>
      </C.Card>
    ),
    "Notification Card": (
      <C.Card>
        <C.CardHeader className="flex flex-row items-center gap-4">
          <C.Avatar>
            <C.AvatarFallback>JD</C.AvatarFallback>
          </C.Avatar>
          <div>
            <C.CardTitle className="text-sm">John Doe</C.CardTitle>
            <C.CardDescription>Sent you a message</C.CardDescription>
          </div>
        </C.CardHeader>
      </C.Card>
    ),
    "Stats Card": (
      <C.Card>
        <C.CardHeader className="pb-2">
          <C.CardDescription>Total Revenue</C.CardDescription>
          <C.CardTitle className="text-4xl">$45,231.89</C.CardTitle>
        </C.CardHeader>
        <C.CardContent>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </C.CardContent>
      </C.Card>
    ),
  };

  // Example previews for table component
  const tablePreviews: Record<string, React.ReactNode> = {
    "Basic Table": (
      <C.Table>
        <C.TableHeader>
          <C.TableRow>
            <C.TableHead>Name</C.TableHead>
            <C.TableHead>Status</C.TableHead>
            <C.TableHead>Role</C.TableHead>
          </C.TableRow>
        </C.TableHeader>
        <C.TableBody>
          <C.TableRow>
            <C.TableCell>John Doe</C.TableCell>
            <C.TableCell>Active</C.TableCell>
            <C.TableCell>Developer</C.TableCell>
          </C.TableRow>
        </C.TableBody>
      </C.Table>
    ),
    "With Footer": (
      <C.Table>
        <C.TableHeader>
          <C.TableRow>
            <C.TableHead>Item</C.TableHead>
            <C.TableHead className="text-right">Price</C.TableHead>
          </C.TableRow>
        </C.TableHeader>
        <C.TableBody>
          <C.TableRow>
            <C.TableCell>Product A</C.TableCell>
            <C.TableCell className="text-right">$99.00</C.TableCell>
          </C.TableRow>
          <C.TableRow>
            <C.TableCell>Product B</C.TableCell>
            <C.TableCell className="text-right">$149.00</C.TableCell>
          </C.TableRow>
        </C.TableBody>
        <C.TableFooter>
          <C.TableRow>
            <C.TableCell>Total</C.TableCell>
            <C.TableCell className="text-right">$248.00</C.TableCell>
          </C.TableRow>
        </C.TableFooter>
      </C.Table>
    ),
    "With Caption": (
      <C.Table>
        <C.TableCaption>A list of recent invoices.</C.TableCaption>
        <C.TableHeader>
          <C.TableRow>
            <C.TableHead>Invoice</C.TableHead>
            <C.TableHead>Status</C.TableHead>
            <C.TableHead className="text-right">Amount</C.TableHead>
          </C.TableRow>
        </C.TableHeader>
        <C.TableBody>
          <C.TableRow>
            <C.TableCell>INV001</C.TableCell>
            <C.TableCell>Paid</C.TableCell>
            <C.TableCell className="text-right">$250.00</C.TableCell>
          </C.TableRow>
        </C.TableBody>
      </C.Table>
    ),
    "Striped Rows": (
      <C.Table>
        <C.TableHeader>
          <C.TableRow>
            <C.TableHead>Name</C.TableHead>
            <C.TableHead>Email</C.TableHead>
          </C.TableRow>
        </C.TableHeader>
        <C.TableBody>
          <C.TableRow className="bg-muted/50">
            <C.TableCell>Alice</C.TableCell>
            <C.TableCell>alice@email.com</C.TableCell>
          </C.TableRow>
          <C.TableRow>
            <C.TableCell>Bob</C.TableCell>
            <C.TableCell>bob@email.com</C.TableCell>
          </C.TableRow>
          <C.TableRow className="bg-muted/50">
            <C.TableCell>Charlie</C.TableCell>
            <C.TableCell>charlie@email.com</C.TableCell>
          </C.TableRow>
        </C.TableBody>
      </C.Table>
    ),
    "With Actions": (
      <C.Table>
        <C.TableHeader>
          <C.TableRow>
            <C.TableHead>Name</C.TableHead>
            <C.TableHead>Status</C.TableHead>
            <C.TableHead className="text-right">Actions</C.TableHead>
          </C.TableRow>
        </C.TableHeader>
        <C.TableBody>
          <C.TableRow>
            <C.TableCell className="font-medium">Project Alpha</C.TableCell>
            <C.TableCell>
              <C.Badge variant="secondary">In Progress</C.Badge>
            </C.TableCell>
            <C.TableCell className="text-right">
              <C.Button variant="ghost" size="sm">
                Edit
              </C.Button>
            </C.TableCell>
          </C.TableRow>
        </C.TableBody>
      </C.Table>
    ),
  };

  // Combined example previews registry
  const examplePreviews: Record<string, Record<string, React.ReactNode>> = {
    accordion: accordionPreviews,
    button: buttonPreviews,
    card: cardPreviews,
    table: tablePreviews,
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
    cardPreviews,
    tablePreviews,
    examplePreviews,
    getExamplePreview,
  };
}
