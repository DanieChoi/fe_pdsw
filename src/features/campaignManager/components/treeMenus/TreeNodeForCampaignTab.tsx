"use client";

import { TreeNodeProps } from "@/components/shared/layout/SidebarPresenter";
import { ContextMenuForCampaignForCampaignTab } from "./ContextMenuForCampaignForCampaignTab";
import { FileText } from "lucide-react";
import { useTabStore } from "@/store/tabStore";
import { useCallback } from "react";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { FolderContextMenu } from "./FolderContextMenuForTreeNode";
import Image from "next/image";
import clsx from "clsx";
import { useTreeMenuStore } from "@/store/storeForSsideMenuCampaignTab";
import { useMainStore } from "@/store/mainStore";

export function TreeNodeForCampaignTab({
  item,
  level,
  expandedNodes,
  selectedNodeId,
  getStatusIcon,
  onNodeToggle,
  onNodeSelect,
  compact = false, // 컴팩트 모드 기본값 추가
}: TreeNodeProps) {
  const { skilIdsForCampaignTreeMenu, viewMode } = useTreeMenuStore(); // 통합 스토어 사용
  const { campaigns } = useMainStore(); // Get campaigns from MainStore for real-time status
  const {
    simulateHeaderMenuClick,
    setCampaignIdForUpdateFromSideMenu,
    setCampaignIdForCopyCampaign,
    addTab,
  } = useTabStore();

  // Get the most current status from the campaigns store
  const currentCampaign = campaigns?.find((c: any) => c.campaign_id === Number(item.id));
  const isTenantFolder = item.type === "folder" && level === 1;

  const currentStatus = currentCampaign ? 
    (() => {
      switch (currentCampaign.campaign_status) {
        case 1: return "started";
        case 2: return "pending";
        case 3: return "stopped";
        default: return item.status;
      }
    })() : 
    item.status;

  // Update the item with the current status to ensure it's passed to the ContextMenu
  const updatedItem = {
    ...item,
    status: currentStatus
  };

  // 캠페인 타입이더라도 실제 자식이 있으면 hasChildren을 true로 설정
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedNodes.has(item.id);
  const isSelected = selectedNodeId === item.id;
  const statusIcon = item.type === "campaign" ? getStatusIcon(currentStatus) : null;

  const handleClick = useCallback(() => {
    onNodeSelect(item.id);
    if (hasChildren) {
      onNodeToggle(item.id);
    }
  }, [item.id, hasChildren, onNodeSelect, onNodeToggle]);

  // 우클릭 시 노드 선택을 처리하는 함수 추가
  const handleContextMenu = useCallback(() => {
    onNodeSelect(item.id);
  }, [item.id, onNodeSelect]);

  const handleDoubleClick = useCallback(() => {
    if (item.type !== "campaign") return;
    simulateHeaderMenuClick(2);
    setCampaignIdForUpdateFromSideMenu(item.id);
  }, [item, simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu]);

  const handleEdit = useCallback(() => {
    console.log("Edit clicked:", { id: item.id, label: item.label, type: item.type });
  }, [item.id, item.label, item.type]);
  
  const handleMonitor = useCallback(() => {
    console.log("Monitor clicked:", { id: item.id, label: item.label, type: item.type });
  }, [item.id, item.label, item.type]);
  
  const onHandleCampaignCopy = useCallback(() => {
    console.log("Copy clicked:", { id: item.id, label: item.label, type: item.type });
    setCampaignIdForUpdateFromSideMenu(item.id);
    setCampaignIdForCopyCampaign(item.id);
    addTab({
      id: 130,
      uniqueKey: "130",
      title: "캠페인 복사",
      icon: "",
      href: "",
      content: null,
    });
  }, [item, setCampaignIdForUpdateFromSideMenu, setCampaignIdForCopyCampaign, addTab]);

  // 뷰 모드가 'tenant'이고 item.type이 'campaign'인 경우에 숨김 처리는 삭제
  // 모든 노드 타입이 항상 표시되도록 함

  if (item.visible === false) {
    return null;
  }

  // 아이콘 크기 조정 (컴팩트 모드일 경우 더 작게)
  const iconSize = compact ? 10 : 14;
  const expandIconSize = compact ? 10 : 12;

  // 노드 아이콘 가져오기
  const getNodeIcon = () => {
    if (item.type === "folder") {
      return level === 0 ? (
        <Image
          src="/tree-menu/organization.png"
          alt="조직"
          width={14}
          height={12}
          className="flex-shrink-0"
        />
      ) : (
        <Image
          src="/tree-menu/folder.png"
          alt="그룹"
          width={14}
          height={12}
          className="flex-shrink-0"
        />
      );
    }
    
    if (item.type === "campaign") {
      return statusIcon ? (
        <Image src={statusIcon} alt="status" width={12} height={12} className="flex-shrink-0" />
      ) : (
        <FileText className={`${compact ? 'h-4 w-4' : 'h-4 w-4'} text-gray-400 flex-shrink-0`} />
      );
    }
    
    return <FileText className={`${compact ? 'h-4 w-4' : 'h-4 w-4'} text-gray-400 flex-shrink-0`} />;
  };

  // 노드 클래스 - 컴팩트 모드일 경우 더 작은 패딩 적용
  const nodeStyle = clsx(
    "flex items-center hover:bg-[#FFFAEE] cursor-pointer transition-colors duration-150",
    {
      "bg-[#FFFAEE]": isSelected,
      "px-2 py-0.5": !compact, // 기본 패딩
      "px-1 py-0.5": compact,  // 컴팩트 모드 패딩
    },
    item.type === "folder" ? "folder-node" : "campaign-node",
    "tree-item"
  );

  // 텍스트 스타일 - 컴팩트 모드일 경우 더 작은 폰트
  const textStyle = clsx(
    "text-555 truncate",
    {
      "font-medium": isSelected,
      "text-lg": !compact,
      "text-sm": compact
    },
  );

  // 공통된 노드 내용 컴포넌트
  const nodeContent = (
    <div className="flex items-center w-full gap-1">
      {hasChildren ? (
        isExpanded ? (
          <Image
            src="/tree-menu/minus_for_tree.png"
            alt="접기"
            width={12}
            height={12}
            className="flex-shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              onNodeToggle(item.id);
            }}
          />
        ) : (
          <Image
            src="/tree-menu/plus_icon_for_tree.png"
            alt="펼치기"
            width={12}
            height={12}
            className="flex-shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              onNodeToggle(item.type === "folder-node" && item.id);
            }}
          />
        )
      ) : (
        <span className="w-3" />
      )}
      {getNodeIcon()}
      <span className={textStyle}>
        {item.label}{(isTenantFolder || item.type === "campaign") && ` (${item.id})`}
      </span>
    </div>
  );

  // 레벨 인덴트 계산 - 컴팩트 모드일 경우 더 작은 인덴트
  const indentSize = compact ? 12 : 16;
  const paddingLeft = `${level * indentSize + (compact ? 6 : 8)}px`;

  return (
    <div className="select-none">
      {item.type === "folder" ? (
        <ContextMenu>
          <ContextMenuTrigger>
            <div
              className={nodeStyle}
              onClick={handleClick}
              onContextMenu={handleContextMenu}
              style={{ paddingLeft }}
            >
              {nodeContent}
            </div>
          </ContextMenuTrigger>
          <FolderContextMenu item={item} />
        </ContextMenu>
      ) : (
        <ContextMenuForCampaignForCampaignTab
          item={updatedItem}
          onEdit={handleEdit}
          onMonitor={handleMonitor}
          onHandleCampaignCopy={onHandleCampaignCopy}
        >
          <div
            className={nodeStyle}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            onContextMenu={handleContextMenu}
            style={{ paddingLeft }}
          >
            {nodeContent}
          </div>
        </ContextMenuForCampaignForCampaignTab>
      )}

      {hasChildren && isExpanded && (
        <div className="space-y-0.5">
          {item.children?.map((child: typeof item) => (
            <TreeNodeForCampaignTab
              key={child.id}
              item={child}
              level={level + 1}
              expandedNodes={expandedNodes}
              selectedNodeId={selectedNodeId}
              getStatusIcon={getStatusIcon}
              onNodeToggle={onNodeToggle}
              onNodeSelect={onNodeSelect}
              compact={compact}
            />
          ))}
        </div>
      )}
    </div>
  );
}