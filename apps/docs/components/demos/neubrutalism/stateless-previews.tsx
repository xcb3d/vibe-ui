"use client";

import { Button } from "@vibe-ui/registry/ui/neubrutalism/button";
import { Input } from "@vibe-ui/registry/ui/neubrutalism/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@vibe-ui/registry/ui/neubrutalism/card";
import {
  Avatar,
  AvatarFallback,
} from "@vibe-ui/registry/ui/neubrutalism/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@vibe-ui/registry/ui/neubrutalism/accordion";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@vibe-ui/registry/ui/neubrutalism/table";
import { Badge } from "@vibe-ui/registry/ui/neubrutalism/badge";
import { Textarea } from "@vibe-ui/registry/ui/neubrutalism/textarea";
import { Label } from "@vibe-ui/registry/ui/neubrutalism/label";
import { createStatelessPreviews } from "../create-stateless-previews";

// Create stateless previews with neubrutalism theme components
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
