// src/features/campaignManager/types/typeForSidebar2.ts
export interface TenantItem {
  tenant_id: number;
  tenant_name: string;
}

export interface TreeItem {
  id: string;
  label: string;
  type: 'folder' | 'campaign' | 'counselor' | 'team' | 'group';
  status?: string;
  direction?: 'inbound' | 'outbound';
  children?: TreeItem[];
  // 상담원 관련 추가 필드
  affiliationGroupName?: string;
  affiliationTeamName?: string;
  affiliationGroupId?: string;
  affiliationTeamId?: string;
  counselorId?: string;
  blendKind?: string;
  counselorAffiliation?: {
    affiliationDepth: string;
    affiliatedDepartmentId: string;
    affiliatedDepartmentName: string;
  }[];
}

export interface CounselorData {
  centerId: string;
  centerName: string;
  tenantId: string;
  tenantName: string;
  counselorAffiliation: {
    affiliationDepth: string;
    affiliatedDepartmentId: string;
    affiliatedDepartmentName: string;
  }[];
  affiliationGroupId: string;
  affiliationGroupName: string;
  affiliationTeamId: string;
  affiliationTeamName: string;
  counselorId: string;
  counselorname: string;
  blendKind: string;
}

export type FilterType = 'all' | 'active' | 'inactive' | 'inbound' | 'outbound' | 'online' | 'offline';
export type SortType = 'name' | 'department' | 'memberCount' | 'status' | 'team' | 'group';

export interface TabData {
  id: string;
  label: string;
  items: TreeItem[];
  tenants?: TenantItem[];
}