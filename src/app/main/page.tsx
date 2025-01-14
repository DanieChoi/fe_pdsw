"use client";

import React from 'react';
import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useTabStore } from '@/store/tabStore';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import TabSection from './comp/TabSection';
import TabDropZone from './comp/TabDropZone';
import TabGroup from './comp/TabGroup';
import TabContent from './comp/TabContent';

const MainPage = () => {
  const { 
    sections, 
    tabGroups,
    moveTabToSection,
    moveTabToGroup,
    addSection, 
  } = useTabStore();
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const isTab = active.data.current?.type === 'tab';
    const isOverSection = over.data.current?.type === 'section';
    const isOverDropZone = over.data.current?.type === 'dropzone';
    const isOverGroup = over.data.current?.type === 'group';

    if (isTab) {
      const tabId = active.data.current?.id;

      if (isOverSection) {
        moveTabToSection(tabId, over.data.current?.id);
      } else if (isOverDropZone && sections.length < 3) {
        // 섹션이 하나일 때는 드롭존으로 이동하지 않음
        if (sections.length > 1) {
          addSection(tabId);
        }
      } else if (isOverGroup) {
        moveTabToGroup(tabId, over.data.current?.id);
      }
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="flex flex-col h-screen">
        {/* 상단 탭 섹션 영역 */}
        <div className="flex border-b bg-white">
          <div className="flex-1 flex border-r border-gray-300">
            {sections.map((section) => (
              <React.Fragment key={section.id}>
                <TabSection
                  id={section.id}
                  width={section.width}
                  canRemove={section.id !== 'default'}
                />
                {section.id !== sections[sections.length - 1].id && (
                  <div className="w-px bg-gray-300 h-full" />
                )}
              </React.Fragment>
            ))}
          </div>
          {sections.length < 3 && (
            <div className="flex items-center px-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => addSection()}
                className="flex items-center gap-1 hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
                Split
              </Button>
            </div>
          )}
        </div>

        {/* 본문 영역 */}
        <div className="flex-1 p-4 bg-gray-50">
          <TabDropZone>
            <TabContent />
          </TabDropZone>
        </div>
      </div>
    </DndContext>
  );
};

export default MainPage;