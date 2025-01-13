import React from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export interface CustomAlertRequest {
    message: string;
    onClose: () => void;
    isOpen?: boolean;
}

const CustomAlert = ({ 
    message, 
    onClose,
    isOpen = true 
}: CustomAlertRequest) => {
    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent className="p-0 max-w-sm rounded-none border shadow-sm">
                <AlertDialogHeader className="bg-gray-100 px-4 py-2 border-b">
                    <AlertDialogTitle className="text-sm text-gray-700 font-normal">
                        리스트 건수 확인
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <div className="p-4 bg-white">
                    <div className="text-sm text-gray-700 mb-4">
                        {message}
                    </div>
                    <div className="flex justify-end gap-1.5">
                        <Button
                            onClick={onClose}
                            className="h-7 px-3 py-0 text-xs bg-teal-400 hover:bg-teal-500 text-white rounded"
                        >
                            확인
                        </Button>
                        <Button
                            variant="outline"
                            onClick={onClose}
                            className="h-7 px-3 py-0 text-xs bg-white hover:bg-gray-50 text-gray-700 border-gray-200 rounded"
                        >
                            닫기
                        </Button>
                    </div>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default CustomAlert;