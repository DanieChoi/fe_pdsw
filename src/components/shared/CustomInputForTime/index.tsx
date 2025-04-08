import * as React from "react";
import { cn } from "@/lib/utils";
import { toast } from "react-toastify";

interface CustomInputForTimeProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value: string;
  onChange: (value: string) => void;
}

const CustomInputForTime = React.forwardRef<HTMLInputElement, CustomInputForTimeProps>(
  ({ className, value, onChange, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    // Create a combined ref that works with both the forwarded ref and our internal ref
    const combinedRef = (node: HTMLInputElement) => {
      // Update our internal ref
      inputRef.current = node;
      // Forward the ref if it exists
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

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

    const validateTime = (timeStr: string): boolean => {
      if (timeStr.length !== 4) return false;
      
      const hours = parseInt(timeStr.substring(0, 2), 10);
      const minutes = parseInt(timeStr.substring(2), 10);
      
      return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
    };

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

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      // When input loses focus, validate the time if it has 4 digits
      if (value.length === 4) {
        if (!validateTime(value)) {
          toast.error("잘못된 시간 형식입니다. 올바른 시간을 입력하세요 (00:00-23:59).");
          // Focus back on the input
          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }, 100);
        }
      } else if (value.length > 0) {
        // If user entered something but not complete
        toast.error("Please enter a complete time in HH:MM format.");
        // Focus back on the input
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 100);
      }
      
      // Call the original onBlur if provided
      if (props.onBlur) {
        props.onBlur(e);
      }
    };

    return (
      <input
        type="text"
        className={cn(
          "flex h-[26px] w-full rounded-[3px] border border-input bg-white px-[8px] transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-[#aaa] disabled:bg-[#F4F4F4] border-[#ebebeb] text-[#333] text-sm",
          className
        )}
        ref={combinedRef}
        value={displayValue}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={5} // 5 characters for format HH:MM
        placeholder="HH:MM"
        {...props}
      />
    );
  }
);

CustomInputForTime.displayName = "CustomInputForTime";

export default CustomInputForTime;