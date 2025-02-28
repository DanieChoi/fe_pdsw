// components/ui/CommonCheckBox.tsx
"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommonCheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  color?: string; // 커스텀 컬러 옵션 추가
}

const sizeClasses = {
  xs: "h-3 w-3",
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

const checkIconSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
};

const variantClasses = {
  primary: "border-gray-300 bg-white hover:border-[#5BC2C1]",
  secondary: "border-gray-300 bg-white hover:border-blue-500",
  outline: "border-gray-300 bg-transparent hover:bg-gray-50",
};

export const CommonCheckBox = ({
  checked,
  onChange,
  label,
  disabled = false,
  className = "",
  size = "md",
  variant = "primary",
  color,
}: CommonCheckBoxProps) => {
  // 컬러 스타일을 동적으로 생성
  const getColorStyle = () => {
    if (!color) return {};
    
    if (checked) {
      return {
        backgroundColor: color,
        borderColor: color,
      };
    }
    
    return {};
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center rounded-sm border transition-all duration-200 ease-in-out",
          sizeClasses[size],
          variantClasses[variant],
          checked ? (
            variant === "primary" 
              ? "bg-[#5BC2C1] border-[#5BC2C1]" 
              : variant === "secondary" 
                ? "bg-blue-500 border-blue-500"
                : "bg-gray-700 border-gray-700"
          ) : "",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        )}
        style={getColorStyle()}
        onClick={() => !disabled && onChange(!checked)}
      >
        {checked && (
          <Check
            size={checkIconSizes[size]}
            className="text-white"
            strokeWidth={3}
          />
        )}
      </div>
      {label && (
        <label
          className={cn(
            "ml-2 text-sm select-none",
            disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          )}
          onClick={() => !disabled && onChange(!checked)}
        >
          {label}
        </label>
      )}
    </div>
  );
};