// types/window.d.ts
import type { TreeItem } from "@/features/campaignManager/types/typeForSidebar2"; // ← 필요 시 추가

export {};

declare global {
  interface Window {
    treeExpandNodes?: (nodes: Set<string>) => void;
    getTreeItems?: () => TreeItem[];
    setTreeItems?: (items: TreeItem[]) => void;
    treeGetSelectedNodeId?: () => string | undefined;
    treeSetSelectedNodeId?: (id?: string) => void;
    treeGetExpandedNodes?: () => Set<string>;
    treeSetExpandedNodes?: (nodes: Set<string>) => void;
    treeForceUpdate?: () => void;
    expandTenantsOnly?: () => void;
    expandAllNodes?: () => void;

    // ✅ 직접 삭제 처리용 추가
    originalTreeItems?: TreeItem[];
  }
}
