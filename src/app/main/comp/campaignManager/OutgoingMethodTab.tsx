import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { CommonButton } from "@/components/shared/CommonButton";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/CustomSelect";
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { OutgoingMethodTabParam } from './CampaignManagerDetail';

const CampaignOutgoingOrderTab:OutgoingMethodTabParam = {
  changeYn: false,
  campaignInfoChangeYn: false,
  onSave: false,
  onClosed: false,
  trunk_access_code: '',          //Trunk Access Code
  dial_try_interval: 0,           //재시도 간격(초)
  alarm_answer_count: 0,          //콜 목표량
  overdial_abandon_time: 0,       //포기호 처리시간(초)
  detect_mode: 0,                 //기계음 처리 - 자동응답기 처리 1 : 컬러링 판별 후 사람만 연결, 2 : 컬러링 판별 후 사람/기계음 연결, 3 : 기계음/사람 무조건 연결
  auto_dial_interval: 0,          //자동 다이얼 시
  power_divert_queue: 0,          //연결 IVR NO 및 다이얼 모드
  next_campaign: 0,               //연결 캠페인
  DDD_code: '',                   //DDD Number - 지역 번호
  callback_kind: 0,               //연결구분 - 콜백구분 0 : 일반 캠페인(Default), 1 : 무한 콜백, 2 : 일반 콜백
  max_ring: 0,                    //최대 링 횟수
  token_id: 0,                    //토큰 ID
  use_counsel_result: 0,          //상담결과 등록 여부 - 0 : 미사용, 1 : 사용
  dial_mode_option: 0,            //다이얼 모드 옵션 - 발신 모드별 옵션 설정(system preview 에서만 사용)
  user_option: '',                //제한 호수 비율
};

type Props = {
  campaignInfo: MainDataResponse;
  onCampaignOutgoingMethodChange: (param:OutgoingMethodTabParam) => void;
};

const OutgoingMethodTab: React.FC<Props> = ({ campaignInfo, onCampaignOutgoingMethodChange }) => {
  const [trunkAccessCode, setTrunkAccessCode] = useState("");
  const [retryInterval] = useState("20");
  const [callGoal, setCallGoal] = useState("");
  const [abandonmentTime, setAbandonmentTime] = useState("2");
  const [machineHandling, setMachineHandling] = useState(
    "컬러링 판별후 사람만연결"
  );
  const [autoDial, setAutoDial] = useState("");
  const [linkedCampaign, setLinkedCampaign] = useState("test1");
  const [dddNumber, setDddNumber] = useState("");
  const [maxRings] = useState("10");
  const [tokenId, setTokenId] = useState("");
  const [consultationRegistration, setConsultationRegistration] =
    useState("사용");
  const [dialModeOption, setDialModeOption] = useState("default");
  const [ivrNo, setIvrNo] = useState("");
  const [limitRateEnabled, setLimitRateEnabled] = useState(false);
  const [limitRate, setLimitRate] = useState("");  
  const [tempOutgoingOrderTab, setTempOutgoingOrderTab] = useState<OutgoingMethodTabParam>(CampaignOutgoingOrderTab);

  // 숫자만 입력되도록 제어하는 함수
  const handleNumericInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    type: string
  ) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setValue(value); // 숫자인 경우만 상태 업데이트
      if( type === 'setTrunkAccessCode'){
        onCampaignOutgoingMethodChange({...tempOutgoingOrderTab
          , changeYn: true
          , campaignInfoChangeYn: true
          , trunk_access_code: value
        });
      }else if( type === 'setCallGoal'){
        onCampaignOutgoingMethodChange({...tempOutgoingOrderTab
          , changeYn: true
          , campaignInfoChangeYn: true
          , alarm_answer_count: Number(value)
        });
      }else if( type === 'setAutoDial'){
        onCampaignOutgoingMethodChange({...tempOutgoingOrderTab
          , changeYn: true
          , campaignInfoChangeYn: true
          , auto_dial_interval: Number(value)
        });
      }else if( type === 'setDddNumber'){
        onCampaignOutgoingMethodChange({...tempOutgoingOrderTab
          , changeYn: true
          , campaignInfoChangeYn: true
          , DDD_code: value
        });
      }else if( type === 'setTokenId'){
        onCampaignOutgoingMethodChange({...tempOutgoingOrderTab
          , changeYn: true
          , campaignInfoChangeYn: true
          , token_id: Number(value)
        });
      }else if( type === 'setIvrNo'){
        onCampaignOutgoingMethodChange({...tempOutgoingOrderTab
          , changeYn: true
          , campaignInfoChangeYn: true
          , power_divert_queue: Number(value)
        });
      }else if( type === 'setLimitRate'){
        onCampaignOutgoingMethodChange({...tempOutgoingOrderTab
          , changeYn: true
          , campaignInfoChangeYn: true
          , user_option: value === ''?'': 'limit='+value+',afiniti=off'
        });
        setLimitRate(value);
      }
    }
  };
  const handleAbandonmentTime = (value:string) => {
    onCampaignOutgoingMethodChange({...tempOutgoingOrderTab
      , changeYn: true
      , campaignInfoChangeYn: true
      , overdial_abandon_time: Number(value) 
    });
  };

  useEffect(() => {
    if (campaignInfo.campaign_id !== 0) {  
      setTempOutgoingOrderTab({...tempOutgoingOrderTab
        ,trunk_access_code : campaignInfo.trunk_access_code
        ,dial_try_interval : campaignInfo.dial_try_interval
        ,alarm_answer_count : campaignInfo.alarm_answer_count
        ,overdial_abandon_time : campaignInfo.overdial_abandon_time
        ,detect_mode : campaignInfo.detect_mode
        ,auto_dial_interval : campaignInfo.auto_dial_interval
        ,power_divert_queue : campaignInfo.power_divert_queue
        ,next_campaign : campaignInfo.next_campaign
        ,DDD_code : campaignInfo.DDD_code
        ,callback_kind : campaignInfo.callback_kind
        ,max_ring : campaignInfo.max_ring
        ,token_id : campaignInfo.token_id
        ,use_counsel_result : campaignInfo.use_counsel_result
        ,dial_mode_option : campaignInfo.dial_mode_option
        ,user_option : campaignInfo.user_option
      }); 
      setLimitRate(campaignInfo.user_option === ''?'':campaignInfo.user_option.split(',')[0].indexOf('limit') > -1?campaignInfo.user_option.split(',')[0].split('=')[1]:'');
    }
  }, [campaignInfo]);

  return (
    <div className="py-5">
      <div className="flex gap-[60px]">
        <div className="w-[50%] flex flex-col gap-y-2">
          {/* Trunk Access Code */}
          <div className="flex items-center gap-2 justify-between">
            <Label className="w-[8.3rem] min-w-[8.3rem]">
              Trunk Access Code
            </Label>
            <CustomInput
              type="text"
              value={tempOutgoingOrderTab.trunk_access_code}
              onChange={(e) => handleNumericInput(e, setTrunkAccessCode,'setTrunkAccessCode')}
            />
          </div>

          {/* 재시도 간격(초) */}
          <div className="flex items-center gap-2 justify-between">
            <Label className="w-[8.3rem] min-w-[8.3rem]">재시도 간격(초)</Label>
            <Select value={tempOutgoingOrderTab.dial_try_interval+''} disabled>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={tempOutgoingOrderTab.dial_try_interval} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="20">20</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 콜 목표량 */}
          <div className="flex items-center gap-2 justify-between">
            <Label className="w-[8.3rem] min-w-[8.3rem]">콜 목표량</Label>
            <CustomInput
              type="text"
              value={tempOutgoingOrderTab.alarm_answer_count}
              onChange={(e) => handleNumericInput(e, setCallGoal,'setCallGoal')}
            />
          </div>

          {/* 포기호 처리시간 */}
          <div className="flex items-center gap-2 justify-between">
            <Label className="w-[8.3rem] min-w-[8.3rem]">
              포기호 처리시간(초)
            </Label>
            <Select value={tempOutgoingOrderTab.overdial_abandon_time+''} onValueChange={handleAbandonmentTime}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={tempOutgoingOrderTab.overdial_abandon_time} />
              </SelectTrigger>
              <SelectContent>
                {["0","2", "3", "4", "5", "6", "7", "10", "15", "20", "30", "60"].map(
                  (time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>

          {/* 기계음 처리 */}
          <div className="flex items-center gap-2 justify-between">
            <Label className="w-[8.3rem] min-w-[8.3rem]">기계음처리</Label>
            <Select
              value={machineHandling}
              onValueChange={setMachineHandling}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={machineHandling} />
              </SelectTrigger>
              <SelectContent>
                {[
                  "컬러링 판별후 사람만연결",
                  "컬러링 판별후 사람/ 기계음 연결",
                  "기계음/사람 무조건연결",
                ].map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* 자동 다이얼 시 */}
          <div className="flex items-center gap-2 justify-between">
            <Label className="w-[8.3rem] min-w-[8.3rem]">자동 다이얼 시</Label>
            <CustomInput
              type="text"
              value={tempOutgoingOrderTab.auto_dial_interval}
              onChange={(e) => handleNumericInput(e, setAutoDial,'setAutoDial')}
            />
          </div>
        </div>

        <div className="w-[50%] flex flex-col gap-y-2">
          {/* 연결 캠페인 */}
          <div className="flex items-center gap-2 justify-between">
            <Label className="w-[8.3rem] min-w-[8.3rem]">연결 캠페인</Label>
            <Select value={linkedCampaign} onValueChange={setLinkedCampaign}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={linkedCampaign} />
              </SelectTrigger>
              <SelectContent>
                {["test1", "test2"].map((campaign) => (
                  <SelectItem key={campaign} value={campaign}>
                    {campaign}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* DDD Number */}
          <div className="flex items-center gap-2 justify-between">
            <Label className="w-[8.3rem] min-w-[8.3rem]">DDD Number</Label>
            <CustomInput
              type="text"
              value={tempOutgoingOrderTab.DDD_code}
              onChange={(e) => handleNumericInput(e, setDddNumber,'setDddNumber')}
            />
          </div>

          {/* 최대 링 횟수 */}
          <div className="flex items-center gap-2 justify-between">
            <Label className="w-[8.3rem] min-w-[8.3rem]">최대 링 횟수</Label>
            <Select value={maxRings} disabled>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={maxRings} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Token ID */}
          <div className="flex items-center gap-2 justify-between">
            <Label className="w-[8.3rem] min-w-[8.3rem]">Token ID</Label>
            <CustomInput
              type="text"
              value={tempOutgoingOrderTab.token_id}
              onChange={(e) => handleNumericInput(e, setTokenId,'setTokenId')}
            />
          </div>

          {/* 상담결과 등록 */}
          <div className="flex items-center gap-2 justify-between">
            <Label className="w-[8.3rem] min-w-[8.3rem]">상담결과 등록</Label>
            <Select
              value={consultationRegistration}
              onValueChange={setConsultationRegistration}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={consultationRegistration} />
              </SelectTrigger>
              <SelectContent>
                {["사용", "미사용"].map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* 연결 IVR NO 및 다이얼 모드 */}
      <div className="flex gap-[20px] mt-[0.5rem]">
        <div className="flex items-center gap-2 justify-between">
          <Label className="w-[8.3rem] min-w-[8.3rem]">연결 IVR NO</Label>
          <CustomInput
            type="text"
            value={tempOutgoingOrderTab.power_divert_queue}
            onChange={(e) => handleNumericInput(e, setIvrNo,'setIvrNo')}
          />
        </div>
        <div className="flex items-center gap-2 justify-between">
          <Label className="w-[8.3rem] min-w-[8.3rem]">다이얼 모드 옵션</Label>
          <Select value={dialModeOption} disabled>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={dialModeOption} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">default</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2 justify-between">
        <CustomCheckbox
            id="limit-rate"
            checked={limitRateEnabled} // 상태를 기반으로 체크 여부 결정
            onCheckedChange={(checked) => {
              setLimitRateEnabled(checked as boolean);
              if (!checked) {
                setLimitRate(""); // 비활성화 시 입력 값 초기화
              }
            }}
          />
          <Label htmlFor="limit-rate" className="w-[8.3rem] min-w-[8.3rem]">
            제한 호수 비율
          </Label>
          <CustomInput
            type="text"
            value={limitRate}
            onChange={(e) => handleNumericInput(e, setLimitRate,'setLimitRate')}
            disabled={!limitRateEnabled} // 체크박스 상태에 따라 활성화/비활성화
          />
          %
       </div>
      </div>

      <div className="flex justify-end gap-2 mt-5">
        <CommonButton variant="secondary">확인</CommonButton>
        <CommonButton variant="secondary">취소</CommonButton>
      </div>
    </div>
  );
};

export default OutgoingMethodTab;