"use client";

import React, { useRef, useState, useEffect } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrolling, setIsScrolling] = useState<'left' | 'right' | null>(null);
  
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

  // Cleanup effect for scroll interval
  useEffect(() => {
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  // Cleanup effect for scroll interval
  useEffect(() => {
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  if (!section) return null;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 100; // 스크롤 단위 줄임
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // 버튼 홀드 시 지속적인 스크롤을 위한 함수
  const startScrolling = (direction: 'left' | 'right') => {
    setIsScrolling(direction);
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    
    // 초기 스크롤
    scroll(direction);
    
    // 연속 스크롤 시작
    scrollIntervalRef.current = setInterval(() => {
      scroll(direction);
    }, 150); // 스크롤 간격 조정 가능
  };

  const stopScrolling = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    setIsScrolling(null);
  };

  // 컴포넌트 언마운트 시 인터벌 정리
  useEffect(() => {
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={setNodeRef}
      className={`
        flex-none h-full relative
        ${isOver ? 'bg-gray-50' : 'bg-white'}
        border-r border-gray-200
        transition-colors duration-200
        hover:bg-gray-50
      `}
      style={{ width: `${width}%` }}
    >
      <div className="flex items-center p-2">
        {/* 왼쪽 스크롤 버튼 */}
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
          <ChevronLeft 
            className={`h-4 w-4 ${isScrolling === 'left' ? 'text-blue-600' : 'text-gray-600'}`}
          />
        </Button>

        {/* 탭 컨테이너 */}
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
            />
          ))}
        </div>

        {/* 오른쪽 스크롤 버튼 */}
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
          <ChevronRight 
            className={`h-4 w-4 ${isScrolling === 'right' ? 'text-blue-600' : 'text-gray-600'}`}
          />
        </Button>

        {/* 섹션 닫기 버튼 */}
        {canRemove && sections.length > 1 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeSection(id)}
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