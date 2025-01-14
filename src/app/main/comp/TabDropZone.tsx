"use client";

import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { useTabStore } from '@/store/tabStore';

interface TabDropZoneProps {
  children: React.ReactNode;
}

const TabDropZone: React.FC<TabDropZoneProps> = ({ children }) => {
  const { sections, openedTabs } = useTabStore();
  
  const isDisabled = sections.length === 1 && openedTabs.length === 1;
  
  const { setNodeRef, isOver } = useDroppable({
    id: 'main-drop-zone',
    data: {
      type: 'dropzone'
    },
    disabled: isDisabled
  });

  return (
    <div 
      ref={setNodeRef}
      className={`
        w-full h-full rounded-lg
        ${isOver && !isDisabled ? 'bg-gray-100 border-2 border-dashed border-gray-300' : ''}
        transition-colors duration-200
      `}
    >
      {children}
    </div>
  );
};

export default TabDropZone;