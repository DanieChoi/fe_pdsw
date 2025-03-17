// "use client";

// import React from 'react';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import CommonButton from "@/components/shared/CommonButton";
// import { ArrowUp, ArrowDown } from "lucide-react";
// import Image from 'next/image';
// import { SortDirection, SortType } from '@/store/storeForSideBarCampaignSort';
// import { useTreeMenuStore } from '@/store/storeForSsideMenuCampaignTab';

// const campaignSortOptions: Array<{ id: SortType; label: string }> = [
//   { id: 'name', label: '이름순' },
//   { id: 'id', label: '아이디순' },
// ];

// export function SortButtonForCampaign() {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const { campaignSort, setCampaignSort } = useTreeMenuStore();

//   // 행 클릭 시 정렬 타입 선택 처리
//   const handleSortSelect = (sortType: SortType) => {
//     if (campaignSort.type === sortType) {
//       // 같은 타입 선택 시 방향 전환
//       const newDirection: SortDirection = campaignSort.direction === 'asc' ? 'desc' : 'asc';
//       setCampaignSort({ type: sortType, direction: newDirection });
//     } else {
//       // 새로운 타입 선택 시 오름차순 기본값
//       setCampaignSort({ type: sortType, direction: 'asc' });
//     }
//     setIsOpen(false);
//   };

//   // 방향 버튼 클릭 시 처리 (이벤트 버블링 방지)
//   const handleDirectionSelect = (sortType: SortType, direction: SortDirection, event: React.MouseEvent) => {
//     event.stopPropagation();
//     setCampaignSort({ type: sortType, direction });
//     setIsOpen(false);
//   };

//   return (
//     <Popover open={isOpen} onOpenChange={setIsOpen}>
//       <PopoverTrigger asChild>
//         <CommonButton 
//           variant="ghost" 
//           size="sm" 
//           className="text-xs font-normal gap-[2px] hover:bg-[transparent] text-[#888] !p-0"
//         >
//           정렬
//           <Image 
//             src={`/tree-menu/array.png`} 
//             alt={`정렬`} 
//             width={9} 
//             height={10} 
//           />
//         </CommonButton>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto min-w-[150px] p-0 py-[10px] px-[12px] rounded-[3px] border border-[#333]" align="end">
//         <div className="">
//           {campaignSortOptions.map((option) => (
//             <div
//               key={option.id}
//               className="flex items-center hover:bg-[#F4F6F9] cursor-pointer rounded-[3px] px-[6px] py-[4px]"
//               onClick={() => handleSortSelect(option.id)}
//             >
//               <div className="flex-1 text-sm">{option.label}</div>
//               <div className="flex gap-1">
//                 <button
//                   className={`p-1 rounded ${
//                     campaignSort.type === option.id && campaignSort.direction === 'asc'
//                       ? 'bg-[#F4F6F9] text-[#333]'
//                       : 'text-gray-400 hover:text-[#333]'
//                   }`}
//                   onClick={(e) => handleDirectionSelect(option.id, 'asc', e)}
//                 >
//                   <ArrowUp className="h-3.5 w-3.5" />
//                 </button>
//                 <button
//                   className={`p-1 rounded ${
//                     campaignSort.type === option.id && campaignSort.direction === 'desc'
//                       ? 'bg-[#F4F6F9] text-[#333]'
//                       : 'text-gray-400 hover:text-[#333]'
//                   }`}
//                   onClick={(e) => handleDirectionSelect(option.id, 'desc', e)}
//                 >
//                   <ArrowDown className="h-3.5 w-3.5" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </PopoverContent>
//     </Popover>
//   );
// }

"use client";

import React, { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CommonButton from "@/components/shared/CommonButton";
import { ArrowUp, ArrowDown, CheckIcon } from "lucide-react";
import Image from 'next/image';
import { NodeType, SortDirection, SortType, useTreeMenuStore } from '@/store/storeForSsideMenuCampaignTab';

export function SortButtonForCampaign() {
  const [isOpen, setIsOpen] = useState(false);
  const { campaignSort, selectedNodeType, sortByNodeType } = useTreeMenuStore();

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
      <PopoverContent className="w-auto min-w-[300px] p-0 py-[10px] px-[12px] rounded-[3px] border border-[#333]" align="end">
        {/* <div className="text-sm font-medium mb-3">노드 타입별 정렬</div> */}
        
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-2 text-left">노드 타입</th>
              <th className="py-2 px-2 text-center">이름 정렬</th>
              <th className="py-2 px-2 text-center">ID 정렬</th>
            </tr>
          </thead>
          <tbody>
            {/* 전체 노드 정렬 */}
            <tr className="border-t hover:bg-[#F4F6F9]">
              <td className="py-2 px-2">전체</td>
              <td className="py-2 px-2 text-center">
                <div className="flex justify-center gap-1">
                  <button
                    className={`p-1 rounded ${isSelected('all', 'name', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('all', 'name', 'asc')}
                    title="이름 오름차순"
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    className={`p-1 rounded ${isSelected('all', 'name', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('all', 'name', 'desc')}
                    title="이름 내림차순"
                  >
                    <ArrowDown className="h-3.5 w-3.5" />
                  </button>
                </div>
              </td>
              <td className="py-2 px-2 text-center">
                <div className="flex justify-center gap-1">
                  <button
                    className={`p-1 rounded ${isSelected('all', 'id', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('all', 'id', 'asc')}
                    title="ID 오름차순"
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    className={`p-1 rounded ${isSelected('all', 'id', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('all', 'id', 'desc')}
                    title="ID 내림차순"
                  >
                    <ArrowDown className="h-3.5 w-3.5" />
                  </button>
                </div>
              </td>
            </tr>
            
            {/* 테넌트 노드 정렬 */}
            <tr className="border-t hover:bg-[#F4F6F9]">
              <td className="py-2 px-2">테넌트</td>
              <td className="py-2 px-2 text-center">
                <div className="flex justify-center gap-1">
                  <button
                    className={`p-1 rounded ${isSelected('tenant', 'name', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('tenant', 'name', 'asc')}
                    title="이름 오름차순"
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    className={`p-1 rounded ${isSelected('tenant', 'name', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('tenant', 'name', 'desc')}
                    title="이름 내림차순"
                  >
                    <ArrowDown className="h-3.5 w-3.5" />
                  </button>
                </div>
              </td>
              <td className="py-2 px-2 text-center">
                <div className="flex justify-center gap-1">
                  <button
                    className={`p-1 rounded ${isSelected('tenant', 'id', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('tenant', 'id', 'asc')}
                    title="ID 오름차순"
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    className={`p-1 rounded ${isSelected('tenant', 'id', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('tenant', 'id', 'desc')}
                    title="ID 내림차순"
                  >
                    <ArrowDown className="h-3.5 w-3.5" />
                  </button>
                </div>
              </td>
            </tr>
            
            {/* 캠페인 노드 정렬 */}
            <tr className="border-t hover:bg-[#F4F6F9]">
              <td className="py-2 px-2">캠페인</td>
              <td className="py-2 px-2 text-center">
                <div className="flex justify-center gap-1">
                  <button
                    className={`p-1 rounded ${isSelected('campaign', 'name', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('campaign', 'name', 'asc')}
                    title="이름 오름차순"
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    className={`p-1 rounded ${isSelected('campaign', 'name', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('campaign', 'name', 'desc')}
                    title="이름 내림차순"
                  >
                    <ArrowDown className="h-3.5 w-3.5" />
                  </button>
                </div>
              </td>
              <td className="py-2 px-2 text-center">
                <div className="flex justify-center gap-1">
                  <button
                    className={`p-1 rounded ${isSelected('campaign', 'id', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('campaign', 'id', 'asc')}
                    title="ID 오름차순"
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    className={`p-1 rounded ${isSelected('campaign', 'id', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
                    onClick={() => handleSort('campaign', 'id', 'desc')}
                    title="ID 내림차순"
                  >
                    <ArrowDown className="h-3.5 w-3.5" />
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