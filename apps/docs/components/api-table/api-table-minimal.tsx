"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@vibe-ui/registry/ui/minimal/table";
import { ApiTableBase } from "./api-table-base";
import { ApiTableProps } from "./api-table-types";

export function ApiTableMinimal({ props, className }: ApiTableProps) {
  return (
    <ApiTableBase
      props={props}
      className={className}
      Table={Table}
      TableHeader={TableHeader}
      TableBody={TableBody}
      TableRow={TableRow}
      TableHead={TableHead}
      TableCell={TableCell}
    />
  );
}
