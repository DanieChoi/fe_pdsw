"use client";

import {
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";
import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";
import { useTabStore } from "@/store/tabStore";
import { Check } from "lucide-react";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";

export interface FolderContextMenuProps {
  item: {
    id: string;
    label: string;
  };
}

export const FolderContextMenu = ({ item }: FolderContextMenuProps) => {
  const { addTab, openedTabs, setActiveTab } = useTabStore();
  const { selectedMenus, toggleMenu } = useSideMenuCampaignTabStore();

  // 체크박스가 필요한 메뉴 ID
  const checkableMenuIds = [14, 23];

  const menuItems = [
    {
      id: 13,
      title: "새 캠페인",
      handler: () => {
        if (openedTabs.some((tab) => tab.id === 13)) {
          setActiveTab(13, "13");
        } else {
          addTab({
            id: 13,
            uniqueKey: "13",
            title: "새 캠페인",
            icon: "",
            href: "",
            content: null,
          });
        }
      },
    },
    {
      id: 22,
      title: "상담원 상태 모니터",
      handler: () => {
        addTab({
          id: 22,
          uniqueKey: `22-${Date.now()}`,
          title: "상담원 상태 모니터",
          icon: "",
          href: "",
          content: null,
        });
      },
    },

  ];

  return (
    <ContextMenuContent className="p-1">
      {menuItems.map((menuItem) => (
        <ContextMenuItem
          key={menuItem.id}
          onClick={menuItem.handler}
          className="cursor-pointer hover:bg-[#F4F6F9] focus:bg-[#F4F6F9] flex items-center text-[#333] px-2 py-1.5"
        >
          <span>{menuItem.title}</span>
        </ContextMenuItem>
      ))}
    </ContextMenuContent>
  );
}