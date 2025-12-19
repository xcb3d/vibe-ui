"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "Getting Started",
    href: "/docs",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
      { title: "CLI", href: "/docs/cli" },
    ],
  },
  {
    title: "Components",
    href: "/components",
    items: [
      { title: "Accordion", href: "/components/accordion" },
      { title: "Alert", href: "/components/alert" },
      { title: "Alert Dialog", href: "/components/alert-dialog" },
      { title: "Aspect Ratio", href: "/components/aspect-ratio" },
      { title: "Avatar", href: "/components/avatar" },
      { title: "Badge", href: "/components/badge" },
      { title: "Breadcrumb", href: "/components/breadcrumb" },
      { title: "Button", href: "/components/button" },
      { title: "Calendar", href: "/components/calendar" },
      { title: "Card", href: "/components/card" },
      { title: "Carousel", href: "/components/carousel" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Collapsible", href: "/components/collapsible" },
      { title: "Command", href: "/components/command" },
      { title: "Context Menu", href: "/components/context-menu" },
      { title: "Date Picker", href: "/components/date-picker" },
      { title: "Dialog", href: "/components/dialog" },
      { title: "Drawer", href: "/components/drawer" },
      { title: "Dropdown Menu", href: "/components/dropdown-menu" },
      { title: "Form", href: "/components/form" },
      { title: "Hover Card", href: "/components/hover-card" },
      { title: "Input", href: "/components/input" },
      { title: "Input OTP", href: "/components/input-otp" },
      { title: "Kbd", href: "/components/kbd" },
      { title: "Label", href: "/components/label" },
      { title: "Menubar", href: "/components/menubar" },
      { title: "Navigation Menu", href: "/components/navigation-menu" },
      { title: "Pagination", href: "/components/pagination" },
      { title: "Popover", href: "/components/popover" },
      { title: "Progress", href: "/components/progress" },
      { title: "Radio Group", href: "/components/radio-group" },
      { title: "Resizable", href: "/components/resizable" },
      { title: "Scroll Area", href: "/components/scroll-area" },
      { title: "Select", href: "/components/select" },
      { title: "Separator", href: "/components/separator" },
      { title: "Sheet", href: "/components/sheet" },
      { title: "Skeleton", href: "/components/skeleton" },
      { title: "Slider", href: "/components/slider" },
      { title: "Sonner", href: "/components/sonner" },
      { title: "Spinner", href: "/components/spinner" },
      { title: "Switch", href: "/components/switch" },
      { title: "Table", href: "/components/table" },
      { title: "Tabs", href: "/components/tabs" },
      { title: "Textarea", href: "/components/textarea" },
      { title: "Toggle", href: "/components/toggle" },
      { title: "Toggle Group", href: "/components/toggle-group" },
      { title: "Tooltip", href: "/components/tooltip" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-16 left-0 z-30 hidden h-[calc(100vh-4rem)] w-64 overflow-y-auto border-r bg-background px-4 py-6 lg:block">
      <nav className="space-y-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <h4 className="mb-2 px-2 text-sm font-semibold tracking-tight">
              {section.title}
            </h4>
            {section.items && (
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-sm transition-colors",
                        pathname === item.href
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export function MobileSidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden">
      <aside className="fixed inset-y-0 left-0 z-50 w-72 border-r bg-background p-6">
        <nav className="space-y-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <h4 className="mb-2 text-sm font-semibold tracking-tight">
                {section.title}
              </h4>
              {section.items && (
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-md px-2 py-1.5 text-sm transition-colors",
                          pathname === item.href
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground",
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}
