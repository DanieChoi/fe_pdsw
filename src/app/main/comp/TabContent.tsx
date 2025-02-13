// src/app/main/comp/TabContent.tsx
"use client";

import React from "react";
import { useTabStore } from "@/store/tabStore";

// ─────────────────────────────────────────────────────────────────────────
// 원래 코드에서 사용하던 실제 컴포넌트들 임포트
// ─────────────────────────────────────────────────────────────────────────
import PreferencesBoard from "./preferences";
import SystemPreferences from "./SystemPreferences";
import Campaignprogress from "./Campaignprogress";
import CampaignMonitorDashbord from "./CampaignMonitorDashbord";
import OutboundCallProgressPanel from "./OutboundCallProgressPanel";
import StatusCampaign from "./StatusCampaign";
import ChannelMonitor from "./ChannelMonitor";
import ListManager from "./ListManager";
import OperationBoard from "./operation";
import CampaignUpdatePanel from "./CampaignUpdatePanel";
import CampaignGroupManager from "./CampaignGroupManager";
import NewCampaignManager from "./NewCampaignManager";
import RebroadcastSettingsPanel from "./RebroadcastSettingsPanel";
import CampaignManager from "./CampaignManager";
import AgentStatusMonitoring from "./AgentStatusMonitoring";

// 탭 ID별 실제 화면을 매핑하는 함수
const renderContent = (tabId: number | null) => {
  switch (tabId) {
    case 1:
      return <CampaignGroupManager />;
    case 2:
      return <CampaignManager />;
    case 3:
      return <>통합모니터 컨텐츠</>;
    case 4:
      return <Campaignprogress />; //총진행상황 상단 탭
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
    case 14:
      return <StatusCampaign />;
    case 20:
      return <RebroadcastSettingsPanel />; //재발신
    case 21:
        return <CampaignMonitorDashbord />;//오른쪽버튼 캠페인총진행상황
    case 22:
      return <AgentStatusMonitoring />;//상담원상태모니터링
    case 100:
      return <>잘못된 스킬 할당 탭입니다.</>;

    default:
      return (
        <div className="flex items-center justify-center h-full text-gray-500">
          알 수 없는 탭 ID입니다. (ID: {tabId})
        </div>
      );
  }
};

const TabContent = () => {
  const { rows, activeTabId, activeTabKey, setActiveTab } = useTabStore();

  return (
    <div className="flex flex-col w-full h-full overflow-auto bg-white">
      {rows.map((row) => (
        <div
          key={row.id}
          className="flex w-full flex-1 border-b last:border-b-0"
        >
          {/* 각 Row 안에서 섹션들을 가로로 배치 */}
          {row.sections.map((section) => {
            const activeKey = section.activeTabKey;
            const activeTab = section.tabs.find((t) => t.uniqueKey === activeKey);

            // 전역 activeTabId와 activeTabKey가 있는 경우 우선 반영
            const isActiveGlobal = activeTabId === activeTab?.id && activeTabKey === activeTab?.uniqueKey;
            const tabIdToRender = isActiveGlobal ? activeTabId : activeTab?.id ?? null;

            return (
              <div
                key={section.id}
                className="p-2 overflow-auto"
                style={{ width: `${section.width}%` }}
                onClick={() => {
                  if (activeTab) {
                    setActiveTab(activeTab.id, activeTab.uniqueKey);
                  }
                }}
              >
                {renderContent(tabIdToRender)}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TabContent;
