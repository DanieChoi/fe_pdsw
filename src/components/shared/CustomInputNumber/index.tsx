import * as React from "react";
import { cn } from "@/lib/utils";

interface CustomInputNumberProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type"> {
  value: string;
  onChange: (value: string) => void;
}

const CustomInputNumber = React.forwardRef<HTMLInputElement, CustomInputNumberProps>(
  ({ className, value, onChange, ...props }, ref) => {
    return (
      <input
        inputMode="numeric"
        pattern="[0-9]*"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "flex h-[26px] w-full rounded-[3px] border border-input bg-white px-[8px] transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-[#aaa] disabled:bg-[#F4F4F4] border-[#ebebeb] text-[#333] text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

CustomInputNumber.displayName = "CustomInputNumber";

export { CustomInputNumber };
