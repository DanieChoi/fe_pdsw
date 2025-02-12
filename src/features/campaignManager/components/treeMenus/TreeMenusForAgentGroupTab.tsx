"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown, MoreVertical } from "lucide-react";
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu";
import { useTabStore } from '@/store/tabStore';

interface TreeNode {
  id: string;
  name: string;
  type: "team" | "agent";
  children?: TreeNode[];
}

const sampleTreeData: TreeNode[] = [
  {
    id: "team-1",
    name: "팀 A",
    type: "team",
    children: [
      { id: "agent-1", name: "상담원 A1", type: "agent" },
      { id: "agent-2", name: "상담원 A2", type: "agent" },
    ],
  },
  {
    id: "team-2",
    name: "팀 B",
    type: "team",
    children: [
      { id: "agent-3", name: "상담원 B1", type: "agent" },
      { id: "agent-4", name: "상담원 B2", type: "agent" },
    ],
  },
];

export function TreeMenusForAgentGroupTab() {
  return (
    <div className="flex-1 overflow-auto p-4 text-gray-600">
      <TreeView data={sampleTreeData} />
    </div>
  );
}

function TreeView({ data }: { data: TreeNode[] }) {
  return (
    <ul className="space-y-1">
      {data.map((node) => (
        <TreeNodeItem key={node.id} node={node} />
      ))}
    </ul>
  );
}

function TreeNodeItem({ node }: { node: TreeNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;
  const { simulateHeaderMenuClick } = useTabStore();

  const handleCounselorInfo = () => {
    simulateHeaderMenuClick(6); // 발신진행상태 메뉴 클릭
  };

  return (
    <li className="ml-2">
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div
            className="flex items-center justify-between space-x-2 cursor-pointer hover:bg-gray-100 p-1 rounded"
            onClick={() => hasChildren && setIsOpen(!isOpen)}
          >
            <div className="flex items-center space-x-2">
              {hasChildren && (
                <span className="w-4 h-4">
                  {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </span>
              )}
              <span className={node.type === "team" ? "font-semibold text-blue-600" : "text-gray-700"}>
                {node.name}
              </span>
            </div>
            <MoreVertical size={16} className="text-gray-400 hover:text-gray-600" />
          </div>
        </ContextMenuTrigger>

        <ContextMenuContent className="w-40 bg-white shadow-md border rounded-md">
          {node.type === "team" ? (
            <>
              <ContextMenuItem onClick={() => console.log(`팀 수정: ${node.name}`)}>팀 수정</ContextMenuItem>
              <ContextMenuItem onClick={() => console.log(`팀 상태 변경: ${node.name}`)}>팀 상태 변경</ContextMenuItem>
            </>
          ) : (
            <>
              <ContextMenuItem onClick={() => console.log(`상담 시작: ${node.name}`)}>상담 시작</ContextMenuItem>
              <ContextMenuItem onClick={() => console.log(`상담 중지: ${node.name}`)}>상담 중지</ContextMenuItem>
              <ContextMenuItem onClick={handleCounselorInfo}>
                상담원 Info
              </ContextMenuItem>
            </>
          )}
        </ContextMenuContent>
      </ContextMenu>

      {hasChildren && isOpen && (
        <ul className="ml-4 border-l border-gray-300 pl-2 space-y-1">
          {node.children?.map((child) => (
            <TreeNodeItem key={child.id} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}