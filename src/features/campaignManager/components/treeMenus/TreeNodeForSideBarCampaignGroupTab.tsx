"use client";

import {
  ChevronRight,
  ChevronDown,
  Building,
  Boxes,
  Globe,
  Server,
  UserCircle2
} from "lucide-react";
import Image from "next/image";
import { useCallback, useState, useEffect } from "react";
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu";
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
  // 다이얼로그 상태 추가
  const [isAddGroupDialogOpen, setIsAddGroupDialogOpen] = useState(false);
  // 컨텍스트 메뉴 상태 제어
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const isSelected = selectedNodeId === node.id;

  // 컨텍스트 메뉴 닫기 헬퍼 함수
  const closeContextMenu = useCallback(() => {
    setIsContextMenuOpen(false);
  }, []);

  // 다이얼로그 관련 핸들러
  const handleOpenAddGroupDialog = useCallback((e?: React.MouseEvent | Event) => {
    // 이벤트 전파 방지
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // 메뉴 닫기
    closeContextMenu();
    
    // 지연 후 다이얼로그 열기
    setTimeout(() => {
      setIsAddGroupDialogOpen(true);
    }, 10);
  }, [closeContextMenu]);

  const handleCloseAddGroupDialog = useCallback((e?: React.MouseEvent | React.KeyboardEvent | Event) => {
    // 이벤트 전파 방지
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    setIsAddGroupDialogOpen(false);
  }, []);

  const handleAddGroup = useCallback((groupName: string, groupCode: string) => {
    console.log("새 그룹 추가:", {
      tenantId: node.id,
      tenantName: node.name,
      groupName,
      groupCode
    });
    // 여기서 API 호출을 통해 그룹을 추가할 수 있습니다
  }, [node.id, node.name]);

  // 타입에 따른 아이콘 렌더링
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

  // 클릭 핸들러 (노드 선택 + 확장/축소)
  const handleClick = useCallback(() => {
    onNodeSelect(node.id);
    if (hasChildren) {
      onNodeToggle(node.id);
    }
  }, [node.id, hasChildren, onNodeSelect, onNodeToggle]);

  // ESC 키 이벤트 핸들러 - 컨텍스트 메뉴를 강제로 닫기 위한 이벤트
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isContextMenuOpen) {
        closeContextMenu();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isContextMenuOpen, closeContextMenu]);

  // 노드 타입에 따른 메뉴 항목 렌더링
  const renderMenuItems = useCallback(() => {
    switch (node.type) {
      case "tenant":
        return (
          <>
            <ContextMenuItem 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // 컨텍스트 메뉴 즉시 닫기
                closeContextMenu();
                
                // ESC 키 이벤트를 발생시켜 메뉴를 강제로 닫음
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
                
                // 지연 후 다이얼로그 열기
                setTimeout(() => {
                  handleOpenAddGroupDialog();
                }, 10);
              }}
            >
              캠페인 그룹 추가
            </ContextMenuItem>
          </>
        );
      case "group":
        return (
          <>
            <ContextMenuItem 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // 컨텍스트 메뉴 즉시 닫기
                closeContextMenu();
                
                // ESC 키 이벤트를 발생시켜 메뉴를 강제로 닫음
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
                
                console.log(`그룹 수정: ${node.name}`);
              }}
            >
              그룹 수정
            </ContextMenuItem>
            <ContextMenuItem 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // 컨텍스트 메뉴 즉시 닫기
                closeContextMenu();
                
                // ESC 키 이벤트를 발생시켜 메뉴를 강제로 닫음
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
                
                console.log(`그룹 삭제: ${node.name}`);
              }}
            >
              그룹 삭제
            </ContextMenuItem>
            <ContextMenuItem 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // 컨텍스트 메뉴 즉시 닫기
                closeContextMenu();
                
                // ESC 키 이벤트를 발생시켜 메뉴를 강제로 닫음
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
                
                console.log(`그룹 상세 정보: ${node.name}`);
              }}
            >
              그룹 상세 정보
            </ContextMenuItem>
          </>
        );
      default:
        return null;
    }
  }, [node.name, node.type, closeContextMenu, handleOpenAddGroupDialog]);

  return (
    <div className="select-none">
      <ContextMenu
        onOpenChange={setIsContextMenuOpen}
      >
        <ContextMenuTrigger asChild>
          <div
            className={`flex items-center hover:bg-gray-100 rounded-lg px-2 py-1.5 cursor-pointer transition-colors duration-150
              ${isSelected ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : ""}`}
            onClick={handleClick}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
          >
            <div className="flex items-center w-full gap-2">
              {/* 확장/축소 아이콘 */}
              {hasChildren ? (
                isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )
              ) : (
                <span className="w-4" />
              )}

              {/* 아이콘 */}
              {renderIcon()}

              {/* 노드 라벨 */}
              <span className={`text-sm ${isSelected ? "font-medium" : ""}`}>
                {node.name}
              </span>
            </div>
          </div>
        </ContextMenuTrigger>

        <ContextMenuContent 
          className="w-40 bg-white shadow-md border rounded-md"
          onEscapeKeyDown={(e) => {
            e.preventDefault();
            closeContextMenu();
          }}
          onPointerDownOutside={(e) => {
            e.preventDefault();
            closeContextMenu();
          }}
          onInteractOutside={(e) => {
            e.preventDefault();
            closeContextMenu();
          }}
        >
          {renderMenuItems()}
        </ContextMenuContent>
      </ContextMenu>

      {/* 자식 노드 재귀 렌더링 */}
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

      {/* 다이얼로그 컴포넌트 */}
      <AddCampaignGroupDialog
        isOpen={isAddGroupDialogOpen}
        onClose={handleCloseAddGroupDialog}
        tenantId={node.id}
        tenantName={node.name}
        onAddGroup={handleAddGroup}
      />
    </div>
  );
}