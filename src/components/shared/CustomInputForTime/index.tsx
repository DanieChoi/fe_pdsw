import * as React from "react";
import { cn } from "@/lib/utils";

interface CustomInputForTimeProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value: string;
  onChange: (value: string) => void;
}

const CustomInputForTime = React.forwardRef<HTMLInputElement, CustomInputForTimeProps>(
  ({ className, value, onChange, ...props }, ref) => {
    // Format the input value for display
    const displayValue = React.useMemo(() => {
      if (!value) return '';
      
      // If value has 1 or 2 digits, show as is
      if (value.length <= 2) {
        return value;
      }
      
      // If value has 3 or 4 digits, format as HH:MM
      const hours = value.substring(0, 2);
      const minutes = value.substring(2);
      return `${hours}:${minutes}`;
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;
      
      // Remove any non-digit characters
      newValue = newValue.replace(/[^0-9]/g, '');
      
      // Limit to 4 digits
      if (newValue.length > 4) {
        newValue = newValue.substring(0, 4);
      }
      
      // Pass the raw value (without colon) to parent component
      onChange(newValue);
    };

    return (
      <input
        type="text"
        className={cn(
          "flex h-[26px] w-full rounded-[3px] border border-input bg-white px-[8px] transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-[#aaa] disabled:bg-[#F4F4F4] border-[#ebebeb] text-[#333] text-sm",
          className
        )}
        ref={ref}
        value={displayValue}
        onChange={handleChange}
        maxLength={5} // 5 characters for format HH:MM
        placeholder="HH:MM"
        {...props}
      />
    );
  }
);

CustomInputForTime.displayName = "CustomInputForTime";

export default CustomInputForTime;