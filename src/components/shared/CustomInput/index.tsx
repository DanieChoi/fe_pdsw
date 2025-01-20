import * as React from "react";
import { cn } from "@/lib/utils";

// CustomInput Props 정의
interface CustomInputProps extends React.ComponentProps<"input"> {
  label?: string; // 추가된 속성
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, type = "text", label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm text-gray-700">
            {label}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            "flex h-7 w-full rounded-[3px] border border-input bg-white px-3 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-[#aaa] disabled:bg-[#F4F4F4] border-[#ebebeb]",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;