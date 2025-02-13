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
  Copy, 
  Activity, 
  Trash2, 
  Monitor, 
  Settings, 
  Search, 
  List, 
  Clock, 
  History, 
  Shield, 
  RefreshCcw,
  Plus,
  Eye,
  BarChart 
} from "lucide-react";

export interface FolderContextMenuProps {
  item: {
    id: string;
    label: string;
  };
}

export const FolderContextMenu = ({ item }: FolderContextMenuProps) => {
  const { addTab } = useTabStore();

  const handleNewCampaign = () => {
    // 추후 구현
    console.log('새 캠페인 추가:', item.id);
  };

  const handleViewAllCampaigns = () => {
    // 추후 구현
    console.log('캠페인 전체 보기:', item.id);
  };

  const handleViewSelectedSkills = () => {
    addTab({
      id: 23,
      uniqueKey: `23-${Date.now()}`,
      title: '선택한 스킬 보기',
      icon: '',
      href: '',
      content: null,
    });
  };

  const handleAgentStatusView = () => {
    addTab({
      id: 22,
      uniqueKey: `22-${Date.now()}`,
      title: '상담원 상태 모니터',
      icon: '',
      href: '',
      content: null,
    });
  };

  return (
    <ContextMenuContent className="w-56">
      <ContextMenuItem onClick={handleNewCampaign}>
        <Plus className="mr-2 h-4 w-4" />
        새 캠페인
      </ContextMenuItem>
      <ContextMenuItem onClick={handleViewAllCampaigns}>
        <Edit className="mr-2 h-4 w-4" />
        캠페인 전체 보기
      </ContextMenuItem>
      <ContextMenuItem onClick={handleViewSelectedSkills}>
        <Eye className="mr-2 h-4 w-4" />
        선택한 스킬 보기
      </ContextMenuItem>
      <ContextMenuItem onClick={handleAgentStatusView}>
        <BarChart className="mr-2 h-4 w-4" />
        상담원 상태 모니터
      </ContextMenuItem>
    </ContextMenuContent>
  );
};