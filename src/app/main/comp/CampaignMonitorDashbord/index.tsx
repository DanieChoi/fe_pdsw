import React, { useState } from "react";
import { useTabStore } from '@/store/tabStore';
import TitleWrap from "@/components/shared/TitleWrap";
import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
import { Label } from "@/components/ui/label";
import { CommonRadio, CommonRadioItem } from "@/components/shared/CommonRadio";
import { CommonButton } from "@/components/shared/CommonButton";
import GridView from './GridView';
import ChartView from './ChartView';
interface Tab {
  uniqueKey: string;
  title: string;
  campaignId?: string;
}

interface CallItem {
  id: number;
  label: string;
}

type ViewType = "gridView" | "chartView";

const CampaignMonitorDashboard: React.FC = () => {
  // 상태 추가
  const [viewType, setViewType] = useState<ViewType>("gridView");
  const [selectedCall, setSelectedCall] = useState<number>(1);

  const activeTabKey = useTabStore((state) => state.activeTabKey);
  const openedTabs = useTabStore((state) => state.openedTabs);
  const activeTab = openedTabs.find(tab => tab.uniqueKey === activeTabKey);

  // 발신구분 데이터 (실제로는 API에서 받아올 데이터)
  const callList: CallItem[] = [
    { id: 1, label: '최초발신' },
    { id: 2, label: '1번째 재발신' },
    { id: 3, label: '2번째 재발신' },
    { id: 4, label: '3번째 재발신' },
    { id: 5, label: '4번째 재발신' }
  ];

  // 라디오 버튼 변경 핸들러
  const handleViewTypeChange = (value: string) => {
    setViewType(value as ViewType);
  };

  const campaignName = activeTab?.title.replace('총진행상황 - ', '') || '';

  return (
    <div className="flex gap-4 w-full limit-width">
      {/* 왼쪽 설정 영역 */}
      <div className="flex flex-col gap-5 w-[230px] min-w-[230px]">
        <div>
          <TitleWrap title="캠페인 정보" />
          <Table>
            <tbody>
              <TableRow>
                <TableHeader className="w-[120px]">
                  <Label>캠페인 아이디</Label>
                </TableHeader>
                <TableCell>
                  <span className="text-sm">{activeTab?.campaignId || ''}</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeader className="w-[120px]">
                  <Label>캠페인 이름</Label>
                </TableHeader>
                <TableCell>
                  <span className="text-sm">{campaignName}</span>
                </TableCell>
              </TableRow>
            </tbody>
          </Table>
        </div>

        <div>
          <TitleWrap title="표시방법" />
          <CommonRadio 
            className="flex gap-8 pl-4" 
            value={viewType} 
            onValueChange={handleViewTypeChange}
          >
            <div className="flex items-center space-x-2">
              <CommonRadioItem value="gridView" id="gridView" />
              <Label htmlFor="gridView">그리드형</Label>
            </div>
            <div className="flex items-center space-x-2">
              <CommonRadioItem value="chartView" id="chartView" />
              <Label htmlFor="chartView">차트형</Label>
            </div>
          </CommonRadio>
        </div>

        <div className="flex-1 h-full">
          <TitleWrap title="발신구분" />
          <div className="border rounded overflow-y-auto h-[calc(100%-20px)]">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {callList.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => setSelectedCall(item.id)}
                    className={`cursor-pointer hover:bg-[#FFFAEE] ${
                      selectedCall === item.id ? "bg-[#FFFAEE]" : ""
                    }`}
                  >
                    <td className="border-b border-r px-3 py-1">
                      {item.label}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <CommonButton>사용 시간 보기</CommonButton>
        </div>
      </div>

      {/* 오른쪽 대시보드 영역 */}
      <div className="flex-1">
        {viewType === "gridView" ? <GridView /> : <ChartView />}
      </div>
    </div>
  );
};

export default CampaignMonitorDashboard;