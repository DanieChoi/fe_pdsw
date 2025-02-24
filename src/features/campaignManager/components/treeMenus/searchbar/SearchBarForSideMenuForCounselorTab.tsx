// src\features\campaignManager\components\treeMenus\searchbar\SearchBarForSideMenuForCounselorTab.tsx
"use client";

import { Search } from 'lucide-react';
import { KeyboardEvent } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
}

export function SearchBarForSideMenuForCounselorTab({ 
  value, 
  onChange, 
  onSearch,
  placeholder = "상담원"
}: SearchBarProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="flex items-center gap-2 px-2 py-1.5 border-b">
      <div className="relative flex-1">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-2 pr-8 py-1 text-sm border rounded focus:outline-none focus:border-[#5BC2C1]"
        />
        <button 
          onClick={onSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <Search size={16} />
        </button>
      </div>
    </div>
  );
}