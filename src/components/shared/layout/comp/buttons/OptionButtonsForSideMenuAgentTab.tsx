// // 파일 경로: src/components/OptionButtonsForSideMenuAgentTab.tsx
// "use client";

// import React from 'react';
// import { FilterIcon, SortAsc } from "lucide-react";
// import CommonButton from '@/components/shared/CommonButton';

// const OptionButtonsForSideMenuAgentTab = (props: object) => {
//   return (
//     <div className="flex gap-1">
//       <CommonButton variant="ghost" size="sm" className="py-1 px-2 text-xs">
//         <span>필터</span>
//         <FilterIcon className="h-3 w-3 ml-1" />
//       </CommonButton>
//       <CommonButton variant="ghost" size="sm" className="py-1 px-2 text-xs">
//         <span>정렬</span>
//         <SortAsc className="w-3 h-3 ml-1" />
//       </CommonButton>
//     </div>
//   );
// };

// export default OptionButtonsForSideMenuAgentTab;

"use client";

import React, { useState } from 'react';
import { FilterIcon, SortAsc, History, Check } from "lucide-react";
import CommonButton from '@/components/shared/CommonButton';
import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

const OptionButtonsForSideMenuAgentTab = (props: object) => {
  // 팝오버 상태 관리
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  // Zustand 스토어에서 상태와 함수 가져오기
  const { selectedBlendKind, setSelectedBlendKind, resetFilter } = useCounselorFilterStore();

  // 필터 옵션 선택 처리
  const handleBlendKindSelect = (blendKind: 1 | 2 | 3 | null) => {
    if (blendKind === null) {
      resetFilter();
    } else {
      setSelectedBlendKind(blendKind);
    }
    // 선택 후 팝오버 닫기
    setIsFilterOpen(false);
  };

  return (
    <div className="flex gap-1">
      {/* 필터 버튼 및 팝오버 */}
      <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <PopoverTrigger asChild>
          <CommonButton variant="ghost" size="sm" className="py-1 px-2 text-xs">
            <span>필터</span>
            <FilterIcon className="h-3 w-3 ml-1" />
          </CommonButton>
        </PopoverTrigger>
        <PopoverContent className="w-[180px] p-0" align="start">
          <div className="py-1">
            {/* 전체 보기 옵션 */}
            <div 
              className="px-2 py-1.5 flex items-center hover:bg-gray-100 cursor-pointer"
              onClick={() => handleBlendKindSelect(null)}
            >
              <History className="mr-2 h-4 w-4" />
              <span className="flex-1 text-sm">전체 보기</span>
              {selectedBlendKind === null && <Check className="h-4 w-4 text-green-600" />}
            </div>
            
            {/* 인바운드 옵션 */}
            <div 
              className="px-2 py-1.5 flex items-center hover:bg-gray-100 cursor-pointer"
              onClick={() => handleBlendKindSelect(1)}
            >
              <Image src="/tree-menu/inbound_counselor.png" alt="인바운드" width={15} height={12} className="mr-2"/>
              <span className="flex-1 text-sm">인바운드</span>
              {selectedBlendKind === 1 && <Check className="h-4 w-4 text-green-600" />}
            </div>
            
            {/* 아웃바운드 옵션 */}
            <div 
              className="px-2 py-1.5 flex items-center hover:bg-gray-100 cursor-pointer"
              onClick={() => handleBlendKindSelect(2)}
            >
              <Image src="/tree-menu/outbound_counselor.png" alt="아웃바운드" width={15} height={12} className="mr-2" />
              <span className="flex-1 text-sm">아웃바운드</span>
              {selectedBlendKind === 2 && <Check className="h-4 w-4 text-green-600" />}
            </div>
            
            {/* 블렌드 옵션 */}
            <div 
              className="px-2 py-1.5 flex items-center hover:bg-gray-100 cursor-pointer"
              onClick={() => handleBlendKindSelect(3)}
            >
              <Image src="/tree-menu/inbound_outbound_mix.png" alt="블렌드" width={15} height={12} className="mr-2"/>
              <span className="flex-1 text-sm">블렌드</span>
              {selectedBlendKind === 3 && <Check className="h-4 w-4 text-green-600" />}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* 정렬 버튼 */}
      <Popover open={isSortOpen} onOpenChange={setIsSortOpen}>
        <PopoverTrigger asChild>
          <CommonButton variant="ghost" size="sm" className="py-1 px-2 text-xs">
            <span>정렬</span>
            <SortAsc className="w-3 h-3 ml-1" />
          </CommonButton>
        </PopoverTrigger>
        <PopoverContent className="w-[180px] p-0" align="start">
          <div className="py-1">
            {/* 정렬 옵션은 요구사항에 없어서 간단한 예시만 추가 */}
            <div className="px-2 py-1.5 flex items-center hover:bg-gray-100 cursor-pointer">
              <span className="flex-1 text-sm">이름순</span>
              <Check className="h-4 w-4 text-green-600" />
            </div>
            <div className="px-2 py-1.5 flex items-center hover:bg-gray-100 cursor-pointer">
              <span className="flex-1 text-sm">최신순</span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default OptionButtonsForSideMenuAgentTab;