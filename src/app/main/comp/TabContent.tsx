// C:\Users\terec\fe_pdsw\src\app\main\comp\TabContent.tsx
"use client";

import React from 'react';
import { useTabStore } from '@/store/tabStore';
import PreferencesBoard from './preferences';
import SystemPreferences from './SystemPreferences';
import CampaignMonitorDashbord from './CampaignMonitorDashbord';
import CampaignManager from './CampaignManager';
import OutboundCallProgressPanel from './OutboundCallProgressPanel';
import OperationSetting from './operation';

const TabContent = () => {
  const { activeTabId } = useTabStore();

  const renderContent = () => {
    switch (activeTabId) {
      case 1:
        return (
          <div className="space-y-0">
            <div>CampaignList 컴포넌트</div>
            <div>CampaignDetail 컴포넌트</div>
          </div>
        );
      case 2:
        return <div className="p-2"><CampaignManager /></div>;
      case 3:
        return <div className="p-2">통합모니터 컨텐츠</div>;
      case 4:
        return <div className="p-2">
          <CampaignMonitorDashbord />
        </div>;
      case 5:
        return <div className="p-2">
          <OutboundCallProgressPanel />
        </div>;
      case 6:
        return <div className="p-2">채널 모니터 컨텐츠</div>;
      case 7:
        return <div className="p-2">리스트 매니저 컨텐츠</div>;
      case 8:
        return <div className="p-2">예약콜 제한 설정 컨텐츠</div>;
      case 9:
        return <div className="p-2">분배호수 제한 설정 컨텐츠</div>;
      case 10:
        return <div className="p-2"><SystemPreferences /></div>;
      case 11:
        return <div className="p-2"><OperationSetting /></div>;
      case 12:
        return <div className="p-2"><PreferencesBoard /></div>;
      default:
        return (
          <div className="flex items-center justify-center min-h-[calc(100vh-23rem)] text-gray-500">
            탭을 선택해주세요
          </div>
        );
    }
  };

  return (
    <div className="bg-white min-h-[calc(100vh-22.5rem)]">
      {renderContent()}
    </div>
  );
};

export default TabContent;