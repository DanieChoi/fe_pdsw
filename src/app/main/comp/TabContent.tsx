// src/app/main/comp/TabContent.tsx
"use client";

import React from "react";
import { useTabStore } from "@/store/tabStore";

// ─────────────────────────────────────────────────────────────────────────
// 원래 코드에서 사용하던 실제 컴포넌트들 임포트
// ─────────────────────────────────────────────────────────────────────────
import PreferencesBoard from "./preferences";
import SystemPreferences from "./SystemPreferences";
import CampaignMonitorDashbord from "./CampaignMonitorDashbord";
import OutboundCallProgressPanel from "./OutboundCallProgressPanel";
import ChannelMonitor from "./ChannelMonitor";
import ListManager from "./ListManager";
import OperationBoard from "./operation";
import CampaignManager from "./CampaignManager";
import CampaignUpdatePanel from "./CampaignUpdatePanel";         // 필요하다면
import CampaignGroupManager from "./CampaignGroupManager";
import NewCampaignManager from "./NewCampaignManager";
import RebroadcastSettingsPanel from "./RebroadcastSettingsPanel";
// import { SkillAssignmentTab } from "@/features/campaignManager/components/treeMenus/SkillAssignmentTab"; 
// 필요하면 추가

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
    // case 100:
    //   return <SkillAssignmentTab />;
    case 100:
      return <>잘못된 스킬 할당 탭입니다.</>;

    default:
      // 탭 ID가 null이면 '빈 공간', 그 외엔 '알 수 없는 탭'
      if (tabId === null) {
        return (
          <div className="flex items-center justify-center h-full text-gray-400">
            빈 공간
          </div>
        );
      }
      return (
        <div className="flex items-center justify-center h-full text-gray-500">
          알 수 없는 탭 ID입니다. (ID: {tabId})
        </div>
      );
  }
};

const TabContent = () => {
  const { rows } = useTabStore();

  // 여러 Row가 있을 수 있으므로, Row를 세로로 나열
  return (
    <div className="flex flex-col w-full h-full overflow-auto bg-white">
      {rows.map((row) => (
        <div
          key={row.id}
          className="flex w-full flex-1 border-b last:border-b-0"
        >
          {/* 각 Row 안에서 섹션들을 가로로 배치 */}
          {row.sections.map((section) => {
            // 섹션 단위로 현재 활성화된 탭(Unique Key) 확인
            const activeKey = section.activeTabKey;
            const activeTab = section.tabs.find((t) => t.uniqueKey === activeKey);
            // 탭 ID를 구해 실제 컨텐츠 렌더링
            const content = renderContent(activeTab?.id ?? null);

            return (
              <div
                key={section.id}
                className="p-2 overflow-auto"
                style={{ width: `${section.width}%` }}
              >
                {content}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TabContent;
