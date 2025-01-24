import React, { useEffect, useMemo, useState } from 'react';
import TitleWrap from "@/components/shared/TitleWrap";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import DataGrid, { CellClickArgs } from 'react-data-grid';
import { useMainStore } from '@/store';
import { ChannelListDataResponse, DialingDeviceListDataResponse } from '@/features/systemPreferences/types/SystemPreferences';
import { useApiForChannelList } from '@/features/systemPreferences/hooks/useApiForChannelList';
import { useApiForChannelEdit } from '@/features/systemPreferences/hooks/useApiForChannelEdit';
import { useApiForDialingDevice, useApiForDialingDeviceCreate, useApiForDialingDeviceUpdate } from '@/features/systemPreferences/hooks/useApiForDialingDevice';
import CustomAlert from '@/components/shared/layout/CustomAlert';

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

    const [alertState, setAlertState] = useState({
        isOpen: false,
        message: '',
        title: '알림',
        type: '1',
        onConfirm: () => {},
        onCancel: () => {}
    });

    const showAlert = (message: string) => {
        setAlertState({
            isOpen: true,
            message,
            title: '알림',
            type: '1',
            onConfirm: closeAlert,
            onCancel: () => {}
        });
    };

    const showConfirm = (message: string, onConfirm: () => void) => {
        setAlertState({
            isOpen: true,
            message,
            title: '확인',
            type: '2',
            onConfirm: () => {
                onConfirm();
                closeAlert();
            },
            onCancel: closeAlert
        });
    };

    const closeAlert = () => {
        setAlertState(prev => ({ ...prev, isOpen: false }));
    };

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
            // 채널 목록 새로고침
            fetchChannelList();
            // 장비 목록도 함께 새로고침
            fetchDialingDeviceList({
                tenant_id_array: tenants.map(tenant => tenant.tenant_id)
            });
            // showAlert('채널 정보가 성공적으로 수정되었습니다.');
        },
        onError: (error) => {
            showAlert('채널 정보 수정 중 오류가 발생했습니다: ' + error.message);
        }
    });
    
    // 신규 등록 API
    const { mutate: createDevice } = useApiForDialingDeviceCreate({
        onSuccess: (data) => {
            fetchDialingDeviceList({
                tenant_id_array: tenants.map(tenant => tenant.tenant_id)
            });
            // showAlert('새로운 장비가 성공적으로 저장되었습니다.');
        },
        onError: (error) => {
            showAlert('장비 정보 저장 중 오류가 발생했습니다: ' + error.message);
        }
    });

    // 수정 API
    const { mutate: updateDevice } = useApiForDialingDeviceUpdate({
        onSuccess: (data) => {
            fetchDialingDeviceList({
                tenant_id_array: tenants.map(tenant => tenant.tenant_id)
            });
            // showAlert('장비 정보가 성공적으로 수정되었습니다.');
        },
        onError: (error) => {
            showAlert('장비 정보 수정 중 오류가 발생했습니다: ' + error.message);
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

    // 장비의 사용여부를 확인하는 함수
    const getDeviceUsage = (deviceId: number): string => {
        const deviceChannels = channelList.find(
            channel => channel.device_id === deviceId
        );

        if (!deviceChannels) return "사용안함";

        // channel_assign 배열의 모든 값이 0인지 확인
        const isAllZero = deviceChannels.channel_assign.every(value => value === 0);
        return isAllZero ? "사용안함" : "사용";
    };

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

    // 장비 목록 데이터 구성
    const equipmentRows = useMemo(() => {
        return dialingDeviceList.map(device => ({
            device_id: device.device_id.toString(),
            channel_count: device.channel_count,
            device_name: device.device_name,
            usage: getDeviceUsage(device.device_id)
        }));
    }, [dialingDeviceList, channelList]); // channelList 의존성 추가

    const equipmentColumns = [
        { key: "device_id", name: "장비번호" },
        { key: "channel_count", name: "채널수" },
        { key: "device_name", name: "장비이름" },
        { key: "usage", name: "사용여부" }
    ];

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

    // 장비 상세내역의 신규 버튼 클릭 핸들러
    const handleNewEquipment = () => {
        // 마지막 장비번호 찾기
        const lastDeviceId = dialingDeviceList
            .map(device => device.device_id)
            .sort((a, b) => a - b)  // 숫자 오름차순 정렬
            .pop() || 0;  // 비어있을 경우 0
        
        // 새로운 장비번호 설정 (마지막 번호 + 1)
        const newDeviceId = (lastDeviceId + 1).toString();

        // 장비 관련 상태 초기화
        setSelectedDevice(null);
        setEquipmentNumber(newDeviceId);
        setEquipmentName("");
        setRefreshCycle("");
        setMonitoringType("periodic");
        
        // 채널 관련 상태 초기화
        setFilteredChannels([]);
        setSelectedChannel(null);
        setAllocationMode("");
        setAllocationOutboundMode("");
    };

    // 장비 저장 핸들러 (신규/수정 공통 검증)
    const validateEquipmentData = () => {
        if (!equipmentNumber || !equipmentName || !refreshCycle) {
            showAlert('모든 필드를 입력해주세요.');
            return false;
        }

        const channelCount = parseInt(refreshCycle);
        if (isNaN(channelCount) || channelCount <= 0) {
            showAlert('유효한 채널 수를 입력해주세요.');
            return false;
        }

        return true;
    };

    // 장비 저장 핸들러
    const handleSaveEquipment = () => {
        if (!validateEquipmentData()) return;

        const saveRequest = {
            tenant_id: tenants[0].tenant_id,
            device_id: parseInt(equipmentNumber),
            device_name: equipmentName,
            channel_count: parseInt(refreshCycle)
        };

        if (selectedDevice) {
            // 수정
            showConfirm('장비 정보를 수정하시겠습니까?', () => {
                updateDevice(saveRequest);
            });
        } else {
            // 신규 등록
            showConfirm('새로운 장비 정보를 저장하시겠습니까?', () => {
                createDevice(saveRequest);
            });
        }
    };

    const handleChannelEdit = () => {
        if (!selectedDevice || !selectedChannel) return;

        showConfirm('채널 정보를 수정하시겠습니까?', () => {
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
        });
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
                                    onClick: handleNewEquipment
                                },
                                { 
                                    label: "저장", 
                                    onClick: handleSaveEquipment
                                },
                            ]}
                        />
                        <div className="flex flex-col gap-2 p-4 border rounded-lg bg-white">
                            <div className="flex items-center">
                                <Label className="w-20 min-w-20">장비번호</Label>
                                <CustomInput 
                                    type="text"
                                    value={equipmentNumber}
                                    onChange={(e) => setEquipmentNumber(e.target.value)}
                                    // disabled={selectedDevice !== null}
                                    disabled={true}
                                    className="w-full"
                                />
                            </div>
                            <div className="flex items-center">
                                <Label className="w-20 min-w-20">장비이름</Label>
                                <CustomInput 
                                    type="text"
                                    value={equipmentName}
                                    onChange={(e) => setEquipmentName(e.target.value)}
                                    className="w-full"
                                />
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
            <CustomAlert
                isOpen={alertState.isOpen}
                message={alertState.message}
                title={alertState.title}
                type={alertState.type}
                onClose={alertState.onConfirm}
                onCancle={alertState.onCancel}
            />
        </div>
    );
}

export default SystemPreferences;