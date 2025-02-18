"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export interface BlackListCountProps {
    campaignId?: string;
}

const BlackListCount = ({ campaignId = "10001" }: BlackListCountProps) => {
    return (
        <div className="flex items-center justify-start h-full p-4">
            <Card className="w-[400px] shadow-sm">
                <CardHeader className="bg-[#5DC2BD] pb-2">
                    <CardTitle className="text-base font-medium text-white">확인</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
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
                </CardContent>
            </Card>
        </div>
    );
};

export default BlackListCount;