import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type {
  AlertProps,
  AlertTitleProps,
  AlertDescriptionProps,
} from "../types/alert";

/**
 * Neubrutalism Alert
 * Bold borders, hard shadows, vivid colors
 */
const alertVariants = cva(
  [
    "relative w-full rounded-lg px-4 py-3 text-sm",
    "border-2 border-black shadow-[4px_4px_0_black]",
    "[&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7",
    "dark:border-white dark:shadow-[4px_4px_0_white]",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-white text-black [&>svg]:text-black dark:bg-gray-900 dark:text-white dark:[&>svg]:text-white",
        destructive:
          "bg-red-100 text-red-900 [&>svg]:text-red-600 dark:bg-red-900/30 dark:text-red-200 dark:[&>svg]:text-red-400",
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
      className={cn(
        "mb-1 font-bold uppercase tracking-wide leading-none",
        className,
      )}
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
