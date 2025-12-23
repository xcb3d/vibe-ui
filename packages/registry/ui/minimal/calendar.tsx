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
import { getButtonClasses } from "./button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import type { CalendarProps } from "../types/calendar";

/**
 * Minimal Calendar - Clean and simple
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
          className="h-7 w-[70px] text-sm font-medium border-none shadow-none focus:ring-0 px-2"
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
          className="h-7 w-[75px] text-sm font-medium border-none shadow-none focus:ring-0 px-2"
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
  numberOfMonths,
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

  // For multiple months, hide individual nav buttons and use container-level navigation
  const isMultiMonth = numberOfMonths && numberOfMonths > 1;

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      month={displayMonth}
      onMonthChange={handleMonthChange}
      numberOfMonths={numberOfMonths}
      className={cn("p-3", className)}
      classNames={{
        [UI.Months]: cn(
          "relative flex",
          isMultiMonth
            ? "flex-col sm:flex-row gap-4 sm:gap-0"
            : "flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        ),
        [UI.Month]: cn("space-y-4", isMultiMonth && "sm:px-4"),
        [UI.MonthCaption]:
          "flex justify-center pt-1 relative items-center h-7 px-10 z-20",
        [UI.CaptionLabel]: "text-sm font-medium hidden",
        [UI.Nav]: cn(
          isMultiMonth
            ? "absolute inset-x-0 top-0 flex justify-between items-center h-7 z-10 px-1"
            : "absolute inset-x-0 top-0 flex justify-between items-center h-7 z-10 pointer-events-none",
        ),
        [UI.PreviousMonthButton]: cn(
          getButtonClasses("outline"),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          !isMultiMonth && "pointer-events-auto",
        ),
        [UI.NextMonthButton]: cn(
          getButtonClasses("outline"),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          !isMultiMonth && "pointer-events-auto",
        ),
        [UI.MonthGrid]: "w-full border-collapse space-y-1",
        [UI.Weekdays]: "flex",
        [UI.Weekday]:
          "text-gray-500 dark:text-gray-400 rounded-md w-9 font-normal text-[0.8rem]",
        [UI.Week]: "flex w-full mt-2",
        [UI.Day]:
          "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
        [UI.DayButton]:
          "inline-flex items-center justify-center h-9 w-9 p-0 font-normal text-sm rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100",
        [SelectionState.range_end]: "day-range-end",
        [SelectionState.selected]:
          "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-md hover:bg-zinc-800 dark:hover:bg-gray-100 focus:bg-zinc-900 focus:text-white dark:focus:bg-white dark:focus:text-zinc-900",
        [SelectionState.range_middle]:
          "aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-foreground rounded-none",
        [DayFlag.today]:
          "bg-gray-100 dark:bg-gray-800 text-foreground rounded-md",
        [DayFlag.outside]:
          "day-outside text-gray-400 dark:text-gray-500 aria-selected:text-gray-400 dark:aria-selected:text-gray-500",
        [DayFlag.disabled]: "text-gray-400 dark:text-gray-500 opacity-50",
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
