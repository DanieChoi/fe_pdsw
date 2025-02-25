// src/app/main/comp/TabRow.tsx
"use client";

import React, { useState } from "react";
import { useTabStore } from "@/store/tabStore";
import TabSection from "./TabSection";
import TabRowMenu from "./TabRowMenu";
import { CommonButton } from "@/components/shared/CommonButton";
import Image from "next/image";

interface TabRowProps {
  rowId: string;
}

const TabRow: React.FC<TabRowProps> = ({ rowId }) => {
  const { rows, addRow, addSection, removeRow } = useTabStore();
  const [menuOpen, setMenuOpen] = useState(false); // 메뉴 열림/닫힘 상태

  const row = rows.find((r) => r.id === rowId);
  if (!row) return null;

  // `+` 버튼 클릭 시 분할 동작
  const handleSplitClick = () => {
    if (row.sections.length === 1) {
      // 현재 행에 새로운 섹션 추가 (최대 2개)
      addSection(rowId);
    } 
    // else if (row.sections.length === 2) {
    //   // 만약 섹션이 이미 2개라면, 새 행 추가
    //   addRow();
    // }
  };

  // 행 삭제 핸들러
  const handleRemoveRow = () => {
    removeRow(rowId);
  };

  // 드롭다운 토글 처리
  const handleDropdownToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const canRemove = rowId !== "row-1"; // 예시로 첫 번째 행은 삭제 불가능

  return (
    <div className="flex items-center min-h-[30px] w-full border-b border-[#ebebeb]">
      {/* 섹션들 (탭 목록 부분) */}
      <div className="flex-1 flex w-[calc(100%-46px)]">
        {row.sections.map((section, idx) => {
          // TabSection에서 탭들을 렌더링
          return (
            <TabSection
              key={section.id}
              rowId={rowId}
              sectionId={section.id}
              width={section.width}
              canRemove={section.id !== "default"}
              showDivider={idx < row.sections.length - 1}
            />
          );
        })}
      </div>

      {/* 행 우측의 +, - 버튼 */}
      <div className="flex-none flex items-center">
        <CommonButton
          variant="tabEtc"
          size="icon"
          onClick={handleSplitClick}
        >
          <Image
              src="/header-menu/tab_plus.svg"
              alt="plus"
              width={8}
              height={8}
            />
        </CommonButton>
        <CommonButton
          variant="tabEtc"
          size="icon"
          onClick={handleDropdownToggle}
        >
          <Image
              src="/header-menu/dropdown-toggle.png"
              alt="dropdown-toggle"
              width={3}
              height={10}
            />
        </CommonButton>

        {canRemove && (
          <CommonButton
            variant="tabEtc"
            size="icon"
            onClick={handleRemoveRow}
          >
            <Image
              src="/header-menu/tab_minus.svg"
              alt="minus"
              width={8}
              height={8}
            />
          </CommonButton>
        )}
      </div>
      {/* 드롭다운 메뉴 컴포넌트 */}
      <TabRowMenu 
        rowId={rowId} 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
      />
    </div>
  );
};

export default TabRow;
