// C:\nproject\fe_pdsw\src\features\campaignManager\api\apiForSidebarCounselorTab.ts

import { MainCredentials2 } from "@/features/auth/types/mainIndex";
import { axiosInstance } from "@/lib/axios";
import { TreeItem } from "../types/typeForSidebar2";
import { Counselor, GroupNode, TabData, TeamNode, TenantNode } from "../types/typeForSideBarCounselorTab";

export async function apiForTreeMenuDataForSimeBarCounselorTab(credentials: MainCredentials2) {
  const { tenant_id, roleId } = credentials;
  const response = await axiosInstance.get(
    `/counselor/list?tenantId=${tenant_id}&roleId=${roleId}`
  );
  return response.data;  
}

export async function apiToFetchCounselorTreeData(credentials: MainCredentials2): Promise<TabData[]> {
    //   const counselorData = await apiForTreeMenuDataForSimeBarCounselorTab(credentials);
      const counselorData = await apiForTreeMenuDataForSimeBarCounselorTab({
        tenant_id: 1,
        roleId: 6
      });
    
      console.log("counselorData from fetch: ", counselorData);
    
      if (!counselorData?.counselorList) {
        return [];
      }
    
      // tenant별로 데이터 그룹화
      const tenantMap = new Map<string, TenantNode>();
      counselorData.counselorList.forEach((counselor: Counselor) => {
        if (!tenantMap.has(counselor.tenantId)) {
          tenantMap.set(counselor.tenantId, {
            id: counselor.tenantId,
            label: counselor.tenantName,
            type: 'tenant',
            children: new Map<string, GroupNode>()
          });
        }
    
        const tenantGroup = tenantMap.get(counselor.tenantId)!;
        const groupId = counselor.affiliationGroupId;
    
        // 그룹 추가
        if (!tenantGroup.children.has(groupId)) {
          tenantGroup.children.set(groupId, {
            id: groupId,
            label: counselor.affiliationGroupName,
            type: 'group',
            children: new Map<string, TeamNode>()
          });
        }
    
        const group = tenantGroup.children.get(groupId)!;
        const teamId = counselor.affiliationTeamId;
    
        // 팀 추가
        if (!group.children.has(teamId)) {
          group.children.set(teamId, {
            id: teamId,
            label: counselor.affiliationTeamName,
            type: 'team',
            children: []
          });
        }
    
        // 상담원 추가
        const team = group.children.get(teamId)!;
        team.children.push({
          id: counselor.counselorId,
          label: counselor.counselorname,
          type: 'counselor',
          tenantId: counselor.tenantId,
        });
      });
    
      // Map을 트리 구조로 변환
      const items: TreeItem[] = Array.from(tenantMap.values()).map(tenant => ({
        ...tenant,
        children: Array.from(tenant.children.values()).map(group => ({
          ...group,
          children: Array.from(group.children.values())
        }))
      }));
    
      // 원래는 center 노드로 감싸서 반환했으나, 이제 tenant 계층이 최상위가 되도록 수정
      return [{
        id: 'agent',
        label: '상담원',
        items: items
      }];
    }