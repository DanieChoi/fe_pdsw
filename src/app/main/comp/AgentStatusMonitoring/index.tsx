// src\app\main\comp\AgentStatusMonitoring\index.tsx
import React, { useState, useMemo, useEffect } from "react";
import TitleWrap from "@/components/shared/TitleWrap";
import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
import { Label } from "@/components/ui/label";
import { useMainStore } from '@/store';
import { useEnvironmentStore } from '@/store/environmentStore';

// 타입 임포트
import {
  AgentStatus,
  AgentData,
  StatusHeaderItem,
  SortField,
  SortDirection,
  AgentStatusMonitoringProps,
  AgentStateMonitoringListResponse
} from './types/typeForCunsultantMonitoring';
import { useApiForGetConsultantStatusMonitorData } from "@/features/monitoring/hooks/useApiForGetConsultantStatusMonitorData";

const AgentStatusMonitoring: React.FC<AgentStatusMonitoringProps> = ({
  sessionKey,
  campaignId,
  tenantId,
}) => {
  // 상태 관리
  const [selectedStatuses, setSelectedStatuses] = useState<AgentStatus>({
    waiting: true,
    processing: false,
    afterProcessing: false,
    rest: false
  });

  // 정렬 관련 상태
  const [sortField, setSortField] = useState<SortField>('time');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const { campaigns } = useMainStore();
  const [counter, setCounter] = useState(0);

  const [agentData, setAgentData] = useState<AgentData[]>([]);
  const [_agentData, _setAgentData] = useState<AgentData[]>([]);
  const { statisticsUpdateCycle } = useEnvironmentStore();

  const handleStatusChange = (status: keyof AgentStatus): void => {
    setSelectedStatuses(prev => ({
      ...prev,
      [status]: !prev[status]
    }));
  };

  const toggleSortDirection = (): void => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const getStatusColor = (status: AgentData['status']): string => {
    const colors = {
      waiting: 'text-[#3A9D6C]',
      processing: 'text-[#C95E5E]',
      afterProcessing: 'text-[#338BD3]',
      rest: 'text-[#9459BF]'
    };
    return colors[status];
  };

  const getStatusText = (status: AgentData['status']): string => {
    const statusMap = {
      waiting: '대기',
      processing: '처리',
      afterProcessing: '후처리',
      rest: '휴식'
    };
    return statusMap[status];
  };

  const sortedAndFilteredAgents = useMemo(() => {
    const filtered = agentData.filter(agent => selectedStatuses[agent.status]);

    return [...filtered].sort((a, b) => {
      let compareA: string | number = a[sortField];
      let compareB: string | number = b[sortField];

      if (sortField === 'status') {
        compareA = getStatusText(a.status);
        compareB = getStatusText(b.status);
      }

      if (sortField === 'time') {
        // 시간을 초 단위로 변환하여 비교
        const timeToSeconds = (time: string): number => {
          const [hours, minutes, seconds] = time.split(':').map(Number);
          return hours * 3600 + minutes * 60 + seconds;
        };
        compareA = timeToSeconds(a.time);
        compareB = timeToSeconds(b.time);
      }

      if (compareA < compareB) return sortDirection === 'asc' ? -1 : 1;
      if (compareA > compareB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [agentData, selectedStatuses, sortField, sortDirection]);

  const getStatusCount = (status: AgentData['status']): number => {
    return agentData.filter(agent => agent.status === status).length;
  };

  const statusHeaderItems: StatusHeaderItem[] = [
    { status: 'waiting', bg: '!bg-[#DDF4F2]', text: '대기 상담사', icon: '/waiting.svg' },
    { status: 'processing', bg: '!bg-[#FEE9EC]', text: '처리', icon: '/processing.svg' },
    { status: 'afterProcessing', bg: '!bg-[#E8EFFA]', text: '후처리', icon: '/afterprocessing.svg' },
    { status: 'rest', bg: '!bg-[#F6F0FA]', text: '휴식', icon: '/rest.svg' }
  ];

  const getStatusTime = (time: number) => {
    let returnValue = "00:00:00";

    if (time !== 0) {
      const date = new Date(1970, 0, 1);
      date.setSeconds(time);

      const hours = String(date.getUTCHours()).padStart(2, '0');
      const minutes = String(date.getUTCMinutes()).padStart(2, '0');
      const seconds = String(date.getUTCSeconds()).padStart(2, '0');

      returnValue = `${hours}:${minutes}:${seconds}`;
    }

    return returnValue;
  };

  // 새로 만든 useApiForGetConsultantStatusMonitorData 훅 사용
  const { data, refetch, isLoading } = useApiForGetConsultantStatusMonitorData({
    tenantId: Number(tenantId || 0),
    campaignId: Number(campaignId || 0),
    sessionKey: sessionKey || '',
  }, {
    // enabled: !!tenantId && !!campaignId,
    refetchInterval: statisticsUpdateCycle > 0 ? statisticsUpdateCycle * 1000 : false,
  });

  console.log("statisticsUpdateCycle : ", statisticsUpdateCycle);
  console.log("data for GetConsultantStatusMonitorData : ", data);

  useEffect(() => {
    // if (_agentData.length > 0) {
    let tempCounter = 0;
    // const interval = setInterval(() => {
    const tempData = [];
    for (let i = 0; i < _agentData.length; i++) {
      tempData.push({
        ..._agentData[i],
        time: getStatusTime(Number(_agentData[i].time) + tempCounter)
      });
    }
    setAgentData(tempData);
    tempCounter++;
    // }, );
    // return () => clearInterval(interval);
    // }
  }, [
    _agentData, data
  ]);

  useEffect(() => {
    if (data && data.counselorStatusList.length > 0) {
      const tempDataList: AgentData[] = data.counselorStatusList.map((item, index) => ({
        id: index,
        status: item.statusCode === '204'
          ? 'waiting'
          : item.statusCode === '205'
            ? 'processing'
            : item.statusCode === '206'
              ? 'afterProcessing'
              : 'rest',
        agent: item.counselorId,
        name: item.counselorName,
        time: item.statusTime || '0',
      }));
      _setAgentData(tempDataList);
      setCounter(counter + 1);
    }
  }, [data]);

  // useEffect(() => {
  //   if (_agentData.length > 0) {
  //     let tempCounter = 0;
  //     const interval = setInterval(() => {
  //       const tempData = [];
  //       for (let i = 0; i < _agentData.length; i++) {
  //         tempData.push({
  //           ..._agentData[i],
  //           time: getStatusTime(Number(_agentData[i].time) + tempCounter)
  //         });
  //       }
  //       setAgentData(tempData);
  //       tempCounter++;
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }
  // }, [_agentData]);

  return (
    <>
      <div>
        <TitleWrap
          title={`상담사 상태 통계${campaignId ? ` (캠페인 ID: ${campaignId})` : ''} tenantId: ${tenantId}`}
          className="border-b border-gray-300 pb-1"
        />
        <Table>
          <tbody>
            <TableRow>
              {statusHeaderItems.map(item => (
                <TableHeader
                  key={item.status}
                  className={`${item.bg} !text-center text-sm font-normal !h-[30px] ${getStatusColor(item.status)}`}
                >
                  <div className="flex items-center gap-2 justify-center">
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={14}
                      height={14}
                      priority
                    />
                    {item.text}
                  </div>
                </TableHeader>
              ))}
            </TableRow>
            <TableRow>
              {statusHeaderItems.map(item => (
                <TableCell key={item.status} className="!text-center text-sm !h-[30px]">
                  {getStatusCount(item.status)}
                </TableCell>
              ))}
            </TableRow>
          </tbody>
        </Table>
      </div>
      <div className="h-[calc(100%-115px)]">
        <TitleWrap
          title="상담사 상태"
          className="border-b border-gray-300 pb-1"
        />
        <div className="flex justify-between items-center bg-[#f8f8f8] h-[30px] px-5 border-t border-x rounded-t-[3px]">
          <div className="flex gap-4">
            {statusHeaderItems.map(item => (
              <div key={item.status} className="flex gap-1 items-center">
                <div className="flex items-center space-x-2">
                  <CustomCheckbox
                    id={item.status}
                    checked={selectedStatuses[item.status]}
                    onCheckedChange={(checked: boolean) => handleStatusChange(item.status)}
                  />
                  <label
                    htmlFor={item.status}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {getStatusText(item.status)}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <Label className="pr-2">정렬선택</Label>
              <div className="w-[120px]">
                <Select value={sortField} onValueChange={(value: SortField) => setSortField(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="시간" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="time">시간</SelectItem>
                    <SelectItem value="agent">상담사 아이디</SelectItem>
                    <SelectItem value="name">상담사 이름</SelectItem>
                    <SelectItem value="status">상태</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <button
              onClick={toggleSortDirection}
              type="button"
              aria-label={sortDirection === 'asc' ? "오름차순" : "내림차순"}
            >
              <Image
                src="/sort_button.svg"
                alt={sortDirection === 'asc' ? "오름차순" : "내림차순"}
                width={12}
                height={12}
                className={sortDirection === 'desc' ? "rotate-180" : ""}
              />
            </button>
          </div>
        </div>
        <div className="h-[calc(100%-59px)] overflow-auto border border-[#ebebeb] rounded-b-[3px]">
          <table className="w-full table-auto rounded-[3px] border-separate border-spacing-0">
            <tbody>
              { sortedAndFilteredAgents && !isLoading ? sortedAndFilteredAgents.map((agent) => (
                <tr key={agent.id}>
                  <td className="text-center text-sm border-b px-3 py-1 text-[#333]">
                    <div className={`flex items-center gap-2 justify-center ${getStatusColor(agent.status)}`}>
                      <Image
                        src={`/${agent.status}.svg`}
                        alt={getStatusText(agent.status)}
                        width={14}
                        height={14}
                      />
                      {getStatusText(agent.status)}
                    </div>
                  </td>
                  <td className="text-center text-sm border-b px-3 py-1 text-[#333]">{agent.agent}</td>
                  <td className="text-center text-sm border-b px-3 py-1 text-[#333]">{agent.name}</td>
                  <td className="text-center text-sm border-b px-3 py-1 text-[#333]">{agent.time}</td>
                  <td className="text-center text-sm border-b px-3 py-1 text-[#333]">
                    ({agentData.filter(a => a.status === agent.status).length}/{agentData.length})
                  </td>
                </tr>
              )) :
                (
                  [...Array(6)].map((_, index) => (
                    <tr key={`skeleton-${index}`}>
                      {Array.from({ length: 5 }).map((_, colIndex) => (
                        <td key={colIndex} className="text-center text-sm border-b px-3 py-1">
                          <div className="flex justify-center">
                            <div className="h-4 w-24 rounded bg-gray-200 animate-pulse" />
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AgentStatusMonitoring;