import React, { useEffect, useState } from 'react';
import TitleWrap from "@/components/shared/TitleWrap";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import DataGrid, { CellClickArgs } from 'react-data-grid';
import { useMainStore } from '@/store';
import { ChannelListDataResponse, DialingDeviceListDataResponse } from '@/features/systemPreferences/types/SystemPreferences';
import { useApiForDialingDevice } from '@/features/systemPreferences/hooks/useApiForDialingDevice';
import { useApiForChannelList } from '@/features/systemPreferences/hooks/useApiForChannelList';
import { useApiForChannelEdit } from '@/features/systemPreferences/hooks/useApiForChannelEdit';

interface EquipmentRow {
    device_id: string;
    channel_count: number;
    device_name: string;
    usage: string;
}

interface ChannelRow {
    channelNumber: number;
    channelName: string;
    mode: string;
    assignValue: number;
}

const SystemPreferences = () => {
    const [refreshCycle, setRefreshCycle] = useState("5");
    const [monitoringType, setMonitoringType] = useState("periodic");
    const [equipmentNumber, setEquipmentNumber] = useState("");
    const [equipmentName, setEquipmentName] = useState("");
    const [allocationMode, setAllocationMode] = useState("");
    const [allocationOutboundMode, setAllocationOutboundMode] = useState("");
    
    const [selectedDevice, setSelectedDevice] = useState<EquipmentRow | null>(null);
    const [selectedChannel, setSelectedChannel] = useState<ChannelRow | null>(null);
    const [filteredChannels, setFilteredChannels] = useState<ChannelRow[]>([]);

    const { tenants, campaigns } = useMainStore();
    const [dialingDeviceList, setDialingDeviceList] = useState<DialingDeviceListDataResponse[]>([]);
    const [channelList, setChannelList] = useState<ChannelListDataResponse[]>([]);

    // 장비 목록 조회
    const { mutate: fetchDialingDeviceList } = useApiForDialingDevice({
        onSuccess: (data) => {
            setDialingDeviceList(data.result_data);
        }
    });

    // 채널 목록 조회
    const { mutate: fetchChannelList } = useApiForChannelList({
        onSuccess: (data) => {
            setChannelList(data.result_data);
        }
    });

    // 채널 정보 수정 api 호출
    const { mutate: fetchChannelEdit } = useApiForChannelEdit({
        onSuccess: (data) => {
            fetchChannelList();
            alert('채널 정보가 성공적으로 수정되었습니다.');
        },
        onError: (error) => {
            // 에러 메시지 표시
            alert('채널 정보 수정 중 오류가 발생했습니다: ' + error.message);
        }
    });

    useEffect(() => {
        const _tenantId = tenants.map((tenant) => tenant.tenant_id);
        fetchDialingDeviceList({
            tenant_id_array: _tenantId
        });
        fetchChannelList();
    }, []);

    // 장비 선택 시 장비 상세내역 업데이트
    useEffect(() => {
        if (selectedDevice) {
            setEquipmentNumber(selectedDevice.device_id);
            setEquipmentName(selectedDevice.device_name);
            setRefreshCycle(selectedDevice.channel_count.toString());
            setMonitoringType(selectedDevice.usage === "사용" ? "oneTime" : "periodic");
            
            const selectedDeviceChannels = channelList.find(
                channel => channel.device_id.toString() === selectedDevice.device_id
            );

            if (selectedDeviceChannels) {
                const channels: ChannelRow[] = selectedDeviceChannels.channel_assign
                    .map((assignValue, index) => ({
                        channelNumber: index,
                        channelName: `Channel No ${index}`,
                        mode: getChannelMode(assignValue),
                        assignValue: assignValue
                    }));

                setFilteredChannels(channels);
                
                // 첫 번째 채널 자동 선택
                if (channels.length > 0) {
                    setSelectedChannel(channels[0]);
                    // 첫 번째 채널의 할당 모드 설정
                    setAllocationMode(selectedDeviceChannels.assign_kind.toString());
                    setAllocationOutboundMode(channels[0].assignValue.toString());
                } else {
                    setSelectedChannel(null);
                    setAllocationMode("");
                    setAllocationOutboundMode("");
                }
            } else {
                setFilteredChannels([]);
                setSelectedChannel(null);
            }
        }
    }, [selectedDevice, channelList]);

    // 채널 선택 시 상세 정보 업데이트
    useEffect(() => {
        if (selectedChannel) {
            // 할당발신모드 설정
            setAllocationOutboundMode(selectedChannel.assignValue.toString());
        }
    }, [selectedChannel]);

    const getChannelMode = (assignValue: number): string => {
        switch(assignValue) {
            case 2147483647:
                return "모든 캠페인사용";
            case 0:
                return "회선사용안함";
            default: {
                const campaign = campaigns.find(camp => camp.campaign_id === assignValue);
                if (campaign) {
                    return `ID[${campaign.campaign_id}] : ${campaign.campaign_name}`;
                }
                return "미할당";
            }
        }
    };

    const equipmentColumns = [
        { key: "device_id", name: "장비번호" },
        { key: "channel_count", name: "채널수" },
        { key: "device_name", name: "장비이름" },
        { key: "usage", name: "사용여부" }
    ];
    
    const equipmentRows = dialingDeviceList.map(device => ({
        device_id: device.device_id.toString(),
        channel_count: device.channel_count,
        device_name: device.device_name,
        usage: "사용" 
    }));

    const channelColumns = [
        { key: "channelNumber", name: "채널번호" },
        { key: "channelName", name: "채널이름" },
        { key: "mode", name: "할당 발신모드" },
    ];

    const handleEquipmentCellClick = ({ row }: CellClickArgs<EquipmentRow>) => {
        setSelectedDevice(row);
        // setSelectedChannel(null); // 장비 선택 시 채널 선택 초기화
    };

    const handleChannelCellClick = ({ row }: CellClickArgs<ChannelRow>) => {
        setSelectedChannel(row);
    };

    const handleChannelEdit = () => {
        if (!selectedDevice || !selectedChannel) return;

        // 확인 알럿 표시
        if (window.confirm('채널 정보를 수정하시겠습니까?')) {
            // 현재 선택된 장비의 채널 할당 정보 찾기
            const deviceChannels = channelList.find(
                channel => channel.device_id.toString() === selectedDevice.device_id
            );

            if (!deviceChannels) return;

            // 채널 할당 배열 업데이트
            const updatedChannelAssign = [...deviceChannels.channel_assign];
            updatedChannelAssign[selectedChannel.channelNumber] = parseInt(allocationOutboundMode);

            const channelEditRequest = {
                device_id: parseInt(selectedDevice.device_id),
                assign_kind: parseInt(allocationMode),
                channel_count: selectedDevice.channel_count,
                channel_assign: updatedChannelAssign
            };

            fetchChannelEdit(channelEditRequest);
        }
    };

    const getAllocationOutboundModeOptions = () => {
        const defaultOptions = [
            { value: "2147483647", label: "모든 캠페인사용" },
            { value: "0", label: "회선사용안함" },
            // { value: "-1", label: "미할당" }
        ];
        
        // 캠페인 옵션 추가
        const campaignOptions = campaigns.map(campaign => ({
            value: campaign.campaign_id.toString(),
            label: `ID[${campaign.campaign_id}] : ${campaign.campaign_name}`
        }));

        return [...defaultOptions, ...campaignOptions];
    };

    return (
        <div className="space-y-5">
            <div className="flex gap-5">
                <div className="w-1/2 flex-1 flex flex-col gap-5">
                    {/* 장비 목록 섹션 */}
                    <div className="flex flex-col gap-2">
                        <TitleWrap title="장비 목록" totalCount={dialingDeviceList.length} />
                        <div className="grid-custom-wrap h-[300px]">
                            <DataGrid<EquipmentRow>
                                columns={equipmentColumns}
                                rows={equipmentRows}
                                className="grid-custom cursor-pointer"
                                rowKeyGetter={(row) => row.device_id}
                                onCellClick={handleEquipmentCellClick}
                                selectedRows={selectedDevice ? new Set([selectedDevice.device_id]) : new Set()}
                            />
                        </div>
                    </div>
                    
                    {/* 장비 상세내역 섹션 */}
                    <div className="flex flex-col gap-2">
                        <TitleWrap
                            title="장비 상세내역"
                            buttons={[
                                { 
                                    label: "신규", 
                                    onClick: () => {
                                        setSelectedDevice(null);
                                        setSelectedChannel(null);
                                        setEquipmentNumber("");
                                        setEquipmentName("");
                                        setRefreshCycle("5");
                                        setMonitoringType("periodic");
                                        setFilteredChannels([]);
                                    }
                                },
                                { label: "저장", onClick: () => console.log("저장 클릭") },
                            ]}
                        />
                        <div className="flex flex-col gap-2 p-4 border rounded-lg bg-white">
                            <div className="flex items-center">
                                <Label className="w-20 min-w-20">장비번호</Label>
                                <Select value={equipmentNumber} onValueChange={setEquipmentNumber}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="장비번호" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {dialingDeviceList.map(device => (
                                            <SelectItem key={device.device_id} value={device.device_id.toString()}>
                                                {device.device_id}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center">
                                <Label className="w-20 min-w-20">장비이름</Label>
                                <Select value={equipmentName} onValueChange={setEquipmentName}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="장비이름" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {dialingDeviceList.map(device => (
                                            <SelectItem key={device.device_id} value={device.device_name}>
                                                {device.device_name}
                                            </SelectItem>
                                        ))}
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
                        </div>
                    </div>
                </div>
                
                <div className="w-1/2 flex-1 flex flex-col gap-5">
                    {/* 채널목록 섹션 */}
                    <div className="flex flex-col gap-2">
                        <TitleWrap title="채널목록" totalCount={filteredChannels.length} />
                        <div className="grid-custom-wrap h-[300px]">
                            <DataGrid<ChannelRow>
                                columns={channelColumns}
                                rows={filteredChannels}
                                className="grid-custom cursor-pointer"
                                onCellClick={handleChannelCellClick}
                                selectedRows={selectedChannel ? new Set([selectedChannel.channelNumber.toString()]) : new Set()}
                                rowKeyGetter={(row) => row.channelNumber.toString()}
                            />
                        </div>
                    </div>
                    
                    {/* 채널 상세내역 섹션 */}
                    <div className="flex flex-col gap-2">
                        <TitleWrap
                            title="채널 상세내역"
                            buttons={[
                                { 
                                    label: "적용", 
                                    onClick: handleChannelEdit,
                                    disabled: !selectedDevice || !selectedChannel 
                                },
                            ]}
                        />
                        <div className="flex flex-col gap-2 p-4 border rounded-lg bg-white">
                            <div className="flex items-center">
                                <Label className="w-20 min-w-20">할당모드</Label>
                                <Select 
                                    value={allocationMode} 
                                    onValueChange={setAllocationMode}
                                    disabled={!selectedDevice}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="할당모드 선택" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">1.캠페인으로할당</SelectItem>
                                        <SelectItem value="2">2.발신모드로할당</SelectItem>
                                        <SelectItem value="3">3.채널그룹으로할당</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center">
                                <Label className="w-20 min-w-20">할당발신모드</Label>
                                <Select 
                                    value={allocationOutboundMode} 
                                    onValueChange={setAllocationOutboundMode}
                                    disabled={!selectedChannel}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="할당발신모드 선택" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {getAllocationOutboundModeOptions().map(option => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SystemPreferences;