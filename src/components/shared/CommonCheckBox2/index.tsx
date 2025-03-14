"use client";

import React from 'react';

interface Props {
    checked: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
    title?: string;
    size?: 'sm' | 'md';
}

const CommonCheckBox2 = ({
    checked,
    onChange,
    disabled = false,
    className = "",
    title,
    size = 'sm'
}: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled && onChange) {
            onChange(e.target.checked);
        }
    };

    const sizeClasses = size === 'sm' ? 'h-3 w-3' : 'h-4 w-4';
    
    return (
        <div className={`relative inline-block ${className}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                title={title}
                className={`${sizeClasses} appearance-none rounded border border-gray-300 checked:bg-[#60C3CD] checked:border-transparent focus:outline-none focus:ring-2 focus:ring-[#60C3CD] focus:ring-opacity-40 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
            {checked && (
                <svg
                    className={`absolute left-0 top-0 ${sizeClasses} text-white pointer-events-none`}
                    fill="none"
                    strokeWidth="3"
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
        </div>
    );
};

export default CommonCheckBox2;