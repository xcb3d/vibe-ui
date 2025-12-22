/**
 * CodeBlock component types
 * Used for displaying code snippets with syntax highlighting and copy functionality
 */

export interface CodeBlockProps {
  /** The code string to display */
  code: string;
  /** Programming language for syntax highlighting */
  language?:
    | "bash"
    | "tsx"
    | "jsx"
    | "typescript"
    | "javascript"
    | "json"
    | "css"
    | "html";
  /** Show terminal icon (for CLI commands) */
  showTerminalIcon?: boolean;
  /** Show copy to clipboard button */
  showCopyButton?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export interface SyntaxColors {
  /** Color for keywords (import, export, const, etc.) */
  keyword: string;
  /** Color for strings */
  string: string;
  /** Color for React components */
  component: string;
}
