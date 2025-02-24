// src/app/main/comp/DraggableTab.tsx
"use client";

import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { X } from "lucide-react";
import Image from "next/image";
import { CommonButton } from "@/components/shared/CommonButton";

interface DraggableTabProps {
  id: number;
  uniqueKey: string;
  title: string;
  //icon: string;
  isActive: boolean;
  onRemove: () => void;
  onSelect: () => void;

  // DnD에서 어느 섹션으로부터 드래그되는지 판단 위해
  rowId: string;
  sectionId: string;
}

const DraggableTab: React.FC<DraggableTabProps> = ({
  id,
  uniqueKey,
  title,
  //icon,
  isActive,
  onRemove,
  onSelect,
  rowId,
  sectionId,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: uniqueKey,
    data: {
      type: "tab",
      id,
      uniqueKey,
      rowId,
      sectionId,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        flex items-center gap-2 px-3 py-1.5 h-[30px] drag-tab cursor-pointer
        ${isActive ? "bg-[#56CAD6] text-white" : "bg-white text-[#777]"}
      `}
      onClick={onSelect}
    >
      {/* {icon && (
        <Image
          src={icon}
          alt={title}
          width={16}
          height={16}
          className="flex-none object-contain"
        />
      )} */}
      <span className="text-sm whitespace-nowrap">{title}</span>
      <CommonButton
        variant="ghost"
        size="sm"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className={`
          p-0
          ${isActive ? "hover:bg-[transparent]" : "hover:bg-[transparent]"}`}
      >
      <Image
          src={isActive ? "/header-menu/maintap_colse_on.png" : "/header-menu/maintap_colse_off.png"}
          alt="닫기"
          width={8}
          height={8}
        />
      </CommonButton>
    </div>
  );
};

export default DraggableTab;
