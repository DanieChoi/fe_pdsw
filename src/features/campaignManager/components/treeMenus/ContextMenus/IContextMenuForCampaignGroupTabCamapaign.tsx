"use client";

import React, { FC } from "react";
import { ContextMenuItem } from "@/components/ui/context-menu";
import { useTabStore } from "@/store/tabStore";

interface IContextMenuForCampaignGroupTabCamapaignProps {
  node: any;
  handleMenuItemClick: (e: React.MouseEvent, action: () => void) => void;
  setIsCampaignAddPopupOpen: (open: boolean) => void;
}

const IContextMenuForCampaignGroupTabCamapaign: FC<IContextMenuForCampaignGroupTabCamapaignProps> = ({
  node,
  handleMenuItemClick,
  setIsCampaignAddPopupOpen,
}) => {
  const { addTab } = useTabStore();

  return (
    <>
      <ContextMenuItem
        onClick={(e) =>
          handleMenuItemClick(e, () => {
            console.log(`캠페인 그룹 일괄 수정: ${node.name}`);
            addTab({
              id: 1,
              title: `캠페인 그룹 관리: ${node.name}`,
              uniqueKey: `groupBulkUpdate_${node.id}`,
              params: {
                groupId: node.group_id,
                groupName: node.name,
              },
            });
          })
        }
        className="flex items-center whitespace-nowrap"
      >
        캠페인 그룹 일괄 수정
      </ContextMenuItem>
      <ContextMenuItem
        onClick={(e) =>
          handleMenuItemClick(e, () => console.log(`캠페인 그룹 일괄 시작: ${node.name}`))
        }
        className="flex items-center whitespace-nowrap"
      >
        캠페인 그룹 일괄 시작
      </ContextMenuItem>
      <ContextMenuItem
        onClick={(e) =>
          handleMenuItemClick(e, () => console.log(`캠페인 그룹 일괄 완료: ${node.name}`))
        }
        className="flex items-center whitespace-nowrap"
      >
        캠페인 그룹 일괄 완료
      </ContextMenuItem>
      <ContextMenuItem
        onClick={(e) =>
          handleMenuItemClick(e, () => console.log(`캠페인 그룹 일괄 중지: ${node.name}`))
        }
        className="flex items-center whitespace-nowrap"
      >
        캠페인 그룹 일괄 중지
      </ContextMenuItem>
      <ContextMenuItem
        onClick={(e) =>
          handleMenuItemClick(e, () => console.log(`캠페인 그룹 이름 변경: ${node.name}`))
        }
        className="flex items-center whitespace-nowrap"
      >
        캠페인 그룹 이름 변경
      </ContextMenuItem>
      <ContextMenuItem
        onClick={(e) =>
          handleMenuItemClick(e, () => console.log(`캠페인 그룹 삭제: ${node.name}`))
        }
        className="flex items-center whitespace-nowrap"
      >
        캠페인 그룹 삭제
      </ContextMenuItem>
      <ContextMenuItem
        onClick={(e) =>
          handleMenuItemClick(e, () => {
            console.log(`캠페인 추가/제외: ${node.name}`);
            setIsCampaignAddPopupOpen(true);
          })
        }
        className="flex items-center whitespace-nowrap"
      >
        캠페인 그룹에 캠페인 추가
      </ContextMenuItem>
      <ContextMenuItem
        onClick={(e) =>
          handleMenuItemClick(e, () => console.log(`캠페인 그룹 실시간 재발신: ${node.name}`))
        }
        className="flex items-center whitespace-nowrap"
      >
        캠페인 그룹 실시간 재발신
      </ContextMenuItem>
    </>
  );
};

export default IContextMenuForCampaignGroupTabCamapaign;
