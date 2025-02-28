// // src\app\main\layout.tsx
// 'use client';

// import { Inter } from 'next/font/google';
// import { useState } from 'react';
// import Footer from '@/components/shared/layout/Footer';
// import Sidebar from '@/components/shared/layout/Sidebar';
// import '@/app/globals.css';
// import Header from '@/widgets/header';
// import Sidebar2 from '@/components/shared/layout/Sidebar2';
// import { useSidebarWidthStore } from '@/components/shared/layout/Sidebar2';

// const inter = Inter({ subsets: ['latin'] });

// export default function MainLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const width = useSidebarWidthStore(state => state.width);
//   const isOpen = useSidebarWidthStore(state => state.isOpen);
//   const [footerHeight, setFooterHeight] = useState(136);
//   const [isResizing, setIsResizing] = useState(false);

//   const startResizing = () => {
//     setIsResizing(true);
//     document.body.style.cursor = 'ns-resize';
//     document.addEventListener('mousemove', resizeFooter);
//     document.addEventListener('mouseup', stopResizing);
//   };

//   const resizeFooter = (e: MouseEvent) => {
//     const windowHeight = window.innerHeight;
//     const mouseY = e.clientY;
//     const headerHeight = 28;
//     const minFooterHeight = 50;
//     const maxFooterHeight = windowHeight - headerHeight - 82;

//     const newHeight = windowHeight - mouseY;

//     if (newHeight >= minFooterHeight && newHeight <= maxFooterHeight) {
//       setFooterHeight(newHeight);
//     }
//   };

//   const stopResizing = () => {
//     setIsResizing(false);
//     document.body.style.cursor = '';
//     document.removeEventListener('mousemove', resizeFooter);
//     document.removeEventListener('mouseup', stopResizing);
//   };

//   // 사이드바 상태에 따른 main 영역 너비 계산
//   const getMainWidth = () => {
//     return isOpen ? `calc(100% - ${width}px)` : '100%';
//   };

//   return (
//     <div className={`${inter.className} h-screen`}>
//       <div className="flex flex-col h-full relative">
//         <Header />
//         <div className="flex flex-1 min-h-0">
//           <Sidebar2 />
//           <main
//             className="transition-all duration-300 flex flex-col relative h-full"
//             style={{ width: getMainWidth() }}
//           >
//             <div
//               className="overflow-auto"
//               style={{
//                 height: `calc(100% - ${footerHeight}px)`,
//               }}
//             >
//               {children}
//             </div>
//             <div

//               className="absolute bottom-0 left-0 right-0"
//               style={{ height: `${footerHeight}px` }}
//             >
//               <Footer footerHeight={footerHeight} startResizing={startResizing} />
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// src\app\main\layout.tsx
// 'use client';

// import { Inter } from 'next/font/google';
// import { useState, useEffect } from 'react';
// import Footer from '@/components/shared/layout/Footer';
// import Sidebar from '@/components/shared/layout/Sidebar';
// import '@/app/globals.css';
// import Header from '@/widgets/header';
// import Sidebar2 from '@/components/shared/layout/Sidebar2';
// import { useSidebarWidthStore } from '@/store/useSidebarWidthStore';

// const inter = Inter({ subsets: ['latin'] });

// export default function MainLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const width = useSidebarWidthStore(state => state.width);
//   const isOpen = useSidebarWidthStore(state => state.isOpen);
//   const [footerHeight, setFooterHeight] = useState(111);
//   const [isResizing, setIsResizing] = useState(false);
//   const [isFooterOpen, setIsFooterOpen] = useState(true);

//   const startResizing = () => {
//     setIsResizing(true);
//     document.body.style.cursor = 'ns-resize';
//     document.addEventListener('mousemove', resizeFooter);
//     document.addEventListener('mouseup', stopResizing);
//   };

//   const resizeFooter = (e: MouseEvent) => {
//     const windowHeight = window.innerHeight;
//     const mouseY = e.clientY;
//     const headerHeight = 28;
//     const minFooterHeight = 50;
//     const maxFooterHeight = windowHeight - headerHeight - 82;

//     const newHeight = windowHeight - mouseY;

//     if (newHeight >= minFooterHeight && newHeight <= maxFooterHeight) {
//       setFooterHeight(newHeight);
//     }
//   };

//   const stopResizing = () => {
//     setIsResizing(false);
//     document.body.style.cursor = '';
//     document.removeEventListener('mousemove', resizeFooter);
//     document.removeEventListener('mouseup', stopResizing);
//   };

//   // 사이드바 상태에 따른 main 영역 너비 계산
//   const getMainWidth = () => {
//     return isOpen ? `calc(100% - ${width}px)` : '100%';
//   };

//   // Footer의 열기/닫기 상태 변경 함수
//   const toggleFooter = (isOpen: boolean) => {
//     setIsFooterOpen(isOpen);
//   };

//   // 실제 Footer 높이 계산 (닫힌 상태면 32px)
//   const actualFooterHeight = isFooterOpen ? footerHeight : 32;

//   return (
//     <div className={`${inter.className} h-screen`}>
//       <div className="flex flex-col h-full relative">
//         <Header />
//         <div className="flex flex-1 min-h-0">
//           <Sidebar2 />
//           <main
//             className="transition-all duration-300 flex flex-col relative h-full"
//             style={{ width: getMainWidth() }}
//           >
//             <div
//               className="overflow-auto transition-all duration-300"
//               style={{
//                 height: `calc(100% - ${actualFooterHeight}px)`,
//               }}
//             >
//               {children}
//             </div>
//             <div
//               className="absolute bottom-0 left-0 right-0 transition-all duration-300"
//             >
//               <Footer 
//                 footerHeight={footerHeight} 
//                 onToggleDrawer={toggleFooter}
//               />
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { Inter } from 'next/font/google';
import { useState, useEffect, useRef } from 'react';
import Footer from '@/components/shared/layout/Footer';
import Sidebar from '@/components/shared/layout/Sidebar';
import '@/app/globals.css';
import Header from '@/widgets/header';
import Sidebar2 from '@/components/shared/layout/Sidebar2';
import { useSidebarWidthStore } from '@/store/useSidebarWidthStore';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const width = useSidebarWidthStore(state => state.width);
  const isOpen = useSidebarWidthStore(state => state.isOpen);
  
  // 참조 높이 상태
  const [footerHeight, setFooterHeight] = useState(111);
  const [isFooterOpen, setIsFooterOpen] = useState(true);
  const [isFooterResizing, setIsFooterResizing] = useState(false);
  
  // 컨텐츠 영역 참조
  const contentRef = useRef<HTMLDivElement>(null);
  
  // 푸터의 열기/닫기 상태 변경 함수
  const toggleFooter = (isOpen: boolean) => {
    setIsFooterOpen(isOpen);
  };
  
  // 푸터 리사이징 시작
  const handleResizeStart = () => {
    setIsFooterResizing(true);
  };
  
  // 푸터 리사이징 중 (실시간 높이 반영)
  const handleResize = (height: number) => {
    if (contentRef.current) {
      contentRef.current.style.height = `calc(100% - ${height}px)`;
    }
  };
  
  // 푸터 리사이징 종료 (최종 높이 저장)
  const handleResizeEnd = (height: number) => {
    setFooterHeight(height);
    setIsFooterResizing(false);
  };
  
  // 사이드바 상태에 따른 main 영역 너비 계산
  const getMainWidth = () => {
    return isOpen ? `calc(100% - ${width}px)` : '100%';
  };
  
  // 실제 푸터 높이 계산 (닫힌 상태면 32px)
  const actualFooterHeight = isFooterOpen ? footerHeight : 32;
  
  return (
    <div className={`${inter.className} h-screen overflow-hidden`}>
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex flex-1 min-h-0 overflow-hidden">
          <Sidebar2 />
          <main
            className="flex flex-col h-full transition-all duration-300"
            style={{ 
              width: getMainWidth(),
              overflow: 'hidden' // 주 컨테이너는 오버플로우 숨김
            }}
          >
            {/* 컨텐츠 영역 - 높이는 푸터 높이에 따라 동적 조정 */}
            <div
              ref={contentRef}
              className="overflow-auto"
              style={{
                height: `calc(100% - ${actualFooterHeight}px)`,
                transition: isFooterResizing ? 'none' : 'height 0.3s ease-in-out'
              }}
            >
              {children}
            </div>
            
            {/* 푸터 영역 */}
            <div 
              style={{ 
                height: 'auto',
                maxHeight: `${actualFooterHeight}px`
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