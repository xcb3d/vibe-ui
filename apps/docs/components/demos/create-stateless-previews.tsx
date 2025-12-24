"use client";

import * as React from "react";
import {
  Settings,
  Mail,
  ArrowRight,
  Loader2,
  Bell,
  User,
  LogOut,
  Edit,
  Clock,
} from "lucide-react";

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
    value?: string;
    readOnly?: boolean;
    disabled?: boolean;
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
    className?: string;
    children?: React.ReactNode;
  }>;
  AvatarFallback: React.ComponentType<{
    className?: string;
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
  Textarea: React.ComponentType<{
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    id?: string;
  }>;
  Label: React.ComponentType<{
    htmlFor?: string;
    className?: string;
    children?: React.ReactNode;
  }>;
  Checkbox?: React.ComponentType<{
    id?: string;
    checked?: boolean | "indeterminate";
    defaultChecked?: boolean;
    disabled?: boolean;
    className?: string;
    onCheckedChange?: (checked: boolean | "indeterminate") => void;
  }>;
  TooltipProvider?: React.ComponentType<{
    children: React.ReactNode;
    delayDuration?: number;
  }>;
  Tooltip?: React.ComponentType<{ children?: React.ReactNode }>;
  TooltipTrigger?: React.ComponentType<{
    asChild?: boolean;
    children?: React.ReactNode;
  }>;
  TooltipContent?: React.ComponentType<{
    side?: "top" | "right" | "bottom" | "left";
    sideOffset?: number;
    align?: "start" | "center" | "end";
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

  // Example previews for textarea component
  const textareaPreviews: Record<string, React.ReactNode> = {
    Default: (
      <div className="w-full max-w-sm">
        <C.Textarea placeholder="Type your message here." />
      </div>
    ),
    "With Label": (
      <div className="w-full max-w-sm grid gap-2">
        <C.Label htmlFor="message">Your Message</C.Label>
        <C.Textarea placeholder="Type your message here." id="message" />
        <p className="text-xs text-muted-foreground">
          Your message will be copied to the support team.
        </p>
      </div>
    ),
    "With Custom Placeholder": (
      <div className="w-full max-w-sm grid gap-2">
        <C.Label>Bio</C.Label>
        <C.Textarea placeholder="I'm a software engineer based in..." />
      </div>
    ),
    "With Button": (
      <div className="w-full max-w-sm grid gap-4">
        <C.Textarea placeholder="Write a comment..." />
        <C.Button>Send Message</C.Button>
      </div>
    ),
    "Error State": (
      <div className="w-full max-w-sm grid gap-2">
        <C.Label className="text-destructive">Description</C.Label>
        <C.Textarea
          className="border-destructive"
          placeholder="Type something..."
        />
        <p className="text-xs text-destructive font-medium">
          Please enter a valid description.
        </p>
      </div>
    ),
    "Disabled State": (
      <div className="w-full max-w-sm">
        <C.Textarea disabled placeholder="You cannot type here." />
      </div>
    ),
  };

  // Example previews for checkbox component (only if Checkbox is provided)
  const checkboxPreviews: Record<string, React.ReactNode> = C.Checkbox
    ? {
        Default: (
          <div className="flex items-center space-x-3">
            <C.Checkbox id="terms" defaultChecked />
            <C.Label htmlFor="terms" className="font-bold">
              Accept terms and conditions
            </C.Label>
          </div>
        ),

        Sizes: (
          <div className="flex flex-col gap-6 items-start">
            <div className="flex items-center gap-3">
              <C.Checkbox id="size-sm" className="h-4 w-4" />
              <C.Label htmlFor="size-sm" className="text-sm">
                Small
              </C.Label>
            </div>
            <div className="flex items-center gap-3">
              <C.Checkbox id="size-md" defaultChecked />
              <C.Label htmlFor="size-md">Medium (Default)</C.Label>
            </div>
            <div className="flex items-center gap-3">
              <C.Checkbox id="size-lg" className="h-8 w-8 border-[3px]" />
              <C.Label htmlFor="size-lg" className="text-2xl font-black">
                Large
              </C.Label>
            </div>
          </div>
        ),

        States: (
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <C.Checkbox id="state-checked" defaultChecked />
              <C.Label htmlFor="state-checked" className="text-xs font-mono">
                Checked
              </C.Label>
            </div>
            <div className="flex flex-col items-center gap-2">
              <C.Checkbox id="state-unchecked" />
              <C.Label htmlFor="state-unchecked" className="text-xs font-mono">
                Unchecked
              </C.Label>
            </div>
            <div className="flex flex-col items-center gap-2">
              <C.Checkbox id="state-indeterminate" checked="indeterminate" />
              <C.Label
                htmlFor="state-indeterminate"
                className="text-xs font-mono"
              >
                Indeterminate
              </C.Label>
            </div>
            <div className="flex flex-col items-center gap-2">
              <C.Checkbox id="state-disabled-checked" defaultChecked disabled />
              <C.Label
                htmlFor="state-disabled-checked"
                className="text-xs font-mono text-muted-foreground"
              >
                Disabled
              </C.Label>
            </div>
            <div className="flex flex-col items-center gap-2">
              <C.Checkbox id="state-disabled" disabled />
              <C.Label
                htmlFor="state-disabled"
                className="text-xs font-mono text-muted-foreground"
              >
                Disabled
              </C.Label>
            </div>
          </div>
        ),

        "With Description": (
          <div className="flex items-start space-x-3">
            <C.Checkbox id="terms-desc" className="mt-1" defaultChecked />
            <div className="grid gap-1.5 leading-none">
              <C.Label htmlFor="terms-desc" className="font-bold">
                Agree to Privacy Policy
              </C.Label>
              <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy. This is a
                multi-line description.
              </p>
            </div>
          </div>
        ),

        "Error State": (
          <div className="flex flex-col gap-2">
            <div className="flex items-center space-x-3">
              <C.Checkbox
                id="error-check"
                className="border-red-500 dark:border-red-500"
              />
              <C.Label
                htmlFor="error-check"
                className="text-sm font-bold text-red-500"
              >
                Accept Licensing
              </C.Label>
            </div>
            <p className="text-xs font-bold text-red-500">
              This field is required
            </p>
          </div>
        ),

        "Card Selection": (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
            <label className="relative flex flex-col gap-4 border-2 border-black dark:border-white p-4 cursor-pointer hover:bg-yellow-400/20 transition-colors has-[:checked]:bg-yellow-400/30 has-[:checked]:shadow-[4px_4px_0_black] dark:has-[:checked]:shadow-[4px_4px_0_white] shadow-[2px_2px_0_black] dark:shadow-[2px_2px_0_white] rounded-lg">
              <div className="flex justify-between items-start">
                <Settings className="size-6" />
                <C.Checkbox id="card-wifi" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-sm">Wifi Access</p>
                <p className="text-xs text-muted-foreground">
                  High speed internet.
                </p>
              </div>
            </label>
            <label className="relative flex flex-col gap-4 border-2 border-black dark:border-white p-4 cursor-pointer hover:bg-yellow-400/20 transition-colors has-[:checked]:bg-yellow-400/30 has-[:checked]:shadow-[4px_4px_0_black] dark:has-[:checked]:shadow-[4px_4px_0_white] shadow-[2px_2px_0_black] dark:shadow-[2px_2px_0_white] rounded-lg">
              <div className="flex justify-between items-start">
                <Mail className="size-6" />
                <C.Checkbox id="card-coffee" defaultChecked />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-sm">Notifications</p>
                <p className="text-xs text-muted-foreground">Email updates.</p>
              </div>
            </label>
          </div>
        ),

        "Checkbox Group": (
          <div className="w-full max-w-sm">
            <div className="border-2 border-black dark:border-white p-6 shadow-[4px_4px_0_black] dark:shadow-[4px_4px_0_white] rounded-lg">
              <h4 className="font-bold mb-4 text-lg border-b-2 border-black dark:border-white pb-2">
                Select Toppings
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <C.Checkbox id="top-1" />
                  <C.Label
                    htmlFor="top-1"
                    className="text-sm font-medium cursor-pointer"
                  >
                    Extra Cheese
                  </C.Label>
                </div>
                <div className="flex items-center space-x-3">
                  <C.Checkbox id="top-2" defaultChecked />
                  <C.Label
                    htmlFor="top-2"
                    className="text-sm font-medium cursor-pointer"
                  >
                    Mushrooms
                  </C.Label>
                </div>
                <div className="flex items-center space-x-3">
                  <C.Checkbox id="top-3" />
                  <C.Label
                    htmlFor="top-3"
                    className="text-sm font-medium cursor-pointer"
                  >
                    Pepperoni
                  </C.Label>
                </div>
                <div className="flex items-center space-x-3">
                  <C.Checkbox id="top-4" disabled />
                  <C.Label
                    htmlFor="top-4"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Pineapple (Out of stock)
                  </C.Label>
                </div>
              </div>
            </div>
          </div>
        ),
      }
    : {};

  // Example previews for tooltip component (only if all Tooltip components are provided)
  const tooltipPreviews: Record<string, React.ReactNode> =
    C.TooltipProvider && C.Tooltip && C.TooltipTrigger && C.TooltipContent
      ? {
          Placement: (
            <C.TooltipProvider delayDuration={100}>
              <div className="grid grid-cols-2 gap-8 place-items-center">
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <C.Button variant="outline" size="icon">
                      T
                    </C.Button>
                  </C.TooltipTrigger>
                  <C.TooltipContent side="top">Top</C.TooltipContent>
                </C.Tooltip>
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <C.Button variant="outline" size="icon">
                      B
                    </C.Button>
                  </C.TooltipTrigger>
                  <C.TooltipContent side="bottom">Bottom</C.TooltipContent>
                </C.Tooltip>
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <C.Button variant="outline" size="icon">
                      L
                    </C.Button>
                  </C.TooltipTrigger>
                  <C.TooltipContent side="left">Left</C.TooltipContent>
                </C.Tooltip>
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <C.Button variant="outline" size="icon">
                      R
                    </C.Button>
                  </C.TooltipTrigger>
                  <C.TooltipContent side="right">Right</C.TooltipContent>
                </C.Tooltip>
              </div>
            </C.TooltipProvider>
          ),

          "Trigger Types": (
            <C.TooltipProvider delayDuration={100}>
              <div className="flex items-center justify-center gap-6">
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <C.Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Bell className="size-5" />
                    </C.Button>
                  </C.TooltipTrigger>
                  <C.TooltipContent>Notifications</C.TooltipContent>
                </C.Tooltip>
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <span className="underline decoration-wavy decoration-accent cursor-help font-bold text-lg text-foreground">
                      Hover text
                    </span>
                  </C.TooltipTrigger>
                  <C.TooltipContent>More info here</C.TooltipContent>
                </C.Tooltip>
              </div>
            </C.TooltipProvider>
          ),

          "Rich Content": (
            <C.TooltipProvider delayDuration={100}>
              <div className="flex justify-center">
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <button className="focus:outline-none">
                      <C.Avatar>
                        <C.AvatarFallback>JD</C.AvatarFallback>
                      </C.Avatar>
                    </button>
                  </C.TooltipTrigger>
                  <C.TooltipContent side="right" className="w-64 p-0">
                    <C.Card className="border-0 shadow-none">
                      <C.CardContent className="p-4">
                        <div className="flex gap-3">
                          <C.Avatar className="h-10 w-10">
                            <C.AvatarFallback>JD</C.AvatarFallback>
                          </C.Avatar>
                          <div>
                            <h4 className="font-black text-sm uppercase text-foreground">
                              Jane Doe
                            </h4>
                            <p className="text-xs text-foreground/70 font-bold">
                              @janedoe
                            </p>
                          </div>
                        </div>
                        <C.CardDescription>
                          Product designer building neat interfaces. Love coffee
                          and code.
                        </C.CardDescription>
                        <div className="flex gap-4 mt-3">
                          <div className="flex flex-col">
                            <span className="text-xs font-black text-foreground">
                              1.2k
                            </span>
                            <span className="text-xs text-foreground/60 font-bold uppercase">
                              Following
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-black text-foreground">
                              4.5k
                            </span>
                            <span className="text-xs text-foreground/60 font-bold uppercase">
                              Followers
                            </span>
                          </div>
                        </div>
                      </C.CardContent>
                    </C.Card>
                  </C.TooltipContent>
                </C.Tooltip>
              </div>
            </C.TooltipProvider>
          ),

          "Interactive Elements": (
            <C.TooltipProvider delayDuration={100}>
              <div className="flex justify-center">
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <C.Button variant="ghost" className="uppercase">
                      Settings
                    </C.Button>
                  </C.TooltipTrigger>
                  <C.TooltipContent side="bottom" className="p-0 min-w-[150px]">
                    <C.Card className="border-0 shadow-none">
                      <C.CardContent className="p-3 flex flex-col gap-1">
                        <p className="text-[10px] font-black uppercase mb-1 border-b-2 border-black/10 dark:border-white/10 pb-1 px-2 text-foreground/50">
                          Quick Actions
                        </p>
                        <C.Button
                          variant="ghost"
                          size="sm"
                          className="justify-start gap-2 h-8 px-2 font-bold text-xs uppercase"
                        >
                          <Edit className="size-3" /> Edit Profile
                        </C.Button>
                        <C.Button
                          variant="ghost"
                          size="sm"
                          className="justify-start gap-2 h-8 px-2 font-bold text-xs uppercase"
                        >
                          <User className="size-3" /> Preferences
                        </C.Button>
                        <C.Button
                          variant="ghost"
                          size="sm"
                          className="justify-start gap-2 h-8 px-2 font-bold text-xs uppercase text-red-500 hover:text-red-600 hover:bg-red-500/10"
                        >
                          <LogOut className="size-3" /> Logout
                        </C.Button>
                      </C.CardContent>
                    </C.Card>
                  </C.TooltipContent>
                </C.Tooltip>
              </div>
            </C.TooltipProvider>
          ),

          "Delay Duration": (
            <div className="flex items-center justify-center gap-6">
              <C.TooltipProvider delayDuration={0}>
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <C.Button variant="outline">
                      <Clock className="size-4" /> Instant
                    </C.Button>
                  </C.TooltipTrigger>
                  <C.TooltipContent>No delay (0ms)</C.TooltipContent>
                </C.Tooltip>
              </C.TooltipProvider>
              <C.TooltipProvider delayDuration={500}>
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <C.Button variant="outline">
                      <Clock className="size-4" /> Medium
                    </C.Button>
                  </C.TooltipTrigger>
                  <C.TooltipContent>500ms delay</C.TooltipContent>
                </C.Tooltip>
              </C.TooltipProvider>
              <C.TooltipProvider delayDuration={1000}>
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <C.Button variant="outline">
                      <Clock className="size-4" /> Slow
                    </C.Button>
                  </C.TooltipTrigger>
                  <C.TooltipContent>1000ms delay</C.TooltipContent>
                </C.Tooltip>
              </C.TooltipProvider>
            </div>
          ),

          "Disabled State": (
            <C.TooltipProvider delayDuration={100}>
              <div className="flex items-center justify-center gap-6">
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <span tabIndex={0}>
                      <C.Button variant="outline" disabled>
                        Disabled Button
                      </C.Button>
                    </span>
                  </C.TooltipTrigger>
                  <C.TooltipContent>
                    This action is currently unavailable
                  </C.TooltipContent>
                </C.Tooltip>
              </div>
            </C.TooltipProvider>
          ),

          "Color Variants": (
            <C.TooltipProvider delayDuration={100}>
              <div className="flex items-center justify-center gap-4">
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <C.Button size="icon">Y</C.Button>
                  </C.TooltipTrigger>
                  <C.TooltipContent className="bg-yellow-400 text-black border-black">
                    Yellow variant
                  </C.TooltipContent>
                </C.Tooltip>
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <C.Button variant="secondary" size="icon">
                      V
                    </C.Button>
                  </C.TooltipTrigger>
                  <C.TooltipContent className="bg-violet-500 text-white border-violet-700">
                    Violet variant
                  </C.TooltipContent>
                </C.Tooltip>
                <C.Tooltip>
                  <C.TooltipTrigger asChild>
                    <C.Button variant="destructive" size="icon">
                      R
                    </C.Button>
                  </C.TooltipTrigger>
                  <C.TooltipContent className="bg-red-500 text-white border-red-700">
                    Destructive variant
                  </C.TooltipContent>
                </C.Tooltip>
              </div>
            </C.TooltipProvider>
          ),
        }
      : {};

  // Example previews for input component
  const inputPreviews: Record<string, React.ReactNode> = {
    Default: (
      <div className="w-full max-w-sm">
        <C.Input type="text" placeholder="Type something..." />
      </div>
    ),
    "Filled State": (
      <div className="w-full max-w-sm">
        <C.Input type="text" value="John Doe" readOnly />
      </div>
    ),
    "Error State": (
      <div className="w-full max-w-sm grid gap-2">
        <C.Input
          type="email"
          placeholder="Email"
          className="border-red-500 dark:border-red-500 focus:shadow-[4px_4px_0_rgb(239,68,68)]"
        />
        <p className="text-xs font-bold text-red-500">
          Please enter a valid email.
        </p>
      </div>
    ),
    "Disabled State": (
      <div className="w-full max-w-sm">
        <C.Input type="text" placeholder="Can't touch this" disabled />
      </div>
    ),
    "Read Only": (
      <div className="w-full max-w-sm">
        <C.Input type="text" value="ID: #839201" readOnly />
      </div>
    ),
    "With Leading Icon": (
      <div className="w-full max-w-sm relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Mail className="size-4" />
        </div>
        <C.Input type="email" placeholder="Email Address" className="pl-10" />
      </div>
    ),
    "With Trailing Action": (
      <div className="w-full max-w-sm flex items-stretch border-2 border-black dark:border-white rounded-md overflow-hidden shadow-[3px_3px_0_black] dark:shadow-[3px_3px_0_white]">
        <C.Input
          type="text"
          placeholder="Enter coupon code"
          className="flex-1 border-none shadow-none focus:shadow-none rounded-none"
        />
        <C.Button className="rounded-none border-l-2 border-black dark:border-white">
          Apply
        </C.Button>
      </div>
    ),
    "With Prefix": (
      <div className="w-full max-w-sm flex items-stretch border-2 border-black dark:border-white rounded-md overflow-hidden shadow-[3px_3px_0_black] dark:shadow-[3px_3px_0_white] focus-within:shadow-[5px_5px_0_black] dark:focus-within:shadow-[5px_5px_0_white] transition-all duration-200">
        <span className="bg-zinc-100 dark:bg-zinc-800 px-3 py-2 text-sm text-muted-foreground font-bold flex items-center border-r-2 border-black dark:border-white">
          https://
        </span>
        <C.Input
          type="text"
          placeholder="example.com"
          className="flex-1 border-none shadow-none focus:shadow-none rounded-none"
        />
      </div>
    ),
    "With Suffix": (
      <div className="w-full max-w-sm flex items-stretch border-2 border-black dark:border-white rounded-md overflow-hidden shadow-[3px_3px_0_black] dark:shadow-[3px_3px_0_white] focus-within:shadow-[5px_5px_0_black] dark:focus-within:shadow-[5px_5px_0_white] transition-all duration-200">
        <C.Input
          type="number"
          placeholder="0.00"
          className="flex-1 border-none shadow-none focus:shadow-none rounded-none"
        />
        <div className="px-3 bg-zinc-100 dark:bg-zinc-800 border-l-2 border-black dark:border-white flex items-center justify-center">
          <span className="font-bold text-sm text-muted-foreground">USD</span>
        </div>
      </div>
    ),
    "Search with Clear": (
      <div className="w-full max-w-sm relative">
        <C.Input type="search" placeholder="Search..." className="pr-10" />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full p-0.5 transition-colors">
          <span className="text-sm font-bold">✕</span>
        </button>
      </div>
    ),
  };

  // Combined example previews registry
  const examplePreviews: Record<string, Record<string, React.ReactNode>> = {
    accordion: accordionPreviews,
    button: buttonPreviews,
    card: cardPreviews,
    checkbox: checkboxPreviews,
    input: inputPreviews,
    table: tablePreviews,
    textarea: textareaPreviews,
    tooltip: tooltipPreviews,
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
    checkboxPreviews,
    inputPreviews,
    tablePreviews,
    textareaPreviews,
    tooltipPreviews,
    examplePreviews,
    getExamplePreview,
  };
}
