"use client";

import { TabId } from "@/features/campaignManager/components/data/baseTabs";

interface BottomTabsForSideMenuProps {
  selectedTabId: TabId;
  onTabChange: (tabId: TabId) => void;
}

const tabsConfig = [
  {
    id: "campaign" as TabId,
    label: "캠페인",
    icon: "/tree-menu/campaign_icon_for_sidemenu.png",
    alt: "캠페인 아이콘"
  },
  {
    id: "agent" as TabId,
    label: "상담원",
    icon: "/tree-menu/ghost_icon_for_counselor_tab.png",
    alt: "상담원 아이콘"
  },
  {
    id: "agent-group" as TabId,
    label: "상담원 그룹",
    icon: "/tree-menu/campain_group.png",
    alt: "상담원 그룹 아이콘"
  }
];

export function BottomTabsForSideMenu({ selectedTabId, onTabChange }: BottomTabsForSideMenuProps) {
  return (
    <div className="flex-none border-t">
      {tabsConfig.map((tab) => (
        <button
          key={tab.id}
          className={`w-full text-left px-4 py-2 text-sm font-medium flex items-center gap-2
            ${
              selectedTabId === tab.id
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
            }`}
          onClick={() => onTabChange(tab.id)}
        >
          <img src={tab.icon} alt={tab.alt} className="w-4 h-4" />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}