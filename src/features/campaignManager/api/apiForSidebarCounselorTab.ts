// C:\Users\terec\fe_pdsw\src\features\campaignManager\api\apiForSidebarCounselorTab2.ts
import { MainCredentials2 } from "@/features/auth/types/mainIndex";
import { axiosInstance, axiosRedisInstance } from "@/lib/axios";
import { Counselor, CounselorNode, GroupNode, TabData, TeamNode, TenantNode } from "../types/typeForSideBarCounselorTab";

export async function apiForTreeMenuDataForSimeBarCounselorTab(credentials: MainCredentials2) {
  const { tenant_id, roleId } = credentials;
  const response = await axiosRedisInstance.get(
    `v1/counselor/list?tenantId=${tenant_id}&roleId=${roleId}`
  );
  return response.data;
}

export async function apiToFetchCounselorTreeData(credentials: MainCredentials2): Promise<TabData[]> {
  interface CounselorResponse {
    counselorList: Counselor[];
  }
 
  const { counselorList } = await apiForTreeMenuDataForSimeBarCounselorTab({
    tenant_id: 1,
    roleId: 6
  }) as CounselorResponse || { counselorList: [] };
 
  const tenantMap = new Map<string, TenantNode>();
  const groupMap = new Map<string, GroupNode>();
  const teamMap = new Map<string, TeamNode>();
 
  counselorList.forEach((counselor: Counselor) => {
    if (!tenantMap.has(counselor.tenantId)) {
      tenantMap.set(counselor.tenantId, {
        id: counselor.tenantId,
        label: counselor.tenantName,
        type: 'tenant' as const,
        children: []
      });
    }
 
    if (!groupMap.has(counselor.affiliationGroupId)) {
      const group: GroupNode = {
        id: counselor.affiliationGroupId,
        label: counselor.affiliationGroupName,
        type: 'group' as const,
        children: []
      };
      groupMap.set(counselor.affiliationGroupId, group);
      tenantMap.get(counselor.tenantId)!.children.push(group);
    }
 
    if (!teamMap.has(counselor.affiliationTeamId)) {
      const team: TeamNode = {
        id: counselor.affiliationTeamId,
        label: counselor.affiliationTeamName,
        type: 'team' as const,
        children: []
      };
      teamMap.set(counselor.affiliationTeamId, team);
      groupMap.get(counselor.affiliationGroupId)!.children.push(team);
    }
 
    const counselorNode: CounselorNode = {
      id: counselor.counselorId,
      label: counselor.counselorname,
      type: 'counselor' as const,
      tenantId: counselor.tenantId
    };
    
    teamMap.get(counselor.affiliationTeamId)!.children.push(counselorNode);
  });
 
  return [{
    id: 'agent',
    label: '상담원',
    items: [...tenantMap.values()]
  }];
 }