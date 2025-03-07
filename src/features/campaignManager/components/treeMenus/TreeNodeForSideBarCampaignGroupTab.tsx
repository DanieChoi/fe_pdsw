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
import { useCallback } from "react";
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu";
import { TreeNode } from "@/features/campaignManager/types/typeForCampaignGroupForSideBar";

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
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const isSelected = selectedNodeId === node.id;

  // 타입에 따른 아이콘 렌더링
  const renderIcon = () => {
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
  };

  // 클릭 핸들러 (노드 선택 + 확장/축소)
  const handleClick = useCallback(() => {
    onNodeSelect(node.id);
    if (hasChildren) {
      onNodeToggle(node.id);
    }
  }, [node.id, hasChildren, onNodeSelect, onNodeToggle]);

  // 노드 타입에 따른 메뉴 항목 렌더링
  const renderMenuItems = () => {
    switch (node.type) {
      case "root":
        return (
          <>
            {/* <ContextMenuItem onClick={() => console.log(`조직 정보: ${node.name}`)}>
              조직 정보
            </ContextMenuItem>
            <ContextMenuItem onClick={() => console.log(`조직 설정: ${node.name}`)}>
              조직 설정
            </ContextMenuItem> */}
          </>
        );
      case "tenant":
        return (
          <>
            {/* <ContextMenuItem onClick={() => console.log(`테넌트 정보: ${node.name}`)}>
              테넌트 정보
            </ContextMenuItem>
            <ContextMenuItem onClick={() => console.log(`테넌트 설정: ${node.name}`)}>
              테넌트 설정
            </ContextMenuItem> */}
            <ContextMenuItem onClick={() => console.log(`그룹 추가: ${node.name}`)}>
              캠페인 그룹 추가
            </ContextMenuItem>
          </>
        );
      case "group":
        return (
          <>
            <ContextMenuItem onClick={() => console.log(`그룹 수정: ${node.name}`)}>
              그룹 수정
            </ContextMenuItem>
            <ContextMenuItem onClick={() => console.log(`그룹 삭제: ${node.name}`)}>
              그룹 삭제
            </ContextMenuItem>
            <ContextMenuItem onClick={() => console.log(`그룹 상세 정보: ${node.name}`)}>
              그룹 상세 정보
            </ContextMenuItem>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="select-none">
      <ContextMenu>
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

        <ContextMenuContent className="w-40 bg-white shadow-md border rounded-md">
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
    </div>
  );
}