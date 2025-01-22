"use client";

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useMainStore } from '@/store';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useApiForTenants } from '@/features/auth/hooks/useApiForTenants';

import CustomAlert from '@/components/shared/layout/CustomAlert';
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { useApiForSkills } from '@/features/campaignManager/hooks/useApiForSkills';
import useApiForFetchCounselorList from '@/features/campaignManager/hooks/useApiForFetchCounselorList';

const errorMessage = {
  isOpen: false,
  message: '',
  title: '로그인',
  type: '0',
};

interface SidebarProps {
  isMenuOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isMenuOpen, toggleSidebar }: SidebarProps) {
  const router = useRouter();
  const [width, setWidth] = useState(330);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [alertState, setAlertState] = useState(errorMessage);
  const [expandedTenants, setExpandedTenants] = useState<number[]>([]);

  const _sessionKey = Cookies.get('session_key') || '';
  const _tenantId = Number(Cookies.get('tenant_id'));

  const {
    setCampaigns,
    setTenants,
    setSelectedCampaign,
    setCounselers,
    campaigns,
    tenants,
    counselers
  } = useMainStore();

  const { mutate: fetchCounselorList } = useApiForFetchCounselorList({
    onSuccess: (data) => {
      // console.log('Counselors API response:', data);
      setCounselers(data.counselorList);
    }
  });

  // API hooks
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      console.log('Main API response:', data);
      setCampaigns(data.result_data);

      fetchCounselorList({
        session_key: _sessionKey,
        tenant_id: 1,
        roleId:6
      });

    }
  });

  const { mutate: fetchSkills } = useApiForSkills({
    onSuccess: (data) => {
      console.log('Skills API response:', data);
      // setSkills(data.result_data);
      fetchMain({
        session_key: _sessionKey,
        tenant_id: _tenantId
      });
    }
  });


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
        const tempTenantIdArray = data.result_data.map(tenant => Number(tenant.tenant_id));
        fetchSkills({
          tenant_id_array: tempTenantIdArray
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      const newWidth = e.clientX;
      if (newWidth >= 200 && newWidth <= 600) {
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const handleCampaignClick = (campaign: MainDataResponse) => {
    console.log('Campaign clicked:', campaign);
    setSelectedCampaign(campaign);
  };

  const toggleTenant = (tenantId: number) => {
    setExpandedTenants((prev) =>
      prev.includes(tenantId)
        ? prev.filter((id) => id !== tenantId)
        : [...prev, tenantId]
    );
  };

  const renderContent = () => {
    if (!campaigns || campaigns.length === 0) {
      return (
        <div className="px-4 py-8 text-center text-gray-500">
          <p>등록된 캠페인이 없습니다.</p>
          <p className="text-sm mt-2">캠페인을 추가해주세요.</p>
        </div>
      );
    }

    const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (e.target instanceof HTMLElement) {
        const campaignId = e.target.id.split('||')[0];
        const tenantId = e.target.id.split('||')[1];
      }
    };

    // campaigns, tenants 둘다 각각 로그로 확인
    console.log('campaigns:', campaigns);
    console.log('tenants:', tenants);
    console.log('counselers:', counselers);

    return (
      <div className="w-full">

      <div className="p-2 cursor-pointer flex items-center">
        <Image
          src="/sidebar-menu/company_icon.svg"
          alt="Company"
          width={16}
          height={16}
          className="object-contain mr-2"
        />
        <span className="text-sm font-semibold text-gray-700">NEXUS</span>
      </div>

        {_tenantId === 0 ? (
          tenants.map((tenant) => (
            <div key={tenant.tenant_id} className="mb-1 ml-2">
              <div
                className="p-2  cursor-pointer flex items-center justify-between"
                onClick={() => toggleTenant(tenant.tenant_id)}
              >
                <div className="flex items-center">

                <Image
                  src={`/sidebar-menu/${expandedTenants.includes(tenant.tenant_id) ? 'arrow_minus' : 'arrow_plus'}.svg`}
                  alt="Toggle"
                  width={12}
                  height={12}
                  className="object-contain mx-1"
                />

                  <Image
                    src="/sidebar-menu/tree_folder.svg"
                    alt="Folder"
                    width={16}
                    height={16}
                    className="object-contain mr-2"
                  />
                  <span className="text-sm font-semibold text-gray-700">[ {tenant.tenant_id} ] {tenant.tenant_name}</span>
                </div>
                
              </div>
              {expandedTenants.includes(tenant.tenant_id) && (
                <div className="pl-7">
                  {campaigns
                    .filter((campaign) => campaign.tenant_id === tenant.tenant_id)
                    .map((campaign) => (
                      <div
                        key={campaign.campaign_id}
                        onClick={() => handleCampaignClick(campaign)}
                        className="p-1 hover:bg-gray-100 cursor-pointer flex items-center"
                      >
                       <Image
                          src="/sidebar-menu/tree_folder.svg"
                          alt="Campaign"
                          width={14}
                          height={14}
                          className="object-contain mr-2"
                        />
                        <span className="text-sm text-gray-600">{campaign.campaign_name}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))
        ) : (
          tenants
            .filter((tenant) => tenant.tenant_id === _tenantId)
            .map((tenant) => (
              <div key={tenant.tenant_id} className="mb-1">
                <div
                  className="p-2 cursor-pointer flex items-center justify-between"
                  onClick={() => toggleTenant(tenant.tenant_id)}
                >
                  <div className="flex items-center">
                  <Image
                      src="/sidebar-menu/folder.svg"
                      alt="Folder"
                      width={16}
                      height={16}
                      className="object-contain mr-2"
                  />
                   <span className="text-sm font-semibold text-gray-700">[ {tenant.tenant_id} ] {tenant.tenant_name}</span>
                  </div>
                    
                  <Image
                    src={`/sidebar-menu/${expandedTenants.includes(tenant.tenant_id) ? 'opened' : 'closed'}.svg`}
                    alt="Toggle"
                    width={12}
                    height={12}
                    className="object-contain"
                  />
                </div>
                {expandedTenants.includes(tenant.tenant_id) && (
                  <div className="pl-7">
                    {campaigns
                      .filter((campaign) => campaign.tenant_id === tenant.tenant_id)
                      .map((campaign) => (
                        <div
                          key={campaign.campaign_id}
                          onClick={() => handleCampaignClick(campaign)}
                          className="p-1 hover:bg-gray-100 cursor-pointer flex items-center"
                        >
                          <Image
                            src="/sidebar-menu/tree_folder.svg"
                            alt="Campaign"
                            width={14}
                            height={14}
                            className="object-contain mr-2"
                          />
                          <span className="text-sm text-gray-600">{campaign.campaign_name}</span>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))
        )}
      </div>
    );
  };

  return (
    <div className="flex">
      <aside
        ref={sidebarRef}
        style={{ width: isMenuOpen ? `${width}px` : '0' }}
        className="transition-all duration-300 ease-in-out bg-white border-r shadow-sm flex flex-col min-h-screen relative"
      >
        <nav className="h-full relative">
          <button
            onClick={toggleSidebar}
            className="toggle-btn transition-transform flex items-center justify-center"
          >
            <Image
              src="/sidebar-menu/sidebar-icon.svg"
              alt="Sidebar Toggle"
              width={24}
              height={24}
              className="object-contain"
            />
          </button>
          <div className="py-4">
            {isMenuOpen && <h2 className="px-4 text-lg font-semibold mb-4">캠페인 목록</h2>}
            {isMenuOpen && renderContent()}
          </div>
        </nav>
        <CustomAlert
          message={alertState.message}
          title={alertState.title}
          type={alertState.type}
          isOpen={alertState.isOpen}
          onClose={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
        />
      </aside>
      <div
        className="w-1 cursor-col-resize hover:bg-gray-300 active:bg-gray-400"
        onMouseDown={() => setIsResizing(true)}
      />
    </div>
  );
}