import React, { useState, useEffect } from 'react';
import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
import { CommonRadio, CommonRadioItem } from "@/components/shared/CommonRadio";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { CommonButton } from "@/components/shared/CommonButton";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import TitleWrap from "@/components/shared/TitleWrap";
import { useEnvironmentStore } from '@/store/environmentStore';
import { useAuthStore } from '@/store/authStore';
import { useApirForEnvironmentSave } from '@/features/auth/hooks/useApiForEnvironment';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import { useRouter } from 'next/navigation';
import { useTabStore } from '@/store/tabStore';

// API에 전송할 데이터 구조
interface PreferencesData {
  campaignListAlram: number;
  statisticsUpdateCycle: number;
  serverConnectionTime: number;
  showChannelCampaignDayScop: number;
  personalCampaignAlertOnly: number;
  useAlramPopup: number;
  unusedWorkHoursCalc: number;
  sendingWorkStartHours: string;
  sendingWorkEndHours: string;
  dayOfWeekSetting: string;
}

interface PreferencesBoardProps {
  onSubmit?: (data: PreferencesData) => void;
}

// "campaignListAlram": 0,  			알림설정-리스트 잔량부족시 알람 모드(주기적으로 계속) 0: 한번만, 1: 주기적으로 계속
// "statisticsUpdateCycle": 20,  		통계갱신주기-통계 가져오기 주기
// "serverConnectionTime": 100,		서버접속시간-서버와의 접속시간을 설정합니다.
// "showChannelCampaignDayScop": 5,	채널할당시보여주는캠페인-채널 할당 캠페인 범위
// "personalCampaignAlertOnly": 0,		알림옆라벨-본인 캠페인만 알림 여부 (체크안함) 0:전체, 1:본인
// "useAlramPopup": 0,					메시지알림창-알람 팝업 사용여부 (알리지않음) 0:알리지 않음, 1:알림
// "unusedWorkHoursCalc": 1,			캠페인기능업무시간라벨-업무시간 적용여부  (체크) 체크 되어있을때는 캠페인 가능 업무시간 다 Disabled 0:사용, 1:미사용
// "sendingWorkStartHours": "0000",	발신업무시간시작시간-발신업무시작시간
// "sendingWorkEndHours": "0000",		발신업무시간종료시간발신업무종료시간
// "dayOfWeekSetting": "f,f,f,f,f,f,f"	요일설정-발신업무가능 요일 (f는 체크 안됨 t는 체크)

export default function PreferencesBoard({ onSubmit }: PreferencesBoardProps) {
  const router = useRouter();

  // 환경설정 스토어에서 데이터 가져오기
  const { environmentData, setEnvironment } = useEnvironmentStore();
  // 사용자 인증 정보 가져오기
  const { id: userId } = useAuthStore();

  // 알림 상태
  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    title: '알림',
    type: '1',
    onConfirm: () => { },
    onCancel: () => { }
  });

  // 상태 초기화 - 기본값 없이 environmentData에서만 가져오도록 수정
  const [refreshCycle, setRefreshCycle] = useState("");
  const [monitoringType, setMonitoringType] = useState("");
  const [retryCount, setRetryCount] = useState("");
  const [timeout, setCustomTimeout] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [messageType, setMessageType] = useState("");
  const [personalCampaignAlertOnly, setPersonalCampaignAlertOnly] = useState(false);
  const [unusedWorkHoursCalc, setUnusedWorkHoursCalc] = useState(false);
  const [dayOfWeek, setDayOfWeek] = useState<string[]>(['f', 'f', 'f', 'f', 'f', 'f', 'f']);
  const [isSaving, setIsSaving] = useState(false);

  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

  const { activeTabId, activeTabKey, removeTab } = useTabStore();

  // 알림 유틸리티 함수
  const showAlert = (message: string) => {
    setAlertState({
      isOpen: true,
      message,
      title: '알림',
      type: '2',
      onConfirm: closeAlert,
      onCancel: () => { }
    });
  };

  const closeAlert = () => {
    setAlertState(prev => ({ ...prev, isOpen: false }));
    closeCurrentTab();
  };

  const closeCurrentTab = () => {
    if (activeTabId !== null && activeTabKey !== null) {
      removeTab(activeTabId, activeTabKey);
    }
  };

  // 환경설정 수정 API 호출
  const { mutate: environmentSave } = useApirForEnvironmentSave({
    onSuccess: (data) => {
      setIsSaving(false);
      showAlert('환경설정이 저장되었습니다');

      // 환경설정 스토어도 업데이트하여 UI 반영
      if (environmentData) {
        const updatedData = {
          ...environmentData,
          campaignListAlram: monitoringType === "oneTime" ? 1 : 0,
          statisticsUpdateCycle: parseInt(retryCount),
          serverConnectionTime: parseInt(timeout),
          showChannelCampaignDayScop: parseInt(refreshCycle),
          personalCampaignAlertOnly: personalCampaignAlertOnly ? 1 : 0,
          useAlramPopup: messageType === "알림만" ? 1 : 0,
          unusedWorkHoursCalc: unusedWorkHoursCalc ? 1 : 0,
          sendingWorkStartHours: startTime,
          sendingWorkEndHours: endTime,
          dayOfWeekSetting: dayOfWeek.join(',')
        };
        setEnvironment(updatedData);
      }
    },
    onError: (error) => {
      setIsSaving(false);
      showAlert(`환경설정 저장에 실패했습니다. ${error.message}`);
    }
  });

  // 환경설정 데이터가 로드되면 상태 업데이트
  useEffect(() => {
    if (environmentData) {
      // 환경설정 데이터에서 값 설정
      setRefreshCycle(environmentData.showChannelCampaignDayScop?.toString() || "");
      setMonitoringType(environmentData.campaignListAlram === 1 ? "oneTime" : "periodic");
      setRetryCount(environmentData.statisticsUpdateCycle?.toString() || "");
      setCustomTimeout(environmentData.serverConnectionTime?.toString() || "");
      setPersonalCampaignAlertOnly(environmentData.personalCampaignAlertOnly === 1);
      setMessageType(environmentData.useAlramPopup === 1 ? "알림만" : "알림과 없음");
      setUnusedWorkHoursCalc(environmentData.unusedWorkHoursCalc === 1);
      setStartTime(environmentData.sendingWorkStartHours || "");
      setEndTime(environmentData.sendingWorkEndHours || "");

      // 요일 설정 파싱
      if (environmentData.dayOfWeekSetting) {
        setDayOfWeek(environmentData.dayOfWeekSetting.split(','));
      }
    }
  }, [environmentData]);

  // 요일 체크박스 변경 핸들러
  const handleDayChange = (index: number, checked: boolean) => {
    const newDays = [...dayOfWeek];
    newDays[index] = checked ? 't' : 'f';
    setDayOfWeek(newDays);
  };

  const handleCancel = () => {
    closeCurrentTab();
  };

  // 폼 제출 핸들러
  const handleSubmit = () => {
    if (!environmentData) {
      showAlert('환경설정 데이터를 불러올 수 없습니다.');
      return;
    }

    setIsSaving(true);

    // API 요청을 위한 데이터 형식으로 변환
    const requestData = {
      employeeId: userId,
      campaignListAlram: monitoringType === "oneTime" ? 1 : 0,
      statisticsUpdateCycle: parseInt(retryCount) || environmentData.statisticsUpdateCycle,
      serverConnectionTime: parseInt(timeout) || environmentData.serverConnectionTime,
      showChannelCampaignDayScop: parseInt(refreshCycle) || environmentData.showChannelCampaignDayScop,
      personalCampaignAlertOnly: personalCampaignAlertOnly ? 1 : 0,
      useAlramPopup: messageType === "알림만" ? 1 : 0,
      unusedWorkHoursCalc: unusedWorkHoursCalc ? 1 : 0,
      sendingWorkStartHours: startTime || environmentData.sendingWorkStartHours,
      sendingWorkEndHours: endTime || environmentData.sendingWorkEndHours,
      dayOfWeekSetting: dayOfWeek.join(',')
    };

    // 환경설정 저장 API 호출
    environmentSave(requestData);

    // 상위 컴포넌트의 onSubmit이 있는 경우에도 호출
    if (onSubmit) {
      onSubmit(requestData);
    }
  };

  return (
    <div className="w-full limit-width">
      <div className="flex-col flex gap-5">
        <div>
          <TitleWrap title="화면표시" />
          <Table className='text-[#333]'>
            <tbody>
              <TableRow>
                <TableHeader className="w-[12.5rem] !pt-[6px] !pb-[5px]">
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
                <TableHeader className="w-[12.5rem] !py-[6px]">
                  <Label className="w-32">일람설정</Label>
                </TableHeader>
                <TableCell className="w-[17rem]">
                  <CommonRadio value={monitoringType} onValueChange={setMonitoringType} className="flex gap-8">
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
          <Table className='text-[#333]'>
            <tbody>
              <TableRow>
                <TableHeader className="w-[12.5rem] !pt-[6px] !pb-[5px]">
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
                <TableHeader className="w-[12.5rem] !py-[6px]">
                  <Label className="w-32">서버 접속시간</Label>
                </TableHeader>
                <TableCell className="w-[17rem]">
                  <div className="flex items-center gap-3">
                    <CustomInput
                      type="number"
                      value={timeout}
                      onChange={(e) => setCustomTimeout(e.target.value)}
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
                <CustomCheckbox
                  id="notification-enable"
                  checked={personalCampaignAlertOnly}
                  onCheckedChange={(checked) => setPersonalCampaignAlertOnly(checked as boolean)}
                />
                <Label htmlFor="notification-enable" className="text-sm">본인 캠페인만 업링크 알림</Label>
              </div>
            </div>
          </div>
          <Table className='text-[#333]'>
            <tbody>
              <TableRow>
                <TableHeader className="w-[12.5rem] !py-[6px]">
                  <Label className="w-32">매시지 알림창</Label>
                </TableHeader>
                <TableCell className="w-[17rem]">
                  <div className="flex items-center gap-3">
                    <Select value={messageType} onValueChange={setMessageType}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="알림 설정" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="알림과 없음">알리지 않음</SelectItem>
                        <SelectItem value="알림만">알림</SelectItem>
                      </SelectContent>
                    </Select>
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
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-8">
              <h2 className="text-sm">캠페인 가능 업무시간</h2>
              <div className='flex items-center gap-1'>
                <CustomCheckbox
                  id="worktime-enable"
                  checked={unusedWorkHoursCalc}
                  onCheckedChange={(checked) => setUnusedWorkHoursCalc(checked as boolean)}
                />
                <Label htmlFor="worktime-enable" className="text-sm">업무시간 계산 미사용</Label>
              </div>
            </div>
          </div>
          <Table className='text-[#333]'>
            <tbody>
              <TableRow>
                <TableHeader className="w-[12.5rem] !pt-[6px] !pb-[5px]">
                  <Label className="w-32">발신업무시간</Label>
                </TableHeader>
                <TableCell className="w-[17rem]">
                  <div className="flex items-center gap-2">
                    <Label>시작시간</Label>
                    <CustomInput
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="w-16"
                      disabled={unusedWorkHoursCalc}
                    />
                    <Label>종료시간</Label>
                    <CustomInput
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-16"
                      disabled={unusedWorkHoursCalc}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">해당 업무 시간에만 캠페인을 시작할 수 있습니다.</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeader className="w-[12.5rem] !py-[6px]">
                  <Label className="w-32">요일 설정</Label>
                </TableHeader>
                <TableCell className="w-[17rem]" colSpan={2}>
                  <div className="flex gap-4">
                    {weekdays.map((day, index) => (
                      <div key={day} className="flex items-center gap-1">
                        <CustomCheckbox
                          id={`day-${day}`}
                          checked={dayOfWeek[index] === 't'}
                          onCheckedChange={(checked) => handleDayChange(index, checked as boolean)}
                          disabled={unusedWorkHoursCalc}
                        />
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
          <CommonButton
            onClick={handleSubmit}
            disabled={isSaving}
          >
            {isSaving ? '저장 중...' : '저장'}
          </CommonButton>
          <CommonButton onClick={handleCancel}>취소</CommonButton>
        </div>
      </div>

      <CustomAlert
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onClose={alertState.onConfirm}
        onCancle={alertState.onCancel}
      />
    </div>
  );
}