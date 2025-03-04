// // src/app/main/TabContainer/TabBar.tsx
// "use client";

// import React from "react";
// import {
//   useSortable,
//   SortableContext,
//   horizontalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import { TabArea, useTabStore } from "@/store/tabStore";

// function SortableTabItem({
//   tabId,
//   title,
//   areaId,
//   isActive,
//   onActivate,
//   onClose,
// }: {
//   tabId: string;
//   title: string;
//   areaId: string;
//   isActive: boolean;
//   onActivate: () => void;
//   onClose: () => void;
// }) {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//     isDragging,
//   } = useSortable({
//     id: tabId,
//     data: {
//       type: "tab",
//       tab: { id: tabId, title },
//       areaId,
//     },
//   });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     opacity: isDragging ? 0.5 : 1,
//     zIndex: isDragging ? 50 : 1,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       className={`px-3 py-1 border-r border-gray-200 cursor-pointer ${
//         isActive ? "bg-blue-100" : "hover:bg-gray-100"
//       }`}
//       onClick={onActivate}
//       {...attributes}
//       {...listeners}
//     >
//       {title}
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           onClose();
//         }}
//         className="ml-2 text-red-500"
//       >
//         x
//       </button>
//     </div>
//   );
// }

// export default function TabBar({ area }: { area: TabArea }) {
//   const { closeTabV2, activateTabV2, reorderTabsV2 } = useTabStore();
//   const tabs = area.tabs;
//   const activeTabId = area.activeTabId;

//   const handleClose = (tabUuid: string) => {
//     closeTabV2(tabUuid);
//   };

//   const handleActivate = (tabUuid: string) => {
//     activateTabV2(tabUuid);
//   };

//   const tabIds = tabs.map((t) => t.id);

//   return (
//     <div className="border-b border-gray-200 flex">
//       <SortableContext items={tabIds} strategy={horizontalListSortingStrategy}>
//         {tabs.map((t, idx) => (
//           <SortableTabItem
//             key={t.id}
//             tabId={t.id}
//             title={t.title}
//             areaId={area.id}
//             isActive={t.id === activeTabId}
//             onActivate={() => handleActivate(t.id)}
//             onClose={() => handleClose(t.id)}
//           />
//         ))}
//       </SortableContext>
//     </div>
//   );
// }

// src/app/main/TabContainer/TabBar.tsx
"use client";

import React, { useState } from "react";
import {
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { X, MoveRight, Maximize, Columns, LayoutGrid, LayoutPanelLeft } from "lucide-react";
import { TabArea, useTabStore } from "@/store/tabStore";

/** 탭 드래그 시 보이는 임시 오버레이 (기본적으로는 TabContainer에서 만들었지만, 여긴 안써도 됨) */
function DraggingTabOverlay({ title }: { title: string }) {
  return (
    <div className="flex items-center h-10 px-4 py-2 cursor-grabbing border border-gray-300 bg-white shadow-lg rounded">
      <span className="mr-2">{title}</span>
      <X size={16} className="opacity-50" />
    </div>
  );
}

/** 개별 탭 아이템(드래그 정렬 대상) */
function TabItem({
  tabId,
  title,
  areaId,
  isActive,
  onActivate,
  onClose,
  onMove,
  canMove,
  isSplit,
}: {
  tabId: string;
  title: string;
  areaId: string;
  isActive: boolean;
  onActivate: () => void;
  onClose: () => void;
  /** 다른 영역으로 이동 버튼 */
  onMove?: () => void;
  canMove: boolean;
  isSplit: boolean;
}) {
  // DnD Sortable
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: tabId,
    data: {
      type: "tab",
      tab: { id: tabId, title },
      areaId,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center h-10 px-3 py-1.5 border-r border-gray-200 cursor-pointer 
        ${isActive ? "bg-teal-50 border-b-2 border-teal-400" : "hover:bg-gray-100"}
        ${isDragging ? "opacity-50 shadow-lg" : ""}
      `}
      onClick={onActivate}
      {...attributes}
      {...listeners}
    >
      <span className="mr-2 text-sm">{title}</span>

      {/* 다른 영역으로 이동하는 버튼 (split 모드 + 영역이 2개 이상일 때) */}
      {isSplit && canMove && (
        <button
          className="p-1 rounded-full hover:bg-gray-200 mr-1"
          onClick={(e) => {
            e.stopPropagation();
            onMove?.();
          }}
          title="다른 영역으로 이동"
        >
          <MoveRight size={14} />
        </button>
      )}

      <button
        className="p-1 rounded-full hover:bg-gray-200"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        title="탭 닫기"
      >
        <X size={14} />
      </button>
    </div>
  );
}

export default function TabBar({ area }: { area: TabArea }) {
  const {
    splitMode,
    areas,
    closeTabV2,
    activateTabV2,
    moveTabToAreaV2,
    closeAreaV2,
    splitTabAreaV2,
  } = useTabStore();

  const tabs = area.tabs;
  const activeTabId = area.activeTabId;
  const isSplit = splitMode === "split";
  const canMove = areas.length > 1;

  // 드롭 가능 설정 (이 영역이 drop 대상이 되도록)
  const { setNodeRef, isOver } = useDroppable({
    id: area.id,
    data: {
      type: "area",
      areaId: area.id,
    },
  });

  // 탭 클릭해서 활성화
  const handleActivate = (tabId: string) => {
    activateTabV2(tabId);
  };

  // 탭 닫기
  const handleClose = (tabId: string) => {
    closeTabV2(tabId);
  };

  // 탭 “다음 영역으로” 이동 (버튼)
  const handleMoveTab = (tabId: string) => {
    if (!isSplit || areas.length < 2) return;

    // 현재 area의 인덱스
    const idx = areas.findIndex((a) => a.id === area.id);
    if (idx === -1) return;

    // 다음 영역으로 이동
    const nextIndex = (idx + 1) % areas.length;
    const targetAreaId = areas[nextIndex].id;
    moveTabToAreaV2(tabId, targetAreaId);
  };

  // --------------------------
  // 분할 관련 버튼 핸들러
  // --------------------------
  // (예) 전체 레이아웃을 1~4로 만들고 싶으면 아래처럼...
  const handleSplit2 = () => {
    splitTabAreaV2(2);
  };
  const handleSplit3 = () => {
    splitTabAreaV2(3);
  };
  const handleSplit4 = () => {
    splitTabAreaV2(4);
  };
  // “분할 해제” 시 => 현재는 전체 1영역으로 합치는 로직
  // 질문에서는 “이 영역만 닫기”를 원하신다고 하셔서, 아래처럼 closeAreaV2로 바꾸거나 선택
  const handleUnsplit = () => {
    // splitTabAreaV2(1); // 전체를 1영역
    // 혹은 이 영역만 닫을거면:
    if (areas.length > 1) {
      closeAreaV2(area.id); 
    }
  };

  // 2개 이상 분할된 상황에서 “이 영역 닫기”
  const handleCloseArea = () => {
    if (areas.length > 1) {
      closeAreaV2(area.id);
    }
  };

  // 탭 ID들
  const tabIds = tabs.map((t) => t.id);

  return (
    <div ref={setNodeRef} className={`relative flex justify-between border-b border-gray-200 bg-white`}>
      {/* 드롭 중일 때 표시 */}
      {isOver && (
        <div className="absolute inset-0 bg-teal-100 bg-opacity-40 pointer-events-none" />
      )}

      {/* 탭 목록 */}
      <div className="flex overflow-x-auto">
        <SortableContext items={tabIds} strategy={horizontalListSortingStrategy}>
          {tabs.map((tab) => (
            <TabItem
              key={tab.id}
              tabId={tab.id}
              title={tab.title}
              areaId={area.id}
              isActive={tab.id === activeTabId}
              onActivate={() => handleActivate(tab.id)}
              onClose={() => handleClose(tab.id)}
              isSplit={isSplit}
              canMove={canMove}
              onMove={() => handleMoveTab(tab.id)}
            />
          ))}
        </SortableContext>
      </div>

      {/* 우측 영역 닫기 / 전체분할 버튼들 */}
      <div className="flex items-center">
        {/* 영역 닫기 */}
        {isSplit && areas.length > 1 && (
          <button
            className="h-10 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
            onClick={handleCloseArea}
            title="영역 닫기"
          >
            <X size={16} />
          </button>
        )}

        {/* 전체 분할 버튼들 */}
        <div className="flex items-center">
          {isSplit && (
            <button
              className="h-10 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
              onClick={handleUnsplit}
              title="분할 해제"
            >
              <Maximize size={16} />
            </button>
          )}
          <button
            className="h-10 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
            onClick={handleSplit2}
            title="2분할"
          >
            <Columns size={16} />
          </button>
          <button
            className="h-10 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
            onClick={handleSplit3}
            title="3분할"
          >
            <LayoutPanelLeft size={16} />
          </button>
          <button
            className="h-10 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
            onClick={handleSplit4}
            title="4분할"
          >
            <LayoutGrid size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
