// "use client";

// import React, { useState } from 'react';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import CommonButton from "@/components/shared/CommonButton";
// import { ArrowUp, ArrowDown, FolderTree, FileText } from "lucide-react";
// import Image from 'next/image';
// import { NodeType, SortDirection, SortType, useTreeMenuStore, ViewMode } from '@/store/storeForSsideMenuCampaignTab';

// export function SortButtonForCampaign() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { 
//     campaignSort, 
//     selectedNodeType, 
//     sortByNodeType,
//     setViewMode,
//     viewMode
//   } = useTreeMenuStore();

//   // 현재 선택된 정렬 상태 확인
//   const isSelected = (nodeType: NodeType, field: SortType, direction: SortDirection) => {
//     return campaignSort.type === field && 
//            campaignSort.direction === direction && 
//            selectedNodeType === nodeType;
//   };

//   // 정렬 적용 함수
//   const handleSort = (nodeType: NodeType, field: SortType, direction: SortDirection) => {
//     sortByNodeType(nodeType, field, direction);
//     setIsOpen(false);
//   };

//   // 뷰 모드 토글 함수
//   const toggleViewMode = (mode: ViewMode) => {
//     setViewMode(mode);
//   };

//   // 뷰 모드 버튼 스타일
//   const getViewButtonStyle = (mode: ViewMode) => {
//     return `flex-1 px-[6px] py-[4px] text-sm rounded-md border ${
//       viewMode === mode 
//         ? 'bg-[#56CAD6] text-[#fff]' 
//         : 'bg-white hover:bg-gray-100 text-[#333]'
//     }`;
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
//       <PopoverContent className="w-auto rounded-[3px] border border-[#333]" align="end">
//         <div className="flex items-center justify-between mb-2">
//           <span className="text-sm text-[#333]">정렬 기준</span>
//           <div className="flex gap-1">
//             <button
//               className={getViewButtonStyle('tenant')}
//               onClick={() => toggleViewMode('tenant')}
//               title="테넌트까지 표시"
//             >
//               <span>테넌트</span>
//             </button>
//             <button
//               className={getViewButtonStyle('campaign')}
//               onClick={() => toggleViewMode('campaign')}
//               title="캠페인까지 표시"
//             >
//               <span>캠페인</span>
//             </button>
//           </div>
//         </div>
        
//         <table className="table-custom ">
//           <thead className="bg-[#f8f8f8]">
//             <tr>
//               <th className="px-3 py-1 text-sm font-normal text-[#333] text-left" style={{ height: '30px' }}>노드 타입</th>
//               <th className="px-3 py-1 text-sm font-normal text-[#333] text-center" style={{ height: '30px' }}>이름 정렬</th>
//               <th className="px-3 py-1 text-sm font-normal text-[#333] text-center" style={{ height: '30px' }}>ID 정렬</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* 전체 노드 정렬 */}
//             <tr className="border-t hover:bg-[#F4F6F9]">
//               <td className="py-1.5 px-2 text-sm text-[#333]" style={{ height: '30px' }}>전체</td>
//               <td className="py-1.5 px-2 text-sm text-center">
//                 <div className="flex justify-center gap-1">
//                   <button
//                     className={`p-0.5 rounded ${isSelected('all', 'name', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
//                     onClick={() => handleSort('all', 'name', 'asc')}
//                     title="이름 오름차순"
//                   >
//                     <ArrowUp className="h-3 w-3" />
//                   </button>
//                   <button
//                     className={`p-0.5 rounded ${isSelected('all', 'name', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
//                     onClick={() => handleSort('all', 'name', 'desc')}
//                     title="이름 내림차순"
//                   >
//                     <ArrowDown className="h-3 w-3" />
//                   </button>
//                 </div>
//               </td>
//               <td className="py-1.5 px-2 text-sm text-center">
//                 <div className="flex justify-center gap-1">
//                   <button
//                     className={`p-0.5 rounded ${isSelected('all', 'id', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
//                     onClick={() => handleSort('all', 'id', 'asc')}
//                     title="ID 오름차순"
//                   >
//                     <ArrowUp className="h-3 w-3" />
//                   </button>
//                   <button
//                     className={`p-0.5 rounded ${isSelected('all', 'id', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
//                     onClick={() => handleSort('all', 'id', 'desc')}
//                     title="ID 내림차순"
//                   >
//                     <ArrowDown className="h-3 w-3" />
//                   </button>
//                 </div>
//               </td>
//             </tr>
            
//             {/* 테넌트 노드 정렬 */}
//             <tr className="border-t hover:bg-[#F4F6F9]">
//               <td className="py-1.5 px-2 text-sm text-[#333]" style={{ height: '30px' }}>테넌트</td>
//               <td className="py-1.5 px-2 text-center">
//                 <div className="flex justify-center gap-1">
//                   <button
//                     className={`p-0.5 rounded ${isSelected('tenant', 'name', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
//                     onClick={() => handleSort('tenant', 'name', 'asc')}
//                     title="이름 오름차순"
//                   >
//                     <ArrowUp className="h-3 w-3" />
//                   </button>
//                   <button
//                     className={`p-0.5 rounded ${isSelected('tenant', 'name', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
//                     onClick={() => handleSort('tenant', 'name', 'desc')}
//                     title="이름 내림차순"
//                   >
//                     <ArrowDown className="h-3 w-3" />
//                   </button>
//                 </div>
//               </td>
//               <td className="py-1.5 px-2 text-center">
//                 <div className="flex justify-center gap-1">
//                   <button
//                     className={`p-0.5 rounded ${isSelected('tenant', 'id', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
//                     onClick={() => handleSort('tenant', 'id', 'asc')}
//                     title="ID 오름차순"
//                   >
//                     <ArrowUp className="h-3 w-3" />
//                   </button>
//                   <button
//                     className={`p-0.5 rounded ${isSelected('tenant', 'id', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
//                     onClick={() => handleSort('tenant', 'id', 'desc')}
//                     title="ID 내림차순"
//                   >
//                     <ArrowDown className="h-3 w-3" />
//                   </button>
//                 </div>
//               </td>
//             </tr>
            
//             {/* 캠페인 노드 정렬 */}
//             <tr className="border-t hover:bg-[#F4F6F9]">
//               <td className="py-1.5 px-2  text-sm text-[#333]" style={{ height: '30px' }}>캠페인</td>
//               <td className="py-1.5 px-2 text-center">
//                 <div className="flex justify-center gap-1">
//                   <button
//                     className={`p-0.5 rounded ${isSelected('campaign', 'name', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
//                     onClick={() => handleSort('campaign', 'name', 'asc')}
//                     title="이름 오름차순"
//                   >
//                     <ArrowUp className="h-3 w-3" />
//                   </button>
//                   <button
//                     className={`p-0.5 rounded ${isSelected('campaign', 'name', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
//                     onClick={() => handleSort('campaign', 'name', 'desc')}
//                     title="이름 내림차순"
//                   >
//                     <ArrowDown className="h-3 w-3" />
//                   </button>
//                 </div>
//               </td>
//               <td className="py-1.5 px-2 text-center">
//                 <div className="flex justify-center gap-1">
//                   <button
//                     className={`p-0.5 rounded ${isSelected('campaign', 'id', 'asc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
//                     onClick={() => handleSort('campaign', 'id', 'asc')}
//                     title="ID 오름차순"
//                   >
//                     <ArrowUp className="h-3 w-3" />
//                   </button>
//                   <button
//                     className={`p-0.5 rounded ${isSelected('campaign', 'id', 'desc') ? 'bg-[#F4F6F9] text-[#333]' : 'text-gray-400 hover:text-[#333]'}`}
//                     onClick={() => handleSort('campaign', 'id', 'desc')}
//                     title="ID 내림차순"
//                   >
//                     <ArrowDown className="h-3 w-3" />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </PopoverContent>
//     </Popover>
//   );
// }


"use client";

import React, { useState, useEffect } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CommonButton from "@/components/shared/CommonButton";
import { ArrowUp, ArrowDown } from "lucide-react";
import Image from 'next/image';
import { NodeType, SortDirection, SortType, useTreeMenuStore, ViewMode } from '@/store/storeForSsideMenuCampaignTab';

export function SortButtonForCampaign() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
  const { 
    campaignSort, 
    selectedNodeType, 
    sortByNodeType,
    setViewMode,
    viewMode
  } = useTreeMenuStore();

  // 초기 로딩시 viewMode가 null일 경우를 처리
  useEffect(() => {
    if (viewMode === null) {
      // 초기 상태는 테넌트 보기('tenant')로 설정
      useTreeMenuStore.getState().setViewMode('tenant');
    }
  }, [viewMode]);

  const toggleSortField = (field: SortType) => {
    if (campaignSort.type === field) return;
    sortByNodeType(selectedNodeType, field, campaignSort.direction);
  };

  const handleNodeTypeSort = (nodeType: NodeType, direction: SortDirection) => {
    sortByNodeType(nodeType, campaignSort.type, direction);
    setIsPopoverOpen(false);
  };

  const isActiveSort = (nodeType: NodeType, direction: SortDirection) => {
    return selectedNodeType === nodeType && campaignSort.direction === direction;
  };

  // Function to determine active button state
  const getViewButtonClass = (mode: ViewMode) => {
    const baseClass = "h-6 min-w-6 px-1 text-xs border rounded";
    return viewMode === mode 
      ? `${baseClass} bg-[#56CAD6] text-[#fff] ` 
      : `${baseClass} hover:bg-gray-50`;
  };

  // 뷰 모드 버튼 렌더링
  const renderViewButtons = () => {
    return (
      <div className="flex gap-1">
        <button
          className={getViewButtonClass('tenant')}
          onClick={() => useTreeMenuStore.getState().setViewMode('tenant')}
          title="테넌트 보기"
        >
          T
        </button>
        <button
          className={getViewButtonClass('campaign')}
          onClick={() => useTreeMenuStore.getState().setViewMode('campaign')}
          title="캠페인 보기"
        >
          C
        </button>
      </div>
    );
  };

  return (
    <div className="flex items-center">
      {/* 정렬 버튼 */}
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
          <div className="flex flex-col">
            {/* 정렬 기준 헤더와 필드 토글 */}
            <div className="">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#333]">정렬 기준</span>
                {renderViewButtons()}
              </div>

              <div className="flex gap-2">
                <button
                  className={`flex-1 px-[6px] py-[4px] text-sm rounded-md border ${
                    campaignSort.type === "id" 
                      ? "bg-[#56CAD6] text-[#fff] " 
                      : "bg-white text-[#333] border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => toggleSortField("id")}
                >
                  ID
                </button>
                <button
                  className={`flex-1 px-[6px] py-[4px] text-sm rounded-md border ${
                    campaignSort.type === "name" 
                      ? "bg-[#56CAD6] text-[#fff] " 
                      : "bg-white text-[#333] border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => toggleSortField("name")}
                >
                  이름
                </button>
              </div>
            </div>

            {/* 구분선 */}
            <div className="border-t border-gray-200 my-2"></div>

            {/* 전체 정렬 옵션 */}
            <div className="flex items-center hover:bg-[#F4F6F9] rounded-md px-[6px] py-[4px]">
              <div className="flex-1 text-sm text-[#333]">전체 보기</div>
              <div className="flex gap-2">
                <button
                  className={`p-1.5 rounded-md ${
                    isActiveSort('all', 'asc')
                      ? 'bg-[#56CAD6] text-[#fff]'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => handleNodeTypeSort('all', 'asc')}
                  title={`${campaignSort.type === 'name' ? '이름' : 'ID'} 오름차순`}
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
                <button
                  className={`p-1.5 rounded-md ${
                    isActiveSort('all', 'desc')
                      ? 'bg-[#56CAD6] text-[#fff]'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => handleNodeTypeSort('all', 'desc')}
                  title={`${campaignSort.type === 'name' ? '이름' : 'ID'} 내림차순`}
                >
                  <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* 구분선 */}
            <div className="border-t border-gray-200 my-2"></div>

            {/* 테넌트 정렬 옵션 */}
            <div className="flex items-center hover:bg-[#F4F6F9] rounded-md px-[6px] py-[4px]">
              <div className="flex-1 text-sm text-[#333]">테넌트 보기</div>
              <div className="flex gap-2">
                <button
                  className={`p-1.5 rounded-md ${
                    isActiveSort('tenant', 'asc')
                      ? 'bg-[#56CAD6] text-[#fff]'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => handleNodeTypeSort('tenant', 'asc')}
                  title={`${campaignSort.type === 'name' ? '이름' : 'ID'} 오름차순`}
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
                <button
                  className={`p-1.5 rounded-md ${
                    isActiveSort('tenant', 'desc')
                      ? 'bg-[#56CAD6] text-[#fff]'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => handleNodeTypeSort('tenant', 'desc')}
                  title={`${campaignSort.type === 'name' ? '이름' : 'ID'} 내림차순`}
                >
                  <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* 캠페인 정렬 옵션 */}
            <div className="flex items-center hover:bg-[#F4F6F9] rounded-md px-[6px] py-[4px]">
              <div className="flex-1 text-sm text-[#333]">캠페인 보기</div>
              <div className="flex gap-2">
                <button
                  className={`p-1.5 rounded-md ${
                    isActiveSort('campaign', 'asc')
                      ? 'bg-[#56CAD6] text-[#fff]'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => handleNodeTypeSort('campaign', 'asc')}
                  title={`${campaignSort.type === 'name' ? '이름' : 'ID'} 오름차순`}
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
                <button
                  className={`p-1.5 rounded-md ${
                    isActiveSort('campaign', 'desc')
                      ? 'bg-[#56CAD6] text-[#fff]'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => handleNodeTypeSort('campaign', 'desc')}
                  title={`${campaignSort.type === 'name' ? '이름' : 'ID'} 내림차순`}
                >
                  <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}