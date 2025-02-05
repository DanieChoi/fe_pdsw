"use client";

import React, { useState, useEffect } from 'react';
import DataGrid, { Column } from 'react-data-grid';
import { ChevronRight, ChevronDown } from 'lucide-react';
import 'react-data-grid/lib/styles.css';
import { CommonButton } from "@/components/shared/CommonButton";
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { useApiForCampaignAgent } from '@/features/campaignManager/hooks/useApiForCampaignAgent';
import { useApiForCampaignAssignmentAgent } from '@/features/campaignManager/hooks/useApiForCampaignAssignmentAgent';

interface ConsultingData {
  id: string;
  상담그룹?: string;
  상담팀?: string;
  상담원?: string;
  상담원아이디?: string;
  상담원이름?: string;
}

interface TreeRow extends ConsultingData {
  parentId?: string;
  isExpanded?: boolean;
  level: number;
  hasChildren?: boolean;
  children?: TreeRow[];
}

type Props = {
  campaignInfo: MainDataResponse;
}

const AssignedAgentTab: React.FC<Props> = ({campaignInfo}) => {
  // 캠페인 소속 상담사 리스트 요청
  const { mutate: fetchCampaignAgents } = useApiForCampaignAgent({
    onSuccess: (data) => {
      if( data.result_data.length > 0 && data.result_data[0].agent_id.length > 0 ){
        fetchCampaignAssignmentAgents({
          tenant_id: campaignInfo.tenant_id
          , counselors: data.result_data[0].agent_id.join(',')
        });
      }
    }
  });
  //할당상담원 정보 조회
  const { mutate: fetchCampaignAssignmentAgents } = useApiForCampaignAssignmentAgent({
    onSuccess: (data) => {
      console.log(data.assignedCounselorList);
    }
  });
  
  const initialData: TreeRow[] = [
    {
      id: 'group-124752',
      level: 0,
      hasChildren: true,
      상담그룹: '124752',
      children: [
        {
          id: 'team-140201-1',
          parentId: 'group-124752',
          level: 1,
          hasChildren: true,
          상담팀: '140201',
          children: [
            {
              id: '1101',
              parentId: 'team-140201-1',
              level: 2,
              상담원: '110101',
              상담원아이디: 'sktest008',
              상담원이름: '111038',
            },
            {
              id: '1102-1',
              parentId: 'team-140201-1',
              level: 2,
              상담원: '110102',
              상담원아이디: 'sktest009',
              상담원이름: '111039',
            },
            {
              id: '1102-2',
              parentId: 'team-140201-1',
              level: 2,
              상담원: '110102',
              상담원아이디: 'sktest009',
              상담원이름: '111039',
            }
          ]
        },
        {
          id: 'team-140201-2',
          parentId: 'group-124752',
          level: 1,
          hasChildren: false,
          상담팀: '140201',
          children: []
        },
        {
          id: 'team-140101',
          parentId: 'group-124752',
          level: 1,
          hasChildren: false,
          상담팀: '140101',
          children: []
        }
      ]
    }
  ];

  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set(['group-124752']));

  useEffect(() => {
    if (campaignInfo && campaignInfo.campaign_id > 0 ) {  
      fetchCampaignAgents({ campaign_id: campaignInfo.campaign_id });
    }
  }, [campaignInfo]);

  const toggleRowExpand = (rowId: string) => {
    const newExpandedRows = new Set(expandedRows);
    if (expandedRows.has(rowId)) {
      newExpandedRows.delete(rowId);
    } else {
      newExpandedRows.add(rowId);
    }
    setExpandedRows(newExpandedRows);
  };

  function flattenRows(rows: TreeRow[]): TreeRow[] {
    let flat: TreeRow[] = [];
    rows.forEach((row) => {
      const isExpanded = expandedRows.has(row.id);
      flat.push({ ...row, isExpanded });
      if (row.children && isExpanded) {
        flat = flat.concat(flattenRows(row.children));
      }
    });
    return flat;
  }

  const rowKeyGetter = (row: TreeRow) => row.id;

  const columns: Column<TreeRow>[] = [
    {
      key: 'groupName',
      name: '상담그룹',
      width: 200,
      renderCell: ({ row }) => {
        const indent = row.level * 20;
        const showToggle = row.hasChildren;
        let displayName = '';

        if (row.level === 0) {
          displayName = `상담그룹 : ${row.상담그룹}`;
        } else if (row.level === 1) {
          displayName = `상담팀${row.상담팀}`;
        } else {
          displayName = row.id;
        }

        return (
          <div style={{ marginLeft: `${indent}px` }} className="flex items-center">
            {showToggle && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  toggleRowExpand(row.id);
                }}
                className="cursor-pointer mr-1"
              >
                {row.isExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </span>
            )}
            <span>{displayName}</span>
          </div>
        );
      }
    },
    {
      key: '상담원',
      name: '상담원'
    },
    {
      key: '상담원아이디',
      name: '사번'
    },
    {
      key: '상담원이름',
      name: '상담원 아이디'
    }
  ];

  return (
    <div className='py-5'>
      <div className="h-[280px] w-full grid-custom-wrap">
        <DataGrid
          columns={columns}
          rows={flattenRows(initialData)}
          rowKeyGetter={rowKeyGetter}
          className="w-full h-auto grid-custom"
          rowHeight={26}
          headerRowHeight={26}
          rowClass={(row) => {
            if (row.level === 0) {
              return 'bg-[#fafafa]';
            } else if (row.level === 1) {
              return 'bg-[#f5faff]';
            }
            return '';
          }}
        />
      </div>
      <div className="flex justify-end gap-2 mt-5">
        <CommonButton variant="secondary">확인</CommonButton>
        <CommonButton variant="secondary">취소</CommonButton>
      </div>
    </div>
  );
};

export default AssignedAgentTab;