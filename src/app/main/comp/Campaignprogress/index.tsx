"use client";

import React, { useState, useMemo, useEffect } from 'react';
import DataGrid, { Column } from 'react-data-grid';
import { ChevronRight, ChevronDown } from 'lucide-react';
import 'react-data-grid/lib/styles.css';
import TitleWrap from "@/components/shared/TitleWrap";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { Label } from "@/components/ui/label";
import { CommonButton } from "@/components/shared/CommonButton";
import Image from "next/image";
import { useMainStore, useCampainManagerStore } from '@/store';
import { useApiForCampaignProgressInformation } from '@/features/monitoring/hooks/useApiForCampaignProgressInformation';
import { CampaignProgressInformationResponseDataType } from '@/features/monitoring/types/monitoringIndex';
import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';
import { useApiForSkills } from '@/features/campaignManager/hooks/useApiForSkills';
// 모달
import ColumnSet from './ColumnSet';

interface CampaignData {
  id: string;
  senderType: string;
  start_flag: string;
  완료구분: string;
  진행률: number;
  리스트대비성공률: number;
  발신대비성공률: number;
  총리스트건수: number;
  순수발신건수: number;
  미발신건수: number;
  총발신건수: number;
}

interface TreeRow extends CampaignData {
  parentId?: string;
  isExpanded?: boolean;
  level: number;
  hasChildren?: boolean;
  children?: TreeRow[];
}

interface DispatchDataType {
  dispatch_id: number;
  dispatch_name: string;
}

// 실제 API 연동 시 사용할 데이터 타입
interface DispatchStatusDataType extends CampaignProgressInformationResponseDataType {
  senderType: string;
  senderId: number;
  start_flag: string;
  end_flag: string;
}

export default function Campaignprogress() {
  const initialData: TreeRow[] = [
    {
      id: 'center-1',
      level: 0,
      hasChildren: true,
      senderType: '',
      start_flag: '',
      완료구분: '',
      진행률: 10,
      리스트대비성공률: 0,
      발신대비성공률: 0,
      총리스트건수: 0,
      순수발신건수: 0,
      미발신건수: 4,
      총발신건수: 0,
      children: [
        {
          id: 'task-124752',
          parentId: 'center-1',
          level: 1,
          hasChildren: true,
          senderType: '',
          start_flag: '',
          완료구분: '',
          진행률: 20,
          리스트대비성공률: 0,
          발신대비성공률: 0,
          총리스트건수: 0,
          순수발신건수: 0,
          미발신건수: 4,
          총발신건수: 0,
          children: [
            {
              id: 'campaign-7',
              parentId: 'task-124752',
              level: 2,
              hasChildren: true,
              senderType: '',
              start_flag: '',
              완료구분: '',
              진행률: 30,
              리스트대비성공률: 0,
              발신대비성공률: 0,
              총리스트건수: 0,
              순수발신건수: 0,
              미발신건수: 4,
              총발신건수: 0,
              children: [
                {
                  id: 'OG0147-00234-1',
                  parentId: 'campaign-7',
                  level: 3,
                  senderType: '최초발신',
                  start_flag: '멈춤',
                  완료구분: '진행중',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4,
                  미발신건수: 4,
                  총발신건수: 12,
                },
                {
                  id: 'OG0147-00234-2',
                  parentId: 'campaign-7',
                  level: 3,
                  senderType: '최초발신',
                  start_flag: '중지',
                  완료구분: '진행중',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4,
                  미발신건수: 4,
                  총발신건수: 0,
                },
                {
                  id: 'OG0147-00234-3',
                  parentId: 'campaign-7',
                  level: 3,
                  senderType: '최초발신',
                  start_flag: '시작',
                  완료구분: '진행중',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4,
                  미발신건수: 4,
                  총발신건수: 0,
                }
              ]
            },
            {
              id: 'campaign-8',
              parentId: 'task-124752',
              level: 2,
              hasChildren: false,
              senderType: '',
              start_flag: '시작',
              완료구분: '',
              진행률: 0,
              리스트대비성공률: 0,
              발신대비성공률: 0,
              총리스트건수: 0,
              순수발신건수: 0,
              미발신건수: 4,
              총발신건수: 0,
            },
            {
              id: 'campaign-9',
              parentId: 'task-124752',
              level: 2,
              hasChildren: false,
              senderType: '',
              start_flag: '시작',
              완료구분: '',
              진행률: 0,
              리스트대비성공률: 0,
              발신대비성공률: 0,
              총리스트건수: 0,
              순수발신건수: 0,
              미발신건수: 4,
              총발신건수: 0,
            },
            {
              id: 'campaign-10',
              parentId: 'task-124752',
              level: 2,
              hasChildren: false,
              senderType: '',
              start_flag: '멈춤',
              완료구분: '',
              진행률: 0,
              리스트대비성공률: 0,
              발신대비성공률: 0,
              총리스트건수: 0,
              순수발신건수: 0,
              미발신건수: 4,
              총발신건수: 0,
            },
            {
              id: 'campaign-11',
              parentId: 'task-124752',
              level: 2,
              hasChildren: true,
              senderType: '',
              start_flag: '멈춤',
              완료구분: '',
              진행률: 0,
              리스트대비성공률: 0,
              발신대비성공률: 0,
              총리스트건수: 0,
              순수발신건수: 0,
              미발신건수: 4,
              총발신건수: 0,
              children: [
                {
                  id: 'OG0147-00234-4',
                  parentId: 'campaign-11',
                  level: 3,
                  senderType: '4번째발신',
                  start_flag: '멈춤',
                  완료구분: '완료',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4,
                  미발신건수: 4,
                  총발신건수: 0,
                },
                {
                  id: 'OG0147-00234-5',
                  parentId: 'campaign-11',
                  level: 3,
                  senderType: '2번째발신',
                  start_flag: '중지',
                  완료구분: '완료',
                  진행률: 12.5,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4,
                  미발신건수: 4,
                  총발신건수: 0,
                },
                {
                  id: 'OG0147-00234-6',
                  parentId: 'campaign-11',
                  level: 3,
                  senderType: '최초발신',
                  start_flag: '멈춤',
                  완료구분: '진행중',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4,
                  미발신건수: 4,
                  총발신건수: 0,
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set(['center-1', 'task-124752']));
  const [selectedCampaign, setSelectedCampaign] = useState<string>('전체보기');
  const [selectedSkill, setSelectedSkill] = useState<string>('total');
  const [selectedStatus, setSelectedStatus] = useState<string>('전체');
  const [isSortAscending, setIsSortAscending] = useState<boolean>(true);
  const { campaigns } = useMainStore();
  const [selectedCampaignId,setSelectedCampaignId ] = useState<number>(0);
  const [selectedCampaignIdIndex,setSelectedCampaignIdIndex ] = useState<number>(0);
  const [maxDispatchCount, setMaxDispatchCount ] = useState<number>(0);
  const [dispatchTypeList, setDispatchTypeList ] = useState<DispatchDataType[]>([]);
  const [campaignInfoList, setCampaignInfoList] = useState<DispatchStatusDataType[]>([]);
  const [skills, setSkills] = useState<any[]>([]);
  const { campaignSkills, setCampaignSkills } = useCampainManagerStore();
  const [isColumnSetOpen, setIsColumnSetOpen] = useState(false);

  // 캠페인 ID 목록 생성
  // const campaignOptions = useMemo(() => {
  //   const _campaigns = new Set(['전체보기']);
  //   const getCampaignIds = (rows: TreeRow[]) => {
  //     rows.forEach(row => {
  //       if (row.level === 2) {
  //         _campaigns.add(row.id.split('-')[1]);
  //       }
  //       if (row.children) {
  //         getCampaignIds(row.children);
  //       }
  //     });
  //   };
  //   getCampaignIds(initialData);
  //   return Array.from(_campaigns).sort((a, b) => {
  //     if (a === '전체보기') return -1;
  //     if (b === '전체보기') return 1;
  //     return parseInt(a) - parseInt(b);
  //   });
  // }, []);

  const getFilteredData = (data: TreeRow[]): TreeRow[] => {
    const filterRow = (row: TreeRow): TreeRow | null => {
      let filteredChildren: TreeRow[] = [];
      
      if (row.children) {
        filteredChildren = row.children
          .map(child => filterRow(child))
          .filter((child): child is TreeRow => child !== null);
      }

      // 캠페인 필터
      const matchesCampaign = selectedCampaign === '전체보기' || 
        (row.level === 2 && row.id.split('-')[1] === selectedCampaign);

      // 스킬 필터 (level 3에만 적용)
      const matchesSkill = selectedSkill === '스킬전체보기' || 
        (row.level !== 3) || 
        (row.level === 3 && selectedSkill.includes(row.id.split('-')[1][0]));

      // 상태 필터
      const matchesStatus = selectedStatus === '전체' || 
        row.start_flag === selectedStatus;

      // 부모 노드는 항상 표시, 필터는 최하위 노드에만 적용
      if (row.level < 2 || filteredChildren.length > 0) {
        return {
          ...row,
          children: filteredChildren.length > 0 ? filteredChildren : undefined,
          hasChildren: filteredChildren.length > 0
        };
      }

      if (matchesCampaign && matchesSkill && matchesStatus) {
        return row;
      }

      return null;
    };

    return data.map(row => filterRow(row)).filter((row): row is TreeRow => row !== null);
  };

  // 정렬 함수
  const getSortedData = (data: TreeRow[]): TreeRow[] => {
    const sortChildren = (rows: TreeRow[]): TreeRow[] => {
      const campaignRows = rows.filter(row => row.level === 2);
      const nonCampaignRows = rows.filter(row => row.level !== 2);

      const sortedCampaignRows = [...campaignRows].sort((a, b) => {
        const idA = parseInt(a.id.split('-')[1]);
        const idB = parseInt(b.id.split('-')[1]);
        return isSortAscending ? idA - idB : idB - idA;
      });

      const sortedRows = [...nonCampaignRows, ...sortedCampaignRows].map(row => ({
        ...row,
        children: row.children ? sortChildren(row.children) : undefined
      }));

      return sortedRows;
    };

    return sortChildren(data);
  };

  const filteredAndSortedData = useMemo(() => {
    const filteredData = getFilteredData(initialData);
    return getSortedData(filteredData);
  }, [selectedCampaign, selectedSkill, selectedStatus, isSortAscending]);

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
      key: 'campaignName',
      name: '캠페인 이름',
      width: 300,
      renderCell: ({ row }) => {
        const indent = row.level * 20;
        const showToggle = row.hasChildren;
        let displayName = '';

        if (row.level === 0) {
          displayName = '센터: NEXUS(1센터)';
        } else if (row.level === 1) {
          displayName = '태스크: 124752';
        } else if (row.level === 2) {
          displayName = `캠페인 아이디: ${row.id.split('-')[1]}`;
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
    { key: 'senderType', name: '발신구분', width: 100 },
    { key: 'start_flag', name: '시작구분', width: 100 },
    { key: '완료구분', name: '완료구분', width: 100 },
    {
      key: '진행률',
      name: '진행률(%)',
      renderCell: ({ row }) => (row.진행률 ? `${row.진행률}%` : '')
    },
    {
      key: '리스트대비성공률',
      name: '리스트 대비 성공률(%)',
      renderCell: ({ row }) => (row.리스트대비성공률 ? `${row.리스트대비성공률}%` : '')
    },
    {
      key: '발신대비성공률',
      name: '발신 대비 성공률(%)',
      renderCell: ({ row }) => (row.발신대비성공률 ? `${row.발신대비성공률}%` : '')
    },
    {
      key: '총리스트건수',
      name: '총 리스트 건수',
      renderCell: ({ row }) => row.총리스트건수 || ''
    },
    {
      key: '순수발신건수',
      name: '순수발신 건수',
      renderCell: ({ row }) => row.순수발신건수 || ''
    },
    {
      key: '미발신건수',
      name: '미발신건수',
      renderCell: ({ row }) => row.미발신건수 || ''
    },
    {
      key: '총발신건수',
      name: '총발신건수',
      renderCell: ({ row }) => row.총발신건수 || ''
    }
  ];

  // 스킬 선택 변경 핸들러
  const handleSkillChange = (value: string) => {
    setSelectedSkill(value);
    if (campaignSkills.length > 0) {
      processDataForGrid(campaignSkills,selectedCampaign, value, selectedStatus);
    }
  };

  // 차트 데이터 처리 함수
  const processDataForGrid = (
    campaignSkillsData: any[], 
    currentCampaign: string,
    currentSkill: string,
    currentStatus: string,
  ) => {
    let filteredCampaigns = campaignSkillsData.sort((a, b) => b.campaign_id - a.campaign_id);
    
    // 스킬 필터링
    if (currentSkill !== 'total') {
      filteredCampaigns = campaignSkillsData.filter(campaign => 
        campaign.skill_id?.includes(Number(currentSkill))
      );
    }else{
      filteredCampaigns = campaigns.sort((a, b) => b.campaign_id - a.campaign_id);
    }

    // 각 캠페인에 대해 데이터 생성
    // const processedData = filteredCampaigns.map((campaign, index: number) => {
    //   // 나중에 API에서 받아올 데이터 구조
    //   const statusData = generateDispatchStatusData(campaign.campaign_id);
    //   const dispatchKey = `dispatch${dispatchType}` as keyof typeof statusData;
    //   const campaignName = campaigns.filter(data => data.campaign_id === campaign.campaign_id)[0].campaign_name;

    //   return {
    //     name: `[${campaign.campaign_id}]${campaignName}`,
    //     progress: typeof statusData[dispatchKey] === 'object' ? statusData[dispatchKey].progress : 0,
    //     success: typeof statusData[dispatchKey] === 'object' ? statusData[dispatchKey].success : 0,
    //   };
    // });
    
    // setChartData(processedData);
  };

  // 스킬 조회
  const { mutate: fetchSkills } = useApiForSkills({
    onSuccess: (data) => {
      setSkills(data.result_data);
      fetchCampaignSkills({
        session_key: '',
        tenant_id: 0,
      });
    }
  });

  // 캠페인 스킬 조회
  const { mutate: fetchCampaignSkills } = useApiForCampaignSkill({
    onSuccess: (data) => {
      setCampaignSkills(data.result_data);
      // 여기에 나중에 발신 상태 API 연동
      processDataForGrid(data.result_data,selectedCampaign, selectedSkill,selectedStatus);
    }
  });

  // 캠페인 진행 정보 api 호출
  const { mutate: fetchCampaignProgressInformation } = useApiForCampaignProgressInformation({
    onSuccess: (data) => {  
      const tempList = data.progressInfoList.sort((a, b) => a.reuseCnt - b.reuseCnt);
      if( tempList.length > 0 ){
        const tempDataList: DispatchStatusDataType[] = tempList.map((item, i) => ({
          ...item
          , senderType : i === 0 ? '최초발신' : `${i}번째 재발신`
          , senderId: i
          , start_flag: campaigns[selectedCampaignIdIndex].start_flag === 1?'시작':campaigns[selectedCampaignIdIndex].start_flag === 2?'멈충':'중지지'
          , end_flag: campaigns[selectedCampaignIdIndex].end_flag=== 1?'진행중':'완료'
        }));
        setCampaignInfoList(prev => [...prev, ...tempDataList]);
        if( maxDispatchCount < tempList.length ){
          setMaxDispatchCount(tempList.length);
        }
      }else{
        const tempData:DispatchStatusDataType = {          
          tenantId: campaigns[selectedCampaignIdIndex].tenant_id
          , detectMachineRoaming: 0
          , detectMachineEtc: 0
          , detectMachineMissingNumber: 0
          , detectSilenceCnt: 0
          , detectMachineLineBusy: 0
          , deleteBeforeDial: 0
          , nogautoPopNotDial: 0
          , nogtimeOutCallback: 0
          , nogautoPopNoReady: 0
          , nogautoDialNoReady: 0
          , nogtimeContradictory: 0
          , nogautoDialFailMode: 0
          , agentNoAnswerCnt: 0
          , nogautoNoEmployeeId: 0
          , nogautoPopNoAnswer: 0
          , detectMachineNoanswer: 0
          , customerOnHookCnt: 0
          , detectMachinePowerOff: 0
          , nogautoPopFailMode: 0
          , reuseCnt: 0
          , campId: campaigns[selectedCampaignIdIndex].campaign_id
          , totLstCnt: 0
          , totDialCnt: 0
          , acct: 0
          , scct: 0
          , overDial: 0
          , nonTTCT: 0
          , campListQuery: ''
          , tect: 0
          , blackList: 0
          , abct: 0
          , retryCall: 0
          , dialingCall: 0
          , nonServiceCnt: 0
          , firstCall: 0
          , agentBusyCnt: 0
          , blackListCall: 0
          , fileIndex: 0
          , recallCnt: 0
          , lineStopCnt: 0
          , fact: 0
          , noAgentCnt: 0
          , nogdeleteGL: 0
          , nogaddBL: 0
          , agentDropCnt: 0
          , customerDropCnt: 0
          , nact: 0
          , deleteAfterDial: 0
          , etct: 0
          , timeoutRecall: 0
          , dialToneSilence: 0
          , buct: 0
          , agentConnect: 0
          , nognotDialAgent: 0
          , nogblockTime: 0
          , nognotDialReady: 0
          , senderType : '최초발신'
          , senderId: 0
          , start_flag: campaigns[selectedCampaignIdIndex].start_flag === 1?'시작':campaigns[selectedCampaignIdIndex].start_flag === 2?'멈충':'중지지'
          , end_flag: campaigns[selectedCampaignIdIndex].end_flag=== 1?'진행중':'완료'
        };
        setCampaignInfoList(prev => [...prev, tempData]);
      }
      
      const index = selectedCampaignIdIndex+1;
      if( index < campaigns.length){
        setSelectedCampaignId(campaigns[index].campaign_id);
        setSelectedCampaignIdIndex(index);
      }else{
        const tempList = Array.from({ length: maxDispatchCount }, (_, i) => ({
          dispatch_id: i,
          dispatch_name: i === 0 ? '최초발신' : `${i}번째 재발신`
        }));
        setDispatchTypeList(tempList);
        fetchSkills({
          tenant_id_array: []
        });
      }
    }
  });

  useEffect(() => {
    if( selectedCampaignId > 0 ){      
      fetchCampaignProgressInformation({
        tenantId: campaigns[selectedCampaignIdIndex].tenant_id,
        campaignId: selectedCampaignId
      });
    }
  }, [selectedCampaignId,selectedCampaignIdIndex]);

  useEffect(() => {
    if( campaigns.length > 0 ){
      setSelectedCampaignId(campaigns[0].campaign_id);
      setSelectedCampaignIdIndex(0);
      setCampaignInfoList([]);
    }
  }, [campaigns]);



  return (
    <div className="limit-width">
      <TitleWrap
        className="border-b border-gray-300 pb-3"
        title="상담원 상태"
      />
      <div className="flex items-center justify-between pb-3">
        <div className="flex gap-5">
          <div className='flex items-center gap-2'>
            <Label className="pr-2">캠페인</Label>
            <div className="w-[120px]">
              <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="전체보기" />
                </SelectTrigger>
                <SelectContent style={{ maxHeight: '300px', overflowY: 'auto' }}> 
                  <SelectItem value="전체보기">캠페인 전체</SelectItem>
                  {campaigns.map((campaign) => (
                    <SelectItem key={campaign.campaign_id} value={campaign.campaign_id+''}>
                      {campaign.campaign_id}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Label className="pr-2">스킬 별로 보기</Label>
            <div className="w-[120px]">
              <Select value={selectedSkill} onValueChange={handleSkillChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="total" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="total">스킬전체보기</SelectItem>
                  {skills.map(skill => (
                    <SelectItem key={skill.skill_id} value={skill.skill_id.toString()}>
                      {skill.skill_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Label className="pr-2">상태 별로 보기</Label>
            <div className="w-[120px]">
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="전체" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="전체">전체</SelectItem>
                  <SelectItem value="시작">시작</SelectItem>
                  <SelectItem value="멈춤">멈춤</SelectItem>
                  <SelectItem value="중지">중지</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <button onClick={() => setIsSortAscending(!isSortAscending)}>
            <Image src="/sort_button.svg" alt="오름,내림차순 버튼" width={12} height={12} />
          </button>
        </div>
        <div className="flex justify-end gap-2">
          <CommonButton variant="secondary">엑셀로 저장</CommonButton>
          <CommonButton variant="secondary" onClick={() => setIsColumnSetOpen(true)}>칼럼 설정</CommonButton>
        </div>
      </div>
      <div className="h-[500px] w-full grid-custom-wrap">
        <DataGrid
          columns={columns}
          rows={flattenRows(filteredAndSortedData)}
          rowKeyGetter={rowKeyGetter}
          className="w-full h-auto grid-custom"
          rowHeight={30}
          headerRowHeight={30}
          rowClass={(row) => {
            if (row.level === 0 || row.level === 1) {
              return 'bg-[#fafafa]';
            } else if (row.level === 2) {
              return 'bg-[#f5faff]';
            }
            return '';
          }}
        />
      </div>
      <ColumnSet
          isOpen={isColumnSetOpen}
          onClose={() => setIsColumnSetOpen(false)}
          onConfirm={() => setIsColumnSetOpen(false)}
          columns={columns}
        />
    </div>
  );
}