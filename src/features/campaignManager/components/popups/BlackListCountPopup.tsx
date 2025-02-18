"use client";

import CommonDialog from "@/components/shared/CommonDialog";
import React from "react";

export interface BlackListCountPopupProps {
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    campaignId?: string;
}

const BlackListCountPopup = ({
    isOpen = true,
    onOpenChange,
    campaignId = "10001"
}: BlackListCountPopupProps) => {
    const content = (
        <div className="space-y-3 text-sm">
            <div>
                <span>캠페인 아이디 : </span>
                <span>{campaignId}</span>
            </div>
            <div>
                <span>블랙리스트 등록 건수 : </span>
                <span>0</span>
            </div>
            <div>
                <span>블랙리스트 MAX 등록 건수 : </span>
                <span>1000000</span>
            </div>
            <div>
                <span>공통 적용된 블랙리스트 건수 : </span>
                <span>0</span>
            </div>
        </div>
    );

    return (
        <CommonDialog
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            title="확인"
        >
            {content}
        </CommonDialog>
    );
};

export default BlackListCountPopup;