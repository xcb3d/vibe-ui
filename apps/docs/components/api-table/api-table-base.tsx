"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ApiTableProps } from "./api-table-types";

interface ApiTableComponents {
  Table: React.ComponentType<React.HTMLAttributes<HTMLTableElement>>;
  TableHeader: React.ComponentType<
    React.HTMLAttributes<HTMLTableSectionElement>
  >;
  TableBody: React.ComponentType<React.HTMLAttributes<HTMLTableSectionElement>>;
  TableRow: React.ComponentType<React.HTMLAttributes<HTMLTableRowElement>>;
  TableHead: React.ComponentType<React.HTMLAttributes<HTMLTableCellElement>>;
  TableCell: React.ComponentType<React.HTMLAttributes<HTMLTableCellElement>>;
}

export interface ApiTableBaseProps extends ApiTableProps, ApiTableComponents {}

/**
 * Base component for ApiTable.
 * Accepts themed components via props to avoid duplication across themes.
 */
export function ApiTableBase({
  props,
  className,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
}: ApiTableBaseProps) {
  return (
    <Table className={cn("rounded-lg", className)}>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/4">Prop</TableHead>
          <TableHead className="w-1/4">Type</TableHead>
          <TableHead className="w-1/4">Default</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.map((prop) => (
          <TableRow key={prop.name}>
            <TableCell className="font-mono">{prop.name}</TableCell>
            <TableCell className="font-mono">{prop.type}</TableCell>
            <TableCell className="font-mono">{prop.default || "-"}</TableCell>
            <TableCell>{prop.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
