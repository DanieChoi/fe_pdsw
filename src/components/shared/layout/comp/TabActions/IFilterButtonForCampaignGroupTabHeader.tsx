// "use client";

// import React, { useState } from "react";
// import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
// import CommonButton from "@/components/shared/CommonButton";
// import { ArrowUp, ArrowDown } from "lucide-react";
// import Image from 'next/image';
// import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";

// // 노드 타입별 정렬 필드 정의
// type NodeType = "tenant" | "group" | "campaign";

// const IFilterButtonForCampaignGroupTabHeader = () => {
//   const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
//   // 스토어에서 정렬 상태 가져오기
//   const { 
//     sortField, 
//     sortDirection, 
//     applySort 
//   } = useSideMenuCampaignGroupTabStore();

//   // 특정 노드 타입 및 방향으로 정렬 적용
//   const handleSortDirectionSelect = (nodeType: NodeType, direction: "asc" | "desc", event: React.MouseEvent) => {
//     event.stopPropagation();
    
//     // 노드 타입에 따라 적절한 ID 필드 선택 (우리는 항상 'id'를 sortField로 사용하고, 
//     // 노드 타입에 따라 다른 ID 필드를 사용하는 것을 스토어의 sortTreeData 함수에서 처리)
//     applySort("id", direction);
//     setIsPopoverOpen(false);
//   };

//   return (
//     <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
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
//       <PopoverContent className="w-auto min-w-[180px] p-0 py-[10px] px-[12px] rounded-[3px] border border-[#333]" align="start">
//         <div className="flex flex-col space-y-2">
//           <div className="text-sm font-medium mb-1">정렬 기준</div>
          
//           {/* 테넌트 정렬 옵션 */}
//           <div className="flex items-center hover:bg-[#F4F6F9] cursor-pointer rounded-[3px] px-[6px] py-[4px]">
//             <div className="flex-1 text-sm">테넌트 보기</div>
//             <div className="flex gap-1">
//               <button
//                 className={`p-1 rounded text-gray-400 hover:text-[#333]`}
//                 onClick={(e) => handleSortDirectionSelect('tenant', 'asc', e)}
//               >
//                 <ArrowUp className="h-3.5 w-3.5" />
//               </button>
//               <button
//                 className={`p-1 rounded text-gray-400 hover:text-[#333]`}
//                 onClick={(e) => handleSortDirectionSelect('tenant', 'desc', e)}
//               >
//                 <ArrowDown className="h-3.5 w-3.5" />
//               </button>
//             </div>
//           </div>
          
//           {/* 그룹 정렬 옵션 */}
//           <div className="flex items-center hover:bg-[#F4F6F9] cursor-pointer rounded-[3px] px-[6px] py-[4px]">
//             <div className="flex-1 text-sm">그룹 보기</div>
//             <div className="flex gap-1">
//               <button
//                 className={`p-1 rounded text-gray-400 hover:text-[#333]`}
//                 onClick={(e) => handleSortDirectionSelect('group', 'asc', e)}
//               >
//                 <ArrowUp className="h-3.5 w-3.5" />
//               </button>
//               <button
//                 className={`p-1 rounded text-gray-400 hover:text-[#333]`}
//                 onClick={(e) => handleSortDirectionSelect('group', 'desc', e)}
//               >
//                 <ArrowDown className="h-3.5 w-3.5" />
//               </button>
//             </div>
//           </div>
          
//           {/* 캠페인 정렬 옵션 */}
//           <div className="flex items-center hover:bg-[#F4F6F9] cursor-pointer rounded-[3px] px-[6px] py-[4px]">
//             <div className="flex-1 text-sm">캠페인 보기</div>
//             <div className="flex gap-1">
//               <button
//                 className={`p-1 rounded text-gray-400 hover:text-[#333]`}
//                 onClick={(e) => handleSortDirectionSelect('campaign', 'asc', e)}
//               >
//                 <ArrowUp className="h-3.5 w-3.5" />
//               </button>
//               <button
//                 className={`p-1 rounded text-gray-400 hover:text-[#333]`}
//                 onClick={(e) => handleSortDirectionSelect('campaign', 'desc', e)}
//               >
//                 <ArrowDown className="h-3.5 w-3.5" />
//               </button>
//             </div>
//           </div>
          
//           <div className="border-t my-1"></div>
          
//         </div>
//       </PopoverContent>
//     </Popover>
//   );
// };

// export default IFilterButtonForCampaignGroupTabHeader;

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
    sortByNodeType(nodeType, sortField, direction);
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
            <div className="flex border border-dashed border-red-500 rounded overflow-hidden">
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
                className={`p-1 rounded text-gray-400 hover:text-[#333]`}
                onClick={() => handleNodeTypeSort('tenant', 'asc')}
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
              <button
                className={`p-1 rounded text-gray-400 hover:text-[#333]`}
                onClick={() => handleNodeTypeSort('tenant', 'desc')}
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
                className={`p-1 rounded text-gray-400 hover:text-[#333]`}
                onClick={() => handleNodeTypeSort('group', 'asc')}
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
              <button
                className={`p-1 rounded text-gray-400 hover:text-[#333]`}
                onClick={() => handleNodeTypeSort('group', 'desc')}
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
                className={`p-1 rounded text-gray-400 hover:text-[#333]`}
                onClick={() => handleNodeTypeSort('campaign', 'asc')}
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
              <button
                className={`p-1 rounded text-gray-400 hover:text-[#333]`}
                onClick={() => handleNodeTypeSort('campaign', 'desc')}
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