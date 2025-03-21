import React, { useEffect, useMemo, useState } from 'react';
import TitleWrap from "@/components/shared/TitleWrap";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import DataGrid, { CellClickArgs } from 'react-data-grid';
import { useMainStore } from '@/store';
import { ChannelListDataResponse, DialingDeviceListDataResponse } from '@/features/preferences/types/SystemPreferences';
import { useApiForChannelList } from '@/features/preferences/hooks/useApiForChannelList';
import { useApiForChannelEdit } from '@/features/preferences/hooks/useApiForChannelEdit';
import { useApiForDialingDevice, useApiForDialingDeviceCreate, useApiForDialingDeviceUpdate } from '@/features/preferences/hooks/useApiForDialingDevice';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

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

// 디바이스 상태 인터페이스 추가
interface DeviceStatus {
    device_id: string;
    device_status: "run" | "down";
}

const errorMessage = {
    isOpen: false,
    message: '',
    title: '로그인',
    type: '2',
};

const SystemPreferences = () => {
    const [refreshCycle, setRefreshCycle] = useState("");
    const [monitoringType, setMonitoringType] = useState("periodic");
    const [equipmentNumber, setEquipmentNumber] = useState("");
    const [equipmentName, setEquipmentName] = useState("");
    const [allocationMode, setAllocationMode] = useState("");
    const [allocationOutboundMode, setAllocationOutboundMode] = useState("");
    
    const [selectedDevice, setSelectedDevice] = useState<EquipmentRow | null>(null);
    const [selectedChannel, setSelectedChannel] = useState<ChannelRow | null>(null);
    const [filteredChannels, setFilteredChannels] = useState<ChannelRow[]>([]);
    const [isEditable, setIsEditable] = useState(false);

    // 디바이스 상태를 저장할 상태 변수 추가
    const [deviceStatuses, setDeviceStatuses] = useState<Record<string, "run" | "down">>({});

    const { tenants, campaigns } = useMainStore();
    const [dialingDeviceList, setDialingDeviceList] = useState<DialingDeviceListDataResponse[]>([]);
    const [channelList, setChannelList] = useState<ChannelListDataResponse[]>([]);
    const router = useRouter();

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

    // Footer에서 발생하는 이벤트 수신을 위한 이벤트 리스너 추가
    useEffect(() => {
        console.log("Setting up device status change listener");
        
        // 장비 상태 변경 이벤트 수신 함수
        const handleDeviceStatusChange = (event: any) => {
            console.log("Received device status change event:", event.detail);
            
            const { device_id, device_status } = event.detail;
            
            // 디바이스 상태 업데이트
            setDeviceStatuses(prev => ({
                ...prev,
                [device_id]: device_status
            }));
    
            // 선택된 디바이스가 변경된 디바이스와 동일하면 상태 갱신
            if (selectedDevice && selectedDevice.device_id === device_id) {
                setSelectedDevice(prev => {
                    if (!prev) return null;
                    return {
                        ...prev,
                        usage: device_status === "run" ? "사용" : "미사용"
                    };
                });
            }
        };
        
        // 이벤트 리스너 등록 (타입 캐스팅 추가)
        window.addEventListener('deviceStatusChange', handleDeviceStatusChange as EventListener);
        
        // 컴포넌트 언마운트 시 리스너 제거
        return () => {
            window.removeEventListener('deviceStatusChange', handleDeviceStatusChange as EventListener);
        };
    }, [selectedDevice]);

    // 장비 목록 조회
    const { mutate: fetchDialingDeviceList } = useApiForDialingDevice({
        onSuccess: (data) => {
            console.log("시스템 모니터링 데이터: ", data.result_data);
            setDialingDeviceList(data.result_data);
            
            // 현재 저장된 장비를 찾아서 선택 상태로 설정
            const currentDeviceId = equipmentNumber;
            const savedDevice = data.result_data.find(device => 
                device.device_id.toString() === currentDeviceId
            );
            
            if (savedDevice) {
                const deviceRow: EquipmentRow = {
                    device_id: savedDevice.device_id.toString(),
                    channel_count: savedDevice.channel_count,
                    device_name: savedDevice.device_name,
                    usage: getDeviceUsage(savedDevice.device_id)
                };
                setSelectedDevice(deviceRow);
                setIsEditable(true);
            }
        },onError: (data) => {      
            if (data.message.split('||')[0] === '5') {
              setAlertState({
                ...errorMessage,
                isOpen: true,
                message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                onConfirm: closeAlert,
                onCancel: () => {}
              });
              Cookies.remove('session_key');
              setTimeout(() => {
                router.push('/login');
              }, 1000);
            } else {
                showAlert(`시스템 모니터링 조회 실패: ${data.message}`);
            }
        }
    });

    // 채널 목록 조회
    const { mutate: fetchChannelList } = useApiForChannelList({
        onSuccess: (data) => {
            setChannelList(data.result_data);
        },onError: (data) => {      
            if (data.message.split('||')[0] === '5') {
              setAlertState({
                ...errorMessage,
                isOpen: true,
                message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                onConfirm: closeAlert,
                onCancel: () => {}
              });
              Cookies.remove('session_key');
              setTimeout(() => {
                router.push('/login');
              }, 1000);
            }
          }
    });

    // 채널 정보 수정 api 호출
    const { mutate: fetchChannelEdit } = useApiForChannelEdit({
        onSuccess: (data) => {
            fetchChannelList();
            fetchDialingDeviceList({
                tenant_id_array: tenants.map(tenant => tenant.tenant_id)
            });
        },onError: (error) => {
            if (error.message.split('||')[0] === '5') {
                setAlertState({
                  ...errorMessage,
                  isOpen: true,
                  message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                  onConfirm: closeAlert,
                  onCancel: () => {}
                });
                Cookies.remove('session_key');
                setTimeout(() => {
                  router.push('/login');
                }, 1000);
            } else {
                showAlert('채널 정보 저장 중 오류가 발생했습니다: ' + error.message);
            }
        }
    });
    
    // 신규 등록 API
    const { mutate: createDevice } = useApiForDialingDeviceCreate({
        onSuccess: (data) => {
            fetchChannelList();
            fetchDialingDeviceList({
                tenant_id_array: tenants.map(tenant => tenant.tenant_id)
            });
        },onError: (error) => {
            if (error.message.split('||')[0] === '5') {
                setAlertState({
                  ...errorMessage,
                  isOpen: true,
                  message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                  onConfirm: closeAlert,
                  onCancel: () => {}
                });
                Cookies.remove('session_key');
                setTimeout(() => {
                  router.push('/login');
                }, 1000);
            } else {
                showAlert('장비 정보 저장 중 오류가 발생했습니다: ' + error.message);
            }
        }
    });

    // 수정 API
    const { mutate: updateDevice } = useApiForDialingDeviceUpdate({
        onSuccess: (data) => {
            fetchChannelList();
            fetchDialingDeviceList({
                tenant_id_array: tenants.map(tenant => tenant.tenant_id)
            });
        },
        onError: (error) => {
            if (error.message.split('||')[0] === '5') {
                setAlertState({
                  ...errorMessage,
                  isOpen: true,
                  message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
                  onConfirm: closeAlert,
                  onCancel: () => {}
                });
                Cookies.remove('session_key');
                setTimeout(() => {
                  router.push('/login');
                }, 1000);
            } else {
                showAlert('장비 정보 저장 중 오류가 발생했습니다: ' + error.message);
            }
        }
    });

    useEffect(() => {
        const _tenantId = tenants.map((tenant) => tenant.tenant_id);
        fetchDialingDeviceList({
            tenant_id_array: _tenantId
        });
        fetchChannelList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 장비의 사용여부를 확인하는 함수 (실시간 상태 반영)
    const getDeviceUsage = (deviceId: number): string => {
        const deviceIdStr = deviceId.toString();
        
        // 실시간 상태가 있으면 확인 - "run"일 때만 "사용", 그 외에는 항상 "미사용"
        if (deviceIdStr in deviceStatuses) {
            return deviceStatuses[deviceIdStr] === "run" ? "사용" : "미사용";
        }
        
        // 실시간 상태가 없으면 기본값은 항상 "미사용"
        return "미사용";
    };

    const getChannelMode = (assignValue: number, assignKind: number): string => {
        if (assignKind === 1) {
            // 캠페인으로 할당일 때 기존 로직
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
        } else if (assignKind === 2) {
            // 발신모드로 할당일 때 새로운 로직
            switch(assignValue) {
                case 0:
                    return "회선사용안함";
                case 2147483647:
                    return "발신방법 모두사용";
                case 1:
                    return "Power Mode";
                case 2:
                    return "Progressive Mode";
                case 3:
                    return "Predictive Mode";
                case 5:
                    return "System Preview";
                default:
                    return "미할당";
            }
        } else if (assignKind === 3) {
            switch(assignValue) {
                case 0:
                    return "회선사용안함";
                case 2147483647:
                    return "모든 그룹아이디 사용";
                default:
                    return "미할당";
            }
        }
        return "미할당";
    };

    // 장비 목록 데이터 구성 (deviceStatuses 추가로 변경 사항 반영)
    const equipmentRows = useMemo(() => {
        return dialingDeviceList.map(device => ({
            device_id: device.device_id.toString(),
            channel_count: device.channel_count,
            device_name: device.device_name,
            usage: getDeviceUsage(device.device_id)
        }));
    // deviceStatuses 의존성 추가
    }, [dialingDeviceList, channelList, deviceStatuses]);

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
    };

    const handleChannelCellClick = ({ row }: CellClickArgs<ChannelRow>) => {
        setSelectedChannel(row);
    };

    // 장비 상세내역의 신규 버튼 클릭 핸들러
    const handleNewEquipment = () => {
        const lastDeviceId = dialingDeviceList
            .map(device => device.device_id)
            .sort((a, b) => a - b)
            .pop() || 0;
        
        const newDeviceId = (lastDeviceId + 1).toString();

        setSelectedDevice(null);
        setEquipmentNumber(newDeviceId);
        setEquipmentName("");
        setRefreshCycle("");
        setMonitoringType("periodic");
        setFilteredChannels([]);
        setSelectedChannel(null);
        setAllocationMode("");
        setAllocationOutboundMode("");
        setIsEditable(true);
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

        const handleApiResponse = (response: any) => {
            if (response.result_code === -1) {
                showConfirm('[LICENSE FULL] CIOD 접속 라이선스를 초과하였습니다.\n라이선스 문의 후 다시 시도하여 주십시오.', () => {});
                return;
            }
            
            if (selectedDevice) {
                showConfirm('장비 정보가 성공적으로 수정되었습니다.', () => {});
            } else {
                showConfirm('새로운 장비 정보가 성공적으로 저장되었습니다.', () => {});
            }
        };

        if (selectedDevice) {
            updateDevice(saveRequest, {
                onSuccess: handleApiResponse
            });
        } else {
            createDevice(saveRequest, {
                onSuccess: handleApiResponse
            });
        }
    };

    const handleChannelEdit = () => {
        if (!selectedDevice) return;
        
        const deviceChannels = channelList.find(
            channel => channel.device_id.toString() === selectedDevice.device_id
        );
    
        if (!deviceChannels) return;
    
        let updatedChannelAssign: number[];
    
        // 할당모드가 변경되었는지 확인
        if (deviceChannels.assign_kind.toString() !== allocationMode) {
            // 할당모드가 변경된 경우 모든 채널을 0으로 설정
            updatedChannelAssign = new Array(selectedDevice.channel_count).fill(0);
        } else {
            // 할당모드가 변경되지 않은 경우 기존 로직 유지
            updatedChannelAssign = [...deviceChannels.channel_assign];
            if (selectedChannel) {
                updatedChannelAssign[selectedChannel.channelNumber] = parseInt(allocationOutboundMode);
            }
        }
    
        const channelEditRequest = {
            device_id: parseInt(selectedDevice.device_id),
            assign_kind: parseInt(allocationMode),
            channel_count: selectedDevice.channel_count,
            channel_assign: updatedChannelAssign
        };
    
        fetchChannelEdit(channelEditRequest);
        showConfirm('채널 정보가 성공적으로 수정되었습니다.', () => {});
    };

    const getAllocationOutboundModeOptions = () => {
        if (allocationMode === "1") {
            // 캠페인으로 할당일 때 기존 옵션
            const defaultOptions = [
                { value: "2147483647", label: "모든 캠페인사용" },
                { value: "0", label: "회선사용안함" },
            ];
            
            const campaignOptions = campaigns.map(campaign => ({
                value: campaign.campaign_id.toString(),
                label: `ID[${campaign.campaign_id}] : ${campaign.campaign_name}`
            }));

            return [...defaultOptions, ...campaignOptions];
        } else if (allocationMode === "2") {
            // 발신모드로 할당일 때 새로운 옵션
            return [
                { value: "0", label: "회선사용안함" },
                { value: "2147483647", label: "발신방법 모두사용" },
                { value: "1", label: "Power Mode" },
                { value: "2", label: "Progressive Mode" },
                { value: "3", label: "Predictive Mode" },
                { value: "5", label: "System Preview" }
            ];
        } else if (allocationMode === "3") {
            return [
                { value: "0", label: "회선사용안함" },
                { value: "2147483647", label: "모든 그룹아이디 사용" }
            ];
        }
        return [];
    };

    // 장비 목록용 rowClass 함수
    const getEquipmentRowClass = (row: EquipmentRow) => {
        return selectedDevice?.device_id === row.device_id ? 'bg-[#FFFAEE]' : '';
    };
    
    // 채널 목록용 rowClass 함수
    const getChannelRowClass = (row: ChannelRow) => {
        return selectedChannel?.channelNumber === row.channelNumber ? 'bg-[#FFFAEE]' : '';
    };

    // useEffect for handling channel selection and updates
    useEffect(() => {
        if (selectedDevice) {
            setEquipmentNumber(selectedDevice.device_id);
            setEquipmentName(selectedDevice.device_name);
            setRefreshCycle(selectedDevice.channel_count.toString());
            setMonitoringType(selectedDevice.usage === "사용" ? "oneTime" : "periodic");
            setIsEditable(true);
            
            const selectedDeviceChannels = channelList.find(
                channel => channel.device_id.toString() === selectedDevice.device_id
            );

            if (selectedDeviceChannels) {
                const channels: ChannelRow[] = selectedDeviceChannels.channel_assign
                    .map((assignValue, index) => ({
                        channelNumber: index,
                        channelName: `Channel No ${index}`,
                        mode: getChannelMode(assignValue, selectedDeviceChannels.assign_kind),
                        assignValue: assignValue
                    }));

                setFilteredChannels(channels);
                setAllocationMode(selectedDeviceChannels.assign_kind.toString());
                
                // 이전에 선택된 채널 번호 확인
                const prevChannelNumber = selectedChannel?.channelNumber;
                if (prevChannelNumber !== undefined) {
                    const existingChannel = channels.find(c => c.channelNumber === prevChannelNumber);
                    if (existingChannel) {
                        setSelectedChannel(existingChannel);
                        setAllocationOutboundMode(existingChannel.assignValue.toString());
                        return;
                    }
                }

                // 첫 번째 채널 선택
                if (channels.length > 0) {
                    setSelectedChannel(channels[0]);
                    setAllocationOutboundMode(channels[0].assignValue.toString());
                } else {
                    setSelectedChannel(null);
                    setAllocationOutboundMode("");
                }
            } else {
                setFilteredChannels([]);
                setSelectedChannel(null);
                setAllocationMode("");
                setAllocationOutboundMode("");
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDevice, channelList]);

    // 채널 선택 시 상세 정보 업데이트
    useEffect(() => {
        if (selectedChannel) {
            setAllocationOutboundMode(selectedChannel.assignValue.toString());
        }
    }, [selectedChannel]);

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
                                rowHeight={30}
                                headerRowHeight={30}
                                rowClass={getEquipmentRowClass}
                                enableVirtualization={false}
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
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-1">
                                <Label className="w-[5.6rem] min-w-[5.6rem]">장비번호</Label>
                                <CustomInput 
                                    type="text"
                                    value={equipmentNumber}
                                    onChange={(e) => setEquipmentNumber(e.target.value)}
                                    disabled={true}
                                    className="w-full"
                                />
                            </div>
                            <div className="flex items-center gap-1">
                                <Label className="w-[5.6rem] min-w-[5.6rem]">장비이름</Label>
                                <CustomInput 
                                    type="text"
                                    value={equipmentName}
                                    onChange={(e) => setEquipmentName(e.target.value)}
                                    disabled={!isEditable}
                                    className="w-full"
                                />
                            </div>
                            <div className="flex items-center gap-1">
                                <Label className="w-[5.6rem] min-w-[5.6rem]">채널수</Label>
                                <CustomInput 
                                    type="number" 
                                    value={refreshCycle}
                                    onChange={(e) => setRefreshCycle(e.target.value)}
                                    disabled={!isEditable || selectedDevice !== null}
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
                                rowHeight={30}
                                headerRowHeight={30}
                                rowClass={getChannelRowClass}
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
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-1">
                                <Label className="w-[5.6rem] min-w-[5.6rem]">할당모드</Label>
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
                            <div className="flex items-center gap-1">
                                <Label className="w-[5.6rem] min-w-[5.6rem]">할당발신모드</Label>
                                <Select 
                                    value={allocationOutboundMode} 
                                    onValueChange={setAllocationOutboundMode}
                                    disabled={!selectedChannel}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="할당발신모드 선택" />
                                    </SelectTrigger>
                                    <SelectContent style={{ maxHeight: '300px', overflowY: 'auto' }}>
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