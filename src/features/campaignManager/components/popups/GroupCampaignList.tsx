"use client";

import React from 'react';

interface GroupCampaign {
  group_id: number;
  campaign_id: number;
  tenant_id: number;
  campaign_name?: string;
}

interface Props {
  isLoading: boolean;
  groupCampaigns: GroupCampaign[];
  toggleAllGroupCampaigns?: (checked: boolean) => void;
}

const GroupCampaignList: React.FC<Props> = ({ 
  isLoading, 
  groupCampaigns = [],
  toggleAllGroupCampaigns
}) => {
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (toggleAllGroupCampaigns) {
      toggleAllGroupCampaigns(e.target.checked);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-full text-sm">로딩 중...</div>
      ) : groupCampaigns.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-500 text-sm">
          그룹 소속 캠페인이 없습니다.
        </div>
      ) : (
        <table className="w-full border-collapse table-fixed text-xs">
          <thead>
            <tr className="bg-white border-b">
              <th className="w-8">
                <div className="py-1 px-2 flex items-center justify-center">
                  {/* <input
                    type="checkbox"
                    checked={groupCampaigns.length > 0}
                    onChange={handleSelectAll}
                    className="h-3 w-3 cursor-pointer"
                    title="전체 선택"
                  /> */}
                </div>
              </th>
              <th className="text-left py-1 px-2 font-medium w-1/4">캠페인ID</th>
              <th className="text-left py-1 px-2 font-medium w-3/4">캠페인 이름</th>
            </tr>
          </thead>
          <tbody>
            {groupCampaigns.map((campaign) => (
              <tr 
                key={`group-campaign-${campaign.campaign_id}`}
                className="border-b bg-white hover:bg-gray-50"
              >
                <td className="py-1 px-2 align-middle">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="h-3 w-3 cursor-not-allowed opacity-50"
                  />
                </td>
                <td className="py-1 px-2 align-middle">{campaign.campaign_id}</td>
                <td className="py-1 px-2 align-middle text-blue-600">
                  {campaign.campaign_name || `캠페인 ${campaign.campaign_id}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default GroupCampaignList;