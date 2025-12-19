# Researcher Report: Missing Core Components Analysis (Vibe UI vs shadcn/ui)

Date: 2025-12-20
Topic: Component Library Gap Analysis

## Executive Summary

Vibe UI currently implements 45 components, covering the vast majority of shadcn/ui's core offerings. However, several fundamental UI primitives and utility components are missing that would enhance the library's utility for generic application development.

## Comparison Methodology

- **Current Vibe UI Stack**: 45 components (Accordion, Alert, Alert-Dialog, etc.)
- **shadcn/ui Baseline**: Latest official component list (2025).
- **Exclusion Criteria**: Application patterns (Sidebar, Data Table), heavy visualization (Charts), and complex combinations.

## Missing Core Components

### 1. Combobox

- **Description**: An autocomplete input combined with a command palette. Essential for selecting from long lists or searching options.
- **Dependencies**: `@radix-ui/react-popover`, `cmdk`
- **Use Case**: Searchable selects, tag selection, command palettes.

### 2. Toast

- **Description**: Temporary notifications that appear at the edge of the screen.
- **Dependencies**: `@radix-ui/react-toast`
- **Note**: Vibe UI has `sonner`, which is a popular alternative, but shadcn/ui's native `toast` (built on Radix) offers a different architectural pattern (portal-based).

### 3. Kbd (Keyboard Key)

- **Description**: A styled component for displaying keyboard shortcuts or key commands.
- **Dependencies**: None (CSS/Tailwind)
- **Use Case**: Documentation, command palette shortcuts, UI tooltips.

### 4. Typography

- **Description**: Standardized styles for headings (H1-H4), paragraphs, blockquotes, and inline code.
- **Dependencies**: None
- **Use Case**: Ensuring consistent text hierarchy across the application.

### 5. Spinner / Loading

- **Description**: A visual indicator for indeterminate loading states.
- **Dependencies**: None (SVG + CSS Animation)
- **Use Case**: Button loading states, data fetching placeholders.

### 6. Empty State

- **Description**: A placeholder component for when no data is available.
- **Dependencies**: None
- **Use Case**: Lists, tables, or search results with zero items.

### 7. Native Select

- **Description**: A styled wrapper for the native HTML `<select>` element.
- **Dependencies**: None
- **Use Case**: Performance-critical forms or mobile-first interfaces where Radix's custom dropdown might be overkill.

## Summary Table

| Component         | Category     | Complexity | Priority | Dependencies            |
| :---------------- | :----------- | :--------- | :------- | :---------------------- |
| **Combobox**      | Form         | High       | High     | `cmdk`, Popover         |
| **Toast**         | Feedback     | Medium     | Medium   | `@radix-ui/react-toast` |
| **Kbd**           | Utility      | Low        | Low      | -                       |
| **Typography**    | Core         | Low        | Medium   | -                       |
| **Spinner**       | Feedback     | Low        | High     | -                       |
| **Empty State**   | Data Display | Low        | Medium   | -                       |
| **Native Select** | Form         | Low        | Low      | -                       |

## Unresolved Questions

1. Should Vibe UI implement `Toast` if `Sonner` is already present? (shadcn/ui provides both as options).
2. For `Combobox`, should we follow the shadcn/ui pattern of combining `Popover` + `Command` or create a dedicated primitive?

## Sources

- [shadcn/ui Components](https://ui.shadcn.com/docs/components)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
