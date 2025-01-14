"use client"

import { Button } from '@/components/ui/button'
import { useTabStore } from '@/store';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter();
  const { addTab } = useTabStore();

  const menuItems = [
    { 
      id: 1, 
      title: '캠페인 그룹관리', 
      icon: '/header-menu/캠페인그룹관리.svg', 
      href: '/main' 
    },
    { 
      id: 2, 
      title: '캠페인 관리', 
      icon: '/header-menu/캠페인관리.svg', 
      href: '/campaign' 
    },
    { 
      id: 3, 
      title: '통합모니터', 
      icon: '/header-menu/통합모니터.svg', 
      href: '/monitor' 
    },
    { 
      id: 4, 
      title: '총진행상황', 
      icon: '/header-menu/총진행상황.svg', 
      href: '/status' 
    },
    { 
      id: 5, 
      title: '발신전화상태', 
      icon: '/header-menu/발신진행상태.svg', 
      href: '/call' 
    },
    { 
      id: 6, 
      title: '채널 모니터', 
      icon: '/header-menu/채널모니터.svg', 
      href: '/channel' 
    },
    { 
      id: 7, 
      title: '리스트 매니저', 
      icon: '/header-menu/리스트매니저.svg', 
      href: '/list' 
    },
    { 
      id: 8, 
      title: '예약콜 제한 설정', 
      icon: '/header-menu/예약콜제한설정.svg', 
      href: '/reserve' 
    },
    { 
      id: 9, 
      title: '분배호수 제한 설정', 
      icon: '/header-menu/분배호수제한설정.svg', 
      href: '/distribute' 
    },
    { 
      id: 10, 
      title: '시스템 설정', 
      icon: '/header-menu/시스템설정.svg', 
      href: '/system' 
    },
    { 
      id: 11, 
      title: '운영 설정', 
      icon: '/header-menu/운영설정.svg', 
      href: '/operation' 
    },
    { 
      id: 12, 
      title: '환경 설정', 
      icon: '/header-menu/환경설정.svg', 
      href: '/settings' 
    },
  ]

  const handleMenuClick = (item: typeof menuItems[0]) => {
    addTab(item);
    // router.push(item.href);
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
                    className="hover:bg-white/20 flex flex-col items-center justify-center min-w-[80px] h-auto py-2 space-y-1"
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