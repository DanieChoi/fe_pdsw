import React from "react";
import TitleWrap from "@/components/shared/TitleWrap";
import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";

// 시스템 상태에 따른 타입 정의
type SystemStatus = "normal" | "abnormal";

// 각 시스템의 데이터 타입 정의
interface SystemData {
  id: number;  
  title: string;
  status: SystemStatus;
  pdi: string;
  time: string;
}

type SystemCardProps = Omit<SystemData, 'id'>;

// 상태에 따른 스타일 설정
const statusStyles = {
  normal: {
    bgColor: "#44B67D",
    text: "정상"
  },
  abnormal: {
    bgColor: "#FC5858",
    text: "비정상"
  }
};


// 개별 시스템 컴포넌트
const SystemCard: React.FC<SystemCardProps> = ({ title, status, pdi, time }) => {
  const style = status === "normal" ? statusStyles.normal : statusStyles.abnormal;
  
  return (
    <div>
      <TitleWrap title={title} />
      <div className="border border-[#ebebeb] rounded-[3px] px-[40px] py-[25px] flex flex-col gap-5 items-center">
        <div className="flex items-center gap-2">
          <div 
            className="w-4 h-4 rounded-full" 
            style={{ backgroundColor: style.bgColor }}
          />
          <div className="text-sm" style={{ color: style.bgColor }}>
            {style.text}
          </div>
        </div>
        <Table className="!w-[80%] text-[#333]">
          <tbody>
            <TableRow>
              <TableHeader className="text-sm font-normal">pdi</TableHeader>
              <TableCell className="text-sm">{pdi}</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className="text-sm font-normal">time</TableHeader>
              <TableCell className="text-sm">{time}</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

const SystemMonitoring: React.FC = () => {
  // 시스템 데이터 정의
  const systemsData: SystemData[] = [
    {
      id: 1,
      title: "EXD db control",
      status: "normal",
      pdi: "801992",
      time: "2025-01-23 17:16:58"
    },
    {
      id: 2,
      title: "EXD assist",
      status: "abnormal",
      pdi: "801992",
      time: "2025-01-23 17:16:58"
    },
    {
      id: 3,
      title: "EXDfr",
      status: "normal",
      pdi: "801992",
      time: "2025-01-23 17:16:58"
    },
    {
      id: 4,
      title: "CampaignLoadaSort",
      status: "abnormal",
      pdi: "801992",
      time: "2025-01-23 17:16:58"
    },
    {
      id: 5,
      title: "CCbridge2",
      status: "normal",
      pdi: "801992",
      time: "2025-01-23 17:16:58"
    },
    {
      id: 6,
      title: "EXDfw",
      status: "normal",
      pdi: "801992",
      time: "2025-01-23 17:16:58"
    },
    {
      id: 7,
      title: "EXD designer",
      status: "normal",
      pdi: "801992",
      time: "2025-01-23 17:16:58"
    },
    {
      id: 8,
      title: "EXD callpacing",
      status: "normal",
      pdi: "801992",
      time: "2025-01-23 17:16:58"
    },
    {
      id: 9,
      title: "EXD dialer",
      status: "normal",
      pdi: "801992",
      time: "2025-01-23 17:16:58"
    }
  ];

  return (
    <div className="w-full limit-width grid grid-cols-3 grid-rows-3 gap-[30px]">
      {systemsData.map((system) => (
        <SystemCard
          key={system.id}
          title={system.title}
          status={system.status}
          pdi={system.pdi}
          time={system.time}
        />
      ))}
    </div>
  );
};

export default SystemMonitoring;