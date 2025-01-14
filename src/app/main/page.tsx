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
      <div className="flex flex-col box-border px-9 py-5 bg-white">
        <div className="tabs-container border-b border-gray-200">
          <div className="tabs flex">
            {sections.map((section) => (
              <React.Fragment key={section.id}>
                <TabSection
                  id={section.id}
                  width={section.width}
                  canRemove={section.id !== 'default'}
                />
                {section.id !== sections[sections.length - 1].id && (
                  <div className="w-0.5 bg-gray-300 h-full shadow-md" />
                )}
              </React.Fragment>
            ))}
          </div>
          {sections.length < 3 && (
            <div className="flex items-center px-2 py-1">
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

        <div className="flex-1 p-2 bg-white">
          <TabContent />
        </div>
      </div>
    </DndContext>
  );
};

export default MainPage;