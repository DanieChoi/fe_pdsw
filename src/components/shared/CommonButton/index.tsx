import React from 'react';

interface CommonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

export const CommonButton: React.FC<CommonButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'default',
  size = 'default',
  fullWidth = false,
  disabled = false,
  className = '', // 기본값 추가
}) => {
  const variantClass = {
    default: 'rounded-[3px] bg-[#56CAD6] text-white text-[13px]',
    destructive: 'bg-red-500 hover:bg-red-600 text-white',
    outline: 'border border-gray-300 text-black',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-black',
    ghost: 'bg-transparent text-black',
    link: 'text-blue-500 underline',
    login: 'w-full h-12 bg-black hover:bg-[#55BEC8] text-white text-sm rounded-none font-16',
    tab:"rounded-none rounded-tl-[3px] rounded-tr-[3px]  bg-[#56CAD6] text-white text-[13px] py-[7px] px-[10px] shadow-none border-t border-l border-r border-[#56CAD6]",
    tabghost:"rounded-none rounded-tl-[3px] rounded-tr-[3px]  bg-transparent text-black text-[13px] py-[7px] px-[10px] shadow-none border-t border-l border-r"
  }[variant];

  const sizeClass = {
    default: 'text-13px py-[3px] px-[6px]',
    sm: 'px-2 py-1 text-xs',
    lg: 'px-6 py-3 text-lg',
    icon: 'p-2',
  }[size];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow ${sizeClass} ${variantClass} ${className} ${
        fullWidth ? 'w-full' : ''
      }`}
    >
      {children}
    </button>
  );
};

export default CommonButton;