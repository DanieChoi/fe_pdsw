// // src/features/campaignManager/components/ContextMenus/IContextMenuForCampaignGroupAtCampaignGroup.tsx
// import React from "react";
// import { useTabStore } from "@/store/tabStore";
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

//   return (
//     <>
//       <div
//         key="bulk-update"
//         style={itemStyle}
//         className="contexify-custom-item"
//         onClick={() => {
//           console.log(`캠페인 그룹 일괄 수정: ${node.name}`);
//           addTabCurrentOnly({
//             id: 1,
//             title: `캠페인 그룹 관리: ${node.name}`,
//             uniqueKey: `groupBulkUpdate_${node.group_id}_${Date.now()}`,
//             params: {
//               groupId: node.group_id,
//               groupName: node.name,
//             },
//           });
//         }}
//       >
//         캠페인 그룹 일괄 수정
//       </div>

//       <div
//         key="bulk-start"
//         style={itemStyle}
//         className="contexify-custom-item"
//         onClick={() => console.log(`캠페인 그룹 일괄 시작: ${node.name}`)}
//       >
//         캠페인 그룹 일괄 시작
//       </div>

//       <div
//         key="bulk-complete"
//         style={itemStyle}
//         className="contexify-custom-item"
//         onClick={() => console.log(`캠페인 그룹 일괄 완료: ${node.name}`)}
//       >
//         캠페인 그룹 일괄 완료
//       </div>

//       <div
//         key="bulk-stop"
//         style={itemStyle}
//         className="contexify-custom-item"
//         onClick={() => console.log(`캠페인 그룹 일괄 중지: ${node.name}`)}
//       >
//         캠페인 그룹 일괄 중지
//       </div>

//       <Separator key="separator-1" />

//       <div
//         key="rename"
//         style={itemStyle}
//         className="contexify-custom-item"
//         onClick={() => {
//           console.log("캠페인 그룹 이름 변경:", node);
//           setIsRenameDialogOpen(true);
//         }}
//       >
//         캠페인 그룹 이름 변경
//       </div>

//       <div
//         key="delete"
//         style={itemStyle}
//         className="contexify-custom-item"
//         onClick={() => {
//           console.log(`캠페인 그룹 삭제: ${node.name}`);
//           setIsDeleteDialogOpen(true);
//         }}
//       >
//         캠페인 그룹 삭제
//       </div>

//       <Separator key="separator-2" />

//       <div
//         key="add-campaign"
//         style={itemStyle}
//         className="contexify-custom-item"
//         onClick={() => {
//           console.log(`캠페인 추가/제외: ${node.name}`);
//           setIsCampaignAddPopupOpen(true);
//         }}
//       >
//         캠페인 그룹에 캠페인 추가
//       </div>

//       <div
//         key="resend"
//         style={itemStyle}
//         className="contexify-custom-item"
//         onClick={() => console.log(`캠페인 그룹 실시간 재발신: ${node.name}`)}
//       >
//         캠페인 그룹 실시간 재발신
//       </div>
//     </>
//   );
// };

// export default IContextMenuForCampaignGroupAtCampaignGroup;

import React, { JSX } from "react";
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
        console.log(`캠페인 그룹 일괄 수정: ${node.name}`);
        addTabCurrentOnly({
          id: 1,
          title: `캠페인 그룹 관리: ${node.name}`,
          uniqueKey: `groupBulkUpdate_${node.group_id}_${Date.now()}`,
          params: {
            groupId: node.group_id,
            groupName: node.name,
          },
        });
      }
    },
    {
      id: 39,
      group: 1,
      key: "bulk-start",
      label: "캠페인 그룹 일괄 시작",
      action: () => console.log(`캠페인 그룹 일괄 시작: ${node.name}`)
    },
    {
      id: 40,
      group: 1,
      key: "bulk-complete",
      label: "캠페인 그룹 일괄 완료",
      action: () => console.log(`캠페인 그룹 일괄 완료: ${node.name}`)
    },
    {
      id: 41,
      group: 1,
      key: "bulk-stop",
      label: "캠페인 그룹 일괄 중지",
      action: () => console.log(`캠페인 그룹 일괄 중지: ${node.name}`)
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
      action: () => console.log(`캠페인 그룹 실시간 재발신: ${node.name}`)
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