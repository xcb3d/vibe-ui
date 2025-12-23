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
        type: '"default" | "primary" | "secondary" | "destructive" | "outline" | "accent" | "ghost" | "link"',
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
    examples: [
      {
        title: "Variants",
        color: "primary",
        code: `<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`,
      },
      {
        title: "Sizes",
        color: "accent",
        code: `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Settings /></Button>`,
      },
      {
        title: "With Icons",
        color: "info",
        code: `<Button>
  <Mail className="mr-2 h-4 w-4" /> Login with Email
</Button>
<Button variant="secondary">
  Next Step <ArrowRight className="ml-2 h-4 w-4" />
</Button>`,
      },
      {
        title: "Loading State",
        color: "warning",
        code: `<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`,
      },
      {
        title: "Disabled",
        color: "muted",
        code: `<Button disabled>Disabled</Button>`,
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
        name: "Card",
        type: "React.HTMLAttributes<HTMLDivElement>",
        description:
          "The main card container. Accepts className and all div props.",
      },
      {
        name: "CardHeader",
        type: "React.HTMLAttributes<HTMLDivElement>",
        description:
          "Container for title and description. Has default padding.",
      },
      {
        name: "CardTitle",
        type: "React.HTMLAttributes<HTMLDivElement>",
        description: "The card title with semibold font styling.",
      },
      {
        name: "CardDescription",
        type: "React.HTMLAttributes<HTMLDivElement>",
        description: "Muted text for card description.",
      },
      {
        name: "CardContent",
        type: "React.HTMLAttributes<HTMLDivElement>",
        description: "Main content area with horizontal padding.",
      },
      {
        name: "CardFooter",
        type: "React.HTMLAttributes<HTMLDivElement>",
        description: "Footer area with flex layout for actions.",
      },
    ],
    examples: [
      {
        title: "Basic Card",
        color: "primary",
        code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here.</p>
  </CardContent>
</Card>`,
      },
      {
        title: "With Footer",
        color: "accent",
        code: `<Card>
  <CardHeader>
    <CardTitle>Account</CardTitle>
    <CardDescription>Manage your account settings.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Configure your preferences below.</p>
  </CardContent>
  <CardFooter>
    <Button>Save Changes</Button>
  </CardFooter>
</Card>`,
      },
      {
        title: "Login Form",
        color: "info",
        code: `<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Enter your credentials.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <Input placeholder="Email" />
    <Input type="password" placeholder="Password" />
  </CardContent>
  <CardFooter>
    <Button className="w-full">Sign In</Button>
  </CardFooter>
</Card>`,
      },
      {
        title: "Notification Card",
        color: "warning",
        code: `<Card>
  <CardHeader className="flex flex-row items-center gap-4">
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <div>
      <CardTitle className="text-sm">John Doe</CardTitle>
      <CardDescription>Sent you a message</CardDescription>
    </div>
  </CardHeader>
</Card>`,
      },
      {
        title: "Stats Card",
        color: "success",
        code: `<Card>
  <CardHeader className="pb-2">
    <CardDescription>Total Revenue</CardDescription>
    <CardTitle className="text-4xl">$45,231.89</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-xs text-muted-foreground">
      +20.1% from last month
    </p>
  </CardContent>
</Card>`,
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
    props: [
      {
        name: "placeholder",
        type: "string",
        description: "Placeholder text for the textarea.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables the textarea.",
      },
    ],
    examples: [
      {
        title: "Default",
        color: "primary",
        code: `<Textarea placeholder="Type your message here." />`,
      },
      {
        title: "With Label",
        color: "accent",
        code: `<div className="grid gap-2">
  <Label htmlFor="message">Your Message</Label>
  <Textarea placeholder="Type your message here." id="message" />
  <p className="text-sm text-muted-foreground">
    Your message will be copied to the support team.
  </p>
</div>`,
      },
      {
        title: "With Custom Placeholder",
        color: "info",
        code: `<div className="grid gap-2">
  <Label>Bio</Label>
  <Textarea placeholder="I'm a software engineer based in..." />
</div>`,
      },
      {
        title: "With Button",
        color: "primary",
        code: `<div className="grid gap-4">
  <Textarea placeholder="Write a comment..." />
  <Button>Send Message</Button>
</div>`,
      },
      {
        title: "Error State",
        color: "destructive",
        code: `<div className="grid gap-2">
  <Label className="text-destructive">Description</Label>
  <Textarea className="border-destructive" placeholder="Type something..." />
  <p className="text-sm text-destructive">Please enter a valid description.</p>
</div>`,
      },
      {
        title: "Disabled State",
        color: "muted",
        code: `<Textarea disabled placeholder="You cannot type here." />`,
      },
      {
        title: "Character Counter",
        color: "accent",
        code: `const [value, setValue] = useState("");
const maxLength = 280;

<div className="relative">
  <Textarea
    placeholder="Tweet something..."
    value={value}
    onChange={(e) => setValue(e.target.value)}
    maxLength={maxLength}
    className="pb-8"
  />
  <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
    {value.length}/{maxLength}
  </div>
</div>`,
      },
    ],
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
    props: [
      {
        name: "Table",
        type: "React.HTMLAttributes<HTMLTableElement>",
        description: "The main table container with overflow handling.",
      },
      {
        name: "TableHeader",
        type: "React.HTMLAttributes<HTMLTableSectionElement>",
        description: "Container for table header rows (thead).",
      },
      {
        name: "TableBody",
        type: "React.HTMLAttributes<HTMLTableSectionElement>",
        description: "Container for table body rows (tbody).",
      },
      {
        name: "TableFooter",
        type: "React.HTMLAttributes<HTMLTableSectionElement>",
        description: "Container for table footer rows (tfoot).",
      },
      {
        name: "TableRow",
        type: "React.HTMLAttributes<HTMLTableRowElement>",
        description: "A table row with hover and selected states.",
      },
      {
        name: "TableHead",
        type: "React.ThHTMLAttributes<HTMLTableCellElement>",
        description: "Table header cell (th) with medium font weight.",
      },
      {
        name: "TableCell",
        type: "React.TdHTMLAttributes<HTMLTableCellElement>",
        description: "Table data cell (td) with padding.",
      },
      {
        name: "TableCaption",
        type: "React.HTMLAttributes<HTMLTableCaptionElement>",
        description: "Caption displayed below the table.",
      },
    ],
    examples: [
      {
        title: "Basic Table",
        color: "primary",
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>Active</TableCell>
      <TableCell>Developer</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
      },
      {
        title: "With Footer",
        color: "accent",
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Item</TableHead>
      <TableHead className="text-right">Price</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Product A</TableCell>
      <TableCell className="text-right">$99.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Product B</TableCell>
      <TableCell className="text-right">$149.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell>Total</TableCell>
      <TableCell className="text-right">$248.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`,
      },
      {
        title: "With Caption",
        color: "info",
        code: `<Table>
  <TableCaption>A list of recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
      },
      {
        title: "Striped Rows",
        color: "warning",
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="bg-muted/50">
      <TableCell>Alice</TableCell>
      <TableCell>alice@email.com</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Bob</TableCell>
      <TableCell>bob@email.com</TableCell>
    </TableRow>
    <TableRow className="bg-muted/50">
      <TableCell>Charlie</TableCell>
      <TableCell>charlie@email.com</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
      },
      {
        title: "With Actions",
        color: "success",
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Project Alpha</TableCell>
      <TableCell>
        <Badge variant="secondary">In Progress</Badge>
      </TableCell>
      <TableCell className="text-right">
        <Button variant="ghost" size="sm">Edit</Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`,
      },
    ],
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
    props: [
      {
        name: "mode",
        type: '"single" | "multiple" | "range"',
        default: '"single"',
        description: "The selection mode of the calendar.",
      },
      {
        name: "selected",
        type: "Date | Date[] | DateRange | undefined",
        description: "The currently selected date(s).",
      },
      {
        name: "onSelect",
        type: "(date: Date | undefined) => void",
        description: "Callback when a date is selected.",
      },
      {
        name: "month",
        type: "Date",
        description: "The month to display in the calendar.",
      },
      {
        name: "onMonthChange",
        type: "(month: Date) => void",
        description: "Callback when the displayed month changes.",
      },
      {
        name: "disabled",
        type: "Matcher | Matcher[]",
        description: "Dates that should be disabled.",
      },
      {
        name: "numberOfMonths",
        type: "number",
        default: "1",
        description: "Number of months to display.",
      },
      {
        name: "showOutsideDays",
        type: "boolean",
        default: "true",
        description: "Show days from previous/next months.",
      },
    ],
    examples: [
      {
        title: "Single Date",
        color: "primary",
        code: `const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`,
      },
      {
        title: "Date Range",
        color: "accent",
        code: `const [range, setRange] = useState<DateRange | undefined>();

<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
  numberOfMonths={2}
  className="rounded-md border"
/>`,
      },
      {
        title: "Multiple Dates",
        color: "info",
        code: `const [dates, setDates] = useState<Date[] | undefined>([]);

<Calendar
  mode="multiple"
  selected={dates}
  onSelect={setDates}
  className="rounded-md border"
/>`,
      },
      {
        title: "Disabled Dates",
        color: "warning",
        code: `<Calendar
  mode="single"
  disabled={[
    { before: new Date() }, // disable past dates
    { dayOfWeek: [0, 6] },  // disable weekends
  ]}
  className="rounded-md border"
/>`,
      },
      {
        title: "Two Months",
        color: "success",
        code: `<Calendar
  mode="single"
  numberOfMonths={2}
  className="rounded-md border"
/>`,
      },
    ],
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
