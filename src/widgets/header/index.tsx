import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTabStore } from '@/store/tabStore'
import Cookies from 'js-cookie'
import { MenuItem, menuItems } from '@/widgets/header/model/menuItems'
import React, { useState, useEffect } from 'react'
import { useMainStore } from '@/store';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useApiForTenants } from '@/features/auth/hooks/useApiForTenants';
import useApiForFetchCounselorList from '@/features/campaignManager/hooks/useApiForFetchCounselorList';
import CustomAlert from '@/components/shared/layout/CustomAlert';

const errorMessage = {
  isOpen: false,
  message: '',
  title: '로그인',
  type: '0',
};

export default function Header() {
  const router = useRouter();
  const _sessionKey = Cookies.get('session_key') || '';
  const _tenantId = Number(Cookies.get('tenant_id'));
  const [alertState, setAlertState] = useState(errorMessage);

  const {
    setCampaigns,
    setTenants,
    setCounselers,
  } = useMainStore();

  const {
    addTab,
    openedTabs,
    duplicateTab,
    activeTabId,
    activeTabKey,
    getTabCountById,
    rows,
    tabGroups,
    setActiveTab,
    openCampaignManagerForUpdate,
    setCampaignIdForUpdateFromSideMenu
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
        // alert(item.id);
        addTab({
          ...item,
          uniqueKey: newTabKey,
          content: item.content || null
        });
      }

      openCampaignManagerForUpdate(item.id.toString(), "");
      setCampaignIdForUpdateFromSideMenu(null)
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

  const { mutate: fetchTenants } = useApiForTenants({
    onSuccess: (data) => {
      console.log('Tenants API response:', data);
      if (data.result_code === 5) {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: '로그인 정보가 없습니다.',
        });
        Cookies.remove('session_key');
        router.push('/login');
      } else {
        setTenants(data.result_data);
        // const tempTenantIdArray = data.result_data.map(tenant => Number(tenant.tenant_id));
        // fetchSkills({
        //   tenant_id_array: tempTenantIdArray
        // });
        fetchMain({
          session_key: _sessionKey,
          tenant_id: _tenantId
        });
      }
    },
    onError: (error) => {
      console.error('Tenants API error:', error);
      if (error.message.split('||')[0] === '5') {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: '로그인 정보가 없습니다.',
        });
        Cookies.remove('session_key');
        router.push('/login');
      }
    }
  });

  useEffect(() => {
    console.log('Fetching tenants with:', { _sessionKey, _tenantId });
    fetchTenants({
      session_key: _sessionKey,
      tenant_id: _tenantId,
    });
  }, [fetchTenants, _sessionKey, _tenantId]);

  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      console.log('Main API response:', data);
      setCampaigns(data.result_data);

      fetchCounselorList({
        session_key: _sessionKey,
        tenant_id: 1,
        roleId: 6
      });

    }
  });

  const { mutate: fetchCounselorList } = useApiForFetchCounselorList({
    onSuccess: (data) => {
      // console.log('Counselors API response:', data);
      setCounselers(data.counselorList);
    }
  });

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
                          <Check className="w-3 h-3 text-[#fff]" />
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
      <CustomAlert
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onClose={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}