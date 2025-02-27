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
'use client';

import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
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
  const [footerHeight, setFooterHeight] = useState(111);
  const [isResizing, setIsResizing] = useState(false);
  const [isFooterOpen, setIsFooterOpen] = useState(true);

  const startResizing = () => {
    setIsResizing(true);
    document.body.style.cursor = 'ns-resize';
    document.addEventListener('mousemove', resizeFooter);
    document.addEventListener('mouseup', stopResizing);
  };

  const resizeFooter = (e: MouseEvent) => {
    const windowHeight = window.innerHeight;
    const mouseY = e.clientY;
    const headerHeight = 28;
    const minFooterHeight = 50;
    const maxFooterHeight = windowHeight - headerHeight - 82;

    const newHeight = windowHeight - mouseY;

    if (newHeight >= minFooterHeight && newHeight <= maxFooterHeight) {
      setFooterHeight(newHeight);
    }
  };

  const stopResizing = () => {
    setIsResizing(false);
    document.body.style.cursor = '';
    document.removeEventListener('mousemove', resizeFooter);
    document.removeEventListener('mouseup', stopResizing);
  };

  // 사이드바 상태에 따른 main 영역 너비 계산
  const getMainWidth = () => {
    return isOpen ? `calc(100% - ${width}px)` : '100%';
  };

  // Footer의 열기/닫기 상태 변경 함수
  const toggleFooter = (isOpen: boolean) => {
    setIsFooterOpen(isOpen);
  };

  // 실제 Footer 높이 계산 (닫힌 상태면 32px)
  const actualFooterHeight = isFooterOpen ? footerHeight : 32;

  return (
    <div className={`${inter.className} h-screen`}>
      <div className="flex flex-col h-full relative">
        <Header />
        <div className="flex flex-1 min-h-0">
          <Sidebar2 />
          <main
            className="transition-all duration-300 flex flex-col relative h-full"
            style={{ width: getMainWidth() }}
          >
            <div
              className="overflow-auto transition-all duration-300"
              style={{
                height: `calc(100% - ${actualFooterHeight}px)`,
              }}
            >
              {children}
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 transition-all duration-300"
            >
              <Footer 
                footerHeight={footerHeight} 
                startResizing={startResizing}
                onToggleDrawer={toggleFooter}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}