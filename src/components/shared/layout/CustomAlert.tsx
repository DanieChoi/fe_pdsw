import React, { ReactNode } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogHeader } from "@/components/ui/alert-dialog";
import { CommonButton } from "@/components/shared/CommonButton";

export interface CustomAlertRequest {
  message: ReactNode;
  title: string;
  type: string;
  isOpen?: boolean;
  onClose: () => void;
  onCancle?: () => void;
  width?: string; // width prop 추가
  showButtons?: boolean;
  confirmDisabled?: boolean; // 확인 버튼 비활성화 여부
}

const CustomAlert = ({
  message,
  title,
  type,
  isOpen = true,
  onClose,
  onCancle,
  width = 'max-w-sm', // 기본값 설정
  showButtons = true,
  confirmDisabled = false
}: CustomAlertRequest) => {
  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={(open) => {
        // 다이얼로그가 닫힐 때(ESC키, 오버레이 클릭 등)는 취소 동작 호출
        if (!open) {
          onCancle ? onCancle() : onClose();
        }
      }}
    >
      <AlertDialogContent className={`p-0 ${width} rounded-none border shadow-sm`}>
        <AlertDialogHeader className="bg-[#AAA] px-4 py-2 border-b rounded-tl-[.5rem] rounded-tr-[.5rem]">
          <AlertDialogTitle className="text-sm text-[#fff] font-normal">
            {title}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="p-4 bg-white rounded-bl-[.5rem] rounded-br-[.5rem]">
          <div className="text-sm text-gray-700 mb-4">
            {typeof message === 'string'
              ? message.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))
              : message}
          </div>
          {showButtons && (
            <div className="flex justify-end gap-1.5">
              {type === '1' ? (
                <>
                  <CommonButton onClick={onClose} disabled={confirmDisabled}>
                    확인
                  </CommonButton>
                  {onCancle && (
                    <CommonButton variant="outline" onClick={onCancle}>
                      닫기
                    </CommonButton>
                  )}
                </>
              ) : type === '0' ? (
                <>
                  <CommonButton onClick={onClose} disabled={confirmDisabled}>
                    확인
                  </CommonButton>
                  <CommonButton variant="outline" onClick={onClose}>
                    닫기
                  </CommonButton>
                </>
              ) : (
                <>
                  <CommonButton onClick={onClose} disabled={confirmDisabled}>
                    확인
                  </CommonButton>
                </>
              )}
            </div>
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomAlert;
