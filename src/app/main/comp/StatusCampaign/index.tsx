import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';
import { useApiForSkills } from '@/features/campaignManager/hooks/useApiForSkills';
import { useCampainManagerStore, useMainStore } from '@/store';
import { useApiForCampaignProgressInformation } from '@/features/monitoring/hooks/useApiForCampaignProgressInformation';

interface ChartDataItem {
  name: string;
  progress: number;
  success: number;
}

// 나중에 실제 API 연동 시 사용할 데이터 타입
interface DispatchStatusData {
  campaign_id: number;
  campaign_name: string;
  dispatch_type: string;
  progress: number;
  success: number;
}

interface DispatchDataType {
  dispatch_id: number;
  dispatch_name: string;
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
  const [selectedDispatch, setSelectedDispatch] = useState<string>('0');
  const { campaignSkills, setCampaignSkills } = useCampainManagerStore();
  const { campaigns } = useMainStore();
  const [skills, setSkills] = useState<any[]>([]);
  const [chartData, setChartData] = useState<ChartDataItem[]>([]);
  const [campaignInfoList, setCampaignInfoList] = useState<DispatchStatusData[]>([]);
  const [selectedCampaignId,setSelectedCampaignId ] = useState<number>(0);
  const [selectedCampaignIdIndex,setSelectedCampaignIdIndex ] = useState<number>(0);
  const [maxDispatchCount, setMaxDispatchCount ] = useState<number>(0);
  const [dispatchTypeList, setDispatchTypeList ] = useState<DispatchDataType[]>([]);

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
      // fetchDispatchStatus({ campaign_ids: data.result_data.map(d => d.campaign_id) });
      processDataForChart(data.result_data, selectedSkill, selectedDispatch);
    }
  });

  // 캠페인 진행 정보 api 호출
  const { mutate: fetchCampaignProgressInformation } = useApiForCampaignProgressInformation({
    onSuccess: (data) => {  
      const tempList = data.progressInfoList.sort((a, b) => a.reuseCnt - b.reuseCnt);
      if( tempList.length > 0 ){
        const tempDataList: DispatchStatusData[] = tempList.map((item, i) => ({
          campaign_id: item.campId,
          dispatch_type: i.toString(),
          campaign_name: campaigns[selectedCampaignIdIndex].campaign_name,
          progress: item.totLstCnt === 0 ? 0 : parseFloat(((item.nonTTCT / item.totLstCnt) * 100).toFixed(1)),
          success: item.totLstCnt === 0 ? 0 : parseFloat(((item.scct / item.totLstCnt) * 100).toFixed(1)),
        }));
        setCampaignInfoList(prev => [...prev, ...tempDataList]);
        if( maxDispatchCount < tempList.length ){
          setMaxDispatchCount(tempList.length);
        }
      }
      
      const index = selectedCampaignIdIndex+1;
      if( index < campaigns.length){
        setSelectedCampaignId(campaigns[index].campaign_id);
        setSelectedCampaignIdIndex(index);
      }else{
        const tempList = Array.from({ length: maxDispatchCount }, (_, i) => ({
          dispatch_id: i,
          dispatch_name: i === 0 ? '최초발신' : `${i}차재발신`
        }));
        setDispatchTypeList(tempList);
        fetchSkills({
          tenant_id_array: []
        });
      }
    }
  });

  // 테스트용 발신 상태 데이터 생성 함수 (나중에 API로 대체)
  const generateDispatchStatusData = (campaignId: number) => {
    const tempDataList = campaignInfoList.filter(data => data.campaign_id === campaignId);
    const temp: { [key: string]: any } = { campaign_id: campaignId };

    for (let j = 0; j < maxDispatchCount; j++) {
      const data = tempDataList[j] || { progress: 0, success: 0 };
      temp[`dispatch${j}`] = { progress: data.progress, success: data.success };
    }

    return temp;
  };

  // 차트 데이터 처리 함수
  const processDataForChart = (
    campaignSkillsData: any[], 
    currentSkill: string, 
    dispatchType: string
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

    // 각 캠페인에 대해 발신 단계 데이터 생성
    const processedData = filteredCampaigns.map((campaign, index: number) => {
      // API에서 받아올 데이터 구조
      const statusData = generateDispatchStatusData(campaign.campaign_id);
      const dispatchKey = `dispatch${dispatchType}` as keyof typeof statusData;
      const campaignName = campaigns.filter(data => data.campaign_id === campaign.campaign_id)[0].campaign_name;

      return {
        name: `[${campaign.campaign_id}]${campaignName}`,
        progress: typeof statusData[dispatchKey] === 'object' ? statusData[dispatchKey].progress : 0,
        success: typeof statusData[dispatchKey] === 'object' ? statusData[dispatchKey].success : 0,
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
            { dispatchTypeList.map(option => (
              <SelectItem key={option.dispatch_id} value={option.dispatch_id+''}>{option.dispatch_name}</SelectItem>
            )) }
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
            <Bar dataKey="success" fill="#FF8DA0" name="성공률" />
            <Bar dataKey="progress" fill="#4AD3C8" name="진행률" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatusCampaign;