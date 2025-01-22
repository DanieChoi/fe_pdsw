// src/features/campaignManager/types/typeForSidebar2.ts
export interface TenantItem {
  tenant_id: number;
  tenant_name: string;
}

export interface TreeItem {
  id: string;
  label: string;
  type: 'folder' | 'campaign';
  status?: string;
  direction?: 'inbound' | 'outbound';
  children?: TreeItem[];
}

export type FilterType = 'all' | 'active' | 'inactive' | 'inbound' | 'outbound';
export type SortType = 'name' | 'department' | 'memberCount' | 'status';

export interface TabData {
  id: string;
  label: string;
  items: TreeItem[];
  tenants?: TenantItem[];
}