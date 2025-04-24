
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
      addSection,
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

  // const handleDragEnd = (event: DragEndEvent) => {
  //   const { active, over } = event;
  //   if (!over) return;
  
  //   console.log("handleDragEnd fired", {
  //     activeData: active.data.current,
  //     activeId: active.id,
  //     overId: over.id,
  //     overData: over.data.current,
  //     overType: over.data.current?.type,
  //   });
  
  //   const isTab = active.data.current?.type === "tab";
  //   if (!isTab) return;
  
  //   const tabId = active.data.current?.id;
  //   const uniqueKey = active.data.current?.uniqueKey;
  //   const overType = over.data.current?.type;
  //   const activeRowId = active.data.current?.rowId;
  //   const activeSectionId = active.data.current?.sectionId;
  
  //   // 새로운 Case: 탭을 콘텐츠 영역에 드롭
  //   if (overType === "content-area") {
  //     const targetRowId = over.data.current?.rowId;
  //     const targetSectionId = over.data.current?.sectionId;
      
  //     // 현재 행에서 섹션 수 확인
  //     const currentRow = rows.find(r => r.id === targetRowId);
  //     if (currentRow && currentRow.sections.length < 2) {
  //       // 새 섹션을 추가하고 탭 이동을 한번에 처리
  //       useTabStore.getState().addSectionAndMoveTab(tabId, uniqueKey, targetRowId, activeSectionId);
  //     } else if (activeRowId !== targetRowId || activeSectionId !== targetSectionId) {
  //       // 이미 섹션이 2개라면 기존 섹션으로 이동 (같은 섹션이 아닌 경우에만)
  //       moveTabToSection(tabId, targetRowId, targetSectionId, uniqueKey);
  //     }
  //   }
    
  //   // 기존 로직 유지
  //   else if (overType === "tab") {
  //     // 기존 탭 이동 로직...
  //   } 
  //   else if (overType === "section") {
  //     // 기존 섹션 이동 로직...
  //   } 
  //   else if (overType === "group") {
  //     // 기존 그룹 이동 로직...
  //   }
  
  //   setActiveTab(null);
  // };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
  
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
    const activeRowId = active.data.current?.rowId;
    const activeSectionId = active.data.current?.sectionId;
  
    // 새로운 Case: 탭을 콘텐츠 영역에 드롭
    if (overType === "content-area") {
      const targetRowId = over.data.current?.rowId;
      const targetSectionId = over.data.current?.sectionId;
      
      // 현재 행에서 섹션 수 확인
      const currentRow = rows.find(r => r.id === targetRowId);
      if (currentRow && currentRow.sections.length < 2) {
        // 새 섹션을 추가하고 탭 이동을 한번에 처리
        useTabStore.getState().addSectionAndMoveTab(tabId, uniqueKey, targetRowId, activeSectionId);
      } else if (activeRowId !== targetRowId || activeSectionId !== targetSectionId) {
        // 이미 섹션이 2개라면 기존 섹션으로 이동 (같은 섹션이 아닌 경우에만)
        moveTabToSection(tabId, targetRowId, targetSectionId, uniqueKey);
      }
    }
    // 탭 위에 드롭한 경우
    else if (overType === "tab") {
      const overRowId = over.data.current?.rowId;
      const overSectionId = over.data.current?.sectionId;
      const targetTabId = over.data.current?.id;
      const targetUniqueKey = over.data.current?.uniqueKey;
  
      // 같은 섹션 내에서의 드래그
      if (activeRowId === overRowId && activeSectionId === overSectionId) {
        const row = rows.find(r => r.id === activeRowId);
        const section = row?.sections.find(s => s.id === activeSectionId);
        
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
  
        if (sourceIndex !== -1 && targetIndex !== -1 && sourceIndex !== targetIndex) {
          moveTabWithinSection(
            tabId,
            uniqueKey,
            activeRowId,
            activeSectionId,
            targetIndex
          );
        }
      } 
      // 서로 다른 섹션 간의 드래그
      else if (overRowId && overSectionId) {
        moveTabToSection(tabId, overRowId, overSectionId, uniqueKey);
      }
    }
    // 섹션에 직접 드롭된 경우
    else if (overType === "section") {
      const targetRowId = over.data.current?.rowId;
      const targetSectionId = over.data.current?.sectionId;
      if (targetRowId && targetSectionId) {
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