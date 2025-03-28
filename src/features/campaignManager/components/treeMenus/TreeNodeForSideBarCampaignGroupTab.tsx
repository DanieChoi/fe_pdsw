"use client";

import { Building } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { Menu, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { TreeNode } from "@/features/campaignManager/types/typeForCampaignGroupForSideBar";
import AddCampaignGroupDialog from "./dialog/AddCampaignGroupDialog";
import { useTabStore } from "@/store/tabStore";
import { useCampainManagerStore } from '@/store/campainManagerStore';
import CampaignAddPopup from '@/features/campaignManager/components/popups/CampaignAddPopup';
import { createPortal } from "react-dom";
import IDialogForUpdateCampaignGroupName from "./dialog/IDialogForUpdateCampaignGroupName";
import { toast } from "react-toastify";
import { useApiForDeleteCampaignGroup } from "@/features/campaignManager/hooks/useApiForDeleteCampaignGroup";
import { IContextMenuForCampaignForCampaignGroup, CampaignStatus } from "./ContextMenus/IContextMenuForCampaignForCampaignGroup";
import IContextMenuForCampaignGroupAtCampaignGroup from "./ContextMenus/IContextMenuForCampaignGroupAtCampaignGroup";
import IContextMenuForTenantAtCampaignGroup from "./ContextMenus/IContextMenuForTenantAtCampaignGroup";
import { useSideMenuCampaignGroupTabStore } from "@/store/storeForSideMenuCampaignGroupTab";
import IDialogButtonForDeleteCampaignGroup from "@/widgets/sidebar/dialogs/IDialogButtonForDeleteCampaignGroup";

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
  const [isAddGroupDialogOpen, setIsAddGroupDialogOpen] = useState(false);
  const [isCampaignAddPopupOpen, setIsCampaignAddPopupOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false);
  const recentlyClosedDialogRef = useRef(false);
  const { refetchTreeDataForCampaignGroupTab } = useSideMenuCampaignGroupTabStore();
  const { setCampaignGroupManagerInit } = useCampainManagerStore();

  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const { mutate: deleteCampaignGroup, isPending: isDeleting } = useApiForDeleteCampaignGroup({
    onSuccess: () => {
      toast.success("캠페인 그룹이 삭제되었습니다.");
      setIsDeleteDialogOpen(false);
      refetchTreeDataForCampaignGroupTab();
      setCampaignGroupManagerInit(true);
    },
    onError: (error) => {
      alert(`캠페인 그룹 삭제 실패: ${error.message}`);
    }
  });

  const tenantMenuId = `tenant-menu-${node.id}`;
  const groupMenuId = `group-menu-${node.id}`;

  const { show: showTenantMenu } = useContextMenu({ id: tenantMenuId });
  const { show: showGroupMenu } = useContextMenu({ id: groupMenuId });

  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const isSelected = selectedNodeId === node.id;

  useEffect(() => {
    if (node.type === "group" && hasChildren) {
      console.log(`그룹 노드 ${node.name}에 캠페인 ${node.children?.length}개 있음, 확장 상태: ${isExpanded}`);
    }
  }, [node, hasChildren, isExpanded]);

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
      setCampaignGroupManagerInit(true);
    }, 300);
  }, []);

  // 캠페인 이름 수정 후 리패치 처리
  const handleCloseRenameDialog = useCallback(async () => {
    setIsRenameDialogOpen(false);
    recentlyClosedDialogRef.current = true;
    setTimeout(() => {
      recentlyClosedDialogRef.current = false;
    }, 300);
    setCampaignGroupManagerInit(true);
    await refetchTreeDataForCampaignGroupTab();
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

  const renderAllDialogs = () => {
    if (!isBrowser) return null;

    return (
      <>
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

        {isCampaignAddPopupOpen && createPortal(
          <CampaignAddPopup
            isOpen={isCampaignAddPopupOpen}
            groupId={node.group_id || 0}
            groupName={node.name || ''}
            onClose={() => setIsCampaignAddPopupOpen(false)}
          />,
          document.body
        )}

        {isDeleteDialogOpen && createPortal(
          <IDialogButtonForDeleteCampaignGroup
            isOpen={isDeleteDialogOpen}
            groupName={node.name}
            onCancel={handleCloseDeleteDialog}
            onDelete={confirmDelete}
            isDeleting={isDeleting}
          />,
          document.body
        )}

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
          {getStatusIcon(node.start_flag) && <Image src={getStatusIcon(node.start_flag) || ''} alt="상태" width={12} height={12} className="mr-1" />}
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

  const renderNodeWithProperContextMenu = () => {
    if (node.type === "campaign") {
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
    return renderNodeUI();
  };

  return (
    <div className="select-none" data-node-type={node.type} data-node-id={node.id}>
      {renderNodeWithProperContextMenu()}

      {/* 테넌트 노드 컨텍스트 메뉴 */}
      <Menu id={tenantMenuId} className="compact-menu">
        <IContextMenuForTenantAtCampaignGroup
          nodeName={node.name}
          onAddGroup={() => setIsAddGroupDialogOpen(true)}
        />
      </Menu>

      {/* 그룹 노드 컨텍스트 메뉴 */}
      <Menu id={groupMenuId} className="compact-menu">
        <IContextMenuForCampaignGroupAtCampaignGroup
          node={node}
          setIsCampaignAddPopupOpen={setIsCampaignAddPopupOpen}
          setIsDeleteDialogOpen={setIsDeleteDialogOpen}
          setIsRenameDialogOpen={setIsRenameDialogOpen}
        />
      </Menu>

      {hasChildren && isExpanded && (
        <div className="children-container">
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
