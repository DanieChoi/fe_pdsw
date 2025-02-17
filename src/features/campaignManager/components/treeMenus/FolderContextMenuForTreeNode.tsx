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

  const menuItems = [
    {
      id: 13,
      title: '새 캠페인',
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
        setSelectedMenu(13);
      }
    },
    {
      id: 14,
      title: '캠페인 전체 보기',
      icon: Edit,
      handler: () => {
        if (openedTabs.some(tab => tab.id === 14)) {
          setActiveTab(14, '14');
        } else {
          addTab({
            id: 14,
            uniqueKey: '14',
            title: '캠페인 전체 보기',
            icon: '',
            href: '',
            content: null,
          });
        }
        setSelectedMenu(14);
      }
    },
    {
      id: 23,
      title: '선택한 스킬 보기',
      icon: Eye,
      handler: () => {
        addTab({
          id: 23,
          uniqueKey: `23-${Date.now()}`,
          title: '선택한 스킬 보기',
          icon: '',
          href: '',
          content: null,
        });
        setSelectedMenu(23);
      }
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
        setSelectedMenu(22);
      }
    }
  ];

  return (
    <ContextMenuContent className="w-56">
      {menuItems.map((menuItem) => (
        <ContextMenuItem
          key={menuItem.id}
          onClick={menuItem.handler}
          className="flex items-center justify-between group"
        >
          <div className="flex items-center">
            <menuItem.icon className="mr-2 h-4 w-4" />
            {menuItem.title}
          </div>
          {selectedMenu === menuItem.id && (
            <Check className="h-4 w-4 text-primary" />
          )}
        </ContextMenuItem>
      ))}
    </ContextMenuContent>
  );
};