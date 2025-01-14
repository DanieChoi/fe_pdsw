// C:\Users\terec\fe_pdsw\src\app\main\layout.tsx
'use client';
//import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useState } from 'react';
import Header from '@/components/shared/layout/Header'
import Footer from '@/components/shared/layout/Footer'
import Sidebar from '@/components/shared/layout/Sidebar'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'PDS Web',
//   description: 'PDS Web Application',
// }

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [footerHeight, setFooterHeight] = useState(140); // 초기 푸터 높이 설정
  const [isResizing, setIsResizing] = useState(false);

  const toggleSidebar = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const startResizing = () => {
    setIsResizing(true);
    document.body.style.cursor = 'ns-resize';
    document.addEventListener('mousemove', resizeFooter);
    document.addEventListener('mouseup', stopResizing);
  };

  const resizeFooter = (e: MouseEvent) => {
    const newHeight = window.innerHeight - e.clientY; // 마우스 위치로 푸터 높이 계산
    if (newHeight > 50 && newHeight < window.innerHeight - 50) {
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
    <div className="{${inter.className} h-full}">
      <div className="h-full flex flex-col">
        <Header />
        <div className="flex flex-1 h-[calc(100%-125px)] ">
          <Sidebar isMenuOpen={isMenuOpen} toggleSidebar={toggleSidebar} />
          <main
            className={`transition-all duration-300 h-full ${
              isMenuOpen ? 'w-[calc(100%-16rem)]' : 'w-full'
            }`}
          >

            <div
              className="flex-1 overflow-auto"
              style={{
                height: `calc(100% - ${footerHeight}px)`, // 위쪽 콘텐츠 영역 동적 높이
              }}
            >
            {children}
            </div>
            <Footer footerHeight={footerHeight} startResizing={startResizing}/>
          </main>
        </div>
      </div>
    </div>
  );
}