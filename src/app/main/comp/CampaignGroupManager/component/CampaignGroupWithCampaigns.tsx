// C:\Users\terec\fe_pdsw\src\app\main\comp\CampaignManager\CampaignGroupWithCampaigns.tsx
import React from 'react'
import DataGrid, { SelectColumn } from "react-data-grid";
import TitleWrap from "@/components/shared/TitleWrap";

interface Props {
    groupId: string;
    groupName: string;
    // campaigns: { campaignId: number; campaignName: string }[];
}

const columns = [
    { key: "campaignId", name: "캠페인 ID" },
    { key: "campaignName", name: "캠페인명" },
];


const CampaignGroupWithCampaigns = ({ groupId, groupName }: Props) => {

    return (
        <div className="w-[40%] shrink-0">
            <div>
                <TitleWrap title={`캠페인 그룹: ${groupName} (ID: ${groupId})`} />
                <div className="overflow-x-auto">
                    데이터 그리드로 캠페인 그룹 및 소속 캠페인 정보 출력
                </div>
            </div>
        </div>

    )
}

export default CampaignGroupWithCampaigns;