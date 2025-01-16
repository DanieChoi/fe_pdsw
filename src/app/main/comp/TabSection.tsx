// src/app/main/comp/TabSection.tsx
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTabStore } from '@/store/tabStore';
import DraggableTab from './DraggableTab';

interface TabSectionProps {
  rowId: string;
  sectionId: string;
  width: number;
  canRemove?: boolean;
  showDivider?: boolean;
}

const TabSection: React.FC<TabSectionProps> = ({
  rowId,
  sectionId,
  width,
  canRemove = true,
  showDivider = false,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrolling, setIsScrolling] = useState<'left' | 'right' | null>(null);

  const { isOver, setNodeRef } = useDroppable({
    id: `section-${rowId}-${sectionId}`,
    data: {
      type: 'section',
      rowId,
      sectionId,
    },
  });

  useEffect(() => {
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  const {
    rows,
    activeTabId,
    removeTab,
    setActiveTab,
    removeSection,
  } = useTabStore();

  const row = rows.find(r => r.id === rowId);
  if (!row) return null;
  const section = row.sections.find(s => s.id === sectionId);
  if (!section) return null;

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 100;
    const newLeft = direction === 'left'
      ? scrollContainerRef.current.scrollLeft - scrollAmount
      : scrollContainerRef.current.scrollLeft + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: newLeft,
      behavior: 'smooth',
    });
  };

  const startScrolling = (direction: 'left' | 'right') => {
    setIsScrolling(direction);
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    scroll(direction);
    scrollIntervalRef.current = setInterval(() => {
      scroll(direction);
    }, 150);
  };

  const stopScrolling = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    setIsScrolling(null);
  };

  return (
    <div
      ref={setNodeRef}
      className={`
        flex-none h-full relative
        transition-colors duration-200
        ${isOver ? 'bg-gray-100' : 'bg-white'}
        ${showDivider ? 'border-r border-gray-200' : ''}
      `}
      style={{ width: `${width}%` }}
    >
      <div className="flex items-center p-2">
        <Button
          variant="ghost"
          size="sm"
          onMouseDown={() => startScrolling('left')}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
          onTouchStart={() => startScrolling('left')}
          onTouchEnd={stopScrolling}
          className={`
            p-1 rounded-full hover:bg-gray-100 flex-none
            ${isScrolling === 'left' ? 'bg-gray-100' : ''}
          `}
        >
          <ChevronLeft className={`h-4 w-4 ${isScrolling === 'left' ? 'text-blue-600' : 'text-gray-600'}`} />
        </Button>

        <div
          ref={scrollContainerRef}
          className="flex-1 flex gap-1 overflow-hidden scroll-smooth"
        >
          {section.tabs.map((tab) => (
            <DraggableTab
              key={tab.id}
              id={tab.id}
              title={tab.title}
              icon={tab.icon}
              isActive={activeTabId === tab.id}
              onRemove={() => removeTab(tab.id)}
              onSelect={() => setActiveTab(tab.id)}
              activeId={activeTabId ?? undefined}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onMouseDown={() => startScrolling('right')}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
          onTouchStart={() => startScrolling('right')}
          onTouchEnd={stopScrolling}
          className={`
            p-1 rounded-full hover:bg-gray-100 flex-none
            ${isScrolling === 'right' ? 'bg-gray-100' : ''}
          `}
        >
          <ChevronRight className={`h-4 w-4 ${isScrolling === 'right' ? 'text-blue-600' : 'text-gray-600'}`} />
        </Button>

        {canRemove && row.sections.length > 1 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeSection(rowId, sectionId)}
            className="ml-2 p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4 text-gray-500 hover:text-gray-700" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default TabSection;