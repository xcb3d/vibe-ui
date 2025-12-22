"use client";

import { cn } from "@/lib/utils";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@vibe-ui/registry/ui/neubrutalism/table";
import { ApiTableProps } from "./api-table-types";

export function ApiTableNeubrutalism({ props, className }: ApiTableProps) {
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
          <TableRow key={prop.name} className="group">
            <TableCell className="font-mono text-accent font-bold">
              {prop.name}
            </TableCell>
            <TableCell className="text-muted-foreground font-mono">
              {prop.type}
            </TableCell>
            <TableCell className="text-foreground font-mono">
              {prop.default || "-"}
            </TableCell>
            <TableCell className="text-muted-foreground group-hover:text-foreground transition-colors">
              {prop.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
