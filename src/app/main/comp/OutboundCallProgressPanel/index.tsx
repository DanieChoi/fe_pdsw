'use client';

import React, { useState, useMemo } from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import DataGrid, { Column as DataGridColumn } from 'react-data-grid';

// 타입 정의
interface Stats {
  waiting: number;
  firstCall: number;
  retryCall: number;
  distributing: number;
}

interface BarData {
  name: string;
  value: number;
}

interface GridData {
  skillId: string;
  campaignId: string;
  campaignName: string;
  priority: string;
  custKey: string;
  custName: string;
  phoneType: string;
  phone1: string;
  attempt1: string;
  phone2: string;
  attempt2: string;
  phone3: string;
  attempt3: string;
  result: string;
}

interface CampaignData {
  stats: Stats;
  barData: BarData[];
  gridData: GridData[];
}

interface CampaignDataMap {
  [key: string]: CampaignData;
}

interface Column extends DataGridColumn<GridData> {
  key: keyof GridData;
  name: string;
}
const OutboundCallProgressPanel: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<string>('all');

  // 캠페인별 데이터
  const campaignData: CampaignDataMap = {
    test1: {
      stats: {
        waiting: 2,
        firstCall: 3,
        retryCall: 2,
        distributing: 1
      },
      barData: [
        { name: '최초 발신용', value: 80 },
        { name: '재시도 발신용', value: 50 },
        { name: '분배 대기', value: 30 }
      ],
      gridData: [
        {
          skillId: '1246',
          campaignId: '0125',
          campaignName: 'test1캠페인',
          priority: '2',
          custKey: '241545',
          custName: '김철수',
          phoneType: '일반전화',
          phone1: '01087654321',
          attempt1: '1',
          phone2: '01087654321',
          attempt2: '1',
          phone3: '01087654321',
          attempt3: '2',
          result: '실패'
        }
      ]
    },
    test2: {
      stats: {
        waiting: 1,
        firstCall: 2,
        retryCall: 1,
        distributing: 0
      },
      barData: [
        { name: '최초 발신용', value: 60 },
        { name: '재시도 발신용', value: 40 },
        { name: '분배 대기', value: 20 }
      ],
      gridData: [
        {
          skillId: '1247',
          campaignId: '0126',
          campaignName: 'test2캠페인',
          priority: '3',
          custKey: '241546',
          custName: '이영희',
          phoneType: '회사전화',
          phone1: '01098765432',
          attempt1: '2',
          phone2: '01098765432',
          attempt2: '1',
          phone3: '01098765432',
          attempt3: '1',
          result: '진행중'
        }
      ]
    }
  };

  // 전체 데이터 계산을 위한 useMemo 훅 사용
  const allCampaignData = useMemo<CampaignData>(() => {
    // 모든 캠페인의 통계 합계 계산
    const totalStats = Object.values(campaignData).reduce((acc, campaign) => ({
      waiting: acc.waiting + campaign.stats.waiting,
      firstCall: acc.firstCall + campaign.stats.firstCall,
      retryCall: acc.retryCall + campaign.stats.retryCall,
      distributing: acc.distributing + campaign.stats.distributing
    }), { waiting: 0, firstCall: 0, retryCall: 0, distributing: 0 });

    // 모든 캠페인의 바 차트 데이터 합계 계산
    const totalBarData = [
      {
        name: '최초 발신용',
        value: Object.values(campaignData).reduce((sum, campaign) => 
          sum + (campaign.barData.find(item => item.name === '최초 발신용')?.value ?? 0), 0
        )
      },
      {
        name: '재시도 발신용',
        value: Object.values(campaignData).reduce((sum, campaign) => 
          sum + (campaign.barData.find(item => item.name === '재시도 발신용')?.value ?? 0), 0
        )
      },
      {
        name: '분배 대기',
        value: Object.values(campaignData).reduce((sum, campaign) => 
          sum + (campaign.barData.find(item => item.name === '분배 대기')?.value ?? 0), 0
        )
      }
    ];

    // 모든 캠페인의 그리드 데이터 통합
    const totalGridData = Object.values(campaignData).flatMap(campaign => campaign.gridData);

    return {
      stats: totalStats,
      barData: totalBarData,
      gridData: totalGridData
    };
  }, [campaignData]);  

  // 현재 선택된 캠페인의 데이터
  const currentData = selectedCampaign === 'all' ? allCampaignData : campaignData[selectedCampaign];

  // 그리드 컬럼 정의
  const columns: Column[] = [
    { key: 'skillId', name: '스킬아이디' },
    { key: 'campaignId', name: '캠페인아이디' },
    { key: 'campaignName', name: '캠페인이름' },
    { key: 'priority', name: '다이얼 순번' },
    { key: 'custKey', name: '고객키' },
    { key: 'custName', name: '고객이름' },
    { key: 'phoneType', name: '발신번호 구분' },
    { key: 'phone1', name: '전화번호1' },
    { key: 'attempt1', name: '시도횟수' },
    { key: 'phone2', name: '전화번호2' },
    { key: 'attempt2', name: '시도횟수' },
    { key: 'phone3', name: '전화번호3' },
    { key: 'attempt3', name: '시도횟수' },
    { key: 'result', name: '다이얼 결과' }
  ];

  const handleCampaignChange = (value: string): void => {
    setSelectedCampaign(value);
  };


  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex items-center gap-2">
        <Label className="w-20 min-w-20">캠페인</Label>
        <Select onValueChange={handleCampaignChange} value={selectedCampaign}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="캠페인전체" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">캠페인전체</SelectItem>
            <SelectItem value="test1">테스트1</SelectItem>
            <SelectItem value="test2">테스트2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-5 h-[calc(100%-46px)] out-call-responsive-container">
        <div className="flex-1 out-call-responsive-left gap-5">
          <div className="">
            <Table>
              <tbody>
                <TableRow>
                  <TableHeader className="!bg-[#DDF4F2] !text-center text-sm font-normal text-[#3A9D6C]">대기 상담원</TableHeader>
                  <TableHeader className="!bg-[#FEE9EC] !text-center text-sm font-normal text-[#C95E5E]">최초발신</TableHeader>
                  <TableHeader className="!bg-[#E8EFFA] !text-center text-sm font-normal text-[#338BD3]">재시도 발신</TableHeader>
                  <TableHeader className="!bg-[#F6F0FA] !text-center text-sm font-normal text-[#9459BF]">분배대기</TableHeader>
                </TableRow>
                <TableRow>
                  <TableCell className="!text-center text-sm">{currentData.stats.waiting}</TableCell>
                  <TableCell className="!text-center text-sm">{currentData.stats.firstCall}</TableCell>
                  <TableCell className="!text-center text-sm">{currentData.stats.retryCall}</TableCell>
                  <TableCell className="!text-center text-sm">{currentData.stats.distributing}</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </div>
          
          <div className="w-full h-[calc(100%-57px)]">
            <ResponsiveContainer width="100%" height="100%" className="m-auto">
              <BarChart
                data={currentData.barData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                layout="vertical" 
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
                <XAxis 
                  type="number" 
                  tick={{ fontSize: 13 }}
                  axisLine={{ stroke: '#999' }}
                  />  
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  width={100}
                  tick={{ fontSize: 13 }}
                  axisLine={{ stroke: '#999' }}
                />
                <Tooltip />
                <Bar 
                  dataKey="value" 
                  fill="#4FD1C5"
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid-custom-wrap flex-1 out-call-responsive-right">
          <DataGrid
            columns={columns}
            rows={currentData.gridData}
            className="grid-custom"
            rowHeight={26}
            headerRowHeight={26}
          />
        </div>
      </div>
    </div>
  );
};

export default OutboundCallProgressPanel;