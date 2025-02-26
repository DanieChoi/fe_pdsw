
// 파일 경로: src/components/SortButtonForCampaign.tsx
"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CommonButton from "@/components/shared/CommonButton";
import { SortAsc, Check } from "lucide-react";
import { SortType } from '@/features/campaignManager/types/typeForSidebar2';

interface SortButtonForCampaignProps {
  onSort?: (type: SortType) => void;
  selectedSort?: SortType;
}

const campaignSortOptions: Array<{ id: any; label: string }> = [
  { id: 'name', label: '이름으로 정렬' },
  { id: 'id', label: '아이디로 정렬' },
];

export function SortButtonForCampaign({ 
  onSort, 
  selectedSort 
}: SortButtonForCampaignProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <CommonButton
          variant="ghost"
          size="sm"
          className="h-6 px-2 text-sm font-normal gap-1 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          정렬
          <SortAsc className="w-4 h-4" />
        </CommonButton>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-1" align="end">
        <div className="flex flex-col">
          {campaignSortOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onSort?.(option.id)}
              className={`flex items-center justify-between text-left px-2 py-1.5 text-xs hover:bg-gray-100 rounded
                ${selectedSort === option.id ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-800'}`}
            >
              {option.label}
              {selectedSort === option.id && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
