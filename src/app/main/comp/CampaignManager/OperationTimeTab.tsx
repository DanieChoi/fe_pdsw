import React, { useState, useEffect } from "react";
import TitleWrap from "@/components/shared/TitleWrap";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import DataGrid from "react-data-grid";
import "react-data-grid/lib/styles.css";
import { CommonButton } from "@/components/shared/CommonButton";
import DatePicker from "react-date-picker";
import { Calendar as CalendarIcon, X } from "lucide-react";
import Image from "next/image";
import { OperationTimeParam } from "./CampaignManagerDetail";
import { CampaignScheDuleListDataResponse } from "@/features/campaignManager/types/campaignManagerIndex";
import CustomAlert, { CustomAlertRequest } from "@/components/shared/layout/CustomAlert";
import { MainDataResponse } from "@/features/auth/types/mainIndex";
import CustomInputForTime from "@/components/shared/CustomInputForTime";

interface DataProps {
  no: number;
  division: number;
  startTime: string;
  endTime: string;
}

const errorMessage: CustomAlertRequest = {
  isOpen: false,
  message: "",
  title: "캠페인 동작시간",
  type: "0",
  onClose: () => { },
  onCancle: () => { },
};

type Props = {
  callCampaignMenu: string;
  campaignInfo: MainDataResponse;
  campaignSchedule: CampaignScheDuleListDataResponse;
  onCampaignScheduleChange: (param: OperationTimeParam) => void;
};

const today = new Date();
const tempOperationTimeTab: OperationTimeParam = {
  changeYn: false,
  campaignInfoChangeYn: false,
  campaignScheduleChangeYn: false,
  onSave: false,
  onClosed: false,
  campaign_id: 0,
  start_date:
    today.getFullYear() +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    ("0" + today.getDate()).slice(-2),
  end_date:
    today.getFullYear() +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    ("0" + today.getDate()).slice(-2),
  start_time: [],
  end_time: [],
  start_flag: "",
};

const OperationTimeTab: React.FC<Props> = ({
  callCampaignMenu,
  campaignInfo,
  campaignSchedule,
  onCampaignScheduleChange,
}) => {
  const [tempData, setTempData] = useState<DataProps[]>([]);
  const [startTime, setStartTime] = useState(""); // 시작시간
  const [endTime, setEndTime] = useState(""); // 종료시간
  const [tempCampaignSchedule, setTempCampaignSchedule] =
    useState<OperationTimeParam>(tempOperationTimeTab);
  const [alertState, setAlertState] = useState<CustomAlertRequest>(errorMessage);

  const handleSelectChange = (value: any, col: string) => {
    onCampaignScheduleChange({
      ...tempCampaignSchedule,
      changeYn: true,
      campaignInfoChangeYn: true,
      start_flag: value,
    });
  };

  useEffect(() => {
    if (campaignInfo && campaignSchedule.start_date !== "") {
      const tempCampaignScheduleData = campaignSchedule;
      const CampaignScheduleStartTime = tempCampaignScheduleData.start_time;
      const CampaignScheduleEndTime = tempCampaignScheduleData.end_time;
      setTempData([]);
      if (CampaignScheduleStartTime.length > 0 && CampaignScheduleEndTime.length > 0) {
        CampaignScheduleStartTime.forEach((item: string, index) => {
          setTempData((prev) => [
            ...prev,
            {
              no: index + 1,
              division: index + 1,
              startTime: item.substring(0, 2) + ":" + item.substring(2, 4),
              endTime:
                (CampaignScheduleEndTime[index] + "")
                  .substring(0, 2) +
                ":" +
                (CampaignScheduleEndTime[index] + "").substring(2, 4),
            },
          ]);
        });
      }
      setTempCampaignSchedule({
        ...tempOperationTimeTab,
        campaign_id: campaignInfo.campaign_id,
        start_date: tempCampaignScheduleData.start_date,
        end_date: tempCampaignScheduleData.end_date,
        start_time: CampaignScheduleStartTime,
        end_time: CampaignScheduleEndTime,
        start_flag: campaignInfo.start_flag + "",
        onSave: false,
      });
    }
  }, [callCampaignMenu, campaignSchedule, campaignInfo]);

  // 행 삭제 함수
  const handleDelete = (no: number) => {
    setTempData((prevData) => {
      const newData = prevData
        .filter((item) => item.no !== no)
        .map((item, index) => ({
          ...item,
          no: index + 1,
          division: index + 1,
        }));
      const newStartTimes = newData.map((item) =>
        item.startTime.split(":").join("")
      );
      const newEndTimes = newData.map((item) =>
        item.endTime.split(":").join("")
      );
      const updatedSchedule = {
        ...tempCampaignSchedule,
        changeYn: true,
        campaignScheduleChangeYn: true,
        start_time: newStartTimes,
        end_time: newEndTimes,
      };
      setTempCampaignSchedule(updatedSchedule);
      onCampaignScheduleChange(updatedSchedule);
      return newData;
    });
  };

  // 그리드 컬럼 정의 (삭제 버튼 컬럼 추가, delete 열에 width 추가)
  const gridColumns = [
    { key: "no", name: "NO" },
    { key: "division", name: "구분" },
    { key: "startTime", name: "시작시간" },
    { key: "endTime", name: "종료시간" },
    {
      key: "delete",
      name: "",
      width: 50,
      frozen: false,
      sortable: false,
      resizable: false,
      renderCell: ({ row }: { row: DataProps }) => (
        <div className="flex justify-center items-center w-full h-full">
          <button
            onClick={() => handleDelete(row.no)}
            className="text-gray-600 hover:text-red-500"
          >
            <X size={16} />
          </button>
        </div>
      )
    }

  ];

  return (
    <div className="pt-[20px]">
      <div className="flex gap-[30px]">
        <div className="w-[30%]">
          <TitleWrap
            className="border-b border-gray-300 pb-1 !text-[#444] !mb-3"
            title="선택"
          />
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-[10px] justify-between">
              <Label className="w-[70px] min-w-[70px]">시작</Label>
              <Select
                value={
                  callCampaignMenu === "NewCampaignManager" ||
                    callCampaignMenu === "CampaignGroupManager"
                    ? "2"
                    : campaignInfo.start_flag + ""
                }
                onValueChange={(value) => handleSelectChange(value, "startFlag")}
                disabled={
                  callCampaignMenu === "NewCampaignManager" ||
                  callCampaignMenu === "CampaignGroupManager"
                }
              >
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

            <div className="flex items-center gap-[10px] justify-between">
              <Label className="w-[70px] min-w-[70px]">종료구분</Label>
              <CustomInput
                disabled={true}
                value={
                  campaignInfo?.end_flag === 1
                    ? "진행 중"
                    : campaignInfo?.end_flag === 2
                      ? "완료"
                      : ""
                }
              />
            </div>

            <div className="flex items-center gap-[10px] justify-between">
              <Label className="w-[70px] min-w-[70px]">시작날짜</Label>
              <DatePicker
                onChange={(value) => {
                  if (value instanceof Date || value === null) {
                    let tempStartDate = "";
                    let tempEndDate = tempCampaignSchedule.end_date;
                    if (value != null) {
                      tempStartDate =
                        value.getFullYear() +
                        ("0" + (value.getMonth() + 1)).slice(-2) +
                        ("0" + value.getDate()).slice(-2);
                      if (tempStartDate > tempEndDate) {
                        tempEndDate = tempStartDate;
                      }
                    }
                    onCampaignScheduleChange({
                      ...tempCampaignSchedule,
                      changeYn: true,
                      campaignScheduleChangeYn: true,
                      start_date: tempStartDate,
                      end_date: tempEndDate,
                    });
                  }
                }}
                value={new Date(
                  tempCampaignSchedule.start_date.substring(0, 4) +
                  "-" +
                  tempCampaignSchedule.start_date.substring(4, 6) +
                  "-" +
                  tempCampaignSchedule.start_date.substring(6, 8)
                )}
                format="yyyy-MM-dd"
                className="w-full custom-calendar"
                calendarIcon={
                  <CalendarIcon className="h-4 w-4" color="#989898" />
                }
                clearIcon={null}
              />
            </div>

            <div className="flex items-center gap-[10px] justify-between">
              <Label className="w-[70px] min-w-[70px]">종료날짜</Label>
              <DatePicker
                onChange={(value) => {
                  if (value instanceof Date || value === null) {
                    const tempStartDate = tempCampaignSchedule.start_date;
                    let tempEndDate = "";
                    if (value != null) {
                      tempEndDate =
                        value.getFullYear() +
                        ("0" + (value.getMonth() + 1)).slice(-2) +
                        ("0" + value.getDate()).slice(-2);
                      if (tempStartDate > tempEndDate) {
                        tempEndDate = tempStartDate;
                      }
                    }
                    onCampaignScheduleChange({
                      ...tempCampaignSchedule,
                      changeYn: true,
                      campaignScheduleChangeYn: true,
                      start_date: tempStartDate,
                      end_date: tempEndDate,
                    });
                  }
                }}
                value={new Date(
                  tempCampaignSchedule.end_date.substring(0, 4) +
                  "-" +
                  tempCampaignSchedule.end_date.substring(4, 6) +
                  "-" +
                  tempCampaignSchedule.end_date.substring(6, 8)
                )}
                format="yyyy-MM-dd"
                className="w-full custom-calendar"
                calendarIcon={
                  <CalendarIcon className="h-4 w-4" color="#989898" />
                }
                clearIcon={null}
              />
            </div>
          </div>
        </div>

        <div className="w-[70%]">
          <TitleWrap
            className="border-b border-gray-300 pb-1 !text-[#444] !mb-3"
            title="추가"
          />
          <div className="flex gap-[20px]">
            <div className="w-[40%]">
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-[10px] justify-between">
                  <Label className="w-[70px] min-w-[70px]">시작시간</Label>
                  <CustomInputForTime
                    value={startTime}
                    onChange={(value) => setStartTime(value)}
                  />
                </div>
                <div className="flex items-center gap-[10px] justify-between">
                  <Label className="w-[70px] min-w-[70px]">종료시간</Label>
                  <CustomInputForTime
                    value={endTime}
                    onChange={(value) => setEndTime(value)}
                  />
                </div>
                <div className="flex justify-end">
                  <CommonButton
                    variant="secondary"
                    onClick={() => {
                      if (startTime.length === 4 && endTime.length === 4) {
                        let check = false;
                        const tempStartTime: string[] = [];
                        const tempEndTime: string[] = [];
                        tempData.forEach((item) => {
                          if (
                            item.startTime.replace(":", "") === startTime &&
                            item.endTime.replace(":", "") === endTime
                          ) {
                            setAlertState({
                              ...alertState,
                              isOpen: true,
                              message: "동일한 시간이 이미 설정되어 있습니다.",
                            });
                            check = true;
                          }
                          tempStartTime.push(item.startTime.replace(":", ""));
                          tempEndTime.push(item.endTime.replace(":", ""));
                        });
                        if (startTime > endTime) {
                          setAlertState({
                            ...alertState,
                            isOpen: true,
                            message: "종료시간 설정이 잘못 되었습니다.",
                          });
                          check = true;
                        }
                        if (!check) {
                          tempStartTime.push(startTime);
                          tempEndTime.push(endTime);
                          onCampaignScheduleChange({
                            ...tempCampaignSchedule,
                            changeYn: true,
                            campaignScheduleChangeYn: true,
                            start_time: tempStartTime,
                            end_time: tempEndTime,
                          });
                          setTempData((prev) => [
                            ...prev,
                            {
                              no: prev.length + 1,
                              division: prev.length + 1,
                              startTime:
                                startTime.substring(0, 2) +
                                ":" +
                                startTime.substring(2, 4),
                              endTime:
                                endTime.substring(0, 2) +
                                ":" +
                                endTime.substring(2, 4),
                            },
                          ]);
                          setStartTime("");
                          setEndTime("");
                        }
                      }
                    }}
                  >
                    시간추가
                    <Image src="/addArrow.svg" alt="화살표" width={10} height={10} />
                  </CommonButton>
                </div>
              </div>
            </div>
            <div className="w-[60%]">
              <div className="grid-custom-wrap h-[270px]">
                <DataGrid
                  columns={gridColumns}
                  rows={tempData}
                  className="grid-custom"
                  rowHeight={30}
                  headerRowHeight={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {!(callCampaignMenu === "NewCampaignManager" ||
        callCampaignMenu === "CampaignGroupManager" ||
        callCampaignMenu === "CampaignClone") && (
          <div className="flex justify-end gap-2 mt-5">
            <CommonButton
              variant="secondary"
              onClick={() =>
                onCampaignScheduleChange({
                  ...tempCampaignSchedule,
                  onSave: true,
                })
              }
            >
              확인
            </CommonButton>
            <CommonButton
              variant="secondary"
              onClick={() =>
                onCampaignScheduleChange({
                  ...tempCampaignSchedule,
                  onClosed: true,
                })
              }
            >
              취소
            </CommonButton>
          </div>
        )}
      <CustomAlert
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onClose={() => {
          setAlertState((prev) => ({ ...prev, isOpen: false }));
        }}
        onCancle={() => {
          setAlertState((prev) => ({ ...prev, isOpen: false }));
        }}
      />
    </div>
  );
};

export default OperationTimeTab;
