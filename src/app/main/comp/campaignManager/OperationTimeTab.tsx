import React from "react";
import TitleWrap from "@/components/shared/TitleWrap";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DataGrid from 'react-data-grid';
import { Button } from "@/components/ui/button";
import Image from 'next/image'

const columns = [
  { key: "no", name: "NO", }, // 열 정의
  { key: "division", name: "구분",},
  { key: "startTime", name: "시작시간", },
  { key: "endTime", name: "종료시간", },
];

const rows = [
  { no: 1, division: 1, startTime: "00:00", endTime: "00:00" }, // 행 데이터
  { no: 1, division: 1, startTime: "00:00", endTime: "00:00" },
  { no: 1, division: 1, startTime: "00:00", endTime: "00:00" },
];

const OperationTimeTab: React.FC = () => {
  return (
    <div className="py-5">
      <div className="flex gap-5">
        <div className="w-[30%]">
          <TitleWrap
            className='border-b border-gray-300 pb-1'
            title="선택"
            />
            <div className="flex flex-col gap-y-2">
              
              <div className='flex items-center gap-2 justify-between'>
                <Label className="w-[5rem] min-w-[5rem]">시작</Label>
                 <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="시작" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">시작</SelectItem>
                    <SelectItem value="2">멈춤</SelectItem>
                    <SelectItem value="3">중지</SelectItem>
                  </SelectContent>
                  </Select>
              </div>

              <div className='flex items-center gap-2 justify-between'>
                <Label className="w-[5rem] min-w-[5rem]">종료구분</Label>
                  <Input 
                    disabled={true} 
                  />
              </div>

              <div className='flex items-center gap-2 justify-between'>
                <Label className="w-[5rem] min-w-[5rem]">시작날짜</Label>
                 <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="2024-10-30" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">2024-10-30</SelectItem>
                    <SelectItem value="2">2024-10-31</SelectItem>
                  </SelectContent>
                  </Select>
              </div>

              <div className='flex items-center gap-2 justify-between'>
                <Label className="w-[5rem] min-w-[5rem]">종료날짜</Label>
                 <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="2024-10-30" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">2024-10-30</SelectItem>
                    <SelectItem value="2">2024-10-31</SelectItem>
                  </SelectContent>
                  </Select>
              </div>

            </div>
        </div>
        <div className="w-[70%]">
          <TitleWrap
            className='border-b border-gray-300 pb-1'
            title="추가"
            />
            <div className="flex gap-5">
              <div className="w-[40%]">
                <div className="flex flex-col gap-y-2">
                  <div className='flex items-center gap-2 justify-between'>
                    <Label className="w-[5rem] min-w-[5rem]">시작시간</Label>
                      <Input />
                  </div>
                  <div className='flex items-center gap-2 justify-between'>
                    <Label className="w-[5rem] min-w-[5rem]">종료시간</Label>
                      <Input />
                  </div>
                  <div className='flex justify-end'>
                     <Button
                     variant="secondary"
                     >
                      시간추가
                      <Image
                          src="/addArrow.svg"
                          alt="스킬팝업"
                          width={10}
                          height={10}
                        /> 
                     </Button>
                  </div>
                </div>
              </div>
              <div className="w-[60%]">
                <div className="gird-custom h-[310px]">
                  <DataGrid
                    columns={columns}
                    rows={rows}
                    className="grid-custom" // React Data Grid의 기본 테마
                  />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OperationTimeTab;