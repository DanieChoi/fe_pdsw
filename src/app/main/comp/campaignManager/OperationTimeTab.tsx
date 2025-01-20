import React, { useState, useEffect } from "react";
import TitleWrap from "@/components/shared/TitleWrap";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DataGrid from "react-data-grid";
import { CommonButton } from "@/components/shared/CommonButton";
import DatePicker from "react-date-picker";
import { Calendar as CalendarIcon } from "lucide-react";
import Image from "next/image";
import { useMainStore, useCampainManagerStore } from '@/store';

type Column = {
  key: string;
  name: string;
};

type Row = {
  no: number;
  division: number;
  startTime: string;
  endTime: string;
};

const columns: Column[] = [
  { key: "no", name: "NO" },
  { key: "division", name: "구분" },
  { key: "startTime", name: "시작시간" },
  { key: "endTime", name: "종료시간" },
];

const rows: Row[] = [
  { no: 1, division: 1, startTime: "00:00", endTime: "00:00" },
  { no: 2, division: 2, startTime: "01:00", endTime: "02:00" },
  { no: 3, division: 3, startTime: "02:00", endTime: "03:00" },
];

interface DataProps {
  no: number;
  division: number;
  startTime: string;
  endTime: string;
}

type Props = {
  campaignId: string;
};

interface DataProps {
  no: number;
  division: number;
  startTime: string;
  endTime: string;
}

const OperationTimeTab: React.FC<Props> = ({ campaignId }) => {
  const { selectedCampaign } = useMainStore();
  const { schedules } = useCampainManagerStore();
  const [tempData, setTempData] = useState<DataProps[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [startTime, setStartTime] = useState(""); // 시작시간
  const [endTime, setEndTime] = useState(""); // 종료시간
  const [startFlag, setStartFlag] = useState(""); // 시작구분

  useEffect(() => {
    if( schedules.length > 0 && selectedCampaign ) {      
      const tempCampaignScheduleList = schedules.filter((schedule) => schedule.campaign_id === selectedCampaign?.campaign_id);
      const tempCampaignSchedule = tempCampaignScheduleList[0];
      const CampaignScheduleStartTime = tempCampaignSchedule.start_time;
      const CampaignScheduleEndTime = tempCampaignSchedule.end_time;
      setStartDate(new Date(tempCampaignSchedule.start_date.substring(0,4)+'-'+ tempCampaignSchedule.start_date.substring(4,6)+'-'+ tempCampaignSchedule.start_date.substring(6,8)));
      setEndDate(new Date(tempCampaignSchedule.end_date.substring(0,4)+'-'+ tempCampaignSchedule.end_date.substring(4,6)+'-'+ tempCampaignSchedule.end_date.substring(6,8)));
      setStartFlag(selectedCampaign.start_flag.toString());
      if( CampaignScheduleStartTime.length > 0 && CampaignScheduleEndTime.length > 0 ) {
        setTempData([]);
        CampaignScheduleStartTime.map((item, index) => {
          setTempData((prev) => [
            ...prev,
            {
              no: index + 1,
              division: 1,
              startTime: item.substring(0,2)+":"+item.substring(2,4),
              endTime: CampaignScheduleEndTime[index].substring(0,2)+":"+CampaignScheduleEndTime[index].substring(2,4),
            },
          ]);
        });
      }
    }
  }, [schedules, selectedCampaign]);

  return (
    <div className="py-5">
      <div className="flex gap-5">
        <div className="w-[30%]">
          <TitleWrap className="border-b border-gray-300 pb-1" title="선택" />
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-2 justify-between">
              <Label className="w-[5rem] min-w-[5rem]">시작</Label>
              <Select value={startFlag} onValueChange={setStartFlag}>
                <SelectTrigger>
                  <SelectValue placeholder="시작" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">시작</SelectItem>
                  <SelectItem value="2">멈춤</SelectItem>
                  <SelectItem value="3">중지</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 justify-between">
              <Label className="w-[5rem] min-w-[5rem]">종료구분</Label>
              <CustomInput disabled={true} value={selectedCampaign?.end_flag === 1?'진행 중':'완료'}/>
            </div>

            <div className="flex items-center gap-2 justify-between">
              <Label className="w-[5rem] min-w-[5rem]">시작날짜</Label>
              <DatePicker
                onChange={(value) => {
                  if (value instanceof Date || value === null) {
                    setStartDate(value);
                  }
                }}
                value={startDate}
                format="yyyy-MM-dd"
                className="w-full custom-calendar"
                calendarIcon={<CalendarIcon className="mr-2 h-4 w-4" color="#989898" />}
                clearIcon={null}
              />
            </div>

            <div className="flex items-center gap-2 justify-between">
              <Label className="w-[5rem] min-w-[5rem]">종료날짜</Label>
              <DatePicker
               onChange={(value) => {
                if (value instanceof Date || value === null) {
                  setEndDate(value);
                }
              }}
                value={endDate}
                format="yyyy-MM-dd"
                className="w-full custom-calendar"
                calendarIcon={<CalendarIcon className="mr-2 h-4 w-4" color="#989898" />}
                clearIcon={null}
              />
            </div>
          </div>
        </div>

        <div className="w-[70%]">
          <TitleWrap className="border-b border-gray-300 pb-1" title="추가" />
          <div className="flex gap-5">
            <div className="w-[40%]">
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-2 justify-between">
                  <Label className="w-[5rem] min-w-[5rem]">시작시간</Label>
                  <CustomInput
                    type="text"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    maxLength={4}
                  />
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <Label className="w-[5rem] min-w-[5rem]">종료시간</Label>
                  <CustomInput
                    type="text"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    maxLength={4}
                  />
                </div>
                <div className="flex justify-end">
                  <CommonButton variant="secondary" onClick={()=>{
                      if( startTime.length === 4 && endTime.length === 4 ) {
                        let check = false;
                        tempData.map((item, index) => {
                          if( item.startTime.substring(0,2)+item.startTime.substring(3,5) === startTime 
                          && item.endTime.substring(0,2)+item.endTime.substring(3,5) === endTime ) {
                            alert("동일한 시간이 이미 설정되어 있습니다.");
                            check = true;
                          }
                        });
                        if( startTime > endTime ) {
                          alert("종료시간 설정이 잘못 되었습니다.");
                          check = true;
                        }
                        if( !check ) {                          
                          setTempData((prev) => [
                            ...prev,
                            {
                              no: prev.length + 1,
                              division: prev.length + 1,
                              startTime: startTime.substring(0,2)+":"+startTime.substring(2,4),
                              endTime: endTime.substring(0,2)+":"+endTime.substring(2,4),
                            },
                          ]);
                          setStartTime("");
                          setEndTime("");
                        }
                      }
                    }}>
                    시간추가
                    <Image src="/addArrow.svg" alt="스킬팝업" width={10} height={10} />
                  </CommonButton>
                </div>
              </div>
            </div>
            <div className="w-[60%]">
              <div className="grid-custom-wrap h-[270px]">
                <DataGrid columns={columns} rows={tempData} className="grid-custom" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-5">
        <CommonButton>확인</CommonButton>
        <CommonButton>취소</CommonButton>
      </div>
    </div>
  );
};

export default OperationTimeTab;