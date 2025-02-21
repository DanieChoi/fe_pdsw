"use client";

import {
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";
import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";
import { useTabStore } from "@/store/tabStore";
import { Check } from "lucide-react";

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
    {
      id: 14,
      title: "캠페인 전체 보기",
      handler: () => toggleMenu(14),
    },
    {
      id: 23,
      title: "선택한 스킬 보기",
      handler: () => toggleMenu(23),
    },
  ];

  return (
    <ContextMenuContent className="w-44 py-1 text-xs bg-white border border-gray-200 shadow-md">
      {menuItems.map((menuItem) => (
        <ContextMenuItem
          key={menuItem.id}
          onClick={menuItem.handler}
          className="cursor-pointer hover:bg-blue-50 focus:bg-blue-50 flex items-center px-2 h-6 text-gray-700"
        >
          {/* 체크박스가 필요한 메뉴는 체크박스 표시, 아니면 동일 크기의 빈 자리 */}
          {checkableMenuIds.includes(menuItem.id) ? (
            <span className="w-4 h-4 mr-2 flex justify-center items-center border border-gray-300 rounded-sm">
              {selectedMenus.includes(menuItem.id) && (
                <Check className="h-3 w-3 text-blue-600" />
              )}
            </span>
          ) : (
            <span className="w-4 h-4 mr-2" />
          )}

          <span className="flex-1">{menuItem.title}</span>
        </ContextMenuItem>
      ))}
    </ContextMenuContent>
  );
};
