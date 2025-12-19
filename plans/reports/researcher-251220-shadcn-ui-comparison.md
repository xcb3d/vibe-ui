# Shadcn/UI Component Comparison Report

Date: 2025-12-20
Topic: Missing Components Analysis (Vibe UI vs. Shadcn/UI)

## Executive Summary

Vibe UI currently implements 38 core components. Comparing this with the Shadcn/UI (2025 version), several high-value components are missing. The following list identifies 12 prioritized components to enhance the library's utility for enterprise and modern web applications.

## Prioritized Missing Components

1.  **Sidebar**
    - **Description:** A customizable, mobile-friendly navigation sidebar. Foundational for dashboards and complex layouts.
    - **Priority:** High (Critical for app structure).

2.  **Chart**
    - **Description:** Beautiful, accessible charts built on top of Recharts. Includes support for Line, Bar, Area, Pie charts, etc.
    - **Priority:** High (Data visualization is a core requirement for SaaS).

3.  **Data Table**
    - **Description:** A powerful table implementation using TanStack Table, featuring sorting, filtering, and pagination.
    - **Priority:** High (Enterprise-grade data management).

4.  **Input OTP**
    - **Description:** An accessible one-time password input component with support for copy-paste and grouping.
    - **Priority:** High (Standard for modern authentication/2FA).

5.  **Carousel**
    - **Description:** A motion-capable carousel built on Embla Carousel.
    - **Priority:** Medium (Marketing and gallery use cases).

6.  **Combobox**
    - **Description:** An autocomplete/searchable select component. Better UX for long lists than a standard Select.
    - **Priority:** Medium (Standard for large datasets).

7.  **Drawer**
    - **Description:** A bottom-anchored panel, often used for mobile navigation or actions.
    - **Priority:** Medium (Mobile-first UX).

8.  **Context Menu**
    - **Description:** A menu that appears on right-click, providing contextual actions.
    - **Priority:** Medium (Power-user/productivity tools).

9.  **Resizable**
    - **Description:** Accessible resizable panels (split views).
    - **Priority:** Medium (Dashboard and editor layouts).

10. **Menubar**
    - **Description:** A horizontal menu bar usually found at the top of desktop applications.
    - **Priority:** Low (Specific to desktop-style web apps).

11. **Hover Card**
    - **Description:** For displaying rich content/previews when hovering over a link or trigger.
    - **Priority:** Low (Progressive disclosure).

12. **Aspect Ratio**
    - **Description:** A component to maintain specific dimensions for images/videos.
    - **Priority:** Low (Layout utility).

## Comparison Summary

| Feature              | Vibe UI     | Shadcn/UI (2025) | Status                 |
| :------------------- | :---------- | :--------------- | :--------------------- |
| **Total Components** | 38          | ~50+             | Gap: ~12+              |
| **Auth Support**     | Input/Label | Input OTP        | Missing OTP            |
| **Data Viz**         | None        | Recharts-based   | Missing Charts         |
| **Enterprise**       | Table       | Data Table       | Missing Advanced Table |

## Unresolved Questions

1. Should Vibe UI adopt the same peer dependencies as Shadcn/UI (e.g., `embla-carousel-react`, `recharts`, `vaul`)?
2. Does the project prefer "Data Table" as a standalone component or as a documented implementation pattern using existing "Table" components?

## Sources

- [Shadcn/UI Official Documentation](https://ui.shadcn.com/docs/components)
- [Awesome Shadcn/UI](https://github.com/birobirobiro/awesome-shadcn-ui)
