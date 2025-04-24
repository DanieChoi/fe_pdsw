// "use client";

// import React from "react";
// import {
//   DndContext,
//   DragEndEvent,
//   DragOverlay,
//   DragStartEvent,
//   PointerSensor,
//   useSensor,
//   useSensors,
// } from "@dnd-kit/core";
// import { useTabStore } from "@/store/tabStore";
// import TabContent from "./comp/TabContent";
// import TabRow from "./comp/TabRow";
// import DraggableTab from "./comp/DraggableTab";

// interface ActiveTabState {
//   id: number;
//   uniqueKey: string;
//   title: string;
//   icon: string;
// }

// const MainPage = () => {
//   const [activeTab, setActiveTab] = React.useState<ActiveTabState | null>(null);

//   const {
//     rows,
//     openedTabs,
//     activeTabId,
//     activeTabKey,
//     moveTabToSection,
//     moveTabToGroup,
//     moveTabWithinSection,
//     setActiveTab: setGlobalActiveTab,
//   } = useTabStore();

//   const sensors = useSensors(
//     useSensor(PointerSensor, {
//       activationConstraint: {
//         distance: 8,
//       },
//     })
//   );

//   const handleDragStart = (event: DragStartEvent) => {
//     const { active } = event;
//     const isTab = active.data.current?.type === "tab";
//     if (!isTab) return;

//     const tabId = active.data.current?.id;
//     const uniqueKey = active.data.current?.uniqueKey;

//     const tab = openedTabs.find((t) => t.id === tabId && t.uniqueKey === uniqueKey);
//     if (tab) {
//       setActiveTab({
//         id: tab.id,
//         uniqueKey: tab.uniqueKey,
//         title: tab.title,
//         icon: tab.icon,
//       });
//     }
//   };

//   const handleDragEnd = (event: DragEndEvent) => {
//     const { active, over } = event;
//     if (!over) return;

//     // 무조건 로그 출력해서 DnD 데이터 확인
//     console.log("handleDragEnd fired", {
//       activeData: active.data.current,
//       overData: over.data.current,
//       overType: over.data.current?.type,
//     });

//     const isTab = active.data.current?.type === "tab";
//     if (!isTab) return;

//     const tabId = active.data.current?.id;
//     const uniqueKey = active.data.current?.uniqueKey;
//     const overType = over.data.current?.type;

//     // 기존 조건문 유지
//     if (
//       overType === "tab" &&
//       active.data.current?.rowId === over.data.current?.rowId &&
//       active.data.current?.sectionId === over.data.current?.sectionId
//     ) {
//       const rowId = active.data.current?.rowId;
//       const sectionId = active.data.current?.sectionId;

//       const row = rows.find(r => r.id === rowId);
//       const section = row?.sections.find(s => s.id === sectionId);
//       const sourceIndex = section?.tabs.findIndex(
//         t => t.id === tabId && t.uniqueKey === uniqueKey
//       );
//       const targetIndex = section?.tabs.findIndex(
//         t => t.id === over.data.current?.id && t.uniqueKey === over.data.current?.uniqueKey
//       );

//       // 로그 출력
//       console.log("탭 이동", {
//         sourceIndex,
//         targetIndex,
//         rowId,
//         sectionId,
//         tabId,
//         uniqueKey,
//         activeData: active.data.current,
//         overData: over.data.current,
//       });

//       if (
//         typeof sourceIndex === "number" &&
//         typeof targetIndex === "number" &&
//         sourceIndex !== -1 &&
//         targetIndex !== -1 &&
//         sourceIndex !== targetIndex
//       ) {
//         moveTabWithinSection(
//           tabId,
//           uniqueKey,
//           rowId,
//           sectionId,
//           targetIndex
//         );
//       }
//     } else if (overType === "section") {
//       const targetRowId = over.data.current?.rowId;
//       const targetSectionId = over.data.current?.sectionId;
//       if (targetRowId && targetSectionId) {
//         moveTabToSection(tabId, targetRowId, targetSectionId, uniqueKey);
//       }
//     } else if (overType === "group") {
//       moveTabToGroup(tabId, over.data.current?.id);
//     }

//     setActiveTab(null);
//   };

//   return (
//     <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
//       <div className="flex flex-col h-full bg-white">
//         hi!
//         <div
//           className="flex flex-wrap flex-none pt-[15px] pr-[25px] pl-[35px]"
//         >
//           {rows.map((row) => (
//             <TabRow key={row.id} rowId={row.id} />
//           ))}
//         </div>

//         <div className="flex-1 py-[15px] pl-[35px] pr-[25px]" style={{ height: "calc(100% - 46px)" }}>
//           <TabContent />
//         </div>
//       </div>

//       <DragOverlay>
//         {activeTab ? (
//           <DraggableTab
//             id={activeTab.id}
//             uniqueKey={activeTab.uniqueKey}
//             title={activeTab.title}
//             isActive={activeTab.id === activeTabId && activeTab.uniqueKey === activeTabKey}
//             onRemove={() => { }}
//             onSelect={() => setGlobalActiveTab(activeTab.id, activeTab.uniqueKey)}
//             rowId=""
//             sectionId=""
//           />
//         ) : null}
//       </DragOverlay>
//     </DndContext>
//   );
// };

// export default MainPage;

"use client";

import React from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useTabStore } from "@/store/tabStore";
import TabContent from "./comp/TabContent";
import TabRow from "./comp/TabRow";
import DraggableTab from "./comp/DraggableTab";

interface ActiveTabState {
  id: number;
  uniqueKey: string;
  title: string;
  icon: string;
}

const MainPage = () => {
  const [activeTab, setActiveTab] = React.useState<ActiveTabState | null>(null);

  const {
    rows,
    openedTabs,
    activeTabId,
    activeTabKey,
    moveTabToSection,
    moveTabToGroup,
    moveTabWithinSection,
    setActiveTab: setGlobalActiveTab,
  } = useTabStore();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const isTab = active.data.current?.type === "tab";
    if (!isTab) return;

    const tabId = active.data.current?.id;
    const uniqueKey = active.data.current?.uniqueKey;

    const tab = openedTabs.find((t) => t.id === tabId && t.uniqueKey === uniqueKey);
    if (tab) {
      setActiveTab({
        id: tab.id,
        uniqueKey: tab.uniqueKey,
        title: tab.title,
        icon: tab.icon,
      });
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    // 무조건 로그 출력해서 DnD 데이터 확인
    console.log("handleDragEnd fired", {
      activeData: active.data.current,
      overData: over.data.current,
      overType: over.data.current?.type,
    });

    const isTab = active.data.current?.type === "tab";
    if (!isTab) return;

    const tabId = active.data.current?.id;
    const uniqueKey = active.data.current?.uniqueKey;
    const overType = over.data.current?.type;

    // 기존 조건문 유지
    if (
      overType === "tab" &&
      active.data.current?.rowId === over.data.current?.rowId &&
      active.data.current?.sectionId === over.data.current?.sectionId
    ) {
      const rowId = active.data.current?.rowId;
      const sectionId = active.data.current?.sectionId;

      const row = rows.find(r => r.id === rowId);
      const section = row?.sections.find(s => s.id === sectionId);
      const sourceIndex = section?.tabs.findIndex(
        t => t.id === tabId && t.uniqueKey === uniqueKey
      );
      const targetIndex = section?.tabs.findIndex(
        t => t.id === over.data.current?.id && t.uniqueKey === over.data.current?.uniqueKey
      );

      // 로그 출력
      console.log("탭 이동", {
        sourceIndex,
        targetIndex,
        rowId,
        sectionId,
        tabId,
        uniqueKey,
        activeData: active.data.current,
        overData: over.data.current,
      });

      if (
        typeof sourceIndex === "number" &&
        typeof targetIndex === "number" &&
        sourceIndex !== -1 &&
        targetIndex !== -1 &&
        sourceIndex !== targetIndex
      ) {
        moveTabWithinSection(
          tabId,
          uniqueKey,
          rowId,
          sectionId,
          targetIndex
        );
      }
    } else if (overType === "section") {
      const targetRowId = over.data.current?.rowId;
      const targetSectionId = over.data.current?.sectionId;
      if (targetRowId && targetSectionId) {
        moveTabToSection(tabId, targetRowId, targetSectionId, uniqueKey);
      }
    } else if (overType === "group") {
      moveTabToGroup(tabId, over.data.current?.id);
    }

    setActiveTab(null);
  };

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex flex-col h-full bg-white">
        <div className="flex-none pt-[15px] pr-[25px] pl-[35px]">
          {rows.map((row) => (
            <TabRow key={row.id} rowId={row.id} />
          ))}
        </div>

        <div className="flex-1 py-[15px] pl-[35px] pr-[25px]" style={{ height: "calc(100% - 46px)" }}>
          <TabContent />
        </div>
      </div>

      <DragOverlay>
        {activeTab ? (
          <DraggableTab
            id={activeTab.id}
            uniqueKey={activeTab.uniqueKey}
            title={activeTab.title}
            isActive={activeTab.id === activeTabId && activeTab.uniqueKey === activeTabKey}
            onRemove={() => { }}
            onSelect={() => setGlobalActiveTab(activeTab.id, activeTab.uniqueKey)}
            rowId=""
            sectionId=""
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default MainPage;