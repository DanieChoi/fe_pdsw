import { CommonButton } from "@/components/shared/CommonButton";
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTabStore } from '@/store/tabStore'
import Cookies from 'js-cookie'
import { MenuItem, menuItems } from '@/widgets/header/model/menuItems'
import React, { useState, useEffect } from 'react'
import { useAuthStore, useMainStore } from '@/store';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useApiForTenants } from '@/features/auth/hooks/useApiForTenants';
import useApiForFetchCounselorList from '@/features/campaignManager/hooks/useApiForFetchCounselorList';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import { useApiForGetAuthorizedMenusInfoForMenuRoleId } from "./hooks/useApiForGetAuthorizedMenusInfoForMenuRoleId";

const errorMessage = {
  isOpen: false,
  message: '',
  title: '로그인',
  type: '0',
};

export default function Header() {
  const router = useRouter();
  const _tenantId = Number(Cookies.get('tenant_id'));
  const { id, tenant_id, session_key: _sessionKey, role_id, menu_role_id } = useAuthStore();

  const [alertState, setAlertState] = useState(errorMessage);
  const [shouldFetchCounselors, setShouldFetchCounselors] = useState(false);
  const [isSplitDialogOpen, setIsSplitDialogOpen] = useState(false);

  const openInNewWindow = () => {
    // 현재 화면의 크기를 가져옵니다
    const width = window.screen.width;
    const height = window.screen.height;

    // 창을 화면 중앙에 위치시킵니다
    const left = 0;  // 전체 화면이므로 0으로 설정
    const top = 0;   // 전체 화면이므로 0으로 설정

    const newWindow = window.open(
      '/monitor',
      'monitor-window',
      `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no`
    );

    if (newWindow) {
      newWindow.focus();
    }
  };
  const {
    tenants,
    setCampaigns,
    setTenants,
    setCounselers,
  } = useMainStore();

  const {
    addTab,
    removeTab,
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
    if (item.id === 3) {
      openInNewWindow();
      return;
    }

    if (event.ctrlKey) {
      duplicateTab(item.id);
    } else {
      // 해당 아이템의 이전 탭들을 모두 찾아서 제거
      const existingTabs = openedTabs.filter(tab => tab.id === item.id);
      existingTabs.forEach(tab => {
        removeTab(tab.id, tab.uniqueKey);
      });

      // 새로운 탭 추가
      const newTabKey = `${item.id}-${Date.now()}`;
      const newTab = {
        ...item,
        uniqueKey: newTabKey,
        content: item.content || null
      };
      addTab(newTab);

      // 탭을 추가한 후 활성 탭 설정
      setActiveTab(item.id, newTabKey);
    }

    setCampaignIdForUpdateFromSideMenu(null);
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

  // const handleLoginOut = () => {
  //   Cookies.remove('session_key');
  //   router.push('/login');
  // }

  const handleLoginOut = () => {
    // 쿠키 제거
    Cookies.remove('session_key');

    // AuthStore의 상태를 초기화
    useAuthStore.getState().clearAuth();

    // 홈 또는 로그인 페이지로 리다이렉트
    router.push('/login');
  }

  // tofix  로그인 안했을때 미리 실행되서 에러 발생
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
        if (tenant_id === 0) {
          setTenants(data.result_data);
        } else {
          setTenants(data.result_data.filter(data => data.tenant_id === tenant_id));
        }
        // const tempTenantIdArray = data.result_data.map(tenant => Number(tenant.tenant_id));
        // fetchSkills({
        //   tenant_id_array: tempTenantIdArray
        // });
        // fetchMain({
        //   session_key: _sessionKey,
        //   tenant_id: _tenantId
        // });
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
    if (tenants.length > 0) {
      fetchMain({
        session_key: _sessionKey,
        tenant_id: _tenantId
      });
    }
  }, [tenants]);

  useEffect(() => {
    // console.log('Fetching tenants with:', { _sessionKey, _tenantId });
    fetchTenants({
      session_key: _sessionKey,
      tenant_id: _tenantId,
    });
  }, [fetchTenants, _sessionKey, _tenantId]);

  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      // console.log('Main API response:', data);
      // setCampaigns(data.result_data);
      if (tenant_id === 0) {
        setCampaigns(data.result_data);
      } else {
        setCampaigns(data.result_data.filter(data => data.tenant_id === tenant_id));
      }
      setShouldFetchCounselors(true);  // 이 시점에 상담사 목록 조회 활성화

    }
  });

  // 훅 관리
  const { data: dataForMenusInfoForRoleId, menuList, isLoading: isLoadingMenuInfo } =
    useApiForGetAuthorizedMenusInfoForMenuRoleId({
      roleId: role_id || 1, // menu_role_id가 없을 경우 기본값 1
      enabled: !!menu_role_id // menu_role_id가 있을 때만 활성화
    });

  console.log("dataForMenusInfoForRoleId : ", dataForMenusInfoForRoleId);
  

  const { data: counselorListData } = useApiForFetchCounselorList({
    credentials: {
      // 필요한 credentials 정보
      session_key: _sessionKey,
      tenant_id: tenant_id,
      roleId: role_id
    },
    // enabled: shouldFetchCounselors,  // fetchMain 완료 후에만 실행
  });

  // console.log('counselorListData at header :', counselorListData);

  useEffect(() => {
    if (counselorListData) {
      setCounselers(counselorListData.result_data);
    }
  }, [counselorListData]);

  return (
    <div className="flex flex-col">
      <div className="header-top h-[28px] flex items-center">
        <div className="flex justify-between items-center w-full">
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
                width={14}
                height={14}
                priority
              />
              <span>{id}({role_id === 1 ? '상담사'
                : role_id === 2 ? '파트매니저'
                  : role_id === 3 ? '그룹매니저'
                    : role_id === 4 ? '테넌트메니저'
                      : role_id === 5 ? '시스템 메니저'
                        : role_id === 6 ? '전체'
                          : ''})</span>
            </div>
            <CommonButton
              variant="ghost"
              className="flex items-center space-x-1 text-sm text-white hover:bg-[#56CAD6]/20"
              onClick={handleLoginOut}
            >
              <Image
                src="/header-menu/log-out.svg"
                alt="로그아웃"
                width={11}
                height={12}
                priority
              />
            </CommonButton>
          </div>
        </div>
      </div>
      <header className="bg-white border-b">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between header-padding">
            {/* <div>menu_role_id: {menu_role_id}</div> */}

            <nav className="flex overflow-x-auto gap-3">
              {menuItems.map((item) => {
                const count = getTabCountById(item.id);
                const isActive = isActiveTab(item.id);
                const isOpened = isTabOpened(item.id);

                return (
                  <div key={`menu-${item.id}`} className="menu-item">
                    <CommonButton
                      variant={isActive ? 'menuActive' : (isOpened ? 'menuOpened' : 'menu')}
                      size="default"
                      onClick={(e) => handleMenuClick(item, e)}
                      className="relative py-1.5 px-2"
                    >

                      <div className="flex items-center justify-center">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex items-center">
                        <span className={`text-xs whitespace-nowrap ${isActive ? 'text-white' : 'text-[#333]'}`}>{item.title}</span>
                        {count > 1 && (
                          <span className="ml-1 px-1.5 py-0.5 text-[10px] leading-none bg-[#E5F3F3] text-[#5BC2C1] rounded-full min-w-[16px] text-center">
                            {count}
                          </span>
                        )}
                      </div>
                    </CommonButton>
                  </div>
                );
              })}
            </nav>
            <div>

              {/* <div className="flex items-center gap-2">
                <CommonButton
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSplitDialogOpen(true)}
                  className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 border-gray-300"
                >
                  <LayoutGrid size={16} />
                  <span className="text-sm">화면 분할</span>
                </CommonButton>

                <SplitScreenDialog
                  isOpen={isSplitDialogOpen}
                  onClose={() => setIsSplitDialogOpen(false)}
                  tabs={openedTabs}
                  onApply={() => {
                    // 여기에 화면 분할 적용 로직 추가
                    setIsSplitDialogOpen(false);
                  }}
                />

                <SplitScreenDialog2 tabs={openedTabs}/>

              </div> */}

            </div>
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