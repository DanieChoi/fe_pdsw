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
    width?: string;
    showButtons?: boolean;
    confirmDisabled?: boolean;
}

const CustomAlert = ({
    message,
    title,
    type,
    isOpen = true,
    onClose,
    onCancle,
    width = 'max-w-sm',
    showButtons = true,
    confirmDisabled = false
}: CustomAlertRequest) => {
    return (
        <AlertDialog
            open={isOpen}
            onOpenChange={(open) => {
                // 다이얼로그가 닫힐 때(ESC키, 오버레이 클릭 등)는 취소 동작 호출
                if (!open) {
                    if (onCancle) {
                        onCancle();
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
                    <div className="text-sm text-[#333]">
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
                        <div className="flex justify-end gap-1.5 mt-[20px]">
                            {type === '1' ? (
                                <>
                                    <CommonButton 
                                        onClick={onClose} 
                                        disabled={confirmDisabled}
                                        className={confirmDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                                    >
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
                                    <CommonButton 
                                        onClick={onClose} 
                                        disabled={confirmDisabled}
                                        className={confirmDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                                    >
                                        확인
                                    </CommonButton>
                                    <CommonButton variant="outline" onClick={onClose}>
                                        닫기
                                    </CommonButton>
                                </>
                            ) : type === '3' ? (
                                <>
                                </>
                            ) : (
                                <>
                                    <CommonButton 
                                        onClick={onClose} 
                                        disabled={confirmDisabled}
                                        className={confirmDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                                    >
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

// import React, { ReactNode } from 'react';
// import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogHeader } from "@/components/ui/alert-dialog";
// import { CommonButton } from "@/components/shared/CommonButton";

// export interface CustomAlertRequest {
//     message: ReactNode;
//     title: string;
//     type: string;
//     isOpen?: boolean;
//     onClose: () => void;
//     onCancle?: () => void;
//     width?: number | string;
//     height?: number | string;
//     showButtons?: boolean;
//     confirmDisabled?: boolean;
// }

// const CustomAlert = ({
//     message,
//     title,
//     type,
//     isOpen = true,
//     onClose,
//     onCancle,
//     width = 500,
//     height = 500,
//     showButtons = true,
//     confirmDisabled = false
// }: CustomAlertRequest) => {

//     // 인라인 스타일 객체 생성
//     const contentStyle: React.CSSProperties = {};
//     if (width) {
//         contentStyle.width = typeof width === 'number' ? `${width}px` : width;
//         contentStyle.maxWidth = '90vw';
//     }
//     if (height) {
//         contentStyle.height = typeof height === 'number' ? `${height}px` : height;
//         contentStyle.maxHeight = '90vh';
//     }

//     return (
//         <AlertDialog
//             open={isOpen}
//             onOpenChange={(open) => {
//                 if (!open) {
//                     if (onCancle) {
//                         onCancle();
//                     } else {
//                         onClose();
//                     }
//                 }
//             }}
//         >
//             <AlertDialogContent
//                 className="p-0 rounded-none border shadow-sm flex flex-col"
//                 style={contentStyle}
//             >
//                 {/* 헤더 영역 */}
//                 <AlertDialogHeader className="bg-[#AAA] px-4 py-2 border-b rounded-tl-[.5rem] rounded-tr-[.5rem] flex-shrink-0">
//                     <AlertDialogTitle className="text-sm text-[#fff] font-normal">
//                         {title}
//                     </AlertDialogTitle>
//                 </AlertDialogHeader>

//                 {/* 콘텐츠 영역 - 내용이 넘칠 경우를 대비해 스크롤 가능하도록 설정 */}
//                 <div className="p-4 bg-white flex-grow flex flex-col" style={{ overflow: 'hidden' }}>
//                     {/* 메시지 영역 - 스크롤 가능하도록 설정 */}
//                     <div className="text-sm text-[#333] overflow-auto flex-grow" style={{ minHeight: '100px' }}>
//                         {typeof message === 'string'
//                             ? message.split('\n').map((line, index) => (
//                                 <React.Fragment key={index}>
//                                     {line}
//                                     <br />
//                                 </React.Fragment>
//                             ))
//                             : message}
//                     </div>
                    
//                     {/* 버튼 영역 - 항상 하단에 고정 */}
//                     {showButtons && (
//                         <div className="flex justify-end gap-1.5 mt-4 pt-2 flex-shrink-0 border-t">
//                             {type === '1' ? (
//                                 <>
//                                     <CommonButton
//                                         onClick={onClose}
//                                         disabled={confirmDisabled}
//                                         className={confirmDisabled ? 'opacity-50 cursor-not-allowed' : ''}
//                                     >
//                                         확인
//                                     </CommonButton>
//                                     {onCancle && (
//                                         <CommonButton variant="outline" onClick={onCancle}>
//                                             닫기
//                                         </CommonButton>
//                                     )}
//                                 </>
//                             ) : type === '0' ? (
//                                 <>
//                                     <CommonButton
//                                         onClick={onClose}
//                                         disabled={confirmDisabled}
//                                         className={confirmDisabled ? 'opacity-50 cursor-not-allowed' : ''}
//                                     >
//                                         확인
//                                     </CommonButton>
//                                     <CommonButton variant="outline" onClick={onCancle ? onCancle : onClose}>
//                                         닫기
//                                     </CommonButton>
//                                 </>
//                             ) : type === '3' ? (
//                                 <>
//                                     {/* type 3은 버튼 없음 */}
//                                 </>
//                             ) : (
//                                 <>
//                                     <CommonButton
//                                         onClick={onClose}
//                                         disabled={confirmDisabled}
//                                         className={confirmDisabled ? 'opacity-50 cursor-not-allowed' : ''}
//                                     >
//                                         확인
//                                     </CommonButton>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </AlertDialogContent>
//         </AlertDialog>
//     );
// };

// export default CustomAlert;