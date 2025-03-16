"use client";

import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import CommonButton from "@/components/shared/CommonButton";
import { ArrowUp, ArrowDown } from "lucide-react";
import Image from 'next/image';
import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";
import { SortField, SortDirection, NodeType } from "@/store/storeForSideMenuCampaignGroupTab";

const IFilterButtonForCampaignGroupTabHeader = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
  // 스토어에서 정렬 상태 가져오기
  const { 
    sortField, 
    sortDirection,
    selectedNodeType,
    sortByNodeType
  } = useSideMenuCampaignGroupTabStore();

  // 정렬 필드 토글 (id/name)
  const toggleSortField = (field: SortField) => {
    // 현재 필드가 선택된 필드와 같으면 아무것도 하지 않음
    if (sortField === field) return;
    
    // 다른 필드로 전환하면서 현재 방향 유지
    sortByNodeType("tenant", field, sortDirection);
  };

  // 노드 타입별 정렬 처리
  const handleNodeTypeSort = (nodeType: NodeType, direction: SortDirection) => {
    // 정렬 적용
    sortByNodeType(nodeType, sortField, direction);
    // 팝오버 닫기
    setIsPopoverOpen(false);
  };

  // 현재 선택된 정렬 상태에 따라 스타일 결정
  const isActiveSort = (nodeType: NodeType, direction: SortDirection) => {
    return selectedNodeType === nodeType && sortDirection === direction;
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
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
      <PopoverContent className="w-auto min-w-[180px] p-0 py-[10px] px-[12px] rounded-[3px] border border-[#333]" align="start">
        <div className="flex flex-col space-y-2">
          {/* 정렬 기준 헤더와 필드 토글 - 분리된 버튼으로 변경 */}
          <div className="mb-3">
            <span className="text-sm font-medium block mb-2">정렬 기준</span>
            <div className="flex gap-2">
              <button
                className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-md border ${
                  sortField === "id" 
                    ? "bg-green-100 text-green-700 border-green-200" 
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                }`}
                onClick={() => toggleSortField("id")}
              >
                ID
              </button>
              <button
                className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-md border ${
                  sortField === "name" 
                    ? "bg-green-100 text-green-700 border-green-200" 
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                }`}
                onClick={() => toggleSortField("name")}
              >
                이름
              </button>
            </div>
          </div>
          
          {/* 테넌트 정렬 옵션 */}
          <div className="flex items-center hover:bg-[#F4F6F9] rounded-md px-3 py-2">
            <div className="flex-1 text-sm">테넌트 보기</div>
            <div className="flex gap-2">
              <button
                className={`p-1.5 rounded-md ${
                  isActiveSort('tenant', 'asc')
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleNodeTypeSort('tenant', 'asc')}
                title={`${sortField === 'name' ? '이름' : 'ID'} 오름차순`}
              >
                <ArrowUp className="h-4 w-4" />
              </button>
              <button
                className={`p-1.5 rounded-md ${
                  isActiveSort('tenant', 'desc')
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleNodeTypeSort('tenant', 'desc')}
                title={`${sortField === 'name' ? '이름' : 'ID'} 내림차순`}
              >
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* 그룹 정렬 옵션 */}
          <div className="flex items-center hover:bg-[#F4F6F9] rounded-md px-3 py-2">
            <div className="flex-1 text-sm">그룹 보기</div>
            <div className="flex gap-2">
              <button
                className={`p-1.5 rounded-md ${
                  isActiveSort('group', 'asc')
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleNodeTypeSort('group', 'asc')}
                title={`${sortField === 'name' ? '이름' : 'ID'} 오름차순`}
              >
                <ArrowUp className="h-4 w-4" />
              </button>
              <button
                className={`p-1.5 rounded-md ${
                  isActiveSort('group', 'desc')
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleNodeTypeSort('group', 'desc')}
                title={`${sortField === 'name' ? '이름' : 'ID'} 내림차순`}
              >
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* 캠페인 정렬 옵션 */}
          <div className="flex items-center hover:bg-[#F4F6F9] rounded-md px-3 py-2">
            <div className="flex-1 text-sm">캠페인 보기</div>
            <div className="flex gap-2">
              <button
                className={`p-1.5 rounded-md ${
                  isActiveSort('campaign', 'asc')
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleNodeTypeSort('campaign', 'asc')}
                title={`${sortField === 'name' ? '이름' : 'ID'} 오름차순`}
              >
                <ArrowUp className="h-4 w-4" />
              </button>
              <button
                className={`p-1.5 rounded-md ${
                  isActiveSort('campaign', 'desc')
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleNodeTypeSort('campaign', 'desc')}
                title={`${sortField === 'name' ? '이름' : 'ID'} 내림차순`}
              >
                <ArrowDown className="h-4 w-4" />
              </button> 
            </div>
          </div>
          
          {/* 전체 정렬 옵션 */}
          <div className="flex items-center hover:bg-[#F4F6F9] rounded-md px-3 py-2 border-t pt-3 mt-1">
            <div className="flex-1 text-sm">전체 보기</div>
            <div className="flex gap-2">
              <button
                className={`p-1.5 rounded-md ${
                  isActiveSort('all', 'asc')
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleNodeTypeSort('all', 'asc')}
                title={`${sortField === 'name' ? '이름' : 'ID'} 오름차순`}
              >
                <ArrowUp className="h-4 w-4" />
              </button>
              <button
                className={`p-1.5 rounded-md ${
                  isActiveSort('all', 'desc')
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleNodeTypeSort('all', 'desc')}
                title={`${sortField === 'name' ? '이름' : 'ID'} 내림차순`}
              >
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default IFilterButtonForCampaignGroupTabHeader;