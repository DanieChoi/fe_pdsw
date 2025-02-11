import React, { useState } from 'react';
import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
import { CommonRadio, CommonRadioItem } from "@/components/shared/CommonRadio";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { CommonButton } from "@/components/shared/CommonButton";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import TitleWrap from "@/components/shared/TitleWrap";

interface PreferencesData {
  refreshCycle: string;
  monitoringType: string;
  retryCount: string;
  timeout: string;
  ip: string;
  port: string;
  startTime: string;
  endTime: string;
  messageType: string;
}

interface PreferencesBoardProps {
  onSubmit?: (data: PreferencesData) => void;
}

export default function PreferencesBoard({ onSubmit }: PreferencesBoardProps) {
  const [refreshCycle, setRefreshCycle] = useState("5");
  const [monitoringType, setMonitoringType] = useState("periodic");
  const [retryCount, setRetryCount] = useState("30");
  const [timeout, setTimeout] = useState("100");
  const [ip, setIp] = useState("61.97.146.236");
  const [port, setPort] = useState("8003");
  const [startTime, setStartTime] = useState("0000");
  const [endTime, setEndTime] = useState("1300");
  const [messageType, setMessageType] = useState("알림과 없음");
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className="w-full limit-width">
     <div className="flex-col flex gap-5">
      <div>
        <TitleWrap title="화면표시" />
        <Table>
          <tbody>
          <TableRow>
            <TableHeader className="w-[12.5rem]">
              <Label className="w-32">채널 할당 시 보여주는 캠페인</Label>
            </TableHeader>
            <TableCell className="w-[17rem]">
                <div className="flex items-center gap-3">
                  <CustomInput 
                  type="number" 
                  value={refreshCycle}
                  onChange={(e) => setRefreshCycle(e.target.value)}
                  className="w-20"
                />
                <span className="text-sm">일(day)</span>
              </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">채널을 캠페인 모드로 할당 시 화면에 보여주는 캠페인의 범위를 선택합니다. 현재 날짜를 기준으로 설정한 값만큼의 범위안에서 캠페인을 보여줍니다.</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className="w-[12.5rem]">
                <Label className="w-32">일람설정</Label>
              </TableHeader>
              <TableCell className="w-[17rem]">
                <CommonRadio defaultValue={monitoringType} onValueChange={setMonitoringType} className="flex gap-8">
                  <div className="flex items-center space-x-2">
                    <CommonRadioItem value="oneTime" id="oneTime" />
                    <Label htmlFor="oneTime">한번만</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CommonRadioItem value="periodic" id="periodic" />
                    <Label htmlFor="periodic">주기적으로 계속</Label>
                  </div>
                </CommonRadio>
              </TableCell>
              <TableCell>
                <span className="text-sm">캠페인 리스트 잔량 부족시의 알람모드를 설정합니다.</span>
              </TableCell>
            </TableRow>
            </tbody>
        </Table>
        </div> 
        <div>
        <TitleWrap title="통신" />
        <Table>
          <tbody>
            <TableRow>
              <TableHeader className="w-[12.5rem]">
                <Label className="w-32">통계 갱신주기</Label>
              </TableHeader>
              <TableCell className="w-[17rem]">
                <div className="flex items-center gap-3">
                  <CustomInput 
                  type="number"
                  value={retryCount}
                  onChange={(e) => setRetryCount(e.target.value)}
                  className="w-20"
                />
                <span className="text-sm">초(sec)</span>
              </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">캠페인 통계를 서버로부터 가져오는 주기를 설정합니다.(권장 30~60초)</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className="w-[12.5rem]">
                <Label className="w-32">서버 접속시간</Label>
              </TableHeader>
              <TableCell className="w-[17rem]">
                <div className="flex items-center gap-3">
                  <CustomInput
                  type="number"
                  value={timeout}
                  onChange={(e) => setTimeout(e.target.value)}
                  className="w-20"
                />
                <span className="text-sm">초(sec)</span>
              </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">서버와의 접속시간을 설정합니다.</span>
              </TableCell>
            </TableRow>
            </tbody>
        </Table>
        </div>
        <div>
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-8">
                <h2 className="text-sm">알림</h2>
                <div className='flex items-center gap-1'>
                  <CustomCheckbox id="notification-enable" />
                  <Label htmlFor="notification-enable" className="text-sm">본인 캠페인만 업링크 알림</Label>
                </div>
            </div>
        </div>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader className="w-[12.5rem]">
                <Label className="w-32">매시지 알림창</Label>
              </TableHeader>
              <TableCell className="w-[17rem]">
                <div className="flex items-center gap-3">
                  <Select value={messageType} onValueChange={setMessageType}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="알리지 않음" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="알림과 없음">알리지 않음</SelectItem>
                    <SelectItem value="알림만">알림</SelectItem>
                  </SelectContent>
                  </Select>
                <span className="text-sm">초(sec)</span>
              </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">주요 이벤트 알림창 알림을 설정합니다.</span>
              </TableCell>
            </TableRow>
            </tbody>
        </Table>
        </div>
        <div>
        <TitleWrap title="로그" />
        <Table>
           <tbody>
            <TableRow>
              <TableHeader className="w-[12.5rem]">
                <Label className="w-32">프로그램 로그설정</Label>
              </TableHeader>
              <TableCell className="w-[17rem]">
                <div className="flex items-center gap-2">
                  <CustomCheckbox id="logging" />
                  <Label htmlFor="logging">프로그램 로그와 동시 로그를 설정합니다.</Label>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">NEXUSCUBE-C 프로그램의 로그를 설정합니다.</span>
              </TableCell>
            </TableRow>
            </tbody>
        </Table>
        </div>
        <div>
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-8">
                <h2 className="text-sm">캠페인 가능 업무시간</h2>
                <div className='flex items-center gap-1'>
                  <CustomCheckbox id="worktime-enable" />
                  <Label htmlFor="worktime-enable" className="text-sm">업무시간 계산 미사용</Label>
                </div>
            </div>
        </div>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader className="w-[12.5rem]">
                <Label className="w-32">발신업무시간</Label>
              </TableHeader>
              <TableCell className="w-[15rem]">
                <div className="flex items-center gap-2">
                  <Label>시작시간</Label>
                  <CustomInput
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-16"
                  />
                  <Label>종료시간</Label>
                    <CustomInput
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-16"
                    />
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">해당 업무 시간에만 캠페인을 시작할 수 있씁니다.</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className="w-[12.5rem]">
                <Label className="w-32">요일 설정</Label>
              </TableHeader>
              <TableCell className="w-[17rem]">
                  <div className="flex gap-4">
                    {weekdays.map((day) => (
                      <div key={day} className="flex items-center gap-1">
                        <CustomCheckbox id={`day-${day}`} />
                        <Label htmlFor={`day-${day}`}>{day}</Label>
                      </div>
                    ))}
                  </div>
              </TableCell>
            </TableRow>
            </tbody>
        </Table>
        </div>
        <div className="flex justify-end gap-2">
          <CommonButton>저장</CommonButton>
          <CommonButton>취소</CommonButton>
        </div>
      </div>
    </div>
    
  );
}