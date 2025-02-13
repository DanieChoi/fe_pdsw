// C:\nproject\fe_pdsw\src\features\campaignManager\components\treeMenus\CampaignContextMenuForTreeNode.tsx
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

  export interface CampaignContextMenuProps {
    item: {
      id: string;
      label: string;
    };
    onEdit: () => void;
    onDelete: () => void;
    onMonitor: () => void;
    onCopy: () => void;
  }
  
  export const CampaignContextMenu = ({ 
    item, 
    onEdit,
    onDelete,
    onMonitor,
    onCopy 
  }: CampaignContextMenuProps) => {
    const { 
      openCampaignManagerForUpdate, 
      setCampaignIdForUpdateFromSideMenu,
      simulateHeaderMenuClick,
      addTab
    } = useTabStore();
  
    const handleEditMenuClick = () => {
      simulateHeaderMenuClick(2, item.id, item.label);
      setCampaignIdForUpdateFromSideMenu(item.id);
    };
  
    const handleProgressInfoClick = () => {
      simulateHeaderMenuClick(21, item.id, item.label);
    };
  
    const handleRebroadcastClick = () => {
      addTab({
        id: 20,
        uniqueKey: `20-${Date.now()}`,
        title: '예약 재발신',
        icon: '',
        href: '',
        content: null,
      });   
    };
  
    const handleMonitorClick = () => {
      addTab({
        id: 22,
        uniqueKey: `22-${Date.now()}`,
        title: '상담원 상태 모니터링',
        icon: '',
        href: '',
        content: null,
      });
    };
  
    const handleCampaignListDelete = () => {
      console.log('Campaign list delete clicked:', item.id);
    };
  
    const handleAgentStatusMonitor = () => {
      console.log('Agent status monitor clicked');
    };
  
    const handleBlacklistCount = () => {
      console.log('Blacklist count check clicked');
    };
  
    return (
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
  
        {/* <ContextMenuItem onClick={handleMonitorClick}>
          <Monitor className="mr-2 h-4 w-4" />
          상담원 상태 모니터링
        </ContextMenuItem> */}

        <ContextMenuItem onClick={onCopy}>
          <Copy className="mr-2 h-4 w-4" />
          캠페인 복사
        </ContextMenuItem>
  
        <ContextMenuSeparator />
  
        <ContextMenuItem onClick={handleCampaignListDelete}>
          <Trash2 className="mr-2 h-4 w-4" />
          캠페인 리스트 삭제
        </ContextMenuItem>

        <ContextMenuItem onClick={handleMonitorClick}>
          <Activity className="mr-2 h-4 w-4" />
          상담원 상태 모니터
        </ContextMenuItem>

        <ContextMenuItem onClick={handleBlacklistCount}>
          <Shield className="mr-2 h-4 w-4" />
          블랙리스트 건수 조회
        </ContextMenuItem>
      </ContextMenuContent>
    );
  };