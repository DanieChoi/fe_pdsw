// src/app/main/comp/TabRow.tsx
"use client";

import React from "react";
import { useTabStore } from "@/store/tabStore";
import TabSection from "./TabSection";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface TabRowProps {
  rowId: string;
}

const TabRow: React.FC<TabRowProps> = ({ rowId }) => {
  const { rows, addRow, addSection, removeRow } = useTabStore();

  const row = rows.find((r) => r.id === rowId);
  if (!row) return null;

  // `+` 버튼 클릭 시 분할 동작
  const handleSplitClick = () => {
    if (row.sections.length === 1) {
      // 현재 행에 새로운 섹션 추가 (최대 2개)
      addSection(rowId);
    } else if (row.sections.length === 2) {
      // 만약 섹션이 이미 2개라면, 새 행 추가
      addRow();
    }
  };

  // 행 삭제 핸들러
  const handleRemoveRow = () => {
    removeRow(rowId);
  };

  const canRemove = rowId !== "row-1"; // 예시로 첫 번째 행은 삭제 불가능

  return (
    <div className="flex items-center min-h-[44px] w-full">
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
      <div className="flex-none flex items-center gap-1 px-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleSplitClick}
          className="h-6 w-6 hover:bg-gray-100"
        >
          <Plus className="h-4 w-4" />
        </Button>

        {canRemove && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRemoveRow}
            className="h-6 w-6 hover:bg-red-100"
          >
            <Minus className="h-4 w-4 text-red-500" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default TabRow;
