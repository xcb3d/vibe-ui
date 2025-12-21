// Shared types
export interface SectionHeaderProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export interface ExampleHeaderProps {
  children: React.ReactNode;
  color?:
    | "primary"
    | "accent"
    | "destructive"
    | "success"
    | "info"
    | "warning"
    | "muted";
  id?: string;
  className?: string;
}

export const colorMap = {
  primary: "bg-primary",
  accent: "bg-accent",
  destructive: "bg-[#ff6b6b]",
  success: "bg-[#4ade80]",
  info: "bg-[#06b6d4]",
  warning: "bg-[#fb923c]",
  muted: "bg-muted-foreground",
};
