import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTabStore } from "@/store/tabStore";
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
      return <Campaignprogress />; 
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
      return <RebroadcastSettingsPanel />; 
    case 21:
      return <CampaignMonitorDashbord />;
    case 22:
      return <AgentStatusMonitoring />;
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
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const widthsRef = useRef({ left: 50, right: 50 });
  const startXRef = useRef(0);
  const [sections, setSections] = useState(rows[0]?.sections || []);

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
      }
    });
  }, [sections]);

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

  // Update sections when rows change
  useEffect(() => {
    setSections(rows[0]?.sections || []);
  }, [rows]);

  return (
    <div ref={containerRef} className="flex flex-col w-full h-full overflow-auto bg-white">
      {rows.map((row) => (
        <div
          key={row.id}
          className="flex w-full flex-1 border-b last:border-b-0 relative"
        >
          {sections.map((section, index) => {
            const activeKey = section.activeTabKey;
            const activeTab = section.tabs.find((t) => t.uniqueKey === activeKey);
            const isActiveGlobal = activeTabId === activeTab?.id && activeTabKey === activeTab?.uniqueKey;
            const tabIdToRender = isActiveGlobal ? activeTabId : activeTab?.id ?? null;

            return (
              <React.Fragment key={section.id}>
                <div
                  className="p-2 overflow-auto transition-all duration-75 ease-out"
                  style={{
                    width: `${section.width}%`,
                    border: sections.length === 2 ? '1px solid #bbb' : 'none'
                  }}
                  onClick={() => {
                    if (activeTab) {
                      setActiveTab(activeTab.id, activeTab.uniqueKey);
                    }
                  }}
                >
                  {renderContent(tabIdToRender)}
                </div>
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