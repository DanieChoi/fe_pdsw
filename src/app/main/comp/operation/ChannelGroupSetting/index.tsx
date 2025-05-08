import CommonButton from "@/components/shared/CommonButton";
import DataGrid, { SelectColumn } from "react-data-grid";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useMemo } from 'react';
import Cookies from 'js-cookie';
import { useMainStore } from "@/store";
import CustomAlert from "@/components/shared/layout/CustomAlert";
import TitleWrap from "@/components/shared/TitleWrap";
import { useApiForChannelGroupCreate, useApiForChannelGroupDelete, useApiForChannelGroupList, useApiForChannelGroupUpdate } from "@/features/preferences/hooks/useApiForChannelGroup";

type Column = {
    key: string;
    name: string;
    editable?: boolean;
};

interface ChannelGroupRow {
    group_id : number; 
    group_name : string;
    campaignCount : number;
}

interface ChannelCampaignRow {
    campaign_id : number; 
    campaign_name : string;
}


const errorMessage = {
    isOpen: false,
    message: '',
    title: '로그인',
    type: '2',
};


const ChannelGroupSetting = () => {

    const router = useRouter();

    const { tenants, campaigns } = useMainStore();

    const [channelGroupRow, setChannelGroupRow] = useState<ChannelGroupRow[]>([]);
    const [channelCampaignRow, setChannelCampaignRow] = useState<ChannelCampaignRow[]>([]);

    const [isNewMode, setIsNewMode] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    // 채널 그룹 선택된 행
    const [selectedChannelGroupRows, setSelectedChannelGroupRows] = useState<Set<number>>(new Set());
    // 캠페인 선택된 행
    const [checkCampaignRows, setCheckCampaignRows] = useState<Set<number>>(new Set());

    // 캠페인 그리드 컬럼
    const channelColumns : Column[] = [
        { key: 'group_id', name: '그룹 아이디' },
        { key: 'group_name', name: '그룹 이름', editable: true },
        { key: 'campaignCount', name: '소속 캠페인 수' }
    ];


    const channelCampaignColumns = useMemo(() => [
        SelectColumn,
        { key: 'campaignId', name: '캠페인 아이디' },
        { key: 'groupName', name: '그룹 이름' }
    ], []);

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

    const handleChannelGroupCampaign = () =>{


    }

    // 채널 그룹리스트 조회
    const { mutate: fetchChannelGroupList } = useApiForChannelGroupList({
        onSuccess: (data) => {
            console.log('data---------- ', data);
            setChannelGroupRow(data.result_data.map((item: any) => ({
                group_id: item.group_id,
                group_name: item.group_name,
                campaignCount: 0,
            })));
        }, onError: (data) => {
        if (data.message.split('||')[0] === '5') {
            setAlertState({
            ...errorMessage,
            isOpen: true,
            message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
            onConfirm: closeAlert,
            onCancel: () => { }
            });
            Cookies.remove('session_key');
            setTimeout(() => {
            router.push('/login');
            }, 1000);
        }
        }
    });

    // 채널 그룹리스트 추가
    const { mutate: createChannelGroup } = useApiForChannelGroupCreate({
        onSuccess: (data) => {
            
            
        }, 
        onError: (data) => {
        if (data.message.split('||')[0] === '5') {
            setAlertState({
            ...errorMessage,
            isOpen: true,
            message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
            onConfirm: closeAlert,
            onCancel: () => { }
            });
            Cookies.remove('session_key');
            setTimeout(() => {
            router.push('/login');
            }, 1000);
        }
        }
    });

    // 채널 그룹리스트 조회
    const { mutate: updateChannelGroup } = useApiForChannelGroupUpdate({
        onSuccess: (data) => {
            console.log('data---------- ', data);

        }, 
        onError: (data) => {
        if (data.message.split('||')[0] === '5') {
            setAlertState({
            ...errorMessage,
            isOpen: true,
            message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
            onConfirm: closeAlert,
            onCancel: () => { }
            });
            Cookies.remove('session_key');
            setTimeout(() => {
            router.push('/login');
            }, 1000);
        }
        }
    });

    // 채널 그룹리스트 삭제
    const { mutate: deleteChannelGroupList } = useApiForChannelGroupDelete({
        onSuccess: (data) => {
            console.log('data---------- ', data);
        }, 
        onError: (data) => {
        if (data.message.split('||')[0] === '5') {
            setAlertState({
            ...errorMessage,
            isOpen: true,
            message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
            onConfirm: closeAlert,
            onCancel: () => { }
            });
            Cookies.remove('session_key');
            setTimeout(() => {
            router.push('/login');
            }, 1000);
        }
        }
    });

    useEffect( ()=> {
        fetchChannelGroupList();
        
    }, []);

    // useEffect(() => {
    //     console.log('channelGroupRow 상태:', channelGroupRow);
        
    //     setSelectedChannelGroupRows(new Set(channelGroupRow.map((row) => row.group_id)));
    // }, [channelGroupRow]);

    const handleRowsChange = (updatedRows: ChannelGroupRow[]) => {
        setChannelGroupRow(updatedRows);
    };

    const handleNew = () => {
        // createChannelGroup();   
        
        const newGroup = {
            group_id: 2, // 신규 등록을 위한 기본값 설정
            group_name: "", // 빈 값으로 초기화
            campaignCount: 0, // 기본값 설정
        };
        setChannelGroupRow((prev) => [...prev, newGroup]);
        setIsNewMode(true);
    }

    const handleSave = () => {
        // updateChannelGroup();   
    }

    const handleDelete = () => {
        // deleteChannelGroupList();   
    }

    // 키보드 이벤트 핸들러 추가
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (alertState.isOpen) {
                // Enter 키: 확인 버튼 클릭
                if (event.key === 'Enter') {
                    event.preventDefault();
                    alertState.onConfirm();
                    return;
                }
                
                // Esc 키: 취소 버튼 클릭 (type이 '1'인 경우에만)
                if (event.key === 'Escape' && alertState.type === '1') {
                    event.preventDefault();
                    alertState.onCancel();
                    return;
                }
                
                    // 경고창이 열려 있을 때는 다른 단축키를 처리하지 않음
                    return;
                }
                
                
                // Delete: 삭제
                if (event.key === 'Delete') {
                    event.preventDefault();
                    handleDelete();
                }
                
                // 아래 화살표: 신규
                if (event.key === 'ArrowDown' && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                    // 입력 필드에서는 아래 화살표가 정상 작동하도록 예외 처리
                    if (
                        document.activeElement?.tagName !== 'INPUT' && 
                        document.activeElement?.tagName !== 'SELECT' &&
                        document.activeElement?.tagName !== 'TEXTAREA'
                    ) {
                        // 이벤트의 기본 동작과 전파를 모두 차단
                        event.preventDefault();
                        event.stopPropagation();
                        handleNew();
                    }
                }
            };

        // 캡처 단계에서 이벤트 리스너 등록 (이벤트 버블링보다 먼저 실행됨)
        window.addEventListener('keydown', handleKeyDown, true);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('keydown', handleKeyDown, true);
        };
    }, [alertState, handleDelete, handleNew, handleSave]);







    
    return (

        <div className="flex gap-3">
            <div className="w-full">
                <p>목록 작업중입니다. (제거예정)</p>
                <div className="flex gap-3">
                    
                    <div>
                        <TitleWrap 
                        title="채널그룹" 
                        totalCount={channelGroupRow.length}
                        />
                        <div className="grid-custom-wrap h-[200px]">
                            <DataGrid
                                columns={channelColumns}
                                rows={channelGroupRow}
                                className="grid-custom"
                                rowKeyGetter={(row) => row.group_id}
                                onRowsChange={handleRowsChange}
                                selectedRows={selectedChannelGroupRows}
                                rowHeight={30}
                                headerRowHeight={30}
                            />
                        </div>

                        
                    </div>
                    
                    <div className="mt-[20px] text-sm">
                        <div className="flex justify-start gap-2 pt-4">
                            <CommonButton onClick={handleNew}>신규</CommonButton>
                            <CommonButton onClick={handleSave}>저장</CommonButton>
                            <CommonButton onClick={handleDelete}>삭제</CommonButton>
                        </div>
                        <ul className='space-y-1 notice-li'>
                            <li>• 채널 그룹아이디 추가 / 수정 / 삭제를 할 수 있습니다.</li>
                            <li>• 아이디를 추가하시려면 그리드에서 키보드 ↓를 누르시던지 [신규] 버튼을 클릭해 주세요.</li>
                        </ul>
                    </div>
                    
                </div>

                <div className="flex gap-3">
                    <div>
                        <TitleWrap 
                            title="할당된 캠페인 목록" 
                            totalCount={channelGroupRow.length}
                            buttons={[
                                { 
                                    label: "선택 캠페인 채널그룹 해제",
                                    onClick: handleChannelGroupCampaign
                                },
                            ]}
                        />
                        <div className="grid-custom-wrap h-[200px]">
                            <DataGrid
                                columns={channelCampaignColumns}
                                rows={channelCampaignRow}
                                className="grid-custom"
                                rowKeyGetter={(row) => row.campaign_id}
                                selectedRows={checkCampaignRows}
                                onSelectedRowsChange={setCheckCampaignRows}
                                rowHeight={30}
                                headerRowHeight={30}
                                enableVirtualization={false}
                                // editable={isNewMode} // Removed as DataGrid does not support this prop
                            />
                        </div>
                        
                    </div>

                    <div className="mt-[20px] text-sm">
                        <ul className='space-y-1 notice-li'>
                            <li>• 그룹해제 = 선택 박스 체크 후 [선택 캠페인 채널그룹 해제] 버튼을 클릭하시던지 
                                그리드 선택 후 키보드 Delete를 눌러주세요.</li>
                        </ul>
                    </div>
                </div>    
            </div>

            <CustomAlert
                    isOpen={alertState.isOpen}
                    message={alertState.message}
                    title={alertState.title}
                    type={alertState.type}
                    onClose={alertState.onConfirm}
                    onCancel={alertState.onCancel}
                />
        </div> 
        
        
        
    );
}

export default ChannelGroupSetting;