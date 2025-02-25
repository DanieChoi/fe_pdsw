"use client";

import React, { useState } from 'react';
import { SortAsc, Check, ArrowUp, ArrowDown } from "lucide-react";
import CommonButton from '@/components/shared/CommonButton';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// 정렬 타입 정의
type SortType = 'name' | 'id';
type SortDirection = 'asc' | 'desc';

interface SortOption {
  type: SortType;
  direction: SortDirection;
}

interface ISortButtonForSideMenuCounselorTabProps {
  onSortChange?: (option: SortOption) => void;
}

const ISortButtonForSideMenuCounselorTab = ({ onSortChange }: ISortButtonForSideMenuCounselorTabProps) => {
  // 팝오버 상태 관리
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  // 현재 선택된 정렬 옵션
  const [selectedSort, setSelectedSort] = useState<SortType>('name');
  
  // 현재 선택된 정렬 방향
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  // 정렬 옵션 선택 처리
  const handleSortSelect = (sortType: SortType) => {
    // 이미 선택된 옵션이면 방향만 토글
    if (selectedSort === sortType) {
      const newDirection: SortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      setSortDirection(newDirection);
      
      // 콜백 함수가 있으면 호출
      if (onSortChange) {
        onSortChange({ type: sortType, direction: newDirection });
      }
    } else {
      // 새로운 옵션 선택 (기본 방향은 asc)
      setSelectedSort(sortType);
      setSortDirection('asc');
      
      // 콜백 함수가 있으면 호출
      if (onSortChange) {
        onSortChange({ type: sortType, direction: 'asc' });
      }
    }
  };

  // 정렬 방향 설정 및 팝오버 닫기
  const handleSortDirectionSelect = (sortType: SortType, direction: SortDirection, event: React.MouseEvent) => {
    // 이벤트 버블링 방지
    event.stopPropagation();
    
    // 정렬 타입과 방향 업데이트
    setSelectedSort(sortType);
    setSortDirection(direction);
    
    // 콜백 함수가 있으면 호출
    if (onSortChange) {
      onSortChange({ type: sortType, direction });
    }
    
    // 팝오버 닫기
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
          <div className="grid grid-cols-3 items-center px-2 py-2 hover:bg-gray-100">
            <div 
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => handleSortSelect('name')}
            >
              <span className="text-sm">이름순</span>
            </div>
            
            <div 
              className="flex justify-center cursor-pointer"
              onClick={(e) => handleSortDirectionSelect('name', 'asc', e)}
            >
              <ArrowUp 
                className={`h-4 w-4 ${selectedSort === 'name' && sortDirection === 'asc' ? 'text-blue-600' : 'text-gray-400'}`}
              />
            </div>
            
            <div 
              className="flex justify-center cursor-pointer"
              onClick={(e) => handleSortDirectionSelect('name', 'desc', e)}
            >
              <ArrowDown 
                className={`h-4 w-4 ${selectedSort === 'name' && sortDirection === 'desc' ? 'text-blue-600' : 'text-gray-400'}`}
              />
            </div>
          </div>
          
          {/* 아이디순 정렬 옵션 */}
          <div className="grid grid-cols-3 items-center px-2 py-2 hover:bg-gray-100">
            <div 
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => handleSortSelect('id')}
            >
              <span className="text-sm">아이디순</span>
            </div>
            
            <div 
              className="flex justify-center cursor-pointer"
              onClick={(e) => handleSortDirectionSelect('id', 'asc', e)}
            >
              <ArrowUp 
                className={`h-4 w-4 ${selectedSort === 'id' && sortDirection === 'asc' ? 'text-blue-600' : 'text-gray-400'}`}
              />
            </div>
            
            <div 
              className="flex justify-center cursor-pointer"
              onClick={(e) => handleSortDirectionSelect('id', 'desc', e)}
            >
              <ArrowDown 
                className={`h-4 w-4 ${selectedSort === 'id' && sortDirection === 'desc' ? 'text-blue-600' : 'text-gray-400'}`}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ISortButtonForSideMenuCounselorTab;