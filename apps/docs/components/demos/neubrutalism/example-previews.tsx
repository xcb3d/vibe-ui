"use client";

import { Button } from "@vibe-ui/registry/ui/neubrutalism/button";
import { Input } from "@vibe-ui/registry/ui/neubrutalism/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@vibe-ui/registry/ui/neubrutalism/accordion";
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
