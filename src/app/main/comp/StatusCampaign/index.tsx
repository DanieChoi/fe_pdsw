import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';
import { useApiForSkills } from '@/features/campaignManager/hooks/useApiForSkills';
import { useCampainManagerStore, useTabStore, useMainStore } from '@/store';
import { MainDataResponse } from '@/features/auth/types/mainIndex';

interface ChartDataItem {
  name: string;
  progress: number;
  success: number;
}

// 나중에 실제 API 연동 시 사용할 데이터 타입
interface DispatchStatusData {
  campaign_id: number;
  dispatch_type: string;
  progress: number;
  success: number;
}

const DISPATCH_TYPES = {
  INITIAL: '최초발신',
  FIRST: '1차재발신',
  SECOND: '2차재발신',
  THIRD: '3차재발신',
  FOURTH: '4차재발신'
} as const;

type DispatchType = typeof DISPATCH_TYPES[keyof typeof DISPATCH_TYPES];

const StatusCampaign: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>('total');
  const [selectedDispatch, setSelectedDispatch] = useState<DispatchType>(DISPATCH_TYPES.INITIAL);
  const { campaignSkills, setCampaignSkills } = useCampainManagerStore();
  const { campaigns } = useMainStore();
  const { campaignIdForUpdateFromSideMenu } = useTabStore();
  const [skills, setSkills] = useState<any[]>([]);
  const [chartData, setChartData] = useState<ChartDataItem[]>([]);
  const [campaignInfo, setCampaignInfo] = useState<MainDataResponse | null>(null);

  // 스킬 조회
  const { mutate: fetchSkills } = useApiForSkills({
    onSuccess: (data) => {
      setSkills(data.result_data);
    }
  });

  // 캠페인 스킬 조회
  const { mutate: fetchCampaignSkills } = useApiForCampaignSkill({
    onSuccess: (data) => {
      setCampaignSkills(data.result_data);
      // 여기에 나중에 발신 상태 API 연동
      // fetchDispatchStatus({ campaign_ids: data.result_data.map(d => d.campaign_id) });
      processDataForChart(data.result_data, selectedSkill, selectedDispatch);
    }
  });

  useEffect(() => {
    fetchSkills({
      tenant_id_array: []
    });

    fetchCampaignSkills({
      session_key: '',
      tenant_id: 0,
    });
  }, [fetchSkills, fetchCampaignSkills]);

  // 테스트용 발신 상태 데이터 생성 함수 (나중에 API로 대체)
  const generateDispatchStatusData = (campaignId: number) => ({
    campaign_id: campaignId,
    최초발신: { progress: Math.floor(Math.random() * 40 + 60), success: Math.floor(Math.random() * 30 + 50) },
    '1차재발신': { progress: Math.floor(Math.random() * 40 + 60), success: Math.floor(Math.random() * 30 + 50) },
    '2차재발신': { progress: Math.floor(Math.random() * 40 + 60), success: Math.floor(Math.random() * 30 + 50) },
    '3차재발신': { progress: Math.floor(Math.random() * 40 + 60), success: Math.floor(Math.random() * 30 + 50) },
    '4차재발신': { progress: Math.floor(Math.random() * 40 + 60), success: Math.floor(Math.random() * 30 + 50) }
  });

  // 차트 데이터 처리 함수
  const processDataForChart = (
    campaignSkillsData: any[], 
    currentSkill: string, 
    dispatchType: DispatchType
  ) => {
    let filteredCampaigns = campaignSkillsData;
    
    // 스킬 필터링
    if (currentSkill !== 'total') {
      filteredCampaigns = campaignSkillsData.filter(campaign => 
        campaign.skill_id?.includes(Number(currentSkill))
      );
    }

    // 각 캠페인에 대해 발신 단계 데이터 생성
    const processedData = filteredCampaigns.map(campaign => {
      // 나중에 API에서 받아올 데이터 구조
      const statusData = generateDispatchStatusData(campaign.campaign_id);

      return {
        name: `Campaign ${campaign.campaign_id}`,
        progress: statusData[dispatchType].progress,
        success: statusData[dispatchType].success
      };
    });
    
    setChartData(processedData);
  };

  // 스킬 선택 변경 핸들러
  const handleSkillChange = (value: string) => {
    setSelectedSkill(value);
    if (campaignSkills.length > 0) {
      processDataForChart(campaignSkills, value, selectedDispatch);
    }
  };

  // 발신 단계 선택 변경 핸들러
  const handleDispatchChange = (value: DispatchType) => {
    setSelectedDispatch(value);
    if (campaignSkills.length > 0) {
      processDataForChart(campaignSkills, selectedSkill, value);
    }
  };

  const itemHeight = 50;
  const chartHeight = Math.max(chartData.length * itemHeight + 100, 300);

  useEffect(() => {
    if( campaigns && campaignIdForUpdateFromSideMenu && campaignIdForUpdateFromSideMenu !== '' ){
      const tempCampaign = campaigns.filter(data => data.campaign_id === Number(campaignIdForUpdateFromSideMenu))[0];
      setCampaignInfo( tempCampaign );
    }
  }, [campaignIdForUpdateFromSideMenu,campaigns]);

  return (
    <div className="">
      <div className="flex gap-4 mb-6">
        <Select value={selectedSkill} onValueChange={handleSkillChange}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="스킬전체보기"/>
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

        <Select value={selectedDispatch} onValueChange={handleDispatchChange}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="최초발신"/>
          </SelectTrigger>
          <SelectContent>
            {Object.values(DISPATCH_TYPES).map(type => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div style={{ height: chartHeight }} className="border p-2 rounded">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              type="number" 
              tick={{ fontSize: 13 }}
              axisLine={{ stroke: '#999' }}
            />
            <YAxis 
              type="category" 
              dataKey="name"
              tick={{ fontSize: 13 }}
              axisLine={{ stroke: '#999' }}
            />
            <Tooltip />
            <Legend 
              verticalAlign="top"
              align="left"
              wrapperStyle={{
                paddingBottom: '20px',
                fontSize: '14px'
              }}
            />
            <Bar dataKey="progress" fill="#4AD3C8" name="진행률" />
            <Bar dataKey="success" fill="#FF8DA0" name="성공률" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatusCampaign;