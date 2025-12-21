import {
  Home,
  MousePointer2,
  Layers,
  TextCursorInput,
  LayoutDashboard,
  Square,
  Info,
  LucideIcon,
} from "lucide-react";

// Navigation item type
interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

interface CategoryItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

interface Category {
  title: string;
  items: CategoryItem[];
}

// Top-level navigation
export const navigation: NavItem[] = [
  {
    title: "Installation",
    href: "/docs/installation",
    icon: Home,
  },
];

// All components organized by categories
export const componentCategories: Category[] = [
  {
    title: "Actions",
    items: [
      { title: "Button", href: "/components/button", icon: MousePointer2 },
      { title: "Toggle", href: "/components/toggle", icon: Square },
      { title: "Toggle Group", href: "/components/toggle-group", icon: Square },
    ],
  },
  {
    title: "Inputs",
    items: [
      { title: "Input", href: "/components/input", icon: TextCursorInput },
      {
        title: "Textarea",
        href: "/components/textarea",
        icon: TextCursorInput,
      },
      { title: "Checkbox", href: "/components/checkbox", icon: Square },
      { title: "Radio Group", href: "/components/radio-group", icon: Square },
      { title: "Select", href: "/components/select", icon: Layers },
      { title: "Switch", href: "/components/switch", icon: Square },
      { title: "Slider", href: "/components/slider", icon: Layers },
      {
        title: "Input OTP",
        href: "/components/input-otp",
        icon: TextCursorInput,
      },
      { title: "Form", href: "/components/form", icon: LayoutDashboard },
      { title: "Label", href: "/components/label", icon: Info },
    ],
  },
  {
    title: "Data Display",
    items: [
      { title: "Card", href: "/components/card", icon: LayoutDashboard },
      { title: "Table", href: "/components/table", icon: LayoutDashboard },
      { title: "Avatar", href: "/components/avatar", icon: Square },
      { title: "Badge", href: "/components/badge", icon: Info },
      {
        title: "Calendar",
        href: "/components/calendar",
        icon: LayoutDashboard,
      },
      { title: "Carousel", href: "/components/carousel", icon: Layers },
      { title: "Aspect Ratio", href: "/components/aspect-ratio", icon: Square },
      { title: "Separator", href: "/components/separator", icon: Layers },
      { title: "Skeleton", href: "/components/skeleton", icon: Square },
    ],
  },
  {
    title: "Disclosure",
    items: [
      { title: "Accordion", href: "/components/accordion", icon: Layers },
      { title: "Collapsible", href: "/components/collapsible", icon: Layers },
      { title: "Tabs", href: "/components/tabs", icon: Layers },
      { title: "Resizable", href: "/components/resizable", icon: Layers },
    ],
  },
  {
    title: "Feedback",
    items: [
      { title: "Alert", href: "/components/alert", icon: Info },
      { title: "Alert Dialog", href: "/components/alert-dialog", icon: Square },
      { title: "Dialog", href: "/components/dialog", icon: Square },
      { title: "Drawer", href: "/components/drawer", icon: Square },
      { title: "Sheet", href: "/components/sheet", icon: Square },
      { title: "Sonner", href: "/components/sonner", icon: Info },
      { title: "Tooltip", href: "/components/tooltip", icon: Info },
      { title: "Hover Card", href: "/components/hover-card", icon: Square },
      { title: "Progress", href: "/components/progress", icon: Layers },
      { title: "Spinner", href: "/components/spinner", icon: Layers },
    ],
  },
  {
    title: "Navigation",
    items: [
      { title: "Breadcrumb", href: "/components/breadcrumb", icon: Layers },
      { title: "Menubar", href: "/components/menubar", icon: Layers },
      {
        title: "Navigation Menu",
        href: "/components/navigation-menu",
        icon: Layers,
      },
      { title: "Pagination", href: "/components/pagination", icon: Layers },
      { title: "Command", href: "/components/command", icon: Square },
      { title: "Context Menu", href: "/components/context-menu", icon: Square },
      {
        title: "Dropdown Menu",
        href: "/components/dropdown-menu",
        icon: Layers,
      },
    ],
  },
  {
    title: "Overlay",
    items: [
      { title: "Popover", href: "/components/popover", icon: Square },
      {
        title: "Date Picker",
        href: "/components/date-picker",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "Typography",
    items: [{ title: "Kbd", href: "/components/kbd", icon: Info }],
  },
  {
    title: "Layout",
    items: [
      { title: "Scroll Area", href: "/components/scroll-area", icon: Layers },
    ],
  },
];
