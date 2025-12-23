"use client";

import * as React from "react";
import { ChevronsUpDown, Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Type for themed components injected by each theme
// Using `any` for complex generic components (Calendar, Form, FormField) to avoid type gymnastics
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface StatefulDemoComponents {
  Button: React.ComponentType<{
    variant?:
      | "default"
      | "secondary"
      | "outline"
      | "ghost"
      | "destructive"
      | "link";
    size?: "default" | "sm" | "lg" | "icon";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    asChild?: boolean;
  }>;
  Input: React.ComponentType<any>;
  Popover: React.ComponentType<{ children?: React.ReactNode }>;
  PopoverContent: React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  PopoverTrigger: React.ComponentType<{
    asChild?: boolean;
    children?: React.ReactNode;
  }>;
  Collapsible: React.ComponentType<{
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
    children?: React.ReactNode;
  }>;
  CollapsibleContent: React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  CollapsibleTrigger: React.ComponentType<{
    asChild?: boolean;
    children?: React.ReactNode;
  }>;
  // Calendar has complex DayPicker types - use any
  Calendar: React.ComponentType<any>;
  // Form components use react-hook-form generics - use any
  Form: React.ComponentType<any>;
  FormControl: React.ComponentType<{ children?: React.ReactNode }>;
  FormDescription: React.ComponentType<{ children?: React.ReactNode }>;
  FormField: React.ComponentType<any>;
  FormItem: React.ComponentType<{ children?: React.ReactNode }>;
  FormLabel: React.ComponentType<{ children?: React.ReactNode }>;
  FormMessage: React.ComponentType<Record<string, never>>;
}

// Form validation schema
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

/**
 * Factory function that creates stateful demos with injected themed components.
 * This enables DRY code - JSX is defined once, components are injected per theme.
 */
export function createStatefulDemos(C: StatefulDemoComponents) {
  // Collapsible demo with state
  function CollapsibleDemo() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <C.Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <C.CollapsibleTrigger asChild>
            <C.Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </C.Button>
          </C.CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/primitives
        </div>
        <C.CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @stitches/react
          </div>
        </C.CollapsibleContent>
      </C.Collapsible>
    );
  }

  // Calendar demo with state
  function CalendarDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [month, setMonth] = React.useState<Date>(new Date());

    return (
      <div className="flex justify-center w-full">
        <C.Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={month}
          onMonthChange={setMonth}
          className="rounded-md border"
        />
      </div>
    );
  }

  // Date picker demo with state
  function DatePickerDemo() {
    const [date, setDate] = React.useState<Date>();

    return (
      <C.Popover>
        <C.PopoverTrigger asChild>
          <C.Button
            variant="outline"
            className={`w-[280px] justify-start text-left font-normal ${!date ? "text-muted-foreground" : ""}`}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? date.toLocaleDateString() : "Pick a date"}
          </C.Button>
        </C.PopoverTrigger>
        <C.PopoverContent className="w-auto p-0">
          <C.Calendar mode="single" selected={date} onSelect={setDate} />
        </C.PopoverContent>
      </C.Popover>
    );
  }

  // Sonner/toast demo
  function SonnerDemo() {
    return (
      <div className="flex flex-wrap gap-2">
        <C.Button
          variant="outline"
          onClick={() => toast("Event has been created")}
        >
          Default Toast
        </C.Button>
        <C.Button
          variant="outline"
          onClick={() => toast.success("Profile updated successfully")}
        >
          Success Toast
        </C.Button>
        <C.Button
          variant="outline"
          onClick={() => toast.error("Something went wrong")}
        >
          Error Toast
        </C.Button>
        <C.Button
          variant="outline"
          onClick={() => toast.info("New update available")}
        >
          Info Toast
        </C.Button>
        <C.Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Monday, January 3rd at 6:00pm",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          With Action
        </C.Button>
      </div>
    );
  }

  // Form demo with validation
  function FormDemo() {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: "",
      },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
      toast.success("Form submitted!", {
        description: `Username: ${values.username}, Email: ${values.email}`,
      });
    }

    return (
      <C.Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full max-w-sm"
        >
          <C.FormField
            control={form.control}
            name="username"
            render={({ field }: { field: Record<string, unknown> }) => (
              <C.FormItem>
                <C.FormLabel>Username</C.FormLabel>
                <C.FormControl>
                  <C.Input placeholder="johndoe" {...field} />
                </C.FormControl>
                <C.FormDescription>
                  This is your public display name.
                </C.FormDescription>
                <C.FormMessage />
              </C.FormItem>
            )}
          />
          <C.FormField
            control={form.control}
            name="email"
            render={({ field }: { field: Record<string, unknown> }) => (
              <C.FormItem>
                <C.FormLabel>Email</C.FormLabel>
                <C.FormControl>
                  <C.Input placeholder="john@example.com" {...field} />
                </C.FormControl>
                <C.FormDescription>
                  We&apos;ll never share your email.
                </C.FormDescription>
                <C.FormMessage />
              </C.FormItem>
            )}
          />
          <C.Button type="submit">Submit</C.Button>
        </form>
      </C.Form>
    );
  }

  // Calendar preview demos
  function CalendarSingleDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [month, setMonth] = React.useState<Date>(new Date());

    return (
      <div className="flex justify-center w-full">
        <C.Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={month}
          onMonthChange={setMonth}
          className="rounded-md border"
        />
      </div>
    );
  }

  function CalendarRangeDemo() {
    const [range, setRange] = React.useState<{
      from: Date | undefined;
      to?: Date | undefined;
    }>();
    const [month, setMonth] = React.useState<Date>(new Date());

    return (
      <div className="flex justify-center w-full">
        <C.Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          month={month}
          onMonthChange={setMonth}
          numberOfMonths={2}
          className="rounded-md border"
        />
      </div>
    );
  }

  function CalendarMultipleDemo() {
    const [dates, setDates] = React.useState<Date[] | undefined>([new Date()]);
    const [month, setMonth] = React.useState<Date>(new Date());

    return (
      <div className="flex justify-center w-full">
        <C.Calendar
          mode="multiple"
          selected={dates}
          onSelect={setDates}
          month={month}
          onMonthChange={setMonth}
          className="rounded-md border"
        />
      </div>
    );
  }

  function CalendarDisabledDemo() {
    const [date, setDate] = React.useState<Date | undefined>();
    const [month, setMonth] = React.useState<Date>(new Date());

    return (
      <div className="flex justify-center w-full">
        <C.Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={month}
          onMonthChange={setMonth}
          disabled={[{ before: new Date() }, { dayOfWeek: [0, 6] }]}
          className="rounded-md border"
        />
      </div>
    );
  }

  function CalendarTwoMonthsDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [month, setMonth] = React.useState<Date>(new Date());

    return (
      <div className="flex justify-center w-full">
        <C.Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={month}
          onMonthChange={setMonth}
          numberOfMonths={2}
          className="rounded-md border"
        />
      </div>
    );
  }

  // Calendar previews registry
  const calendarPreviews: Record<string, React.ReactNode> = {
    "Single Date": <CalendarSingleDemo />,
    "Date Range": <CalendarRangeDemo />,
    "Multiple Dates": <CalendarMultipleDemo />,
    "Disabled Dates": <CalendarDisabledDemo />,
    "Two Months": <CalendarTwoMonthsDemo />,
  };

  return {
    CollapsibleDemo,
    CalendarDemo,
    DatePickerDemo,
    SonnerDemo,
    FormDemo,
    calendarPreviews,
  };
}
