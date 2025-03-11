import React, { useState, useEffect } from "react";
import TitleWrap from "@/components/shared/TitleWrap";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import DataGrid from "react-data-grid";
import { CommonButton } from "@/components/shared/CommonButton";
import DatePicker from "react-date-picker";
import { Calendar as CalendarIcon } from "lucide-react";
import Image from "next/image";
import { OperationTimeParam } from './CampaignManagerDetail';
import { CampaignScheDuleListDataResponse } from '@/features/campaignManager/types/campaignManagerIndex';
import CustomAlert, { CustomAlertRequest } from '@/components/shared/layout/CustomAlert';
import { MainDataResponse } from '@/features/auth/types/mainIndex';

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

const errorMessage: CustomAlertRequest = {
  isOpen: false,
  message: '',
  title: '캠페인 동작시간',
  type: '0',
  onClose: () => {},
  onCancle: () => {},
};

type Props = {
  newCampaignYn: boolean
  campaignInfo: MainDataResponse;
  campaignSchedule: CampaignScheDuleListDataResponse;
  onCampaignScheduleChange: (param:OperationTimeParam) => void;
};

const today = new Date();
const tempOperationTimeTab:OperationTimeParam = {
  changeYn: false,
  campaignInfoChangeYn: false,
  campaignScheduleChangeYn: false,
  onSave: false,
  onClosed: false,
  campaign_id: 0,
  start_date: today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2),
  end_date: today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2),
  start_time: [],
  end_time: [],
  start_flag: ''
};

const OperationTimeTab: React.FC<Props> = ({newCampaignYn, campaignInfo, campaignSchedule, onCampaignScheduleChange }) => {
  const [tempData, setTempData] = useState<DataProps[]>([]);
  const [startTime, setStartTime] = useState(""); // 시작시간
  const [endTime, setEndTime] = useState(""); // 종료시간
  const [tempCampaignSchedule, setTempCampaignSchedule] = useState<OperationTimeParam>(tempOperationTimeTab);
  const [alertState, setAlertState] = useState<CustomAlertRequest>(errorMessage);

  const handleSelectChange = (value:any, col:string) => {
    onCampaignScheduleChange({...tempCampaignSchedule
      , changeYn: true
      , campaignInfoChangeYn: true
      , start_flag: value
    });
  };

  useEffect(() => {
    if( campaignInfo && campaignSchedule.start_date !== '' ) {      
      const tempCampaignSchedule = campaignSchedule;
      const CampaignScheduleStartTime = tempCampaignSchedule.start_time;
      const CampaignScheduleEndTime = tempCampaignSchedule.end_time;
      // setStartDate(new Date(tempCampaignSchedule.start_date.substring(0,4)+'-'+ tempCampaignSchedule.start_date.substring(4,6)+'-'+ tempCampaignSchedule.start_date.substring(6,8)));
      // setEndDate(new Date(tempCampaignSchedule.end_date.substring(0,4)+'-'+ tempCampaignSchedule.end_date.substring(4,6)+'-'+ tempCampaignSchedule.end_date.substring(6,8)));
      setTempData([]);
      if( CampaignScheduleStartTime.length > 0 && CampaignScheduleEndTime.length > 0 ) {
        CampaignScheduleStartTime.map((item:string, index) => {
          setTempData((prev) => [
            ...prev,
            {
              no: index + 1,
              division: index + 1,
              startTime: item.substring(0,2)+":"+item.substring(2,4),
              endTime: (CampaignScheduleEndTime[index]+'').substring(0,2)+":"+(CampaignScheduleEndTime[index]+'').substring(2,4),
            },
          ]);
        });
      }
      setTempCampaignSchedule({...tempOperationTimeTab,
        campaign_id: campaignInfo.campaign_id,
        start_date: tempCampaignSchedule.start_date,
        end_date: tempCampaignSchedule.end_date,
        start_time: CampaignScheduleStartTime,
        end_time: CampaignScheduleEndTime,
        start_flag: campaignInfo.start_flag+'',
        onSave: false,
      });
    }
  }, [newCampaignYn,campaignSchedule,campaignInfo]);

  return (
    <div className="pt-[20px]">
      <div className="flex gap-[30px]">
        <div className="w-[30%]">
          <TitleWrap className="border-b border-gray-300 pb-1 !text-[#444] !mb-3" title="선택" />
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-[10px] justify-between">
              <Label className="w-[70px] min-w-[70px]">시작</Label>
              <Select value={campaignInfo.start_flag === 0?'2':campaignInfo.start_flag+''} onValueChange={(value) => handleSelectChange(value, 'startFlag')}
                disabled={campaignInfo.start_flag === 0} >
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
              <CustomInput disabled={true} value={campaignInfo?.end_flag === 1?'진행 중':campaignInfo?.end_flag === 2?'완료':''}/>
            </div>

            <div className="flex items-center gap-[10px] justify-between">
              <Label className="w-[70px] min-w-[70px]">시작날짜</Label>
              <DatePicker
                onChange={(value) => {
                  if (value instanceof Date || value === null) {
                    // setStartDate(value);
                    let tempStartDate = '';
                    let tempEndDate = tempCampaignSchedule.end_date;
                    if( value != null){
                      tempStartDate = value.getFullYear() + ('0' + (value.getMonth() + 1)).slice(-2) + ('0' + value.getDate()).slice(-2);
                      if( tempStartDate > tempEndDate){
                        tempEndDate = tempStartDate;
                      }
                    }
                    onCampaignScheduleChange({...tempCampaignSchedule
                      , changeYn: true
                      , campaignScheduleChangeYn: true
                      , start_date: tempStartDate
                      , end_date: tempEndDate
                    });
                  }
                }}
                value={ new Date(tempCampaignSchedule.start_date.substring(0,4)+'-'+ tempCampaignSchedule.start_date.substring(4,6)+'-'+ tempCampaignSchedule.start_date.substring(6,8)) }
                format="yyyy-MM-dd"
                className="w-full custom-calendar"
                calendarIcon={<CalendarIcon className="h-4 w-4" color="#989898" />}
                clearIcon={null}
              />
            </div>

            <div className="flex items-center gap-[10px] justify-between">
              <Label className="w-[70px] min-w-[70px]">종료날짜</Label>
              <DatePicker
                onChange={(value) => {
                  if (value instanceof Date || value === null) {
                    // setEndDate(value);
                    const tempStartDate = tempCampaignSchedule.start_date;
                    let tempEndDate = '';
                    if( value != null){
                      tempEndDate = value.getFullYear() + ('0' + (value.getMonth() + 1)).slice(-2) + ('0' + value.getDate()).slice(-2);
                      if( tempStartDate > tempEndDate){
                        tempEndDate = tempStartDate;
                      }
                    }
                    onCampaignScheduleChange({...tempCampaignSchedule
                      , changeYn: true
                      , campaignScheduleChangeYn: true
                      , start_date: tempStartDate
                      , end_date: tempEndDate
                    });
                  }
                }}
                value={new Date(tempCampaignSchedule.end_date.substring(0,4)+'-'+ tempCampaignSchedule.end_date.substring(4,6)+'-'+ tempCampaignSchedule.end_date.substring(6,8)) }
                format="yyyy-MM-dd"
                className="w-full custom-calendar"
                calendarIcon={<CalendarIcon className="h-4 w-4" color="#989898" />}
                clearIcon={null}
              />
            </div>
          </div>
        </div>

        <div className="w-[70%]">
          <TitleWrap className="border-b border-gray-300 pb-1 !text-[#444] !mb-3" title="추가" />
          <div className="flex gap-[20px]">
            <div className="w-[40%]">
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-[10px] justify-between">
                  <Label className="w-[70px] min-w-[70px]">시작시간</Label>
                  <CustomInput
                    type="text"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    maxLength={4}
                  />
                </div>
                <div className="flex items-center gap-[10px] justify-between">
                  <Label className="w-[70px] min-w-[70px]">종료시간</Label>
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
                        const tempStartTime:string[] = [];
                        const tempEndTime:string[] = [];
                        tempData.map((item, index) => {
                          if( item.startTime.substring(0,2)+item.startTime.substring(3,5) === startTime 
                          && item.endTime.substring(0,2)+item.endTime.substring(3,5) === endTime ) {
                            setAlertState({...alertState,
                              isOpen: true,
                              message: "동일한 시간이 이미 설정되어 있습니다.",
                            });
                            check = true;
                          }
                          tempStartTime.push(item.startTime.substring(0,2)+item.startTime.substring(3,5));
                          tempEndTime.push(item.endTime.substring(0,2)+item.endTime.substring(3,5));
                        });
                        if( startTime > endTime ) {
                          setAlertState({...alertState,
                            isOpen: true,
                            message: "종료시간 설정이 잘못 되었습니다.",
                          });
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
                          tempStartTime.push(startTime);
                          tempEndTime.push(endTime);

                          onCampaignScheduleChange({...tempCampaignSchedule
                            , changeYn: true
                            , campaignScheduleChangeYn: true
                            , start_time: tempStartTime
                            , end_time: tempEndTime
                          });
                          setStartTime("");
                          setEndTime("");
                        }
                      }
                    }}>
                    시간추가
                    <Image src="/addArrow.svg" alt="화살표" width={10} height={10} />
                  </CommonButton>
                </div>
              </div>
            </div>
            <div className="w-[60%]">
              <div className="grid-custom-wrap h-[270px]">
                <DataGrid 
                  columns={columns} 
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
      {!newCampaignYn &&
      <div className="flex justify-end gap-2 mt-5">
        <CommonButton variant="secondary" onClick={()=> 
          onCampaignScheduleChange({...tempCampaignSchedule
            , onSave: true
          })
        }>확인</CommonButton>
        <CommonButton variant="secondary" onClick={()=> 
          onCampaignScheduleChange({...tempCampaignSchedule
            , onClosed: true
          })
        }>취소</CommonButton>
      </div>
      }
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
        }}/>
    </div>
  );
};

export default OperationTimeTab;