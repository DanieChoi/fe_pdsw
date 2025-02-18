// // src\features\campaignManager\components\treeMenus\ContextMenuForTreeNode.tsx
// import {
//   ContextMenu,
//   ContextMenuContent,
//   ContextMenuItem,
//   ContextMenuSub,
//   ContextMenuSubContent,
//   ContextMenuSubTrigger,
//   ContextMenuTrigger,
//   ContextMenuSeparator,
// } from "@/components/ui/context-menu";
// import { useTabStore } from "@/store/tabStore";
// import { Edit, Copy, Activity, Trash2, Monitor, Settings, Search, List, Clock, History, UserCheck, Shield, RefreshCcw } from "lucide-react";
// import { CampaignStatus } from "./CampaignContextMenuForTreeNode";

// interface ContextMenuForTreeNodeProps {
//   children: React.ReactNode;
//   item: {
//     id: string;
//     label: string;
//     type: any;
//     status: CampaignStatus; // status를 필수값으로 변경
//   };
//   onEdit: () => void;
//   onDelete: () => void;
//   onMonitor: () => void;
//   onHandleCampaignCopy: () => void;
// }

// export function ContextMenuForTreeNode({
//   children,
//   item,
//   onEdit,
//   onDelete,
//   onMonitor,
//   onHandleCampaignCopy,
// }: ContextMenuForTreeNodeProps) {
//   const isFolder = item.type === "folder";
//   const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu } = useTabStore();

//   const handleEditMenuClick = () => {
//     simulateHeaderMenuClick(2); // 캠페인 관리
//     setCampaignIdForUpdateFromSideMenu(item.id);
//   };

//   const handleProgressInfoClick = () => {
//     simulateHeaderMenuClick(4); // 총진행상황
//   };

//   const handleRebroadcastClick = () => {
//     simulateHeaderMenuClick(5); // 발신진행상태
//   };

//   const handleMonitorClick = () => {
//     simulateHeaderMenuClick(3); // 통합모니터
//   };

//   const handleStartClick = () => {
//     simulateHeaderMenuClick(14); // 캠페인별상태
//   };

//   return (
//     <ContextMenu>
//       <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
//       <ContextMenuContent className="w-56">
//         <ContextMenuItem onClick={handleEditMenuClick}>
//           <Edit className="mr-2 h-4 w-4" />
//           캠페인 수정
//         </ContextMenuItem>
        
//         <ContextMenuSub>
//           <ContextMenuSubTrigger>
//             <Search className="mr-2 h-4 w-4" />
//             시작구분
//           </ContextMenuSubTrigger>
//           <ContextMenuSubContent className="w-48">
//             <ContextMenuItem onClick={handleStartClick}>
//               <Clock className="mr-2 h-4 w-4" />
//               시작
//             </ContextMenuItem>
//             <ContextMenuItem onClick={handleStartClick}>
//               <List className="mr-2 h-4 w-4" />
//               멈춤
//             </ContextMenuItem>
//             <ContextMenuItem onClick={handleStartClick}>
//               <History className="mr-2 h-4 w-4" />
//               중지
//             </ContextMenuItem>
//           </ContextMenuSubContent>
//         </ContextMenuSub>

//         <ContextMenuItem onClick={handleProgressInfoClick}>
//           <Settings className="mr-2 h-4 w-4" />
//           캠페인 진행정보
//         </ContextMenuItem>

//         <ContextMenuSeparator />

//         <ContextMenuItem onClick={handleRebroadcastClick}>
//           <RefreshCcw className="mr-2 h-4 w-4" />
//           재발신
//         </ContextMenuItem>

//         <ContextMenuSeparator />

//         <ContextMenuItem onClick={handleMonitorClick}>
//           <Monitor className="mr-2 h-4 w-4" />
//           캠페인 모니터링
//         </ContextMenuItem>

//         <ContextMenuItem onClick={onHandleCampaignCopy}>
//           <Copy className="mr-2 h-4 w-4" />
//           캠페인 복사
//         </ContextMenuItem>

//         {!isFolder && (
//           <ContextMenuItem onClick={onDelete} className="text-red-500">
//             <Trash2 className="mr-2 h-4 w-4" />
//             캠페인 삭제
//           </ContextMenuItem>
//         )}
//       </ContextMenuContent>
//     </ContextMenu>
//   );
// }

// src\features\campaignManager\components\treeMenus\ContextMenuForTreeNode.tsx
"use client";

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
  Edit, Copy, Activity, Trash2, Monitor, Settings, Search, List, Clock, History, 
  UserCheck, Shield, RefreshCcw, AlertTriangle 
} from "lucide-react";
import { CampaignStatus } from "./CampaignContextMenuForTreeNode";

interface ContextMenuForTreeNodeProps {
  children: React.ReactNode;
  item: {
    id: string;
    label: string;
    type: any;
    status: CampaignStatus;
  };
  onEdit: () => void;
  onDelete: () => void;
  onMonitor: () => void;
  onHandleCampaignCopy: () => void;
}

export function ContextMenuForTreeNode({
  children,
  item,
  onEdit,
  onDelete,
  onMonitor,
  onHandleCampaignCopy,
}: ContextMenuForTreeNodeProps) {
  const isFolder = item.type === "folder";
  const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu, addTab } = useTabStore();

  const handleEditMenuClick = () => {
    simulateHeaderMenuClick(2);
    setCampaignIdForUpdateFromSideMenu(item.id);
  };

  const handleProgressInfoClick = () => {
    simulateHeaderMenuClick(4);
  };

  const handleRebroadcastClick = () => {
    simulateHeaderMenuClick(5);

    // 20번에 대해 add tab 예약 재발신
    addTab({
      id: 20,
      uniqueKey: '20',
      title: '재발신 설정',
      icon: '',
      href: '',
      content: null,
    });

  };

  const handleMonitorClick = () => {
    // simulateHeaderMenuClick(3);
    // 상담원 상태 모니터 add tab 21
    addTab({
      id: 21,
      uniqueKey: '21',
      title: '상담원 상태 모니터',
      icon: '',
      href: '',
      content: null,
    });
  };

  const handleStartClick = () => {
    simulateHeaderMenuClick(14);
  };

  const handleBlacklistCountCheckClick = () => {
    // simulateHeaderMenuClick(7); // 블랙리스트 건수 조회
    // alert("블랙 리스트 클릭")
    addTab({
      id: 501,
      uniqueKey: '501',
      title: '블랙 리스트 목록',
      icon: '',
      href: '',
      content: null,
    });
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
            <ContextMenuItem onClick={handleStartClick}>
              <Clock className="mr-2 h-4 w-4" />
              시작
            </ContextMenuItem>
            <ContextMenuItem onClick={handleStartClick}>
              <List className="mr-2 h-4 w-4" />
              멈춤
            </ContextMenuItem>
            <ContextMenuItem onClick={handleStartClick}>
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
          재발신
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem onClick={handleMonitorClick}>
          <Monitor className="mr-2 h-4 w-4" />
          상담원 상태 모니터
        </ContextMenuItem>

        <ContextMenuItem onClick={onHandleCampaignCopy}>
          <Copy className="mr-2 h-4 w-4" />
          캠페인 복사
        </ContextMenuItem>

        {!isFolder && (
          <ContextMenuItem onClick={onDelete} className="text-red-500">
            <Trash2 className="mr-2 h-4 w-4" />
            캠페인 삭제
          </ContextMenuItem>
        )}

        <ContextMenuSeparator />

        <ContextMenuItem onClick={handleBlacklistCountCheckClick}>
          <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
          블랙리스트 건수 조회
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
