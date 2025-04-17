/// File: src/features/campaignManager/utils/treeUtils.ts
import { TreeItem } from "@/features/campaignManager/types/typeForSidebar2";

/**
 * 주어진 campaignId와 일치하는 캠페인 노드를 트리에서 제거합니다.
 */
export function removeNodeByCampaignId(
  items: TreeItem[],
  campaignId: number
): TreeItem[] {
  return items.reduce<TreeItem[]>((acc, item) => {
    // campaign 노드이면서 id가 일치하면 제외
    if (item.type === 'campaign' && Number(item.id) === campaignId) {
      return acc;
    }
    // 자식이 있으면 재귀적으로 처리
    let newChildren: TreeItem[] | undefined;
    if (item.children) {
      newChildren = removeNodeByCampaignId(item.children, campaignId);
    }
    acc.push({ ...item, children: newChildren });
    return acc;
  }, []);
}

/**
 * 주어진 campaignId와 일치하는 캠페인 노드를 찾아 updateFields로 업데이트합니다.
 */
export function updateNodeByCampaignId(
  items: TreeItem[],
  campaignId: number,
  updateFields: Partial<TreeItem>
): TreeItem[] {
  return items.map(item => {
    // campaign 노드이면서 id가 일치하면 필드 머징
    if (item.type === 'campaign' && Number(item.id) === campaignId) {
      return { ...item, ...updateFields };
    }
    // 자식이 있으면 재귀적으로 처리
    if (item.children) {
      return { ...item, children: updateNodeByCampaignId(item.children, campaignId, updateFields) };
    }
    return item;
  });
}
