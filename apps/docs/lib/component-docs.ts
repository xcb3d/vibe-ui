// Component metadata for documentation
export interface ComponentDoc {
  name: string;
  slug: string;
  description: string;
  dependencies: string[];
  radixDocs?: string;
  props?: {
    name: string;
    type: string;
    default?: string;
    description: string;
  }[];
}

export const componentDocs: Record<string, ComponentDoc> = {
  button: {
    name: "Button",
    slug: "button",
    description: "A button component with multiple variants and sizes.",
    dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
    props: [
      {
        name: "variant",
        type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
        default: '"default"',
        description: "The visual style of the button",
      },
      {
        name: "size",
        type: '"default" | "sm" | "lg" | "icon"',
        default: '"default"',
        description: "The size of the button",
      },
      {
        name: "asChild",
        type: "boolean",
        default: "false",
        description: "Render as child element using Radix Slot",
      },
    ],
  },
  card: {
    name: "Card",
    slug: "card",
    description: "A card component for displaying content in a contained box.",
    dependencies: [],
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes",
      },
    ],
  },
  input: {
    name: "Input",
    slug: "input",
    description: "A text input component.",
    dependencies: [],
    props: [
      {
        name: "type",
        type: "string",
        default: '"text"',
        description: "The input type",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the input is disabled",
      },
    ],
  },
  label: {
    name: "Label",
    slug: "label",
    description: "A label component for form elements.",
    dependencies: ["@radix-ui/react-label"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/label",
  },
  textarea: {
    name: "Textarea",
    slug: "textarea",
    description: "A multi-line text input component.",
    dependencies: [],
  },
  checkbox: {
    name: "Checkbox",
    slug: "checkbox",
    description: "A checkbox component for toggle options.",
    dependencies: ["@radix-ui/react-checkbox"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/checkbox",
  },
  switch: {
    name: "Switch",
    slug: "switch",
    description: "A toggle switch component.",
    dependencies: ["@radix-ui/react-switch"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/switch",
  },
  select: {
    name: "Select",
    slug: "select",
    description: "A dropdown select component.",
    dependencies: ["@radix-ui/react-select"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/select",
  },
  badge: {
    name: "Badge",
    slug: "badge",
    description: "A badge component for status indicators.",
    dependencies: ["class-variance-authority"],
    props: [
      {
        name: "variant",
        type: '"default" | "secondary" | "destructive" | "outline"',
        default: '"default"',
        description: "The visual style of the badge",
      },
    ],
  },
  alert: {
    name: "Alert",
    slug: "alert",
    description: "An alert component for notifications.",
    dependencies: ["class-variance-authority"],
    props: [
      {
        name: "variant",
        type: '"default" | "destructive"',
        default: '"default"',
        description: "The visual style of the alert",
      },
    ],
  },
  avatar: {
    name: "Avatar",
    slug: "avatar",
    description: "An avatar component for user profile images.",
    dependencies: ["@radix-ui/react-avatar"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/avatar",
  },
  dialog: {
    name: "Dialog",
    slug: "dialog",
    description: "A modal dialog component.",
    dependencies: ["@radix-ui/react-dialog"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/dialog",
  },
  "dropdown-menu": {
    name: "Dropdown Menu",
    slug: "dropdown-menu",
    description: "A dropdown menu component.",
    dependencies: ["@radix-ui/react-dropdown-menu"],
    radixDocs:
      "https://www.radix-ui.com/primitives/docs/components/dropdown-menu",
  },
  tabs: {
    name: "Tabs",
    slug: "tabs",
    description: "A tabs component for tabbed content.",
    dependencies: ["@radix-ui/react-tabs"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/tabs",
  },
  tooltip: {
    name: "Tooltip",
    slug: "tooltip",
    description: "A tooltip component for additional information.",
    dependencies: ["@radix-ui/react-tooltip"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/tooltip",
  },
  separator: {
    name: "Separator",
    slug: "separator",
    description: "A separator component for dividing content.",
    dependencies: ["@radix-ui/react-separator"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/separator",
  },
  skeleton: {
    name: "Skeleton",
    slug: "skeleton",
    description: "A skeleton loading component.",
    dependencies: [],
  },
  sonner: {
    name: "Sonner",
    slug: "sonner",
    description: "A toast notification component using Sonner.",
    dependencies: ["sonner"],
  },
};

export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return componentDocs[slug];
}

export function getAllComponentSlugs(): string[] {
  return Object.keys(componentDocs);
}
