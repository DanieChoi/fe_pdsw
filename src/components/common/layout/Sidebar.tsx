
"use client";

// components/common/layout/Sidebar.tsx
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useMainStore } from '@/features/store';
import { useEffect } from 'react';
import { MainDataResponse } from '@/features/auth/types/mainIndex';

export default function Sidebar({ isMenuOpen }: { isMenuOpen: boolean }) {
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
    },
  });
  
  const { setCampaigns, setSelectedCampaign, campaigns } = useMainStore();

  useEffect(() => {
    fetchMain({
      session_key: localStorage.getItem('sessionKey') || '',
      tenant_id: Number(localStorage.getItem('tenantId')) || 0,
    });
  }, [fetchMain]);

  const handleCampaignClick = (campaign: MainDataResponse) => {
    setSelectedCampaign(campaign);
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
          <div className="space-y-1">
            {campaigns.map((campaign) => (
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
        </div>
      </nav>
    </aside>
  );
}