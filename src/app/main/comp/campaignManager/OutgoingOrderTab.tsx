import React from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DataGrid from 'react-data-grid';
import { Button } from "@/components/ui/button";
import Image from 'next/image'

const columns = [
  { key: "Tell1", name: "고객 전화번호(1)", }, // 열 정의
  { key: "Tell2", name: "고객 전화번호(2)", }, // 열 정의
  { key: "Tell3", name: "고객 전화번호(3)", }, // 열 정의
  { key: "Tell4", name: "고객 전화번호(4)", }, // 열 정의
  { key: "Tell5", name: "고객 전화번호(5)", }, // 열 정의
];

const rows = [
  { Tell1: "CP", Tell2: 2, Tell3: "00:00", Tell4: "00:00", Tell5: 2 }, // 행 데이터
];

const OutgoingOrderTab: React.FC = () => {
  return (
    <div className="py-5">
      <div className="flex gap-5">
        <div className="w-[30%]">
            <div className="flex flex-col gap-y-2">              
              <div className='flex items-center gap-2 justify-between'>
                <Label className="w-[5rem] min-w-[5rem]">Phone ID</Label>
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
            </div>
        </div>
        <div className="w-[70%]">
            <div className="gird-custom h-[70px]">
              <DataGrid
                columns={columns}
                rows={rows}
                className="grid-custom" // React Data Grid의 기본 테마
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default OutgoingOrderTab;