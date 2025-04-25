
"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/CustomSelect";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useApiForCampaignSkill } from "@/features/campaignManager/hooks/useApiForCampaignSkill";
import { useApiForSkills } from "@/features/campaignManager/hooks/useApiForSkills";
import { useCampainManagerStore, useMainStore } from "@/store";
import { CommonButton } from "@/components/shared/CommonButton";
import { useEnvironmentStore } from "@/store/environmentStore";
import { useMultiCampaignProgressQuery } from "./hook/useMultiCampaignProgressQuery";
import { toast } from "react-toastify";

interface ChartDataItem {
  name: string;
  progress: number;
  success: number;
}

interface DispatchStatusData {
  campaign_id: number;
  dispatch_type: string;
  campaign_name: string;
  progress: number;
  success: number;
}

interface DispatchDataType {
  dispatch_id: number;
  dispatch_name: string;
}

const StatusCampaign: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState("total");
  const [selectedDispatch, setSelectedDispatch] = useState("0");
  const { campaignSkills, setCampaignSkills } = useCampainManagerStore();
  const [skills, setSkills] = useState<any[]>([]);
  const [chartData, setChartData] = useState<ChartDataItem[]>([]);
  const [campaignInfoList, setCampaignInfoList] = useState<DispatchStatusData[]>([]);
  const [maxDispatchCount, setMaxDispatchCount] = useState(0);
  const [dispatchTypeList, setDispatchTypeList] = useState<DispatchDataType[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshTime, setLastRefreshTime] = useState<Date | null>(null);
  const { campaigns } = useMainStore();
  const { statisticsUpdateCycle } = useEnvironmentStore();
  

  const { data: progressData, isLoading, isError, refetch } = useMultiCampaignProgressQuery(campaigns);

  const { mutate: fetchSkills } = useApiForSkills({
    onSuccess: (data) => {
      setSkills(data.result_data);
      fetchCampaignSkills({ session_key: "", tenant_id: 0 });
    },
  });

  const { mutate: fetchCampaignSkills } = useApiForCampaignSkill({
    onSuccess: (data) => {
      setCampaignSkills(data.result_data);
      processDataForChart(data.result_data, selectedSkill, selectedDispatch);
    },
  });

  const refreshData = useCallback(() => {
    setIsRefreshing(true);
    const startTime = new Date();
    
    // Show toast message when starting refresh
    // const toastId = toast.loading('데이터를 새로고침 중입니다...', {
    //   position: 'top-right',
    // });
    
    refetch()
      .then(() => {
        const endTime = new Date();
        const refreshDuration = (endTime.getTime() - startTime.getTime()) / 1000; // in seconds
        
        // Update success toast with refresh time
        // toast.success(`데이터가 갱신되었습니다!`, {
        //   autoClose: 2000,
        //   position: 'top-center',
        // });
        
        setLastRefreshTime(endTime);
      })
      .catch((error) => {
        // Show error toast if refresh fails
        // toast.error('데이터 갱신에 실패했습니다.', {
        //   id: toastId,
        //   duration: 3000,
        //   position: 'top-right',
        // });
      })
      .finally(() => {
        setTimeout(() => setIsRefreshing(false), 1000);
      });
  }, [refetch]);

  useEffect(() => {
    if (progressData) {
      const flat: DispatchStatusData[] = [];
      let maxReuse = 0;

      progressData.forEach(({ campaign_id, campaign_name, progressInfoList }) => {
        progressInfoList.sort((a, b) => a.reuseCnt - b.reuseCnt).forEach((item, i) => {
          flat.push({
            campaign_id,
            dispatch_type: i.toString(),
            campaign_name,
            progress: item.totLstCnt === 0 ? 0 : parseFloat(((item.nonTTCT / item.totLstCnt) * 100).toFixed(1)),
            success: item.totLstCnt === 0 ? 0 : parseFloat(((item.scct / item.totLstCnt) * 100).toFixed(1)),
          });
        });
        if (progressInfoList.length > maxReuse) maxReuse = progressInfoList.length;
      });

      setCampaignInfoList(flat);
      setMaxDispatchCount(maxReuse);
      setDispatchTypeList(
        Array.from({ length: maxReuse }, (_, i) => ({
          dispatch_id: i,
          dispatch_name: i === 0 ? "최초발신" : `${i}차재발신`,
        }))
      );
    }
  }, [progressData]);

  const generateDispatchStatusData = (campaignId: number) => {
    const tempDataList = campaignInfoList.filter((data) => data.campaign_id === campaignId);
    const temp: { [key: string]: any } = { campaign_id: campaignId };
    for (let j = 0; j < maxDispatchCount; j++) {
      const data = tempDataList[j] || { progress: 0, success: 0 };
      temp[`dispatch${j}`] = { progress: data.progress, success: data.success };
    }
    return temp;
  };

  const processDataForChart = (campaignSkillsData: any[], currentSkill: string, dispatchType: string) => {
    let filtered = currentSkill === "total"
      ? campaigns
      : campaignSkillsData.filter((c) => c.skill_id?.includes(Number(currentSkill)));

    filtered = filtered.sort((a, b) => a.campaign_id - b.campaign_id);

    const processedData = filtered.map((c) => {
      const statusData = generateDispatchStatusData(c.campaign_id);
      const dispatchKey = `dispatch${dispatchType}` as keyof typeof statusData;
      const campaignName = c.campaign_name || "알 수 없음";
      return {
        name: `[${c.campaign_id}]${campaignName}`,
        progress: statusData[dispatchKey]?.progress || 0,
        success: statusData[dispatchKey]?.success || 0,
      };
    });

    setChartData(processedData);
  };

  const handleSkillChange = (value: string) => {
    setSelectedSkill(value);
    if (campaignSkills.length > 0) {
      processDataForChart(campaignSkills, value, selectedDispatch);
    }
  };

  const handleDispatchChange = (value: string) => {
    setSelectedDispatch(value);
    if (campaignSkills.length > 0) {
      processDataForChart(campaignSkills, selectedSkill, value);
    }
  };

  useEffect(() => {
    if (statisticsUpdateCycle > 0) {
      const interval = setInterval(() => {
        // Show toast notification before auto-refresh
        // toast.loading(`자동 새로고침 시작 (${statisticsUpdateCycle}초 주기)`, {
        //   duration: 2000,
        //   position: 'top-right'
        // });
        
        refreshData();
      }, statisticsUpdateCycle * 1000);
      return () => clearInterval(interval);
    }
  }, [statisticsUpdateCycle, refreshData]);

  useEffect(() => {
    if (campaigns.length > 0) {
      fetchSkills({ tenant_id_array: [] });
    }
  }, [campaigns]);

  const chartHeight = Math.max(chartData.length * 50 + 100, 300);

  // Format the last refresh time
  const formattedLastRefreshTime = lastRefreshTime ? 
    `마지막 갱신: ${lastRefreshTime.toLocaleTimeString()}` : 
    '아직 갱신되지 않음';

  return (
    <div>
      {/* <div className="flex justify-between items-center mb-2">
        <span>갱신 주기: {statisticsUpdateCycle}초</span>
        <span className="text-sm text-gray-500">{formattedLastRefreshTime}</span>
      </div> */}
      
      <div className="flex gap-4 mb-6 items-center">
        <Select value={selectedSkill} onValueChange={handleSkillChange}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="스킬전체보기" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="total">스킬전체보기</SelectItem>
            {skills.map((skill) => (
              <SelectItem key={skill.skill_id} value={skill.skill_id.toString()}>
                {skill.skill_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedDispatch} onValueChange={handleDispatchChange}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="최초발신" />
          </SelectTrigger>
          <SelectContent>
            {dispatchTypeList.map((option) => (
              <SelectItem key={option.dispatch_id} value={option.dispatch_id.toString()}>
                {option.dispatch_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <CommonButton
          variant="secondary"
          onClick={refreshData}
          disabled={isLoading || isRefreshing}
        >
          {isRefreshing ? "새로고침 중..." : "새로고침"}
        </CommonButton>
      </div>

      {isLoading && !isRefreshing ? (
        <div className="border p-2 rounded flex items-center justify-center" style={{ height: chartHeight }}>
          <p>데이터를 로드 중입니다...</p>
        </div>
      ) : isError ? (
        <div className="border p-2 rounded flex items-center justify-center" style={{ height: chartHeight }}>
          <p>데이터 로드 중 오류가 발생했습니다. 새로고침을 시도해주세요.</p>
        </div>
      ) : (
        <div style={{ height: chartHeight }} className="border p-2 rounded">
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={chartData}
                margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tick={{ fontSize: 13 }} axisLine={{ stroke: "#999" }} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 13 }} axisLine={{ stroke: "#999" }} />
                <Tooltip />
                <Legend verticalAlign="top" align="left" wrapperStyle={{ paddingBottom: "20px", fontSize: "14px" }} />
                <Bar dataKey="success" fill="#FF8DA0" name="성공률" />
                <Bar dataKey="progress" fill="#4AD3C8" name="진행률" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p>표시할 데이터가 없습니다.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StatusCampaign;