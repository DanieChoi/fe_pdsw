'use client';

import { Inter } from 'next/font/google';
import { useState, useEffect, useRef } from 'react';
import Footer from '@/components/shared/layout/Footer';
import Sidebar2 from '@/components/shared/layout/Sidebar2';
import '@/app/globals.css';
import Header from '@/widgets/header';
import { useSidebarWidthStore } from '@/store/useSidebarWidthStore';
import Footer2 from '@/components/shared/layout/Footer3';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const width = useSidebarWidthStore((state) => state.width);
  const isOpen = useSidebarWidthStore((state) => state.isOpen);

  // 푸터 관련 상태
  const [footerHeight, setFooterHeight] = useState(111);
  const [isFooterOpen, setIsFooterOpen] = useState(true);
  const [isFooterResizing, setIsFooterResizing] = useState(false);

  // 컨텐츠 영역 참조
  const contentRef = useRef<HTMLDivElement>(null);

  // 푸터 토글 함수
  const toggleFooter = (isOpen: boolean) => {
    setIsFooterOpen(isOpen);
  };

  // 푸터 리사이징 관련 함수들
  const handleResizeStart = () => {
    setIsFooterResizing(true);
  };

  const handleResize = (height: number) => {
    if (contentRef.current) {
      contentRef.current.style.height = `calc(100% - ${height}px)`;
    }
  };

  // 수정: height 매개변수를 받도록 변경
  const handleResizeEnd = (height: number) => {
    setFooterHeight(height);
    setIsFooterResizing(false);
  };

  // 사이드바 상태에 따른 메인 영역 너비 계산
  const getMainWidth = () => {
    return isOpen ? `calc(100% - ${width}px)` : '100%';
  };

  // 실제 푸터 높이 (닫힌 경우 32px)
  const actualFooterHeight = isFooterOpen ? footerHeight : 32;

  return (
    <div className={`${inter.className} h-screen overflow-hidden`}>
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex flex-1 min-h-0 overflow-hidden">
          <Sidebar2 />
          {/* 메인 영역: 사이드바 너비에 따라 줄어들지만 내부 컨텐츠 영역은 최소 너비(800px)를 유지하여 가로 스크롤 발생 */}
          <main
            className="flex flex-col h-full transition-all duration-300 overflow-x-auto"
            style={{ width: getMainWidth() }}
          >
            <div 
              ref={contentRef}
              className="refined-scrollbar overflow-auto flex-shrink-0 min-w-[800px]"
              style={{
                height: `calc(100% - ${actualFooterHeight}px)`,
                transition: isFooterResizing ? 'none' : 'height 0.3s ease-in-out',
                paddingTop: '0', // 상단 여백 제거
                boxSizing: 'border-box',
              }}
            >
              {children}
            </div>
            <div
              style={{
                height: 'auto',
                maxHeight: `${actualFooterHeight}px`,
              }}
            >
              <Footer
                footerHeight={footerHeight}
                onToggleDrawer={toggleFooter}
                onResizeHeight={handleResize}
                onResizeStart={handleResizeStart}
                onResizeEnd={handleResizeEnd}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}