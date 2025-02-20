"use client";

import {
  ChevronRight,
  ChevronDown,
  UserCircle2,
} from "lucide-react";

import { IContextMenuForTennantForCounselorTreeMenu } from "./ContextMenus/IContextMenuForTennantForCounselorTreeMenu";
import { IContextMenuForGroupAndTeamAndCounselor } from "./ContextMenus/IContextMenuForGroupAndTeamAndCounselorProps";
import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";

interface ExpandConfig {
  organization?: boolean;
  tenant?: boolean;
  group?: boolean;
  team?: boolean;
  counselor?: boolean;
}

interface ITreeNodeForCounselorListForSideBar {
  data: any;
  level: number;
  expandedNodes: Set<string>;
  selectedNodeId?: string;
  onNodeToggle: (nodeId: string) => void;
  onNodeSelect: (nodeId: string) => void;
  type: 'organization' | 'tenant' | 'group' | 'team' | 'counselor';
  defaultExpanded: ExpandConfig;
}

export function TreeNodeForCounselorListForSideBar({
  data,
  level,
  expandedNodes,
  selectedNodeId,
  onNodeToggle,
  onNodeSelect,
  type,
  defaultExpanded
}: ITreeNodeForCounselorListForSideBar) {
  const { selectedBlendKind } = useCounselorFilterStore();

  const getCounselorsForNode = () => {
    switch (type) {
      case 'counselor':
        return [data]; // 상담원 노드인 경우 자기 자신
      case 'team':
        return data.counselorInfo || []; // 팀 노드인 경우 직속 상담원들
      case 'group':
        // 그룹 노드인 경우 모든 하위 팀의 상담원들을 합침
        return data.teamInfo?.reduce((acc: any[], team: any) => {
          return acc.concat(team.counselorInfo || []);
        }, []) || [];
      // case 'tenant':
      //   // 테넌트 노드인 경우 모든 하위 그룹과 팀의 상담원들을 합침
      //   return data.groupInfo?.reduce((acc: any[], group: any) => {
      //     return acc.concat(
      //       group.teamInfo?.reduce((teamAcc: any[], team: any) => {
      //         return teamAcc.concat(team.counselorInfo || []);
      //       }, []) || []
      //     );
      //   }, []) || [];
      // case 'organization':
      //   // 조직 노드인 경우 모든 하위 테넌트, 그룹, 팀의 상담원들을 합침
      //   return data.tenantInfo?.reduce((acc: any[], tenant: any) => {
      //     return acc.concat(
      //       tenant.groupInfo?.reduce((groupAcc: any[], group: any) => {
      //         return groupAcc.concat(
      //           group.teamInfo?.reduce((teamAcc: any[], team: any) => {
      //             return teamAcc.concat(team.counselorInfo || []);
      //           }, []) || []
      //         );
      //       }, []) || []
      //     );
      //   }, []) || [];
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
      case 'counselor': return `counselor-${data.counselorId}`;
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'organization': return data.centerName;
      case 'tenant': return data.tenantName;
      case 'group': return data.groupName;
      case 'team': return data.teamName;
      case 'counselor': return data.counselorname;
    }
  };

  const getChildren = () => {
    switch (type) {
      case 'organization': return data.tenantInfo?.map((tenant: any) => ({
        type: 'tenant',
        data: tenant
      }));
      case 'tenant': return data.groupInfo?.map((group: any) => ({
        type: 'group',
        data: group
      }));
      case 'group': return data.teamInfo?.map((team: any) => ({
        type: 'team',
        data: team
      }));
      case 'team': {
        const counselors = data.counselorInfo?.map((counselor: any) => ({
          type: 'counselor',
          data: counselor
        }));
        
        // Apply blend kind filter if selected
        if (selectedBlendKind !== null && counselors) {
          return counselors.filter(
            (counselor: any) => Number(counselor.data.blendKind) === selectedBlendKind
          );
        }
        return counselors;
      }
      case 'counselor': return null;
    }
  };

  const id = getId();
  const label = getLabel();
  const children = getChildren();
  const hasChildren = children && children.length > 0;
  const isExpanded = expandedNodes.has(id);
  const isSelected = selectedNodeId === id;

  const renderIcon = () => {
    switch (type) {
      case 'organization':
        return <img src="/tree-menu/tennant_office.png" alt="테넌트" className="h-4 w-4" />;
      case 'tenant':
        return <img src="/tree-menu/tennant_office.png" alt="테넌트" className="h-4 w-4" />;
      case 'group':
        return <img src="/tree-menu/group_icon_for_tree.png" alt="그룹" className="h-4 w-4" />;
      case 'team':
        return <img src="/tree-menu/team_icon_for_tree.png" alt="팀" className="h-4 w-4" />;
      case 'counselor':
        const blendKind = Number(data.blendKind);
        switch (blendKind) {
          case 1:
            return <img src="/tree-menu/inbound_counselor.png" alt="인바운드" className="h-4 w-4" />;
          case 2:
            return <img src="/tree-menu/outbound_counselor.png" alt="아웃바운드" className="h-4 w-4" />;
          case 3:
            return <img src="/tree-menu/inbound_outbound_mix.png" alt="블렌드" className="h-4 w-4" />;
          default:
            return <UserCircle2 className="h-4 w-4 text-gray-600" />;
        }
    }
  };

  const renderNodeContent = () => (
    <div
      className={`flex items-center hover:bg-gray-100 rounded-lg px-2 py-1.5 cursor-pointer
        ${isSelected ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : ""}`}
      onClick={() => {
        onNodeSelect(id);
        if (hasChildren) onNodeToggle(id);
        
        // 노드 클릭시 상담원 리스트 출력
        const counselors = getCounselorsForNode();
        console.log(`${type} 노드의 상담원 목록:`, counselors);
      }}
      style={{ paddingLeft: `${level * 16 + 8}px` }}
    >
      <div className="flex items-center w-full gap-2">
        {hasChildren ? (
          isExpanded ? (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronRight className="h-4 w-4 text-gray-500" />
          )
        ) : (
          <span className="w-4" />
        )}
        {renderIcon()}
        <span className={`text-sm ${isSelected ? "font-medium" : ""}`}>
          {label}
        </span>
      </div>
    </div>
  );

  const renderWithContextMenu = (content: React.ReactNode) => {
    if (type === 'tenant') {
      return (
        <IContextMenuForTennantForCounselorTreeMenu>
          {content}
        </IContextMenuForTennantForCounselorTreeMenu>
      );
    }

    if (['group', 'team', 'counselor'].includes(type)) {
      const contextMenuItem = {
        id: type === 'counselor' ? data.counselorId : 
            type === 'team' ? data.teamId : 
            data.groupId,
        name: type === 'counselor' ? data.counselorname : 
              type === 'team' ? data.teamName : 
              data.groupName,
        tenantId: data.tenantId,
        type: type as 'counselor' | 'team' | 'group'
      };
    
      return (
        <IContextMenuForGroupAndTeamAndCounselor item={contextMenuItem}>
          {content}
        </IContextMenuForGroupAndTeamAndCounselor>
      );
    }

    return content;
  };

  return (
    <div className="select-none">
      {renderWithContextMenu(renderNodeContent())}
      {hasChildren && isExpanded && (
        <div>
          {children.map((child: any) => {
            let childId;
            switch (child.type) {
              case 'tenant': childId = child.data.tenantId; break;
              case 'group': childId = child.data.groupId; break;
              case 'team': childId = child.data.teamId; break;
              case 'counselor': childId = child.data.counselorId; break;
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
              />
            );
          })}
        </div>
      )}
    </div>
  );
}