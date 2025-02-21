"use client";

import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useApiForSidebarCounselor } from "@/features/campaignManager/hooks/useApiForGetDataForSidebarCounselorTab";
import { TreeNodeForCounselorListForSideBar } from "./TreeNodeForCounselorListForSideBar";

export function TreeMenusForAgentTab() {
  const { tenant_id, role_id } = useAuthStore();
  const { data, isLoading } = useApiForSidebarCounselor(
    tenant_id.toString(), 
    role_id.toString()
  );

  const defaultExpanded = {
    organization: true,
    tenant: true,
    group: true,
    team: true,
    counselor: false
  };

  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [selectedNodeId, setSelectedNodeId] = useState<string>();

  // 초기 확장 상태 설정
  useEffect(() => {
    if (data?.organizationList) {
      const initialExpanded = new Set<string>();
      
      // 초기 확장할 노드들의 ID를 추가
      data.organizationList.forEach(org => {
        if (defaultExpanded.organization) {
          initialExpanded.add(`org-${org.centerId}`);
        }
        
        org.tenantInfo?.forEach(tenant => {
          if (defaultExpanded.tenant) {
            initialExpanded.add(`tenant-${tenant.tenantId}`);
          }
          
          tenant.groupInfo?.forEach(group => {
            if (defaultExpanded.group) {
              initialExpanded.add(`group-${group.groupId}`);
            }
            
            group.teamInfo?.forEach(team => {
              if (defaultExpanded.team) {
                initialExpanded.add(`team-${team.teamId}`);
              }
            });
          });
        });
      });
      
      setExpandedNodes(initialExpanded);
    }
  }, [data]);

  const handleNodeToggle = (nodeId: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  };

  console.log("상담원 데이터 확인 : ", data);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="flex-1 overflow-auto px-2">
      {data?.organizationList.map((org) => (
        <TreeNodeForCounselorListForSideBar
          key={`org-${org.centerId}`}
          data={org}
          type="organization"
          level={0}
          expandedNodes={expandedNodes}
          selectedNodeId={selectedNodeId}
          onNodeToggle={handleNodeToggle}
          onNodeSelect={setSelectedNodeId}
          defaultExpanded={defaultExpanded}
        />
      ))}
    </div>
  );
}