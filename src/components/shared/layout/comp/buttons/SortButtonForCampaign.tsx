"use client";

import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CommonButton from "@/components/shared/CommonButton";
import { Check, ArrowUp, ArrowDown } from "lucide-react";
import { SortType, SortDirection, SortOption } from '@/store/storeForSideBarCampaignSort';
import Image from 'next/image';

interface SortButtonForCampaignProps {
  onSort?: (option: SortOption) => void;
  selectedSort?: SortOption;
}

const campaignSortOptions: Array<{ id: SortType; label: string }> = [
  { id: 'name', label: '이름순' },
  { id: 'id', label: '아이디순' },
];

export function SortButtonForCampaign({ 
  onSort, 
  selectedSort 
}: SortButtonForCampaignProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  // Handle sort type selection (clicking the row)
  const handleSortSelect = (sortType: SortType) => {
    if (selectedSort?.type === sortType) {
      // Toggle direction if same type is selected
      const newDirection: SortDirection = selectedSort.direction === 'asc' ? 'desc' : 'asc';
      onSort?.({ type: sortType, direction: newDirection });
    } else {
      // Default to ascending for new sort type
      onSort?.({ type: sortType, direction: 'asc' });
    }
    setIsOpen(false);
  };

  // Handle direction selection (prevent event bubbling)
  const handleDirectionSelect = (sortType: SortType, direction: SortDirection, event: React.MouseEvent) => {
    event.stopPropagation();
    onSort?.({ type: sortType, direction });
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <CommonButton 
          variant="ghost" 
          size="sm" 
          className="text-xs font-normal gap-[2px] hover:bg-[transparent] text-[#888] !p-0"
        >
          정렬
          <Image 
            src={`/tree-menu/array.png`} 
            alt={`정렬`} 
            width={9} 
            height={10} 
          />
        </CommonButton>
      </PopoverTrigger>
      <PopoverContent className="w-auto min-w-[150px] p-0 py-[10px] px-[12px] rounded-[3px] border border-[#333]" align="end">
        <div className="">
          {campaignSortOptions.map((option) => (
            <div
              key={option.id}
              className="flex items-center hover:bg-[#F4F6F9] cursor-pointer rounded-[3px] px-[6px] py-[4px]"
              onClick={() => handleSortSelect(option.id)}
            >
              <div className="flex-1 text-sm">{option.label}</div>
              <div className="flex gap-1">
                <button
                  className={`p-1 rounded ${
                    selectedSort?.type === option.id && selectedSort?.direction === 'asc'
                      ? 'bg-[#F4F6F9] text-[#333]'
                      : 'text-gray-400 hover:text-[#333]'
                  }`}
                  onClick={(e) => handleDirectionSelect(option.id, 'asc', e)}
                >
                  <ArrowUp className="h-3.5 w-3.5" />
                </button>
                <button
                  className={`p-1 rounded ${
                    selectedSort?.type === option.id && selectedSort?.direction === 'desc'
                      ? 'bg-[#F4F6F9] text-[#333]'
                      : 'text-gray-400 hover:text-[#333]'
                  }`}
                  onClick={(e) => handleDirectionSelect(option.id, 'desc', e)}
                >
                  <ArrowDown className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}