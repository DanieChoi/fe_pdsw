// src\features\campaignManager\components\treeMenus\ContextMenuForTreeNode.tsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
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
  UserCheck, 
  Shield, 
  RefreshCcw 
} from "lucide-react";

interface ContextMenuForTreeNodeProps {
  children: React.ReactNode;
  item: {
    type: string;
    id: string;
    label: string;
  };
  onEdit: () => void;
  onDelete: () => void;
  onMonitor: () => void;
  onCopy: () => void;
}

export function ContextMenuForTreeNode({
  children,
  item,
  onEdit,
  onDelete,
  onMonitor,
  onCopy,
}: ContextMenuForTreeNodeProps) {
  const isFolder = item.type === "folder";
  const { 
    openCampaignManagerForUpdate, 
    setCampaignIdForUpdateFromSideMenu,
    simulateHeaderMenuClick,
    addTab
  } = useTabStore();

  const handleEditMenuClick = () => {
    simulateHeaderMenuClick(2, item.id, item.label); // 캠페인 관리
    setCampaignIdForUpdateFromSideMenu(item.id);
  };

  const handleProgressInfoClick = () => {
    simulateHeaderMenuClick(21, item.id, item.label); // 총진행상황
  };

  const handleRebroadcastClick = () => {
    addTab({
      id: 20,
      uniqueKey: `20-${Date.now()}`,  // 고유한 키 생성
      title: '예약 재발신',
      icon: '',
      href: '',
      content: null,
    });   
  };
  
  const handleMonitorClick = () => {
    addTab({
      id: 22,
      uniqueKey: `22-${Date.now()}`,  // 고유한 키 생성
      title: '상담원 상태 모니터링',   // 올바른 제목으로 수정
      icon: '',
      href: '',
      content: null,
    });
  };

  const handleCampaignListDelete = () => {
    // Implement campaign list deletion logic
    console.log('Campaign list delete clicked');
  };

  const handleAgentStatusMonitor = () => {
    // Implement agent status monitoring logic
    console.log('Agent status monitor clicked');
  };

  const handleBlacklistCount = () => {
    // Implement blacklist count check logic
    console.log('Blacklist count check clicked');
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem onClick={handleEditMenuClick}>
          <Edit className="mr-2 h-4 w-4" />
          캠페인 수정
        </ContextMenuItem>
        
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Search className="mr-2 h-4 w-4" />
            시작구분
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              <Clock className="mr-2 h-4 w-4" />
              시작
            </ContextMenuItem>
            <ContextMenuItem>
              <List className="mr-2 h-4 w-4" />
              멈춤
            </ContextMenuItem>
            <ContextMenuItem>
              <History className="mr-2 h-4 w-4" />
              중지
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>

        <ContextMenuItem onClick={handleProgressInfoClick}>
          <Settings className="mr-2 h-4 w-4" />
          캠페인 진행정보
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem onClick={handleRebroadcastClick}>
          <RefreshCcw className="mr-2 h-4 w-4" />
          예약 재발신
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem onClick={handleMonitorClick}>
          <Monitor className="mr-2 h-4 w-4" />
           상담원 상태 모니터링
        </ContextMenuItem>

        <ContextMenuItem onClick={onCopy}>
          <Copy className="mr-2 h-4 w-4" />
          캠페인 복사
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem onClick={handleCampaignListDelete}>
          <Trash2 className="mr-2 h-4 w-4" />
          캠페인 리스트 삭제
        </ContextMenuItem>

        <ContextMenuItem onClick={handleAgentStatusMonitor}>
          <Activity className="mr-2 h-4 w-4" />
          상담원 상태 모니터
        </ContextMenuItem>

        <ContextMenuItem onClick={handleBlacklistCount}>
          <Shield className="mr-2 h-4 w-4" />
          블랙리스트 건수 조회
        </ContextMenuItem>

      </ContextMenuContent>
    </ContextMenu>
  );
}