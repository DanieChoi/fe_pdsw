"use client";

import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useMainStore } from '@/store';
import { useEffect, useState } from 'react';
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { useApiForTenants } from '@/features/auth/hooks/useApiForTenants';
import Cookies from 'js-cookie';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import { useRouter } from 'next/navigation';

export default function Sidebar({ isMenuOpen }: { isMenuOpen: boolean }) {
  // const [tenantId, setTenantId] = useState(Cookies.get('tenant_id'));
  const tenantId = Number(Cookies.get('tenant_id'));
  const router = useRouter();
  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    title: '로그인',
    type: '0',
  });
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
    }
  });
  
  const { mutate: fetchTenants } = useApiForTenants({
    onSuccess: (data) => {
      setTenants(data.result_data);
      fetchMain({
        session_key: localStorage.getItem('sessionKey') || '',
        tenant_id: Number(localStorage.getItem('tenantId')) || 0,
      });
    },
    onError: (error) => {
      if( error.message.split('||')[0] === '5' ){
        setAlertState({
          isOpen: true,
          message: '로그인 정보가 없습니다.',
          title: '로그인',
          type: '0',
        });
        router.push('/login');
      }
    }
  });

  const { setCampaigns, setTenants, setSelectedCampaign, campaigns, tenants } = useMainStore();

  // useEffect(() => {
  //   fetchMain({
  //     session_key: localStorage.getItem('sessionKey') || '',
  //     tenant_id: Number(localStorage.getItem('tenantId')) || 0,
  //   });
  // }, [fetchMain]);

  useEffect(() => {
    fetchTenants({
      session_key: localStorage.getItem('sessionKey') || '',
      tenant_id: Number(localStorage.getItem('tenantId')) || 0,
    });
  }, [fetchTenants]);

  const handleCampaignClick = (campaign: MainDataResponse) => {
    setSelectedCampaign(campaign);
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
      if( e.target instanceof HTMLElement){
        const campaignId = e.target.id.split('||')[0];
        const tenantId = e.target.id.split('||')[1];
        console.log(campaignId);
        console.log(tenantId);
      }
    }

    return (
      <div className="space-y-1">
        { tenantId === 0 ? 
        tenants.map((tenant) => (
          <div key={tenant.tenant_id}>
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 transition-colors"
            >
              <div className="font-medium">[{tenant.tenant_id}] {tenant.tenant_name}</div>
            </button>
            
            {campaigns
              .filter((campaign) => campaign.tenant_id === tenant.tenant_id) 
              .map((campaign) => (
                <button
                  key={campaign.campaign_id}
                  onClick={() => handleCampaignClick(campaign)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 transition-colors"
                >
                  <div className="font-medium">{campaign.campaign_name}</div>
                  <div id={campaign.campaign_id+'||'+campaign.tenant_id} className="text-sm text-gray-500 truncate" onContextMenu={handleRightClick} > 
                    {campaign.campaign_desc}
                  </div>
                </button>
              ))}
          </div>
        ))
        :
        tenants
        .filter((tenant) => tenant.tenant_id === tenantId) 
        .map((tenant) => (
          <div key={tenant.tenant_id}>
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 transition-colors"
            >
              <div className="font-medium">[{tenant.tenant_id}] {tenant.tenant_name}</div>
            </button>
            
            {campaigns
              .filter((campaign) => campaign.tenant_id === tenant.tenant_id) 
              .map((campaign) => (
                <button
                  key={campaign.campaign_id}
                  onClick={() => handleCampaignClick(campaign)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 transition-colors"
                >
                  <div className="font-medium">{campaign.campaign_name}</div>
                  <div className="text-sm text-gray-500 truncate">
                    {campaign.campaign_desc}
                  </div>
                </button>
              ))}
          </div>
        ))
        }
        <CustomAlert
          message={alertState.message}
          title={alertState.title}
          type={alertState.type}
          isOpen={alertState.isOpen}
          onClose={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
        />
      </div>
    );
  };

  return (
    <aside 
      className={`${
        isMenuOpen ? 'w-64' : 'w-0'
      } transition-all duration-300 ease-in-out overflow-hidden`}
    >
      <nav className="h-full bg-white border-r shadow-sm">
        <div className="py-4">
          <h2 className="px-4 text-lg font-semibold mb-4">캠페인 목록</h2>
          {renderContent()}
        </div>
      </nav>
    </aside>
  );
}