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
import { useApiForDialingDevice, useApiForDialingDeviceCreate, useApiForDialingDeviceDelete, useApiForDialingDeviceUpdate } from '@/features/preferences/hooks/useApiForDialingDevice';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEnvironmentStore } from '@/store/environmentStore';

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

    // useMainStore의 campaigns에서 가져오는 creation_time으로 채널 리스트의 값이 useEnvironmentStore에서 가져오는 환경설정에서 설정한 
    // showChannelCampaignDayScop 시간내에 만들어진것만 보이게 수정해야함.
    const { tenants, campaigns } = useMainStore();
    const { environmentData } = useEnvironmentStore();
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
            type: '2',
            onConfirm: closeAlert,
            onCancel: () => {}
        });
    };

    const showConfirm = (message: string, onConfirm: () => void) => {
        setAlertState({
            isOpen: true,
            message,
            title: '확인',
            type: '1',
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
        console.log("campaigns", campaigns);
        
        // 장비 상태 변경 이벤트 수신 함수
        const handleDeviceStatusChange = (event: any) => {
            
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
            
            // 응답 데이터 구조 확인 및 방어적 처리
            if (!data) {
                setDialingDeviceList([]);
                return;
            }
            
            if (!data.result_data) {
                setDialingDeviceList([]);
                return;
            }
            
            // result_data가 배열인지 확인
            if (!Array.isArray(data.result_data)) {
                setDialingDeviceList([]);
                return;
            }
            
            setDialingDeviceList(data.result_data);
            
            // 현재 저장된 장비를 찾아서 선택 상태로 설정
            if (!equipmentNumber) return;
            
            const currentDeviceId = equipmentNumber;
            const savedDevice = data.result_data.find(device => 
                device && device.device_id && device.device_id.toString() === currentDeviceId
            );
            
            if (savedDevice) {
                const deviceRow = {
                    device_id: savedDevice.device_id.toString(),
                    channel_count: savedDevice.channel_count,
                    device_name: savedDevice.device_name,
                    usage: getDeviceUsage(savedDevice.device_id)
                };
                setSelectedDevice(deviceRow);
                setIsEditable(true);
            }
        },
        onError: (error) => {      
            if (error.message && error.message.split('||')[0] === '5') {
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
                showAlert(`시스템 모니터링 조회 실패: ${error.message || '알 수 없는 오류'}`);
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
    
    // 장비 신규 등록 API
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

    // 장비 수정 API
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

    // 장비 삭제 API
    const { mutate: deleteDevice } = useApiForDialingDeviceDelete({
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
                showAlert('장비 정보 삭제 중 오류가 발생했습니다: ' + error.message);
            }
        }
    });

    useEffect(() => {
        if (tenants && tenants.length > 0) {
            fetchDialingDeviceList({
                tenant_id_array: tenants.map(tenant => tenant.tenant_id)
            });
            fetchChannelList();
        } 
    }, [tenants]);

    // 장비의 사용여부를 확인하는 함수 (실시간 상태 반영)
    const getDeviceUsage = (deviceId: number): string => {
        const deviceIdStr = deviceId.toString();
        
        // 실시간 상태가 있으면 확인
        if (deviceIdStr in deviceStatuses) {
            if (deviceStatuses[deviceIdStr] === "run") {
                return "사용";
            } else if (deviceStatuses[deviceIdStr] === "down") {
                return "미사용";
            } else {
                return "미사용"; // null 또는 기타 값
            }
        }
        
        // 실시간 상태가 없으면 API에서 받은 초기 상태 확인
        // 수정: dialingDeviceList가 없는 경우 예외 처리 추가
        if (!dialingDeviceList || !Array.isArray(dialingDeviceList)) {
            return "미사용";
        }
        
        const device = dialingDeviceList.find(d => d && d.device_id && d.device_id.toString() === deviceIdStr);
        if (device) {
            if (device.device_state === "run") {
                return "사용";
            } else if (device.device_state === "down") {
                return "미사용";
            } else {
                return "미사용"; // null 또는 기타 값
            }
        }
        
        // 그 외에는 미사용
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
                    // 수정: campaigns가 비어있지 않은지 확인
                    if (!campaigns || !Array.isArray(campaigns)) {
                        return "미할당";
                    }
                    
                    const campaign = campaigns.find(camp => camp && camp.campaign_id === assignValue);
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

    // 장비 목록 데이터 구성
    const equipmentRows = useMemo(() => {
        // dialingDeviceList가 없을 경우 빈 배열 반환
        if (!dialingDeviceList || !Array.isArray(dialingDeviceList) || dialingDeviceList.length === 0) {
            return [];
        }
        
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
        if (row) {
            setSelectedDevice(row);
        }
    };

    const handleChannelCellClick = ({ row }: CellClickArgs<ChannelRow>) => {
        if (row) {
            setSelectedChannel(row);
        }
    };

    // 장비 상세내역의 신규 버튼 클릭 핸들러
    const handleNewEquipment = () => {
        // dialingDeviceList 안전 검사 추가
        if (!dialingDeviceList || !Array.isArray(dialingDeviceList) || dialingDeviceList.length === 0) {
            // 장비가 없는 경우 첫 번호는 1로 설정
            setEquipmentNumber("1");
        } else {
            const deviceIds = dialingDeviceList
                .filter(device => device && device.device_id) // 유효한 device_id만 필터링
                .map(device => device.device_id)
                .sort((a, b) => a - b);
                
            const lastDeviceId = deviceIds.length > 0 ? deviceIds[deviceIds.length - 1] : 0;
            const newDeviceId = (lastDeviceId + 1).toString();
            setEquipmentNumber(newDeviceId);
        }
    
        setSelectedDevice(null);
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
                showAlert('[LICENSE FULL] CIOD 접속 라이선스를 초과하였습니다.\n라이선스 문의 후 다시 시도하여 주십시오.');
                return;
            }
            
            if (selectedDevice) {
                showAlert('장비 정보가 성공적으로 수정되었습니다.');
            } else {
                showAlert('새로운 장비 정보가 성공적으로 저장되었습니다.');
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

    // 장비 삭제 핸들러
    const handleDeleteEquipment = () => {
        // 선택된 장비가 없을 경우 경고 알림
        if (!selectedDevice) {
            showAlert('삭제할 장비를 먼저 선택해주세요.');
            return;
        }

        // 삭제 확인 알림
        showConfirm(
            `장비 [${selectedDevice.device_name}]를 삭제하시겠습니까? \n\n ※주의: 삭제시 데이터베이스에서 완전 삭제됩니다. \n 다시 한번 확인해 주시고 삭제해 주세요.`, 
            () => {
                // 확인 버튼 클릭 시 실행될 함수
                deleteDevice({
                    tenant_id: tenants[0].tenant_id,
                    device_id: parseInt(selectedDevice.device_id || "0")
                }, {
                    onSuccess: (data) => {
                        showAlert('장비 삭제 요청이 성공적으로 처리되었습니다.');
                        setSelectedDevice(null);
                        setEquipmentNumber("");
                        setEquipmentName("");
                        setRefreshCycle("");
                        setFilteredChannels([]);
                        setSelectedChannel(null);
                        setAllocationMode("");
                        setAllocationOutboundMode("");
                        setIsEditable(false);
                    }
                });
            }
        );
    }

    const handleChannelEdit = () => {
        if (!selectedDevice) return;
        
        // channelList 안전 검사 추가
        if (!channelList || !Array.isArray(channelList)) {
            showAlert('채널 정보를 불러올 수 없습니다.');
            return;
        }
        
        const deviceChannels = channelList.find(
            channel => channel && channel.device_id && 
            channel.device_id.toString() === selectedDevice.device_id
        );

        if (!deviceChannels) {
            showAlert('이 장비에 대한 채널 정보가 없습니다. 시스템 관리자에게 문의하세요.');
            return;
        }
    
        // if (!deviceChannels) {
        //     // 해당 장비의 채널 정보가 없으면 새로 생성
        //     const newChannelAssign = new Array(selectedDevice.channel_count).fill(0);
        //     const channelEditRequest = {
        //         device_id: parseInt(selectedDevice.device_id),
        //         assign_kind: parseInt(allocationMode || "0"),
        //         channel_count: selectedDevice.channel_count,
        //         channel_assign: newChannelAssign
        //     };
            
        //     fetchChannelEdit(channelEditRequest);
        //     showAlert('새 채널 정보가 생성되었습니다.');
        //     return;
        // }
    
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
        showAlert('채널 정보가 성공적으로 수정되었습니다.');
    };

    const getAllocationOutboundModeOptions = () => {
        if (allocationMode === "1") {
            // 캠페인으로 할당일 때 기본 옵션
            const defaultOptions = [
                { value: "2147483647", label: "모든 캠페인사용" },
                { value: "0", label: "회선사용안함" },
            ];
            
            // 수정: campaigns가 비어있지 않은지 확인
            if (!campaigns || !Array.isArray(campaigns) || campaigns.length === 0) {
                return defaultOptions;
            }
            
            // 필터링: 현재 날짜 기준으로 showChannelCampaignDayScop 일 이내의 캠페인만 표시
            const currentDate = new Date();
            const dayScope = environmentData?.showChannelCampaignDayScop || 0; // 설정 값이 없으면 기본값 0
            
            const filteredCampaigns = campaigns.filter(campaign => {
                // 캠페인 객체가 유효한지 확인
                if (!campaign) {
                    return false;
                }
                
                // update_time이 없는 경우에는 포함시키지 않음
                if (!campaign.update_time) {
                    return false;
                }
                
                // "0000-00-00 00:00:00"인 경우는 항상 포함
                if (campaign.update_time === "0000-00-00 00:00:00") {
                    return true;
                }
                
                // 정상적인 날짜인 경우 기존 로직으로 필터링
                const creationDate = new Date(campaign.update_time);
                
                // 현재 날짜와의 차이 계산 (밀리초 단위)
                const timeDiff = currentDate.getTime() - creationDate.getTime();
                
                // 일 단위로 변환
                const dayDiff = timeDiff / (1000 * 60 * 60 * 24);
                
                // dayScope 이내인지 확인 (dayScope가 0이면 모든 캠페인 표시)
                return dayScope === 0 || dayDiff <= dayScope;
            });
            
            // 필터링된 캠페인을 드롭다운 옵션으로 변환
            const campaignOptions = filteredCampaigns.map(campaign => ({
                value: campaign.campaign_id.toString(),
                label: `ID[${campaign.campaign_id}] : ${campaign.campaign_name}`
            }));
    
            return [...defaultOptions, ...campaignOptions];
        } else if (allocationMode === "2") {
            // 발신모드로 할당일 때 옵션
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
            
            // 수정: channelList가 비어있지 않은지 확인
            if (channelList && Array.isArray(channelList)) {
                const selectedDeviceChannels = channelList.find(
                    channel => channel && channel.device_id && channel.device_id.toString() === selectedDevice.device_id
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
                        <TitleWrap title="장비 목록" totalCount={dialingDeviceList?.length || 0} />
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
                                },{ 
                                    label: "삭제", 
                                    onClick: handleDeleteEquipment
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
                        <TitleWrap title="채널목록" totalCount={filteredChannels?.length || 0} />
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