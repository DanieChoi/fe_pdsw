// src/features/campaignManager/types/typeForSidebar2.ts
export interface TenantItem {
    tenant_id: number;
    tenant_name: string;
  }
  
  export interface TreeItem {
    id: string;
    label: string;
    type: 'group' | 'team' | 'counselor' | 'folder' | 'campaign' | 'tenant' | 'center';  // 'tenant'와 'center' 추가
    children?: TreeItem[];
    tenantId?: string;
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
  }
  
  export interface Counselor {
    tenantId: string;
    tenantName: string;
    affiliationGroupId: string;
    affiliationGroupName: string;
    affiliationTeamId: string;
    affiliationTeamName: string;
    counselorId: string;
    counselorname: string;
  }
  
  export interface TenantNode {
    id: string;
    label: string;
    type: 'tenant';
    children: Map<string, GroupNode>;
  }
  
  export interface GroupNode {
    id: string;
    label: string;
    type: 'group';
    children: Map<string, TeamNode>;
  }
  
  export interface TeamNode {
    id: string;
    label: string;
    type: 'team';
    children: TreeItem[];
  }