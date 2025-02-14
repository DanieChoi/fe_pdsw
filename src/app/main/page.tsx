// src/app/main/MainPage.tsx
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
    setActiveTab: setGlobalActiveTab, // 전역 activeTab 설정 함수
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

    const isTab = active.data.current?.type === "tab";
    if (!isTab) return;

    const tabId = active.data.current?.id;
    const uniqueKey = active.data.current?.uniqueKey;
    const overType = over.data.current?.type;

    if (overType === "section") {
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
        <div className="flex-none border-b border-gray-200">
          {rows.map((row) => (
            <TabRow key={row.id} rowId={row.id} />
          ))}
        </div>

        <div className="flex-1 overflow-auto py-[15px] px-[35px]">
          <TabContent />
        </div>
      </div>

      <DragOverlay>
        {activeTab ? (
          <DraggableTab
            id={activeTab.id}
            uniqueKey={activeTab.uniqueKey}
            title={activeTab.title}
            //icon={activeTab.icon}
            isActive={activeTab.id === activeTabId && activeTab.uniqueKey === activeTabKey}
            onRemove={() => {}}
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
