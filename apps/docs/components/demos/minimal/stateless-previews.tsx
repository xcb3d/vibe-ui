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
import { Textarea } from "@vibe-ui/registry/ui/minimal/textarea";
import { Label } from "@vibe-ui/registry/ui/minimal/label";
import { createStatelessPreviews } from "../create-stateless-previews";

// Create stateless previews with minimal theme components
const {
  accordionPreviews,
  buttonPreviews,
  cardPreviews,
  tablePreviews,
  textareaPreviews,
  examplePreviews: statelessPreviews,
} = createStatelessPreviews({
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
  Textarea,
  Label,
});

export {
  accordionPreviews,
  buttonPreviews,
  cardPreviews,
  tablePreviews,
  textareaPreviews,
  statelessPreviews,
};
