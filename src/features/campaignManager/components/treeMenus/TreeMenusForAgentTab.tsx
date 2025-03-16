"use client";

import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useApiForSidebarCounselor } from "@/features/campaignManager/hooks/useApiForGetDataForSidebarCounselorTab";
import { TreeNodeForCounselorListForSideBar } from "./TreeNodeForCounselorListForSideBar";
import { SearchBarForSideMenuForCounselorTab } from "./searchbar/SearchBarForSideMenuForCounselorTab";
import { findCounselorInfo, getAllCounselors } from "./searchbar/utilsForSideMenuForCounselorTab";
import { useCounselorFilterStore, NodeType } from "@/store/storeForSideMenuCounselorTab";
import { toast } from "react-toastify";
import { CounselorTreeLevelSelector } from "./option/CounselorTreeLevelSelector";
import { IOrganization, ITenant, IGroup, ITeam, ICounselor } from "@/features/campaignManager/types/typeForSideBarCounselorTab2";

export function TreeMenusForAgentTab() {
  const { tenant_id, role_id } = useAuthStore();
  const { data, isLoading } = useApiForSidebarCounselor(
    tenant_id.toString(),
    role_id.toString()
  );

  const [searchTerm, setSearchTerm] = useState("");
  const { 
    setSelectedCounselor,
    sortOption,
    currentExpansionLevel,
    expandToLevel: storeExpandToLevel
  } = useCounselorFilterStore();
  
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
  const [sortedData, setSortedData] = useState<any[]>([]);

  // 데이터 로드 시 초기화 작업
  useEffect(() => {
    if (data?.organizationList) {
      // 기본 확장 상태 적용
      applyDefaultExpansion();
      
      // 모든 상담원 정보 추출
      const counselors = getAllCounselors(data.organizationList);
      setAllCounselors(counselors);
      
      // 초기 정렬 적용
      const sorted = applySorting([...data.organizationList]);
      setSortedData(sorted);
    }
  }, [data]);

  // 정렬 옵션 변경 시 데이터 재정렬
  useEffect(() => {
    if (data?.organizationList) {
      const sorted = applySorting([...data.organizationList]);
      setSortedData(sorted);
    }
  }, [sortOption, data]);

  // 확장 레벨 변경 시 노드 확장 상태 업데이트
  useEffect(() => {
    if (data?.organizationList && currentExpansionLevel > 0) {
      expandToLevel(currentExpansionLevel);
    }
  }, [currentExpansionLevel, data]);

  // 정렬 로직 구현 (개선된 버전)
  const applySorting = (dataArray: IOrganization[]) => {
    if (!dataArray || dataArray.length === 0) return [];
    
    const { type, direction, nodeType } = sortOption;
    
    // 깊은 복사를 통해 원본 데이터 보존
    const clonedData: IOrganization[] = JSON.parse(JSON.stringify(dataArray));
    
    // 조직 레벨 정렬 (최상위 레벨)
    if (nodeType === 'all' || nodeType === 'organization') {
      clonedData.sort((a, b) => {
        if (type === 'id') {
          const valueA = parseInt(a.centerId) || 0;
          const valueB = parseInt(b.centerId) || 0;
          return direction === 'asc' ? valueA - valueB : valueB - valueA;
        } else {
          return direction === 'asc' 
            ? a.centerName.localeCompare(b.centerName) 
            : b.centerName.localeCompare(a.centerName);
        }
      });
    }

    // 각 조직 내의 테넌트 정렬
    clonedData.forEach(org => {
      if (org.tenantInfo && org.tenantInfo.length > 0) {
        // 테넌트 레벨 정렬
        if (nodeType === 'all' || nodeType === 'tenant') {
          org.tenantInfo.sort((a, b) => {
            if (type === 'id') {
              const valueA = parseInt(a.tenantId) || 0;
              const valueB = parseInt(b.tenantId) || 0;
              return direction === 'asc' ? valueA - valueB : valueB - valueA;
            } else {
              return direction === 'asc' 
                ? a.tenantName.localeCompare(b.tenantName) 
                : b.tenantName.localeCompare(a.tenantName);
            }
          });
        }

        // 각 테넌트 내의 그룹 정렬
        org.tenantInfo.forEach(tenant => {
          if (tenant.groupInfo && tenant.groupInfo.length > 0) {
            // 그룹 레벨 정렬
            if (nodeType === 'all' || nodeType === 'group') {
              tenant.groupInfo.sort((a, b) => {
                if (type === 'id') {
                  const valueA = parseInt(a.groupId) || 0;
                  const valueB = parseInt(b.groupId) || 0;
                  return direction === 'asc' ? valueA - valueB : valueB - valueA;
                } else {
                  return direction === 'asc' 
                    ? a.groupName.localeCompare(b.groupName) 
                    : b.groupName.localeCompare(a.groupName);
                }
              });
            }

            // 각 그룹 내의 팀 정렬
            tenant.groupInfo.forEach(group => {
              if (group.teamInfo && group.teamInfo.length > 0) {
                // 팀 레벨 정렬
                if (nodeType === 'all' || nodeType === 'team') {
                  group.teamInfo.sort((a, b) => {
                    if (type === 'id') {
                      const valueA = parseInt(a.teamId) || 0;
                      const valueB = parseInt(b.teamId) || 0;
                      return direction === 'asc' ? valueA - valueB : valueB - valueA;
                    } else {
                      return direction === 'asc' 
                        ? a.teamName.localeCompare(b.teamName) 
                        : b.teamName.localeCompare(a.teamName);
                    }
                  });
                }

                // 각 팀 내의 상담원 정렬
                group.teamInfo.forEach(team => {
                  if (team.counselorInfo && team.counselorInfo.length > 0) {
                    // 상담원 레벨 정렬
                    if (nodeType === 'all' || nodeType === 'counselor') {
                      team.counselorInfo.sort((a, b) => {
                        if (type === 'id') {
                          const valueA = parseInt(a.counselorId) || 0;
                          const valueB = parseInt(b.counselorId) || 0;
                          return direction === 'asc' ? valueA - valueB : valueB - valueA;
                        } else {
                          return direction === 'asc' 
                            ? (a.counselorname || '').localeCompare(b.counselorname || '') 
                            : (b.counselorname || '').localeCompare(a.counselorname || '');
                        }
                      });
                    }
                  }
                });
              }
            });
          }
        });
      }
    });
    
    return clonedData;
  };

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
    
    // 스토어에도 기본 확장 레벨 적용
    storeExpandToLevel(4); // 팀 레벨까지 기본 확장
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
      storeExpandToLevel(5);
    } else {
      // 모든 노드 닫기
      setExpandedNodes(new Set());
      storeExpandToLevel(1);
    }
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
            onExpandToLevel={(level) => {
              expandToLevel(level);
              storeExpandToLevel(level);
            }}
            onToggleAllNodes={toggleAllNodes}
            onApplyDefaultExpansion={applyDefaultExpansion}
          />
        </div>
      </div>

      <div className="flex flex-grow overflow-y-auto min-h-0 tree-node">
        <div className="w-full">
          {sortedData.map((org) => (
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