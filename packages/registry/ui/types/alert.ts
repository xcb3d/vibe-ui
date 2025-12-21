import type * as React from "react";

/**
 * Alert component props - shared across all themes
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive";
}

export type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
export type AlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
