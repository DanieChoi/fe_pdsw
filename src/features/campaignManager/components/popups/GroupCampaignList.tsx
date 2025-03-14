"use client";

import React from 'react';
import CommonCheckBox2 from '@/components/shared/CommonCheckBox2';

interface GroupCampaign {
  group_id: number;
  campaign_id: number;
  tenant_id: number;
  campaign_name?: string;
  skill_id?: number;
  skill_name?: string;
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
  return (
    <div className="flex flex-col h-full">
      {isLoading ? (
        <div className="flex items-center justify-center h-full text-sm">로딩 중...</div>
      ) : groupCampaigns.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-500 text-sm">
          그룹 소속 캠페인이 없습니다.
        </div>
      ) : (
        <div className="flex-1 overflow-auto" style={{ paddingBottom: '20px' }}>
          <table className="w-full border-collapse table-fixed text-xs">
            <thead>
              <tr className="bg-white border-b sticky top-0 z-10">
                <th className="w-10 text-center">
                  <div className="py-2 px-3 flex justify-center">
                    <CommonCheckBox2
                      checked={groupCampaigns.length > 0}
                      onChange={toggleAllGroupCampaigns}
                      title="전체 선택"
                      size="md"
                    />
                  </div>
                </th>
                <th className="text-center py-2 px-3 font-medium w-10">NO</th>
                <th className="text-left py-2 px-3 font-medium w-20">스킬ID</th>
                <th className="text-left py-2 px-3 font-medium w-20">스킬명</th>
                <th className="text-left py-2 px-3 font-medium w-1/4">캠페인ID</th>
                <th className="text-left py-2 px-3 font-medium w-1/2">캠페인 이름</th>
              </tr>
            </thead>
            <tbody>
              {groupCampaigns.map((campaign, index) => (
                <tr 
                  key={`group-campaign-${campaign.campaign_id}`}
                  className="border-b bg-white hover:bg-gray-50"
                >
                  <td className="py-2 px-3 text-center">
                    <CommonCheckBox2
                      checked={true}
                      disabled={true}
                      size="md"
                    />
                  </td>
                  <td className="py-2 px-3 text-center">{index + 1}</td>
                  <td className="py-2 px-3 text-left">
                    {campaign.skill_id || 1001}
                  </td>
                  <td className="py-2 px-3 text-left">
                    {campaign.skill_name || `스킬${campaign.skill_id || 1}`}
                  </td>
                  <td className="py-2 px-3 text-left">{campaign.campaign_id}</td>
                  <td className="py-2 px-3 text-left text-blue-600">
                    {campaign.campaign_name || `캠페인 ${campaign.campaign_id}`}
                  </td>
                </tr>
              ))}
              {/* 마지막 행 이후 추가 여백을 위한 빈 행 */}
              <tr>
                <td colSpan={6} className="h-16"></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GroupCampaignList;