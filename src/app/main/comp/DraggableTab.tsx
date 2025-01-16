"use client";

import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { X } from 'lucide-react';
import CommonButton from '@/components/shared/CommonButton';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface DraggableTabProps {
  id: number;
  uniqueKey?: string;  // uniqueKey prop 추가
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
  // uniqueKey가 있으면 그것을 사용, 없으면 id만 사용
  const dragId = uniqueKey ? `tab-${uniqueKey}` : `tab-${id}`;

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: dragId,
    data: {
      type: 'tab',
      id: id,
      uniqueKey: uniqueKey,  // DnD 데이터에도 uniqueKey 포함
    },
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    zIndex: isDragging ? 999 : undefined,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        relative flex items-center
        ${isDragging ? 'opacity-50 cursor-grabbing' : ''}
      `}
      {...attributes}
      {...listeners}
    >
      <CommonButton
        variant={isActive ? "default" : "ghost"}
        className={`
          group flex items-center space-x-2 rounded-md pr-8 pl-3 py-2
          ${isActive
            ? 'bg-[#56CAD6] text-white shadow-sm'
            : 'bg-[#E8F7F9] text-[#56CAD6] hover:bg-[#CCE9ED] border border-[#56CAD6]/20'
          }
          cursor-grab active:cursor-grabbing
          transition-all duration-200
          ${isDragging ? 'cursor-grabbing' : ''}
        `}
        onClick={onSelect}
      >
        <div className="w-4 h-4 relative">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
        <span className="text-sm font-medium">{title}</span>
      </CommonButton>
      <Button
        variant="ghost"
        size="sm"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className={`
          absolute right-1 p-1 rounded-full
          ${isActive
            ? 'text-white hover:bg-[#56CAD6]/80'
            : 'text-[#56CAD6]/70 hover:text-[#56CAD6] hover:bg-[#CCE9ED]'
          }
          transition-colors duration-200
        `}
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default DraggableTab;