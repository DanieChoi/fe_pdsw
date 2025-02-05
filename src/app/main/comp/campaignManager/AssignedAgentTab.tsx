"use client";

import React, { useState, useEffect } from 'react';
import DataGrid, { Column } from 'react-data-grid';
import { ChevronRight, ChevronDown } from 'lucide-react';
import 'react-data-grid/lib/styles.css';
import { CommonButton } from "@/components/shared/CommonButton";
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { AdditionalInfoTabParam } from './CampaignManagerDetail';
import { useApiForCampaignAgent } from '@/features/campaignManager/hooks/useApiForCampaignAgent';
import { useApiForCampaignAssignmentAgent } from '@/features/campaignManager/hooks/useApiForCampaignAssignmentAgent';

interface ConsultingData {
  id: string;
  affiliationGroupId?: string;
  affiliationTeamId?: string;
  counselorEmplNum?: string;
  counselorId?: string;
  counselorname?: string;
}

interface TreeRow extends ConsultingData {
  parentId?: string;
  isExpanded?: boolean;
  level: number;
  hasChildren?: boolean;
  children?: TreeRow[];
}

const tempAdditionalInfoTab:AdditionalInfoTabParam = {
  changeYn: false,
  campaignInfoChangeYn: false,
  onSave: false,
  onClosed: false
};

type Props = {
  newCampaignYn: boolean;
  campaignInfo: MainDataResponse;
  onHandleAdditionalInfoTabChange: (param:AdditionalInfoTabParam) => void;
}

const AssignedAgentTab: React.FC<Props> = ({newCampaignYn,campaignInfo,onHandleAdditionalInfoTabChange}) => {
  const [initialData, setInitialData] = useState<TreeRow[]>([]);
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
  const transformToTreeData = (counselors: any[]) => {
    const result: any[] = [];

    counselors.forEach((counselor) => {
        let group = result.find(group => group.affiliationGroupId === counselor.affiliationGroupId);
        if (!group) {
            group = {
                id: `group-${counselor.affiliationGroupId}`,
                level: 0,
                hasChildren: true,
                affiliationGroupId: counselor.affiliationGroupId,
                children: []
            };
            result.push(group);
        }

        let team = group.children.find((team: TreeRow) => team.affiliationTeamId === counselor.affiliationTeamId);
        if (!team) {
            team = {
                id: `team-${counselor.affiliationTeamId}`,
                parentId: group.id,
                level: 1,
                hasChildren: true,
                affiliationTeamId: counselor.affiliationTeamId,
                children: []
            };
            group.children.push(team);
        }

        team.children.push({
            id: counselor.counselorEmplNum,
            parentId: team.id,
            level: 2,
            counselorEmplNum: counselor.counselorEmplNum,
            counselorId: counselor.counselorId,
            counselorname: counselor.counselorname
        });
    });

    return result;
  };
  //할당상담원 정보 조회
  const { mutate: fetchCampaignAssignmentAgents } = useApiForCampaignAssignmentAgent({
    onSuccess: (data) => {
      const transformedData = transformToTreeData(data.assignedCounselorList);
      setInitialData(transformedData.sort((a, b) => a.id.localeCompare(b.id)));
    }
  });
  
  useEffect(() => {
    if( initialData.length > 0){
      // const expandedRowIds = initialData.map(row => row.id);
      const expandedData = initialData.map(group => ({
        ...group,
        children: group.children?.map(team => ({
          ...team,
          children: team.children?.map(counselor => ({
            ...counselor,
            expanded: true  // Marking the counselors as expanded
          }))
        }))
      }));
      const expandedRowIds = new Set<string>();
      expandedData.forEach(group => {
        expandedRowIds.add(group.id);
        group.children?.forEach(team => {
          expandedRowIds.add(team.id);
          team.children?.forEach(counselor => {
            expandedRowIds.add(counselor.id);
          });
        });
      });
      setExpandedRows(expandedRowIds);
    }
  }, [initialData]);

  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set([]));

  useEffect(() => {
    if (!newCampaignYn && campaignInfo && campaignInfo.campaign_id > 0 ) {  
      fetchCampaignAgents({ campaign_id: campaignInfo.campaign_id });
    }
    setInitialData([]);
  }, [newCampaignYn,campaignInfo]);

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
    if( rows.length > 0 ){
      rows.forEach((row) => {
        const isExpanded = expandedRows.has(row.id);
        flat.push({ ...row, isExpanded });
        if (row.children && isExpanded) {
          flat = flat.concat(flattenRows(row.children));
        }
      });
    }
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
          displayName = `상담그룹 : ${row.affiliationGroupId}`;
        } else if (row.level === 1) {
          displayName = `상담팀${row.affiliationTeamId}`;
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
      key: 'counselorEmplNum',
      name: '상담원'
    },
    {
      key: 'counselorId',
      name: '사번'
    },
    {
      key: 'counselorname',
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
        <CommonButton variant="secondary" onClick={()=> 
          onHandleAdditionalInfoTabChange({...tempAdditionalInfoTab
            , onSave: true
          })
        }>확인</CommonButton>
        <CommonButton variant="secondary" onClick={()=> 
          onHandleAdditionalInfoTabChange({...tempAdditionalInfoTab
            , onClosed: true
          })
        }>취소</CommonButton>
      </div>
    </div>
  );
};

export default AssignedAgentTab;