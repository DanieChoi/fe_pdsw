import {
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";
import { useTabStore } from "@/store/tabStore";
import { Check } from "lucide-react";
import { useState } from "react";

export interface FolderContextMenuProps {
  item: {
    id: string;
    label: string;
  };
}

export const FolderContextMenu = ({ item }: FolderContextMenuProps) => {
  const { addTab, openedTabs, setActiveTab } = useTabStore();
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);
  
  const checkableMenuIds = [14, 23];

  const handleMenuClick = (menuId: number, e: React.MouseEvent) => {
    if (checkableMenuIds.includes(menuId)) {
      e.preventDefault();
      setSelectedMenu(selectedMenu === menuId ? null : menuId);
    }
  };

  const menuItems = [
    {
      id: 13,
      title: '새 캠페인',
      handler: () => {
        if (openedTabs.some(tab => tab.id === 13)) {    
          setActiveTab(13, '13');
        } else {
          addTab({
            id: 13,
            uniqueKey: '13',
            title: '새 캠페인',
            icon: '',
            href: '',
            content: null,
          });
        }
      }
    },
    {
      id: 22,
      title: '상담원 상태 모니터',
      handler: () => {
        addTab({
          id: 22,
          uniqueKey: `22-${Date.now()}`,
          title: '상담원 상태 모니터',
          icon: '',
          href: '',
          content: null,
        });
      }
    },
    {
      id: 14,
      title: '캠페인 전체 보기',
      handler: (e: React.MouseEvent) => handleMenuClick(14, e)
    },
    {
      id: 23,
      title: '선택한 스킬 보기', 
      handler: (e: React.MouseEvent) => handleMenuClick(23, e)
    }
  ];

  return (
    <ContextMenuContent className="w-48 py-1 text-sm bg-white border border-gray-200 shadow-md">
      {menuItems.map((menuItem) => (
        <ContextMenuItem
          key={menuItem.id}
          onClick={menuItem.handler}
          className={`
            cursor-pointer hover:bg-blue-50 focus:bg-blue-50
            ${checkableMenuIds.includes(menuItem.id) ? 'bg-[#f5f6f8]' : ''}
          `}
        >
          <div className="flex items-center text-gray-700 h-7">
            <span className={`
              w-5 h-full flex justify-center items-center
              ${checkableMenuIds.includes(menuItem.id) 
                ? 'bg-[#eceef2] border-r border-gray-200' 
                : 'invisible'
              }
            `}>
              {checkableMenuIds.includes(menuItem.id) && selectedMenu === menuItem.id && (
                <Check className="h-3 w-3 text-blue-600" />
              )}
            </span>
            <span className="flex-1 px-2">{menuItem.title}</span>
          </div>
        </ContextMenuItem>
      ))}
    </ContextMenuContent>
  );
};