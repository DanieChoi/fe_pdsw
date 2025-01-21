import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { CommonButton } from "@/components/shared/CommonButton";
import { CustomInput } from "@/components/shared/CustomInput";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";

// 숫자 입력만 허용하는 핸들러
const handleNumericInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: React.Dispatch<React.SetStateAction<string>>
) => {
  const value = e.target.value;
  if (/^\d*$/.test(value)) {
    setValue(value); // 숫자인 경우만 상태 업데이트
  }
};

const NotificationTab: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false); // 잔량 부족 알림 사용 상태
  const [notificationCount, setNotificationCount] = useState(""); // 잔량 부족 알림 개수
  const [adminPhone, setAdminPhone] = useState(""); // 관리자 전화번호

  return (
    <div className="pt-[50px]">
      <div className="flex flex-col gap-[12px] w-[460px] m-auto">
        {/* 잔량 부족 알림 체크박스 */}
        <div className="flex gap-1 items-center">
          <CustomCheckbox
            id="lowStockAlert"
            checked={isChecked}
            onCheckedChange={(checked) => setIsChecked(checked === true)} // 체크박스 상태 업데이트
          />
          <Label htmlFor="lowStockAlert">잔량 부족 알림 사용</Label>
        </div>

        {/* 알림 세부 설정 */}
        <div className="p-[30px] flex flex-col gap-[12px] border-[#ebebeb] border">
          <div className="flex items-center gap-2">
            <CustomInput
              type="text"
              value={notificationCount}
              onChange={(e) => handleNumericInput(e, setNotificationCount)}
              disabled={!isChecked} // 체크박스 상태에 따라 비활성화
            />
            <Label className="w-[8.3rem] min-w-[8.3rem]">잔량 부족 알림 개수</Label>
          </div>
          <div className="flex gap-1 items-center">
            <CustomCheckbox id="alertMessage" disabled={!isChecked} />
            <Label htmlFor="alertMessage">메시지로 알림</Label>
          </div>
          <div className="flex gap-1 items-center">
            <CustomCheckbox id="alertSound" disabled={!isChecked} />
            <Label htmlFor="alertSound">소리로 알림</Label>
          </div>
          <div className="flex gap-1 items-center">
            <CustomCheckbox id="alertCall" disabled={!isChecked} />
            <Label htmlFor="alertCall">관리자에게 전화로 알림</Label>
          </div>
          <div className="flex gap-1 items-center">
            <Label className="w-[6rem] min-w-[6rem]">관리자 전화번호</Label>
            <CustomInput
              type="text"
              value={adminPhone}
              onChange={(e) => handleNumericInput(e, setAdminPhone)}
              disabled={!isChecked} // 체크박스 상태에 따라 비활성화
            />
          </div>
          <div className="flex justify-end text-sm text-gray-500">
            (외부 회선을 사용할 경우 국선 번호를 포함하여 주십시요.)
          </div>
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

export default NotificationTab;