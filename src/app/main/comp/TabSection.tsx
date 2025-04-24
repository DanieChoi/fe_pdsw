// // // src/app/main/comp/DraggableTab.tsx
// // "use client";

// // import React from "react";
// // import { useDraggable } from "@dnd-kit/core";
// // import { CSS } from "@dnd-kit/utilities";
// // import { X } from "lucide-react";
// // import Image from "next/image";
// // import { CommonButton } from "@/components/shared/CommonButton";

// // interface DraggableTabProps {
// //   id: number;
// //   uniqueKey: string;
// //   title: string;
// //   //icon: string;
// //   isActive: boolean;
// //   onRemove: () => void;
// //   onSelect: () => void;

// //   // DnD에서 어느 섹션으로부터 드래그되는지 판단 위해
// //   rowId: string;
// //   sectionId: string;
// // }

// // const DraggableTab: React.FC<DraggableTabProps> = ({
// //   id,
// //   uniqueKey,
// //   title,
// //   //icon,
// //   isActive,
// //   onRemove,
// //   onSelect,
// //   rowId,
// //   sectionId,
// // }) => {
// //   const { attributes, listeners, setNodeRef, transform } = useDraggable({
// //     id: uniqueKey,
// //     data: {
// //       type: "tab",
// //       id,
// //       uniqueKey,
// //       rowId,
// //       sectionId,
// //     },
// //   });

// //   const style = {
// //     transform: CSS.Translate.toString(transform),
// //   };

// //   return (
// //     <div
// //       ref={setNodeRef}
// //       style={style}
// //       {...attributes}
// //       {...listeners}
// //       className={`
// //         flex items-center gap-2 px-3 py-1.5 h-[30px] drag-tab cursor-pointer
// //         ${isActive ? "bg-[#56CAD6] text-white" : "bg-white text-[#777]"}
// //       `}
// //       onClick={onSelect}
// //     >
// //       {/* {icon && (
// //         <Image
// //           src={icon}
// //           alt={title}
// //           width={16}
// //           height={16}
// //           className="flex-none object-contain"
// //         />
// //       )} */}
// //       <span className="text-sm whitespace-nowrap">{title}</span>
// //       <CommonButton
// //         variant="ghost"
// //         size="sm"
// //         onClick={(e) => {
// //           e.stopPropagation();
// //           onRemove();
// //         }}
// //         className={`
// //           p-0 min-w-[8px]
// //           ${isActive ? "hover:bg-[transparent]" : "hover:bg-[transparent]"}`}
// //       >
// //       <Image
// //           src={isActive ? "/header-menu/maintap_colse_on.png" : "/header-menu/maintap_colse_off.png"}
// //           alt="닫기"
// //           width={8}
// //           height={8}
// //         />
// //       </CommonButton>
// //     </div>
// //   );
// // };

// // export default DraggableTab;

// "use client";

// import React from "react";
// import { useDroppable } from "@dnd-kit/core";
// import { useTabStore } from "@/store/tabStore";
// import DraggableTab from "./DraggableTab";
// import { CommonButton } from "@/components/shared/CommonButton";
// import Image from "next/image";
// import { TabCountProvider } from "@/components/providers/TabCountProvider";

// interface TabSectionProps {
//   rowId: string;
//   sectionId: string;
//   width?: number;
//   canRemove?: boolean;
//   showDivider?: boolean;
// }

// const TabSection: React.FC<TabSectionProps> = ({
//   rowId,
//   sectionId,
//   width = 100,
//   canRemove = true,
//   showDivider = false,
// }) => {
//   const { rows, openedTabs, removeSection, activeTabId, activeTabKey, setActiveTab, removeTab } = useTabStore();

//   const { setNodeRef } = useDroppable({
//     id: `section-${rowId}-${sectionId}`,
//     data: {
//       type: "section",
//       rowId,
//       sectionId,
//     },
//   });

//   // Get current section info
//   const row = rows.find((r) => r.id === rowId);
//   const section = row?.sections.find((s) => s.id === sectionId);

//   if (!section) return null;

//   // Get tabs in this section
//   const tabs = section.tabs || [];
//   const totalTabs = tabs.length;

//   // Tab removal handler
//   const handleRemoveTab = (tabId: number, uniqueKey: string) => {
//     removeTab(tabId, uniqueKey);
//   };

//   // Section removal handler
//   const handleRemoveSection = () => {
//     if (canRemove) {
//       removeSection(rowId, sectionId);
//     }
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       className={`flex-1 flex flex-col min-w-0 ${showDivider ? "border-r border-[#ebebeb]" : ""}`}
//       style={{ maxWidth: `${width}%` }}
//     >
//       <div className="flex justify-between items-center w-full">
//         <TabCountProvider count={totalTabs}>
//           <div className="flex flex-wrap items-center overflow-hidden w-full py-0.5">
//             {tabs.map((tab) => {
//               const openedTab = openedTabs.find(
//                 (t) => t.id === tab.id && t.uniqueKey === tab.uniqueKey
//               );
//               if (!openedTab) return null;

//               return (
//                 <DraggableTab
//                   key={`${tab.id}-${tab.uniqueKey}`}
//                   id={tab.id}
//                   uniqueKey={tab.uniqueKey}
//                   title={openedTab.title}
//                   isActive={tab.id === activeTabId && tab.uniqueKey === activeTabKey}
//                   onRemove={() => handleRemoveTab(tab.id, tab.uniqueKey)}
//                   onSelect={() => setActiveTab(tab.id, tab.uniqueKey)}
//                   rowId={rowId}
//                   sectionId={sectionId}
//                   // totalTabs={totalTabs} // Context 대신 직접 props로 전달하는 경우 사용
//                 />
//               );
//             })}
//           </div>
//         </TabCountProvider>

//         {canRemove && (
//           <div className="flex-none ml-0.5">
//             <CommonButton
//               variant="tabEtc"
//               size="icon"
//               onClick={handleRemoveSection}
//               className="p-0.5"
//             >
//               <Image
//                 src="/header-menu/tab_minus.svg"
//                 alt="minus"
//                 width={8}
//                 height={8}
//               />
//             </CommonButton>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TabSection;

import React, { useRef, useEffect, useState } from "react";
import { useDroppable } from "@dnd-kit/core";
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

export default function TabSection({
  rowId,
  sectionId,
  width,
  canRemove = true,
  showDivider = false,
}: TabSectionProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: `section-${rowId}-${sectionId}`,
    data: { type: "section", rowId, sectionId },
  });

  const {
    rows,
    removeTab,
    removeSection,
    setSectionActiveTab,
    setOpenOperationSectionId,
  } = useTabStore();

  const row = rows.find((r) => r.id === rowId);
  if (!row) return null;
  const section = row.sections.find((s) => s.id === sectionId);
  if (!section) return null;

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [scrolling, setScrolling] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    return () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const delta = dir === "left" ? -100 : 100;
    scrollRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  const startScroll = (dir: "left" | "right") => {
    setScrolling(dir);
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    scroll(dir);
    scrollIntervalRef.current = setInterval(() => scroll(dir), 150);
  };

  const stopScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    setScrolling(null);
  };

  return (
    <div
      ref={setNodeRef}
      className={`flex-none relative transition-colors duration-200 ${isOver ? "bg-gray-100" : "bg-white"}${
        showDivider ? " border-r border-gray-200" : ""
      }`}
      style={{ width: `${width}%` }}
    >
      {/* 높이를 일관되게 맞춘 컨테이너 */}
      <div className="flex items-stretch h-9 border-b border-[#ebebeb]">
        {/* Left scroll - 높이를 동일하게 */}
        <CommonButton
          variant="tabEtc"
          size="sm"
          className={`flex-none flex items-center justify-center px-3 ${scrolling === "left" ? "bg-gray-100" : ""}`}
          onMouseDown={() => startScroll("left")}
          onMouseUp={stopScroll}
          onMouseLeave={stopScroll}
          onTouchStart={() => startScroll("left")}
          onTouchEnd={stopScroll}
        >
          <Image src="/header-menu/leftArrow.svg" alt="left" width={8} height={8} />
        </CommonButton>

        {/* Tabs container - 높이와 정렬 일치 */}
        <div
          ref={scrollRef}
          className="flex-1 flex items-stretch overflow-x-auto scrollbar-none"
        >
          {section.tabs.map((tab) => {
            const isActive = section.activeTabKey === tab.uniqueKey;
            return (
              <DraggableTab
                key={tab.uniqueKey}
                id={tab.id}
                uniqueKey={tab.uniqueKey}
                title={tab.title}
                isActive={isActive}
                onRemove={() => {
                  if (tab.id === 11) setOpenOperationSectionId("section1");
                  removeTab(tab.id, tab.uniqueKey);
                }}
                onSelect={() => setSectionActiveTab(rowId, sectionId, tab.uniqueKey)}
                rowId={rowId}
                sectionId={sectionId}
              />
            );
          })}
        </div>

        {/* Right scroll - 높이를 동일하게 */}
        <CommonButton
          variant="tabEtc"
          size="sm"
          className={`flex-none flex items-center justify-center px-3 ${scrolling === "right" ? "bg-gray-100" : ""}`}
          onMouseDown={() => startScroll("right")}
          onMouseUp={stopScroll}
          onMouseLeave={stopScroll}
          onTouchStart={() => startScroll("right")}
          onTouchEnd={stopScroll}
        >
          <Image src="/header-menu/rightArrow.svg" alt="right" width={8} height={8} />
        </CommonButton>

        {/* Remove section - 높이를 동일하게 */}
        {canRemove && row.sections.length > 1 && (
          <CommonButton
            variant="tabEtc"
            size="sm"
            className="flex-none flex items-center justify-center px-3"
            onClick={() => removeSection(rowId, sectionId)}
          >
            <Image src="/header-menu/tab_minus.svg" alt="remove" width={8} height={8} />
          </CommonButton>
        )}
      </div>
    </div>
  );
}