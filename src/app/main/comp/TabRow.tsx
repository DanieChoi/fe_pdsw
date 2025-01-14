// C:\Users\terec\fe_pdsw\src\app\main\comp\TabRow.tsx
"use client";

import React from 'react';
import { useTabStore } from '@/store/tabStore';
import TabSection from './TabSection';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface TabRowProps {
  rowId: string;
}

const TabRow: React.FC<TabRowProps> = ({ rowId }) => {
  const {
    rows,
    addRow,
    addSection,
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

  return (
    <div className="border-b border-gray-200 w-full flex flex-row items-stretch">
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

      {/* 행 우측의 Split 버튼 */}
      <div className="flex items-center px-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleSplitClick}
          className="flex items-center gap-1 hover:bg-gray-100"
        >
          <Plus className="h-4 w-4" />
          Split
        </Button>
      </div>
    </div>
  );
};

export default TabRow;
