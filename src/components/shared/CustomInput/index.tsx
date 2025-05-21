// // src/components/shared/CustomInput.tsx

// "use client";

// import * as React from "react";
// import { cn } from "@/lib/utils";

// interface CustomInputProps extends React.ComponentProps<"input"> {
//   isPercent?: boolean;
//   isPhoneNumber?: boolean;
//   onValidPhoneNumber?: (isValid: boolean) => void;
//   error?: string;
//   resetKey?: any;
// }

// const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
//   (
//     {
//       className,
//       type = "text",
//       value,
//       onChange,
//       onBlur,
//       isPercent,
//       isPhoneNumber,
//       onValidPhoneNumber,
//       error,
//       resetKey,
//       ...props
//     },
//     ref
//   ) => {
//     const inputRef = React.useRef<HTMLInputElement>(null);
//     const combinedRef = useCombinedRefs(ref, inputRef);
//     const [localError, setLocalError] = React.useState<string | undefined>(error);
//     const [previousPhoneValue, setPreviousPhoneValue] = React.useState<string>("");

//     const stringValue =
//       typeof value === "number" || typeof value === "string"
//         ? String(value)
//         : "";

//     React.useEffect(() => {
//       setLocalError(undefined);
//     }, [resetKey]);

//     React.useEffect(() => {
//       if (error !== undefined) {
//         setLocalError(error);
//         if (error && inputRef.current) {
//           inputRef.current.focus();
//         }
//       }
//     }, [error]);

//     const validatePhoneNumber = (phoneNumber: string): boolean => {
//       if (!phoneNumber) return true;
//       return /^01[0|1|6|7|8|9][0-9]{7,8}$/.test(phoneNumber);
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       let newValue = e.target.value;

//       if (isPercent) {
//         if (!/^\d*$/.test(newValue)) {
//           setLocalError("숫자만 입력 가능합니다");
//           return;
//         }
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
//         if (!/^\d*$/.test(newValue)) {
//           setLocalError("숫자만 입력 가능합니다");
//           return;
//         }
//         newValue = newValue.replace(/\D/g, "");
//         setPreviousPhoneValue(newValue);
//         if (newValue.length > 0) {
//           if (newValue.length < 11) {
//             if (localError === "유효하지 않은 전화번호 형식입니다") {
//               setLocalError(undefined);
//             }
//           } else {
//             const isValid = validatePhoneNumber(newValue);
//             if (!isValid) {
//               setLocalError("유효하지 않은 전화번호 형식입니다");
//             } else {
//               setLocalError(undefined);
//             }
//             onValidPhoneNumber?.(isValid);
//           }
//         } else {
//           setLocalError(undefined);
//         }
//       }

//       onChange?.({ ...e, target: { ...e.target, value: newValue } });
//     };

//     const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
//       if (isPhoneNumber) {
//         const phoneNumber = e.target.value;
//         if (phoneNumber !== "") {
//           const isValid = validatePhoneNumber(phoneNumber);
//           onValidPhoneNumber?.(isValid);
//           if (!isValid) {
//             setLocalError("유효하지 않은 전화번호 형식입니다");
//           } else {
//             setLocalError(undefined);
//           }
//         }
//       }
//       if (isPercent && e.target.value === "") {
//         setLocalError("1-100 사이의 값을 입력해주세요");
//       }
//       onBlur?.(e);
//     };

//     React.useEffect(() => {
//       if (isPhoneNumber && stringValue !== previousPhoneValue) {
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
//       <div className="relative">
//         <div className="flex items-center">
//           <input
//             type={type}
//             value={stringValue}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={cn(
//               "flex h-[26px] rounded-[3px] border border-input bg-white px-[8px] transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-[#aaa] disabled:bg-[#F4F4F4] border-[#ebebeb] text-[#333] text-sm w-auto",
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

// function useCombinedRefs<T>(
//   ...refs: Array<React.Ref<T> | null | undefined>
// ): React.RefCallback<T> {
//   return React.useCallback(
//     (element: T) => {
//       refs.forEach((ref) => {
//         if (!ref) return;
//         if (typeof ref === 'function') {
//           ref(element);
//         } else {
//           (ref as React.MutableRefObject<T>).current = element;
//         }
//       });
//     },
//     [refs]
//   );
// }

// CustomInput.displayName = "CustomInput";

// export { CustomInput };

// src/components/shared/CustomInput.tsx

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CustomInputProps extends React.ComponentProps<"input"> {
  /** true면 전체 폭(w-full), false면 내용 크기에 맞춰(w-auto) */
  isFullWidth?: boolean;
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
      isFullWidth = false,
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
              "flex h-[26px] rounded-[3px] border border-input bg-white px-[8px] text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-[#aaa] disabled:bg-[#F4F4F4]",
              isFullWidth ? "flex-1" : "w-auto flex-shrink-0",
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
