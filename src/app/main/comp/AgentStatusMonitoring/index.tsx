import React, { useState, useMemo, useEffect } from "react";
import TitleWrap from "@/components/shared/TitleWrap";
import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
import { Label } from "@/components/ui/label";
import { useApiForAgentStateMonitoringList } from '@/features/monitoring/hooks/useApiForAgentStateMonitoringList';
import { useMainStore } from '@/store';

// 타입 정의
interface AgentStatus {
  waiting: boolean;
  processing: boolean;
  afterProcessing: boolean;
  rest: boolean;
}

interface AgentData {
  id: number;
  status: 'waiting' | 'processing' | 'afterProcessing' | 'rest';
  agent: string;
  name: string;
  time: string;
  count?: string; // 옵셔널로 변경
}

interface StatusHeaderItem {
  status: AgentData['status'];
  bg: string;
  text: string;
  icon: string;
}

type SortField = 'time' | 'agent' | 'name' | 'status';
type SortDirection = 'asc' | 'desc';

interface AgentStatusMonitoringProps {
  campaignId?: number;
  _campaigns?: any[];
}

const AgentStatusMonitoring: React.FC<AgentStatusMonitoringProps> = ({ campaignId,_campaigns }) => {
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

  const [agentData, setAgentData] = useState<AgentData[]>([
    // 초기 더미 데이터는 주석 처리
    // { id: 1, status: 'waiting', agent: 'sktest001', name: '김상담', time: '00:00:12' },
    // { id: 2, status: 'waiting', agent: 'sktest005', name: '이상담', time: '00:15:30' },
    // { id: 3, status: 'processing', agent: 'sktest002', name: '박상담', time: '00:05:45' },
    // { id: 4, status: 'rest', agent: 'sktest008', name: '최상담', time: '00:30:00' },
    // { id: 5, status: 'waiting', agent: 'sktest003', name: '정상담', time: '00:02:20' },
    // { id: 6, status: 'processing', agent: 'sktest007', name: '강상담', time: '00:08:15' },
    // { id: 7, status: 'afterProcessing', agent: 'sktest004', name: '윤상담', time: '00:20:40' },
    // { id: 8, status: 'rest', agent: 'sktest009', name: '한상담', time: '00:45:10' },
    // { id: 9, status: 'afterProcessing', agent: 'sktest006', name: '조상담', time: '00:12:35' },
    // { id: 10, status: 'waiting', agent: 'sktest010', name: '신상담', time: '00:01:50' }
  ]);

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
    { status: 'waiting', bg: '!bg-[#DDF4F2]', text: '대기 상담원', icon: '/waiting.svg' },
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

  // 할당 상담원 정보 조회 (campaignId를 props로 받아 사용)
  const { mutate: fetchAgentStateMonitoringList } = useApiForAgentStateMonitoringList({
    onSuccess: (data) => {
      if (data.counselorStatusList.length > 0) {
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
          time: getStatusTime(Number(item.statusTime || '0')),
        }));
        setAgentData(tempDataList);
        setCounter(counter+1);
      }
      
    }
  });

  useEffect(() => {
    if (counter>0) {
      if( campaigns.length > 0) {
        const tenantId = campaigns.find(data => data.campaign_id === Number(campaignId))?.tenant_id;
        if (tenantId) {
          fetchAgentStateMonitoringList({
            tenantId: tenantId,
            campaignId: Number(campaignId)
          });
        }
      }else if((_campaigns ?? []).length > 0) {
        const tenantId = (_campaigns ?? []).find(data => data.campaign_id === Number(campaignId))?.tenant_id;
        if (tenantId) {
          fetchAgentStateMonitoringList({
            tenantId: tenantId,
            campaignId: Number(campaignId)
          });
        }
      }
    }
  }, [counter,campaigns,_campaigns]);

  useEffect(() => {
    if (campaignId) {
      if( campaigns.length > 0) {
        const tenantId = campaigns.find(data => data.campaign_id === Number(campaignId))?.tenant_id;
        if (tenantId) {
          fetchAgentStateMonitoringList({
            tenantId: tenantId,
            campaignId: Number(campaignId)
          });
        }
      }else if((_campaigns ?? []).length > 0) {
        const tenantId = (_campaigns ?? []).find(data => data.campaign_id === Number(campaignId))?.tenant_id;
        if (tenantId) {
          fetchAgentStateMonitoringList({
            tenantId: tenantId,
            campaignId: Number(campaignId)
          });
        }
      }
    }
  }, [campaignId,campaigns,_campaigns]);

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div>
        <TitleWrap
          title={`상담원 상태 통계 (캠페인 ID: ${campaignId})`}
          className="border-b border-gray-300 pb-1"
        />
        <Table>
          <tbody>
            <TableRow>
              {statusHeaderItems.map(item => (
                <TableHeader 
                  key={item.status}
                  className={`${item.bg} !text-center text-sm font-normal ${getStatusColor(item.status)}`}
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
                <TableCell key={item.status} className="!text-center text-sm">
                  {getStatusCount(item.status)}
                </TableCell>
              ))}
            </TableRow>
          </tbody>
        </Table>
      </div>
      <div className="h-[calc(100%-100px)]">
        <TitleWrap
          title="상담원 상태"
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
                    <SelectItem value="agent">상담원 아이디</SelectItem>
                    <SelectItem value="name">상담원 이름</SelectItem>
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
              {sortedAndFilteredAgents.map((agent) => (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgentStatusMonitoring;
