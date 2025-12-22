"use client";

import { Button } from "@vibe-ui/registry/ui/neubrutalism/button";
import { Input } from "@vibe-ui/registry/ui/neubrutalism/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@vibe-ui/registry/ui/neubrutalism/popover";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@vibe-ui/registry/ui/neubrutalism/collapsible";
import { Calendar } from "@vibe-ui/registry/ui/neubrutalism/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@vibe-ui/registry/ui/neubrutalism/form";
import { createStatefulDemos } from "../create-stateful-demos";

export const {
  CollapsibleDemo,
  CalendarDemo,
  DatePickerDemo,
  SonnerDemo,
  FormDemo,
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
