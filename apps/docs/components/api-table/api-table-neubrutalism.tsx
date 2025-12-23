"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@vibe-ui/registry/ui/neubrutalism/table";
import { ApiTableBase } from "./api-table-base";
import { ApiTableProps } from "./api-table-types";

export function ApiTableNeubrutalism({ props, className }: ApiTableProps) {
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
