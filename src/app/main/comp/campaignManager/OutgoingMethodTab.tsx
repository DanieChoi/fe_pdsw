import React, { useState } from "react";
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

// 숫자만 입력되도록 제어하는 함수
const handleNumericInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: React.Dispatch<React.SetStateAction<string>>
) => {
  const value = e.target.value;
  if (/^\d*$/.test(value)) {
    setValue(value); // 숫자인 경우만 상태 업데이트
  }
};

const OutgoingMethodTab: React.FC = () => {
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
              value={trunkAccessCode}
              onChange={(e) => handleNumericInput(e, setTrunkAccessCode)}
            />
          </div>

          {/* 재시도 간격(초) */}
          <div className="flex items-center gap-2 justify-between">
            <Label className="w-[8.3rem] min-w-[8.3rem]">재시도 간격(초)</Label>
            <Select value={retryInterval} disabled>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={retryInterval} />
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
              value={callGoal}
              onChange={(e) => handleNumericInput(e, setCallGoal)}
            />
          </div>

          {/* 포기호 처리시간 */}
          <div className="flex items-center gap-2 justify-between">
            <Label className="w-[8.3rem] min-w-[8.3rem]">
              포기호 처리시간(초)
            </Label>
            <Select value={abandonmentTime} onValueChange={setAbandonmentTime}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={abandonmentTime} />
              </SelectTrigger>
              <SelectContent>
                {["2", "3", "4", "5", "6", "7", "10", "15", "20", "30", "60"].map(
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
              value={autoDial}
              onChange={(e) => handleNumericInput(e, setAutoDial)}
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
              value={dddNumber}
              onChange={(e) => handleNumericInput(e, setDddNumber)}
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
              value={tokenId}
              onChange={(e) => handleNumericInput(e, setTokenId)}
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
            value={ivrNo}
            onChange={(e) => handleNumericInput(e, setIvrNo)}
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
            onChange={(e) => handleNumericInput(e, setLimitRate)}
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