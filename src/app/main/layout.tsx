'use client';
import { Inter } from 'next/font/google'
import { useState } from 'react';
import Header from '@/components/shared/layout/Header'
import Footer from '@/components/shared/layout/Footer'
import Sidebar from '@/components/shared/layout/Sidebar'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function MainLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 const [isMenuOpen, setIsMenuOpen] = useState(true);
 const [footerHeight, setFooterHeight] = useState(140);
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
   const windowHeight = window.innerHeight;
   const mouseY = e.clientY;
   const headerHeight = 50;
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
     <div className="flex flex-col h-full">
       <Header />
       <div className="flex flex-1">
         <Sidebar isMenuOpen={isMenuOpen} toggleSidebar={toggleSidebar} />
         <main
           className={`transition-all duration-300 flex flex-col relative ${
             isMenuOpen ? 'w-[calc(100%-16rem)]' : 'w-full'
           }`}
         >
           <div className="flex-1 overflow-auto">
             {children}
           </div>
           <div className="absolute bottom-0 left-0 right-0" style={{ height: `${footerHeight}px` }}>
             <Footer footerHeight={footerHeight} startResizing={startResizing}/>
           </div>
         </main>
       </div>
     </div>
   </div>
 );
}