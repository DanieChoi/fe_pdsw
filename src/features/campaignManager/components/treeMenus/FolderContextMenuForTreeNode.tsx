"use client";

import {
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";
import { useTabStore } from "@/store/tabStore";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
import { useTreeMenuStore } from "@/store/storeForSsideMenuCampaignTab";
import { useAvailableMenuStore } from "@/store/useAvailableMenuStore";

export interface FolderContextMenuProps {
  item: {
    id: string;
    label: string;
  };
}

export const FolderContextMenu = ({ item }: FolderContextMenuProps) => {
  const { addTab, openedTabs, setActiveTab } = useTabStore();
  const { selectedMenus, toggleMenu } = useTreeMenuStore(); // 통합 스토어 사용
  const { availableCampaignTenantContextMenuIds } = useAvailableMenuStore(); // 권한 있는 메뉴 ID 가져오기

  // 체크박스가 필요한 메뉴 ID
  const checkableMenuIds = [14, 23];

  const menuItems = [
    {
      id: 13,
      menuId: 15,
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
      menuId: 16,
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

  // 사용자가 접근 권한이 있는 메뉴 아이템만 필터링
  const filteredMenuItems = menuItems.filter((menuItem) => 
    availableCampaignTenantContextMenuIds.includes(menuItem.menuId)
  );
  // console.log("availableCampaignTenantContextMenuIds : ", availableCampaignTenantContextMenuIds);
  // console.log("filteredMenuItems : ", filteredMenuItems);  

  return (
    <ContextMenuContent>
      {filteredMenuItems.map((menuItem) => (
        <ContextMenuItem
          key={menuItem.id}
          onClick={menuItem.handler}
          className="cursor-pointer hover:bg-[#F4F6F9] focus:bg-[#F4F6F9] flex items-center text-[#333] px-[6px] py-[4px]"
        >
          <span>{menuItem.title}</span>
        </ContextMenuItem>
      ))}
    </ContextMenuContent>
  );
}