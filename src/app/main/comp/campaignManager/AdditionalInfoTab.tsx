import React, { useState } from "react";
import TitleWrap from "@/components/shared/TitleWrap";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { CommonButton } from "@/components/shared/CommonButton";

const AdditionalInfoTab: React.FC = () => {
  // 캠페인 생성 정보 상태
  const [creator, setCreator] = useState(""); // 생성 인
  const [creationDate, setCreationDate] = useState(""); // 생성 날짜
  const [creationPlace, setCreationPlace] = useState(""); // 생성 장소

  // 캠페인 수정 정보 상태
  const [editor, setEditor] = useState(""); // 수정 인
  const [editDate, setEditDate] = useState(""); // 수정 날짜
  const [editPlace, setEditPlace] = useState(""); // 수정 장소

  return (
    <div className="py-5">
      <div className="flex gap-5">
        {/* 캠페인 생성 정보 */}
        <div className="flex-1">
          <TitleWrap
            className="border-b border-gray-300 pb-1"
            title="캠페인 생성 정보"
          />
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-2">
              <Label className="w-[5rem] min-w-[5rem]">생성 인</Label>
              <CustomInput
                className="w-[14rem]"
                type="text"
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
                disabled
              />
            </div>
            <div className="flex items-center gap-2">
              <Label className="w-[5rem] min-w-[5rem]">생성 날짜</Label>
              <CustomInput
                className="w-[14rem]"
                type="text"
                value={creationDate}
                onChange={(e) => setCreationDate(e.target.value)}
                disabled
              />
            </div>
            <div className="flex items-center gap-2">
              <Label className="w-[5rem] min-w-[5rem]">생성 장소</Label>
              <CustomInput
                className="w-[14rem]"
                type="text"
                value={creationPlace}
                onChange={(e) => setCreationPlace(e.target.value)}
                disabled
              />
            </div>
          </div>
        </div>

        {/* 캠페인 수정 정보 */}
        <div className="flex-1">
          <TitleWrap
            className="border-b border-gray-300 pb-1"
            title="캠페인 수정 정보"
          />
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-2">
              <Label className="w-[5rem] min-w-[5rem]">수정 인</Label>
              <CustomInput
                className="w-[14rem]"
                type="text"
                value={editor}
                onChange={(e) => setEditor(e.target.value)}
                disabled
              />
            </div>
            <div className="flex items-center gap-2">
              <Label className="w-[5rem] min-w-[5rem]">수정 날짜</Label>
              <CustomInput
                className="w-[14rem]"
                type="text"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
                disabled
              />
            </div>
            <div className="flex items-center gap-2">
              <Label className="w-[5rem] min-w-[5rem]">수정 장소</Label>
              <CustomInput
                className="w-[14rem]"
                type="text"
                value={editPlace}
                onChange={(e) => setEditPlace(e.target.value)}
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      {/* 확인/취소 버튼 */}
      <div className="flex justify-end gap-2 mt-5">
        <CommonButton variant="secondary">확인</CommonButton>
        <CommonButton variant="secondary">취소</CommonButton>
      </div>
    </div>
  );
};

export default AdditionalInfoTab;