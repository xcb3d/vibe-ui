"use client";

import * as React from "react";
// Registry components
import { Button } from "@vibe-ui/registry/ui/minimal/button";
import { Input } from "@vibe-ui/registry/ui/minimal/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@vibe-ui/registry/ui/minimal/popover";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@vibe-ui/registry/ui/minimal/collapsible";
// Local components (complex external deps)
import { Calendar } from "@vibe-ui/registry/ui/minimal/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@vibe-ui/registry/ui/minimal/form";
import { ChevronsUpDown, Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Collapsible demo with state
export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

// Calendar demo with state
export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [month, setMonth] = React.useState<Date>(new Date());

  return (
    <div className="w-fit">
      <Calendar
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
export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`w-[280px] justify-start text-left font-normal ${!date ? "text-muted-foreground" : ""}`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? date.toLocaleDateString() : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}

// Sonner/toast demo
export function SonnerDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("Event has been created")}>
        Default Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("Profile updated successfully")}
      >
        Success Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("Something went wrong")}
      >
        Error Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("New update available")}
      >
        Info Toast
      </Button>
      <Button
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
      </Button>
    </div>
  );
}

// Form demo with validation
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function FormDemo() {
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-sm"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} />
              </FormControl>
              <FormDescription>
                We&apos;ll never share your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
