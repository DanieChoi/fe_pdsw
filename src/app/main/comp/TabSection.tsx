// src/app/main/comp/TabSection.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { useDroppable } from "@dnd-kit/core";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { CommonButton } from "@/components/shared/CommonButton";
import { useTabStore } from "@/store/tabStore";
import DraggableTab from "./DraggableTab";
import Image from "next/image";

interface TabSectionProps {
  rowId: string;
  sectionId: string;
  width: number;
  canRemove?: boolean;
  showDivider?: boolean;
}

const TabSection: React.FC<TabSectionProps> = ({
  rowId,
  sectionId,
  width,
  canRemove = true,
  showDivider = false,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrolling, setIsScrolling] = useState<"left" | "right" | null>(null);

  const { isOver, setNodeRef } = useDroppable({
    id: `section-${rowId}-${sectionId}`,
    data: {
      type: "section",
      rowId,
      sectionId,
    },
  });

  const {
    rows,
    removeTab,
    removeSection,
    setSectionActiveTab, // 새로 사용할 함수
  } = useTabStore();

  useEffect(() => {
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 100;
    const newLeft =
      direction === "left"
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: newLeft,
      behavior: "smooth",
    });
  };

  const startScrolling = (direction: "left" | "right") => {
    setIsScrolling(direction);
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    scroll(direction);
    scrollIntervalRef.current = setInterval(() => {
      scroll(direction);
    }, 150);
  };

  const stopScrolling = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    setIsScrolling(null);
  };

  // 현재 섹션 찾기
  const row = rows.find((r) => r.id === rowId);
  if (!row) return null;
  const section = row.sections.find((s) => s.id === sectionId);
  if (!section) return null;

  return (
    <div
      ref={setNodeRef}
      className={`
        flex-none h-full relative
        transition-colors duration-200
        ${isOver ? "bg-gray-100" : "bg-white"}
        ${showDivider ? "border-r border-gray-200" : ""}
      `}
      style={{ width: `${width}%` }}
    >
      <div className="flex items-center">
        <CommonButton
          variant="tabEtc"
          size="sm"
          onMouseDown={() => startScrolling("left")}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
          onTouchStart={() => startScrolling("left")}
          onTouchEnd={stopScrolling}
          className={`
            ${isScrolling === "left" ? "bg-gray-100" : ""}
          `}
        >
        
           <Image
            src="/header-menu/leftArrow.svg"
            alt="left"
            width={8}
            height={8}
          />
        </CommonButton>

        <div
          ref={scrollContainerRef}
          className="flex-1 flex overflow-hidden scroll-smooth"
        >
          {section.tabs.map((tab) => {
            const isActive = section.activeTabKey === tab.uniqueKey;
            return (
              <DraggableTab
                key={tab.uniqueKey}
                id={tab.id}
                uniqueKey={tab.uniqueKey}
                title={tab.title}
                //icon={tab.icon}
                isActive={isActive}
                // 탭 제거
                onRemove={() => removeTab(tab.id, tab.uniqueKey)}
                // 탭 선택 => 섹션 단위 활성화
                onSelect={() =>
                  setSectionActiveTab(rowId, sectionId, tab.uniqueKey)
                }
                rowId={rowId} // Draggable 시 필요
                sectionId={sectionId}
              />
            );
          })}
        </div>

        <CommonButton
          variant="tabEtc"
          size="sm"
          onMouseDown={() => startScrolling("right")}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
          onTouchStart={() => startScrolling("right")}
          onTouchEnd={stopScrolling}
          className={`
            ${isScrolling === "right" ? "bg-gray-100" : ""}
          `}
        >
          <Image
            src="/header-menu/rightArrow.svg"
            alt="right"
            width={8}
            height={8}
          />
        </CommonButton>

        {canRemove && row.sections.length > 1 && (
          <CommonButton
            variant="tabEtc"
            size="sm"
            onClick={() => removeSection(rowId, sectionId)}
            className=""
          >
            <Image
            src="/header-menu/tab_minus.svg"
            alt="plus"
            width={8}
            height={8}
          />
          </CommonButton>
        )}
      </div>
    </div>
  );
};

export default TabSection;
