"use client";

import React from 'react';
import { useTabStore } from '@/store/tabStore';
import PreferencesBoard from './preferences';
import SystemPreferences from './SystemPreferences';
import CampaignMonitorDashbord from './CampaignMonitorDashbord';
import OutboundCallProgressPanel from './OutboundCallProgressPanel';
import OperationBoard from './operation';
import CampaignManager from './CampaignManager';
import CampaignUpdatePanel from './CampaignUpdatePanel';
import CampaignGroupManager from './CampaignGroupManager';
import NewCampaignManager from './NewCampaignManager';
import { SkillAssignmentTab } from '@/features/campaignManager/components/treeMenus/SkillAssignmentTab';

const TabContent = () => {
  const { activeTabId, openedTabs, activeTabKey } = useTabStore();

  const renderContent = () => {
    console.log("activeTabId: ", activeTabId);
    switch (activeTabId) {
      case 1:
        return <div className="p-2"><CampaignGroupManager /></div>;
      case 2:
        return <div className="p-2"><CampaignManager /></div>;
      case 3:
        return <div className="p-2">통합모니터 컨텐츠</div>;
      case 4:
        return <div className="p-2"><CampaignMonitorDashbord /></div>;
      case 5:
        return <div className="p-2"><OutboundCallProgressPanel /></div>;
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
        return <div className="p-2"><OperationBoard /></div>;
      case 12:
        return <div className="p-2"><PreferencesBoard /></div>;
      case 13:
        return <div className="p-2"><NewCampaignManager /></div>;
      case 100:  // 스킬 할당 탭
        const activeTab = openedTabs.find(tab => 
          tab.id === activeTabId && tab.uniqueKey === activeTabKey
        );
        if (activeTab && 'counselorId' in activeTab && typeof activeTab.counselorId === 'string') {
          return (
            // <div className="p-2">
            //   <SkillAssignmentTab counselorId={activeTab.counselorId} />
            // </div>
              <div className="py-3 max-w-2xl ">
                <SkillAssignmentTab counselorId={activeTab.counselorId} />
              </div>            
          );
        }
        return <div className="p-2">잘못된 스킬 할당 탭입니다.</div>;

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