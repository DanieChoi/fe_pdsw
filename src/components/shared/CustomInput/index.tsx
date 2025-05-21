import * as React from "react";
import { cn } from "@/lib/utils";

interface CustomInputProps extends React.ComponentProps<"input"> {
  isPercent?: boolean;
  isPhoneNumber?: boolean;
  onValidPhoneNumber?: (isValid: boolean) => void;
  error?: string; // Error message to display
  resetKey?: any; // 이 값이 변경되면 에러가 초기화됨
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, type = "text", value, onChange, isPercent, isPhoneNumber, onValidPhoneNumber, error, resetKey, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const combinedRef = useCombinedRefs(ref, inputRef);
    const [localError, setLocalError] = React.useState<string | undefined>(error);

    const stringValue =
      typeof value === "number" || typeof value === "string"
        ? String(value)
        : "";

    // resetKey가 변경될 때마다 에러 초기화
    React.useEffect(() => {
      setLocalError(undefined);
    }, [resetKey]);
    
    // Update local error when prop changes
    React.useEffect(() => {
      if (error !== undefined) {
        setLocalError(error);
        // Focus the input when an error is set
        if (error && inputRef.current) {
          inputRef.current.focus();
        }
      }
    }, [error]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;

      if (isPercent) {
        // Allow empty string (for backspace) or digits only
        if (!/^\d*$/.test(newValue)) {
          setLocalError("숫자만 입력 가능합니다");
          return;
        }
        
        // Only validate range if not empty
        if (newValue !== "") {
          const numeric = Number(newValue);
          if (numeric < 1 || numeric > 100) {
            setLocalError("1-100 사이의 값만 입력 가능합니다");
            return;
          } else {
            setLocalError(undefined);
          }
        } else {
          setLocalError(undefined);
        }
      }

      if (isPhoneNumber) {
        // 숫자만 허용
        if (!/^\d*$/.test(newValue)) {
          setLocalError("숫자만 입력 가능합니다");
          return;
        }
        newValue = newValue.replace(/\D/g, "");
        
        // 실시간으로 전화번호 형식 검사 (길이가 11자리 이상일 때)
        if (newValue.length >= 11) {
          const isValid = /^01[0|1|6|7|8|9][0-9]{7,8}$/.test(newValue);
          if (!isValid) {
            setLocalError("유효하지 않은 전화번호 형식입니다");
          } else {
            setLocalError(undefined);
          }
          
          // 콜백이 제공된 경우 호출
          onValidPhoneNumber?.(isValid);
        }
      }

      onChange?.({ ...e, target: { ...e.target, value: newValue } });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (isPhoneNumber) {
        // 전화번호 유효성 검사 - onValidPhoneNumber 존재 여부와 관계없이 검사
        const phoneNumber = e.target.value;
        if (phoneNumber && phoneNumber !== "") {
          const isValid = /^01[0|1|6|7|8|9][0-9]{7,8}$/.test(phoneNumber);
          
          // 콜백이 제공된 경우 호출
          onValidPhoneNumber?.(isValid);
          
          // 유효하지 않은 경우 에러 메시지 설정
          if (!isValid) {
            setLocalError("유효하지 않은 전화번호 형식입니다");
          } else {
            setLocalError(undefined);
          }
        }
      }
      
      // 퍼센트 값이 비어있는 경우 에러 표시
      if (isPercent && e.target.value === "") {
        setLocalError("1-100 사이의 값을 입력해주세요");
      }

      props.onBlur?.(e);
    };

    return (
      <div className="relative w-full">
        <div className="flex items-center">
          <input
            type={type}
            value={stringValue}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(
              "flex h-[26px] w-full rounded-[3px] border border-input bg-white px-[8px] transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-[#aaa] disabled:bg-[#F4F4F4] border-[#ebebeb] text-[#333] text-sm",
              localError && "border-red-500",
              className
            )}
            ref={combinedRef}
            {...props}
          />
          {isPercent && <span className="ml-2">%</span>}
        </div>
        {localError && (
          <div className="text-red-500 text-xs mt-1">{localError}</div>
        )}
      </div>
    );
  }
);

// Helper function to combine refs
function useCombinedRefs<T>(
  ...refs: Array<React.Ref<T> | null | undefined>
): React.RefCallback<T> {
  return React.useCallback((element: T) => {
    refs.forEach((ref) => {
      if (!ref) return;
      
      if (typeof ref === 'function') {
        ref(element);
      } else {
        (ref as React.MutableRefObject<T>).current = element;
      }
    });
  }, [refs]);
}

CustomInput.displayName = "CustomInput";

export { CustomInput };