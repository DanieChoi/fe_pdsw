"use client";

import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import CommonButton from "@/components/shared/CommonButton";
import { ArrowUp, ArrowDown } from "lucide-react";
import Image from 'next/image';
import { useSideMenuCampaignGroupTabStore, SortField, SortDirection, NodeType } from "@/store/storeForSideMenuCampaignGroupTab";

const IFilterButtonForCampaignGroupTabHeader = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
  // 스토어에서 정렬 상태 가져오기
  const { 
    sortField, 
    sortDirection, 
    sortByNodeType,
    selectedNodeType
  } = useSideMenuCampaignGroupTabStore();

  // 정렬 필드 토글 (id/name)
  const toggleSortField = (field: SortField) => {
    // 현재 필드에서 다른 필드로 전환하면서 현재 방향 유지
    if (sortField !== field) {
      // Apply sort to all node types to maintain consistency
      sortByNodeType("all", field, sortDirection);
      setIsPopoverOpen(false);
    }
  };

  // 노드 타입별 정렬 처리
  const handleSortDirectionSelect = (nodeType: NodeType, direction: SortDirection) => {
    // 현재 선택된 필드와 지정된 방향으로 정렬 적용
    sortByNodeType(nodeType, sortField, direction);
    setIsPopoverOpen(false);
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
        <div className="flex flex-col space-y-1">
          {/* 정렬 기준 헤더와 필드 토글 */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">정렬 기준</span>
            <div className="flex border rounded overflow-hidden">
              <button
                className={`px-2 py-0.5 text-xs ${sortField === "id" ? "bg-blue-100 text-blue-600" : "bg-white"}`}
                onClick={() => toggleSortField("id")}
              >
                id
              </button>
              <button
                className={`px-2 py-0.5 text-xs ${sortField === "name" ? "bg-blue-100 text-blue-600" : "bg-white"}`}
                onClick={() => toggleSortField("name")}
              >
                name
              </button>
            </div>
          </div>
          
          {/* 테넌트 정렬 옵션 */}
          <div className="flex items-center hover:bg-[#F4F6F9] cursor-pointer rounded-[3px] px-[6px] py-[4px]">
            <div className="flex-1 text-sm">테넌트 보기</div>
            <div className="flex gap-1">
              <button
                className={`p-1 rounded ${sortDirection === 'asc' && sortField && selectedNodeType === 'tenant' ? 'text-blue-600' : 'text-gray-400'} hover:text-[#333]`}
                onClick={() => handleSortDirectionSelect('tenant', 'asc')}
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
              <button
                className={`p-1 rounded ${sortDirection === 'desc' && sortField && selectedNodeType === 'tenant' ? 'text-blue-600' : 'text-gray-400'} hover:text-[#333]`}
                onClick={() => handleSortDirectionSelect('tenant', 'desc')}
              >
                <ArrowDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
          
          {/* 그룹 정렬 옵션 */}
          <div className="flex items-center hover:bg-[#F4F6F9] cursor-pointer rounded-[3px] px-[6px] py-[4px]">
            <div className="flex-1 text-sm">그룹 보기</div>
            <div className="flex gap-1">
              <button
                className={`p-1 rounded ${sortDirection === 'asc' && sortField && selectedNodeType === 'group' ? 'text-blue-600' : 'text-gray-400'} hover:text-[#333]`}
                onClick={() => handleSortDirectionSelect('group', 'asc')}
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
              <button
                className={`p-1 rounded ${sortDirection === 'desc' && sortField && selectedNodeType === 'group' ? 'text-blue-600' : 'text-gray-400'} hover:text-[#333]`}
                onClick={() => handleSortDirectionSelect('group', 'desc')}
              >
                <ArrowDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
          
          {/* 캠페인 정렬 옵션 */}
          <div className="flex items-center hover:bg-[#F4F6F9] cursor-pointer rounded-[3px] px-[6px] py-[4px]">
            <div className="flex-1 text-sm">캠페인 보기</div>
            <div className="flex gap-1">
              <button
                className={`p-1 rounded ${sortDirection === 'asc' && sortField && selectedNodeType === 'campaign' ? 'text-blue-600' : 'text-gray-400'} hover:text-[#333]`}
                onClick={() => handleSortDirectionSelect('campaign', 'asc')}
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
              <button
                className={`p-1 rounded ${sortDirection === 'desc' && sortField && selectedNodeType === 'campaign' ? 'text-blue-600' : 'text-gray-400'} hover:text-[#333]`}
                onClick={() => handleSortDirectionSelect('campaign', 'desc')}
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

export default IFilterButtonForCampaignGroupTabHeader;