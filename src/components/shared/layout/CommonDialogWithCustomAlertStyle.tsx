// CommonDialogWithCustomAlertStyle.tsx
import React from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { CommonButton } from "@/components/shared/CommonButton";

// props 타입을 같은 파일 내에 정의합니다.
interface ICommonDialogWithCustomAlertStyleProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onCancel?: () => void;
  width?: string;
  showButtons?: boolean;
  confirmDisabled?: boolean;
  children: React.ReactNode;
}

const CommonDialogWithCustomAlertStyle: React.FC<ICommonDialogWithCustomAlertStyleProps> = ({
  title,
  isOpen,
  onClose,
  onCancel,
  width = 'max-w-sm',
  showButtons = true,
  confirmDisabled = false,
  children,
}) => {
  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={(open) => {
        // 다이얼로그가 닫힐 때(ESC키, 오버레이 클릭 등) 취소 동작 호출
        if (!open) {
          if (onCancel) {
            onCancel();
          } else {
            onClose();
          }
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
            {children}
          </div>
          {showButtons && (
            <div className="flex justify-end gap-1.5">
              <CommonButton 
                onClick={onClose} 
                disabled={confirmDisabled}
                className={confirmDisabled ? 'opacity-50 cursor-not-allowed' : ''}
              >
                확인
              </CommonButton>
              {onCancel && (
                <CommonButton variant="outline" onClick={onCancel}>
                  닫기
                </CommonButton>
              )}
            </div>
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CommonDialogWithCustomAlertStyle;
