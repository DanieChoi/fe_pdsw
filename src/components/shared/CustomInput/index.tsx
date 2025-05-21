// import * as React from "react";
// import { cn } from "@/lib/utils";

// interface CustomInputProps extends React.ComponentProps<"input"> {
//   isPercent?: boolean;
//   isPhoneNumber?: boolean;
//   onValidPhoneNumber?: (isValid: boolean) => void;
//   error?: string; // Error message to display
//   resetKey?: any; // 이 값이 변경되면 에러가 초기화됨
// }

// const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
//   ({ className, type = "text", value, onChange, isPercent, isPhoneNumber, onValidPhoneNumber, error, resetKey, ...props }, ref) => {
//     const inputRef = React.useRef<HTMLInputElement>(null);
//     const combinedRef = useCombinedRefs(ref, inputRef);
//     const [localError, setLocalError] = React.useState<string | undefined>(error);
//     const [previousPhoneValue, setPreviousPhoneValue] = React.useState<string>("");

//     const stringValue =
//       typeof value === "number" || typeof value === "string"
//         ? String(value)
//         : "";

//     // resetKey가 변경될 때마다 에러 초기화
//     React.useEffect(() => {
//       setLocalError(undefined);
//     }, [resetKey]);
    
//     // Update local error when prop changes
//     React.useEffect(() => {
//       if (error !== undefined) {
//         setLocalError(error);
//         // Focus the input when an error is set
//         if (error && inputRef.current) {
//           inputRef.current.focus();
//         }
//       }
//     }, [error]);

//     // 전화번호 유효성 검사 함수
//     const validatePhoneNumber = (phoneNumber: string): boolean => {
//       if (!phoneNumber) return true; // 빈 값은 유효하다고 처리
//       return /^01[0|1|6|7|8|9][0-9]{7,8}$/.test(phoneNumber);
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       let newValue = e.target.value;

//       if (isPercent) {
//         // Allow empty string (for backspace) or digits only
//         if (!/^\d*$/.test(newValue)) {
//           setLocalError("숫자만 입력 가능합니다");
//           return;
//         }
        
//         // Only validate range if not empty
//         if (newValue !== "") {
//           const numeric = Number(newValue);
//           if (numeric < 1 || numeric > 100) {
//             setLocalError("1-100 사이의 값만 입력 가능합니다");
//             return;
//           } else {
//             setLocalError(undefined);
//           }
//         } else {
//           setLocalError(undefined);
//         }
//       }

//       if (isPhoneNumber) {
//         // 숫자만 허용
//         if (!/^\d*$/.test(newValue)) {
//           setLocalError("숫자만 입력 가능합니다");
//           return;
//         }
//         newValue = newValue.replace(/\D/g, "");
        
//         // 이전 전화번호 값 저장
//         setPreviousPhoneValue(newValue);
        
//         // 전화번호 유효성 동적 검사 (입력 중일 때도)
//         if (newValue.length > 0) {
//           // 길이가 11자리 미만이면 아직 입력 중이라고 판단하여 에러 메시지 표시하지 않음
//           if (newValue.length < 11) {
//             // 이전에 잘못된 형식 에러가 있었다면 지우기
//             if (localError === "유효하지 않은 전화번호 형식입니다") {
//               setLocalError(undefined);
//             }
//           } else {
//             // 11자리 이상이면 완전한 검사 수행
//             const isValid = validatePhoneNumber(newValue);
            
//             // 유효성에 따라 에러 메시지 설정/제거
//             if (!isValid) {
//               setLocalError("유효하지 않은 전화번호 형식입니다");
//             } else {
//               setLocalError(undefined);
//             }
            
//             // 콜백이 제공된 경우 호출
//             onValidPhoneNumber?.(isValid);
//           }
//         } else {
//           // 값이 비어있으면 에러 메시지 제거
//           setLocalError(undefined);
//         }
//       }

//       onChange?.({ ...e, target: { ...e.target, value: newValue } });
//     };

//     const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
//       if (isPhoneNumber) {
//         // 전화번호 유효성 검사 - 블러 이벤트에서는 빈 값도 유효하지 않음으로 처리
//         const phoneNumber = e.target.value;
//         if (phoneNumber !== "") {
//           const isValid = validatePhoneNumber(phoneNumber);
          
//           // 콜백이 제공된 경우 호출
//           onValidPhoneNumber?.(isValid);
          
//           // 유효하지 않은 경우 에러 메시지 설정
//           if (!isValid) {
//             setLocalError("유효하지 않은 전화번호 형식입니다");
//           } else {
//             setLocalError(undefined);
//           }
//         }
//       }
      
//       // 퍼센트 값이 비어있는 경우 에러 표시
//       if (isPercent && e.target.value === "") {
//         setLocalError("1-100 사이의 값을 입력해주세요");
//       }

//       props.onBlur?.(e);
//     };

//     // value가 외부에서 변경될 때 검사 (예: 상위 컴포넌트에서 직접 값 설정)
//     React.useEffect(() => {
//       if (isPhoneNumber && stringValue !== previousPhoneValue) {
//         // 전화번호가 바뀌었을 때 검사
//         setPreviousPhoneValue(stringValue);
        
//         if (stringValue.length >= 11) {
//           const isValid = validatePhoneNumber(stringValue);
//           if (isValid && localError === "유효하지 않은 전화번호 형식입니다") {
//             setLocalError(undefined);
//             onValidPhoneNumber?.(true);
//           } else if (!isValid && !localError) {
//             setLocalError("유효하지 않은 전화번호 형식입니다");
//             onValidPhoneNumber?.(false);
//           }
//         } else if (stringValue === "" && localError) {
//           setLocalError(undefined);
//         }
//       }
//     }, [stringValue, isPhoneNumber, localError, onValidPhoneNumber, previousPhoneValue]);

//     return (
//       <div className="relative w-full">
//         <div className="flex items-center">
//           <input
//             type={type}
//             value={stringValue}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={cn(
//               "flex h-[26px] w-full rounded-[3px] border border-input bg-white px-[8px] transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-[#aaa] disabled:bg-[#F4F4F4] border-[#ebebeb] text-[#333] text-sm",
//               localError && "border-red-500",
//               className
//             )}
//             ref={combinedRef}
//             {...props}
//           />
//           {isPercent && <span className="ml-2">%</span>}
//         </div>
//         {localError && (
//           <div className="text-red-500 text-xs mt-1">{localError}</div>
//         )}
//       </div>
//     );
//   }
// );

// // Helper function to combine refs
// function useCombinedRefs<T>(
//   ...refs: Array<React.Ref<T> | null | undefined>
// ): React.RefCallback<T> {
//   return React.useCallback((element: T) => {
//     refs.forEach((ref) => {
//       if (!ref) return;
      
//       if (typeof ref === 'function') {
//         ref(element);
//       } else {
//         (ref as React.MutableRefObject<T>).current = element;
//       }
//     });
//   }, [refs]);
// }

// CustomInput.displayName = "CustomInput";

// export { CustomInput };

// src/components/shared/CustomInput.tsx

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CustomInputProps extends React.ComponentProps<"input"> {
  isPercent?: boolean;
  isPhoneNumber?: boolean;
  onValidPhoneNumber?: (isValid: boolean) => void;
  error?: string;
  resetKey?: any;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      className,
      type = "text",
      value,
      onChange,
      onBlur,
      isPercent,
      isPhoneNumber,
      onValidPhoneNumber,
      error,
      resetKey,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const combinedRef = useCombinedRefs(ref, inputRef);
    const [localError, setLocalError] = React.useState<string | undefined>(error);
    const [previousPhoneValue, setPreviousPhoneValue] = React.useState<string>("");

    const stringValue =
      typeof value === "number" || typeof value === "string"
        ? String(value)
        : "";

    React.useEffect(() => {
      setLocalError(undefined);
    }, [resetKey]);

    React.useEffect(() => {
      if (error !== undefined) {
        setLocalError(error);
        if (error && inputRef.current) {
          inputRef.current.focus();
        }
      }
    }, [error]);

    const validatePhoneNumber = (phoneNumber: string): boolean => {
      if (!phoneNumber) return true;
      return /^01[0|1|6|7|8|9][0-9]{7,8}$/.test(phoneNumber);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;

      if (isPercent) {
        if (!/^\d*$/.test(newValue)) {
          setLocalError("숫자만 입력 가능합니다");
          return;
        }
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
        if (!/^\d*$/.test(newValue)) {
          setLocalError("숫자만 입력 가능합니다");
          return;
        }
        newValue = newValue.replace(/\D/g, "");
        setPreviousPhoneValue(newValue);
        if (newValue.length > 0) {
          if (newValue.length < 11) {
            if (localError === "유효하지 않은 전화번호 형식입니다") {
              setLocalError(undefined);
            }
          } else {
            const isValid = validatePhoneNumber(newValue);
            if (!isValid) {
              setLocalError("유효하지 않은 전화번호 형식입니다");
            } else {
              setLocalError(undefined);
            }
            onValidPhoneNumber?.(isValid);
          }
        } else {
          setLocalError(undefined);
        }
      }

      onChange?.({ ...e, target: { ...e.target, value: newValue } });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (isPhoneNumber) {
        const phoneNumber = e.target.value;
        if (phoneNumber !== "") {
          const isValid = validatePhoneNumber(phoneNumber);
          onValidPhoneNumber?.(isValid);
          if (!isValid) {
            setLocalError("유효하지 않은 전화번호 형식입니다");
          } else {
            setLocalError(undefined);
          }
        }
      }
      if (isPercent && e.target.value === "") {
        setLocalError("1-100 사이의 값을 입력해주세요");
      }
      onBlur?.(e);
    };

    React.useEffect(() => {
      if (isPhoneNumber && stringValue !== previousPhoneValue) {
        setPreviousPhoneValue(stringValue);
        if (stringValue.length >= 11) {
          const isValid = validatePhoneNumber(stringValue);
          if (isValid && localError === "유효하지 않은 전화번호 형식입니다") {
            setLocalError(undefined);
            onValidPhoneNumber?.(true);
          } else if (!isValid && !localError) {
            setLocalError("유효하지 않은 전화번호 형식입니다");
            onValidPhoneNumber?.(false);
          }
        } else if (stringValue === "" && localError) {
          setLocalError(undefined);
        }
      }
    }, [stringValue, isPhoneNumber, localError, onValidPhoneNumber, previousPhoneValue]);

    return (
      <div className="relative">
        <div className="flex items-center">
          <input
            type={type}
            value={stringValue}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn(
              "flex h-[26px] rounded-[3px] border border-input bg-white px-[8px] transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-[#aaa] disabled:bg-[#F4F4F4] border-[#ebebeb] text-[#333] text-sm w-auto",
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

function useCombinedRefs<T>(
  ...refs: Array<React.Ref<T> | null | undefined>
): React.RefCallback<T> {
  return React.useCallback(
    (element: T) => {
      refs.forEach((ref) => {
        if (!ref) return;
        if (typeof ref === 'function') {
          ref(element);
        } else {
          (ref as React.MutableRefObject<T>).current = element;
        }
      });
    },
    [refs]
  );
}

CustomInput.displayName = "CustomInput";

export { CustomInput };
