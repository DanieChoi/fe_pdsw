import React, { useState } from 'react';

import TitleWrap from "@/components/shared/TitleWrap";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const SystemPreferences = (props: Props) => {
    const [refreshCycle, setRefreshCycle] = useState("5"); // 채널 수 갱신 주기
    const [monitoringType, setMonitoringType] = useState("periodic"); // 사용 여부 (주기적 사용 여부)
    const [equipmentNumber, setEquipmentNumber] = useState(""); // 장비번호
    const [equipmentName, setEquipmentName] = useState(""); // 장비 이름
    const [allocationMode, setAllocationMode] = useState(""); // 할당 모드
    const [allocationOutboundMode, setAllocationOutboundMode] = useState(""); // 할당 발신 모드

    return (
        <div className=''>
            <div className="flex gap-5">
                <div className="w-1/2 flex-1 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <TitleWrap title="장비 목록" totalCount={2} />
                        <div className="min-h-[400px] bg-[#777]">테이블</div>
                    </div>
                    <div className="flex flex-col gap-2">
                         <TitleWrap
                            title="장비 상세내역"
                            buttons={[
                                { label: "신규", onClick: () => console.log("신규 클릭") },
                                { label: "저장", onClick: () => console.log("저장 클릭") },
                            ]}
                            />
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center">
                                    <Label className="w-20 min-w-20">장비번호</Label>
                                    <Select value={equipmentNumber} onValueChange={setEquipmentNumber}>
                                        <SelectTrigger className="w-full">
                                        <SelectValue placeholder="장비번호" />
                                        </SelectTrigger>
                                        <SelectContent>
                                        <SelectItem value="1">1</SelectItem>
                                        <SelectItem value="1">2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center">
                                    <Label className="w-20 min-w-20">장비이름</Label>
                                    <Select value={equipmentName} onValueChange={setEquipmentName}>
                                        <SelectTrigger className="w-full">
                                        <SelectValue placeholder="IPPDS1" />
                                        </SelectTrigger>
                                        <SelectContent>
                                        <SelectItem value="1">1</SelectItem>
                                        <SelectItem value="1">2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center">
                                  <Label className="w-20 min-w-20">채널수</Label>
                                   <Input 
                                    type="number" 
                                    value={refreshCycle}
                                    onChange={(e) => setRefreshCycle(e.target.value)}
                                    className="w-full"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <Label className="w-20 min-w-20">사용여부</Label>
                                     <RadioGroup defaultValue={monitoringType} onValueChange={setMonitoringType} className="flex gap-8">
                                        <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="oneTime" id="oneTime" />
                                        <Label htmlFor="oneTime">사용</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="periodic" id="periodic" />
                                        <Label htmlFor="periodic">미사용</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="w-1/2 flex-1 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <TitleWrap title="채널목록" totalCount={30} />
                        <div className="min-h-[400px] bg-[#777]">테이블</div>
                    </div>
                    <div className="flex flex-col gap-2">
                         <TitleWrap
                            title="채널 상세내역"
                            buttons={[
                                { label: "적용", onClick: () => console.log("적용 클릭") },
                            ]}
                            />
                           <div className="flex flex-col gap-2">
                                <div className="flex items-center">
                                    <Label className="w-20 min-w-20">할당모드</Label>
                                    <Select value={allocationMode} onValueChange={setAllocationMode}>
                                        <SelectTrigger className="w-full">
                                        <SelectValue placeholder="1. 캠페인으로 할당" />
                                        </SelectTrigger>
                                        <SelectContent>
                                        <SelectItem value="1">1.캠페인으로할당</SelectItem>
                                        <SelectItem value="1">2.</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center">
                                    <Label className="w-20 min-w-20">할당발신모드</Label>
                                    <Select value={allocationOutboundMode} onValueChange={setAllocationOutboundMode}>
                                        <SelectTrigger className="w-full">
                                        <SelectValue placeholder="회선사용안함" />
                                        </SelectTrigger>
                                        <SelectContent>
                                        <SelectItem value="1">회선사용</SelectItem>
                                        <SelectItem value="1">회선사용안함</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default SystemPreferences
