"use client";

import React, { useRef, useEffect } from 'react';

interface Props {
    checked: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
    title?: string;
    size?: 'sm' | 'md';
    indeterminate?: boolean;
}

const CommonCheckBox2 = ({
    checked,
    onChange,
    disabled = false,
    className = "",
    title,
    size = 'sm',
    indeterminate = false
}: Props) => {
    const checkboxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (checkboxRef.current) {
            checkboxRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled && onChange) {
            onChange(e.target.checked);
        }
    };

    // 크기 클래스를 더 크게 설정
    const sizeClasses = size === 'sm' ? 'h-5 w-5' : 'h-6 w-6';
    
    return (
        <div className={`relative inline-block ${className}`}>
            <input
                ref={checkboxRef}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                title={title}
                className={`${sizeClasses} appearance-none rounded border-2 border-gray-300 checked:bg-[#4a90e2] checked:border-transparent focus:outline-none focus:ring-0 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
            {checked && !indeterminate && (
                <svg
                    className={`absolute left-0 top-0 ${sizeClasses} text-white pointer-events-none`}
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {indeterminate && (
                <svg
                    className={`absolute left-0 top-0 ${sizeClasses} text-white pointer-events-none`}
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M5 12h14"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </div>
    );
};

export default CommonCheckBox2;