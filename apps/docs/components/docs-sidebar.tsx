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
      { title: "Button", href: "/components/button" },
      { title: "Card", href: "/components/card" },
      { title: "Input", href: "/components/input" },
      { title: "Label", href: "/components/label" },
      { title: "Textarea", href: "/components/textarea" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Switch", href: "/components/switch" },
      { title: "Select", href: "/components/select" },
      { title: "Badge", href: "/components/badge" },
      { title: "Alert", href: "/components/alert" },
      { title: "Avatar", href: "/components/avatar" },
      { title: "Dialog", href: "/components/dialog" },
      { title: "Dropdown Menu", href: "/components/dropdown-menu" },
      { title: "Tabs", href: "/components/tabs" },
      { title: "Tooltip", href: "/components/tooltip" },
      { title: "Separator", href: "/components/separator" },
      { title: "Skeleton", href: "/components/skeleton" },
      { title: "Sonner", href: "/components/sonner" },
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
