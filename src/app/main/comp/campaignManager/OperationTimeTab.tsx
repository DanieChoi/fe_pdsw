import React, { useState } from "react";
import TitleWrap from "@/components/shared/TitleWrap";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DataGrid from "react-data-grid";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react"
import Image from "next/image";

const columns = [
  { key: "no", name: "NO" },
  { key: "division", name: "구분" },
  { key: "startTime", name: "시작시간" },
  { key: "endTime", name: "종료시간" },
];

const rows = [
  { no: 1, division: 1, startTime: "00:00", endTime: "00:00" },
  { no: 2, division: 2, startTime: "01:00", endTime: "02:00" },
  { no: 3, division: 3, startTime: "02:00", endTime: "03:00" },
];

type Props = {
  campaignId: string;
};

const OperationTimeTab: React.FC<Props> = ({ campaignId }) => {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [startTime, setStartTime] = useState(""); // 시작시간
  const [endTime, setEndTime] = useState(""); // 종료시간

  return (
    <div className="py-5">
      <div className="flex gap-5">
        <div className="w-[30%]">
          <TitleWrap className="border-b border-gray-300 pb-1" title="선택" />
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-2 justify-between">
              <Label className="w-[5rem] min-w-[5rem]">시작</Label>
              <Select>
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
              <Input disabled={true} />
            </div>

            <div className="flex items-center gap-2 justify-between">
              <Label className="w-[5rem] min-w-[5rem]">시작날짜</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="datapicker" className="w-full justify-start">
                    <CalendarIcon className="mr-2 h-4 w-4" color="#989898"/>
                    {startDate ? startDate.toLocaleDateString() : "날짜 선택"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex items-center gap-2 justify-between">
              <Label className="w-[5rem] min-w-[5rem]">종료날짜</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="datapicker" className="w-full justify-start">
                    <CalendarIcon className="mr-2 h-4 w-4" color="#989898"/>
                    {endDate ? endDate.toLocaleDateString() : "날짜 선택"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                  />
                </PopoverContent>
              </Popover>
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
                  <Input
                    type="text"
                    value={startTime} // 제어된 컴포넌트
                    onChange={(e) => setStartTime(e.target.value)} // 상태 업데이트
                  />
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <Label className="w-[5rem] min-w-[5rem]">종료시간</Label>
                  <Input
                    type="text"
                    value={endTime} // 제어된 컴포넌트
                    onChange={(e) => setEndTime(e.target.value)} // 상태 업데이트
                  />
                </div>
                <div className="flex justify-end">
                  <Button variant="secondary">
                    시간추가
                    <Image src="/addArrow.svg" alt="스킬팝업" width={10} height={10} />
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-[60%]">
              <div className="gird-custom-wrap h-[270px]">
                <DataGrid columns={columns} rows={rows} className="grid-custom" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-5">
        <Button>확인</Button>
        <Button>취소</Button>
      </div>
    </div>
  );
};

export default OperationTimeTab;