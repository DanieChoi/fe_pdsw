"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export interface BlackListCountPopupProps {
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}

const BlackListCountPopup = ({
    isOpen = true,
    onOpenChange
}: BlackListCountPopupProps) => {
    const [open, setOpen] = useState(isOpen);

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
        onOpenChange?.(newOpen);
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>블랙리스트 건수 조회</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="flex items-center gap-2 justify-between">
                        <Label className="w-48 text-right">캠페인 ID</Label>
                        <span className="flex-1">CAMPAIGN_001</span>
                    </div>
                    <div className="flex items-center gap-2 justify-between">
                        <Label className="w-48 text-right">블랙리스트 등록건수</Label>
                        <span className="flex-1">500,000</span>
                    </div>
                    <div className="flex items-center gap-2 justify-between">
                        <Label className="w-48 text-right">블랙리스트 MAX 등록 건수</Label>
                        <span className="flex-1">1,000,000</span>
                    </div>
                    <div className="flex items-center gap-2 justify-between">
                        <Label className="w-48 text-right">공통 적용된 블랙리스트 등록 건수</Label>
                        <span className="flex-1">100,000</span>
                    </div>
                </div>
                <DialogFooter>
                    <Button 
                        variant="outline" 
                        onClick={() => handleOpenChange(false)}
                    >
                        닫기
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default BlackListCountPopup;