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
        icon: tab.icon || "",
      });
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    // 상세 로그 출력
    console.log("handleDragEnd fired", {
      activeData: active.data.current,
      activeId: active.id,
      overId: over.id,
      overData: over.data.current,
      overType: over.data.current?.type,
    });

    const isTab = active.data.current?.type === "tab";
    if (!isTab) return;

    const tabId = active.data.current?.id;
    const uniqueKey = active.data.current?.uniqueKey;
    const overType = over.data.current?.type;

    // 탭 위에 드롭된 경우 (탭 순서 변경)
    if (
      overType === "tab" &&
      active.data.current?.rowId === over.data.current?.rowId &&
      active.data.current?.sectionId === over.data.current?.sectionId
    ) {
      const rowId = active.data.current?.rowId;
      const sectionId = active.data.current?.sectionId;
      const targetTabId = over.data.current?.id;
      const targetUniqueKey = over.data.current?.uniqueKey;

      console.log("Tab order change detected:", {
        sourceTab: { tabId, uniqueKey },
        targetTab: { targetTabId, targetUniqueKey },
        rowId,
        sectionId
      });

      const row = rows.find(r => r.id === rowId);
      const section = row?.sections.find(s => s.id === sectionId);
      
      if (!row || !section) {
        console.error("Unable to find row or section for tab movement");
        return;
      }
      
      const sourceIndex = section.tabs.findIndex(
        t => t.id === tabId && t.uniqueKey === uniqueKey
      );
      const targetIndex = section.tabs.findIndex(
        t => t.id === targetTabId && t.uniqueKey === targetUniqueKey
      );

      console.log("Tab positions:", { sourceIndex, targetIndex });

      if (
        typeof sourceIndex === "number" &&
        typeof targetIndex === "number" &&
        sourceIndex !== -1 &&
        targetIndex !== -1 &&
        sourceIndex !== targetIndex
      ) {
        console.log(`Moving tab from index ${sourceIndex} to ${targetIndex}`);
        moveTabWithinSection(
          tabId,
          uniqueKey,
          rowId,
          sectionId,
          targetIndex
        );
      }
    } 
    // 섹션에 드롭된 경우 (다른 섹션으로 탭 이동)
    else if (overType === "section") {
      const targetRowId = over.data.current?.rowId;
      const targetSectionId = over.data.current?.sectionId;
      if (targetRowId && targetSectionId) {
        console.log(`Moving tab to section ${targetSectionId} in row ${targetRowId}`);
        moveTabToSection(tabId, targetRowId, targetSectionId, uniqueKey);
      }
    } 
    // 그룹에 드롭된 경우
    else if (overType === "group") {
      moveTabToGroup(tabId, over.data.current?.id);
    }

    setActiveTab(null);
  };

  return (
    <DndContext 
      sensors={sensors} 
      onDragStart={handleDragStart} 
      onDragEnd={handleDragEnd}
      // collisionDetection={closestCenter} // 추가 충돌 감지 알고리즘
    >
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