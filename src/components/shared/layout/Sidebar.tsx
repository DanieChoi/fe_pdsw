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
import { useApiForSchedules } from '@/features/campaignManager/hooks/useApiForSchedules';
import { useApiForCallingNumber } from '@/features/campaignManager/hooks/useApiForCallingNumber';
import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';
import { useApiForPhoneDescription } from '@/features/campaignManager/hooks/useApiForPhoneDescription';
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

  // 테넌트/캠페인 펼치기 관련 상태
  const [expandedTenants, setExpandedTenants] = useState<number[]>([]);
  // ↓ 캠페인을 펼칠 때 사용될 상태 (상담원 목록 접기/펼치기 용)
  const [expandedCampaigns, setExpandedCampaigns] = useState<number[]>([]);

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
      // 상담원 목록 세팅
      setCounselers(data.counselorList);
    }
  });

  // 메인 API (캠페인 목록)
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      console.log('Main API response:', data);
      setCampaigns(data.result_data);

      // 캠페인 받아온 뒤 상담원 목록도 가져옴 (tenant_id=1 로 예시)
      fetchCounselorList({
        session_key: _sessionKey,
        tenant_id: 1,
        roleId: 6
      });
    }
  });

  // 스킬 API
  const { mutate: fetchSkills } = useApiForSkills({
    onSuccess: (data) => {
      console.log('Skills API response:', data);
      // 스킬 받아온 후 → 메인 API
      fetchMain({
        session_key: _sessionKey,
        tenant_id: _tenantId
      });
    }
  });

  // 테넌트 API
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
        // 테넌트들 받아온 후 → 스킬 API
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

  // 마운트 시 테넌트 먼저 가져옴
  useEffect(() => {
    console.log('Fetching tenants with:', { _sessionKey, _tenantId });
    fetchTenants({
      session_key: _sessionKey,
      tenant_id: _tenantId,
    });
  }, [fetchTenants, _sessionKey, _tenantId]);

  // 리사이즈 로직
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

  // 캠페인을 클릭했을 때 (기존)
  const handleCampaignClick = (campaign: MainDataResponse) => {
    console.log('Campaign clicked:', campaign);
    setSelectedCampaign(campaign);
  };

  // 테넌트 열고 닫기
  const toggleTenant = (tenantId: number) => {
    setExpandedTenants((prev) =>
      prev.includes(tenantId)
        ? prev.filter((id) => id !== tenantId)
        : [...prev, tenantId]
    );
  };

  // ↓ 캠페인 열고 닫기 (상담원 정보 보여줄지 여부)
  const toggleCampaign = (campaignId: number) => {
    setExpandedCampaigns((prev) =>
      prev.includes(campaignId)
        ? prev.filter((id) => id !== campaignId)
        : [...prev, campaignId]
    );
  };

  // 실제 사이드바 안의 내용 렌더링
  const renderContent = () => {
    if (!campaigns || campaigns.length === 0) {
      return (
        <div className="px-4 py-8 text-center text-gray-500">
          <p>등록된 캠페인이 없습니다.</p>
          <p className="text-sm mt-2">캠페인을 추가해주세요.</p>
        </div>
      );
    }

    console.log('campaigns:', campaigns);
    console.log('tenants:', tenants);
    console.log('counselers:', counselers);

    return (
      <div className="w-full">
        {/* 상단 회사 로고/명 */}
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

        {/* 테넌트 별로 캠페인 출력 */}
        {_tenantId === 0 ? (
          tenants.map((tenant) => (
            <div key={tenant.tenant_id} className="mb-1 ml-2">
              <div
                className="p-2 cursor-pointer flex items-center"
                onClick={() => toggleTenant(tenant.tenant_id)}
              >
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
                <span className="text-sm font-semibold text-gray-700">
                  [ {tenant.tenant_id} ] {tenant.tenant_name}
                </span>
              </div>

              {expandedTenants.includes(tenant.tenant_id) && (
                <div className="pl-7">
                  {campaigns
                    .filter((campaign) => campaign.tenant_id === tenant.tenant_id)
                    .map((campaign) => (
                      <div key={campaign.campaign_id} className="mb-1">
                        {/* 캠페인 클릭 시 handleCampaignClick + 캠페인 펼치기 */}
                        <div
                          onClick={() => {
                            handleCampaignClick(campaign);
                            toggleCampaign(campaign.campaign_id);
                          }}
                          className="p-1 hover:bg-gray-100 cursor-pointer flex items-center"
                        >
                          <Image
                            src={`/sidebar-menu/${
                              expandedCampaigns.includes(campaign.campaign_id) ? 'arrow_minus' : 'arrow_plus'
                            }.svg`}
                            alt="ToggleCampaign"
                            width={12}
                            height={12}
                            className="object-contain mr-1"
                          />
                          <Image
                            src="/sidebar-menu/tree_folder.svg"
                            alt="Campaign"
                            width={14}
                            height={14}
                            className="object-contain mr-2"
                          />
                          <span className="text-sm text-gray-600">{campaign.campaign_name}</span>
                        </div>

                        {/* 여기에서 캠페인을 펼친 상태라면 → 해당 캠페인의 상담원 목록 표시 */}
                        {expandedCampaigns.includes(campaign.campaign_id) && (
                          <div className="pl-7">
                            {/* tenantId가 campaign.tenant_id 와 일치하는 상담원들만 표시 */}
                            {counselers
                              .filter((c) => Number(c.tenantId) === campaign.tenant_id)
                              .map((c) => (
                                <div key={c.counselorId} className="p-1 flex items-center">
                                  <Image
                                    src="/sidebar-menu/tree_play.svg"
                                    alt="Counselor"
                                    width={12}
                                    height={12}
                                    className="object-contain mr-2"
                                  />
                                  <span className="text-xs text-gray-500">
                                    {c.counselorId} - {c.counselorname}
                                  </span>
                                </div>
                              ))}

                            {/* 만약 해당 테넌트에 상담원이 없으면... */}
                            {counselers.filter((c) => Number(c.tenantId) === campaign.tenant_id).length === 0 && (
                              <div className="p-1 text-xs text-gray-400">등록된 상담원이 없습니다.</div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))
        ) : (
          // 특정 테넌트(tenant_id)를 이미 쿠키 등에 저장해둔 경우
          tenants
            .filter((tenant) => tenant.tenant_id === _tenantId)
            .map((tenant) => (
              <div key={tenant.tenant_id} className="mb-1 ml-2">
                <div
                  className="p-2 cursor-pointer flex items-center"
                  onClick={() => toggleTenant(tenant.tenant_id)}
                >
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
                  <span className="text-sm font-semibold text-gray-700">
                    [ {tenant.tenant_id} ] {tenant.tenant_name}
                  </span>
                </div>

                {expandedTenants.includes(tenant.tenant_id) && (
                  <div className="pl-7">
                    {campaigns
                      .filter((campaign) => campaign.tenant_id === tenant.tenant_id)
                      .map((campaign) => (
                        <div key={campaign.campaign_id} className="mb-1">
                          <div
                            onClick={() => {
                              handleCampaignClick(campaign);
                              toggleCampaign(campaign.campaign_id);
                            }}
                            className="p-1 hover:bg-gray-100 cursor-pointer flex items-center"
                          >
                            <Image
                              src={`/sidebar-menu/${
                                expandedCampaigns.includes(campaign.campaign_id) ? 'arrow_minus' : 'arrow_plus'
                              }.svg`}
                              alt="ToggleCampaign"
                              width={12}
                              height={12}
                              className="object-contain mr-1"
                            />
                            <Image
                              src="/sidebar-menu/tree_folder.svg"
                              alt="Campaign"
                              width={14}
                              height={14}
                              className="object-contain mr-2"
                            />
                            <span className="text-sm text-gray-600">{campaign.campaign_name}</span>
                          </div>

                          {expandedCampaigns.includes(campaign.campaign_id) && (
                            <div className="pl-7">
                              {counselers
                                .filter((c) => Number(c.tenantId) === campaign.tenant_id)
                                .map((c) => (
                                  <div key={c.counselorId} className="p-1 flex items-center">
                                    <Image
                                      src="/sidebar-menu/tree_play.svg"
                                      alt="Counselor"
                                      width={12}
                                      height={12}
                                      className="object-contain mr-2"
                                    />
                                    <span className="text-xs text-gray-500">
                                      {c.counselorId} - {c.counselorname}
                                    </span>
                                  </div>
                                ))}

                              {counselers.filter((c) => Number(c.tenantId) === campaign.tenant_id).length === 0 && (
                                <div className="p-1 text-xs text-gray-400">등록된 상담원이 없습니다.</div>
                              )}
                            </div>
                          )}
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
      {/* 사이드바 영역 */}
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
      {/* 리사이저 (옆으로 드래그) */}
      <div
        className="w-1 cursor-col-resize hover:bg-gray-300 active:bg-gray-400"
        onMouseDown={() => setIsResizing(true)}
      />
    </div>
  );
}
