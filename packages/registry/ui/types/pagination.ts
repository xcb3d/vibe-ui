import type * as React from "react";

export type PaginationProps = React.ComponentProps<"nav">;
export type PaginationContentProps = React.ComponentProps<"ul">;
export type PaginationItemProps = React.ComponentProps<"li">;

export interface PaginationLinkProps extends React.ComponentProps<"a"> {
  isActive?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
}

export type PaginationPreviousProps = Omit<PaginationLinkProps, "size">;
export type PaginationNextProps = Omit<PaginationLinkProps, "size">;
export type PaginationEllipsisProps = React.ComponentProps<"span">;
