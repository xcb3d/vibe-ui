"use client";

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
import { createStatefulDemos } from "../create-stateful-demos";

export const {
  CollapsibleDemo,
  CalendarDemo,
  DatePickerDemo,
  SonnerDemo,
  FormDemo,
  calendarPreviews,
} = createStatefulDemos({
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Calendar,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
});
