// src/app/main/page.tsx
"use client";

import { useEffect, useState } from "react";
import useStore from '@/features/auth/hooks/store';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useMainStore } from '@/features/store';
import TabMenuForMainPage from "./comp/TabMenuForMainPage";
import TabContent from "./comp/TabContent";
import Cookies from 'js-cookie';

interface MainFormData {
  tenant_id: number;
  session_key: string;
}

export default function MainPage() {
  const { tenant_id, session_key } = useStore.getState();
  const { setCampaigns, setTotalCount } = useMainStore();
  const [tenantId, setTenantId] = useState(-1);

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
    setTenantId(Number(Cookies.get('tenant_id')));
  }, []);

  return (
    <div className="flex flex-col">
      <TabMenuForMainPage />
      <TabContent />
    </div>
  );
}