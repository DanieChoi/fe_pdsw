"use client";

import { TreeNodeProps } from "@/components/shared/layout/SidebarPresenter";
import { ContextMenuForTreeNode } from "./ContextMenuForTreeNode";
import { FileText } from "lucide-react";
import { useTabStore } from "@/store/tabStore";
import { useCallback } from "react";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { FolderContextMenu } from "./FolderContextMenuForTreeNode";
import Image from "next/image";
import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";
import clsx from "clsx";

export function TreeNode({
  item,
  level,
  expandedNodes,
  selectedNodeId,
  getStatusIcon,
  onNodeToggle,
  onNodeSelect,
}: TreeNodeProps) {
  const { skilIdsForCampaignTreeMenu } = useSideMenuCampaignTabStore();
  // 신버젼에서는 simulateHeaderMenuClick, setCampaignIdForCopyCampaign 대신 openTabV2 사용
  // const { setCampaignIdForUpdateFromSideMenu, openTabV2, addTab } = useTabStore();
  const { setCampaignIdForUpdateFromSideMenu, openTabV2, addTab, setCampaignIdForCopyCampaign } = useTabStore();


  // 캠페인 타입일 경우 hasChildren은 항상 false 처리
  const hasChildren = item.type === "campaign" ? false : (item.children && item.children.length > 0);
  const isExpanded = expandedNodes.has(item.id);
  const isSelected = selectedNodeId === item.id;
  const statusIcon = item.type === "campaign" ? getStatusIcon(item.status) : null;

  const handleClick = useCallback(() => {
    onNodeSelect(item.id);
    if (hasChildren) {
      onNodeToggle(item.id);
    }
  }, [item.id, hasChildren, onNodeSelect, onNodeToggle]);

  // 우클릭 시 노드 선택
  const handleContextMenu = useCallback(() => {
    onNodeSelect(item.id);
  }, [item.id, onNodeSelect]);

  // 더블 클릭 시 캠페인 수정 탭을 여는 동작 (신버젼 openTabV2 사용)
  const handleDoubleClick = useCallback(() => {
    if (item.type !== "campaign") return;
    openTabV2(2, "캠페인 수정", { campaignId: item.id, campaignName: item.label });
  }, [item, openTabV2]);

  if (item.visible === false) {
    return null;
  }

  const getNodeIcon = () => {
    if (item.type === "folder") {
      return level === 0 ? (
        <Image
          src="/tree-menu/organization.png"
          alt="조직"
          width={14}
          height={12}
        />
      ) : (
        <Image
          src="/tree-menu/folder.png"
          alt="그룹"
          width={14}
          height={12}
        />
      );
    }
    
    if (item.type === "campaign") {
      return statusIcon ? (
        <Image src={statusIcon} alt="status" width={12} height={12} />
      ) : (
        <FileText className="h-4 w-4 text-gray-400" />
      );
    }
    
    return <FileText className="h-4 w-4 text-gray-400" />;
  };

  const handleEdit = () => {
    console.log("Edit clicked:", { id: item.id, label: item.label, type: item.type });
  };

  const handleMonitor = () => {
    console.log("Monitor clicked:", { id: item.id, label: item.label, type: item.type });
  };

  // 캠페인 복사 시 openTabV2를 사용
  // const onHandleCampaignCopy = () => {
  //   console.log("Copy clicked:", { id: item.id, label: item.label, type: item.type });
  //   openTabV2(130, "캠페인 복사", { campaignId: item.id });
  // };

  // const onHandleCampaignCopy = () => {
  //   console.log("Copy clicked:", { id: item.id, label: item.label, type: item.type });
  //   // openTabV2(130, "캠페인 복사", { campaignId: item.id });
  //   openTabV2(130, "캠페인 복사", {
  //     campaignId: item.id,
  //     campaignName: item.label,
  //   });
    
  // };
  const onHandleCampaignCopy = () => {
    console.log("Copy clicked:", { id: item.id, label: item.label, type: item.type });
    // Set the campaign ID for copying
    setCampaignIdForCopyCampaign(item.id.toString());
    
    // Then open the tab
    openTabV2(130, "캠페인 복사", {
      campaignId: item.id,
      campaignName: item.label,
    });
  }

  const nodeStyle = clsx(
    "flex items-center hover:bg-[#FFFAEE] px-2 py-0.5 cursor-pointer transition-colors duration-150",
    {
      "bg-[#FFFAEE]": isSelected,
    }
  );

  const nodeContent = (
    <div className="flex items-center w-full gap-2">
      {hasChildren ? (
        isExpanded ? (
          <Image
            src="/tree-menu/minus_for_tree.png"
            alt="접기"
            width={12}
            height={12}
          />
        ) : (
          <Image
            src="/tree-menu/plus_icon_for_tree.png"
            alt="펼치기"
            width={12}
            height={12}
          />
        )
      ) : (
        <span className="w-3" />
      )}
      {getNodeIcon()}
      <span className={clsx("text-sm text-555", { "font-medium": isSelected })}>
        {item.label}
      </span>
    </div>
  );

  return (
    <div className="select-none">
      {item.type === "folder" ? (
        <ContextMenu>
          <ContextMenuTrigger>
            <div
              className={nodeStyle}
              onClick={handleClick}
              onContextMenu={handleContextMenu}
              style={{ paddingLeft: `${level * 16 + 8}px` }}
            >
              {nodeContent}
            </div>
          </ContextMenuTrigger>
          <FolderContextMenu item={item} />
        </ContextMenu>
      ) : (
        <ContextMenuForTreeNode
          item={item}
          onEdit={handleEdit}
          onMonitor={handleMonitor}
          onHandleCampaignCopy={onHandleCampaignCopy}
        >
          <div
            className={nodeStyle}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            onContextMenu={handleContextMenu}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
          >
            {nodeContent}
          </div>
        </ContextMenuForTreeNode>
      )}

      {hasChildren && isExpanded && (
        <div className="space-y-1">
          {item.children?.map((child: typeof item) => (
            <TreeNode
              key={child.id}
              item={child}
              level={level + 1}
              expandedNodes={expandedNodes}
              selectedNodeId={selectedNodeId}
              getStatusIcon={getStatusIcon}
              onNodeToggle={onNodeToggle}
              onNodeSelect={onNodeSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
