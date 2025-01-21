import React, { useEffect, useState } from 'react';

import TitleWrap from "@/components/shared/TitleWrap";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { CommonRadio, CommonRadioItem } from "@/components/shared/CommonRadio";
import DataGrid from 'react-data-grid';
import { useApiForDialingDevice } from '@/features/auth/hooks/useApiForDialingDevice';
import { DialingDeviceListDataResponse } from '@/features/auth/types/mainIndex';
import { useMainStore } from '@/store';


const SystemPreferences = () => {
    const [refreshCycle, setRefreshCycle] = useState("5"); // 채널 수 갱신 주기
    const [monitoringType, setMonitoringType] = useState("periodic"); // 사용 여부 (주기적 사용 여부)
    const [equipmentNumber, setEquipmentNumber] = useState(""); // 장비번호
    const [equipmentName, setEquipmentName] = useState(""); // 장비 이름
    const [allocationMode, setAllocationMode] = useState(""); // 할당 모드
    const [allocationOutboundMode, setAllocationOutboundMode] = useState(""); // 할당 발신 모드

    const { tenants } = useMainStore();
    const [dialingDeviceList, setDialingDeviceList] = useState<DialingDeviceListDataResponse[]>([]);

    const { mutate: fetchDialingDeviceList } = useApiForDialingDevice({
        onSuccess: (data) => {
            console.log("시스템 설정 api 요청 확인 : ", data);
            setDialingDeviceList(data.result_data);
        }
    });

    useEffect(() => {
        const _tenantId = tenants.map((tenant) => tenant.tenant_id);
        fetchDialingDeviceList({
            tenant_id_array: _tenantId
        });
    }, []);

    const equipmentColumns = [
        { key: "id", name: "장비번호" },
        { key: "channels", name: "채널수" },
        { key: "name", name: "장비이름" },
        { key: "usage", name: "사용여부" },
      ];
    
      const equipmentRows = [
        { id: 1, channels: 30, name: "IPPDS1", usage: "사용" },
        { id: 3, channels: 60, name: "IPPDS3", usage: "미사용" },
      ];
    
      const channelColumns = [
        { key: "channelNumber", name: "채널번호" },
        { key: "channelName", name: "채널이름" },
        { key: "mode", name: "할당 발신모드" },
      ];
    
      const channelRows = Array.from({ length: 20 }, (_, index) => ({
        channelNumber: index + 1,
        channelName: `Channel No ${index + 1}`,
        mode: "발신방법 모두 사용",
      }));

    return (
        <div className=''>
            <div className="flex gap-5">
                <div className="w-1/2 flex-1 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <TitleWrap title="장비 목록" totalCount={2} />
                        <div className="grid-custom-wrap h-[300px]">
                            <DataGrid
                            columns={equipmentColumns}
                            rows={equipmentRows}
                            className="grid-custom"
                            />
                        </div>
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
                                   <CustomInput 
                                    type="number" 
                                    value={refreshCycle}
                                    onChange={(e) => setRefreshCycle(e.target.value)}
                                    className="w-full"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <Label className="w-20 min-w-20">사용여부</Label>
                                     <CommonRadio defaultValue={monitoringType} onValueChange={setMonitoringType} className="flex gap-8">
                                        <div className="flex items-center space-x-2">
                                        <CommonRadioItem value="oneTime" id="oneTime" />
                                        <Label htmlFor="oneTime">사용</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                        <CommonRadioItem value="periodic" id="periodic" />
                                        <Label htmlFor="periodic">미사용</Label>
                                        </div>
                                    </CommonRadio>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="w-1/2 flex-1 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <TitleWrap title="채널목록" totalCount={30} />
                        <div className="grid-custom-wrap h-[300px]">
                            <DataGrid
                            columns={channelColumns}
                            rows={channelRows}
                            className="grid-custom"
                            />
                        </div>
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
