
// // src\features\campaignManager\components\treeMenus\ContextMenus\IContextMenuForCampaignGroupAtCampaignGroup.tsx
// import React, { JSX } from "react";
// import { useTabStore } from "@/store/tabStore";
// import { useAvailableMenuStore } from "@/store/useAvailableMenuStore";
// import { Item, Separator } from "react-contexify";

// interface IContextMenuForCampaignGroupAtCampaignGroupProps {
//   node: any;
//   setIsCampaignAddPopupOpen: (open: boolean) => void;
//   setIsDeleteDialogOpen: (open: boolean) => void;
//   setIsRenameDialogOpen: (open: boolean) => void;
// }

// // 공통 스타일 설정
// const itemStyle: React.CSSProperties = {
//   fontSize: "13px",       // 글씨 크기
//   padding: "4px 6px",     // 아이템 여백
//   borderRadius: "3px",
// };

// const IContextMenuForCampaignGroupAtCampaignGroup: React.FC<IContextMenuForCampaignGroupAtCampaignGroupProps> = ({
//   node,
//   setIsCampaignAddPopupOpen,
//   setIsDeleteDialogOpen,
//   setIsRenameDialogOpen,
// }) => {
//   const { addTabCurrentOnly } = useTabStore.getState();

//   // Get available menu IDs from the store
//   const availableMenuIds = useAvailableMenuStore(
//     (state) => state.availableMenuIdsForCampaignGroupTabCampaignGroup
//   );

//   // 메뉴 아이템 정의 (메뉴 ID, 그룹, 레이블, 동작 함수)
//   const menuItems = [
//     // 첫 번째 그룹 (일괄 작업)
//     {
//       id: 38,
//       group: 1,
//       key: "bulk-update",
//       label: "캠페인 그룹 일괄 수정",
//       action: () => {
//         console.log(`캠페인 그룹 일괄 수정: ${node.name}`);
//         addTabCurrentOnly({
//           id: 1,
//           title: `캠페인 그룹 관리: ${node.name}`,
//           uniqueKey: `groupBulkUpdate_${node.group_id}_${Date.now()}`,
//           params: {
//             groupId: node.group_id,
//             groupName: node.name,
//           },
//         });
//       }
//     },
//     {
//       id: 39,
//       group: 1,
//       key: "bulk-start",
//       label: "캠페인 그룹 일괄 시작",
//       action: () => console.log(`캠페인 그룹 일괄 시작: ${node.name}`)
//     },
//     {
//       id: 40,
//       group: 1,
//       key: "bulk-complete",
//       label: "캠페인 그룹 일괄 멈춤",
//       action: () => console.log(`캠페인 그룹 일괄 멈춤: ${node.name}`)
//     },
//     {
//       id: 41,
//       group: 1,
//       key: "bulk-stop",
//       label: "캠페인 그룹 일괄 중지",
//       action: () => console.log(`캠페인 그룹 일괄 중지: ${node.name}`)
//     },

//     // 두 번째 그룹 (이름 변경, 삭제)
//     {
//       id: 42,
//       group: 2,
//       key: "rename",
//       label: "캠페인 그룹 이름 변경",
//       action: () => {
//         console.log("캠페인 그룹 이름 변경:", node);
//         setIsRenameDialogOpen(true);
//       }
//     },
//     {
//       id: 43,
//       group: 2,
//       key: "delete",
//       label: "캠페인 그룹 삭제",
//       action: () => {
//         console.log(`캠페인 그룹 삭제: ${node.name}`);
//         setIsDeleteDialogOpen(true);
//       }
//     },

//     // 세 번째 그룹 (캠페인 추가, 재발신)
//     {
//       id: 44,
//       group: 3,
//       key: "add-campaign",
//       label: "캠페인 그룹에 캠페인 추가",
//       action: () => {
//         console.log(`캠페인 추가/제외: ${node.name}`);
//         setIsCampaignAddPopupOpen(true);
//       }
//     },
//     {
//       id: 45,
//       group: 3,
//       key: "resend",
//       label: "캠페인 그룹 실시간 재발신",
//       action: () => {
//         console.log(`캠페인 그룹 실시간 재발신: ${node.name}`)
//         addTabCurrentOnly({
//           id: 24,
//           title: `재발신: ${node.name}`,
//           campaignId: node.group_id,
//           campaignName: node.name,
//           uniqueKey: `groupBulkUpdate_${node.group_id}_${Date.now()}`,
//           params: {
//             groupId: node.group_id,
//             groupName: node.name,
//           },
//         });
//       }
//     }
//   ];

//   // 허용된 메뉴 ID에 따라 메뉴 아이템 필터링
//   const visibleMenuItems = availableMenuIds?.length > 0
//     ? menuItems.filter(item => availableMenuIds.includes(item.id))
//     : [];

//   // 표시할 메뉴 아이템이 없으면 null 반환
//   if (visibleMenuItems.length === 0) {
//     return null;
//   }

//   // 메뉴 렌더링 함수 (구분선 처리 포함)
//   const renderMenuItems = () => {
//     const elements: JSX.Element[] = [];
//     let currentGroup = -1;

//     visibleMenuItems.forEach(item => {
//       // 그룹이 변경되면 구분선 추가 (첫 그룹 제외)
//       if (currentGroup !== -1 && item.group !== currentGroup) {
//         elements.push(<Separator key={`separator-${item.group}`} />);
//       }

//       // 메뉴 아이템 추가
//       elements.push(
//         <div
//           key={item.key}
//           style={itemStyle}
//           className="contexify-custom-item"
//           onClick={item.action}
//         >
//           {item.label}
//         </div>
//       );

//       // 현재 그룹 업데이트
//       currentGroup = item.group;
//     });

//     return elements;
//   };

//   return <>{renderMenuItems()}</>;
// };

// export default IContextMenuForCampaignGroupAtCampaignGroup;

// src\features\campaignManager\components\treeMenus\ContextMenus\IContextMenuForCampaignGroupAtCampaignGroup.tsx
import React, { JSX, useMemo } from "react";
import { useTabStore } from "@/store/tabStore";
import { useAvailableMenuStore } from "@/store/useAvailableMenuStore";
import { Item, Separator } from "react-contexify";

interface IContextMenuForCampaignGroupAtCampaignGroupProps {
  node: any;
  setIsCampaignAddPopupOpen: (open: boolean) => void;
  setIsDeleteDialogOpen: (open: boolean) => void;
  setIsRenameDialogOpen: (open: boolean) => void;
}

// 공통 스타일 설정
const itemStyle: React.CSSProperties = {
  fontSize: "13px",       // 글씨 크기
  padding: "4px 6px",     // 아이템 여백
  borderRadius: "3px",
};

const IContextMenuForCampaignGroupAtCampaignGroup: React.FC<IContextMenuForCampaignGroupAtCampaignGroupProps> = ({
  node,
  setIsCampaignAddPopupOpen,
  setIsDeleteDialogOpen,
  setIsRenameDialogOpen,
}) => {
  const { addTabCurrentOnly } = useTabStore.getState();

  // 캠페인 그룹에 속한 캠페인 ID 배열 추출
  // Define a type for campaign node children
  interface CampaignNode {
    type: string;
    campaign_id?: string | number;
    [key: string]: any;
  }

  const campaignIds = useMemo(() => {
    // node.children이 있고 배열인지 확인
    if (node.children && Array.isArray(node.children)) {
      // 캠페인 타입의 자식 노드들만 필터링하고 campaign_id를 추출
      return node.children
        .filter((child: CampaignNode) => child.type === "campaign" && child.campaign_id)
        .map((child: CampaignNode) => child.campaign_id);
    }
    return [];
  }, [node.children]);

  // Get available menu IDs from the store
  const availableMenuIds = useAvailableMenuStore(
    (state) => state.availableMenuIdsForCampaignGroupTabCampaignGroup
  );

  // 메뉴 아이템 정의 (메뉴 ID, 그룹, 레이블, 동작 함수)
  const menuItems = [
    // 첫 번째 그룹 (일괄 작업)
    {
      id: 38,
      group: 1,
      key: "bulk-update",
      label: "캠페인 그룹 일괄 수정",
      action: () => {
        console.log(`캠페인 그룹 일괄 수정: ${node.name}, 캠페인 ID 목록:`, campaignIds);
        addTabCurrentOnly({
          id: 1,
          title: `캠페인 그룹 관리: ${node.name}`,
          uniqueKey: `groupBulkUpdate_${node.group_id}_${Date.now()}`,
          params: {
            groupId: node.group_id,
            groupName: node.name,
            campaignIds: campaignIds, // 캠페인 ID 배열 전달
          },
        });
      }
    },
    {
      id: 39,
      group: 1,
      key: "bulk-start",
      label: "캠페인 그룹 일괄 시작",
      action: () => {
        console.log(`캠페인 그룹 일괄 시작: ${node.name}, 캠페인 ID 목록:`, campaignIds);
        // 여기서도 campaignIds 활용 가능
      }
    },
    {
      id: 40,
      group: 1,
      key: "bulk-complete",
      label: "캠페인 그룹 일괄 멈춤",
      action: () => {
        console.log(`캠페인 그룹 일괄 멈춤: ${node.name}, 캠페인 ID 목록:`, campaignIds);
        // 여기서도 campaignIds 활용 가능
      }
    },
    {
      id: 41,
      group: 1,
      key: "bulk-stop",
      label: "캠페인 그룹 일괄 중지",
      action: () => {
        console.log(`캠페인 그룹 일괄 중지: ${node.name}, 캠페인 ID 목록:`, campaignIds);
        // 여기서도 campaignIds 활용 가능
      }
    },

    // 두 번째 그룹 (이름 변경, 삭제)
    {
      id: 42,
      group: 2,
      key: "rename",
      label: "캠페인 그룹 이름 변경",
      action: () => {
        console.log("캠페인 그룹 이름 변경:", node);
        setIsRenameDialogOpen(true);
      }
    },
    {
      id: 43,
      group: 2,
      key: "delete",
      label: "캠페인 그룹 삭제",
      action: () => {
        console.log(`캠페인 그룹 삭제: ${node.name}`);
        setIsDeleteDialogOpen(true);
      }
    },

    // 세 번째 그룹 (캠페인 추가, 재발신)
    {
      id: 44,
      group: 3,
      key: "add-campaign",
      label: "캠페인 그룹에 캠페인 추가",
      action: () => {
        console.log(`캠페인 추가/제외: ${node.name}`);
        setIsCampaignAddPopupOpen(true);
      }
    },
    {
      id: 45,
      group: 3,
      key: "resend",
      label: "캠페인 그룹 실시간 재발신",
      action: () => {
        console.log(`캠페인 그룹 실시간 재발신: ${node.name}, 캠페인 ID 목록:`, campaignIds);
        addTabCurrentOnly({
          id:
 24,
          title: `재발신: ${node.name}`,
          campaignId: node.group_id,
          campaignName: node.name,
          uniqueKey: `groupBulkUpdate_${node.group_id}_${Date.now()}`,
          params: {
            groupId: node.group_id,
            groupName: node.name,
            campaignIds: campaignIds, // 캠페인 ID 배열 전달
          },
        });
      }
    }
  ];

  // 허용된 메뉴 ID에 따라 메뉴 아이템 필터링
  const visibleMenuItems = availableMenuIds?.length > 0
    ? menuItems.filter(item => availableMenuIds.includes(item.id))
    : [];

  // 표시할 메뉴 아이템이 없으면 null 반환
  if (visibleMenuItems.length === 0) {
    return null;
  }

  // 메뉴 렌더링 함수 (구분선 처리 포함)
  const renderMenuItems = () => {
    const elements: JSX.Element[] = [];
    let currentGroup = -1;

    visibleMenuItems.forEach(item => {
      // 그룹이 변경되면 구분선 추가 (첫 그룹 제외)
      if (currentGroup !== -1 && item.group !== currentGroup) {
        elements.push(<Separator key={`separator-${item.group}`} />);
      }

      // 메뉴 아이템 추가
      elements.push(
        <div
          key={item.key}
          style={itemStyle}
          className="contexify-custom-item"
          onClick={item.action}
        >
          {item.label}
        </div>
      );

      // 현재 그룹 업데이트
      currentGroup = item.group;
    });

    return elements;
  };

  return <>{renderMenuItems()}</>;
};

export default IContextMenuForCampaignGroupAtCampaignGroup;