// src/features/campaignManager/components/GroupCampaignList.tsx
"use client";

import React from 'react';

export interface GroupCampaign {
  tenant_id: number;
  group_id: number;
  group_name: string;
  campaign_id: number;
  campaign_name: string;
  start_flag: number;
}

interface GroupCampaignListProps {
  isLoading: boolean;
  groupCampaigns: GroupCampaign[];
}

const GroupCampaignList: React.FC<GroupCampaignListProps> = ({ isLoading, groupCampaigns }) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full text-sm">
        로딩 중...
      </div>
    );
  }

  if (groupCampaigns.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 text-sm">
        그룹 소속 캠페인이 없습니다.
      </div>
    );
  }

  return (
    <table className="w-full border-collapse table-fixed text-xs">
      <thead>
        <tr className="bg-white border-b">
          <th className="w-8"></th>
          <th className="text-left py-1 px-2 font-medium w-1/4">그룹명</th>
          <th className="text-left py-1 px-2 font-medium w-1/4">캠페인ID</th>
          <th className="text-left py-1 px-2 font-medium w-1/2">캠페인 이름</th>
        </tr>
      </thead>
      <tbody>
        {groupCampaigns.map(item => (
          <tr key={`group-${item.group_id}-${item.campaign_id}`} className="border-b bg-white hover:bg-gray-50">
            <td className="py-1 px-2 align-middle">
              {/* 읽기 전용 체크박스 */}
              <input
                type="checkbox"
                checked={false}
                readOnly
                className="h-3 w-3 cursor-pointer"
              />
            </td>
            <td className="py-1 px-2 align-middle">{item.group_name}</td>
            <td className="py-1 px-2 align-middle">{item.campaign_id}</td>
            <td className="py-1 px-2 align-middle text-blue-600">{item.campaign_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GroupCampaignList;
