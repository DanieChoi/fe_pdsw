// src/app/main/comp/TabDropZone.tsx
"use client";

import React from 'react';
import { useDroppable } from '@dnd-kit/core';

interface TabDropZoneProps {
  children: React.ReactNode;
}

const TabDropZone: React.FC<TabDropZoneProps> = ({ children }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: 'main-drop-zone',
    data: {
      type: 'dropzone'
    }
  });

  return (
    <div 
      ref={setNodeRef}
      className={`
        w-full h-full rounded-lg
        ${isOver ? 'bg-gray-100 border-2 border-dashed border-gray-300' : ''}
        transition-colors duration-200
      `}
    >
      {children}
    </div>
  );
};

export default TabDropZone;