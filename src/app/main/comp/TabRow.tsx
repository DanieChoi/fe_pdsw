"use client";

import React from 'react';
import { useTabStore } from '@/store/tabStore';
import TabSection from './TabSection';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

interface TabRowProps {
  rowId: string;
}

const TabRow: React.FC<TabRowProps> = ({ rowId }) => {
  const {
    rows,
    addRow,
    addSection,
    removeRow,
  } = useTabStore();

  const row = rows.find(r => r.id === rowId);
  if (!row) return null;

  // Split 버튼 핸들러
  const handleSplitClick = (e: React.MouseEvent) => {
    if (e.ctrlKey) {
      // 새 행(세로 분할)
      addRow();
    } else {
      // 현재 행 안에 새 섹션(가로 분할)
      addSection(rowId);
    }
  };

  // 행 삭제 핸들러
  const handleRemoveRow = () => {
    removeRow(rowId);
  };

  const canRemove = rowId !== 'row-1'; // 첫 번째 행은 삭제 불가능

  return (
    <div className="flex items-center min-h-[44px] w-full">
      <div className="flex-1 flex w-[calc(100%-46px)]">
        {/* 섹션들 */}
        {row.sections.map((section, idx) => (
          <TabSection
            key={section.id}
            rowId={rowId}
            sectionId={section.id}
            width={section.width}
            canRemove={section.id !== 'default'}
            showDivider={idx < row.sections.length - 1}
          />
        ))}
      </div>

      {/* 행 우측의 버튼들 */}
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