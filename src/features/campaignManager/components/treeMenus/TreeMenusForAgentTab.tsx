
"use client";

import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useApiForSidebarCounselor } from "@/features/campaignManager/hooks/useApiForGetDataForSidebarCounselorTab";
import { TreeNodeForCounselorListForSideBar } from "./TreeNodeForCounselorListForSideBar";
import { SearchBarForSideMenuForCounselorTab } from "./searchbar/SearchBarForSideMenuForCounselorTab";
import { findCounselorInfo, getAllCounselors } from "./searchbar/utilsForSideMenuForCounselorTab";
import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";
import { toast } from "react-toastify";
import { CounselorTreeLevelSelector } from "./option/CounselorTreeLevelSelector";

export function TreeMenusForAgentTab() {
  const { tenant_id, role_id } = useAuthStore();
  const { data, isLoading } = useApiForSidebarCounselor(
    tenant_id.toString(),
    role_id.toString()
  );

  const [searchTerm, setSearchTerm] = useState("");
  const setSelectedCounselor = useCounselorFilterStore(state => state.setSelectedCounselor);
  const [allCounselors, setAllCounselors] = useState<Array<{
    counselorId: string;
    counselorName: string;
    tenantId: string;
  }>>([]);

  const defaultExpanded = {
    organization: true,
    tenant: true,
    group: true,
    team: true,
    counselor: false
  };

  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [selectedNodeId, setSelectedNodeId] = useState<string>();

  // 데이터 로드 시 모든 상담원 정보 추출
  useEffect(() => {
    if (data?.organizationList) {
      applyDefaultExpansion();
      
      // 모든 상담원 정보 추출
      const counselors = getAllCounselors(data.organizationList);
      setAllCounselors(counselors);
    }
  }, [data]);

  // 기본 확장 상태를 적용하는 함수
  const applyDefaultExpansion = () => {
    if (!data?.organizationList) return;
    
    const initialExpanded = new Set<string>();

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
  };

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

  const handleSearch = () => {
    if (!searchTerm.trim() || !data?.organizationList) return;

    const counselorInfo = findCounselorInfo(data.organizationList, searchTerm);
    if (counselorInfo) {
      selectCounselor(counselorInfo.counselorId, counselorInfo.counselorName, counselorInfo.tenantId);
    } else {
      toast.error("상담원을 찾을 수 없습니다.");
    }
  };

  // 상담원 선택 처리 공통 함수
  const selectCounselor = (counselorId: string, counselorName: string, tenantId: string) => {
    // 상담원 선택 상태 업데이트
    setSelectedNodeId(counselorId);
    setSelectedCounselor(counselorId, counselorName, tenantId);
    
    if (data?.organizationList) {
      // 경로 찾기
      const counselorInfo = findCounselorInfo(data.organizationList, counselorName);
      
      if (counselorInfo) {
        // 경로상의 모든 노드 확장
        const newExpanded = new Set(expandedNodes);
        counselorInfo.paths.forEach(path => newExpanded.add(path));
        setExpandedNodes(newExpanded);

        // DOM 업데이트를 위한 짧은 지연 후 스크롤 실행
        setTimeout(() => {
          const scrollContainer = document.querySelector('.tree-node');
          const targetElement = document.getElementById(`counselor-${counselorId}`);

          if (scrollContainer && targetElement) {
            scrollContainer.scrollTop = (
              targetElement.offsetTop -
              (scrollContainer as HTMLElement).offsetTop -
              (scrollContainer.clientHeight / 2) +
              (targetElement.clientHeight / 2)
            );
          }
        }, 100);
      }
    }
  };

  // 특정 레벨까지만 노드 열기 함수
  const expandToLevel = (level: number) => {
    if (!data?.organizationList) return;
    
    const newExpanded = new Set<string>();
    
    // 레벨에 따라 다르게 처리
    data.organizationList.forEach(org => {
      // 레벨 1: 조직
      const orgId = `org-${org.centerId}`;
      if (level >= 1) newExpanded.add(orgId);
      
      if (level >= 2 && org.tenantInfo) {
        // 레벨 2: 테넌트
        org.tenantInfo.forEach(tenant => {
          const tenantId = `tenant-${tenant.tenantId}`;
          newExpanded.add(tenantId);
          
          if (level >= 3 && tenant.groupInfo) {
            // 레벨 3: 그룹
            tenant.groupInfo.forEach(group => {
              const groupId = `group-${group.groupId}`;
              newExpanded.add(groupId);
              
              if (level >= 4 && group.teamInfo) {
                // 레벨 4: 팀
                group.teamInfo.forEach(team => {
                  const teamId = `team-${team.teamId}`;
                  newExpanded.add(teamId);
                  
                  if (level >= 5 && team.counselorInfo) {
                    // 레벨 5: 상담원
                    team.counselorInfo.forEach(counselor => {
                      const counselorId = `counselor-${counselor.counselorId}`;
                      newExpanded.add(counselorId);
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
    
    setExpandedNodes(newExpanded);
  };
  
  // 전체 열기/닫기 함수
  const toggleAllNodes = (isExpanded: boolean) => {
    if (!data?.organizationList) return;
    
    if (isExpanded) {
      // 모든 레벨 열기 (레벨 5까지)
      expandToLevel(5);
    } else {
      // 모든 노드 닫기
      setExpandedNodes(new Set());
    }
  };

  if (isLoading) {
    return <div className="h-full p-4">Loading...</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center border-b">
        <div className="flex-grow">
          <SearchBarForSideMenuForCounselorTab
            value={searchTerm}
            onChange={setSearchTerm}
            onSearch={handleSearch}
            placeholder="상담원"
            counselors={allCounselors}
            onSelectCounselor={selectCounselor}
          />
        </div>
        <div className="py-1 px-1">
          <CounselorTreeLevelSelector
            onExpandToLevel={expandToLevel}
            onToggleAllNodes={toggleAllNodes}
            onApplyDefaultExpansion={applyDefaultExpansion}
          />
        </div>
      </div>

      <div className="flex flex-grow overflow-y-auto min-h-0 tree-node">
        <div className="w-full">
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
      </div>
    </div>
  );
}