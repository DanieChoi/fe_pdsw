// "use client";

// import { useState, useEffect } from "react";
// import { useAuthStore } from "@/store/authStore";
// import { useApiForSidebarCounselor } from "@/features/campaignManager/hooks/useApiForGetDataForSidebarCounselorTab";
// import { TreeNodeForCounselorListForSideBar } from "./TreeNodeForCounselorListForSideBar";
// import { SearchBarForSideMenuForCounselorTab } from "./searchbar/SearchBarForSideMenuForCounselorTab";

// export function TreeMenusForAgentTab() {
//   const { tenant_id, role_id } = useAuthStore();
//   const { data, isLoading } = useApiForSidebarCounselor(
//     tenant_id.toString(), 
//     role_id.toString()
//   );

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState(data?.organizationList);

//   const defaultExpanded = {
//     organization: true,
//     tenant: true,
//     group: true,
//     team: true,
//     counselor: false
//   };

//   const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
//   const [selectedNodeId, setSelectedNodeId] = useState<string>();

//   useEffect(() => {
//     setFilteredData(data?.organizationList);
//   }, [data]);

//   // 초기 확장 상태 설정
//   useEffect(() => {
//     if (data?.organizationList) {
//       const initialExpanded = new Set<string>();
      
//       // 초기 확장할 노드들의 ID를 추가
//       data.organizationList.forEach(org => {
//         if (defaultExpanded.organization) {
//           initialExpanded.add(`org-${org.centerId}`);
//         }
        
//         org.tenantInfo?.forEach(tenant => {
//           if (defaultExpanded.tenant) {
//             initialExpanded.add(`tenant-${tenant.tenantId}`);
//           }
          
//           tenant.groupInfo?.forEach(group => {
//             if (defaultExpanded.group) {
//               initialExpanded.add(`group-${group.groupId}`);
//             }
            
//             group.teamInfo?.forEach(team => {
//               if (defaultExpanded.team) {
//                 initialExpanded.add(`team-${team.teamId}`);
//               }
//             });
//           });
//         });
//       });
      
//       setExpandedNodes(initialExpanded);
//     }
//   }, [data]);

//   const handleNodeToggle = (nodeId: string) => {
//     setExpandedNodes(prev => {
//       const next = new Set(prev);
//       if (next.has(nodeId)) {
//         next.delete(nodeId);
//       } else {
//         next.add(nodeId);
//       }
//       return next;
//     });
//   };

//   const handleSearch = () => {
//     if (!searchTerm.trim()) {
//       setFilteredData(data?.organizationList);
//       return;
//     }

//     const searchValue = searchTerm.toLowerCase();
//     const filteredOrgs = data?.organizationList.filter(org => {
//       // 여기에 검색 로직 구현
//       // 예: 조직명, 상담원명 등으로 검색
//       return org.centerName.toLowerCase().includes(searchValue);
//     });

//     setFilteredData(filteredOrgs);
//   };

//   if (isLoading) {
//     return <div className="h-full p-4">Loading...</div>;
//   }

//   return (
//     <div className="flex flex-col h-full">
//       <SearchBarForSideMenuForCounselorTab
//         value={searchTerm}
//         onChange={setSearchTerm}
//         onSearch={handleSearch}
//       />
//       <div className="flex-1 overflow-y-auto min-h-0 tree-node">
//         {filteredData?.map((org) => (
//           <TreeNodeForCounselorListForSideBar
//             key={`org-${org.centerId}`}
//             data={org}
//             type="organization"
//             level={0}
//             expandedNodes={expandedNodes}
//             selectedNodeId={selectedNodeId}
//             onNodeToggle={handleNodeToggle}
//             onNodeSelect={setSelectedNodeId}
//             defaultExpanded={defaultExpanded}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useApiForSidebarCounselor } from "@/features/campaignManager/hooks/useApiForGetDataForSidebarCounselorTab";
import { TreeNodeForCounselorListForSideBar } from "./TreeNodeForCounselorListForSideBar";
import { SearchBarForSideMenuForCounselorTab } from "./searchbar/SearchBarForSideMenuForCounselorTab";
import { findCounselorInfo } from "./searchbar/utilsForSideMenuForCounselorTab";
import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";

export function TreeMenusForAgentTab() {
  const { tenant_id, role_id } = useAuthStore();
  const { data, isLoading } = useApiForSidebarCounselor(
    tenant_id.toString(), 
    role_id.toString()
  );

  const [searchTerm, setSearchTerm] = useState("");
  const setSelectedCounselor = useCounselorFilterStore(state => state.setSelectedCounselor);

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

  // const handleSearch = () => {
  //   if (!searchTerm.trim() || !data?.organizationList) return;

  //   const counselorInfo = findCounselorInfo(data.organizationList, searchTerm);
  //   if (counselorInfo) {
  //     // 상담원 선택 상태 업데이트
  //     setSelectedNodeId(counselorInfo.counselorId);
  //     setSelectedCounselor(
  //       counselorInfo.counselorId,
  //       counselorInfo.counselorName,
  //       counselorInfo.tenantId
  //     );

  //     // 경로상의 모든 노드 확장
  //     const newExpanded = new Set(expandedNodes);
  //     counselorInfo.paths.forEach(path => newExpanded.add(path));
  //     setExpandedNodes(newExpanded);
  //   }
  // };

  const handleSearch = () => {
    if (!searchTerm.trim() || !data?.organizationList) return;
  
    const counselorInfo = findCounselorInfo(data.organizationList, searchTerm);
    if (counselorInfo) {
      // 상담원 선택 상태 업데이트
      setSelectedNodeId(counselorInfo.counselorId);
      setSelectedCounselor(
        counselorInfo.counselorId,
        counselorInfo.counselorName,
        counselorInfo.tenantId
      );
  
      // 경로상의 모든 노드 확장
      const newExpanded = new Set(expandedNodes);
      counselorInfo.paths.forEach(path => newExpanded.add(path));
      setExpandedNodes(newExpanded);
  
      // DOM 업데이트를 위한 짧은 지연 후 스크롤 실행
      setTimeout(() => {
        // 트리 메뉴의 스크롤 컨테이너 찾기
        const scrollContainer = document.querySelector('.tree-node');
        const targetElement = document.getElementById(`counselor-${counselorInfo.counselorId}`);
        
        if (scrollContainer && targetElement) {
          // 스크롤 컨테이너 내에서 요소의 위치 계산
          const containerRect = scrollContainer.getBoundingClientRect();
          const elementRect = targetElement.getBoundingClientRect();
          
          // 요소가 스크롤 영역의 중앙에 오도록 스크롤 위치 조정
          scrollContainer.scrollTop = (
            targetElement.offsetTop - 
            scrollContainer.offsetTop - 
            (scrollContainer.clientHeight / 2) + 
            (targetElement.clientHeight / 2)
          );
        }
      }, 100);
    }
  };

  if (isLoading) {
    return <div className="h-full p-4">Loading...</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <SearchBarForSideMenuForCounselorTab
        value={searchTerm}
        onChange={setSearchTerm}
        onSearch={handleSearch}
      />
      <div className="flex-1 overflow-y-auto min-h-0 tree-node">
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
  );
}