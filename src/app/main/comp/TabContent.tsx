import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTabStore } from "@/store/tabStore";
import { useDroppable } from "@dnd-kit/core";
import PreferencesBoard from "./preferences";
import SystemPreferences from "./SystemPreferences";
import Campaignprogress from "./Campaignprogress";
import CampaignMonitorDashbord from "./CampaignMonitorDashbord";
import OutboundCallProgressPanel from "./OutboundCallProgressPanel";
import StatusCampaign from "./StatusCampaign";
import ChannelMonitor from "./ChannelMonitor";
import ListManager from "./ListManager";
import OperationBoard from "./operation";
import NewCampaignManager from "./NewCampaignManager";
import CampaignGroupManager from "./CampaignGroupManager";
import RebroadcastSettingsPanel from "./RebroadcastSettingsPanel";
import RebroadcastSettingsGroupPanel from "./RebroadcastSettingsGroupPanel";
import CampaignManager from "./CampaignManager";
import AgentStatusMonitoring from "./AgentStatusMonitoring";
import SystemMonitoring from "./SystemMonitoring";
import CampaignClonePanel from "@/widgets/sidebar/pannels/CampaignClonePanel";
import IntegratedMonitoringDashboard from "./IntegratedMonitoringDashboard";
import { SkillAssignmentTab } from "@/features/campaignManager/components/treeMenus/SkillAssignmentTab";
import BlackListCountPopup from "@/features/campaignManager/components/popups/BlackListCountPopup";
import { TeamSkillAssignmentTab } from "@/features/campaignManager/components/treeMenus/TeamSkillAssignmentTab";
import { GroupSkillAssignmentTab } from "@/features/campaignManager/components/treeMenus/GroupSkillAssignmentTab";
import SkilFilterOptionPannelForCampaignTab from "./SkilFilterOptionPannelForCampaignTab";
import CampaignDeletePanel from "@/widgets/sidebar/pannels/CampaignDeletePanel";
import CampaignGroupBulkUpdatePanel from "./CampaignGroupBulkUpdatePanel";
import SkilAdminPannelForSystemAdmin from "@/widgets/SkilAdminPannelForSystemAdmin";

// Define the Tab interface
interface Tab {
  id: number;
  uniqueKey: string;
  campaignId?: string;
  campaignName?: string;
  params?: Record<string, any>;
}

// Define the Section interface to match TabSection from the store
interface Section {
  id: string;
  width: number;
  tabs: Tab[];
  activeTabKey: string | null; // Changed from string | undefined to string | null
}

// 개별 섹션 컴포넌트를 분리하여 훅 규칙 문제 해결
const SectionContent = ({
  section,
  rowId,
  tabIdToRender,
  campaignId,
  campaignName,
  params,
  width,
  activeTabId,
  activeTabKey,
  setActiveTab
}: {
  section: Section;
  rowId: string;
  tabIdToRender: number | null;
  campaignId?: string;
  campaignName?: string;
  params?: Record<string, any>;
  width: number;
  activeTabId: number | null;
  activeTabKey: string | null;
  setActiveTab: (id: number, uniqueKey: string) => void;
}) => {
  const { setNodeRef, isOver } = useDroppable({
    id: `content-drop-${rowId}-${section.id}`,
    data: {
      type: "content-area",
      rowId,
      sectionId: section.id
    }
  });

  // 이 컴포넌트에서 렌더링할 콘텐츠
  const renderContent = (
    tabId: number | null,
    campaignId?: string,
    campaignName?: string,
    params?: Record<string, any>
  ) => {
    switch (tabId) {
      case 1:
        return <CampaignGroupManager
          groupId={params?.groupId}
          groupName={params?.groupName}
        />;
      case 2:
        return <CampaignManager
          campaignId={params?.campaignId}
        />;
      case 3:
        return <IntegratedMonitoringDashboard />;
      case 4:
        return <Campaignprogress />;
      case 5:
        return <OutboundCallProgressPanel />;
      case 6:
        return <ChannelMonitor />;
      case 7:
        return <ListManager />;
      case 8:
        return <OperationBoard />;
      case 9:
        return <OperationBoard />;
      case 10:
        return <SystemPreferences />;
      case 11:
        return <OperationBoard />;
      case 12:
        return <PreferencesBoard />;
      case 13:
        return <NewCampaignManager tenantId={params?.tenantId} />;
      case 14:
        return <StatusCampaign />;
      case 20:
        return <RebroadcastSettingsPanel />;
      case 21:
        return <CampaignMonitorDashbord campaignId={campaignId} />;
      case 22:
        return (
          <AgentStatusMonitoring
            sessionKey={params?.sessionKey}
            campaignId={params?.campaignId}
            tenantId={params?.tenantId}
          />
        );
      case 23:
        return <SystemMonitoring />;
      case 24:
        return <RebroadcastSettingsGroupPanel />;
      case 100:
        return <>잘못된 스킬 할당 탭입니다.</>;
      case 130:
        return <CampaignClonePanel />;
      case 131:
        return <CampaignDeletePanel campaignId={campaignId} campaignName={campaignName} />;
      case 501:
        return (
          <div className="flex justify-left w-full">
            <BlackListCountPopup />
          </div>
        );
      case 600:
        return (
          <div className="flex justify-left w-full">
            <div className="max-w-[500px] w-full">
              <SkillAssignmentTab />
            </div>
          </div>
        );
      case 601:
        return (
          <div className="flex justify-left w-full">
            <div className="max-w-[530px] w-full">
              <TeamSkillAssignmentTab />
            </div>
          </div>
        );
      case 602:
        return (
          <div className="flex justify-left w-full">
            <div className="max-w-[500px] w-full">
              <GroupSkillAssignmentTab />
            </div>
          </div>
        );
      case 603:
        return (
          <div className="flex justify-left w-full">
            <div className="max-w-[500px] w-full">
              <SkilFilterOptionPannelForCampaignTab />
            </div>
          </div>
        );
      case 700:
        return (
          <div className="flex justify-left w-full">
            <div className="max-w-[1000px] w-full">
              <CampaignGroupBulkUpdatePanel
                groupId={params?.groupId}
                groupName={params?.groupName}
              />
            </div>
          </div>
        );

      case 701:
        return (
          <div className="flex justify-left w-full">
            <div className="max-w-[1000px] w-full">
              <SkilAdminPannelForSystemAdmin />
            </div>
          </div>
        )

      default:
        return (
          <div className="flex items-center justify-center h-full text-gray-500">
            탭을 선택!
          </div>
        );
    }
  };

  return (
    <div
      ref={setNodeRef}
      className={`overflow-auto transition-all duration-75 ease-out ${width < 100 ? 'p-2' : ''} ${isOver ? 'bg-blue-100 ring-1 ring-blue-300' : ''}`}
      style={{
        width: `${width}%`,
        border: width < 100 ? '1px solid #bbb' : 'none'
      }}
      onClick={() => {
        const activeTab = section.tabs.find(t => t.uniqueKey === section.activeTabKey);
        if (activeTab) {
          setActiveTab(activeTab.id, activeTab.uniqueKey);
        }
      }}
    >
      {renderContent(tabIdToRender, campaignId, campaignName, params)}
    </div>
  );
};

const TabContent = () => {
  const { rows, activeTabId, activeTabKey, setActiveTab, updateSectionWidths } = useTabStore();
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const widthsRef = useRef({ left: 50, right: 50 });
  const startXRef = useRef(0);
  const [sections, setSections] = useState<Section[]>([]);

  // Performance optimization using requestAnimationFrame
  const updateWidths = useCallback((leftWidth: number) => {
    const clampedLeft = Math.max(20, Math.min(80, leftWidth));
    const right = 100 - clampedLeft;

    requestAnimationFrame(() => {
      if (sections.length === 2) {
        const newSections = [...sections];
        newSections[0] = { ...newSections[0], width: clampedLeft };
        newSections[1] = { ...newSections[1], width: right };
        setSections(newSections);
        widthsRef.current = { left: clampedLeft, right };
        
        // Update the store with new width values to persist them
        if (rows[0]?.id) {
          updateSectionWidths(rows[0].id, [clampedLeft, right]);
        }
      }
    });
  }, [sections, rows, updateSectionWidths]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;

    setIsDragging(true);
    startXRef.current = e.clientX;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none'; // Prevent text selection while dragging
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const deltaX = e.clientX - startXRef.current;
    const containerWidth = container.width;

    // Calculate new width based on delta movement
    const deltaPercentage = (deltaX / containerWidth) * 100;
    const newLeftWidth = widthsRef.current.left + deltaPercentage;

    updateWidths(newLeftWidth);
    startXRef.current = e.clientX;
  }, [isDragging, updateWidths]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    document.body.style.cursor = 'default';
    document.body.style.userSelect = 'auto';
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseleave', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Update sections when rows change and initialize widthsRef
  useEffect(() => {
    if (rows[0]?.sections) {
      const storeSections = rows[0].sections;
      setSections(storeSections as Section[]);
      
      // Initialize widthsRef with current values from store
      if (storeSections.length === 2) {
        widthsRef.current = {
          left: storeSections[0].width,
          right: storeSections[1].width
        };
      }
    }
  }, [rows]);

  return (
    <div ref={containerRef} className="flex flex-col w-full h-full overflow-auto bg-white">
      {rows.map((row) => (
        <div
          key={row.id}
          className="flex w-full flex-1 border-b last:border-b-0 relative h-full"
        >
          {sections.map((section, index) => {
            const activeKey = section.activeTabKey;
            const activeTab = section.tabs.find((t) => t.uniqueKey === activeKey);
            const isActiveGlobal = activeTabId === activeTab?.id && activeTabKey === activeTab?.uniqueKey;
            const tabIdToRender = isActiveGlobal ? activeTabId : activeTab?.id ?? null;
            const campaignId = activeTab?.campaignId;
            const campaignName = activeTab?.campaignName;
            const params = activeTab?.params;

            return (
              <React.Fragment key={section.id}>
                <SectionContent
                  section={section}
                  rowId={row.id}
                  tabIdToRender={tabIdToRender}
                  campaignId={campaignId}
                  campaignName={campaignName}
                  params={params}
                  width={section.width}
                  activeTabId={activeTabId}
                  activeTabKey={activeTabKey}
                  setActiveTab={setActiveTab}
                />

                {index === 0 && sections.length === 2 && (
                  <div
                    ref={dragRef}
                    className="w-1 bg-gray-200 hover:bg-[#55BEC8] active:bg-[#55BEC8] cursor-col-resize select-none"
                    onMouseDown={handleMouseDown}
                    style={{
                      touchAction: 'none',
                    }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TabContent;