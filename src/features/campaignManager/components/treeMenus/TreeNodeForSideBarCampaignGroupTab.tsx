"use client";

import { Building, Briefcase } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { Menu, Item, useContextMenu, Separator } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { TreeNode } from "@/features/campaignManager/types/typeForCampaignGroupForSideBar";
import AddCampaignGroupDialog from "./dialog/AddCampaignGroupDialog";
import { useTabStore } from "@/store/tabStore";
import CampaignAddPopup from '@/features/campaignManager/components/popups/CampaignAddPopup';
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import CommonDialogForSideMenu from "@/components/shared/CommonDialog/CommonDialogForSideMenu";
import IDialogForUpdateCampaignGroupName from "./dialog/IDialogForUpdateCampaignGroupName";
import { toast } from "react-toastify";
import { useApiForDeleteCampaignGroup } from "@/features/campaignManager/hooks/useApiForDeleteCampaignGroup";
import { getCampaignGroupMenuItems } from "./ContextMenus/IContextMenuForCampaignGroupTabCamapaignGroup";

interface TreeNodeProps {
  node: TreeNode;
  level: number;
  expandedNodes: Set<string>;
  selectedNodeId?: string;
  onNodeToggle: (nodeId: string) => void;
  onNodeSelect: (nodeId: string) => void;
}

const getStatusIcon = (status?: string) => {
  switch (status) {
    case 'started':
      return '/sidebar-menu/tree_play.svg';
    case 'pending':
      return '/sidebar-menu/tree_pause.svg';
    case 'stopped':
      return '/sidebar-menu/tree_stop.svg';
    default:
      return null;
  }
};

export function TreeNodeForSideBarCampaignGroupTab({
  node,
  level,
  expandedNodes,
  selectedNodeId,
  onNodeToggle,
  onNodeSelect,
}: TreeNodeProps) {
  // 다이얼로그와 팝업 상태
  const [isAddGroupDialogOpen, setIsAddGroupDialogOpen] = useState(false);
  const [isCampaignAddPopupOpen, setIsCampaignAddPopupOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false);
  const recentlyClosedDialogRef = useRef(false);
  
  // 브라우저 환경 확인 (Portal 사용 위함)
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // API 훅 설정
  const { mutate: deleteCampaignGroup, isPending: isDeleting } = useApiForDeleteCampaignGroup({
    onSuccess: () => {
      toast.success("캠페인 그룹이 삭제되었습니다.");
      setIsDeleteDialogOpen(false);
    },
    onError: (error) => {
      alert(`캠페인 그룹 삭제 실패: ${error.message}`);
    }
  });

  // Context menu IDs
  const campaignMenuId = `campaign-menu-${node.id}`;
  const tenantMenuId = `tenant-menu-${node.id}`;
  const groupMenuId = `group-menu-${node.id}`;
  
  // Context menu hooks
  const { show: showCampaignMenu } = useContextMenu({ id: campaignMenuId });
  const { show: showTenantMenu } = useContextMenu({ id: tenantMenuId });
  const { show: showGroupMenu } = useContextMenu({ id: groupMenuId });

  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const isSelected = selectedNodeId === node.id;

  // 디버깅용 로그 추가
  useEffect(() => {
    if (node.type === "group" && hasChildren) {
      console.log(`그룹 노드 ${node.name}에 캠페인 ${node.children?.length}개 있음, 확장 상태: ${isExpanded}`);
    }
  }, [node, hasChildren, isExpanded]);

  // 핸들러 함수들
  const handleClick = useCallback(() => {
    onNodeSelect(node.id);
    if (hasChildren) {
      console.log(`노드 클릭 (타입: ${node.type}, ID: ${node.id}), 자식 수: ${node.children?.length}`);
      onNodeToggle(node.id);
    }
  }, [node.id, node.type, hasChildren, node.children?.length, onNodeSelect, onNodeToggle]);

  const handleContextMenuEvent = (e: React.MouseEvent) => {
    e.preventDefault();
    
    onNodeSelect(node.id);
    
    if (node.type === "campaign") {
      showCampaignMenu({ event: e });
    } else if (node.type === "tenant") {
      showTenantMenu({ event: e });
    } else if (node.type === "group") {
      showGroupMenu({ event: e });
    }
  };

  const handleCloseAddGroupDialog = useCallback(() => {
    setIsAddGroupDialogOpen(false);
    // 다이얼로그가 닫혔다고 표시
    recentlyClosedDialogRef.current = true;
    // 일정 시간 후에 플래그 초기화
    setTimeout(() => {
      recentlyClosedDialogRef.current = false;
    }, 300);
  }, []);
  
  const handleCloseRenameDialog = useCallback(() => {
    setIsRenameDialogOpen(false);
    recentlyClosedDialogRef.current = true;
    setTimeout(() => {
      recentlyClosedDialogRef.current = false;
    }, 300);
  }, []);

  const handleRenameSuccess = useCallback(() => {
    // 여기에서 필요한 경우 리렌더링이나 데이터 갱신 로직을 추가할 수 있음
  }, []);
  
  const handleCloseDeleteDialog = useCallback(() => {
    setIsDeleteDialogOpen(false);
    recentlyClosedDialogRef.current = true;
    setTimeout(() => {
      recentlyClosedDialogRef.current = false;
    }, 300);
  }, []);
  
  const confirmDelete = useCallback(() => {
    if (node && node.group_id) {
      deleteCampaignGroup(node.group_id);
    }
  }, [node, deleteCampaignGroup]);

  const handleAddGroup = useCallback((groupName: string, groupCode: string) => {
    console.log("새 그룹 추가:", {
      tenantId: node.tenant_id,
      tenantName: node.name,
      groupName,
      groupCode,
    });
  }, [node.tenant_id, node.name]);

  // 스타일 계산
  const getNodeStyle = useCallback(() => {
    let baseStyle = `flex items-center hover:bg-[#FFFAEE] px-2 py-0.5 cursor-pointer transition-colors duration-150`;
    if (isSelected) {
      baseStyle += " bg-[#FFFAEE] text-555";
    }
    if (node.type === "campaign") {
      baseStyle += isSelected ? "" : " text-green-600";
    }
    return baseStyle;
  }, [isSelected, node.type]);

  // 아이콘 렌더링
  const renderIcon = useCallback(() => {
    switch (node.type?.toLowerCase()) {
      case "root":
        return <Image src="/tree-menu/organization.png" alt="조직" width={14} height={12} />;
      case "tenant":
        return <Image src="/tree-menu/folder.png" alt="폴더" width={14} height={12} />;
      case "group":
        return <Image src="/tree-menu/folder2.png" alt="폴더2" width={15} height={12} />;
      case "campaign":
        return <Briefcase className="h-4 w-4 text-green-600" />;
      default:
        return <Building className="h-4 w-4 text-gray-500" />;
    }
  }, [node.type]);

  // 모든 대화상자 렌더링 함수
  const renderAllDialogs = () => {
    if (!isBrowser) return null;
    
    return (
      <>
        {/* 캠페인 그룹 추가 다이얼로그 */}
        {isAddGroupDialogOpen && createPortal(
          <AddCampaignGroupDialog
            isOpen={isAddGroupDialogOpen}
            onClose={handleCloseAddGroupDialog}
            tenantId={node.tenant_id ? node.tenant_id : 0}
            tenantName={node.name}
            onAddGroup={handleAddGroup}
          />,
          document.body
        )}
        
        {/* 캠페인 추가 팝업 */}
        {isCampaignAddPopupOpen && createPortal(
          <CampaignAddPopup
            isOpen={isCampaignAddPopupOpen}
            onConfirm={() => setIsCampaignAddPopupOpen(false)}
            onCancel={() => setIsCampaignAddPopupOpen(false)}
          />,
          document.body
        )}
        
        {/* 캠페인 그룹 삭제 다이얼로그 */}
        {isDeleteDialogOpen && createPortal(
          <CommonDialogForSideMenu
            isOpen={isDeleteDialogOpen}
            onClose={handleCloseDeleteDialog}
            title="캠페인 그룹 삭제"
            description={`정말로 캠페인 그룹 '${node?.name}'을(를) 삭제하시겠습니까?`}
          >
            <div className="space-y-4">
              <p className="text-destructive font-medium">이 작업은 되돌릴 수 없습니다.</p>
              <div className="flex justify-end space-x-2 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCloseDeleteDialog}
                  disabled={isDeleting}
                  className="w-20"
                >
                  취소
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={confirmDelete}
                  disabled={isDeleting}
                  className="w-20"
                >
                  {isDeleting ? "삭제 중..." : "삭제"}
                </Button>
              </div>
            </div>
          </CommonDialogForSideMenu>,
          document.body
        )}
        
        {/* 캠페인 그룹 이름 변경 다이얼로그 */}
        {isRenameDialogOpen && node.group_id !== undefined && createPortal(
          <IDialogForUpdateCampaignGroupName
            isOpen={isRenameDialogOpen}
            onClose={handleCloseRenameDialog}
            groupId={node.group_id}
            tenantId={node?.tenant_id || 0}
            currentGroupName={node?.name || ''}
            onSuccess={handleRenameSuccess}
          />,
          document.body
        )}
      </>
    );
  };

  // 노드 UI 렌더링
  const renderNodeUI = () => (
    <div
      className={getNodeStyle()}
      onClick={handleClick}
      onContextMenu={handleContextMenuEvent}
      style={{ paddingLeft: `${level * 16 + 8}px` }}
    >
      <div className="flex items-center w-full gap-2">
        {hasChildren ? (
          isExpanded ? (
            <Image src="/tree-menu/minus_for_tree.png" alt="접기" width={12} height={12} />
          ) : (
            <Image src="/tree-menu/plus_icon_for_tree.png" alt="펼치기" width={12} height={12} />
          )
        ) : (
          <span className="w-3" />
        )}
        {renderIcon()}
        
        {node.type === "campaign" && node.status && getStatusIcon(node.status) && (
          <div className="flex-shrink-0 w-4 h-4 relative">
            <Image
              src={getStatusIcon(node.status) || ""}
              alt={node.status || "상태"}
              width={16}
              height={16}
              className="object-contain"
            />
          </div>
        )}
        
        <span className={`text-sm ${isSelected ? "font-medium text-555" : "text-555"}`}>
          {node.name}
          {node.type === "campaign" && node.campaign_id && (
            <span className="ml-1 text-xs text-[#555]">
              (ID: {node.campaign_id})
            </span>
          )}
        </span>
      </div>
    </div>
  );

  return (
    <div className="select-none" data-node-type={node.type} data-node-id={node.id}>
      {renderNodeUI()}

      {/* Campaign node context menu */}
      <Menu id={campaignMenuId}>
        <Item
          onClick={() => {
            const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu } = useTabStore.getState();
            simulateHeaderMenuClick(2);
            setCampaignIdForUpdateFromSideMenu(node.campaign_id?.toString() || "");
          }}
        >
          캠페인 수정
        </Item>
        <Item
          onClick={() => {
            const { addMultiTab } = useTabStore.getState();
            const uniqueKey = `monitor-${Date.now()}`;
            addMultiTab({
              id: 22,
              uniqueKey: uniqueKey,
              title: `상담원 상태 모니터 - ${node.name}`,
              icon: '',
              href: '',
              content: null,
              campaignId: node.campaign_id?.toString()
            });
          }}
        >
          캠페인 모니터링
        </Item>
        <Item
          onClick={() => {
            console.log(`캠페인 복사: ${node.name} (ID: ${node.campaign_id})`);
          }}
        >
          캠페인 복사
        </Item>
      </Menu>

      {/* Tenant node context menu */}
      <Menu id={tenantMenuId}>
        <Item
          onClick={() => {
            console.log(`캠페인 그룹 추가: ${node.name}`);
            setIsAddGroupDialogOpen(true);
          }}
        >
          캠페인 그룹 추가
        </Item>
      </Menu>

      {/* Group node context menu */}
      <Menu id={groupMenuId}>
        {getCampaignGroupMenuItems(
          node,
          setIsCampaignAddPopupOpen,
          setIsDeleteDialogOpen,
          setIsRenameDialogOpen
        )}
      </Menu>

      {/* 자식 노드들 렌더링 */}
      {hasChildren && isExpanded && (
        <div className="children-container space-y-1">
          {node.children?.map((child) => (
            <TreeNodeForSideBarCampaignGroupTab
              key={child.id}
              node={child}
              level={level + 1}
              expandedNodes={expandedNodes}
              selectedNodeId={selectedNodeId}
              onNodeToggle={onNodeToggle}
              onNodeSelect={onNodeSelect}
            />
          ))}
        </div>
      )}

      {/* 모든 다이얼로그 렌더링 */}
      {renderAllDialogs()}
    </div>
  );
}