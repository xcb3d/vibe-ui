import * as React from "react";

// Shared types
export interface TOCItem {
  id: string;
  label: string;
  level?: number;
  children?: TOCItem[];
}

export interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

// Shared hook for intersection observer
export function useActiveSection(items: TOCItem[]) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" },
    );

    const allIds = items.flatMap((item) => [
      item.id,
      ...(item.children?.map((c) => c.id) || []),
    ]);

    allIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return activeId;
}
