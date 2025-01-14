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

  const toggleSidebar = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={inter.className}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar isMenuOpen={isMenuOpen} toggleSidebar={toggleSidebar} />
          <main
            className={`transition-all duration-300 ${
              isMenuOpen ? 'w-[calc(100%-16rem)]' : 'w-full'
            }`}
          >
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}