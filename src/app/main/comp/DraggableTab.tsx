// src/app/main/comp/DraggableTab.tsx
"use client";

import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface DraggableTabProps {
  id: number;
  uniqueKey: string;
  title: string;
  icon: string;
  isActive: boolean;
  onRemove: () => void;
  onSelect: () => void;
}

const DraggableTab: React.FC<DraggableTabProps> = ({
  id,
  uniqueKey,
  title,
  icon,
  isActive,
  onRemove,
  onSelect,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: uniqueKey,
    data: {
      type: 'tab',
      id,
      uniqueKey
    }
  });

  const style = {
    transform: CSS.Translate.toString(transform)
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        flex items-center gap-2 px-3 py-1.5 h-8
        border border-gray-200 rounded-lg cursor-pointer
        ${isActive ? 'bg-[#56CAD6] text-[#fff]' : 'bg-white hover:bg-gray-50'}
      `}
      onClick={onSelect}
    >
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={16}
          height={16}
          className="flex-none object-contain"
        />
      )}
      <span className="text-sm whitespace-nowrap">{title}</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="ml-1 p-0.5 h-5 w-5 hover:bg-gray-200 rounded-full"
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default DraggableTab;