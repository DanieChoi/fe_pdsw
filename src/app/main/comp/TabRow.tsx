// src/app/main/comp/TabRow.tsx
"use client";

import React, { useState } from "react";
import { useTabStore } from "@/store/tabStore";
import TabSection from "./TabSection";
import { CommonButton } from "@/components/shared/CommonButton";
import Image from "next/image";
import TabRowMenu from "./TabRowMenu";

interface TabRowProps {
  rowId: string;
}

const TabRow: React.FC<TabRowProps> = ({ rowId }) => {
  const { rows, addSection, removeRow } = useTabStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const row = rows.find((r) => r.id === rowId);
  if (!row) return null;

  const handleSplitClick = () => {
    if (row.sections.length === 1) {
      addSection(rowId);
    }
  };

  const handleRemoveRow = () => {
    removeRow(rowId);
  };

  const handleDropdownToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const canRemove = rowId !== "row-1";

  return (
    <div className="flex items-center min-h-[30px] w-full border-b border-[#ebebeb]">
      <div className="flex-1 flex w-[calc(100%-46px)]">
        {row.sections.map((section, idx) => (
          <TabSection
            key={section.id}
            rowId={rowId}
            sectionId={section.id}
            width={section.width}
            canRemove={section.id !== "default"}
            showDivider={idx < row.sections.length - 1}
          />
        ))}
      </div>

      <div className="flex-none flex items-center">
        <CommonButton variant="tabEtc" size="icon" onClick={handleSplitClick}>
          <Image src="/header-menu/tab_plus.svg" alt="plus" width={8} height={8} />
        </CommonButton>
        <CommonButton variant="tabEtc" size="icon" onClick={handleDropdownToggle}>
          <Image
            src="/header-menu/dropdown-toggle.png"
            alt="dropdown-toggle"
            width={3}
            height={10}
          />
        </CommonButton>

        {canRemove && (
          <CommonButton variant="tabEtc" size="icon" onClick={handleRemoveRow}>
            <Image src="/header-menu/tab_minus.svg" alt="minus" width={8} height={8} />
          </CommonButton>
        )}
      </div>

      <TabRowMenu
        rowId={rowId}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </div>
  );
};

export default TabRow;
