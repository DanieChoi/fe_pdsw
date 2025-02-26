
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
        <CommonButton variant="ghost" size="sm" className="py-1 px-2 text-xs">
          <span>정렬</span>
          <SortAsc className="w-3 h-3 ml-1" />
        </CommonButton>
      </PopoverTrigger>
      <PopoverContent className="w-[220px] p-0" align="start">
        <div className="py-1">
          {/* 헤더 부분 */}
          <div className="grid grid-cols-3 px-2 py-1 border-b text-xs text-gray-500 bg-gray-50">
            <div>항목</div>
            <div className="text-center">오름차순</div>
            <div className="text-center">내림차순</div>
          </div>
          
          {/* 이름순 정렬 옵션 */}
          <div
            className="grid grid-cols-3 items-center px-2 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSortSelect('name')}
          >
            <div className="flex gap-2 items-center">
              <span className="text-sm">이름순</span>
            </div>
            <div
              className="flex justify-center"
              onClick={(e) => handleSortDirectionSelect('name', 'asc', e)}
            >
              <ArrowUp
                className={`h-4 w-4 ${
                  sortOption.type === 'name' && sortOption.direction === 'asc'
                    ? 'text-blue-600'
                    : 'text-gray-400'
                }`}
              />
            </div>
            <div
              className="flex justify-center"
              onClick={(e) => handleSortDirectionSelect('name', 'desc', e)}
            >
              <ArrowDown
                className={`h-4 w-4 ${
                  sortOption.type === 'name' && sortOption.direction === 'desc'
                    ? 'text-blue-600'
                    : 'text-gray-400'
                }`}
              />
            </div>
          </div>
          
          {/* 아이디순 정렬 옵션 */}
          <div
            className="grid grid-cols-3 items-center px-2 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSortSelect('id')}
          >
            <div className="flex gap-2 items-center">
              <span className="text-sm">아이디순</span>
            </div>
            <div
              className="flex justify-center"
              onClick={(e) => handleSortDirectionSelect('id', 'asc', e)}
            >
              <ArrowUp
                className={`h-4 w-4 ${
                  sortOption.type === 'id' && sortOption.direction === 'asc'
                    ? 'text-blue-600'
                    : 'text-gray-400'
                }`}
              />
            </div>
            <div
              className="flex justify-center"
              onClick={(e) => handleSortDirectionSelect('id', 'desc', e)}
            >
              <ArrowDown
                className={`h-4 w-4 ${
                  sortOption.type === 'id' && sortOption.direction === 'desc'
                    ? 'text-blue-600'
                    : 'text-gray-400'
                }`}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ISortButtonForSideMenuCounselorTab;
