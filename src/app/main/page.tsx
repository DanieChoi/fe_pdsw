// src/app/main/page.tsx
"use client";

import { useEffect } from "react";
import useStore from '@/features/auth/hooks/store';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useMainStore } from '@/features/store';
import CampaignList from "./comp/CampaignList";
import CampaignDetail from "./comp/CampaignDetail";

interface MainFormData {
  tenant_id: number;
  session_key: string;
}

export default function MainPage() {
  const { tenant_id, session_key } = useStore.getState();
  const { setCampaigns, setTotalCount } = useMainStore();

  const mainData: MainFormData = {
    tenant_id,
    session_key
  };

  const { mutate: main } = useApiForMain({
    onSuccess: (response) => {
      console.log('API Response:', {
        code: response.result_code,
        message: response.result_msg,
        data: response.result_data
      });
      setCampaigns(response.result_data);
      setTotalCount(response.total_count);
    },
    onError: (error) => {
      console.error('에러 발생:', error);
    }
  });

  useEffect(() => {
    if (session_key !== '') {
      main(mainData);
    }
  }, [tenant_id, session_key]);

  return (
    <div className="space-y-6">
      {/* 상단 필터/검색 영역 */}
      <div className="flex space-x-4 items-center">
        <select className="p-2 border rounded">
          <option>전체</option>
        </select>
        <input 
          type="text" 
          placeholder="캠페인명" 
          className="p-2 border rounded"
        />
      </div>

      <CampaignList />
      <CampaignDetail />
    </div>
  );
}