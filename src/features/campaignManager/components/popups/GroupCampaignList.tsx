// "use client";

// import React, { useState, useEffect, useMemo } from 'react';
// import DataGrid from "react-data-grid";
// import 'react-data-grid/lib/styles.css';
// import CommonCheckBox2 from "@/components/shared/CommonCheckBox2";

// interface GroupCampaign {
//   campaign_id: number;
//   tenant_id?: number;
//   group_id: number;
//   skill_id?: number[];
// }

// interface Props {
//   isLoading: boolean;
//   groupCampaigns: GroupCampaign[];
//   toggleAllGroupCampaigns: (checked: boolean) => void;
// }

// const GroupCampaignList: React.FC<Props> = ({
//   isLoading,
//   groupCampaigns = [],
//   toggleAllGroupCampaigns
// }) => {
//   const [selectedRows, setSelectedRows] = useState<number[]>([]);
  
//   // 초기에 모든 캠페인 선택
//   useEffect(() => {
//     if (groupCampaigns.length > 0) {
//       setSelectedRows(groupCampaigns.map(item => item.campaign_id));
//     } else {
//       setSelectedRows([]);
//     }
//   }, [groupCampaigns]);

//   // 전체 선택 상태 계산
//   const allSelected = useMemo(() => {
//     return groupCampaigns.length > 0 && selectedRows.length === groupCampaigns.length;
//   }, [groupCampaigns, selectedRows]);
  
//   // 부분 선택 상태 계산
//   const hasPartialSelection = useMemo(() => {
//     return selectedRows.length > 0 && selectedRows.length < groupCampaigns.length;
//   }, [groupCampaigns, selectedRows]);

//   const getCampaignName = (campaignId: number): string => {
//     return `캠페인 ${campaignId}`;
//   };

//   // 개별 행 토글
//   const toggleRow = (campaignId: number) => {
//     const isSelected = selectedRows.includes(campaignId);
//     const newSelection = isSelected
//       ? selectedRows.filter(id => id !== campaignId)
//       : [...selectedRows, campaignId];
    
//     setSelectedRows(newSelection);
//     // 부모 컴포넌트에 알림
//     // toggleAllGroupCampaigns(newSelection.length > 0);
//   };

//   // 모든 행 토글
//   const toggleAllRows = (checked: boolean) => {
//     if (checked) {
//       setSelectedRows(groupCampaigns.map(item => item.campaign_id));
//     } else {
//       setSelectedRows([]);
//     }
//     // 부모 컴포넌트에 알림
//     toggleAllGroupCampaigns(checked);
//   };

//   const columns = [
//     {
//       key: 'selection',
//       name: '',
//       width: 50,
//       headerRenderer: () => (
//         <div className="flex justify-center items-center h-full">
//           <CommonCheckBox2
//             checked={allSelected}
//             indeterminate={hasPartialSelection}
//             onChange={toggleAllRows}
//             title="전체 선택"
//           />
//         </div>
//       ),
//       renderCell: ({ row }: { row: GroupCampaign }) => {
//         const isRowSelected = selectedRows.includes(row.campaign_id);
//         return (
//           <div className="flex justify-center items-center h-full">
//             <CommonCheckBox2
//               checked={isRowSelected}
//               onChange={() => toggleRow(row.campaign_id)}
//             />
//           </div>
//         );
//       }
//     },
//     { 
//       key: 'campaign_id', 
//       name: '캠페인ID', 
//       width: 100 
//     },
//     { 
//       key: 'campaign_name', 
//       name: '캠페인 이름', 
//       width: 150,
//       renderCell: ({ row }: { row: GroupCampaign }) => (
//         <span className="text-blue-700 font-medium">{`캠페인 ${row.campaign_id}`}</span>
//       )
//     },
//     { 
//       key: 'skill_id', 
//       name: '스킬ID', 
//       width: 80,
//       renderCell: ({ row }: { row: GroupCampaign }) => 14
//     },
//     { 
//       key: 'skill_name', 
//       name: '스킬명', 
//       width: 100,
//       renderCell: ({ row }: { row: GroupCampaign }) => '스킬1'
//     }
//   ];

//   if (isLoading) {
//     return <div className="flex items-center justify-center h-full text-sm">로딩 중...</div>;
//   }

//   if (groupCampaigns.length === 0) {
//     return (
//       <div className="flex items-center justify-center h-full text-gray-500 text-sm">
//         그룹에 속한 캠페인이 없습니다.
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col h-full">
//       <DataGrid
//         columns={columns}
//         rows={groupCampaigns}
//         className="text-sm border-none h-full"
//         rowKeyGetter={(row) => row.campaign_id}
//         rowHeight={36}
//         headerRowHeight={36}
//         enableVirtualization={false}
//         rowClass={() => 'hover:bg-gray-100'}
//       />
//       <div className="h-16"></div>
//     </div>
//   );
// };

// export default GroupCampaignList;
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
  toggleAllGroupCampaigns: (checked: boolean) => void;
}

const GroupCampaignList: React.FC<Props> = ({
  isLoading,
  groupCampaigns = [],
  toggleAllGroupCampaigns
}) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  
  // 초기에 모든 캠페인 선택
  useEffect(() => {
    if (groupCampaigns.length > 0) {
      setSelectedRows(groupCampaigns.map(item => item.campaign_id));
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
    // 부모 컴포넌트에 알림
    toggleAllGroupCampaigns(newSelection.length > 0);
  };

  // 모든 행 토글
  const toggleAllRows = (checked: boolean) => {
    if (checked) {
      setSelectedRows(groupCampaigns.map(item => item.campaign_id));
    } else {
      setSelectedRows([]);
    }
    // 부모 컴포넌트에 알림
    toggleAllGroupCampaigns(checked);
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