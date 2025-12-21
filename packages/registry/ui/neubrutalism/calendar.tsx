"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  DayPicker,
  DayFlag,
  SelectionState,
  UI,
  type MonthCaptionProps,
} from "react-day-picker";
import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import type { CalendarProps } from "../types/calendar";

/**
 * Neubrutalism Calendar - Bold borders with playful styling
 */
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface MonthCaptionDropdownProps extends MonthCaptionProps {
  onMonthChange?: (date: Date) => void;
}

function MonthCaptionDropdown({
  calendarMonth,
  onMonthChange,
}: MonthCaptionDropdownProps) {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 100;
  const endYear = currentYear + 10;
  const displayMonth = calendarMonth.date;

  const years = React.useMemo(() => {
    const result: number[] = [];
    for (let year = startYear; year <= endYear; year++) {
      result.push(year);
    }
    return result;
  }, [startYear, endYear]);

  const handleMonthChange = (value: string) => {
    const newMonth = parseInt(value, 10);
    const newDate = new Date(displayMonth);
    newDate.setMonth(newMonth);
    onMonthChange?.(newDate);
  };

  const handleYearChange = (value: string) => {
    const newYear = parseInt(value, 10);
    const newDate = new Date(displayMonth);
    newDate.setFullYear(newYear);
    onMonthChange?.(newDate);
  };

  return (
    <div
      className="flex items-center justify-center gap-1"
      onClick={(e) => e.stopPropagation()}
    >
      <Select
        value={displayMonth.getMonth().toString()}
        onValueChange={handleMonthChange}
      >
        <SelectTrigger
          className="h-7 w-[70px] text-sm font-bold border-none shadow-none focus:ring-0 px-2"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent side="bottom" avoidCollisions={false}>
          {MONTHS.map((month, index) => (
            <SelectItem key={month} value={index.toString()}>
              {month}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={displayMonth.getFullYear().toString()}
        onValueChange={handleYearChange}
      >
        <SelectTrigger
          className="h-7 w-[75px] text-sm font-bold border-none shadow-none focus:ring-0 px-2"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent
          side="bottom"
          avoidCollisions={false}
          className="max-h-[200px]"
        >
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  month,
  onMonthChange,
  ...props
}: CalendarProps) {
  // Internal month state for uncontrolled mode
  const [internalMonth, setInternalMonth] = React.useState<Date>(
    month ?? new Date(),
  );

  // Use controlled month if provided, otherwise use internal state
  const displayMonth = month ?? internalMonth;

  const handleMonthChange = React.useCallback(
    (newMonth: Date) => {
      if (onMonthChange) {
        onMonthChange(newMonth);
      } else {
        setInternalMonth(newMonth);
      }
    },
    [onMonthChange],
  );

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      month={displayMonth}
      onMonthChange={handleMonthChange}
      className={cn("p-3", className)}
      classNames={{
        [UI.Months]:
          "relative flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        [UI.Month]: "space-y-4",
        [UI.MonthCaption]:
          "flex justify-center pt-1 relative items-center h-7 px-10 z-20",
        [UI.CaptionLabel]: "text-sm font-bold uppercase hidden",
        [UI.Nav]:
          "absolute inset-x-0 top-0 flex justify-between items-center h-7 z-10 pointer-events-none",
        [UI.PreviousMonthButton]: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 pointer-events-auto",
        ),
        [UI.NextMonthButton]: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 pointer-events-auto",
        ),
        [UI.MonthGrid]: "w-full border-collapse space-y-1",
        [UI.Weekdays]: "flex",
        [UI.Weekday]:
          "text-muted-foreground rounded-md w-9 font-bold text-[0.8rem] uppercase",
        [UI.Week]: "flex w-full mt-2",
        [UI.Day]:
          "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
        [UI.DayButton]:
          "inline-flex items-center justify-center h-9 w-9 p-0 font-medium text-sm transition-colors hover:bg-yellow-100 dark:hover:bg-yellow-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100",
        [SelectionState.range_end]: "day-range-end",
        [SelectionState.selected]:
          "bg-primary text-primary-foreground border-2 border-black dark:border-white hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        [SelectionState.range_middle]:
          "aria-selected:bg-yellow-100 dark:aria-selected:bg-yellow-900/30 aria-selected:text-foreground",
        [DayFlag.today]:
          "bg-yellow-200 dark:bg-yellow-900/50 text-foreground font-bold",
        [DayFlag.outside]:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        [DayFlag.disabled]: "text-muted-foreground opacity-50",
        [DayFlag.hidden]: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight;
          return <Icon className="h-4 w-4" />;
        },
        MonthCaption: (captionProps) => (
          <MonthCaptionDropdown
            {...captionProps}
            onMonthChange={handleMonthChange}
          />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
