// Component metadata for documentation
export interface ComponentExample {
  title: string;
  color:
    | "primary"
    | "accent"
    | "destructive"
    | "success"
    | "info"
    | "warning"
    | "muted";
  code: string;
  showPattern?: boolean;
}

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
  examples?: ComponentExample[];
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
  accordion: {
    name: "Accordion",
    slug: "accordion",
    description: "A set of vertically stacked expandable sections.",
    dependencies: ["@radix-ui/react-accordion", "lucide-react"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/accordion",
    props: [
      {
        name: "type",
        type: '"single" | "multiple"',
        default: '"single"',
        description:
          "Determines whether one or multiple items can be opened at the same time.",
      },
      {
        name: "collapsible",
        type: "boolean",
        default: "false",
        description: "Allows closing all items when in single mode.",
      },
      {
        name: "defaultValue",
        type: "string | string[]",
        description: "The value of the item that should be open by default.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Prevents interaction with the accordion item.",
      },
    ],
    examples: [
      {
        title: "Single Item",
        color: "primary",
        code: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
      },
      {
        title: "Multiple Items",
        color: "accent",
        showPattern: true,
        code: `<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>First Section</AccordionTrigger>
    <AccordionContent>Content for first section.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Second Section</AccordionTrigger>
    <AccordionContent>Content for second section.</AccordionContent>
  </AccordionItem>
</Accordion>`,
      },
      {
        title: "With Icons",
        color: "destructive",
        code: `<AccordionItem value="item-1">
  <AccordionTrigger>
    <SettingsIcon className="mr-2 size-4" />
    Settings
  </AccordionTrigger>
  <AccordionContent>...</AccordionContent>
</AccordionItem>`,
      },
      {
        title: "Complex Content",
        color: "success",
        code: `<AccordionItem value="item-1">
  <AccordionTrigger>Login Form</AccordionTrigger>
  <AccordionContent>
    <form>
      <input type="email" />
      <button>Sign In</button>
    </form>
  </AccordionContent>
</AccordionItem>`,
      },
      {
        title: "Loading State",
        color: "info",
        code: `<AccordionItem value="loading">
  <AccordionTrigger>Skeleton Loader</AccordionTrigger>
  <AccordionContent>
    <div className="animate-pulse space-y-3">
      <div className="h-4 bg-muted border-2 border-black w-3/4" />
      <div className="h-4 bg-muted border-2 border-black w-full" />
    </div>
  </AccordionContent>
</AccordionItem>`,
      },
      {
        title: "Scrollable Content",
        color: "warning",
        code: `<AccordionItem value="scrollable">
  <AccordionTrigger>Terms of Service</AccordionTrigger>
  <AccordionContent>
    <div className="h-48 overflow-y-auto pr-3 space-y-4">
      <div className="bg-secondary p-3 border-2 border-black">
        <h4>1. Introduction</h4>
        <p>...</p>
      </div>
      ...
    </div>
  </AccordionContent>
</AccordionItem>`,
      },
      {
        title: "Disabled State",
        color: "muted",
        code: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1" disabled>
    <AccordionTrigger>Disabled Item</AccordionTrigger>
    <AccordionContent>
      This content cannot be accessed.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
      },
    ],
  },
  table: {
    name: "Table",
    slug: "table",
    description: "A responsive table component with header, body, and footer.",
    dependencies: [],
  },
  progress: {
    name: "Progress",
    slug: "progress",
    description: "A progress bar indicating completion status.",
    dependencies: ["@radix-ui/react-progress"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/progress",
  },
  slider: {
    name: "Slider",
    slug: "slider",
    description: "A slider input for selecting a value from a range.",
    dependencies: ["@radix-ui/react-slider"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/slider",
  },
  "radio-group": {
    name: "Radio Group",
    slug: "radio-group",
    description: "A group of radio buttons for selecting one option.",
    dependencies: ["@radix-ui/react-radio-group", "lucide-react"],
    radixDocs:
      "https://www.radix-ui.com/primitives/docs/components/radio-group",
  },
  popover: {
    name: "Popover",
    slug: "popover",
    description: "A floating panel for displaying content on demand.",
    dependencies: ["@radix-ui/react-popover"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/popover",
  },
  sheet: {
    name: "Sheet",
    slug: "sheet",
    description: "A slide-out panel from any edge of the screen.",
    dependencies: [
      "@radix-ui/react-dialog",
      "class-variance-authority",
      "lucide-react",
    ],
  },
  command: {
    name: "Command",
    slug: "command",
    description: "A command palette for searching and executing actions.",
    dependencies: ["cmdk", "lucide-react"],
  },
  "scroll-area": {
    name: "Scroll Area",
    slug: "scroll-area",
    description: "A scrollable area with custom scrollbars.",
    dependencies: ["@radix-ui/react-scroll-area"],
    radixDocs:
      "https://www.radix-ui.com/primitives/docs/components/scroll-area",
  },
  collapsible: {
    name: "Collapsible",
    slug: "collapsible",
    description: "A component that can be expanded or collapsed.",
    dependencies: ["@radix-ui/react-collapsible"],
    radixDocs:
      "https://www.radix-ui.com/primitives/docs/components/collapsible",
  },
  "alert-dialog": {
    name: "Alert Dialog",
    slug: "alert-dialog",
    description: "A modal dialog for confirmations and alerts.",
    dependencies: ["@radix-ui/react-alert-dialog"],
    radixDocs:
      "https://www.radix-ui.com/primitives/docs/components/alert-dialog",
  },
  breadcrumb: {
    name: "Breadcrumb",
    slug: "breadcrumb",
    description: "A navigation component showing the current page location.",
    dependencies: ["@radix-ui/react-slot", "lucide-react"],
  },
  calendar: {
    name: "Calendar",
    slug: "calendar",
    description: "A date picker calendar component.",
    dependencies: ["react-day-picker", "date-fns", "lucide-react"],
  },
  "date-picker": {
    name: "Date Picker",
    slug: "date-picker",
    description: "A date picker with popover calendar.",
    dependencies: ["react-day-picker", "date-fns", "lucide-react"],
  },
  form: {
    name: "Form",
    slug: "form",
    description: "Form components with react-hook-form integration.",
    dependencies: [
      "react-hook-form",
      "@radix-ui/react-label",
      "@radix-ui/react-slot",
    ],
  },
  "navigation-menu": {
    name: "Navigation Menu",
    slug: "navigation-menu",
    description: "A responsive navigation menu with dropdowns.",
    dependencies: [
      "@radix-ui/react-navigation-menu",
      "class-variance-authority",
      "lucide-react",
    ],
    radixDocs:
      "https://www.radix-ui.com/primitives/docs/components/navigation-menu",
  },
  pagination: {
    name: "Pagination",
    slug: "pagination",
    description: "A pagination component for navigating pages.",
    dependencies: ["lucide-react"],
  },
  toggle: {
    name: "Toggle",
    slug: "toggle",
    description: "A two-state button that can be on or off.",
    dependencies: ["@radix-ui/react-toggle", "class-variance-authority"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/toggle",
  },
  "toggle-group": {
    name: "Toggle Group",
    slug: "toggle-group",
    description: "A group of toggle buttons where only one can be active.",
    dependencies: ["@radix-ui/react-toggle-group", "class-variance-authority"],
    radixDocs:
      "https://www.radix-ui.com/primitives/docs/components/toggle-group",
  },
  "aspect-ratio": {
    name: "Aspect Ratio",
    slug: "aspect-ratio",
    description: "Display content within a desired aspect ratio.",
    dependencies: ["@radix-ui/react-aspect-ratio"],
    radixDocs:
      "https://www.radix-ui.com/primitives/docs/components/aspect-ratio",
  },
  "hover-card": {
    name: "Hover Card",
    slug: "hover-card",
    description: "Preview content available behind a link.",
    dependencies: ["@radix-ui/react-hover-card"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/hover-card",
  },
  "context-menu": {
    name: "Context Menu",
    slug: "context-menu",
    description: "A menu that appears on right-click.",
    dependencies: ["@radix-ui/react-context-menu"],
    radixDocs:
      "https://www.radix-ui.com/primitives/docs/components/context-menu",
  },
  "input-otp": {
    name: "Input OTP",
    slug: "input-otp",
    description: "One-time password input for verification codes.",
    dependencies: ["input-otp"],
  },
  drawer: {
    name: "Drawer",
    slug: "drawer",
    description: "A mobile-friendly bottom sheet component.",
    dependencies: ["vaul"],
  },
  menubar: {
    name: "Menubar",
    slug: "menubar",
    description: "A desktop-style application menu.",
    dependencies: ["@radix-ui/react-menubar"],
    radixDocs: "https://www.radix-ui.com/primitives/docs/components/menubar",
  },
  carousel: {
    name: "Carousel",
    slug: "carousel",
    description: "A slideshow component for cycling through content.",
    dependencies: ["embla-carousel-react"],
  },
  resizable: {
    name: "Resizable",
    slug: "resizable",
    description: "Split-pane resizable panel layouts.",
    dependencies: ["react-resizable-panels"],
  },
  spinner: {
    name: "Spinner",
    slug: "spinner",
    description: "A loading spinner indicator with size variants.",
    dependencies: ["class-variance-authority"],
    props: [
      {
        name: "size",
        type: '"sm" | "md" | "lg" | "xl"',
        default: '"md"',
        description: "The size of the spinner",
      },
    ],
  },
  kbd: {
    name: "Kbd",
    slug: "kbd",
    description: "A keyboard key indicator for displaying shortcuts.",
    dependencies: ["class-variance-authority"],
    props: [
      {
        name: "variant",
        type: '"default" | "outline"',
        default: '"default"',
        description: "The visual style of the kbd",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: "The size of the kbd",
      },
    ],
  },
};

export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return componentDocs[slug];
}

export function getAllComponentSlugs(): string[] {
  return Object.keys(componentDocs);
}
