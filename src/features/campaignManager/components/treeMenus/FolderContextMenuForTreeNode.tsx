import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import { useTabStore } from "@/store/tabStore";
import { 
  Edit, 
  Plus,
  Eye,
  BarChart,
  Check 
} from "lucide-react";
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

  const handleMenuClick = (menuId: number) => {
    if (checkableMenuIds.includes(menuId)) {
      setSelectedMenu(selectedMenu === menuId ? null : menuId);
    }
  };

  const menuItems = [
    {
      id: 13,
      title: '새 캠페인',
      prefix: '+',
      icon: Plus,
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
      id: 14,
      title: '캠페인 전체 보기',
      icon: Edit,
      handler: () => handleMenuClick(14)
    },
    {
      id: 23,
      title: '선택한 스킬 보기',
      icon: Eye,
      handler: () => handleMenuClick(23)
    },
    {
      id: 22,
      title: '상담원 상태 모니터',
      icon: BarChart,
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
    }
  ];

  return (
    <ContextMenuContent className="w-56 py-1 text-sm">
      {menuItems.map((menuItem) => (
        <ContextMenuItem
          key={menuItem.id}
          onClick={menuItem.handler}
          className="px-2 py-1.5 focus:bg-slate-100 focus:text-slate-900"
        >
          <div className="flex items-center space-x-2 text-slate-700">
            {menuItem.prefix ? (
              <span className="flex w-4 justify-center text-sm font-medium">
                {menuItem.prefix}
              </span>
            ) : checkableMenuIds.includes(menuItem.id) ? (
              <span className="flex w-4 justify-center">
                {selectedMenu === menuItem.id ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <span className="h-3.5 w-3.5" />
                )}
              </span>
            ) : (
              <span className="w-4" />
            )}
            <menuItem.icon className="h-3.5 w-3.5" />
            <span className="flex-1">{menuItem.title}</span>
          </div>
        </ContextMenuItem>
      ))}
    </ContextMenuContent>
  );
};