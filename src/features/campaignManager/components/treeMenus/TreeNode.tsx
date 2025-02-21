
// "use client";

// import { TreeNodeProps } from "@/components/shared/layout/SidebarPresenter";
// import { ContextMenuForTreeNode } from "./ContextMenuForTreeNode";
// import { FileText } from "lucide-react";
// import { useTabStore } from "@/store/tabStore";
// import { useCallback } from "react";
// import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
// import { FolderContextMenu } from "./FolderContextMenuForTreeNode";
// import Image from "next/image";
// import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";
// import clsx from "clsx";

// export function TreeNode({
//   item,
//   level,
//   expandedNodes,
//   selectedNodeId,
//   getStatusIcon,
//   onNodeToggle,
//   onNodeSelect,
// }: TreeNodeProps) {
//   const hasChildren = item.children && item.children.length > 0;
//   const isExpanded = expandedNodes.has(item.id);
//   const isSelected = selectedNodeId === item.id;
//   const statusIcon = item.type === "campaign" ? getStatusIcon(item.status) : null;
//   const { skilIdsForCampaignTreeMenu } = useSideMenuCampaignTabStore();

//   // 캠페인이 선택된 스킬을 가지고 있는지 확인
//   let hasSelectedSkill = false;
//   if (item.type === "campaign" && skilIdsForCampaignTreeMenu.length > 0) {
//     const campaignSkillIds = (item as any)?.skillIds || [];
//     hasSelectedSkill = campaignSkillIds.some((skillId: number) =>
//       skilIdsForCampaignTreeMenu.includes(skillId)
//     );
//   }

//   const { simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu, setCampaignIdForCopyCampaign, addTab } = useTabStore();

//   const handleClick = useCallback(() => {
//     onNodeSelect(item.id);
//     if (hasChildren) {
//       onNodeToggle(item.id);
//     }
//   }, [item.id, hasChildren, onNodeSelect, onNodeToggle]);

//   const handleDoubleClick = useCallback(() => {
//     if (item.type !== "campaign") return;
//     simulateHeaderMenuClick(2);
//     setCampaignIdForUpdateFromSideMenu(item.id);
//   }, [item, simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu]);

//   const getNodeIcon = () => {
//     switch (item.type) {
//       case "folder":
//         return (
//           <Image
//             src="/tree-menu/tennant_office.png"
//             alt="폴더"
//             width={14}
//             height={12}
//           />
//         );
//       case "campaign":
//         return statusIcon ? (
//           <Image src={statusIcon} alt="status" width={12} height={12} />
//         ) : (
//           <FileText className="h-4 w-4 text-gray-400" />
//         );
//       default:
//         return <FileText className="h-4 w-4 text-gray-400" />;
//     }
//   };

//   const handleEdit = () => {
//     console.log("Edit clicked:", { id: item.id, label: item.label, type: item.type });
//   };
//   const handleDelete = () => {
//     console.log("Delete clicked:", { id: item.id, label: item.label, type: item.type });
//   };
//   const handleMonitor = () => {
//     console.log("Monitor clicked:", { id: item.id, label: item.label, type: item.type });
//   };
//   const onHandleCampaignCopy = () => {
//     console.log("Copy clicked:", { id: item.id, label: item.label, type: item.type });
//     setCampaignIdForUpdateFromSideMenu(item.id);
//     setCampaignIdForCopyCampaign(item.id);
//     addTab({
//       id: 130,
//       uniqueKey: "130",
//       title: "캠페인 복사",
//       icon: "",
//       href: "",
//       content: null,
//     });
//   };

//   // clsx를 사용해 정적 클래스명으로 처리
//   const nodeStyle = clsx(
//     "flex items-center hover:bg-gray-100 px-2 py-1.5 cursor-pointer transition-colors duration-150",
//     {
//       "bg-blue-50 text-blue-600 hover:bg-blue-100": isSelected,
//       "bg-yellow-100": hasSelectedSkill,
//     }
//   );

//   const renderLabel = () => {
//     if (item.type === "skill") {
//       const isHighlighted = skilIdsForCampaignTreeMenu.includes(item.skillId);
//       return (
//         <span className={clsx(isHighlighted && "border border-blue-500 rounded-full px-2")}>
//           {item.skillId}
//           {isHighlighted && <span className="text-xs text-blue-500">✓</span>}  
//         </span>
//       );
//     }
//     return item.label;
//   };

//   return (
//     <div className="select-none">
//       {item.type === "folder" ? (
//         <ContextMenu>
//           <ContextMenuTrigger>
//             <div
//               className={nodeStyle}
//               onClick={handleClick}
//               style={{ paddingLeft: `${level * 16 + 8}px` }}
//             >
//               <div className="flex items-center w-full gap-2">
//                 {hasChildren ? (
//                   isExpanded ? (
//                     <Image
//                       src="/tree-menu/minus_for_tree.png"
//                       alt="접기"
//                       width={12}
//                       height={12}
//                     />
//                   ) : (
//                     <Image
//                       src="/tree-menu/plus_icon_for_tree.png"
//                       alt="펼치기"
//                       width={12}
//                       height={12}
//                     />
//                   )
//                 ) : (
//                   <span className="w-4" />
//                 )}
//                 {getNodeIcon()}
//                 <span className={clsx("text-sm", { "font-medium": isSelected })}>
//                   {renderLabel()}
//                 </span>
//               </div>
//             </div>
//           </ContextMenuTrigger>
//           <FolderContextMenu item={item} />
//         </ContextMenu>
//       ) : (
//         <ContextMenuForTreeNode
//           item={item}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//           onMonitor={handleMonitor}
//           onHandleCampaignCopy={onHandleCampaignCopy}
//         >
//           <div
//             className={nodeStyle}
//             onClick={handleClick}
//             onDoubleClick={handleDoubleClick}
//             style={{ paddingLeft: `${level * 16 + 8}px` }}
//           >
//             <div className="flex items-center w-full gap-2">
//               {hasChildren ? (
//                 isExpanded ? (
//                   <Image
//                     src="/tree-menu/minus_for_tree.png"
//                     alt="접기"
//                     width={12}
//                     height={12}
//                   />
//                 ) : (
//                   <Image
//                     src="/tree-menu/plus_icon_for_tree.png"
//                     alt="펼치기"
//                     width={12}
//                     height={12}
//                   />
//                 )
//               ) : (
//                 <span className="w-4" />
//               )}
//               {getNodeIcon()}
//               <span className={clsx("text-sm", { "font-medium": isSelected })}>
//                 {renderLabel()}
//               </span>
//             </div>
//           </div>
//         </ContextMenuForTreeNode>
//       )}

//       {hasChildren && isExpanded && (
//         <div>
//           {item.children?.map((child: typeof item) => (
//             <TreeNode
//               key={child.id}
//               item={child}
//               level={level + 1}
//               expandedNodes={expandedNodes}
//               selectedNodeId={selectedNodeId}
//               getStatusIcon={getStatusIcon}
//               onNodeToggle={onNodeToggle}
//               onNodeSelect={onNodeSelect}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { TreeNodeProps } from "@/components/shared/layout/SidebarPresenter";
import { ContextMenuForTreeNode } from "./ContextMenuForTreeNode";
import { FileText } from "lucide-react";
import { useTabStore } from "@/store/tabStore";
import { useCallback } from "react";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { FolderContextMenu } from "./FolderContextMenuForTreeNode";
import Image from "next/image";
import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";
import clsx from "clsx";

export function TreeNode({
  item,
  level,
  expandedNodes,
  selectedNodeId,
  getStatusIcon,
  onNodeToggle,
  onNodeSelect,
}: TreeNodeProps) {
  const { skilIdsForCampaignTreeMenu } = useSideMenuCampaignTabStore();
  const {
    simulateHeaderMenuClick,
    setCampaignIdForUpdateFromSideMenu,
    setCampaignIdForCopyCampaign,
    addTab,
  } = useTabStore();

  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedNodes.has(item.id);
  const isSelected = selectedNodeId === item.id;
  const statusIcon = item.type === "campaign" ? getStatusIcon(item.status) : null;

  const handleClick = useCallback(() => {
    onNodeSelect(item.id);
    if (hasChildren) {
      onNodeToggle(item.id);
    }
  }, [item.id, hasChildren, onNodeSelect, onNodeToggle]);

  const handleDoubleClick = useCallback(() => {
    if (item.type !== "campaign") return;
    simulateHeaderMenuClick(2);
    setCampaignIdForUpdateFromSideMenu(item.id);
  }, [item, simulateHeaderMenuClick, setCampaignIdForUpdateFromSideMenu]);

  // 1) visible이 false이면 렌더링하지 않음
  if (item.visible === false) {
    return null;
  }

  // (스킬 노드 숨김도 필요하면, item.type === "skill" 체크 후 return null 추가)

  // (아래는 기존 로직과 동일)
  let hasSelectedSkill = false;
  if (item.type === "campaign" && skilIdsForCampaignTreeMenu.length > 0) {
    const campaignSkillIds = (item as any)?.skillIds || [];
    hasSelectedSkill = campaignSkillIds.some((skillId: number) =>
      skilIdsForCampaignTreeMenu.includes(skillId)
    );
  }

  const getNodeIcon = () => {
    switch (item.type) {
      case "folder":
        return (
          <Image
            src="/tree-menu/tennant_office.png"
            alt="폴더"
            width={14}
            height={12}
          />
        );
      case "campaign":
        return statusIcon ? (
          <Image src={statusIcon} alt="status" width={12} height={12} />
        ) : (
          <FileText className="h-4 w-4 text-gray-400" />
        );
      default:
        return <FileText className="h-4 w-4 text-gray-400" />;
    }
  };

  const handleEdit = () => {
    console.log("Edit clicked:", { id: item.id, label: item.label, type: item.type });
  };
  const handleDelete = () => {
    console.log("Delete clicked:", { id: item.id, label: item.label, type: item.type });
  };
  const handleMonitor = () => {
    console.log("Monitor clicked:", { id: item.id, label: item.label, type: item.type });
  };
  const onHandleCampaignCopy = () => {
    console.log("Copy clicked:", { id: item.id, label: item.label, type: item.type });
    setCampaignIdForUpdateFromSideMenu(item.id);
    setCampaignIdForCopyCampaign(item.id);
    addTab({
      id: 130,
      uniqueKey: "130",
      title: "캠페인 복사",
      icon: "",
      href: "",
      content: null,
    });
  };

  const nodeStyle = clsx(
    "flex items-center hover:bg-gray-100 px-2 py-1.5 cursor-pointer transition-colors duration-150",
    {
      "bg-blue-50 text-blue-600 hover:bg-blue-100": isSelected,
      "bg-yellow-100": hasSelectedSkill,
    }
  );

  return (
    <div className="select-none">
      {item.type === "folder" ? (
        <ContextMenu>
          <ContextMenuTrigger>
            <div
              className={nodeStyle}
              onClick={handleClick}
              style={{ paddingLeft: `${level * 16 + 8}px` }}
            >
              <div className="flex items-center w-full gap-2">
                {hasChildren ? (
                  isExpanded ? (
                    <Image
                      src="/tree-menu/minus_for_tree.png"
                      alt="접기"
                      width={12}
                      height={12}
                    />
                  ) : (
                    <Image
                      src="/tree-menu/plus_icon_for_tree.png"
                      alt="펼치기"
                      width={12}
                      height={12}
                    />
                  )
                ) : (
                  <span className="w-4" />
                )}
                {getNodeIcon()}
                <span className={clsx("text-sm", { "font-medium": isSelected })}>
                  {item.label}
                </span>
              </div>
            </div>
          </ContextMenuTrigger>
          <FolderContextMenu item={item} />
        </ContextMenu>
      ) : (
        <ContextMenuForTreeNode
          item={item}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onMonitor={handleMonitor}
          onHandleCampaignCopy={onHandleCampaignCopy}
        >
          <div
            className={nodeStyle}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
          >
            <div className="flex items-center w-full gap-2">
              {hasChildren ? (
                isExpanded ? (
                  <Image
                    src="/tree-menu/minus_for_tree.png"
                    alt="접기"
                    width={12}
                    height={12}
                  />
                ) : (
                  <Image
                    src="/tree-menu/plus_icon_for_tree.png"
                    alt="펼치기"
                    width={12}
                    height={12}
                  />
                )
              ) : (
                <span className="w-4" />
              )}
              {getNodeIcon()}
              <span className={clsx("text-sm", { "font-medium": isSelected })}>
                {item.label}
              </span>
            </div>
          </div>
        </ContextMenuForTreeNode>
      )}

      {hasChildren && isExpanded && (
        <div>
          {item.children?.map((child: typeof item) => (
            <TreeNode
              key={child.id}
              item={child}
              level={level + 1}
              expandedNodes={expandedNodes}
              selectedNodeId={selectedNodeId}
              getStatusIcon={getStatusIcon}
              onNodeToggle={onNodeToggle}
              onNodeSelect={onNodeSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
