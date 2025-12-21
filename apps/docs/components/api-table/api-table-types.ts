// Shared types
export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface ApiTableProps {
  props: PropDefinition[];
  className?: string;
}
