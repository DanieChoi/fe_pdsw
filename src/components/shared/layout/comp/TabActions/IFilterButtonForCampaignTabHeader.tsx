
// // 파일 경로: src/components/IFilterButtonForCampaignTabHeader.tsx
// "use client";

// import React, { useState } from "react";
// import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
// import CommonButton from "@/components/shared/CommonButton";
// import { FilterIcon } from "lucide-react";
// import SkilFilterOptionPannelForCampaignTab from "./SkilFilterOptionPannelForCampaignTab";
// import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";

// const IFilterButtonForCampaignTabHeader = () => {
//   const [showSkillFilter, setShowSkillFilter] = useState(false);
//   const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
//   // 스토어에서 선택된 스킬 ID 목록을 설정하는 함수 가져오기
//   const { setSkilIdsForCampaignTreeMenu } = useSideMenuCampaignTabStore();

//   // 선택 스킬로 보기 클릭 처리
//   const handleSelectSkillsClick = () => {
//     setShowSkillFilter(true);
//   };

//   // 전체보기 클릭 처리
//   const handleViewAllClick = () => {
//     // 스토어의 선택된 스킬 ID 목록을 빈 배열로 설정 (체크박스 모두 해제 효과)
//     setSkilIdsForCampaignTreeMenu([]);
    
//     // 팝오버 닫기
//     setShowSkillFilter(false);
//     setIsPopoverOpen(false);
//   };

//   return (
//     <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
//       <PopoverTrigger asChild>
//         <CommonButton variant="ghost" size="sm" className="p-2 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900">
//           <span>필터</span>
//           <FilterIcon className="h-4 w-4 ml-1" />
//         </CommonButton>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto min-w-[200px] p-0" align="start">
//         {!showSkillFilter ? (
//           // 기본 필터 옵션 메뉴
//           <div className="flex flex-col">
//             <div className="border-b">
//               <CommonButton 
//                 variant="ghost" 
//                 className="w-full justify-between py-2 px-3 text-sm text-gray-800 hover:bg-gray-100"
//                 onClick={handleViewAllClick}
//               >
//                 <span>전체보기</span>
//               </CommonButton>
//             </div>
//             <div>
//               <CommonButton 
//                 variant="ghost" 
//                 className="w-full justify-between py-2 px-3 text-sm text-gray-800 hover:bg-gray-100"
//                 onClick={handleSelectSkillsClick}
//               >
//                 <span>선택 스킬로 보기</span>
//               </CommonButton>
//             </div>
//           </div>
//         ) : (
//           // 스킬 필터 패널
//           <div className="p-0 w-[500px]">
//             <div className="border-b p-2 flex justify-between items-center">
//               <CommonButton 
//                 variant="ghost" 
//                 size="sm" 
//                 onClick={() => setShowSkillFilter(false)}
//                 className="px-2 text-sm text-gray-800 hover:bg-gray-100"
//               >
//                 &lt; 뒤로
//               </CommonButton>
//               <span className="font-medium text-gray-900">스킬 선택</span>
//               <div className="w-10"></div> {/* 오른쪽 공간 맞추기 용 */}
//             </div>
//             <div className="p-4">
//               <SkilFilterOptionPannelForCampaignTab shouldCloseOnConfirm={true} />
//             </div>
//           </div>
//         )}
//       </PopoverContent>
//     </Popover>
//   );
// };

// export default IFilterButtonForCampaignTabHeader;

"use client";

import React, { useState, useEffect } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import CommonButton from "@/components/shared/CommonButton";
import { FilterIcon, CheckIcon } from "lucide-react";
import SkilFilterOptionPannelForCampaignTab from "./SkilFilterOptionPannelForCampaignTab";
import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";

const IFilterButtonForCampaignTabHeader = () => {
  const [showSkillFilter, setShowSkillFilter] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
  // 스토어에서 선택된 스킬 ID 목록과 필터 모드를 가져오기
  const { 
    skilIdsForCampaignTreeMenu, 
    setSkilIdsForCampaignTreeMenu,
    filterMode,
    setFilterMode
  } = useSideMenuCampaignTabStore();

  // 선택 스킬로 보기 클릭 처리
  const handleSelectSkillsClick = () => {
    setShowSkillFilter(true);
  };

  // 전체보기 클릭 처리
  const handleViewAllClick = () => {
    // 스토어의 선택된 스킬 ID 목록을 빈 배열로 설정 (체크박스 모두 해제 효과)
    setSkilIdsForCampaignTreeMenu([]);
    
    // 필터 모드를 'all'로 설정
    setFilterMode("all");
    
    // 팝오버 닫기
    setShowSkillFilter(false);
    setIsPopoverOpen(false);
  };

  // 선택된 스킬이 있는지 확인하는 효과
  useEffect(() => {
    // 선택된 스킬이 있으면 필터 모드를 'skill'로 설정
    if (skilIdsForCampaignTreeMenu.length > 0) {
      setFilterMode("skill");
    }
  }, [skilIdsForCampaignTreeMenu, setFilterMode]);

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <CommonButton variant="ghost" size="sm" className="p-2 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900">
          <span>필터</span>
          <FilterIcon className="h-4 w-4 ml-1" />
        </CommonButton>
      </PopoverTrigger>
      <PopoverContent className="w-auto min-w-[200px] p-0" align="start">
        {!showSkillFilter ? (
          // 기본 필터 옵션 메뉴
          <div className="flex flex-col">
            <div className="border-b">
              <CommonButton 
                variant="ghost" 
                className="w-full justify-between py-2 px-3 text-sm text-gray-800 hover:bg-gray-100"
                onClick={handleViewAllClick}
              >
                <span>전체보기</span>
                {filterMode === "all" && (
                  <CheckIcon className="h-4 w-4 text-blue-600" />
                )}
              </CommonButton>
            </div>
            <div>
              <CommonButton 
                variant="ghost" 
                className="w-full justify-between py-2 px-3 text-sm text-gray-800 hover:bg-gray-100"
                onClick={handleSelectSkillsClick}
              >
                <span>선택 스킬로 보기</span>
                {filterMode === "skill" && (
                  <CheckIcon className="h-4 w-4 text-blue-600" />
                )}
              </CommonButton>
            </div>
          </div>
        ) : (
          // 스킬 필터 패널
          <div className="p-0 w-[500px]">
            <div className="border-b p-2 flex justify-between items-center">
              <CommonButton 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowSkillFilter(false)}
                className="px-2 text-sm text-gray-800 hover:bg-gray-100"
              >
                &lt; 뒤로
              </CommonButton>
              <span className="font-medium text-gray-900">스킬 선택</span>
              <div className="w-10"></div> {/* 오른쪽 공간 맞추기 용 */}
            </div>
            <div className="p-4">
              <SkilFilterOptionPannelForCampaignTab shouldCloseOnConfirm={true} />
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default IFilterButtonForCampaignTabHeader;