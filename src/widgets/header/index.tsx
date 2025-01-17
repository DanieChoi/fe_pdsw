import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTabStore } from '@/store/tabStore'
import Cookies from 'js-cookie'
import { MenuItem, menuItems } from '@/widgets/header/model/menuItems'
import React from 'react'

export default function Header() {
  const router = useRouter();
  const { 
    addTab, 
    openedTabs, 
    duplicateTab, 
    activeTabId, 
    activeTabKey,
    getTabCountById, 
    rows, 
    tabGroups, 
    setActiveTab 
  } = useTabStore();

  const handleMenuClick = (item: MenuItem, event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.ctrlKey) {
      duplicateTab(item.id);
    } else {
      const existingTabs = openedTabs.filter(tab => tab.id === item.id);
      if (existingTabs.length > 0) {
        const lastTab = existingTabs[existingTabs.length - 1];
        setActiveTab(lastTab.id, lastTab.uniqueKey);
      } else {
        const newTabKey = `${item.id}-${Date.now()}`;
        addTab({ 
          ...item, 
          uniqueKey: newTabKey,
          content: item.content || null 
        });
      }
    }
  };

  const isTabOpened = (itemId: number) => {
    const existingTabs = openedTabs.filter(tab => tab.id === itemId);
    return existingTabs.length > 0;
  };

  const isActiveTab = (itemId: number) => {
    return openedTabs.some(
      tab => tab.id === itemId && tab.id === activeTabId && tab.uniqueKey === activeTabKey
    );
  };

  const handleLoginOut = () => {
    Cookies.remove('session_key');
    router.push('/login');
  }

  return (
    <div className="flex flex-col">
      <div className="header-top bg-[#5BC2C1] h-[28px] flex items-center">
        <div className="px-4 flex justify-between items-center w-full">
          <div className="flex items-center">
            <Image
              src="/header-menu/nexpds-logo.svg"
              alt="NEXPDS"
              width={66}
              height={11}
              priority
            />
          </div>
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
            <Button 
              variant="ghost"
              className="flex items-center space-x-1 text-sm text-white hover:bg-[#56CAD6]/20"
              onClick={handleLoginOut}
            >
              <Image
                src="/header-menu/log-out.svg"
                alt="로그아웃"
                width={14}
                height={10}
                priority
              />
            </Button>
          </div>
        </div>
      </div>
      <header className="bg-white border-b">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between header-padding">
            <nav className="flex overflow-x-auto gap-4">
              {menuItems.map((item) => {
                const count = getTabCountById(item.id);
                const isActive = isActiveTab(item.id);
                const isOpened = isTabOpened(item.id);

                return (
                  <div key={`menu-${item.id}`} className="menu-item">
                    <Button
                      variant={isActive ? 'menuActive' : (isOpened ? 'menuOpened' : 'menu')}
                      size="none"
                      onClick={(e) => handleMenuClick(item, e)}
                      className="relative p-2"
                    >
                      {isActive && (
                        <div className="absolute top-1 right-1">
                          <Check className="w-3 h-3 text-[#56CAD6]" />
                        </div>
                      )}
                      <div className="flex items-center justify-center p-1">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs whitespace-nowrap">{item.title}</span>
                        {count > 1 && (
                          <span className="ml-1 px-1.5 py-0.5 text-[10px] leading-none bg-[#E5F3F3] text-[#5BC2C1] rounded-full min-w-[16px] text-center">
                            {count}
                          </span>
                        )}
                      </div>
                    </Button>
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}