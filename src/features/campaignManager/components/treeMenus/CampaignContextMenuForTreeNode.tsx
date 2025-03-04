import { useState } from 'react'
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
  Settings,
  Search,
  List,
  Clock,
  History,
  Shield,
  RefreshCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useApiForCampaignStatusUpdate } from "@/features/campaignManager/hooks/useApiForCampaignStatusUpdate";
import BlackListCountPopup from '@/features/campaignManager/components/popups/BlackListCountPopup';

// 캠페인 상태 정의
export type CampaignStatus = 'started' | 'pending' | 'stopped';

// 실제 탭ID를 enum으로 관리
export enum TabIds {
  CAMPAIGN_EDIT = 2,
  CAMPAIGN_PROGRESS = 21,
  REBROADCAST = 20,
  AGENT_MONITOR = 22,
}

// Props 예시
export interface CampaignContextMenuProps {
  item: {
    id: string;     // 캠페인ID (문자열)
    label: string;  // 표시 이름
    status: CampaignStatus;
  };
  onEdit: () => void;
  onDelete: () => void;
  onMonitor: () => void;
  onHandleCampaignCopy: () => void;
}

export const CampaignContextMenu = ({
  item,
  onEdit,
  onDelete,
  onMonitor,
  onHandleCampaignCopy,
}: CampaignContextMenuProps) => {
  const [isBlacklistPopupOpen, setIsBlacklistPopupOpen] = useState(false);

  const {
    addTab,
    setCampaignIdForUpdateFromSideMenu,
  } = useTabStore();

  // 캠페인 상태 업데이트 (예: 시작/멈춤/중지)
  const { mutate: updateCampaignStatus, isPending } = useApiForCampaignStatusUpdate({
    onSuccess: (data, variables) => {
      console.log("캠페인 상태 업데이트 성공:", data);
    },
    onError: (error) => {
      console.error("캠페인 상태 업데이트 실패:", error);
    },
  });

  // 캠페인 상태를 숫자로 매핑
  const statusToNumber = {
    stopped: 0,
    started: 1,
    pending: 2
  };

  /**
   * 캠페인 상태 변경
   */
  const handleChangeForCampaignStatus = (newStatus: CampaignStatus) => {
    if (item.status === newStatus || isPending) return;
    updateCampaignStatus({
      campaign_id: +item.id,               // 문자열 id를 숫자로
      campaign_status: statusToNumber[newStatus]
    });
  };

  /**
   * "캠페인 수정" 메뉴 클릭
   * → 구버전 simulateHeaderMenuClick을 없애고, 직접 addTab 호출
   */
  const handleEditMenuClick = () => {
    addTab({
      id: TabIds.CAMPAIGN_EDIT,                 // 구버전 id=2
      uniqueKey: `${TabIds.CAMPAIGN_EDIT}-${Date.now()}`,
      title: '캠페인 편집',
      icon: '',
      href: '',
      content: null,
      campaignId: item.id,                      // 필요하면 전달
      campaignName: item.label,
    });
    // 필요하다면 사이드메뉴에서 확인할 수 있도록 store에 저장
    setCampaignIdForUpdateFromSideMenu(item.id);
  };

  /**
   * "캠페인 진행정보" 메뉴 클릭
   */
  const handleProgressInfoClick = () => {
    addTab({
      id: TabIds.CAMPAIGN_PROGRESS,
      uniqueKey: `${TabIds.CAMPAIGN_PROGRESS}-${Date.now()}`,
      title: '캠페인 진행정보',
      icon: '',
      href: '',
      content: null,
      campaignId: item.id,        // 필요 시
      campaignName: item.label,   // 필요 시
    });
  };

  /**
   * "예약 재발신" 메뉴 클릭
   */
  const handleRebroadcastClick = () => {
    addTab({
      id: TabIds.REBROADCAST,
      uniqueKey: `${TabIds.REBROADCAST}-${Date.now()}`,
      title: '예약 재발신',
      icon: '',
      href: '',
      content: null,
      campaignId: item.id,      // 필요 시
      campaignName: item.label, // 필요 시
    });
  };

  /**
   * "상담원 상태 모니터" 메뉴 클릭
   */
  const handleMonitorClick = () => {
    addTab({
      id: TabIds.AGENT_MONITOR,
      uniqueKey: `${TabIds.AGENT_MONITOR}-${Date.now()}`,
      title: '상담원 상태 모니터링',
      icon: '',
      href: '',
      content: null,
      campaignId: item.id,      // 필요 시
      campaignName: item.label, // 필요 시
    });
  };

  /**
   * 블랙리스트 건수 조회 팝업
   */
  const handleBlacklistCountClick = () => {
    // 컨텍스트 메뉴를 강제 닫기
    document.body.click();
    // 약간의 딜레이 후에 팝업 열기
    setTimeout(() => setIsBlacklistPopupOpen(true), 100);
  };

  return (
    <>
      <ContextMenuContent className="w-[150px]">

        {/* 캠페인 수정 */}
        <ContextMenuItem onClick={handleEditMenuClick}>
          <Edit className="mr-2 h-4 w-4" />
          캠페인 수정
        </ContextMenuItem>

        {/* 시작/멈춤/중지 서브메뉴 */}
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Search className="mr-2 h-4 w-4" />
            시작구분: {item.id}
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem
              onClick={() => handleChangeForCampaignStatus('started')}
              className={cn(
                item.status === 'started' && "opacity-50 cursor-not-allowed",
                "flex items-center"
              )}
              disabled={item.status === 'started' || isPending}
            >
              <Clock
                className={cn(
                  "mr-2 h-4 w-4",
                  item.status === 'started' && "text-green-500"
                )}
              />
              시작
              {item.status === 'started' && " (현재)"}
            </ContextMenuItem>

            <ContextMenuItem
              onClick={() => handleChangeForCampaignStatus('pending')}
              className={cn(
                item.status === 'pending' && "opacity-50 cursor-not-allowed",
                "flex items-center"
              )}
              disabled={item.status === 'pending' || isPending}
            >
              <List
                className={cn(
                  "mr-2 h-4 w-4",
                  item.status === 'pending' && "text-yellow-500"
                )}
              />
              멈춤
              {item.status === 'pending' && " (현재)"}
            </ContextMenuItem>

            <ContextMenuItem
              onClick={() => handleChangeForCampaignStatus('stopped')}
              className={cn(
                item.status === 'stopped' && "opacity-50 cursor-not-allowed",
                "flex items-center"
              )}
              disabled={item.status === 'stopped' || isPending}
            >
              <History
                className={cn(
                  "mr-2 h-4 w-4",
                  item.status === 'stopped' && "text-red-500"
                )}
              />
              중지
              {item.status === 'stopped' && " (현재)"}
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>

        {/* 캠페인 진행정보 */}
        <ContextMenuItem onClick={handleProgressInfoClick}>
          <Settings className="mr-2 h-4 w-4" />
          캠페인 진행정보
        </ContextMenuItem>

        <ContextMenuSeparator />

        {/* 예약 재발신 */}
        <ContextMenuItem onClick={handleRebroadcastClick}>
          <RefreshCcw className="mr-2 h-4 w-4" />
          예약 재발신
        </ContextMenuItem>

        <ContextMenuSeparator />

        {/* 캠페인 복사 */}
        <ContextMenuItem onClick={onHandleCampaignCopy}>
          <Copy className="mr-2 h-4 w-4" />
          캠페인 복사
        </ContextMenuItem>

        <ContextMenuSeparator />

        {/* 캠페인 삭제 */}
        <ContextMenuItem onClick={onDelete}>
          <Trash2 className="mr-2 h-4 w-4" />
          캠페인 리스트 삭제
        </ContextMenuItem>

        {/* 상담원 상태 모니터 */}
        <ContextMenuItem onClick={handleMonitorClick}>
          <Activity className="mr-2 h-4 w-4" />
          상담원 상태 모니터
        </ContextMenuItem>

        {/* 블랙리스트 건수 조회 */}
        <ContextMenuItem onClick={handleBlacklistCountClick}>
          <Shield className="mr-2 h-4 w-4" />
          블랙리스트 건수 조회
        </ContextMenuItem>
      </ContextMenuContent>

      {/* 블랙리스트 팝업 (열림/닫힘 관리) */}
      <BlackListCountPopup
        isOpen={isBlacklistPopupOpen}
        // onClose={() => setIsBlacklistPopupOpen(false)}
      />
    </>
  );
};
