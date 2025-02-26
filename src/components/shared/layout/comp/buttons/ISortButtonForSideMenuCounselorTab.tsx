"use client";

import React from 'react';
import { SortAsc, ArrowUp, ArrowDown } from "lucide-react";
import CommonButton from '@/components/shared/CommonButton';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";

// 정렬 타입 정의
type SortType = 'name' | 'id';
type SortDirection = 'asc' | 'desc';

export interface SortOption {
  type: SortType;
  direction: SortDirection;
}

const ISortButtonForSideMenuCounselorTab = () => {
  const { sortOption, setSortOption } = useCounselorFilterStore();
  const [isSortOpen, setIsSortOpen] = React.useState(false);

  // 정렬 옵션 선택 처리 (클릭 시, 같은 옵션이면 방향 토글)
  const handleSortSelect = (sortType: SortType) => {
    if (sortOption.type === sortType) {
      const newDirection: SortDirection = sortOption.direction === 'asc' ? 'desc' : 'asc';
      setSortOption({ type: sortType, direction: newDirection });
    } else {
      setSortOption({ type: sortType, direction: 'asc' });
    }
    setIsSortOpen(false);
  };

  // 정렬 방향 직접 선택 (이벤트 버블링 방지)
  const handleSortDirectionSelect = (sortType: SortType, direction: SortDirection, event: React.MouseEvent) => {
    event.stopPropagation();
    setSortOption({ type: sortType, direction });
    setIsSortOpen(false);
  };

  return (
    <Popover open={isSortOpen} onOpenChange={setIsSortOpen}>
      <PopoverTrigger asChild>
        <CommonButton 
          variant="ghost" 
          size="sm" 
          className="py-1 px-2.5 text-xs border border-gray-200 rounded shadow-sm flex items-center"
        >
          <span className="font-medium mr-1">정렬</span>
          <SortAsc className="w-3 h-3" />
        </CommonButton>
      </PopoverTrigger>
      <PopoverContent className="w-44 p-0 rounded shadow" align="start">
        <div className="py-0.5">
          {/* 이름순 정렬 옵션 */}
          <div
            className="flex items-center px-2 py-1.5 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
            onClick={() => handleSortSelect('name')}
          >
            <div className="flex-1 text-sm">이름순</div>
            <div className="flex gap-1">
              <button
                className={`p-1 rounded ${
                  sortOption.type === 'name' && sortOption.direction === 'asc'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                onClick={(e) => handleSortDirectionSelect('name', 'asc', e)}
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
              <button
                className={`p-1 rounded ${
                  sortOption.type === 'name' && sortOption.direction === 'desc'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                onClick={(e) => handleSortDirectionSelect('name', 'desc', e)}
              >
                <ArrowDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
          
          {/* 아이디순 정렬 옵션 */}
          <div
            className="flex items-center px-2 py-1.5 hover:bg-gray-50 cursor-pointer"
            onClick={() => handleSortSelect('id')}
          >
            <div className="flex-1 text-sm">아이디순</div>
            <div className="flex gap-1">
              <button
                className={`p-1 rounded ${
                  sortOption.type === 'id' && sortOption.direction === 'asc'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                onClick={(e) => handleSortDirectionSelect('id', 'asc', e)}
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
              <button
                className={`p-1 rounded ${
                  sortOption.type === 'id' && sortOption.direction === 'desc'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                onClick={(e) => handleSortDirectionSelect('id', 'desc', e)}
              >
                <ArrowDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ISortButtonForSideMenuCounselorTab;