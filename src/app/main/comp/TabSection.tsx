"use client";

import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DraggableTab from './DraggableTab';
import { useTabStore } from '@/store/tabStore';

interface TabSectionProps {
  id: string;
  width: number;
  canRemove?: boolean;
}

const TabSection: React.FC<TabSectionProps> = ({
  id,
  width,
  canRemove = true
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `section-${id}`,
    data: {
      type: 'section',
      id
    }
  });

  const {
    sections,
    activeTabId,
    removeTab,
    setActiveTab,
    removeSection
  } = useTabStore();

  const section = sections.find(s => s.id === id);
  if (!section) return null;

  return (
    <div
      ref={setNodeRef}
      className={`
        flex-none h-full relative border-r border-gray-300
        ${isOver ? 'bg-gray-50' : 'bg-white'}
      `}
      style={{ width: `${width}%` }}
    >
      <div className="flex items-center">
        <div className="flex-1 flex space-x-1 overflow-x-auto scrollbar-hide">
          {section.tabs.map((tab) => (
            <DraggableTab
              key={tab.id}
              id={tab.id}
              title={tab.title}
              icon={tab.icon}
              isActive={activeTabId === tab.id}
              onRemove={() => removeTab(tab.id)}
              onSelect={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
        {canRemove && sections.length > 1 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeSection(id)}
            className="ml-2 p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default TabSection;