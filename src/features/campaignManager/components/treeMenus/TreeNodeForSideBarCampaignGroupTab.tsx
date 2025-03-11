"use client";

import {
  ChevronRight,
  ChevronDown,
  Building,
  MessageSquare,
  FileText,
  BarChart3,
  Megaphone,
  Briefcase,
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
import { useTabStore } from "@/store/tabStore";

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
  // 다이얼로그와 컨텍스트 메뉴 상태
  const [isAddGroupDialogOpen, setIsAddGroupDialogOpen] = useState(false);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  // 다이얼로그를 닫았는지 추적하는 ref 추가
  const recentlyClosedDialogRef = useRef(false);
  // ContextMenu를 강제로 닫기 위한 이벤트를 트리거하는 ref
  const contextMenuTriggerRef = useRef<HTMLDivElement>(null);

  // useTabStore 훅에서 addTab 함수 가져오기
  const { addTab } = useTabStore();

  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const isSelected = selectedNodeId === node.id;

  // 디버깅용 로그 추가
  useEffect(() => {
    if (node.type === "group" && hasChildren) {
      console.log(`그룹 노드 ${node.name}에 캠페인 ${node.children?.length}개 있음, 확장 상태: ${isExpanded}`);
    }
  }, [node, hasChildren, isExpanded]);

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
      case "campaign":
        // 캠페인 노드일 경우, 기본 아이콘 반환
        return <span></span>;
      default:
        return <Building className="h-4 w-4 text-gray-500" />;
    }
  }, [node.type]);

  // 노드 클릭 시 선택 및 확장/축소 처리
  const handleClick = useCallback(() => {
    onNodeSelect(node.id);

    // 무조건 확장/축소 토글 (자식이 있는 모든 노드 타입에 대해)
    if (hasChildren) {
      console.log(`노드 클릭 (타입: ${node.type}, ID: ${node.id}), 자식 수: ${node.children?.length}`);
      onNodeToggle(node.id);
    }
  }, [node.id, node.type, hasChildren, node.children?.length, onNodeSelect, onNodeToggle]);

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
            onClick={(e) => handleMenuItemClick(e, () => {
              console.log(`캠페인 그룹 일괄 수정: ${node.name}`);
              // 탭 스토어에서 새 탭 추가 함수를 가져와서 호출
              // 여기에 탭 스토어의 addTab 함수를 import하고 사용해야 함
              // 예: addTab({ id: 700, title: `캠페인 그룹 일괄 수정: ${node.name}`, groupId: node.id, groupName: node.name });

              // useTabStore에서 addTab 함수를 가져와 사용
              addTab({
                id: 700,
                title: `캠페인 그룹 일괄 수정: ${node.name}`,
                uniqueKey: `groupBulkUpdate_${node.id}`,
                params: {
                  groupId: node.id,
                  groupName: node.name
                }
              });
            })}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            캠페인 그룹 일괄 수정
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`캠페인 그룹 일괄 시작: ${node.name}`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            캠페인 그룹 일괄 시작
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`캠페인 그룹 일괄 완료: ${node.name}`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            캠페인 그룹 일괄 완료
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`캠페인 그룹 일괄 중지: ${node.name}`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            캠페인 그룹 일괄 중지
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`캠페인 그룹 이름 변경: ${node.name}`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            캠페인 그룹 이름 변경
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`캠페인 그룹 삭제: ${node.name}`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            캠페인 그룹 삭제
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`캠페인 그룹에 캠페인 추가: ${node.name}`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            캠페인 그룹에 캠페인 추가
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`캠페인 그룹 실시간 재발신: ${node.name}`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            캠페인 그룹 실시간 재발신
          </ContextMenuItem>
        </>
      );
    }
    if (node.type === "campaign") {
      return (
        <>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`캠페인 수정: ${node.name} (ID: ${node.campaign_id})`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            캠페인 수정
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`시작 그룹: ${node.name} (ID: ${node.campaign_id})`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            시작 그룹
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`캠페인 진행 정보: ${node.name} (ID: ${node.campaign_id})`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            캠페인 진행 정보
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`실시간 재발신: ${node.name} (ID: ${node.campaign_id})`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            실시간 재발신
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`예약 재발신: ${node.name} (ID: ${node.campaign_id})`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            예약 재발신
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`캠페인 삭제: ${node.name} (ID: ${node.campaign_id})`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            캠페인 삭제
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`캠페인 복사: ${node.name} (ID: ${node.campaign_id})`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            캠페인 복사
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`캠페인 리스트 삭제: ${node.name} (ID: ${node.campaign_id})`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            캠페인 리스트 삭제
          </ContextMenuItem>
          <ContextMenuItem
            onClick={(e) => handleMenuItemClick(e, () => console.log(`캠페인 그룹에서 삭제: ${node.name} (ID: ${node.campaign_id})`))}
            className="flex items-center whitespace-nowrap"
          >
            <FileText className="mr-2 h-4 w-4" />
            캠페인 그룹에서 삭제
          </ContextMenuItem>
        </>
      );
    }
    return null;
  }, [node.type, node.name, node.campaign_id, handleMenuItemClick, setIsAddGroupDialogOpen]);

  // 노드의 스타일 결정
  const getNodeStyle = useCallback(() => {
    let baseStyle = `flex items-center hover:bg-gray-100 rounded-lg px-2 py-1.5 cursor-pointer transition-colors duration-150`;

    // 선택된 노드는 배경색 변경
    if (isSelected) {
      baseStyle += " bg-blue-50 text-blue-600 hover:bg-blue-100";
    }

    // 노드 타입에 따라 추가 스타일 적용
    if (node.type === "campaign") {
      baseStyle += isSelected ? "" : " text-green-600"; // 캠페인 노드에 초록색 텍스트 적용 (선택된 경우 제외)
    }

    return baseStyle;
  }, [isSelected, node.type]);

  return (
    <div className="select-none" data-node-type={node.type} data-node-id={node.id}>
      <ContextMenu onOpenChange={handleContextMenuOpenChange}>
        <ContextMenuTrigger asChild>
          <div
            ref={contextMenuTriggerRef}
            className={getNodeStyle()}
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
              
              {/* 캠페인 노드인 경우 상태 아이콘 표시 */}
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
              
              <span className={`text-sm ${isSelected ? "font-medium" : ""}`}>
                {node.name}
                {node.type === "campaign" && node.campaign_id && (
                  <span className="ml-1 text-xs text-gray-500">
                    (ID: {node.campaign_id})
                  </span>
                )}
              </span>
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent
          className="w-62 bg-white shadow-md border rounded-md"
          onClick={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
        >
          {renderMenuItems()}
        </ContextMenuContent>
      </ContextMenu>

      {/* 확장된 상태일 때만 자식 노드 렌더링 */}
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