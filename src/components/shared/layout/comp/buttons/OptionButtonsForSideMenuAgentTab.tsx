// 파일 경로: src/components/OptionButtonsForSideMenuAgentTab.tsx
"use client";

import React from 'react';
import { FilterIcon, SortAsc } from "lucide-react";
import CommonButton from '@/components/shared/CommonButton';

interface Props {}

const OptionButtonsForSideMenuAgentTab = (props: Props) => {
  return (
    <div className="flex gap-1">
      <CommonButton variant="ghost" size="sm" className="py-1 px-2 text-xs">
        <span>필터</span>
        <FilterIcon className="h-3 w-3 ml-1" />
      </CommonButton>
      <CommonButton variant="ghost" size="sm" className="py-1 px-2 text-xs">
        <span>정렬</span>
        <SortAsc className="w-3 h-3 ml-1" />
      </CommonButton>
    </div>
  );
};

export default OptionButtonsForSideMenuAgentTab;
