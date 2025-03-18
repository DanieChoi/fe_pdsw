"use client";

import React, { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CommonButton from "@/components/shared/CommonButton";
import { ArrowUp, ArrowDown, FolderTree, FileText } from "lucide-react";
import Image from 'next/image';
import { NodeType, SortDirection, SortType, useTreeMenuStore, ViewMode } from '@/store/storeForSsideMenuCampaignTab';

export function SortButtonForCampaign() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    campaignSort, 
    selectedNodeType, 
    sortByNodeType,
    setViewMode,
    viewMode
  } = useTreeMenuStore();

  // 현재 선택된 정렬 상태 확인
  const isSelected = (nodeType: NodeType, field: SortType, direction: SortDirection) => {
    return campaignSort.type === field && 
           campaignSort.direction === direction && 
           selectedNodeType === nodeType;
  };

  // 정렬 적용 함수
  const handleSort = (nodeType: NodeType, field: SortType, direction: SortDirection) => {
    sortByNodeType(nodeType, field, direction);
    setIsOpen(false);
  };

  // 뷰 모드 토글 함수
  const toggleViewMode = (mode: ViewMode) => {
    setViewMode(mode);
  };

  // 뷰 모드 버튼 스타일
  const getViewButtonStyle = (mode: ViewMode) => {
    return `px-2 py-1 text-xs flex items-center gap-1 ${
      viewMode === mode 
        ? 'bg-gray-200 font-medium' 
        : 'bg-white hover:bg-gray-100'
    }`;
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
      <PopoverContent className="w-auto p-0 rounded-[3px] border border-[#333]" align="end">
        <div className="p-2 border-b flex justify-between items-center">
          <span className="text-xs font-medium">표시 옵션</span>
          <div className="flex border rounded overflow-hidden">
            <button
              className={getViewButtonStyle('tenant')}
              onClick={() => toggleViewMode('tenant')}
              title="테넌트까지 표시"
            >
              <FolderTree className="h-3 w-3" />
              <span>테넌트</span>
            </button>
            <button
              className={getViewButtonStyle('campaign')}
              onClick={() => toggleViewMode('campaign')}
              title="캠페인까지 표시"
            >
              <FileText className="h-3 w-3" />
              <span>캠페인</span>
            </button>
          </div>
        </div>
        
        <table className="w-full text-xs border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-1.5 px-2 text-left">노드 타입</th>
              <th className="py-1.5 px-2 text-center">이름 정렬</th>
              <th className="py-1.5 px-2 text-center">ID 정렬</th>
            </tr>
          </thead>
          <tbody>
            {/* 전체 노드 정렬 */}
            <tr className="border-t hover:bg-[#F4F6F9]">
              <td className="py-1.5 px-2">전체</td>
              <td className="py-1.5 px-2 text-center">
                <div className="flex justify-center gap-1">
                  <button
                    className={`p-0.5 rounded ${isSelected('all', 'name', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('all', 'name', 'asc')}
                    title="이름 오름차순"
                  >
                    <ArrowUp className="h-3 w-3" />
                  </button>
                  <button
                    className={`p-0.5 rounded ${isSelected('all', 'name', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('all', 'name', 'desc')}
                    title="이름 내림차순"
                  >
                    <ArrowDown className="h-3 w-3" />
                  </button>
                </div>
              </td>
              <td className="py-1.5 px-2 text-center">
                <div className="flex justify-center gap-1">
                  <button
                    className={`p-0.5 rounded ${isSelected('all', 'id', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('all', 'id', 'asc')}
                    title="ID 오름차순"
                  >
                    <ArrowUp className="h-3 w-3" />
                  </button>
                  <button
                    className={`p-0.5 rounded ${isSelected('all', 'id', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('all', 'id', 'desc')}
                    title="ID 내림차순"
                  >
                    <ArrowDown className="h-3 w-3" />
                  </button>
                </div>
              </td>
            </tr>
            
            {/* 테넌트 노드 정렬 */}
            <tr className="border-t hover:bg-[#F4F6F9]">
              <td className="py-1.5 px-2">테넌트</td>
              <td className="py-1.5 px-2 text-center">
                <div className="flex justify-center gap-1">
                  <button
                    className={`p-0.5 rounded ${isSelected('tenant', 'name', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('tenant', 'name', 'asc')}
                    title="이름 오름차순"
                  >
                    <ArrowUp className="h-3 w-3" />
                  </button>
                  <button
                    className={`p-0.5 rounded ${isSelected('tenant', 'name', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('tenant', 'name', 'desc')}
                    title="이름 내림차순"
                  >
                    <ArrowDown className="h-3 w-3" />
                  </button>
                </div>
              </td>
              <td className="py-1.5 px-2 text-center">
                <div className="flex justify-center gap-1">
                  <button
                    className={`p-0.5 rounded ${isSelected('tenant', 'id', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('tenant', 'id', 'asc')}
                    title="ID 오름차순"
                  >
                    <ArrowUp className="h-3 w-3" />
                  </button>
                  <button
                    className={`p-0.5 rounded ${isSelected('tenant', 'id', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('tenant', 'id', 'desc')}
                    title="ID 내림차순"
                  >
                    <ArrowDown className="h-3 w-3" />
                  </button>
                </div>
              </td>
            </tr>
            
            {/* 캠페인 노드 정렬 */}
            <tr className="border-t hover:bg-[#F4F6F9]">
              <td className="py-1.5 px-2">캠페인</td>
              <td className="py-1.5 px-2 text-center">
                <div className="flex justify-center gap-1">
                  <button
                    className={`p-0.5 rounded ${isSelected('campaign', 'name', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('campaign', 'name', 'asc')}
                    title="이름 오름차순"
                  >
                    <ArrowUp className="h-3 w-3" />
                  </button>
                  <button
                    className={`p-0.5 rounded ${isSelected('campaign', 'name', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('campaign', 'name', 'desc')}
                    title="이름 내림차순"
                  >
                    <ArrowDown className="h-3 w-3" />
                  </button>
                </div>
              </td>
              <td className="py-1.5 px-2 text-center">
                <div className="flex justify-center gap-1">
                  <button
                    className={`p-0.5 rounded ${isSelected('campaign', 'id', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('campaign', 'id', 'asc')}
                    title="ID 오름차순"
                  >
                    <ArrowUp className="h-3 w-3" />
                  </button>
                  <button
                    className={`p-0.5 rounded ${isSelected('campaign', 'id', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('campaign', 'id', 'desc')}
                    title="ID 내림차순"
                  >
                    <ArrowDown className="h-3 w-3" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </PopoverContent>
    </Popover>
  );
}