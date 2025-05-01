// 'use client';

// import { Inter } from 'next/font/google';
// import { useState, useRef } from 'react';
// import Footer from '@/components/shared/layout/Footer';
// import Sidebar2 from '@/components/shared/layout/Sidebar2';
// import '@/app/globals.css';
// import Header from '@/widgets/header';
// import { useSidebarWidthStore } from '@/store/useSidebarWidthStore';

// const inter = Inter({ subsets: ['latin'] });

// export default function MainLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const width = useSidebarWidthStore((state) => state.width);
//   const isOpen = useSidebarWidthStore((state) => state.isOpen);

//   const [footerHeight, setFooterHeight] = useState(111);
//   const [isFooterOpen, setIsFooterOpen] = useState(true);

//   const contentRef = useRef<HTMLDivElement>(null);

//   const toggleFooter = (isOpen: boolean) => {
//     setIsFooterOpen(isOpen);
//   };

//   const handleResize = (height: number) => {
//     if (contentRef.current) {
//       contentRef.current.style.height = `calc(100% - ${height}px)`;
//     }
//   };

//   const handleResizeEnd = (height: number) => {
//     setFooterHeight(height);
//   };

//   const getMainWidth = () => {
//     return isOpen ? `calc(100% - ${width}px)` : '100%';
//   };

//   const actualFooterHeight = isFooterOpen ? footerHeight : 32;

//   return (
//     <div className={`${inter.className} h-screen`}>
//       <div className="flex flex-col h-full">
//         <Header />
//         <div className="flex flex-1 min-h-0">
//           <Sidebar2 />
//           <main
//             className="flex flex-col h-full overflow-x-auto"
//             style={{ width: getMainWidth() }}
//           >
//             <div 
//               ref={contentRef}
//               className="refined-scrollbar overflow-auto flex-shrink-0 min-w-[800px]"
//               style={{
//                 height: `calc(100% - ${actualFooterHeight}px)`,
//                 paddingTop: '0',
//                 boxSizing: 'border-box',
//                 paddingBottom: '0',
//                 paddingLeft: '35px',
//                 paddingRight: '25px',
//                 marginTop: '20px',
//               }}
//             >
//               {children}
//             </div>
//             <div
//               style={{
//                 height: 'auto',
//                 maxHeight: `${actualFooterHeight}px`,
//               }}
//             >
//               <Footer
//                 footerHeight={footerHeight}
//                 onToggleDrawer={toggleFooter}
//                 onResizeHeight={handleResize}
//                 onResizeStart={() => {}} // 필요 시 콜백 유지
//                 onResizeEnd={handleResizeEnd}
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
import { useState, useRef } from 'react';
import Footer from '@/components/shared/layout/Footer';
import Sidebar2 from '@/components/shared/layout/Sidebar2';
import '@/app/globals.css';
import Header from '@/widgets/header';
import { useSidebarWidthStore } from '@/store/useSidebarWidthStore';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const width = useSidebarWidthStore((state) => state.width);
  const isOpen = useSidebarWidthStore((state) => state.isOpen);

  const [footerHeight, setFooterHeight] = useState(111);
  const [isFooterOpen, setIsFooterOpen] = useState(true);

  const contentRef = useRef<HTMLDivElement>(null);

  const toggleFooter = (isOpen: boolean) => {
    setIsFooterOpen(isOpen);
  };

  const handleResize = (height: number) => {
    if (contentRef.current) {
      contentRef.current.style.height = `calc(100% - ${height}px)`;
    }
  };

  const handleResizeEnd = (height: number) => {
    setFooterHeight(height);
  };

  const getMainWidth = () => {
    return isOpen ? `calc(100% - ${width}px)` : '100%';
  };

  const actualFooterHeight = isFooterOpen ? footerHeight : 32;

  return (
    <div className={`${inter.className} h-screen overflow-hidden`}>
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar2 />
          <main
            className="flex flex-col h-full relative"
            style={{ width: getMainWidth() }}
          >
            <div 
              ref={contentRef}
              className="refined-scrollbar overflow-auto flex-1"
              style={{
                height: `calc(100% - ${actualFooterHeight}px)`,
                padding: '20px 25px 0 35px',
                boxSizing: 'border-box',
              }}
            >
              <div className="min-w-[800px]">
                {children}
              </div>
            </div>
            <div
              className="flex-shrink-0"
              style={{
                height: `${actualFooterHeight}px`,
              }}
            >
              <Footer
                footerHeight={footerHeight}
                onToggleDrawer={toggleFooter}
                onResizeHeight={handleResize}
                onResizeStart={() => {}}
                onResizeEnd={handleResizeEnd}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}