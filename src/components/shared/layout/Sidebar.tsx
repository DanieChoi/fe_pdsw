"use client";

import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useMainStore } from '@/store';
import { useEffect, useState } from 'react';
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { useApiForTenants } from '@/features/auth/hooks/useApiForTenants';
import Cookies from 'js-cookie';

export default function Sidebar({ isMenuOpen }: { isMenuOpen: boolean }) {
  // const [tenantId, setTenantId] = useState(Cookies.get('tenant_id'));
  const tenantId = Number(Cookies.get('tenant_id'));
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
    },
  });
  
  const { mutate: fetchTenants } = useApiForTenants({
    onSuccess: (data) => {
      setTenants(data.result_data);
    },
  });

  const { setCampaigns, setTenants, setSelectedCampaign, campaigns, tenants } = useMainStore();

  useEffect(() => {
    fetchMain({
      session_key: localStorage.getItem('sessionKey') || '',
      tenant_id: Number(localStorage.getItem('tenantId')) || 0,
    });
  }, [fetchMain]);

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
                  <div className="text-sm text-gray-500 truncate">
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