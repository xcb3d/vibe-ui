import type * as React from "react";
import type { OTPInput } from "input-otp";

export type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput>;
export type InputOTPGroupProps = React.ComponentPropsWithoutRef<"div">;

export type InputOTPSlotProps = React.ComponentPropsWithoutRef<"div"> & {
  index: number;
};

export type InputOTPSeparatorProps = React.ComponentPropsWithoutRef<"div">;
