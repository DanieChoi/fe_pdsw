import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { CommonButton } from "@/components/shared/CommonButton";
import { CustomInput } from "@/components/shared/CustomInput";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";

const CallbackTab: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false); // 체크박스 상태 관리
  const [serviceCode, setServiceCode] = useState(""); // Service Code 값 관리

  // 숫자 입력만 허용하는 핸들러
  const handleServiceCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setServiceCode(value); // 숫자인 경우만 상태 업데이트
    }
  };

  return (
    <div className="pt-[50px]">
      <div className="flex flex-col gap-[12px] w-[400px] m-auto">
        {/* Call back Campaign 체크박스 */}
        <div className="flex gap-1 items-center">
          <CustomCheckbox
            id="callbackCampaign"
            checked={isChecked}
            onCheckedChange={(checked) => setIsChecked(checked === true)}
          />
          <Label htmlFor="callbackCampaign">Call back Campaign</Label>
        </div>

        {/* Call back 구분 */}
        <div className="flex items-center gap-2">
          <Label className="w-[8.3rem] min-w-[8.3rem]">Call back 구분</Label>
          <Select disabled={!isChecked}> {/* 체크 여부로 활성화/비활성화 */}
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal">일반 callback</SelectItem>
              <SelectItem value="infinite">무한 callback</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Service Code */}
        <div className="flex items-center gap-2">
          <Label className="w-[8.3rem] min-w-[8.3rem]">Service Code</Label>
          <CustomInput
            type="text"
            value={serviceCode}
            onChange={handleServiceCodeChange}
            disabled={!isChecked} // 체크 여부에 따라 활성화/비활성화
          />
        </div>
        {/* 확인 / 취소 버튼 */}
        <div className="flex justify-end gap-2 mt-5">
          <CommonButton variant="secondary">확인</CommonButton>
          <CommonButton variant="secondary">취소</CommonButton>
        </div>
      </div>

    </div>
  );
};

export default CallbackTab;