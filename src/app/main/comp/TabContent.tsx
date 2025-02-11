"use client";

import React from "react";
import { useTabStore } from "@/store/tabStore";
import PreferencesBoard from "./preferences";
import SystemPreferences from "./SystemPreferences";
import CampaignMonitorDashbord from "./CampaignMonitorDashbord";
import OutboundCallProgressPanel from "./OutboundCallProgressPanel";
import ChannelMonitor from "./ChannelMonitor";
import ListManager from "./ListManager";
import OperationBoard from "./operation";
import CampaignManager from "./CampaignManager";
import CampaignUpdatePanel from "./CampaignUpdatePanel";
import CampaignGroupManager from "./CampaignGroupManager";
import NewCampaignManager from "./NewCampaignManager";
import RebroadcastSettingsPanel from "./RebroadcastSettingsPanel";
import { SkillAssignmentTab } from "@/features/campaignManager/components/treeMenus/SkillAssignmentTab";

const TabContent = () => {
  const { rows, activeTabId, activeTabKey, openedTabs } = useTabStore();

  // 첫 번째 행을 가져오기
  const firstRow = rows[0];
  if (!firstRow) return null;

  // 현재 섹션 정보 가져오기
  const sections = firstRow.sections;

  // 첫 번째 섹션의 활성화된 탭 찾기
  const activeSection = sections[0];
  const activeTab = activeSection?.tabs.find(tab => tab.id === activeTabId && tab.uniqueKey === activeTabKey);

  const renderContent = (tabId: number | null) => {
    switch (tabId) {
      case 1:
        return <CampaignGroupManager />;
      case 2:
        return <CampaignManager />;
      case 3:
        return <>통합모니터 컨텐츠</>;
      case 4:
        return <CampaignMonitorDashbord />;
      case 5:
        return <OutboundCallProgressPanel />;
      case 6:
        return <ChannelMonitor />;
      case 7:
        return <ListManager />;
      case 8:
        return <>예약콜 제한 설정 컨텐츠</>;
      case 9:
        return <>분배호수 제한 설정 컨텐츠</>;
      case 10:
        return <SystemPreferences />;
      case 11:
        return <OperationBoard />;
      case 12:
        return <PreferencesBoard />;
      case 13:
        return <NewCampaignManager />;
      case 20:
        return <RebroadcastSettingsPanel />;
      case 100:
        const activeSkillTab = openedTabs.find(tab => 
          tab.id === activeTabId && tab.uniqueKey === activeTabKey
        );
        if (activeSkillTab && 'counselorId' in activeSkillTab && typeof activeSkillTab.counselorId === 'string') {
          return <SkillAssignmentTab counselorId={activeSkillTab.counselorId} />;
        }
        return <>잘못된 스킬 할당 탭입니다.</>;
      default:
        return (
          <div className="flex items-center justify-center min-h-[calc(100vh-23rem)] text-gray-500">
            탭을 선택해주세요
          </div>
        );
    }
  };

  return (
    <div className="bg-white h-full w-full overflow-hidden">
      {/* 하단에 X축 스크롤을 적용하는 컨테이너 */}
      <div className="w-full h-full overflow-x-auto">
        {/* 내부 콘텐츠를 가로로 정렬 */}
        <div className="flex w-[200%] h-full">
          {/* 왼쪽 컨텐츠 */}
          <div className="w-1/2 h-full p-2 border-r overflow-hidden">
            {renderContent(activeTab?.id ?? null)}
          </div>

          {/* 오른쪽 컨텐츠 - 두 번째 섹션이 있을 때만 표시 */}
          {sections.length > 1 ? (
            <div className="w-1/2 h-full p-2 bg-gray-100 flex items-center justify-center text-gray-400">
              빈 공간
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TabContent;
