"use client";

import { Button } from "@vibe-ui/registry/ui/minimal/button";
import { Input } from "@vibe-ui/registry/ui/minimal/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@vibe-ui/registry/ui/minimal/accordion";
import { createExamplePreviews } from "../create-example-previews";

const {
  accordionPreviews,
  buttonPreviews,
  examplePreviews,
  getExamplePreview,
} = createExamplePreviews({
  Button,
  Input,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
});

export {
  accordionPreviews,
  buttonPreviews,
  examplePreviews,
  getExamplePreview,
};
