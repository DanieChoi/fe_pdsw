// // src/app/main/comp/DraggableTab.tsx
// "use client";

// import React from "react";
// import { useDraggable } from "@dnd-kit/core";
// import { CSS } from "@dnd-kit/utilities";
// import { X } from "lucide-react";
// import Image from "next/image";
// import { CommonButton } from "@/components/shared/CommonButton";

// interface DraggableTabProps {
//   id: number;
//   uniqueKey: string;
//   title: string;
//   //icon: string;
//   isActive: boolean;
//   onRemove: () => void;
//   onSelect: () => void;

//   // DnD에서 어느 섹션으로부터 드래그되는지 판단 위해
//   rowId: string;
//   sectionId: string;
// }

// const DraggableTab: React.FC<DraggableTabProps> = ({
//   id,
//   uniqueKey,
//   title,
//   //icon,
//   isActive,
//   onRemove,
//   onSelect,
//   rowId,
//   sectionId,
// }) => {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: uniqueKey,
//     data: {
//       type: "tab",
//       id,
//       uniqueKey,
//       rowId,
//       sectionId,
//     },
//   });

//   const style = {
//     transform: CSS.Translate.toString(transform),
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       className={`
//         flex items-center gap-2 px-3 py-1.5 h-[30px] drag-tab cursor-pointer
//         ${isActive ? "bg-[#56CAD6] text-white" : "bg-white text-[#777]"}
//       `}
//       onClick={onSelect}
//     >
//       {/* {icon && (
//         <Image
//           src={icon}
//           alt={title}
//           width={16}
//           height={16}
//           className="flex-none object-contain"
//         />
//       )} */}
//       <span className="text-sm whitespace-nowrap">{title}</span>
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
//       <Image
//           src={isActive ? "/header-menu/maintap_colse_on.png" : "/header-menu/maintap_colse_off.png"}
//           alt="닫기"
//           width={8}
//           height={8}
//         />
//       </CommonButton>
//     </div>
//   );
// };

// export default DraggableTab;

import React from "react";
import { useDraggable } from "@dnd-kit/core";
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
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `tab-${uniqueKey}`,
    data: {
      type: "tab",
      id,
      uniqueKey,
      rowId,
      sectionId,
    },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        flex-none flex items-center gap-2 px-3 border-r border-[#ebebeb] relative h-full
        cursor-pointer select-none
        transition-colors duration-100
        ${isActive ? "bg-[#56CAD6] text-white" : "bg-white text-[#777]"}
        ${isDragging ? "opacity-50" : "opacity-100"}
      `}
      onClick={onSelect}
      {...listeners}
      {...attributes}
    >
      {/* 탭 제목 */}
      <span className="text-sm whitespace-nowrap">{title}</span>
      
      {/* 닫기 버튼 */}
      <CommonButton
        variant="ghost"
        size="sm"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className={`
          p-0 min-w-[8px]
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
}