
// import React from "react";
// import { useDraggable } from "@dnd-kit/core";
// import { useDroppable } from "@dnd-kit/core";
// import { CommonButton } from "@/components/shared/CommonButton";
// import Image from "next/image";

// interface DraggableTabProps {
//   id: number;
//   uniqueKey: string;
//   title: string;
//   isActive: boolean;
//   onRemove: () => void;
//   onSelect: () => void;
//   rowId: string;
//   sectionId: string;
// }

// export default function DraggableTab({
//   id,
//   uniqueKey,
//   title,
//   isActive,
//   onRemove,
//   onSelect,
//   rowId,
//   sectionId,
// }: DraggableTabProps) {
//   // 드래그 ID와 드롭 ID를 설정
//   const elementId = uniqueKey;
  
//   // useDraggable과 useDroppable을 함께 사용
//   const { attributes, listeners, setNodeRef: setDragNodeRef, transform, isDragging } = useDraggable({
//     id: elementId,
//     data: {
//       type: "tab",
//       id,
//       uniqueKey,
//       rowId,
//       sectionId,
//     },
//   });
  
//   // 드롭 영역 설정
//   const { isOver, setNodeRef: setDropNodeRef } = useDroppable({
//     id: `droppable-${elementId}`,
//     data: {
//       type: "tab",
//       id,
//       uniqueKey,
//       rowId,
//       sectionId,
//     },
//   });

//   // 두 ref를 결합하는 함수
//   const setNodeRef = (node: HTMLElement | null) => {
//     setDragNodeRef(node);
//     setDropNodeRef(node);
//   };

//   // 드래그 중일 때는 transform 스타일을 적용하고, 아닐 때는 빈 객체 반환
//   const style = isDragging && transform
//     ? {
//         transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
//         zIndex: 999,
//         // 잔상 방지를 위한 추가 속성
//         willChange: 'transform',
//         transition: 'none', // 드래그 중에는 transition 효과 제거
//       }
//     : { };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       className={`
//         flex-none flex items-center gap-2 px-3 border-r border-[#ebebeb] relative h-full
//         cursor-pointer select-none
//         ${isActive ? "bg-[#56CAD6] text-white" : "bg-white text-[#777]"}
//         ${isDragging ? "opacity-70 shadow-md" : "opacity-100"}
//         ${isOver && !isDragging ? "bg-blue-100 border-b border-blue-500" : ""}
//       `}
//       onClick={onSelect}
//       {...listeners}
//       {...attributes}
//       data-tab-id={id}
//       data-tab-key={uniqueKey}
//       data-row-id={rowId}
//       data-section-id={sectionId}
//     >
//       {/* 드롭 가능한 영역임을 표시하는 간단한 시각적 표시 */}
//       {isOver && !isDragging && (
//         <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
//       )}

//       {/* 탭 제목 */}
//       <span className="text-sm whitespace-nowrap">{title}</span>
      
//       {/* 닫기 버튼 */}
//       <CommonButton
//         variant="ghost"
//         size="sm"
//         onClick={(e) => {
//           e.stopPropagation();
//           onRemove();
//         }}
//         className={`
//           p-0 min-w-[8px]
//           ${isActive ? "hover:bg-[transparent]" : "hover:bg-[transparent]"}`}
//       >
//         <Image
//           src={isActive ? "/header-menu/maintap_colse_on.png" : "/header-menu/maintap_colse_off.png"}
//           alt="닫기"
//           width={8}
//           height={8}
//         />
//       </CommonButton>
//     </div>
//   );
// }

// import React from "react";
// import { useDraggable } from "@dnd-kit/core";
// import { useDroppable } from "@dnd-kit/core";
// import { CommonButton } from "@/components/shared/CommonButton";
// import Image from "next/image";

// interface DraggableTabProps {
//   id: number;
//   uniqueKey: string;
//   title: string;
//   isActive: boolean;
//   onRemove: () => void;
//   onSelect: () => void;
//   rowId: string;
//   sectionId: string;
// }

// export default function DraggableTab({
//   id,
//   uniqueKey,
//   title,
//   isActive,
//   onRemove,
//   onSelect,
//   rowId,
//   sectionId,
// }: DraggableTabProps) {
//   // 드래그 ID와 드롭 ID를 설정
//   const elementId = uniqueKey;
  
//   // useDraggable과 useDroppable을 함께 사용
//   const { attributes, listeners, setNodeRef: setDragNodeRef, transform, isDragging } = useDraggable({
//     id: elementId,
//     data: {
//       type: "tab",
//       id,
//       uniqueKey,
//       rowId,
//       sectionId,
//     },
//   });
  
//   // 드롭 영역 설정
//   const { isOver, setNodeRef: setDropNodeRef } = useDroppable({
//     id: `droppable-${elementId}`,
//     data: {
//       type: "tab",
//       id,
//       uniqueKey,
//       rowId,
//       sectionId,
//     },
//   });

//   // 두 ref를 결합하는 함수
//   const setNodeRef = (node: HTMLElement | null) => {
//     setDragNodeRef(node);
//     setDropNodeRef(node);
//   };

//   // 드래그 중일 때는 transform 스타일을 적용하고, 아닐 때는 빈 객체 반환
//   const style = isDragging && transform
//     ? {
//         transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
//         zIndex: 999,
//         // 잔상 방지를 위한 추가 속성
//         willChange: 'transform',
//         transition: 'none', // 드래그 중에는 transition 효과 제거
//       }
//     : { };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       className={`
//         flex-none flex items-center gap-2 px-3 border-r border-t border-[#ebebeb] relative h-full
//         cursor-pointer select-none rounded-t-[3px] rounded-b-none
//         ${isActive ? "bg-[#56CAD6] text-white" : "bg-white text-[#777]"}
//         ${isDragging ? "opacity-70 shadow-md" : "opacity-100"}
//         ${isOver && !isDragging ? "bg-blue-100 border-b-2 border-blue-500" : ""}
//       `}
//       onClick={onSelect}
//       {...listeners}
//       {...attributes}
//       data-tab-id={id}
//       data-tab-key={uniqueKey}
//       data-row-id={rowId}
//       data-section-id={sectionId}
//     >
//       {/* 드롭 가능한 영역임을 표시하는 간단한 시각적 표시 - 더 명확하게 */}
//       {isOver && !isDragging && (
//         <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"></div>
//       )}

//       {/* 탭 제목 */}
//       <span className="text-sm whitespace-nowrap">{title}</span>
      
//       {/* 닫기 버튼 */}
//       <CommonButton
//         variant="ghost"
//         size="sm"
//         onClick={(e) => {
//           e.stopPropagation();
//           onRemove();
//         }}
//         className={`
//           p-0 min-w-[8px]
//           ${isActive ? "hover:bg-[transparent]" : "hover:bg-[transparent]"}`}
//       >
//         <Image
//           src={isActive ? "/header-menu/maintap_colse_on.png" : "/header-menu/maintap_colse_off.png"}
//           alt="닫기"
//           width={8}
//           height={8}
//         />
//       </CommonButton>
//     </div>
//   );
// }

// src/app/main/comp/DraggableTab.tsx
"use client";

import React, { CSSProperties } from "react";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { CommonButton } from "@/components/shared/CommonButton";
import Image from "next/image";

interface DraggableTabProps {
  id: number;
  uniqueKey: string;
  title: string;
  isActive: boolean;
  onRemove: () => void;
  onSelect: () => void;
  rowId: string;
  sectionId: string;
}

export default function DraggableTab({
  id,
  uniqueKey,
  title,
  isActive,
  onRemove,
  onSelect,
  rowId,
  sectionId,
}: DraggableTabProps) {
  const elementId = uniqueKey;

  const {
    attributes,
    listeners,
    setNodeRef: setDragNodeRef,
    transform,
    isDragging,
  } = useDraggable({ id: elementId, data: { type: "tab", id, uniqueKey, rowId, sectionId } });

  const { isOver, setNodeRef: setDropNodeRef } = useDroppable({ id: `droppable-${elementId}`, data: { type: "tab", id, uniqueKey, rowId, sectionId } });

  const setNodeRef = (node: HTMLElement | null) => {
    setDragNodeRef(node);
    setDropNodeRef(node);
  };

  // Only translate without removing from document flow
  const style: CSSProperties = isDragging && transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 999,
        willChange: 'transform',
        transition: 'none',
      }
    : {};

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        flex-none flex items-center gap-2 px-3 border-r border-t border-[#ebebeb]
        relative h-full cursor-pointer select-none rounded-t-[3px] rounded-b-none
        ${isActive ? "bg-[#56CAD6] text-white" : "bg-white text-[#777]"}
        ${isDragging ? "opacity-70 shadow-md" : "opacity-100"}
        ${isOver && !isDragging ? "after:absolute after:inset-0 after:border-[1.5px] after:border-dashed after:border-blue-500 after:pointer-events-none" : ""}
      `}
      onClick={onSelect}
      {...listeners}
      {...attributes}
      data-tab-id={id}
      data-tab-key={uniqueKey}
      data-row-id={rowId}
      data-section-id={sectionId}
    >
      <span className="text-sm whitespace-nowrap">{title}</span>
      <CommonButton
        variant="ghost"
        size="sm"
        onClick={(e) => { e.stopPropagation(); onRemove(); }}
        className="p-0 min-w-[8px] hover:bg-transparent"
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
}
