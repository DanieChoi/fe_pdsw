// src/features/campaignManager/components/data/baseTabs.ts
export const baseTabs = [
    { id: 'campaign', label: '캠페인' },
    { id: 'agent', label: '상담원' },
    { id: 'agent-group', label: '캠페인 그룹' }
  ] as const;
  
  export type TabId = typeof baseTabs[number]['id'];