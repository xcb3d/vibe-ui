import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type {
  AlertProps,
  AlertTitleProps,
  AlertDescriptionProps,
} from "../types/alert";

/**
 * Minimal Alert
 * Clean, subtle borders, simple colors
 */
const alertVariants = cva(
  [
    "relative w-full rounded-lg border px-4 py-3 text-sm",
    "[&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-white text-zinc-900 border-gray-200 [&>svg]:text-zinc-900 dark:bg-zinc-900 dark:text-white dark:border-gray-700 dark:[&>svg]:text-white",
        destructive:
          "bg-red-50 text-red-800 border-red-200 [&>svg]:text-red-600 dark:bg-red-950 dark:text-red-200 dark:border-red-800 dark:[&>svg]:text-red-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  ),
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
