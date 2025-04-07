// import * as React from "react"

// import { cn } from "@/lib/utils"

// const CustomInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
//   ({ className, type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         className={cn(
//           "flex h-[26px] w-full rounded-[3px] border border-input bg-white px-[8px] transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-[#aaa] disabled:bg-[#F4F4F4] border-[#ebebeb] text-[#333] text-sm",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// CustomInput.displayName = "Input"

// export { CustomInput }

import * as React from "react";
import { cn } from "@/lib/utils";
import { Search, Plus, Minus, ChevronUp, ChevronDown } from "lucide-react";
import * as Primitive from "@radix-ui/react-primitive";

// 기본 입력 필드 컴포넌트
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    hasRightElement?: boolean;
  }
>(({ className, hasRightElement, ...props }, ref) => {
  return (
    <input
      className={cn(
        "flex h-[26px] w-full rounded-[3px] border border-input bg-white px-[8px] transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-[#aaa] disabled:bg-[#F4F4F4] border-[#ebebeb] text-[#333] text-sm",
        hasRightElement && "pr-9",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

// 입력 필드 아이콘 버튼
const InputIcon = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: "search" | "plus";
  }
>(({ icon, className, ...props }, ref) => {
  return (
    <button
      type="button"
      className={cn(
        "absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-100 p-1 rounded-full text-gray-500",
        className
      )}
      ref={ref}
      {...props}
    >
      {icon === "search" && <Search size={16} />}
      {icon === "plus" && <Plus size={16} />}
    </button>
  );
});
InputIcon.displayName = "InputIcon";

// 숫자 입력 컨트롤
const NumberInputControls = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    onIncrement?: () => void;
    onDecrement?: () => void;
  }
>(({ onIncrement, onDecrement, className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "absolute right-0 top-0 bottom-0 flex flex-col h-full justify-center gap-[1px]",
        className
      )}
      ref={ref}
      {...props}
    >
      <button
        type="button"
        className="w-6 h-[12px] flex items-center justify-center text-xs text-gray-600 border border-gray-300 rounded-t-sm bg-gray-50 hover:bg-gray-100"
        onClick={onIncrement}
        tabIndex={-1}
      >
        <ChevronUp size={12} />
      </button>
      <button
        type="button"
        className="w-6 h-[12px] flex items-center justify-center text-xs text-gray-600 border border-t-0 border-gray-300 rounded-b-sm bg-gray-50 hover:bg-gray-100"
        onClick={onDecrement}
        tabIndex={-1}
      >
        <ChevronDown size={12} />
      </button>
    </div>
  );
});
NumberInputControls.displayName = "NumberInputControls";

// 메인 CustomInput 컴포넌트
const CustomInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    icon?: "search" | "plus" | null;
    onIconClick?: () => void;
  }
>(({ className, type, min, max, step = 1, icon, onIconClick, ...props }, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState<string>(
    props.defaultValue?.toString() || props.value?.toString() || ""
  );

  // 값 변경 시 내부 상태 업데이트
  React.useEffect(() => {
    if (props.value !== undefined) {
      setValue(props.value.toString());
    }
  }, [props.value]);

  // 백스페이스 키 이벤트 핸들러
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 숫자 타입일 때만 특별 처리
    if (type === "number" && e.key === "Backspace") {
      e.preventDefault(); // 기본 동작 방지

      const currentValue = value;
      if (currentValue.length > 0) {
        // 백스페이스로 마지막 문자 삭제
        const newValue = currentValue.slice(0, -1);

        // 값 업데이트
        setValue(newValue);

        // onChange 이벤트 발생
        if (props.onChange && inputRef.current) {
          inputRef.current.value = newValue;
          const changeEvent = {
            target: inputRef.current,
            currentTarget: inputRef.current,
          } as React.ChangeEvent<HTMLInputElement>;
          props.onChange(changeEvent);
        }
      }
    }

    // 기존 onKeyDown이 있다면 호출
    if (props.onKeyDown) {
      props.onKeyDown(e);
    }
  };

  // 일반적인 change 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (props.onChange) {
      props.onChange(e);
    }
  };

  // 값 증가 함수
  const increment = () => {
    if (inputRef.current) {
      const currentValue = parseFloat(value) || 0;
      const stepValue = parseFloat(step.toString()) || 1;
      const maxValue = max !== undefined ? parseFloat(max.toString()) : Infinity;

      let newValue = currentValue + stepValue;
      if (newValue > maxValue) newValue = maxValue;

      const newValueStr = newValue.toString();
      setValue(newValueStr);

      // onChange 이벤트 호출
      if (props.onChange) {
        inputRef.current.value = newValueStr;
        const changeEvent = {
          target: inputRef.current,
          currentTarget: inputRef.current,
        } as React.ChangeEvent<HTMLInputElement>;
        props.onChange(changeEvent);
      }
    }
  };

  // 값 감소 함수
  const decrement = () => {
    if (inputRef.current) {
      const currentValue = parseFloat(value) || 0;
      const stepValue = parseFloat(step.toString()) || 1;
      const minValue = min !== undefined ? parseFloat(min.toString()) : -Infinity;

      let newValue = currentValue - stepValue;
      if (newValue < minValue) newValue = minValue;

      const newValueStr = newValue.toString();
      setValue(newValueStr);

      // onChange 이벤트 호출
      if (props.onChange) {
        inputRef.current.value = newValueStr;
        const changeEvent = {
          target: inputRef.current,
          currentTarget: inputRef.current,
        } as React.ChangeEvent<HTMLInputElement>;
        props.onChange(changeEvent);
      }
    }
  };

  const isNumberType = type === "number";
  const hasIcon = icon !== undefined && icon !== null;

  return (
    <div className="relative w-full">
      <Input
        {...props}
        type={isNumberType ? "text" : type}
        inputMode={isNumberType ? "numeric" : undefined}
        pattern={isNumberType ? "[0-9]*\\.?[0-9]*" : undefined}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={value}
        className={className}
        hasRightElement={isNumberType || hasIcon}
        ref={(node) => {
          inputRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
      />
      
      {isNumberType && (
        <NumberInputControls
          onIncrement={increment}
          onDecrement={decrement}
        />
      )}
      
      {hasIcon && !isNumberType && (
        <InputIcon
          icon={icon}
          onClick={onIconClick}
        />
      )}
    </div>
  );
});

CustomInput.displayName = "CustomInput";

export { CustomInput };