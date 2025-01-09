// C:\Users\terec\fe_pdsw\src\app\main\layout.tsx

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/common/layout/Header'
import Footer from '@/components/common/layout/Footer'
import Sidebar from '@/components/common/layout/Sidebar'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PDS Web',
  description: 'PDS Web Application',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar isMenuOpen />
          <main className="flex-1 p-6 bg-gray-50">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}