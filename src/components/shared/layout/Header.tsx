// src/app/Header.tsx
"use client"

import { Button } from '@/components/ui/button'
import { useTabStore } from '@/store';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { menuItems, MenuItem } from '@/components/shared/constants/menuItems';

export default function Header() {
  const router = useRouter();
  const { addTab, openedTabs } = useTabStore();

  const handleMenuClick = (item: MenuItem) => {
    addTab(item);
    // router.push(item.href);
  };

  // 현재 열린 탭인지 확인하는 함수
  const isTabOpened = (itemId: number) => {
    return openedTabs.some(tab => tab.id === itemId);
  };

  return (
    <div className="flex flex-col">
      <div className="header-top bg-[#5BC2C1] h-[28px] flex items-center">
        <div className=" px-4 flex justify-between items-center w-full">
          {/* NEXPDS Logo */}
          <div className="flex items-center">
            <Image
              src="/header-menu/nexpds-logo.svg"
              alt="NEXPDS"
              width={66}
              height={11}
              priority
            />
          </div>
          {/* 오른쪽 사용자 정보 */}
          <div className="flex items-center space-x-4 text-white text-sm">
            <div className='flex items-center space-x-1'>
            <Image
                src="/header-menu/top_pic.svg"
                alt="사용자"
                width={18}
                height={18}
                priority
              />
              <span>홍길동(관리자)</span>
            </div>
            {/* 로그아웃 버튼*/}
            <button className="flex items-center space-x-1 text-sm">
              <Image
                src="/header-menu/log-out.svg"
                alt="로그아웃"
                width={14}
                height={10}
                priority
              />
            </button>
          </div>
        </div>
      </div>
      <header className="bg-white py-[10px] pl-[30px] border-b">
        <div className="">
          <div className="flex items-center justify-between">
            <nav className="flex space-x-1 overflow-x-auto">
              {menuItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <Button
                    type="button"
                    variant="ghost"
                    className={`
                      hover:bg-gray-100 flex flex-col items-center justify-center 
                      min-w-[80px] h-auto py-2 space-y-1 rounded-md
                      ${isTabOpened(item.id) ? 'bg-blue-50 text-blue-700' : ''}
                    `}
                    onClick={() => handleMenuClick(item)}
                  >
                    <div className="w-[32px] h-[32px] relative">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs whitespace-nowrap">{item.title}</span>
                  </Button>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}