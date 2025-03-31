
// "use client";

// import React, { useState, useEffect } from 'react';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import CommonButton from "@/components/shared/CommonButton";
// import { ArrowUp, ArrowDown } from "lucide-react";
// import Image from 'next/image';
// import { NodeType, SortDirection, SortType, useTreeMenuStore, ViewMode } from '@/store/storeForSsideMenuCampaignTab';

// export function SortButtonForCampaign() {
//   const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
//   const { 
//     campaignSort, 
//     selectedNodeType, 
//     sortByNodeType,
//     setViewMode,
//     viewMode,
//     setSelectedNodeType,  // 상태 관리 스토어에서 노드 타입 설정 함수
//   } = useTreeMenuStore();

//   // 뷰 모드 변경 시 노드 타입 동기화
//   useEffect(() => {
//     if (viewMode === 'tenant') {
//       setSelectedNodeType('tenant');
//     } else if (viewMode === 'campaign') {
//       setSelectedNodeType('campaign');
//     }
//   }, [viewMode, setSelectedNodeType]);

//   // 초기 설정 - 기본값을 캠페인 모드로 변경
//   useEffect(() => {
//     if (viewMode === null) {
//       // 초기 상태를 캠페인 보기('campaign')로 설정
//       useTreeMenuStore.getState().setViewMode('campaign');
//       useTreeMenuStore.getState().setSelectedNodeType('campaign');
//     }
//   }, [viewMode]);

//   // 정렬 필드 토글
//   const toggleSortField = (field: SortType) => {
//     if (campaignSort.type === field) return;
//     sortByNodeType(selectedNodeType, field, campaignSort.direction);
//   };

//   // 노드 타입과 뷰 모드를 함께 변경하는 핸들러
//   const handleNodeTypeSort = (nodeType: NodeType, direction: SortDirection) => {
//     // 정렬 파라미터 업데이트
//     sortByNodeType(nodeType, campaignSort.type, direction);
    
//     // 노드 타입에 맞게 뷰 모드 동기화
//     if (nodeType === 'tenant') {
//       setViewMode('tenant');
//     } else if (nodeType === 'campaign') {
//       setViewMode('campaign');
//     } else if (nodeType === 'all') {
//       // 'all' 타입일 경우 캠페인 뷰 모드로 설정
//       // 이렇게 하면 전체 타입을 선택했을 때 캠페인까지 보이게 됨
//       setViewMode('campaign');
//     }
    
//     setIsPopoverOpen(false);
//   };

//   // 활성 정렬 상태 확인
//   const isActiveSort = (nodeType: NodeType, direction: SortDirection) => {
//     return selectedNodeType === nodeType && campaignSort.direction === direction;
//   };

//   // 뷰 모드 버튼 클래스 결정
//   const getViewButtonClass = (mode: ViewMode) => {
//     const baseClass = "h-6 min-w-6 px-1 text-xs border rounded";
//     return viewMode === mode 
//       ? `${baseClass} bg-[#56CAD6] text-[#fff] ` 
//       : `${baseClass} hover:bg-gray-50`;
//   };

//   // 뷰 모드 변경 핸들러 - 노드 타입 동기화
//   const handleViewModeChange = (mode: ViewMode) => {
//     setViewMode(mode);
    
//     // 뷰 모드에 맞게 노드 타입 동기화
//     if (mode === 'tenant') {
//       setSelectedNodeType('tenant');
//     } else if (mode === 'campaign') {
//       // 캠페인 뷰로 변경할 때 전체 모드인 경우 그대로 유지, 아니면 캠페인 모드로 설정
//       if (selectedNodeType !== 'all') {
//         setSelectedNodeType('campaign');
//       }
//     }
//   };

//   // 뷰 모드 버튼 렌더링
//   const renderViewButtons = () => {
//     return (
//       <div className="flex gap-1">
//         <button
//           className={getViewButtonClass('tenant')}
//           onClick={() => handleViewModeChange('tenant')}
//           title="테넌트 보기"
//         >
//           T
//         </button>
//         <button
//           className={getViewButtonClass('campaign')}
//           onClick={() => handleViewModeChange('campaign')}
//           title="캠페인 보기"
//         >
//           C
//         </button>
//         {/* {viewMode} */}
//       </div>
//     );
//   };

//   return (
//     <div className="flex items-center">
//       {/* 정렬 버튼 */}
//       <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
//         <PopoverTrigger asChild>
//           <CommonButton
//             variant="ghost"
//             size="sm"
//             className="text-xs font-normal gap-[2px] hover:bg-[transparent] text-[#888] !p-0"
//           >
//             정렬
//             <Image
//               src={`/tree-menu/array.png`}
//               alt={`정렬`}
//               width={9}
//               height={10}
//             />
//           </CommonButton>
//         </PopoverTrigger>
//         <PopoverContent className="w-auto min-w-[180px] p-0 py-[10px] px-[12px] rounded-[3px] border border-[#333]" align="start">
//           <div className="flex flex-col">
//             {/* 정렬 기준 헤더와 필드 토글 */}
//             <div className="">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm text-[#333]">정렬 기준</span>
//                 {renderViewButtons()}
//               </div>

//               <div className="flex gap-2">
//                 <button
//                   className={`flex-1 px-[6px] py-[4px] text-sm rounded-md border ${
//                     campaignSort.type === "id" 
//                       ? "bg-[#56CAD6] text-[#fff] " 
//                       : "bg-white text-[#333] border-gray-200 hover:bg-gray-50"
//                   }`}
//                   onClick={() => toggleSortField("id")}
//                 >
//                   ID
//                 </button>
//                 <button
//                   className={`flex-1 px-[6px] py-[4px] text-sm rounded-md border ${
//                     campaignSort.type === "name" 
//                       ? "bg-[#56CAD6] text-[#fff] " 
//                       : "bg-white text-[#333] border-gray-200 hover:bg-gray-50"
//                   }`}
//                   onClick={() => toggleSortField("name")}
//                 >
//                   이름
//                 </button>
//               </div>
//             </div>

//             {/* 구분선 */}
//             <div className="border-t border-gray-200 my-2"></div>

//             {/* 전체 정렬 옵션 */}
//             <div className="flex items-center hover:bg-[#F4F6F9] rounded-md px-[6px] py-[4px]">
//               <div className="flex-1 text-sm text-[#333]">전체 보기</div>
//               <div className="flex gap-2">
//                 <button
//                   className={`p-1.5 rounded-md ${
//                     isActiveSort('all', 'asc')
//                       ? 'bg-[#56CAD6] text-[#fff]'
//                       : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
//                   }`}
//                   onClick={() => handleNodeTypeSort('all', 'asc')}
//                   title={`${campaignSort.type === 'name' ? '이름' : 'ID'} 오름차순`}
//                 >
//                   <ArrowUp className="h-4 w-4" />
//                 </button>
//                 <button
//                   className={`p-1.5 rounded-md ${
//                     isActiveSort('all', 'desc')
//                       ? 'bg-[#56CAD6] text-[#fff]'
//                       : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
//                   }`}
//                   onClick={() => handleNodeTypeSort('all', 'desc')}
//                   title={`${campaignSort.type === 'name' ? '이름' : 'ID'} 내림차순`}
//                 >
//                   <ArrowDown className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>

//             {/* 구분선 */}
//             <div className="border-t border-gray-200 my-2"></div>

//             {/* 테넌트 정렬 옵션 */}
//             <div className="flex items-center hover:bg-[#F4F6F9] rounded-md px-[6px] py-[4px]">
//               <div className="flex-1 text-sm text-[#333]">테넌트 보기</div>
//               <div className="flex gap-2">
//                 <button
//                   className={`p-1.5 rounded-md ${
//                     isActiveSort('tenant', 'asc')
//                       ? 'bg-[#56CAD6] text-[#fff]'
//                       : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
//                   }`}
//                   onClick={() => handleNodeTypeSort('tenant', 'asc')}
//                   title={`${campaignSort.type === 'name' ? '이름' : 'ID'} 오름차순`}
//                 >
//                   <ArrowUp className="h-4 w-4" />
//                 </button>
//                 <button
//                   className={`p-1.5 rounded-md ${
//                     isActiveSort('tenant', 'desc')
//                       ? 'bg-[#56CAD6] text-[#fff]'
//                       : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
//                   }`}
//                   onClick={() => handleNodeTypeSort('tenant', 'desc')}
//                   title={`${campaignSort.type === 'name' ? '이름' : 'ID'} 내림차순`}
//                 >
//                   <ArrowDown className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>

//             {/* 캠페인 정렬 옵션 */}
//             <div className="flex items-center hover:bg-[#F4F6F9] rounded-md px-[6px] py-[4px]">
//               <div className="flex-1 text-sm text-[#333]">캠페인 보기</div>
//               <div className="flex gap-2">
//                 <button
//                   className={`p-1.5 rounded-md ${
//                     isActiveSort('campaign', 'asc')
//                       ? 'bg-[#56CAD6] text-[#fff]'
//                       : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
//                   }`}
//                   onClick={() => handleNodeTypeSort('campaign', 'asc')}
//                   title={`${campaignSort.type === 'name' ? '이름' : 'ID'} 오름차순`}
//                 >
//                   <ArrowUp className="h-4 w-4" />
//                 </button>
//                 <button
//                   className={`p-1.5 rounded-md ${
//                     isActiveSort('campaign', 'desc')
//                       ? 'bg-[#56CAD6] text-[#fff]'
//                       : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
//                   }`}
//                   onClick={() => handleNodeTypeSort('campaign', 'desc')}
//                   title={`${campaignSort.type === 'name' ? '이름' : 'ID'} 내림차순`}
//                 >
//                   <ArrowDown className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </PopoverContent>
//       </Popover>
//     </div>
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
    viewMode,
    setSelectedNodeType,
  } = useTreeMenuStore();

  // 초기 설정
  useEffect(() => {
    if (viewMode === null) {
      // 초기 상태를 캠페인 보기로 설정
      useTreeMenuStore.getState().setViewMode('campaign');
      useTreeMenuStore.getState().setSelectedNodeType('campaign');
    }
  }, [viewMode]);

  // 정렬 필드 토글
  const toggleSortField = (field: SortType) => {
    if (campaignSort.type === field) return;
    sortByNodeType(selectedNodeType, field, campaignSort.direction);
  };

  // 노드 타입과 정렬 방향을 설정하는 핸들러
  const handleNodeTypeSort = (nodeType: NodeType, direction: SortDirection) => {
    console.log("정렬 버튼 클릭:", { nodeType, direction });
    
    // 정렬 파라미터 업데이트 (viewMode는 변경하지 않음)
    sortByNodeType(nodeType, campaignSort.type, direction);
    
    // UI 갱신을 위한 강제 리렌더링 수행
    setTimeout(() => {
      // 이벤트 발생 시키기 (강제 리렌더링)
      window.dispatchEvent(new Event('resize'));
    }, 50);
    
    setIsPopoverOpen(false);
  };

  // 활성 정렬 상태 확인
  const isActiveSort = (nodeType: NodeType, direction: SortDirection) => {
    return selectedNodeType === nodeType && campaignSort.direction === direction;
  };

  // 뷰 모드 버튼 클래스 결정
  const getViewButtonClass = (mode: ViewMode) => {
    const baseClass = "h-6 min-w-6 px-1 text-xs border rounded";
    return viewMode === mode 
      ? `${baseClass} bg-[#56CAD6] text-[#fff] ` 
      : `${baseClass} hover:bg-gray-50`;
  };

  // 뷰 모드 변경 핸들러 (단, 정렬 타입은 변경하지 않음)
  const handleViewModeChange = (mode: ViewMode) => {
    console.log("뷰 모드 변경:", mode);
    setViewMode(mode);
    // 노드 타입은 변경하지 않음 (정렬 기준 유지)
  };

  // 뷰 모드 버튼 렌더링
  const renderViewButtons = () => {
    return (
      <div className="flex gap-1">
        <button
          className={getViewButtonClass('tenant')}
          onClick={() => handleViewModeChange('tenant')}
          title="테넌트 보기"
        >
          T
        </button>
        <button
          className={getViewButtonClass('campaign')}
          onClick={() => handleViewModeChange('campaign')}
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
            {/* <div className="flex items-center hover:bg-[#F4F6F9] rounded-md px-[6px] py-[4px]">
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
            </div> */}

            {/* 구분선 */}
            {/* <div className="border-t border-gray-200 my-2"></div> */}

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