// // src/app/main/TabContainer/TabContainer.tsx
// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
// import { DragOverlay } from "@dnd-kit/core";
// import { closestCenter } from "@dnd-kit/core";

// import { useTabStore } from "@/store/tabStore";
// import TabBar from "./TabBar";
// import TabContent from "./TabContent";
// import { X } from "lucide-react";

// // 간단한 드래그 중 탭 오버레이
// function DraggingTabOverlay({ title }: { title: string }) {
//   return (
//     <div className="flex items-center h-10 px-4 py-2 cursor-grabbing border border-gray-300 bg-white shadow-lg rounded">
//       <span className="mr-2">{title}</span>
//       <X size={16} className="opacity-50" />
//     </div>
//   );
// }

// export default function TabContainer() {
//   // 분할 상태 관련
//   const splitMode = useTabStore((state) => state.splitMode);
//   const areas = useTabStore((state) => state.areas);
//   const areaWidths = useTabStore((state) => state.areaWidths);
//   const resizeAreas = useTabStore((state) => state.resizeAreas);

//   // 현재 드래그 중인 탭 정보
//   const [draggingTitle, setDraggingTitle] = useState<string | null>(null);

//   // DnD 센서
//   const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));

//   // ===========================
//   // DnD 이벤트
//   // ===========================
//   const handleDragStart = (event: any) => {
//     const { active } = event;
//     if (active && active.data && active.data.current && active.data.current.tab) {
//       const t = active.data.current.tab;
//       setDraggingTitle(t.title);
//     }
//   };

//   const handleDragEnd = (event: any) => {
//     setDraggingTitle(null);
//   };

//   const handleDragCancel = () => {
//     setDraggingTitle(null);
//   };

//   // ===========================
//   // 리사이즈 드래그
//   // ===========================
//   // 어느 영역을 리사이즈 중인지, 마지막 mouseX를 어디서 기록했는지
//   const [resizingIndex, setResizingIndex] = useState<number | null>(null);
//   const [lastMouseX, setLastMouseX] = useState<number>(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function onMouseMove(e: MouseEvent) {
//       if (resizingIndex === null) return;
//       if (!containerRef.current) return;

//       const delta = e.clientX - lastMouseX;
//       const containerWidth = containerRef.current.clientWidth;
//       if (!containerWidth) return;

//       // 픽셀 -> 퍼센트 변환
//       const deltaPercent = (delta / containerWidth) * 100;

//       resizeAreas(resizingIndex, deltaPercent);
//       setLastMouseX(e.clientX);
//     }

//     function onMouseUp() {
//       setResizingIndex(null);
//     }

//     window.addEventListener("mousemove", onMouseMove);
//     window.addEventListener("mouseup", onMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", onMouseMove);
//       window.removeEventListener("mouseup", onMouseUp);
//     };
//   }, [resizingIndex, lastMouseX, resizeAreas]);

//   const handleMouseDownForResize = (e: React.MouseEvent, idx: number) => {
//     setResizingIndex(idx);
//     setLastMouseX(e.clientX);
//   };

//   if (splitMode === "none" || areas.length <= 1) {
//     // 단일 영역
//     const area = areas[0];
//     return (
//       <DndContext
//         sensors={sensors}
//         collisionDetection={closestCenter}
//         onDragStart={handleDragStart}
//         onDragEnd={handleDragEnd}
//         onDragCancel={handleDragCancel}
//       >
//         <div ref={containerRef} className="w-full h-full flex flex-col">
//           <TabBar area={area} />
//           <TabContent area={area} />
//         </div>
//         <DragOverlay>{draggingTitle && <DraggingTabOverlay title={draggingTitle} />}</DragOverlay>
//       </DndContext>
//     );
//   }

//   // 2~4분할
//   return (
//     <DndContext
//       sensors={sensors}
//       collisionDetection={closestCenter}
//       onDragStart={handleDragStart}
//       onDragEnd={handleDragEnd}
//       onDragCancel={handleDragCancel}
//     >
//       <div ref={containerRef} className="w-full h-full flex flex-row">
//         {areas.map((area, index) => {
//           // 마지막 영역은 남은 공간
//           if (index === areas.length - 1) {
//             return (
//               <div
//                 key={area.id}
//                 className="flex flex-col h-full overflow-hidden"
//                 style={{ width: `${areaWidths[index]}%` }}
//               >
//                 <TabBar area={area} />
//                 <TabContent area={area} />
//               </div>
//             );
//           }

//           // 중간 영역은 Resizer를 포함해야 함
//           return (
//             <React.Fragment key={area.id}>
//               <div
//                 className="flex flex-col h-full overflow-hidden"
//                 style={{ width: `${areaWidths[index]}%` }}
//               >
//                 <TabBar area={area} />
//                 <TabContent area={area} />
//               </div>
//               {/* 리사이즈 핸들 */}
//               <div
//                 className="w-1 bg-gray-200 hover:bg-[#55BEC8] active:bg-[#55BEC8] cursor-col-resize select-none"
//                 onMouseDown={(e) => handleMouseDownForResize(e, index)}
//               />
//             </React.Fragment>
//           );
//         })}
//       </div>

//       <DragOverlay>
//         {draggingTitle && <DraggingTabOverlay title={draggingTitle} />}
//       </DragOverlay>
//     </DndContext>
//   );
// }

// src/app/main/TabContainer/TabContainer.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
  DragOverEvent,
  closestCenter,
  Over,
} from "@dnd-kit/core";
import { useTabStore } from "@/store/tabStore";
import TabBar from "./TabBar";
import TabContent from "./TabContent";

// 드래그 중 탭 오버레이
function DraggingTabOverlay({ title }: { title: string }) {
  return (
    <div className="flex items-center h-10 px-4 py-2 cursor-grabbing border border-gray-300 bg-white shadow-lg rounded">
      <span className="mr-2">{title}</span>
    </div>
  );
}

export default function TabContainer() {
  const {
    areas,
    areaWidths,
    splitMode,
    // 영역 간 이동, 탭 재정렬, 탭 닫기 등
    moveTabToAreaV2,
    reorderTabsV2,
  } = useTabStore();

  // 드래그 중인 탭(제목)
  const [dragTitle, setDragTitle] = useState<string | null>(null);

  // ------------------------
  // DnD 센서
  // ------------------------
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  );

  // 드래그 시작
  const handleDragStart = (event: DragStartEvent) => {
    const activeData = event.active.data.current;
    if (activeData?.tab?.title) {
      setDragTitle(activeData.tab.title);
    }
  };

  // 드래그 종료
  const handleDragEnd = (event: DragEndEvent) => {
    setDragTitle(null);

    const { active, over } = event;
    if (!over) return;
    const activeData = active.data.current;
    const overData = over.data.current;
    if (!activeData || !overData) return;

    // 1) 영역이 다른 경우 => moveTabToAreaV2()
    //   activeData.areaId != overData.areaId 이면서 둘 다 area가 존재하면
    if (
      activeData.areaId !== overData.areaId &&
      activeData.tab &&
      overData.areaId
    ) {
      // 다른 영역으로 탭 이동
      moveTabToAreaV2(activeData.tab.id, overData.areaId);
      return;
    }

    // 2) 같은 영역 내에서 탭 순서 변경 => reorderTabsV2
    //   (active.id !== over.id) 이고 areaId도 동일하다면
    if (
      activeData.areaId === overData.areaId &&
      activeData.tab &&
      overData.tab &&
      active.id !== over.id
    ) {
      // fromIndex, toIndex 구하기 (TabBar에서 이미 정렬 중)
      const area = areas.find((a) => a.id === activeData.areaId);
      if (!area) return;

      const fromIndex = area.tabs.findIndex((t) => t.id === active.id);
      const toIndex = area.tabs.findIndex((t) => t.id === over.id);
      if (fromIndex < 0 || toIndex < 0) return;

      reorderTabsV2(area.id, fromIndex, toIndex);
    }
  };

  // 드래그 취소
  const handleDragCancel = () => {
    setDragTitle(null);
  };

  // 단일 영역이면...
  if (splitMode === "none" || areas.length === 1) {
    const area = areas[0];
    return (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <div className="w-full h-full flex flex-col bg-white">
          <TabBar area={area} />
          <TabContent area={area} />
        </div>

        <DragOverlay>
          {dragTitle && <DraggingTabOverlay title={dragTitle} />}
        </DragOverlay>
      </DndContext>
    );
  }

  // 2~4분할
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="w-full h-full flex flex-row bg-white">
        {areas.map((area, index) => {
          const widthPercent = areaWidths[index] ?? 0;
          // 마지막 영역은 남은 공간
          if (index === areas.length - 1) {
            return (
              <div
                key={area.id}
                className="flex flex-col h-full overflow-hidden"
                style={{ width: `${widthPercent}%` }}
              >
                <TabBar area={area} />
                <TabContent area={area} />
              </div>
            );
          }
          // 중간 영역 + 리사이즈 핸들
          return (
            <React.Fragment key={area.id}>
              <div
                className="flex flex-col h-full overflow-hidden"
                style={{ width: `${widthPercent}%` }}
              >
                <TabBar area={area} />
                <TabContent area={area} />
              </div>
              {/* 리사이즈 핸들 */}
              <div
                className="w-1 bg-gray-200 hover:bg-teal-300 cursor-col-resize"
                // onMouseDown 이벤트 등등 (이미 구현하셨다면 그대로)
              />
            </React.Fragment>
          );
        })}
      </div>

      <DragOverlay>
        {dragTitle && <DraggingTabOverlay title={dragTitle} />}
      </DragOverlay>
    </DndContext>
  );
}
