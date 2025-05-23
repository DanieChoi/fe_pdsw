

// "use client";
// import React, { useCallback } from 'react';
// import { UserCircle2 } from "lucide-react";
// import { IContextMenuForTennantForCounselorTreeMenu } from "./ContextMenus/IContextMenuForTennantForCounselorTreeMenu";
// import { IContextMenuForGroupAndTeamAndCounselor } from "./ContextMenus/IContextMenuForGroupAndTeamAndCounselorProps";
// import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";
// import Image from "next/image";

// interface ExpandConfig {
//   organization?: boolean;
//   tenant?: boolean;
//   group?: boolean;
//   team?: boolean;
//   counselor?: boolean;
// }

// interface ITreeNodeForCounselorListForSideBar {
//   data: any;
//   level: number;
//   expandedNodes: Set<string>;
//   selectedNodeId?: string;
//   onNodeToggle: (nodeId: string) => void;
//   onNodeSelect: (nodeId: string) => void;
//   type: 'organization' | 'tenant' | 'group' | 'team' | 'counselor';
//   defaultExpanded: ExpandConfig;
//   parentTenantId?: string; // 부모로부터 전달된 tenantId
// }

// export function TreeNodeForCounselorListForSideBar({
//   data,
//   level,
//   expandedNodes,
//   selectedNodeId,
//   onNodeToggle,
//   onNodeSelect,
//   type,
//   defaultExpanded,
//   parentTenantId
// }: ITreeNodeForCounselorListForSideBar) {
//   const { selectedBlendKind, setSelectedCounselor, sortOption } = useCounselorFilterStore();

//   // 현재 노드의 tenantId 결정 (자신의 것이 있으면 그것을 사용, 없으면 부모에서 전달)
//   const currentTenantId = type === 'tenant' ? data.tenantId : parentTenantId;

//   const getCounselorsForNode = () => {
//     switch (type) {
//       case 'counselor':
//         return [{
//           ...data,
//           tenantId: currentTenantId // 상담사 정보에 현재 tenantId 추가
//         }];
//       case 'team': {
//         let counselors = data.counselorInfo?.map((counselor: any) => ({
//           type: 'counselor',
//           data: {
//             ...counselor,
//             tenantId: currentTenantId // 상담사에 tenantId 추가
//           }
//         })) || [];
        
//         // blendKind 필터 적용 (필요한 경우)
//         if (selectedBlendKind !== null) {
//           counselors = counselors.filter(
//             (counselor: any) => {
//               const blendKind = Number(counselor.data.blendKind);
//               if (selectedBlendKind === 1) {
//                 // 인바운드 선택 시 인바운드(1)와 블렌드(3)도 표시
//                 return blendKind === 1 || blendKind === 3;
//               } else if (selectedBlendKind === 2) {
//                 // 아웃바운드 선택 시 아웃바운드(2)와 블렌드(3)도 표시
//                 return blendKind === 2 || blendKind === 3;
//               } else {
//                 // 그 외(블렌드 선택 시)는 정확히 일치하는 것만
//                 return blendKind === selectedBlendKind;
//               }
//             }
//           );
//         }
        
//         // store의 sortOption에 따라 상담사 정렬 (이름 또는 아이디 기준)
//         counselors.sort((a: { data: { counselorname: string; counselorId: string } }, b: { data: { counselorname: string; counselorId: string } }) => {
//           if (sortOption.type === 'name') {
//             if (a.data.counselorname < b.data.counselorname) return sortOption.direction === 'asc' ? -1 : 1;
//             if (a.data.counselorname > b.data.counselorname) return sortOption.direction === 'asc' ? 1 : -1;
//             return 0;
//           } else {
//             if (a.data.counselorId < b.data.counselorId) return sortOption.direction === 'asc' ? -1 : 1;
//             if (a.data.counselorId > b.data.counselorId) return sortOption.direction === 'asc' ? 1 : -1;
//             return 0;
//           }
//         });
//         return counselors;
//       }
//       case 'group':
//         // 그룹 내 모든 팀의 상담사 정보에 tenantId 추가
//         return data.teamInfo?.reduce((acc: any[], team: any) => {
//           const counselors = team.counselorInfo?.map((counselor: any) => ({
//             ...counselor,
//             tenantId: currentTenantId
//           })) || [];
//           return acc.concat(counselors);
//         }, []) || [];
//       default:
//         return [];
//     }
//   };

//   const getId = () => {
//     switch (type) {
//       case 'organization': return `org-${data.centerId}`;
//       case 'tenant': return `tenant-${data.tenantId}`;
//       case 'group': return `group-${data.groupId}`;
//       case 'team': return `team-${data.teamId}`;
//       case 'counselor': return data.counselorId;
//     }
//   };

//   const getLabel = () => {
//     switch (type) {
//       case 'organization': return data.centerName;
//       case 'tenant': return data.tenantName;
//       case 'group': return '[' + data.groupId + ']' + data.groupName;
//       case 'team': return '[' + data.teamId + ']' + data.teamName;
//       case 'counselor': return data.counselorname;
//     }
//   };

//   const getChildren = () => {
//     switch (type) {
//       case 'organization': 
//         return data.tenantInfo?.map((tenant: any) => ({
//           type: 'tenant',
//           data: tenant
//         }));
//       case 'tenant': 
//         return data.groupInfo?.map((group: any) => ({
//           type: 'group',
//           data: {
//             ...group,
//             tenantId: data.tenantId // 그룹에 tenantId 추가
//           }
//         }));
//       case 'group': 
//         return data.teamInfo?.map((team: any) => ({
//           type: 'team',
//           data: {
//             ...team,
//             tenantId: currentTenantId // 팀에 tenantId 추가
//           }
//         }));
//       case 'team': {
//         let counselors = data.counselorInfo?.map((counselor: any) => ({
//           type: 'counselor',
//           data: {
//             ...counselor,
//             tenantId: currentTenantId // 상담사에 tenantId 추가
//           }
//         })) || [];
        
//         if (selectedBlendKind !== null) {
//           counselors = counselors.filter(
//             (counselor: any) => {
//               const blendKind = Number(counselor.data.blendKind);
//               if (selectedBlendKind === 1) {
//                 // 인바운드 선택 시 인바운드(1)와 블렌드(3)도 표시
//                 return blendKind === 1 || blendKind === 3;
//               } else if (selectedBlendKind === 2) {
//                 // 아웃바운드 선택 시 아웃바운드(2)와 블렌드(3)도 표시
//                 return blendKind === 2 || blendKind === 3;
//               } else {
//                 // 그 외(블렌드 선택 시)는 정확히 일치하는 것만
//                 return blendKind === selectedBlendKind;
//               }
//             }
//           );
//         }
        
//         // 상담사 정렬
//         counselors.sort((a: { data: { counselorname: string; counselorId: string } }, b: { data: { counselorname: string; counselorId: string } }) => {
//           if (sortOption.type === 'name') {
//             if (a.data.counselorname < b.data.counselorname) return sortOption.direction === 'asc' ? -1 : 1;
//             if (a.data.counselorname > b.data.counselorname) return sortOption.direction === 'asc' ? 1 : -1;
//             return 0;
//           } else {
//             if (a.data.counselorId < b.data.counselorId) return sortOption.direction === 'asc' ? -1 : 1;
//             if (a.data.counselorId > b.data.counselorId) return sortOption.direction === 'asc' ? 1 : -1;
//             return 0;
//           }
//         });
//         return counselors;
//       }
//       case 'counselor': return null;
//     }
//   };

//   const id = getId();
//   const label = getLabel();
//   const children = getChildren();
//   const hasChildren = children && children.length > 0;
//   const isExpanded = expandedNodes.has(id);
//   const isSelected = selectedNodeId === id;

//   const handleNodeClick = () => {
//     onNodeSelect(id);
//     if (hasChildren) {
//       onNodeToggle(id);
//     }

//     if (type === 'counselor') {
//       // 상담사 정보에 이미 tenantId가 포함되어 있거나, parentTenantId를 사용
//       const tenantId = data.tenantId || currentTenantId;
//       if (tenantId) {
//         console.log(`상담사 선택: ${data.counselorname}, TenantID: ${tenantId}`);
//         setSelectedCounselor(
//           data.counselorId,
//           data.counselorname,
//           tenantId
//         );
//       } else {
//         console.warn(`상담사 ${data.counselorname}의 tenantId를 찾을 수 없습니다.`);
//       }
//     }

//     console.log(`${type} ${label} 클릭 - TenantID: ${currentTenantId}`);
//     const counselors = getCounselorsForNode();
//     console.log(`${type} 노드의 상담사 목록:`, counselors);
//   };

//   const handleContextMenu = useCallback(() => {
//     onNodeSelect(id);
//   }, [id, onNodeSelect]);

//   const renderIcon = () => {
//     switch (type) {
//       case 'organization':
//         return <Image src="/tree-menu/organization.png" alt="조직" width={14} height={12} />;
//       case 'tenant':
//         return <Image src="/tree-menu/tennant_office.png" alt="테넌트" width={14} height={12} />;
//       case 'group':
//         return <Image src="/tree-menu/group_icon_for_tree.png" alt="그룹" width={15} height={12} />;
//       case 'team':
//         return <Image src="/tree-menu/team_icon_for_tree.png" alt="팀" width={14} height={12} />;
//       case 'counselor':
//         const blendKind = Number(data.blendKind);
//         switch (blendKind) {
//           case 1:
//             return <Image src="/tree-menu/inbound_counselor.png" alt="인바운드" width={15} height={12} />;
//           case 2:
//             return <Image src="/tree-menu/outbound_counselor.png" alt="아웃바운드" width={15} height={12} />;
//           case 3:
//             return <Image src="/tree-menu/inbound_outbound_mix.png" alt="블렌드" width={15} height={12} />;
//           default:
//             return <UserCircle2 className="h-4 w-4 text-gray-600" />;
//         }
//     }
//   };

//   const renderNodeContent = () => (
//     <div
//       id={type === 'counselor' ? `counselor-${data.counselorId}` : undefined}
//       className={`flex items-center hover:bg-[#FFFAEE] px-2 py-0.5 cursor-pointer transition-colors duration-150 text-[#555]
//         ${isSelected ? "bg-[#FFFAEE]" : ""}`}
//       onClick={handleNodeClick}
//       onContextMenu={handleContextMenu}
//       style={{ paddingLeft: `${level * 16 + 8}px` }}
//     >
//       <div className="flex items-center w-full gap-2">
//         {hasChildren ? (
//           isExpanded ? (
//             <Image src="/tree-menu/minus_for_tree.png" alt="접기" width={12} height={12} />
//           ) : (
//             <Image src="/tree-menu/plus_icon_for_tree.png" alt="펼치기" width={12} height={12} />
//           )
//         ) : (
//           <span className="w-3" />
//         )}
//         {renderIcon()}
//         <span className={`text-sm text-555 ${isSelected ? "font-medium" : ""}`}>
//           {/* {type === 'counselor' ? `[${getId()}] ${getLabel()}` : getLabel()} */}
//           {type === 'counselor' ? `${getLabel()} [${getId()}]` : getLabel()}

//         </span>
//       </div>
//     </div>
//   );

//   const renderWithContextMenu = (content: React.ReactNode) => {
//     // 1) organization 노드도 tenant와 동일한 컨텍스트 메뉴를 쓰고 싶다면
//     if (type === 'organization' || type === 'tenant') {
//       return (
//         <IContextMenuForTennantForCounselorTreeMenu>
//           {content}
//         </IContextMenuForTennantForCounselorTreeMenu>
//       );
//     }
  
//     // 2) group, team, counselor는 기존 로직 그대로
//     if (['group', 'team', 'counselor'].includes(type)) {
//       const counselors = getCounselorsForNode();
      
//       const contextMenuItem = {
//         id:
//           type === 'counselor'
//             ? data.counselorId
//             : type === 'team'
//             ? data.teamId
//             : data.groupId,
//         name:
//           type === 'counselor'
//             ? data.counselorname
//             : type === 'team'
//             ? data.teamName
//             : data.groupName,
//         tenantId: currentTenantId,
//         type: type as 'counselor' | 'team' | 'group',
//         members: counselors
//       };
  
//       return (
//         <IContextMenuForGroupAndTeamAndCounselor item={contextMenuItem}>
//           {content} 
//         </IContextMenuForGroupAndTeamAndCounselor>
//       );
//     }
  
//     // 그 외에는 컨텍스트 메뉴를 적용하지 않음
//     return content;
//   };
  
//   return (
//     <div className="select-none">
//       {renderWithContextMenu(renderNodeContent())}
//       {hasChildren && isExpanded && (
//         <div className="space-y-0.5">
//           {children.map((child: any) => {
//             let childId;
//             switch (child.type) {
//               case 'tenant': childId = child.data.tenantId; break;
//               case 'group': childId = child.data.groupId; break;
//               case 'team': childId = child.data.teamId; break;
//               case 'counselor': childId = child.data.counselorId; break;
//               default: childId = child.data.centerId;
//             }
//             return (
//               <TreeNodeForCounselorListForSideBar
//                 key={`${child.type}-${childId}`}
//                 data={child.data}
//                 type={child.type}
//                 level={level + 1}
//                 expandedNodes={expandedNodes}
//                 selectedNodeId={selectedNodeId}
//                 onNodeToggle={onNodeToggle}
//                 onNodeSelect={onNodeSelect}
//                 defaultExpanded={defaultExpanded}
//                 parentTenantId={currentTenantId}
//               />
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import React, { useCallback } from 'react';
import { UserCircle2 } from "lucide-react";
import { IContextMenuForTennantForCounselorTreeMenu } from "./ContextMenus/IContextMenuForTennantForCounselorTreeMenu";
import { IContextMenuForGroupAndTeamAndCounselor } from "./ContextMenus/IContextMenuForGroupAndTeamAndCounselorProps";
import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";
import Image from "next/image";

interface ExpandConfig {
  organization?: boolean;
  tenant?: boolean;
  group?: boolean;
  team?: boolean;
  counselor?: boolean;
  skill?: boolean;
}

interface ISkill {
  skillId: string;
  skillName: string;
}

interface ITreeNodeForCounselorListForSideBar {
  data: any;
  level: number;
  expandedNodes: Set<string>;
  selectedNodeId?: string;
  onNodeToggle: (nodeId: string) => void;
  onNodeSelect: (nodeId: string) => void;
  type: 'organization' | 'tenant' | 'group' | 'team' | 'counselor' | 'skill';
  defaultExpanded: ExpandConfig;
  parentTenantId?: string;
}

export function TreeNodeForCounselorListForSideBar({
  data,
  level,
  expandedNodes,
  selectedNodeId,
  onNodeToggle,
  onNodeSelect,
  type,
  defaultExpanded,
  parentTenantId
}: ITreeNodeForCounselorListForSideBar) {
  const { selectedBlendKind, setSelectedCounselor, sortOption } = useCounselorFilterStore();

  // 현재 노드의 tenantId 결정
  const currentTenantId = type === 'tenant' ? data.tenantId : parentTenantId;

  const getCounselorsForNode = () => {
    switch (type) {
      case 'counselor':
        return [{
          ...data,
          tenantId: currentTenantId
        }];
      case 'skill':
        return []; // 스킬 노드는 상담사 정보 없음
      case 'team': {
        let counselors = data.counselorInfo?.map((counselor: any) => ({
          type: 'counselor',
          data: {
            ...counselor,
            tenantId: currentTenantId
          }
        })) || [];
        
        if (selectedBlendKind !== null) {
          counselors = counselors.filter(
            (counselor: any) => {
              const blendKind = Number(counselor.data.blendKind);
              if (selectedBlendKind === 1) {
                return blendKind === 1 || blendKind === 3;
              } else if (selectedBlendKind === 2) {
                return blendKind === 2 || blendKind === 3;
              } else {
                return blendKind === selectedBlendKind;
              }
            }
          );
        }
        
        counselors.sort((a: { data: { counselorname: string; counselorId: string } }, b: { data: { counselorname: string; counselorId: string } }) => {
          if (sortOption.type === 'name') {
            if (a.data.counselorname < b.data.counselorname) return sortOption.direction === 'asc' ? -1 : 1;
            if (a.data.counselorname > b.data.counselorname) return sortOption.direction === 'asc' ? 1 : -1;
            return 0;
          } else {
            if (a.data.counselorId < b.data.counselorId) return sortOption.direction === 'asc' ? -1 : 1;
            if (a.data.counselorId > b.data.counselorId) return sortOption.direction === 'asc' ? 1 : -1;
            return 0;
          }
        });
        return counselors;
      }
      case 'group':
        return data.teamInfo?.reduce((acc: any[], team: any) => {
          const counselors = team.counselorInfo?.map((counselor: any) => ({
            ...counselor,
            tenantId: currentTenantId
          })) || [];
          return acc.concat(counselors);
        }, []) || [];
      default:
        return [];
    }
  };

  const getId = () => {
    switch (type) {
      case 'organization': return `org-${data.centerId}`;
      case 'tenant': return `tenant-${data.tenantId}`;
      case 'group': return `group-${data.groupId}`;
      case 'team': return `team-${data.teamId}`;
      case 'counselor': return data.counselorId;
      case 'skill': return `skill-${data.skillId}`;
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'organization': return data.centerName;
      case 'tenant': return data.tenantName;
      case 'group': return '[' + data.groupId + ']' + data.groupName;
      case 'team': return '[' + data.teamId + ']' + data.teamName;
      case 'counselor': return data.counselorname;
      case 'skill': return `[${data.skillId}]-${data.skillName}`;
    }
  };

  const getChildren = () => {
    switch (type) {
      case 'organization': 
        return data.tenantInfo?.map((tenant: any) => ({
          type: 'tenant',
          data: tenant
        }));
      case 'tenant': 
        return data.groupInfo?.map((group: any) => ({
          type: 'group',
          data: {
            ...group,
            tenantId: data.tenantId
          }
        }));
      case 'group': 
        return data.teamInfo?.map((team: any) => ({
          type: 'team',
          data: {
            ...team,
            tenantId: currentTenantId
          }
        }));
      case 'team': {
        let counselors = data.counselorInfo?.map((counselor: any) => ({
          type: 'counselor',
          data: {
            ...counselor,
            tenantId: currentTenantId
          }
        })) || [];
        
        if (selectedBlendKind !== null) {
          counselors = counselors.filter(
            (counselor: any) => {
              const blendKind = Number(counselor.data.blendKind);
              if (selectedBlendKind === 1) {
                return blendKind === 1 || blendKind === 3;
              } else if (selectedBlendKind === 2) {
                return blendKind === 2 || blendKind === 3;
              } else {
                return blendKind === selectedBlendKind;
              }
            }
          );
        }
        
        counselors.sort((a: { data: { counselorname: string; counselorId: string } }, b: { data: { counselorname: string; counselorId: string } }) => {
          if (sortOption.type === 'name') {
            if (a.data.counselorname < b.data.counselorname) return sortOption.direction === 'asc' ? -1 : 1;
            if (a.data.counselorname > b.data.counselorname) return sortOption.direction === 'asc' ? 1 : -1;
            return 0;
          } else {
            if (a.data.counselorId < b.data.counselorId) return sortOption.direction === 'asc' ? -1 : 1;
            if (a.data.counselorId > b.data.counselorId) return sortOption.direction === 'asc' ? 1 : -1;
            return 0;
          }
        });
        return counselors;
      }
      case 'counselor': {
        // 상담사의 스킬들을 자식 노드로 반환
        return data.assignedSkills?.map((skill: ISkill) => ({
          type: 'skill',
          data: skill
        })) || [];
      }
      case 'skill': 
        return null; // 스킬은 최하위 노드
    }
  };

  const id = getId();
  const label = getLabel();
  const children = getChildren();
  const hasChildren = children && children.length > 0;
  const isExpanded = expandedNodes.has(id);
  const isSelected = selectedNodeId === id;

  const handleNodeClick = () => {
    onNodeSelect(id);
    if (hasChildren) {
      onNodeToggle(id);
    }

    if (type === 'counselor') {
      const tenantId = data.tenantId || currentTenantId;
      if (tenantId) {
        console.log(`상담사 선택: ${data.counselorname}, TenantID: ${tenantId}`);
        setSelectedCounselor(
          data.counselorId,
          data.counselorname,
          tenantId
        );
      } else {
        console.warn(`상담사 ${data.counselorname}의 tenantId를 찾을 수 없습니다.`);
      }
    }

    if (type === 'skill') {
      console.log(`스킬 선택: ${data.skillName}`);
    }

    console.log(`${type} ${label} 클릭 - TenantID: ${currentTenantId}`);
    const counselors = getCounselorsForNode();
    console.log(`${type} 노드의 상담사 목록:`, counselors);
  };

  const handleContextMenu = useCallback(() => {
    onNodeSelect(id);
  }, [id, onNodeSelect]);

  const renderIcon = () => {
    switch (type) {
      case 'organization':
        return <Image src="/tree-menu/organization.png" alt="조직" width={14} height={12} />;
      case 'tenant':
        return <Image src="/tree-menu/tennant_office.png" alt="테넌트" width={14} height={12} />;
      case 'group':
        return <Image src="/tree-menu/group_icon_for_tree.png" alt="그룹" width={15} height={12} />;
      case 'team':
        return <Image src="/tree-menu/team_icon_for_tree.png" alt="팀" width={14} height={12} />;
      case 'counselor':
        const blendKind = Number(data.blendKind);
        switch (blendKind) {
          case 1:
            return <Image src="/tree-menu/inbound_counselor.png" alt="인바운드" width={15} height={12} />;
          case 2:
            return <Image src="/tree-menu/outbound_counselor.png" alt="아웃바운드" width={15} height={12} />;
          case 3:
            return <Image src="/tree-menu/inbound_outbound_mix.png" alt="블렌드" width={15} height={12} />;
          default:
            return <UserCircle2 className="h-4 w-4 text-gray-600" />;
        }
      // case 'skill':
      //   return <span className="text-blue-500">🔧</span>; // 스킬 아이콘
      default:
        return null;
    }
  };

  const renderNodeContent = () => (
    <div
      id={type === 'counselor' ? `counselor-${data.counselorId}` : 
          type === 'skill' ? `skill-${data.skillId}` : undefined}
      className={`flex items-center hover:bg-[#FFFAEE] px-2 py-0.5 cursor-pointer transition-colors duration-150 text-[#555]
        ${isSelected ? "bg-[#FFFAEE]" : ""} ${type === 'skill' ? "text-blue-600" : ""}`}
      onClick={handleNodeClick}
      onContextMenu={handleContextMenu}
      style={{ paddingLeft: `${level * 16 + 8}px` }}
    >
      <div className="flex items-center w-full gap-2">
        {hasChildren ? (
          isExpanded ? (
            <Image src="/tree-menu/minus_for_tree.png" alt="접기" width={12} height={12} />
          ) : (
            <Image src="/tree-menu/plus_icon_for_tree.png" alt="펼치기" width={12} height={12} />
          )
        ) : (
          <span className="w-3" />
        )}
        {renderIcon()}
        <span className={`text-sm ${type === 'skill' ? 'text-blue-600' : 'text-555'} ${isSelected ? "font-medium" : ""}`}>
          {type === 'counselor' ? `${getLabel()} [${getId()}]` : getLabel()}
        </span>
      </div>
    </div>
  );

  const renderWithContextMenu = (content: React.ReactNode) => {
    // organization 또는 tenant 타입
    if (type === 'organization' || type === 'tenant') {
      return (
        <IContextMenuForTennantForCounselorTreeMenu>
          {content}
        </IContextMenuForTennantForCounselorTreeMenu>
      );
    }
  
    // group, team, counselor 타입 (skill은 컨텍스트 메뉴 제외)
    if (['group', 'team', 'counselor'].includes(type)) {
      const counselors = getCounselorsForNode();
      
      const contextMenuItem = {
        id:
          type === 'counselor'
            ? data.counselorId
            : type === 'team'
            ? data.teamId
            : data.groupId,
        name:
          type === 'counselor'
            ? data.counselorname
            : type === 'team'
            ? data.teamName
            : data.groupName,
        tenantId: currentTenantId,
        type: type as 'counselor' | 'team' | 'group',
        members: counselors
      };
  
      return (
        <IContextMenuForGroupAndTeamAndCounselor item={contextMenuItem}>
          {content} 
        </IContextMenuForGroupAndTeamAndCounselor>
      );
    }
  
    // skill 타입이나 그 외에는 컨텍스트 메뉴 없음
    return content;
  };
  
  return (
    <div className="select-none">
      {renderWithContextMenu(renderNodeContent())}
      {hasChildren && isExpanded && (
        <div className="space-y-0.5">
          {children.map((child: any) => {
            let childId;
            switch (child.type) {
              case 'tenant': childId = child.data.tenantId; break;
              case 'group': childId = child.data.groupId; break;
              case 'team': childId = child.data.teamId; break;
              case 'counselor': childId = child.data.counselorId; break;
              case 'skill': childId = child.data.skillId; break;
              default: childId = child.data.centerId;
            }
            return (
              <TreeNodeForCounselorListForSideBar
                key={`${child.type}-${childId}`}
                data={child.data}
                type={child.type}
                level={level + 1}
                expandedNodes={expandedNodes}
                selectedNodeId={selectedNodeId}
                onNodeToggle={onNodeToggle}
                onNodeSelect={onNodeSelect}
                defaultExpanded={defaultExpanded}
                parentTenantId={currentTenantId}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}