"use client";

import {
  ChevronRight,
  ChevronDown,
  Building,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useState, useEffect, useRef } from "react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";
import { TreeNode } from "@/features/campaignManager/types/typeForCampaignGroupForSideBar";
import AddCampaignGroupDialog from "./dialog/AddCampaignGroupDialog";

interface TreeNodeProps {
  node: TreeNode;
  level: number;
  expandedNodes: Set<string>;
  selectedNodeId?: string;
  onNodeToggle: (nodeId: string) => void;
  onNodeSelect: (nodeId: string) => void;
}

export function TreeNodeForSideBarCampaignGroupTab({
  node,
  level,
  expandedNodes,
  selectedNodeId,
  onNodeToggle,
  onNodeSelect,
}: TreeNodeProps) {
  // 다이얼로그와 컨텍스트 메뉴 상태
  const [isAddGroupDialogOpen, setIsAddGroupDialogOpen] = useState(false);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  // 다이얼로그를 닫았는지 추적하는 ref 추가
  const recentlyClosedDialogRef = useRef(false);
  // ContextMenu를 강제로 닫기 위한 이벤트를 트리거하는 ref
  const contextMenuTriggerRef = useRef<HTMLDivElement>(null);

  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const isSelected = selectedNodeId === node.id;

  // 컨텍스트 메뉴 강제 닫기 함수
  const forceCloseContextMenu = useCallback(() => {
    setIsContextMenuOpen(false);
    
    // 강제로 ESC 키 이벤트를 발생시켜 메뉴 닫기
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    
    // 트리거 요소 밖으로 클릭 이벤트 시뮬레이션
    if (contextMenuTriggerRef.current) {
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      document.body.dispatchEvent(clickEvent);
    }
  }, []);

  // "캠페인 그룹 추가" 메뉴 클릭 시 다이얼로그 열기
  const handleOpenAddGroupDialog = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 메뉴 강제 닫기
    forceCloseContextMenu();
    
    // 약간의 지연 후 다이얼로그 열기
    setTimeout(() => {
      setIsAddGroupDialogOpen(true);
    }, 50);
  }, [forceCloseContextMenu]);

  // 다이얼로그 닫기
  const handleCloseAddGroupDialog = useCallback(() => {
    setIsAddGroupDialogOpen(false);
    // 다이얼로그가 닫혔다고 표시
    recentlyClosedDialogRef.current = true;
    // 일정 시간 후에 플래그 초기화
    setTimeout(() => {
      recentlyClosedDialogRef.current = false;
    }, 300);
  }, []);

  const handleAddGroup = useCallback((groupName: string, groupCode: string) => {
    console.log("새 그룹 추가:", {
      tenantId: node.tenant_id, // node.id 대신 node.tenant_id 사용
      tenantName: node.name,
      groupName,
      groupCode,
    });
  }, [node.tenant_id, node.name]); // 의존성 배열 수정

  // 아이콘 렌더링
  const renderIcon = useCallback(() => {
    switch (node.type?.toLowerCase()) {
      case "root":
        return <Image src="/tree-menu/organization.png" alt="조직" width={14} height={12} />;
      case "tenant":
        return <Image src="/tree-menu/tennant_office.png" alt="테넌트" width={14} height={12} />;
      case "group":
        return <Image src="/tree-menu/group_icon_for_tree.png" alt="그룹" width={15} height={12} />;
      default:
        return <Building className="h-4 w-4 text-gray-500" />;
    }
  }, [node.type]);

  // 노드 클릭 시 선택 및 확장/축소 처리
  const handleClick = useCallback(() => {
    onNodeSelect(node.id);
    if (hasChildren) {
      onNodeToggle(node.id);
    }
  }, [node.id, hasChildren, onNodeSelect, onNodeToggle]);

  // 컨텍스트 메뉴 상태 변경 처리
  const handleContextMenuOpenChange = useCallback((open: boolean) => {
    // 다이얼로그가 최근에 닫힌 경우 컨텍스트 메뉴 열림 방지
    if (open && recentlyClosedDialogRef.current) {
      return;
    }
    setIsContextMenuOpen(open);
  }, []);

  // 메뉴 항목 클릭 처리 함수 (공통)
  const handleMenuItemClick = useCallback((e: React.MouseEvent, action: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 메뉴 강제 닫기
    forceCloseContextMenu();
    
    // 약간의 지연 후 액션 실행
    setTimeout(() => {
      action();
    }, 50);
  }, [forceCloseContextMenu]);

  // 메뉴 항목 렌더링
  const renderMenuItems = useCallback(() => {
    if (node.type === "tenant") {
      return (
        <ContextMenuItem 
          onClick={(e) => handleMenuItemClick(e, () => {
            console.log(`캠페인 그룹 추가: ${node.name}`);
            setIsAddGroupDialogOpen(true);
          })}
        >
          캠페인 그룹 추가
        </ContextMenuItem>
      );
    }
    if (node.type === "group") {
      return (
        <>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`그룹 수정: ${node.name}`))}
          >
            그룹 수정
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`그룹 삭제: ${node.name}`))}
          >
            그룹 삭제
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`그룹 상세 정보: ${node.name}`))}
          >
            그룹 상세 정보
          </ContextMenuItem>
        </>
      );
    }
    return null;
  }, [node.type, node.name, handleMenuItemClick]);

  return (
    <div className="select-none">
      <ContextMenu onOpenChange={handleContextMenuOpenChange}>
        <ContextMenuTrigger asChild>
          <div
            ref={contextMenuTriggerRef}
            className={`flex items-center hover:bg-gray-100 rounded-lg px-2 py-1.5 cursor-pointer transition-colors duration-150 ${
              isSelected ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : ""
            }`}
            onClick={handleClick}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
          >
            <div className="flex items-center w-full gap-2">
              {hasChildren ? (
                isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )
              ) : (
                <span className="w-4" />
              )}
              {renderIcon()}
              <span className={`text-sm ${isSelected ? "font-medium" : ""}`}>
                {node.name}
              </span>
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent 
          className="w-40 bg-white shadow-md border rounded-md"
          onClick={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
        >
          {renderMenuItems()}
        </ContextMenuContent>
      </ContextMenu>

      {hasChildren && isExpanded && (
        <div>
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

      <AddCampaignGroupDialog
        isOpen={isAddGroupDialogOpen}
        onClose={handleCloseAddGroupDialog}
        tenantId={node.tenant_id ? node.tenant_id : 0} // node.id 대신 node.tenant_id 사용
        tenantName={node.name}
        onAddGroup={handleAddGroup}
      />
    </div>
  );
}