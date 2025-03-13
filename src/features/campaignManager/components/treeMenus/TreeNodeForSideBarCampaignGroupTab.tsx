// "use client";

// import {
//   ChevronRight,
//   ChevronDown,
//   Building,
//   Briefcase,
// } from "lucide-react";
// import Image from "next/image";
// import { useCallback, useState, useEffect, useRef } from "react";
// import {
//   ContextMenu,
//   ContextMenuTrigger,
//   ContextMenuContent,
//   ContextMenuItem,
// } from "@/components/ui/context-menu";
// import { TreeNode } from "@/features/campaignManager/types/typeForCampaignGroupForSideBar";
// import AddCampaignGroupDialog from "./dialog/AddCampaignGroupDialog";
// import { useTabStore } from "@/store/tabStore";
// import { ContextMenuForTreeNode } from "./ContextMenuForTreeNode";
// import CampaignAddPopup from '@/features/campaignManager/components/popups/CampaignAddPopup';
// import IContextMenuForCampaignTabTenant from "./ContextMenus/IContextMenuForCampaignTabTenant";
// import { CommonContextMenu } from "@/components/shared/CommonContextMenu";
// import IContextMenuForCampaignGroupTabCamapaignGroup from "./ContextMenus/IContextMenuForCampaignGroupTabCamapaignGroup";

// interface TreeNodeProps {
//   node: TreeNode;
//   level: number;
//   expandedNodes: Set<string>;
//   selectedNodeId?: string;
//   onNodeToggle: (nodeId: string) => void;
//   onNodeSelect: (nodeId: string) => void;
// }

// const getStatusIcon = (status?: string) => {
//   switch (status) {
//     case 'started':
//       return '/sidebar-menu/tree_play.svg';
//     case 'pending':
//       return '/sidebar-menu/tree_pause.svg';
//     case 'stopped':
//       return '/sidebar-menu/tree_stop.svg';
//     default:
//       return null;
//   }
// };

// export function TreeNodeForSideBarCampaignGroupTab({
//   node,
//   level,
//   expandedNodes,
//   selectedNodeId,
//   onNodeToggle,
//   onNodeSelect,
// }: TreeNodeProps) {
//   // 다이얼로그와 컨텍스트 메뉴 상태
//   const [isAddGroupDialogOpen, setIsAddGroupDialogOpen] = useState(false);
//   const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
//   // 다이얼로그를 닫았는지 추적하는 ref 추가
//   const recentlyClosedDialogRef = useRef(false);
//   // ContextMenu를 강제로 닫기 위한 이벤트를 트리거하는 ref
//   const contextMenuTriggerRef = useRef<HTMLDivElement>(null);

//   // useTabStore 훅에서 addTab 함수 가져오기
//   const { addTab } = useTabStore();

//   const hasChildren = node.children && node.children.length > 0;
//   const isExpanded = expandedNodes.has(node.id);
//   const isSelected = selectedNodeId === node.id;

//   // 팝업 상태
//   const [isCampaignAddPopupOpen, setIsCampaignAddPopupOpen] = useState(false);

//   // 디버깅용 로그 추가
//   useEffect(() => {
//     if (node.type === "group" && hasChildren) {
//       console.log(`그룹 노드 ${node.name}에 캠페인 ${node.children?.length}개 있음, 확장 상태: ${isExpanded}`);
//     }
//   }, [node, hasChildren, isExpanded]);

//   // 컨텍스트 메뉴 강제 닫기 함수
//   const forceCloseContextMenu = useCallback(() => {
//     setIsContextMenuOpen(false);
//   }, []);

//   // "캠페인 그룹 추가" 메뉴 클릭 시 다이얼로그 열기
//   const handleOpenAddGroupDialog = useCallback((e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();

//     // 메뉴 강제 닫기
//     forceCloseContextMenu();

//     // 약간의 지연 후 다이얼로그 열기
//     setTimeout(() => {
//       setIsAddGroupDialogOpen(true);
//     }, 50);
//   }, [forceCloseContextMenu]);

//   // 다이얼로그 닫기
//   const handleCloseAddGroupDialog = useCallback(() => {
//     setIsAddGroupDialogOpen(false);
//     // 다이얼로그가 닫혔다고 표시
//     recentlyClosedDialogRef.current = true;
//     // 일정 시간 후에 플래그 초기화
//     setTimeout(() => {
//       recentlyClosedDialogRef.current = false;
//     }, 300);
//   }, []);

//   const handleAddGroup = useCallback((groupName: string, groupCode: string) => {
//     console.log("새 그룹 추가:", {
//       tenantId: node.tenant_id, // node.id 대신 node.tenant_id 사용
//       tenantName: node.name,
//       groupName,
//       groupCode,
//     });
//   }, [node.tenant_id, node.name]);

//   // 아이콘 렌더링
//   const renderIcon = useCallback(() => {
//     switch (node.type?.toLowerCase()) {
//       case "root":
//         return <Image src="/tree-menu/organization.png" alt="조직" width={14} height={12} />;
//       case "tenant":
//         return <Image src="/tree-menu/folder.png" alt="폴더" width={14} height={12} />;
//       case "group":
//         return <Image src="/tree-menu/folder2.png" alt="폴더2" width={15} height={12} />;
//       case "campaign":
//         return <span></span>;
//       default:
//         return <Building className="h-4 w-4 text-gray-500" />;
//     }
//   }, [node.type]);

//   // 노드 클릭 시 선택 및 확장/축소 처리
//   const handleClick = useCallback(() => {
//     onNodeSelect(node.id);

//     // 자식이 있는 모든 노드 타입은 확장/축소 토글
//     if (hasChildren) {
//       console.log(`노드 클릭 (타입: ${node.type}, ID: ${node.id}), 자식 수: ${node.children?.length}`);
//       onNodeToggle(node.id);
//     }
//   }, [node.id, node.type, hasChildren, node.children?.length, onNodeSelect, onNodeToggle]);
  
//   const handleContextMenu = useCallback(() => {
//     onNodeSelect(node.id);
//   }, [node.id, onNodeSelect]);

//   // 컨텍스트 메뉴 상태 변경 처리
//   const handleContextMenuOpenChange = useCallback((open: boolean) => {
//     if (open && recentlyClosedDialogRef.current) {
//       return;
//     }
//     setIsContextMenuOpen(open);
//   }, []);

//   // 메뉴 항목 클릭 처리 함수 (공통)
//   const handleMenuItemClick = useCallback((e: React.MouseEvent, action: () => void) => {
//     e.preventDefault();
//     e.stopPropagation();

//     forceCloseContextMenu();

//     setTimeout(() => {
//       action();
//     }, 50);
//   }, [forceCloseContextMenu]);

//   // 메뉴 항목 렌더링 함수 수정
//   const renderMenuItems = useCallback(() => {
//     if (node.type === "tenant") {
//       return (
//         <ContextMenuItem
//           onClick={(e) => handleMenuItemClick(e, () => {
//             console.log(`캠페인 그룹 추가: ${node.name}`);
//             setIsAddGroupDialogOpen(true);
//           })}
//         >
//           캠페인 그룹 추가
//         </ContextMenuItem>
//       );
//     }
//     if (node.type === "group") {
//       // 주석 해제하고 CommonContextMenu 부분 제거
//       return (
//         <IContextMenuForCampaignGroupTabCamapaignGroup
//           node={node}
//           setIsCampaignAddPopupOpen={setIsCampaignAddPopupOpen}
//         />
//       );
//     }
//     if (node.type === "campaign") {
//       return (
//         <ContextMenuForTreeNode
//           item={{
//             id: node.campaign_id?.toString() || "",
//             label: node.name,
//             type: "campaign",
//             status: (node.status as 'started' | 'pending' | 'stopped') || 'stopped'
//           }}
//           onEdit={() => console.log(`캠페인 수정: ${node.name} (ID: ${node.campaign_id})`)}
//           onMonitor={() => console.log(`캠페인 모니터링: ${node.name} (ID: ${node.campaign_id})`)}
//           onHandleCampaignCopy={() => console.log(`캠페인 복사: ${node.name} (ID: ${node.campaign_id})`)}
//         >
//           <div
//             ref={contextMenuTriggerRef}
//             className={getNodeStyle()}
//             onClick={handleClick}
//             onContextMenu={handleContextMenu}
//             style={{ paddingLeft: `${level * 16 + 8}px` }}
//           >
//             <div className="flex items-center w-full gap-2">
//               {hasChildren ? (
//                 isExpanded ? (
//                   <ChevronDown className="h-4 w-4 text-gray-500" />
//                 ) : (
//                   <ChevronRight className="h-4 w-4 text-gray-500" />
//                 )
//               ) : (
//                 <span className="w-4" />
//               )}
//               <Briefcase className="h-4 w-4 text-green-600" />
//               {node.status && getStatusIcon(node.status) && (
//                 <div className="flex-shrink-0 w-4 h-4 relative">
//                   <Image
//                     src={getStatusIcon(node.status) || ""}
//                     alt={node.status || "상태"}
//                     width={16}
//                     height={16}
//                     className="object-contain"
//                   />
//                 </div>
//               )}
//               <span className={`text-sm ${isSelected ? "font-medium" : ""}`}>
//                 {node.name}
//                 {node.campaign_id && (
//                   <span className="ml-1 text-xs text-gray-500">
//                     (ID: {node.campaign_id})
//                   </span>
//                 )}
//               </span>
//             </div>
//           </div>
//         </ContextMenuForTreeNode>
//       );
//     }
//     return null;
//   }, [node, handleMenuItemClick, setIsCampaignAddPopupOpen, isSelected, hasChildren, isExpanded, level, handleClick, contextMenuTriggerRef]);

//   // 노드의 스타일 결정
//   const getNodeStyle = useCallback(() => {
//     let baseStyle = `flex items-center hover:bg-[#FFFAEE] px-2 py-0.5 cursor-pointer transition-colors duration-150`;
//     if (isSelected) {
//       baseStyle += " bg-[#FFFAEE] text-555";
//     }
//     if (node.type === "campaign") {
//       baseStyle += isSelected ? "" : " text-green-600";
//     }
//     return baseStyle;
//   }, [isSelected, node.type]);

//   // tenant 타입일 때 트리거로 사용할 노드 UI
//   const renderTenantNodeUI = (
//     <div
//       ref={contextMenuTriggerRef}
//       className={getNodeStyle()}
//       onClick={handleClick}
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
//         <Image src="/tree-menu/folder.png" alt="폴더" width={14} height={12} />
//         <span className={`text-sm ${isSelected ? "font-medium text-555" : "text-555"}`}>
//           {node.name}
//         </span>
//       </div>
//     </div>
//   );

//   return (
//     <div className="select-none" data-node-type={node.type} data-node-id={node.id}>
//       {node.type === "campaign" ? (
//         <ContextMenuForTreeNode
//           item={{
//             id: node.campaign_id?.toString() || "",
//             label: node.name,
//             type: "campaign",
//             status: (node.status as 'started' | 'pending' | 'stopped') || 'stopped'
//           }}
//           onEdit={() => {
//             const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu } = useTabStore.getState();
//             simulateHeaderMenuClick(2);
//             setCampaignIdForUpdateFromSideMenu(node.campaign_id?.toString() || "");
//           }}
//           onMonitor={() => {
//             const { addMultiTab } = useTabStore.getState();
//             const uniqueKey = `monitor-${Date.now()}`;
//             addMultiTab({
//               id: 22,
//               uniqueKey: uniqueKey,
//               title: `상담원 상태 모니터 - ${node.name}`,
//               icon: '',
//               href: '',
//               content: null,
//               campaignId: node.campaign_id?.toString()
//             });
//           }}
//           onHandleCampaignCopy={() => {
//             console.log(`캠페인 복사: ${node.name} (ID: ${node.campaign_id})`);
//           }}
//         >
//           <div
//             className={getNodeStyle()}
//             onClick={handleClick}
//             onContextMenu={handleContextMenu} 
//             style={{ paddingLeft: `${level * 16 + 8}px` }}
//           >
//             <div className="flex items-center w-full gap-2">
//               {hasChildren ? (
//                 isExpanded ? (
//                   <Image src="/tree-menu/minus_for_tree.png" alt="접기" width={12} height={12} />
//                 ) : (
//                   <Image src="/tree-menu/plus_icon_for_tree.png" alt="펼치기" width={12} height={12} />
//                 )
//               ) : (
//                 <span className="w-3" />
//               )}
//               <span></span>
//               {node.status && getStatusIcon(node.status) && (
//                 <div className="flex-shrink-0 w-4 h-4 relative">
//                   <Image
//                     src={getStatusIcon(node.status) || ""}
//                     alt={node.status || "상태"}
//                     width={16}
//                     height={16}
//                     className="object-contain"
//                   />
//                 </div>
//               )}
//               <span className={`text-sm ${isSelected ? "font-medium" : ""}`}>
//                 {node.name}
//                 {node.campaign_id && (
//                   <span className="ml-1 text-xs text-[#555]">
//                     (ID: {node.campaign_id})
//                   </span>
//                 )}
//               </span>
//             </div>
//           </div>
//         </ContextMenuForTreeNode>
//       ) : node.type === "tenant" ? (
//         // tenant 타입일 경우 CommonContextMenu 사용
//         <CommonContextMenu
//           trigger={renderTenantNodeUI}
//         >
//           <IContextMenuForCampaignTabTenant
//             node={node}
//             setIsAddGroupDialogOpen={setIsAddGroupDialogOpen}
//           />
//         </CommonContextMenu>
//       ) : (
//         // 그 외 타입은 기존 ContextMenu 사용
//         <ContextMenu onOpenChange={handleContextMenuOpenChange}>
//           <ContextMenuTrigger asChild>
//             <div
//               ref={contextMenuTriggerRef}
//               className={getNodeStyle()}
//               onClick={handleClick}
//               style={{ paddingLeft: `${level * 16 + 8}px` }}
//             >
//               <div className="flex items-center w-full gap-2">
//                 {hasChildren ? (
//                   isExpanded ? (
//                     <Image src="/tree-menu/minus_for_tree.png" alt="접기" width={12} height={12} />
//                   ) : (
//                     <Image src="/tree-menu/plus_icon_for_tree.png" alt="펼치기" width={12} height={12} />
//                   )
//                 ) : (
//                   <span className="w-3" />
//                 )}
//                 {renderIcon()}
//                 <span className={`text-sm ${isSelected ? "font-medium text-555" : "text-555"}`}>
//                   {node.name}
//                 </span>
//               </div>
//             </div>
//           </ContextMenuTrigger>
//           <ContextMenuContent
//             className="w-62 bg-white shadow-md border rounded-md"
//             onClick={(e) => e.stopPropagation()}
//             onPointerDown={(e) => e.stopPropagation()}
//           >
//             {renderMenuItems()}
//           </ContextMenuContent>
//         </ContextMenu>
//       )}

//       {hasChildren && isExpanded && (
//         <div className="children-container space-y-1">
//           {node.children?.map((child) => (
//             <TreeNodeForSideBarCampaignGroupTab
//               key={child.id}
//               node={child}
//               level={level + 1}
//               expandedNodes={expandedNodes}
//               selectedNodeId={selectedNodeId}
//               onNodeToggle={onNodeToggle}
//               onNodeSelect={onNodeSelect}
//             />
//           ))}
//         </div>
//       )}

//       <AddCampaignGroupDialog
//         isOpen={isAddGroupDialogOpen}
//         onClose={handleCloseAddGroupDialog}
//         tenantId={node.tenant_id ? node.tenant_id : 0}
//         tenantName={node.name}
//         onAddGroup={handleAddGroup}
//       />

//       <CampaignAddPopup
//         isOpen={isCampaignAddPopupOpen}
//         onConfirm={() => setIsCampaignAddPopupOpen(false)}
//         onCancel={() => setIsCampaignAddPopupOpen(false)}
//       />
//     </div>
//   );
// }

"use client";

import { ChevronRight, ChevronDown, Building, Briefcase } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { Menu, Item, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { TreeNode } from "@/features/campaignManager/types/typeForCampaignGroupForSideBar";
import AddCampaignGroupDialog from "./dialog/AddCampaignGroupDialog";
import { useTabStore } from "@/store/tabStore";
import IContextMenuForCampaignTabTenant from "./ContextMenus/IContextMenuForCampaignTabTenant";
import CampaignAddPopup from '@/features/campaignManager/components/popups/CampaignAddPopup';
import IContextMenuForCampaignGroupTabCamapaignGroup from "./ContextMenus/IContextMenuForCampaignGroupTabCamapaignGroup";

interface TreeNodeProps {
  node: TreeNode;
  level: number;
  expandedNodes: Set<string>;
  selectedNodeId?: string;
  onNodeToggle: (nodeId: string) => void;
  onNodeSelect: (nodeId: string) => void;
}

const getStatusIcon = (status?: string) => {
  switch (status) {
    case "started":
      return "/sidebar-menu/tree_play.svg";
    case "pending":
      return "/sidebar-menu/tree_pause.svg";
    case "stopped":
      return "/sidebar-menu/tree_stop.svg";
    default:
      return null;
  }
};

export function TreeNodeForSideBarCampaignGroupTab({
  node,
  level,
  expandedNodes,
  selectedNodeId,
  onNodeToggle,
  onNodeSelect,
}: TreeNodeProps) {
  // 다이얼로그와 팝업 상태
  const [isAddGroupDialogOpen, setIsAddGroupDialogOpen] = useState(false);
  const [isCampaignAddPopupOpen, setIsCampaignAddPopupOpen] = useState(false);
  const recentlyClosedDialogRef = useRef(false);
  const { addTab } = useTabStore();
  
  // Move all useContextMenu calls to the top level
  const campaignMenuId = `campaign-menu-${node.id}`;
  const tenantMenuId = `tenant-menu-${node.id}`;
  const genericMenuId = `menu-${node.id}`;
  const { show: showCampaignMenu } = useContextMenu({ id: campaignMenuId });
  const { show: showTenantMenu } = useContextMenu({ id: tenantMenuId });
  const { show: showGenericMenu } = useContextMenu({ id: genericMenuId });

  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const isSelected = selectedNodeId === node.id;

  useEffect(() => {
    if (node.type === "group" && hasChildren) {
      console.log(`그룹 노드 ${node.name}에 캠페인 ${node.children?.length}개 있음, 확장 상태: ${isExpanded}`);
    }
  }, [node, hasChildren, isExpanded]);

  const handleClick = useCallback(() => {
    onNodeSelect(node.id);
    if (hasChildren) {
      console.log(`노드 클릭 (타입: ${node.type}, ID: ${node.id}), 자식 수: ${node.children?.length}`);
      onNodeToggle(node.id);
    }
  }, [node.id, node.type, hasChildren, node.children?.length, onNodeSelect, onNodeToggle]);

  const getNodeStyle = useCallback(() => {
    let baseStyle = `flex items-center hover:bg-[#FFFAEE] px-2 py-0.5 cursor-pointer transition-colors duration-150`;
    if (isSelected) {
      baseStyle += " bg-[#FFFAEE] text-555";
    }
    if (node.type === "campaign") {
      baseStyle += isSelected ? "" : " text-green-600";
    }
    return baseStyle;
  }, [isSelected, node.type]);

  // ── 각 노드 타입별로 react‑contexify 메뉴 적용 ──
  const renderIcon = () => {
    switch (node.type?.toLowerCase()) {
      case "root":
        return <Image src="/tree-menu/organization.png" alt="조직" width={14} height={12} />;
      case "tenant":
        return <Image src="/tree-menu/folder.png" alt="폴더" width={14} height={12} />;
      case "group":
        return <Image src="/tree-menu/folder2.png" alt="폴더2" width={15} height={12} />;
      case "campaign":
        return <Briefcase className="h-4 w-4 text-green-600" />;
      default:
        return <Building className="h-4 w-4 text-gray-500" />;
    }
  };

  const handleContextMenuEvent = (e: React.MouseEvent, menuId: string) => {
    e.preventDefault();
    if (menuId === campaignMenuId) {
      showCampaignMenu({ event: e });
    } else if (menuId === tenantMenuId) {
      showTenantMenu({ event: e });
    } else {
      showGenericMenu({ event: e });
    }
    onNodeSelect(node.id);
  };

  // 1. 캠페인 노드
  if (node.type === "campaign") {
    return (
      <>
        <div
          className={getNodeStyle()}
          onClick={handleClick}
          onContextMenu={(e) => handleContextMenuEvent(e, campaignMenuId)}
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
            <Briefcase className="h-4 w-4 text-green-600" />
            {node.status && getStatusIcon(node.status) && (
              <div className="flex-shrink-0 w-4 h-4 relative">
                <Image
                  src={getStatusIcon(node.status) || ""}
                  alt={node.status || "상태"}
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
            )}
            <span className={`text-sm ${isSelected ? "font-medium" : ""}`}>
              {node.name}
              {node.campaign_id && (
                <span className="ml-1 text-xs text-gray-500">
                  (ID: {node.campaign_id})
                </span>
              )}
            </span>
          </div>
        </div>

        <Menu id={campaignMenuId}>
          <Item
            onClick={() => {
              const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu } = useTabStore.getState();
              simulateHeaderMenuClick(2);
              setCampaignIdForUpdateFromSideMenu(node.campaign_id?.toString() || "");
            }}
          >
            캠페인 수정
          </Item>
          <Item
            onClick={() => {
              const { addMultiTab } = useTabStore.getState();
              const uniqueKey = `monitor-${Date.now()}`;
              addMultiTab({
                id: 22,
                uniqueKey: uniqueKey,
                title: `상담원 상태 모니터 - ${node.name}`,
                icon: "",
                href: "",
                content: null,
                campaignId: node.campaign_id?.toString(),
              });
            }}
          >
            캠페인 모니터링
          </Item>
          <Item
            onClick={() => {
              console.log(`캠페인 복사: ${node.name} (ID: ${node.campaign_id})`);
            }}
          >
            캠페인 복사
          </Item>
        </Menu>
      </>
    );
  }

  // 2. 테넌트 노드
  if (node.type === "tenant") {
    return (
      <>
        <div
          className={getNodeStyle()}
          onClick={handleClick}
          onContextMenu={(e) => handleContextMenuEvent(e, tenantMenuId)}
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
            <Image src="/tree-menu/folder.png" alt="폴더" width={14} height={12} />
            <span className={`text-sm ${isSelected ? "font-medium text-555" : "text-555"}`}>
              {node.name}
            </span>
          </div>
        </div>

        <Menu id={tenantMenuId}>
          <IContextMenuForCampaignTabTenant
            node={node}
            setIsAddGroupDialogOpen={setIsAddGroupDialogOpen}
          />
        </Menu>

        {hasChildren && isExpanded && (
          <div className="children-container space-y-1">
            {node.children?.map((child) => (
              <TreeNodeForSideBarCampaignGroupTab
                key={child.id}
                node={child}
                level={level + 1}
                expandedNodes={expandedNodes}
                selectedNodeId={selectedNodeId}
                onNodeToggle={onNodeToggle}
                onNodeSelect={onNodeSelect}
              />
            ))}
          </div>
        )}

        <AddCampaignGroupDialog
          isOpen={isAddGroupDialogOpen}
          onClose={() => {
            setIsAddGroupDialogOpen(false);
            recentlyClosedDialogRef.current = true;
            setTimeout(() => {
              recentlyClosedDialogRef.current = false;
            }, 300);
          }}
          tenantId={node.tenant_id ? node.tenant_id : 0}
          tenantName={node.name}
          onAddGroup={(groupName: string, groupCode: string) =>
            console.log("새 그룹 추가:", {
              tenantId: node.tenant_id,
              tenantName: node.name,
              groupName,
              groupCode,
            })
          }
        />
      </>
    );
  }

  // 3. 그 외(예: 그룹) 노드
  return (
    <>
      <div
        className={getNodeStyle()}
        onClick={handleClick}
        onContextMenu={(e) => handleContextMenuEvent(e, genericMenuId)}
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
          <span className={`text-sm ${isSelected ? "font-medium text-555" : "text-555"}`}>
            {node.name}
          </span>
        </div>
      </div>

      <Menu id={genericMenuId}>
        {node.type === "group" && (
          <IContextMenuForCampaignGroupTabCamapaignGroup
            node={node}
            setIsCampaignAddPopupOpen={setIsCampaignAddPopupOpen}
          />
        )}
      </Menu>

      {hasChildren && isExpanded && (
        <div className="children-container space-y-1">
          {node.children?.map((child) => (
            <TreeNodeForSideBarCampaignGroupTab
              key={child.id}
              node={child}
              level={level + 1}
              expandedNodes={expandedNodes}
              selectedNodeId={selectedNodeId}
              onNodeToggle={onNodeToggle}
              onNodeSelect={onNodeSelect}
            />
          ))}
        </div>
      )}

      <AddCampaignGroupDialog
        isOpen={isAddGroupDialogOpen}
        onClose={() => {
          setIsAddGroupDialogOpen(false);
          recentlyClosedDialogRef.current = true;
          setTimeout(() => {
            recentlyClosedDialogRef.current = false;
          }, 300);
        }}
        tenantId={node.tenant_id ? node.tenant_id : 0}
        tenantName={node.name}
        onAddGroup={(groupName: string, groupCode: string) =>
          console.log("새 그룹 추가:", {
            tenantId: node.tenant_id,
            tenantName: node.name,
            groupName,
            groupCode,
          })
        }
      />

      <CampaignAddPopup
        isOpen={isCampaignAddPopupOpen}
        onConfirm={() => setIsCampaignAddPopupOpen(false)}
        onCancel={() => setIsCampaignAddPopupOpen(false)}
      />
    </>
  );
}
