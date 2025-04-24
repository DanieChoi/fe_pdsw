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

      // 커서 위치 저장
      const cursorSave = e.target.selectionStart ?? 0;

      // 입력 전에 포맷된 값
      const beforeFormatted = displayValue;
      
      // Remove any non-digit characters
      newValue = newValue.replace(/[^0-9]/g, '');
      
      // Limit to 4 digits
      if (newValue.length > 4) {
        newValue = newValue.substring(0, 4);
      }
      
      // Pass the raw value (without colon) to parent component
      onChange(newValue);

      // setTimeout으로 렌더 후 커서 위치 설정
      setTimeout(() => {
        if (inputRef.current) {
          
          const formatted = (() => {
            if (newValue.length <= 2) {
              return newValue
            };
            return `${newValue.slice(0, 2)}:${newValue.slice(2)}`;
          })(); // (() => {...}) () 함수를 선언하고 즉시 실행하여 결과값을 변수에 할당

          // 입력전 text(beforeFormatted) 의 길이와 입력후 text(formatted)의 길이 비교
          const colonRemoved = beforeFormatted.length > formatted.length;

          // 변경된 포맷 기준 커서 위치 재계산
          let cursorOffset = cursorSave;

          // 예외 상황 처리
          // colon 추가되면서 커서 뒤로 밀림
          if (newValue.length === 3 && cursorSave === 3) {
            cursorOffset++; // ':' 추가되는 위치에서 밀림
          } 

          // colon 제거되면서 커서 보정 (Backspace 등)
          if (newValue.length === 2 && beforeFormatted.includes(':')) {
            if (cursorSave === 3) {
              cursorOffset--;
            }
          }

          // 완전한 4자리 입력 상태에서 3번째 숫자 삭제 시 (00:30 → 00:0)
          if (newValue.length === 3 && colonRemoved && cursorSave >= 3) {
            cursorOffset--;
          }

          inputRef.current.setSelectionRange(cursorOffset, cursorOffset);

        }
      }, 10);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const validationErrorToastId = 'time-validation-error'; // 고유 ID 정의
  
      if (value.length === 4) {
        if (!validateTime(value)) {
          // 동일 ID 토스트가 이미 떠있으면 새로 띄우지 않음
          toast.error("잘못된 시간 형식입니다. 올바른 시간을 입력하세요 (00:00-23:59).", {
            toastId: validationErrorToastId
          });
          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }, 100);
        }
      } else if (value.length > 0) {
        toast.error("잘못된 시간 형식입니다. 올바른 시간을 입력하세요 (00:00-23:59).", {
           toastId: validationErrorToastId // 동일 ID 사용 또는 다른 ID 사용 가능
        });
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 100);
      }
  
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