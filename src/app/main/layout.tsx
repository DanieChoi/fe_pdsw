// 'use client';

// import { Inter } from 'next/font/google'
// import { useState } from 'react';
// import Footer from '@/components/shared/layout/Footer'
// import Sidebar from '@/components/shared/layout/Sidebar'
// import '@/app/globals.css'
// import Header from '@/widgets/header';
// import TitleHeader from './comp/TitleHeader';

// const inter = Inter({ subsets: ['latin'] })

// export default function MainLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(true);
//   const [footerHeight, setFooterHeight] = useState(140);
//   const [isResizing, setIsResizing] = useState(false);

//   const toggleSidebar = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const startResizing = () => {
//     setIsResizing(true);
//     document.body.style.cursor = 'ns-resize';
//     document.addEventListener('mousemove', resizeFooter);
//     document.addEventListener('mouseup', stopResizing);
//   };

//   const resizeFooter = (e: MouseEvent) => {
//     const windowHeight = window.innerHeight;
//     const mouseY = e.clientY;
//     const headerHeight = 28; // 헤더 높이를 28px로 수정
//     const minFooterHeight = 50;
//     const maxFooterHeight = windowHeight - headerHeight - 100;
    
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

//   return (
//     <div className={`${inter.className} h-screen`}>
//       <div className="flex flex-col h-full relative">
//         <Header />
//         <div className="flex flex-1 h-[calc(100%-129px)]">
//           <Sidebar isMenuOpen={isMenuOpen} toggleSidebar={toggleSidebar} />
//           <main
//             className={`transition-all duration-300 flex flex-col relative h-full ${
//               isMenuOpen ? 'w-[calc(100%-260px)]' : 'w-full'
//             }`}
//           >
//             <div 
//               className="overflow-y-auto"
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
//               <Footer footerHeight={footerHeight} startResizing={startResizing}/>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// MainLayout.tsx
'use client';

import { Inter } from 'next/font/google';
import { useState } from 'react';
import Footer from '@/components/shared/layout/Footer';
import Sidebar from '@/components/shared/layout/Sidebar';
import '@/app/globals.css';
import Header from '@/widgets/header';
import Sidebar2 from '@/components/shared/layout/Sidebar2';
import { useSidebarWidthStore } from '@/components/shared/layout/Sidebar2';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const width = useSidebarWidthStore(state => state.width); 
  const [footerHeight, setFooterHeight] = useState(140);
  const [isResizing, setIsResizing] = useState(false);

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
    const maxFooterHeight = windowHeight - headerHeight - 100;

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

  return (
    <div className={`${inter.className} h-screen`}>
      <div className="flex flex-col h-full relative">
        <Header />
          <div className="flex flex-1 min-h-0"> {/* min-h-0이 중요합니다 */}

          <Sidebar2 />
          <main 
              className="transition-all duration-300 flex flex-col relative h-full"
              style={{ width: `calc(100% - ${width}px)` }}
            >
            <div
              style={{
                height: `calc(100% - ${footerHeight}px)`,
              }}
            >
              {children}
            </div>
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ height: `${footerHeight}px` }}
            >
              <Footer footerHeight={footerHeight} startResizing={startResizing} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}