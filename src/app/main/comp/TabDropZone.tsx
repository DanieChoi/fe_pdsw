"use client";

import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { useTabStore } from '@/store/tabStore';

interface TabDropZoneProps {
  children: React.ReactNode;
}

const TabDropZone: React.FC<TabDropZoneProps> = ({ children }) => {
  const { sections } = useTabStore();
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
        ${isOver && sections.length < 3 
          ? 'bg-gray-100 border-2 border-dashed border-blue-400 ring-2 ring-blue-200'
          : ''
        }
        transition-all duration-200 ease-in-out
      `}
    >
      <div className={`
        w-full h-full
        ${isOver && sections.length < 3 
          ? 'opacity-50'
          : ''
        }
        transition-opacity duration-200
      `}>
        {children}
      </div>
      {isOver && sections.length < 3 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white p-3 rounded-lg shadow-lg text-blue-600">
            Release to create new section
          </div>
        </div>
      )}
    </div>
  );
};

export default TabDropZone;