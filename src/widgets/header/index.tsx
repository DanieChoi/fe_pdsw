import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTabStore } from '@/store/tabStore'
import Cookies from 'js-cookie'
import { MenuItem, menuItems } from '@/widgets/header/model/menuItems'
import React from 'react'

export default function Header() {
  const router = useRouter();
  const { addTab, openedTabs, duplicateTab, activeTabId, getTabCountById, rows, tabGroups, setActiveTab  } = useTabStore();

  const handleMenuClick = (item: MenuItem, event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.ctrlKey) {
      duplicateTab(item.id);  // duplicateTab 내부에서 활성화 처리
    } else {
      const existingTab = openedTabs.find(tab => tab.id === item.id);
      if (existingTab) {
        // 이미 열려있는 탭이면 활성화만
        setActiveTab(item.id, item.uniqueKey || '');
      } else {
        // 새 탭 추가 (addTab 내부에서 활성화 처리)
        addTab({ ...item, uniqueKey: `${item.id}-${Date.now()}` });
      }
    }
  };

  const isTabOpened = (itemId: number) => {
    return openedTabs.some(tab => tab.id === itemId);
  };

  const handleLoginOut = () => {
    Cookies.remove('session_key');
    router.push('/login');
  }

  // 디버깅을 위한 각 섹션의 탭 상태 출력 함수
  const getSectionTabsInfo = () => {
    return rows.map(row => 
      row.sections.map(section => ({
        sectionId: section.id,
        tabs: section.tabs.map(tab => ({
          id: tab.id,
          uniqueKey: tab.uniqueKey,
          title: tab.title
        }))
      }))
    );
  };

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
      <header className="bg-white py-[10px] pl-[30px] border-b">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <nav className="flex gap-0.5 overflow-x-auto">
              {menuItems.map((item) => {
                const count = getTabCountById(item.id);
                return (
                  <div key={`menu-${item.id}`} className="menu-item px-0.5">
                    <Button
                      variant={isTabOpened(item.id) ? 'menuActive' : 'menu'}
                      size="none"
                      onClick={(e) => handleMenuClick(item, e)}
                      className="relative"
                    >
                      <div className="flex items-center justify-center">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={28}
                          height={28}
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
        {/* 디버깅 정보 */}
        {/* <div className="text-xs text-gray-400 mt-2 border-t pt-2">
          <div>Active Tab: {activeTabId}</div>
          <div>Opened Tabs: {openedTabs.map(tab => 
            `${tab.title}(id:${tab.id}, uniqueKey:${tab.uniqueKey || 'none'})`
          ).join(', ')}</div>
          <div>Tab Counts: {menuItems.map(item => 
            `${item.title}: ${getTabCountById(item.id)}`
          ).join(', ')}</div>
          <div>Sections Info: {JSON.stringify(getSectionTabsInfo(), null, 2)}</div>
          <div>Tab Groups: {tabGroups.map(group => 
            `${group.id}: [${group.tabs.map(t => 
              `${t.id}(uniqueKey:${t.uniqueKey || 'none'})`
            ).join(',')}]`
          ).join(', ')}</div>
        </div> */}
      </header>
    </div>
  );
}