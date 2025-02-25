// "use client";

// import React, { useState } from "react";
// import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { FilterIcon } from "lucide-react";
// import SkilFilterOptionPannelForCampaignTab from "./SkilFilterOptionPannelForCampaignTab";

// const IFilterButtonForCampaignTabHeader = () => {
//   const [showSkillFilter, setShowSkillFilter] = useState(false);
//   const [isPopoverOpen, setIsPopoverOpen] = useState(false);

//   // 선택 스킬로 보기 클릭 처리
//   const handleSelectSkillsClick = () => {
//     setShowSkillFilter(true);
//   };

//   // 전체보기 클릭 처리
//   const handleViewAllClick = () => {
//     setShowSkillFilter(false);
//     setIsPopoverOpen(false);
//   };

//   return (
//     <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
//       <PopoverTrigger asChild>
//         <Button variant="outline" className="p-2" size={"sm"}>
//           <FilterIcon className="h-4 w-4 mr-1" />
//           <span>필터</span>
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto min-w-[200px] p-0" align="start">
//         {!showSkillFilter ? (
//           // 기본 필터 옵션 메뉴
//           <div className="flex flex-col">
//             <div className="border-b">
//               <Button 
//                 variant="ghost" 
//                 className="w-full justify-start rounded-none py-2" 
//                 onClick={handleViewAllClick}
//               >
//                 <span>전체보기</span>
//               </Button>
//             </div>
//             <div>
//               <Button 
//                 variant="ghost" 
//                 className="w-full justify-start rounded-none py-2" 
//                 onClick={handleSelectSkillsClick}
//               >
//                 <span>선택 스킬로 보기</span>
//               </Button>
//             </div>
//           </div>
//         ) : (
//           // 스킬 필터 패널
//           <div className="p-0 w-[500px]">
//             <div className="border-b p-2 flex justify-between items-center">
//               <Button 
//                 variant="ghost" 
//                 size="sm" 
//                 onClick={() => setShowSkillFilter(false)}
//                 className="px-2"
//               >
//                 &lt; 뒤로
//               </Button>
//               <span className="font-medium">스킬 선택</span>
//               <div className="w-10"></div> {/* 오른쪽 공간 맞추기 용 */}
//             </div>
//             <div className="p-4">
//               <SkilFilterOptionPannelForCampaignTab />
//             </div>
//           </div>
//         )}
//       </PopoverContent>
//     </Popover>
//   );
// };

// export default IFilterButtonForCampaignTabHeader;

"use client";

import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import SkilFilterOptionPannelForCampaignTab from "./SkilFilterOptionPannelForCampaignTab";
import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";

const IFilterButtonForCampaignTabHeader = () => {
  const [showSkillFilter, setShowSkillFilter] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
  // 스토어에서 선택된 스킬 ID 목록을 설정하는 함수 가져오기
  const { setSkilIdsForCampaignTreeMenu } = useSideMenuCampaignTabStore();

  // 선택 스킬로 보기 클릭 처리
  const handleSelectSkillsClick = () => {
    setShowSkillFilter(true);
  };

  // 전체보기 클릭 처리
  const handleViewAllClick = () => {
    // 스토어의 선택된 스킬 ID 목록을 빈 배열로 설정 (체크박스 모두 해제 효과)
    setSkilIdsForCampaignTreeMenu([]);
    
    // 팝오버 닫기
    setShowSkillFilter(false);
    setIsPopoverOpen(false);
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="p-2" size={"sm"}>
          <FilterIcon className="h-4 w-4 mr-1" />
          <span>필터</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto min-w-[200px] p-0" align="start">
        {!showSkillFilter ? (
          // 기본 필터 옵션 메뉴
          <div className="flex flex-col">
            <div className="border-b">
              <Button 
                variant="ghost" 
                className="w-full justify-start rounded-none py-2" 
                onClick={handleViewAllClick}
              >
                <span>전체보기</span>
              </Button>
            </div>
            <div>
              <Button 
                variant="ghost" 
                className="w-full justify-start rounded-none py-2" 
                onClick={handleSelectSkillsClick}
              >
                <span>선택 스킬로 보기</span>
              </Button>
            </div>
          </div>
        ) : (
          // 스킬 필터 패널
          <div className="p-0 w-[500px]">
            <div className="border-b p-2 flex justify-between items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowSkillFilter(false)}
                className="px-2"
              >
                &lt; 뒤로
              </Button>
              <span className="font-medium">스킬 선택</span>
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