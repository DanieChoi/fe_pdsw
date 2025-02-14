"use client";

import React, { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { CustomInput } from "@/components/shared/CustomInput";
import { CommonButton } from "@/components/shared/CommonButton";
import { Label } from "@/components/ui/label";
import CustomAlert, { CustomAlertRequest } from '@/components/shared/layout/CustomAlert';
import { CommonRadio, CommonRadioItem } from "@/components/shared/CommonRadio";
import { DatePickerProps } from 'react-date-picker';
type Value = DatePickerProps['value'];
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useMainStore, useTabStore } from '@/store';

interface RebroadcastSettings {
  campaignId: string;
  startDate: string;
  startTime: string;
  changeYn: boolean;
  scheduleChangeYn: boolean;
}

interface RebroadcastItem {
  id: number;
  scheduleStartDate: string;
  scheduleStartTime: string;
  outgoingResults: string[];
  outgoingType: string;
  outgoingTime: {
    type: string;
    startDate: string;
    endDate: string;
  };
  isDummy?: boolean;
}

const errorMessage: CustomAlertRequest = {
  isOpen: false,
  message: '',
  title: '재발신 설정',
  type: '0',
  onClose: () => {},
  onCancle: () => {},
};

const today = new Date();
const initialSettings: RebroadcastSettings = {
  campaignId: '',
  startDate: today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2),
  startTime: '',
  changeYn: false,
  scheduleChangeYn: false
};

const getOutgoingResultLabel = (key: string) => {
  const labels: {[key: string]: string} = {
    'outgoing-success-ok': '발신성공',
    'outgoing-success-no': '발신미성공',
    'fail-busy': '통화중',
    'fail-no-answer': '무응답',
    'fail-fax': '팩스',
    'fail-machine': '자동응답기',
    'fail-etc': '기타',
    'fail-wrong-num': '잘못된 번호',
    'fail-line': '회선장애',
    'fail-hangup': '끊김',
    'fail-no-tone': '발신음 없음',
    'fail-no-dial': '발신 불가',
    'outgoing-attempt': '발신시도',
  };
  return labels[key] || key;
};

type Props = {
  campaignId?: string;
  handleBroadcastTypeChange: (param:string) => void;
  handleAddRebroadcast:() => void;
  handleRemoveRebroadcast:() => void;
}

const RebroadcastSettingsPanelHeader = ({campaignId,handleBroadcastTypeChange,handleAddRebroadcast,handleRemoveRebroadcast}:Props) => {
    // TabStore에서 현재 활성화된 탭 정보 가져오기
    const { campaigns } = useMainStore();
    const { removeTab, activeTabKey, openedTabs } = useTabStore();
    
    // 현재 활성화된 탭에서 campaignId와 title 찾기
    const activeTab = openedTabs.find(tab => tab.uniqueKey === activeTabKey);

    const [settings, setSettings] = useState<RebroadcastSettings>(initialSettings);
    const [startDate, setStartDate] = useState<Value | null>(new Date());
    const [endDate, setEndDate] = useState<Value | null>(new Date());
    const [startTime, setStartTime] = useState("");
    const [alertState, setAlertState] = useState<CustomAlertRequest>(errorMessage);
    const [broadcastType, setBroadcastType] = useState("reservation");
    const [outgoingResultChecked, setOutgoingResultChecked] = useState(true);
    const [outgoingTypeChecked, setOutgoingTypeChecked] = useState(false);
    const [callType, setCallType] = useState("not-sent");
    const [outgoingTimeChecked, setOutgoingTimeChecked] = useState(false);
    const [timeType, setTimeType] = useState("final-call-date");
    const [listCount, setListCount] = useState<number>(0);
    const [rebroadcastList, setRebroadcastList] = useState<RebroadcastItem[]>([]);
    const [selectedRebroadcastId, setSelectedRebroadcastId] = useState<number | null>(null);
    const [selectedRebroadcastDetails, setSelectedRebroadcastDetails] = useState<RebroadcastItem | null>(null);

    const [headerCampaignId, setHeaderCampaignId] = useState<string>('');

    // 발신결과 체크박스 상태 관리
    const [selectedOutgoingResults, setSelectedOutgoingResults] = useState<{[key: string]: boolean}>({
        'outgoing-success-ok': false,
        'outgoing-success-no': false,
        'fail-busy': false,
        'fail-no-answer': false,
        'fail-fax': false,
        'fail-machine': false,
        'fail-etc': false,
        'fail-wrong-num': false,
        'fail-line': false,
        'fail-hangup': false,
        'fail-no-tone': false,
        'fail-no-dial': false,
        'outgoing-attempt': false
    });


    useEffect(() => {
        if (activeTab) {
            setSettings(prev => ({
                ...prev,
                campaignId: activeTab.campaignId ?? ''
            }));
        }
    }, [activeTab]);

    // 버튼 활성화 상태 관리
    const shouldShowAddDelete = broadcastType === "reservation" && rebroadcastList.every(item => !item.isDummy);
    const shouldShowApply = (broadcastType === "realtime") || 
                       (broadcastType === "reservation" && 
                        rebroadcastList.some(item => item.isDummy));

    useEffect(() => {
        resetAllStates();
    }, [broadcastType]);

    const resetAllStates = () => {
        setStartDate(new Date());
        setEndDate(new Date());
        setStartTime("");
        setSelectedOutgoingResults(prevState => {
            const newState = { ...prevState };
            Object.keys(newState).forEach(key => {
                newState[key] = false;
            });
            return newState;
        });
        setCallType("not-sent");
        setTimeType("final-call-date");
        setSelectedRebroadcastId(null);
        setSelectedRebroadcastDetails(null);
    
        // 모드별 체크박스 상태 설정
        if (broadcastType === "realtime") {
            setOutgoingResultChecked(true);
            setOutgoingTypeChecked(true);
            setOutgoingTimeChecked(true);
        } else {
            setOutgoingResultChecked(true);
            setOutgoingTypeChecked(false);
            setOutgoingTimeChecked(false);
        }
    };

    //리스트 건수 확인 버튼 클릭 이벤트.
    const handleCheckListCount = () => {
        setAlertState({
            isOpen: true,
            message: `선택된 재발신 조건에 해당되는 리스트 수 : ${listCount}`,
            title: '리스트 건수 확인',
            type: '2',
            onClose: () => setAlertState(prev => ({ ...prev, isOpen: false })),
            onCancle: () => setAlertState(prev => ({ ...prev, isOpen: false }))
        });
    };

    //추가 버튼 클릭 이벤트.
    const handleAddRebroadcastClick = () => {
        handleAddRebroadcast();
    };

    //삭제 버튼 클릭 이벤트.
    const handleRemoveRebroadcastClick = () => {
        handleRemoveRebroadcast();
    };

    //예약, 실시간 변경 이벤트.
    const handleBroadcastType = (value: string) => {
        setBroadcastType(value);
        handleBroadcastTypeChange(value);
    };

    const handleApplyRebroadcast = () => {
        // 예약 모드에서 실제 데이터 처리
        if (broadcastType === "reservation") {
            const selectedResults = Object.entries(selectedOutgoingResults)
                .filter(([_, isSelected]) => isSelected)
                .map(([key]) => key);
    
            if (selectedResults.length === 0) {
                setAlertState({
                    isOpen: true,
                    message: '최소 하나 이상의 발신결과를 선택해주세요.',
                    title: '알림',
                    type: '0',
                    onClose: () => setAlertState(prev => ({ ...prev, isOpen: false })),
                    onCancle: () => setAlertState(prev => ({ ...prev, isOpen: false }))
                });
                return;
            }
    
            const processedRebroadcasts = rebroadcastList
                .filter(item => item.isDummy)
                .map(item => ({
                    id: item.id,
                    scheduleStartDate: startDate ? startDate.toString() : '',
                    scheduleStartTime: startTime,
                    outgoingResults: selectedResults,
                    outgoingType: callType,
                    outgoingTime: {
                        type: timeType,
                        startDate: startDate ? startDate.toString() : '',
                        endDate: endDate ? endDate.toString() : '',
                    }
                }));
    
            setRebroadcastList(prevList => 
                prevList.map(item => 
                    item.isDummy 
                        ? processedRebroadcasts.find(proc => proc.id === item.id) || item
                        : item
                )
            );
    
            setAlertState({
                isOpen: true,
                message: "재발신 설정이 적용되었습니다.",
                title: '재발신 적용 완료',
                type: '0',
                onClose: () => {
                    setAlertState(prev => ({ ...prev, isOpen: false }));
                    resetAllStates();
                },
                onCancle: () => {
                    setAlertState(prev => ({ ...prev, isOpen: false }));
                    resetAllStates();
                }
            });
        }
        // 실시간 모드 처리 로직은 기존과 동일
        else if (broadcastType === "realtime") {
            // 기존 실시간 모드 로직 유지
            const realTimeData = {
                outgoingResults: Object.entries(selectedOutgoingResults)
                    .filter(([_, isSelected]) => isSelected)
                    .map(([key]) => key),
                outgoingType: callType,
                outgoingTime: {
                    type: timeType,
                    startDate: startDate ? startDate.toString() : '',
                    endDate: endDate ? endDate.toString() : '',
                }
            };
    
            console.log('실시간 재발신 데이터:', realTimeData);
            
            setAlertState({
                isOpen: true,
                message: "실시간 재발신이 적용되었습니다.",
                title: '재발신 적용',
                type: '0',
                onClose: () => {
                    setAlertState(prev => ({ ...prev, isOpen: false }));
                    resetAllStates();
                },
                onCancle: () => {
                    setAlertState(prev => ({ ...prev, isOpen: false }));
                    resetAllStates();
                }
            });
        }
    };

    useEffect(() => {
        if( campaigns && campaignId !== '0' ){
            setHeaderCampaignId(campaignId+'');
            
            setListCount(campaigns.filter(data=>Number(campaignId) === data.campaign_id)[0].list_count);
        }
    }, [campaignId,campaigns]);

    return (
                <div className="flex title-background justify-between">
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center gap-2">
                            <Label className="w-20 min-w-20">캠페인 아이디</Label>
                            <Select defaultValue='0' value={headerCampaignId}  onValueChange={setHeaderCampaignId} disabled>
                                <SelectTrigger className="w-[140px]">
                                    <SelectValue placeholder="캠페인선택" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem key='0' value='0'>-선택-</SelectItem>
                                    {campaigns.map(option => (
                                        <SelectItem key={option.campaign_id} value={option.campaign_id+''}>
                                        {option.campaign_id}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                        </div>
                        <div className="flex items-center gap-2">
                            <Label className="w-20 min-w-20">캠페인 이름</Label>
                            <CustomInput 
                                className="w-[140px]"
                                disabled
                                value={headerCampaignId === ''?'':campaigns.filter(data=>Number(headerCampaignId) === data.campaign_id)[0].campaign_name||''}
                            />
                        </div>
                        <CommonRadio
                            defaultValue="reservation"
                            className="flex gap-5"
                            onValueChange={(value) => handleBroadcastType(value) }
                            value={broadcastType}
                        >
                            <div className="flex items-center space-x-2">
                                <CommonRadioItem value="reservation" id="reservation" />
                                <Label htmlFor="reservation">예약</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CommonRadioItem value="realtime" id="realtime" />
                                <Label htmlFor="realtime">실시간</Label>
                            </div>
                        </CommonRadio>
                    </div>
                    <div className="flex gap-2">
                        <CommonButton onClick={handleCheckListCount}>
                            리스트 건수 확인
                        </CommonButton>
                        <CommonButton 
                            onClick={handleAddRebroadcastClick} 
                            disabled={!shouldShowAddDelete}
                        >
                            추가
                        </CommonButton>
                        <CommonButton 
                            onClick={handleRemoveRebroadcastClick}
                            disabled={selectedRebroadcastId === null}
                        >
                            삭제
                        </CommonButton>
                        <CommonButton 
                            onClick={handleApplyRebroadcast}
                            disabled={!shouldShowApply}
                        >
                            적용
                        </CommonButton>
                        <CommonButton 
                            onClick={() => removeTab(20,'20')}
                        >
                            닫기
                        </CommonButton>
                    </div>
                    <CustomAlert
                        message={alertState.message}
                        title={alertState.title}
                        type={alertState.type}
                        isOpen={alertState.isOpen}
                        onClose={() => {
                        alertState.onClose()
                        }}
                        onCancle={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}/>
                </div>

    );
};

export default RebroadcastSettingsPanelHeader;