import * as React from "react";
import { cn } from "@/lib/utils";

const CustomInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, value, onChange, ...props }, ref) => {
    const stringValue =
      typeof value === "number" || typeof value === "string"
        ? String(value)
        : "";

    return (
      <input
        type={type}
        value={stringValue}
        onChange={onChange}
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

CustomInput.displayName = "Input";

export { CustomInput };
