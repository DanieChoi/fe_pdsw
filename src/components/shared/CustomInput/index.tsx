// import * as React from "react";
// import { cn } from "@/lib/utils";

// const CustomInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
//   ({ className, type, value, onChange, ...props }, ref) => {
//     const stringValue =
//       typeof value === "number" || typeof value === "string"
//         ? String(value)
//         : "";

//     return (
//       <input
//         type={type}
//         value={stringValue}
//         onChange={onChange}
//         className={cn(
//           "flex h-[26px] w-full rounded-[3px] border border-input bg-white px-[8px] transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-[#aaa] disabled:bg-[#F4F4F4] border-[#ebebeb] text-[#333] text-sm",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );

// CustomInput.displayName = "Input";

// export { CustomInput };

import * as React from "react";
import { cn } from "@/lib/utils";

interface CustomInputProps extends React.ComponentProps<"input"> {
  isPercent?: boolean;
  isPhoneNumber?: boolean;
  onValidPhoneNumber?: (isValid: boolean) => void; // 유효성 알림 콜백
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, type = "text", value, onChange, isPercent, isPhoneNumber, onValidPhoneNumber, ...props }, ref) => {
    const stringValue =
      typeof value === "number" || typeof value === "string"
        ? String(value)
        : "";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;

      if (isPercent) {
        // 1~100 사이의 숫자만
        const numeric = Number(newValue);
        if (!/^\d*$/.test(newValue) || numeric < 1 || numeric > 100) return;
      }

      if (isPhoneNumber) {
        // 숫자만 허용
        newValue = newValue.replace(/\D/g, "");
      }

      onChange?.({ ...e, target: { ...e.target, value: newValue } });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (isPhoneNumber && onValidPhoneNumber) {
        const isValid = /^01[0|1|6|7|8|9][0-9]{7,8}$/.test(e.target.value);
        onValidPhoneNumber(isValid);
      }

      props.onBlur?.(e);
    };

    return (
      <input
        type={type}
        value={stringValue}
        onChange={handleChange}
        onBlur={handleBlur}
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

CustomInput.displayName = "CustomInput";

export { CustomInput };
