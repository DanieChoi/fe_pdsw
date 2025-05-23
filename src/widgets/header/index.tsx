import { CommonButton } from "@/components/shared/CommonButton";
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTabStore } from '@/store/tabStore'
import Cookies from 'js-cookie'
import { MenuItem, menuItems } from '@/widgets/header/model/menuItems'
import React, { useState, useEffect, useRef } from 'react'
import { useAuthStore, useMainStore, useCampainManagerStore } from '@/store';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useApiForTenants } from '@/features/auth/hooks/useApiForTenants';
import useApiForFetchCounselorList from '@/features/campaignManager/hooks/useApiForFetchCounselorList';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import { useApiForGetAuthorizedMenusInfoForMenuRoleId } from "./hooks/useApiForGetAuthorizedMenusInfoForMenuRoleId";
import { useAvailableMenuStore } from "@/store/useAvailableMenuStore";
import { Button } from "@/components/ui/button";
import { useApiForSkills } from '@/features/campaignManager/hooks/useApiForSkills';
import AuthTimeOutCheck from "@/components/providers/AuthTimeOutCheck";
import { useApiForGetCampaignSkills } from '@/shared/hooks/skill/useApiForGetCampaignSkills';
import { useApiForGetCampaignGroups } from "@/shared/hooks/campaign/useApiForGetCampaignGroups";
import GlobalErrorAlert from "@/components/shared/CommonGlobalError/CommonGlobalError";
import logoutFunction from "@/components/common/logoutFunction";
import ServerErrorCheck from "@/components/providers/ServerErrorCheck";
import { log } from "console";


const errorMessage = {
  isOpen: false,
  message: '',
  title: '로그인',
  type: '1',
  onClose: () => { },
  onCancel: () => { },
};

export default function Header() {
  const router = useRouter();
  const _tenantId = Number(Cookies.get('tenant_id'));
  const { id:userId, tenant_id, session_key: _sessionKey, role_id, menu_role_id } = useAuthStore();

  const [alertState, setAlertState] = useState(errorMessage);
  const [shouldFetchCounselors, setShouldFetchCounselors] = useState(false);
  const [isSplitDialogOpen, setIsSplitDialogOpen] = useState(false);
  const { setSkills } = useCampainManagerStore();

  const {
    availableMenus,
    availableHeaderMenus,
    availableHeaderMenuIds,
    setAvailableMenus,
    setLoading,
    setError
  } = useAvailableMenuStore();

  const expires_in = useAuthStore((state) => state.expires_in);
  const startExpirationWatcher = useAuthStore((state) => state.startExpirationWatcher);
  const expires_check = useAuthStore((state) => state.expires_check);

  // 새로고침에도 만료시간 체크 유지를 위한 헤더 감시로직
  useEffect(() => {
    const now = Date.now();
    if (expires_in > 0 && !expires_check) {
      if (now > expires_in) {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: '로그인 세션이 만료되었습니다. 다시 로그인해주세요.',
          type: '2',
          onClose: () => {
            logoutFunction();
            router.push('/login');
          },
        });
      } else {
        startExpirationWatcher(); // 타이머 복구
      }
    }
  }, []);


  const popupRef = useRef<Window | null>(null);

  const openInNewWindow = () => {
    // 이미 팝업이 열려 있는 경우 새로 열지 않음
    if (popupRef.current && !popupRef.current.closed) {
      console.log('팝업이 이미 열려 있습니다.');
      popupRef.current.moveTo(100, 100);    // 화면 좌표로 이동
      popupRef.current.resizeTo(600, 400);  // 크기 조절
      popupRef.current.focus(); // 기존 창으로 포커스 이동
      return;
    }
    const isPopupOpen = localStorage.getItem('monitorPopupOpen');
    if (isPopupOpen === 'true' && (popupRef.current && !popupRef.current.closed)) {
      // alert('이미 팝업이 열려 있습니다.'); // 또는 무시
      return;
    }
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
      // popup 창이 열려있다면 useRef에 연결 (로그아웃시 팝업창 닫히게 하기 위함)
      popupRef.current = newWindow;
      
      localStorage.setItem('monitorPopupOpen', 'true'); // 다른 탭도 알 수 있음

      // 팝업이 닫히면 상태 해제
      const timer = setInterval(() => {
        if (popupRef.current?.closed) {
          localStorage.setItem('monitorPopupOpen', 'false');
          clearInterval(timer);
        }
      }, 500);
    }
  };

  const {
    tenants,
    setCampaigns,
    setTenants,
    setCounselers,
    setCampaignsLoading,
    setTenantsLoading,
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
    setCampaignIdForUpdateFromSideMenu,
    closeAllTabs,
    moveTabToSection,

  } = useTabStore();

  const { data: campaignSkillsData } = useApiForGetCampaignSkills();
  const { data: campaignGroupsData } = useApiForGetCampaignGroups();

  const { mutate: fetchSkills } = useApiForSkills({
    onSuccess: (data) => {
      setSkills(data.result_data || []);
      
      useMainStore.getState().setCampaignSkillsLoaded(true); // 사이드바 로딩중 해제를 위한 store 값 변경 0522 추가
      // console.log("Skills data loaded in header, updated store")
    },
    onError: (error) => {
      // 로딩 상태 해제
      ServerErrorCheck('스킬 리스트 조회', error.message);
      useCampainManagerStore.getState().setSkillsLoading(false); // ??
      console.log("Error loading skills data:", error);
    },
    retry: 0,
  });

  const handleMenuClick = (item: MenuItem, event: React.MouseEvent<HTMLButtonElement>) => {
    if (item.id === 3) {
      openInNewWindow();
      return;
    }

    // 특별한 탭 처리 (2, 8, 9, 11) - 2번 탭 추가
    if ([2, 8, 9, 11].includes(item.id)) {
      // 새로운 openSingleTabAtCurrentSection 함수 사용
      // 이 함수는 배타적 탭 그룹을 지원하고 현재 활성화된 섹션에 탭을 추가함
      useTabStore.getState().openSingleTabAtCurrentSection(item.id, item);
      return;
    }

    // 일반 메뉴 클릭 처리 - 이 부분은 그대로 유지
    if (event.ctrlKey) {
      duplicateTab(item.id);
    } else {
      // 기존 동일 ID 탭 제거
      openedTabs
        .filter(tab => tab.id === item.id)
        .forEach(tab => removeTab(tab.id, tab.uniqueKey));

      // 새 탭 추가 및 활성화
      const newTabKey = `${item.id}-${Date.now()}`;
      const newTab = { ...item, uniqueKey: newTabKey, content: item.content || null };
      addTab(newTab);
      setActiveTab(item.id, newTabKey);
    }
  }


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

    // 로그아웃 공통함수로 처리
    logoutFunction();

    // // 쿠키 제거
    // Cookies.remove('session_key');

    // // AuthStore의 상태를 초기화
    // useAuthStore.getState().clearAuth();

    // // tabStore의 초기화, 모든 탭 제거
    // useTabStore.getState().closeAllTabs("row-1", "default");

    // // 만들어진 탭그룹이 있는지 찾기
    // const sectionExists = rows.some(row =>
    //   row.sections.find(section => section.id === "section-1")
    // );
    // // 만들어진 탭그룹이 있다면 해당 탭그룹을 전부 초기화하고 section도 초기화
    // if (sectionExists) {
    //   useTabStore.getState().closeAllTabs("row-1", "section-1");
    //   useTabStore.getState().removeSection("row-1", "section-1");
    // }

    // 통합모니터창이 열려있다면 popup close
    if (popupRef.current && !popupRef.current.closed) {
      popupRef.current.close();
    }


    // 홈 또는 로그인 페이지로 리다이렉트 
    router.push('/login');
  }


  const { mutate: fetchTenants } = useApiForTenants({
    onSuccess: (data) => {
      if (data.result_code === 5) {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: '로그인 정보가 없습니다.',
          type: '2',
          onClose: () => goLogin(),
        });
        useMainStore.getState().setTenantsLoading(false);
      } else {
        if (tenant_id === 0) {
          setTenants(data.result_data);
        } else {
          setTenants(data.result_data.filter(data => data.tenant_id === tenant_id));
        }
        // console.log("Tenant data loaded in header, updated store");
      }
    },
    onError: (error) => {
      // tofix 로그인 에러 발생
      console.log("error 에러 발생 여기 !!!!!! : ", error);
      useMainStore.getState().setTenantsLoading(false);

      ServerErrorCheck('테넌트 리스트 조회', error.message);
    }
  });

  const goLogin = () => {
    logoutFunction();
    router.push('/login');
  }

  // useEffect(() => {

  useEffect(() => {
    if (_sessionKey !== "") {
      // 테넌트 로딩 상태 설정
      const store = useMainStore.getState();

      // 데이터가 이미 로드되었으면 건너뛰기
      // if (store.tenantsLoaded && store.tenants.length > 0) {
      //   console.log("Tenants already loaded, skipping API call");
      //   return;
      // }

      // 로딩 중이면 중복 호출 방지
      if (store.tenantsLoading) {
        console.log("Tenants loading in progress, skipping duplicate call");
        return;
      }

      // 로딩 시작
      store.setTenantsLoading(true);
      // console.log("Starting tenant data fetch from header");

      fetchTenants({
        session_key: _sessionKey,
        tenant_id: _tenantId,
      });
    }
  }, [fetchTenants, _sessionKey, _tenantId]);


  useEffect(() => {
    if (tenants.length > 0 && _sessionKey !== "") {
      // 캠페인 데이터 로딩 상태 확인
      const store = useMainStore.getState();

      // 데이터가 이미 로드되었으면 건너뛰기
      // if (store.campaignsLoaded && store.campaigns.length > 0) {
      //   console.log("Campaigns already loaded, skipping API call");
      //   return;
      // }

      // 로딩 중이면 중복 호출 방지
      if (store.campaignsLoading) {
        // console.log("Ca mpaigns loading in progress, skipping duplicate call");
        return;
      }

      // 로딩 시작
      store.setCampaignsLoading(true);
      // console.log("Starting campaign data fetch from header");

      fetchMain({
        session_key: _sessionKey,
        tenant_id: _tenantId
      });
    }
  }, [tenants]);

  // 캠페인 데이터가 변경될 때마다 로그 추가
  useEffect(() => {
    const { campaigns } = useMainStore.getState();
    // console.log("Campaigns updated in header component:", campaigns);
  }, [useMainStore.getState().campaigns]);

  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      if (tenant_id === 0) {
        setCampaigns(data.result_data);
        //스킬 마스터 조회.
        const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id);
        fetchSkills({ tenant_id_array: tempTenantIdArray });
      } else {
        setCampaigns(data.result_data.filter(data => data.tenant_id === tenant_id));
        //스킬 마스터 조회.
        fetchSkills({ tenant_id_array: [tenant_id] });
      }
      // console.log("Campaign data loaded in header, updated store");
      setShouldFetchCounselors(true);  // 이 시점에 상담사 목록 조회 활성화
    },
    onError: (error) => {
      // 로딩 상태 해제
      useMainStore.getState().setCampaignsLoading(false);
      console.log("Error loading campaign data:", error);
      ServerErrorCheck('캠페인 리스트 조회', error.message);
    }
  });

  // 훅 관리
  const { data: dataForMenusInfoForRoleId, menuList, headerMenuIds, isLoading: isLoadingMenuInfo } =
    useApiForGetAuthorizedMenusInfoForMenuRoleId({
      roleId: menu_role_id || 1, // menu_role_id가 없을 경우 기본값 1
      enabled: !!menu_role_id // menu_role_id가 있을 때만 활성화
    });
  // console.log("dataForMenusInfoForRoleId : ", dataForMenusInfoForRoleId);

  // const { data: counselorListData } = useApiForFetchCounselorList({
  //   credentials: {
  //     // 필요한 credentials 정보
  //     tenantId: tenant_id,
  //     skillId: 0, // Default skill ID or use an appropriate value
  //   },
  //   sessionKey: _sessionKey,
  //   // enabled: shouldFetchCounselors,  // fetchMain 완료 후에만 실행
  // });

  // // console.log('counselorListData at header :', counselorListData);

  // useEffect(() => {
  //   if (counselorListData) {
  //     // Access the correct property structure based on the CounselorAssignListResponse type
  //     setCounselers(counselorListData.result_data || []);
  //   }
  // }, [counselorListData]);

  useEffect(() => {
    if (tenants.length > 0 && _sessionKey !== "") {
      // 스킬 데이터 로딩 상태 확인
      const store = useCampainManagerStore.getState();

      // 데이터가 이미 로드되었으면 건너뛰기
      if (store.skillsLoaded && store.skills.length > 0) {
        // console.log("Skills already loaded, skipping API call");
        return;
      }

      // 로딩 중이면 중복 호출 방지
      if (store.skillsLoading) {
        console.log("Skills loading in progress, skipping duplicate call");
        return;
      }

      // 로딩 시작
      store.setSkillsLoading(true);
      console.log("Starting skills data fetch from header");

      // 테넌트 ID 준비
      // const tenant_id_array = tenant_id === 0 
      //   ? tenants.map(tenant => tenant.tenant_id)
      //   : [tenant_id];

      // // 스킬 데이터 로드
      // fetchSkills({ tenant_id_array });
    }
  }, [tenants, _sessionKey]);

  return (
    <div className="flex flex-col">
      <AuthTimeOutCheck popupRef={popupRef} />
      <div className="header-top h-[28px] flex items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Image
              src="/header-menu/header-logo.svg"
              alt="UPDS"
              width={54}
              height={18}
              priority
            />
          </div>
          <div className="flex items-center space-x-4 text-white text-sm">

            <div className='flex items-center space-x-1'>

              <div className='flex items-center space-x-1'>
                {tenant_id === 0 && (
                  <div>
                    {/* s 글자의 outline button 으로 시스템 관리자임을 알림 shadcn ui button */}
                    <Button variant="outline" className="text-xs px-1 py-0 mr-1 bg-[#56CAD6]/20 text-[#56CAD6] rounded-full">
                      S
                    </Button>
                  </div>
                )}
              </div>


              <Image
                src="/header-menu/top_pic.svg"
                alt="사용자"
                width={14}
                height={14}
                priority
              />
              <span>{userId}</span>
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
        {/* menu_role_id : {menu_role_id} */}
        {/* tentant_id : {_tenantId} */}
        {/* useAlramPopup: {useAlramPopup} */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between header-padding">
            {/* <nav className="flex overflow-x-auto gap-3">
              {menuItems
                // availableHeaderMenuIds에 있는 메뉴만 필터링
                .filter(item => availableHeaderMenuIds?.includes(item.menuId))
                .map((item) => {
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
            </nav> */}

            <nav className="flex overflow-x-auto gap-3">
              {menuItems
                .filter(item =>
                  availableHeaderMenuIds?.includes(item.menuId) ||
                  item.id === 701   // 15번은 예외로 무조건 출력
                )
                .map((item) => {
                  const count = getTabCountById(item.id);
                  const isActive = isActiveTab(item.id);
                  const isOpened = isTabOpened(item.id);

                  return (
                    <div key={`menu-${item.id}`} className="menu-item">
                      <CommonButton
                        variant={
                          isActive
                            ? 'menuActive'
                            : isOpened
                              ? 'menuOpened'
                              : 'menu'
                        }
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
                          <span
                            className={`text-xs whitespace-nowrap ${isActive ? 'text-white' : 'text-[#333]'
                              }`}
                          >
                            {item.title}
                          </span>
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

            </div>
          </div>
        </div>
      </header>
      <CustomAlert
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onClose={() => {
          alertState.onClose()
        }}
        onCancel={() => setAlertState((prev) => ({ ...prev, isOpen: false }))} />
        <GlobalErrorAlert />
    </div>
  );
}