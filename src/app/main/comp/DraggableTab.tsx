import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { X } from 'lucide-react';
import CommonButton from '@/components/shared/CommonButton';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface DraggableTabProps {
  id: number;
  title: string;
  icon: string;
  isActive: boolean;
  onRemove: () => void;
  onSelect: () => void;
}

const DraggableTab = ({
  id,
  title,
  icon,
  isActive,
  onRemove,
  onSelect
}: DraggableTabProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `tab-${id}`,
    data: { type: 'tab', id }
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative flex items-center"
      {...attributes}
      {...listeners}
    >
      <CommonButton
        variant={isActive ? "tab" : "tabghost"}
        className={`
          group flex items-center space-x-2 rounded-md pr-8 pl-3 py-2 
          ${isActive ? 'bg-[#56CAD6] text-white' : 'hover:bg-gray-100'}
          cursor-move
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
        <span className="text-sm">{title}</span>
      </CommonButton>
      <Button
        variant="ghost"
        size="sm"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className={`
          absolute right-1 p-1 rounded-full hover:bg-gray-200
          ${isActive ? 'text-white hover:bg-green-600' : 'text-gray-500'}
        `}
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default DraggableTab;