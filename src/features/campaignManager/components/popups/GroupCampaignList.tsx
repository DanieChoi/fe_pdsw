"use client";

import React, { useState, useEffect, useMemo } from 'react';
import CommonCheckBox2 from "@/components/shared/CommonCheckBox2";

interface GroupCampaign {
  campaign_id: number;
  tenant_id?: number;
  group_id: number;
  skill_id?: number[];
}

interface Props {
  isLoading: boolean;
  groupCampaigns: GroupCampaign[];
  toggleAllGroupCampaigns: (checked: boolean, selectedIds: number[]) => void;
}

const GroupCampaignList: React.FC<Props> = ({
  isLoading,
  groupCampaigns = [],
  toggleAllGroupCampaigns
}) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  
  // 초기에 모든 캠페인 선택 상태 제거 (새로 선택 가능하도록)
  useEffect(() => {
    if (groupCampaigns.length > 0) {
      setSelectedRows([]);
      // 부모 컴포넌트에 선택 상태 초기화 알림
      toggleAllGroupCampaigns(false, []);
    } else {
      setSelectedRows([]);
    }
  }, [groupCampaigns]);

  // 전체 선택 상태 계산
  const allSelected = useMemo(() => {
    return groupCampaigns.length > 0 && selectedRows.length === groupCampaigns.length;
  }, [groupCampaigns, selectedRows]);
  
  // 부분 선택 상태 계산
  const hasPartialSelection = useMemo(() => {
    return selectedRows.length > 0 && selectedRows.length < groupCampaigns.length;
  }, [groupCampaigns, selectedRows]);

  // 개별 행 토글
  const toggleRow = (campaignId: number) => {
    const isSelected = selectedRows.includes(campaignId);
    const newSelection = isSelected
      ? selectedRows.filter(id => id !== campaignId)
      : [...selectedRows, campaignId];
    
    setSelectedRows(newSelection);
    // 부모 컴포넌트에 알림 - 선택된 ID 목록 전달
    toggleAllGroupCampaigns(newSelection.length > 0, newSelection);
  };

  // 모든 행 토글
  const toggleAllRows = (checked: boolean) => {
    const newSelection = checked ? groupCampaigns.map(item => item.campaign_id) : [];
    setSelectedRows(newSelection);
    // 부모 컴포넌트에 알림 - 선택된 ID 목록 전달
    toggleAllGroupCampaigns(checked, newSelection);
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-full text-sm">로딩 중...</div>;
  }

  if (groupCampaigns.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 text-sm">
        그룹에 속한 캠페인이 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto" style={{ paddingBottom: '20px' }}>
        <table className="w-full border-collapse table-fixed text-xs">
          <thead>
            <tr className="bg-gray-50 border-b sticky top-0 z-10">
              <th className="w-12 py-2 px-3 text-center">
                <CommonCheckBox2
                  checked={allSelected}
                  indeterminate={hasPartialSelection}
                  onChange={toggleAllRows}
                  title="전체 선택"
                />
              </th>
              <th className="text-left py-2 px-3 font-medium text-gray-700">캠페인ID</th>
              <th className="text-left py-2 px-3 font-medium text-gray-700">캠페인 이름</th>
              <th className="text-left py-2 px-3 font-medium text-gray-700">스킬ID</th>
              <th className="text-left py-2 px-3 font-medium text-gray-700">스킬명</th>
            </tr>
          </thead>
          <tbody>
            {groupCampaigns.map((campaign) => (
              <tr 
                key={`campaign-${campaign.campaign_id}`}
                className="border-b bg-white hover:bg-gray-100"
              >
                <td className="py-2 px-3 align-middle text-center">
                  <CommonCheckBox2
                    checked={selectedRows.includes(campaign.campaign_id)}
                    onChange={() => toggleRow(campaign.campaign_id)}
                  />
                </td>
                <td className="py-2 px-3 align-middle font-medium">{campaign.campaign_id}</td>
                <td className="py-2 px-3 align-middle text-blue-700">{`캠페인 ${campaign.campaign_id}`}</td>
                <td className="py-2 px-3 align-middle">14</td>
                <td className="py-2 px-3 align-middle">스킬1</td>
              </tr>
            ))}
            {/* 마지막 행 이후 추가 여백을 위한 빈 행 */}
            <tr>
              <td colSpan={5} className="h-16"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupCampaignList;