"use client";

import { Button } from "@vibe-ui/registry/ui/minimal/button";
import { Input } from "@vibe-ui/registry/ui/minimal/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@vibe-ui/registry/ui/minimal/card";
import { Avatar, AvatarFallback } from "@vibe-ui/registry/ui/minimal/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@vibe-ui/registry/ui/minimal/accordion";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@vibe-ui/registry/ui/minimal/table";
import { Badge } from "@vibe-ui/registry/ui/minimal/badge";
import { createExamplePreviews } from "../create-example-previews";

const {
  accordionPreviews,
  buttonPreviews,
  cardPreviews,
  tablePreviews,
  examplePreviews,
  getExamplePreview,
} = createExamplePreviews({
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Avatar,
  AvatarFallback,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  Badge,
});

export {
  accordionPreviews,
  buttonPreviews,
  cardPreviews,
  tablePreviews,
  examplePreviews,
  getExamplePreview,
};
