// src\features\campaignManager\components\treeMenus\TreeNodeForSideBarCampaignGroupTab.tsx
"use client";

import { Building } from "lucide-react";
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
import { IContextMenuForCampaignForCampaignGroup, CampaignStatus } from "./ContextMenus/IContextMenuForCampaignForCampaignGroup";

interface TreeNodeProps {
  node: TreeNode;
  level: number;
  expandedNodes: Set<string>;
  selectedNodeId?: string;
  onNodeToggle: (nodeId: string) => void;
  onNodeSelect: (nodeId: string) => void;
}

const getStatusIcon = (status?: number) => {
  switch (status) {
    case 1:
      return '/sidebar-menu/tree_play.svg';
    case 2:
      return '/sidebar-menu/tree_pause.svg';
    case 3:
      return '/sidebar-menu/tree_stop.svg';
    default:
      return null;
  }
};

// TreeNode의 start_flag를 CampaignStatus로 변환하는 함수
const getStatusFromFlag = (flag?: number): CampaignStatus => {
  switch (flag) {
    case 1: return 'started';
    case 2: return 'pending';
    case 3: return 'stopped';
    default: return 'stopped';
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

  // 컨텍스트 메뉴 ID (캠페인 타입이 아닌 경우만 사용)
  const tenantMenuId = `tenant-menu-${node.id}`;
  const groupMenuId = `group-menu-${node.id}`;

  // 컨텍스트 메뉴 훅 (캠페인 타입이 아닌 경우만 사용)
  const { show: showTenantMenu } = useContextMenu({ id: tenantMenuId });
  const { show: showGroupMenu } = useContextMenu({ id: groupMenuId });

  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const isSelected = selectedNodeId === node.id;

  // 디버깅용 로그
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

    // 캠페인 타입은 새로운 컨텍스트 메뉴 컴포넌트로 처리하므로 여기서는 제외
    if (node.type === "tenant") {
      showTenantMenu({ event: e });
    } else if (node.type === "group") {
      showGroupMenu({ event: e });
    }
  };

  const handleCloseAddGroupDialog = useCallback(() => {
    setIsAddGroupDialogOpen(false);
    recentlyClosedDialogRef.current = true;
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
    // 필요한 경우 리렌더링이나 데이터 갱신 로직 추가
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

  // 노드 스타일 계산
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
        return <span></span>;
      default:
        return <Building className="h-4 w-4 text-gray-500" />;
    }
  }, [node.type]);

  // 모든 대화상자 렌더링
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
            groupId={node.group_id || 0}
            groupName={node.name || ''}
            onClose={() => setIsCampaignAddPopupOpen(false)}
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
      onContextMenu={node.type === "campaign" ? undefined : handleContextMenuEvent}
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

        <span className={`flex text-sm ${isSelected ? "font-medium text-555" : "text-555"}`}>
          {getStatusIcon(node.start_flag) && <Image src={getStatusIcon(node.start_flag) || ''} alt="상태" width={12} height={12} className="mr-1"/>}
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

  // 캠페인 관련 핸들러 함수들
  const handleEditCampaign = useCallback(() => {
    const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu } = useTabStore.getState();
    simulateHeaderMenuClick(2);
    setCampaignIdForUpdateFromSideMenu(node.campaign_id?.toString() || "");
  }, [node.campaign_id]);

  const handleMonitorCampaign = useCallback(() => {
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
  }, [node.name, node.campaign_id]);

  const handleCopyCampaign = useCallback(() => {
    console.log(`캠페인 복사: ${node.name} (ID: ${node.campaign_id})`);
    toast.info("캠페인 복사 기능이 준비 중입니다.");
  }, [node.name, node.campaign_id]);

  // 노드 유형에 따라 적절한 렌더링 방식 결정
  const renderNodeWithProperContextMenu = () => {
    // 캠페인 노드인 경우 새로운 컨텍스트 메뉴 컴포넌트 사용
    if (node.type === "campaign") {

      console.log("캠페인 node : ");
      

      // TreeNode를 ContextMenuForTreeNodeProps.item으로 변환
      const campaignItem = {
        id: node.campaign_id,
        label: node.name,
        type: node.type,
        status: getStatusFromFlag(node.start_flag)
      };

      return (
        <IContextMenuForCampaignForCampaignGroup
          item={campaignItem}
          onEdit={handleEditCampaign}
          onMonitor={handleMonitorCampaign}
          onHandleCampaignCopy={handleCopyCampaign}
        >
          {renderNodeUI()}
        </IContextMenuForCampaignForCampaignGroup>
      );
    }
    // 그 외 노드는 기존 방식 그대로 사용
    return renderNodeUI();
  };

  return (
    <div className="select-none" data-node-type={node.type} data-node-id={node.id}>
      {renderNodeWithProperContextMenu()}

      {/* 테넌트 노드 컨텍스트 메뉴 */}
      <Menu id={tenantMenuId} className="compact-menu">
        <Item
          onClick={() => {
            console.log(`캠페인 그룹 추가: ${node.name}`);
            setIsAddGroupDialogOpen(true);
          }}
          style={{ color: "#0070F3", fontSize: "14px" }}
        >
          캠페인 그룹 추가
        </Item>
      </Menu>

      {/* 그룹 노드 컨텍스트 메뉴 */}
      <Menu id={groupMenuId} className="compact-menu">
        {getCampaignGroupMenuItems(
          node,
          setIsCampaignAddPopupOpen,
          setIsDeleteDialogOpen,
          setIsRenameDialogOpen
        )}
      </Menu>

      {/* 자식 노드 렌더링 */}
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

      <style jsx>{`
        .compact-menu {
          font-size: 20px;
          padding: 4px;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .compact-menu .react-contexify__item {
          padding: 4px 8px;
          min-height: auto;
          transition: background-color 0.2s ease;
        }
        .compact-menu .react-contexify__item:hover {
          background-color: #f3f3f3;
        }
      `}</style>
    </div>
  );
}