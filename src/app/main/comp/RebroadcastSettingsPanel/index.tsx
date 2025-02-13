"use client";

import React, { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { CustomInput } from "@/components/shared/CustomInput";
import { CommonButton } from "@/components/shared/CommonButton";
import { Label } from "@/components/ui/label";
import CustomAlert, { CustomAlertRequest } from '@/components/shared/layout/CustomAlert';
import { CommonRadio, CommonRadioItem } from "@/components/shared/CommonRadio";
import TitleWrap from "@/components/shared/TitleWrap";
import DatePicker from "react-date-picker";
import { DatePickerProps } from 'react-date-picker';
type Value = DatePickerProps['value'];
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
import { Calendar as CalendarIcon } from "lucide-react";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useTabStore, useMainStore } from '@/store';
import RebroadcastSettingsPanelHeader from './RebroadcastSettingsPanelHeader';

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
    onClose: () => { },
    onCancle: () => { },
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
    const labels: { [key: string]: string } = {
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

const RebroadcastSettingsPanel = () => {
    // TabStore에서 현재 활성화된 탭 정보 가져오기
    const { campaigns } = useMainStore();
    const { campaignIdForUpdateFromSideMenu, activeTabKey, openedTabs } = useTabStore();

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
    const [isApplying, setIsApplying] = useState(false);
    const [canEdit, setCanEdit] = useState(true);

    const [_campaignId, set_campaignId] = useState<string>('0');

    // 발신결과 체크박스 상태 관리
    const [selectedOutgoingResults, setSelectedOutgoingResults] = useState<{ [key: string]: boolean }>({
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

    const handleDateChange = (value: Value) => {
        if (value instanceof Date || value === null) {
            let tempStartDate = '';
            if (value != null) {
                tempStartDate = value.getFullYear() +
                    ('0' + (value.getMonth() + 1)).slice(-2) +
                    ('0' + value.getDate()).slice(-2);
            }
            setStartDate(value);
            setSettings(prev => ({
                ...prev,
                startDate: tempStartDate,
                changeYn: true,
                scheduleChangeYn: true
            }));
        }
    };

    const handleEndDateChange = (value: Value) => {
        setEndDate(value);
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length <= 4 && /^\d*$/.test(value)) {
            setStartTime(value);
        }
    };

    const handleCheckListCount = () => {
        const count = calculateListCount();
        setListCount(count);

        setAlertState({
            isOpen: true,
            message: `선택된 재발신 조건에 해당되는 리스트 수 : ${count}`,
            title: '리스트 건수 확인',
            type: '0',
            onClose: () => setAlertState(prev => ({ ...prev, isOpen: false })),
            onCancle: () => setAlertState(prev => ({ ...prev, isOpen: false }))
        });
    };

    const calculateListCount = () => {
        return 4; // 임시 값
    };

    const handleOutgoingResultChange = (id: string, checked: boolean) => {
        setSelectedOutgoingResults(prev => ({
            ...prev,
            [id]: checked
        }));
    };

    const handleAddRebroadcast = () => {
        const newRebroadcast: RebroadcastItem = {
            id: rebroadcastList.length + 1,
            scheduleStartDate: "",
            scheduleStartTime: "",
            outgoingResults: [],
            outgoingType: "",
            outgoingTime: {
                type: "",
                startDate: "",
                endDate: ""
            },
            isDummy: true
        };

        setRebroadcastList([...rebroadcastList, newRebroadcast]);
        resetAllStates();
    };

    const handleRemoveRebroadcast = () => {
        if (selectedRebroadcastId !== null && rebroadcastList.some(item => item.id === selectedRebroadcastId)) {
            const updatedList = rebroadcastList.filter(item => item.id !== selectedRebroadcastId);
            setRebroadcastList(updatedList);
            setSelectedRebroadcastId(null);

            if (updatedList.length === 0) {
                resetAllStates();
            }
        }
    };

    const handleSelectRebroadcast = (id: number) => {

        // 더미 항목이 있는지 확인
        const hasDummyItem = rebroadcastList.some(item => item.isDummy);

        if (hasDummyItem) {
            setAlertState({
                isOpen: true,
                message: '현재 추가 중인 재발신 항목이 있습니다. 적용 또는 취소해주세요.',
                title: '알림',
                type: '0',
                onClose: () => setAlertState(prev => ({ ...prev, isOpen: false })),
                onCancle: () => setAlertState(prev => ({ ...prev, isOpen: false }))
            });
            return;
        }

        // 기존 선택 로직
        setSelectedRebroadcastId(prevId => (prevId === id ? null : id));

        // 선택된 항목 찾기
        const selected = rebroadcastList.find(item => item.id === id);

        if (selected) {
            setSelectedRebroadcastDetails(selected);

            // 발신결과 체크박스 상태 초기화
            const newSelectedResults = { ...selectedOutgoingResults };
            Object.keys(newSelectedResults).forEach(key => {
                newSelectedResults[key] = false;
            });

            // 선택된 항목의 발신결과로 체크박스 상태 업데이트
            if (Array.isArray(selected.outgoingResults)) {
                selected.outgoingResults.forEach(result => {
                    if (newSelectedResults.hasOwnProperty(result)) {
                        newSelectedResults[result] = true;
                    }
                });
            }

            // 상태 업데이트
            setSelectedOutgoingResults(newSelectedResults);

            // 날짜 및 시간 설정
            if (selected.scheduleStartDate) {
                setStartDate(new Date(selected.scheduleStartDate));
            }

            if (selected.scheduleStartTime) {
                setStartTime(selected.scheduleStartTime);
            }

            if (selected.outgoingType) {
                setCallType(selected.outgoingType);
            }

            if (selected.outgoingTime && selected.outgoingTime.type) {
                setTimeType(selected.outgoingTime.type);
            }

            if (selected.outgoingTime && selected.outgoingTime.endDate) {
                setEndDate(new Date(selected.outgoingTime.endDate));
            }
        } else {
            // 선택 해제된 경우 상태 초기화
            setSelectedRebroadcastDetails(null);
            resetAllStates();
        }
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
        if( campaignIdForUpdateFromSideMenu ){
            set_campaignId(campaignIdForUpdateFromSideMenu);
        }
    }, [campaignIdForUpdateFromSideMenu]);

    return (
        <div className="limit-width">
            <div className="flex flex-col gap-6">
                <RebroadcastSettingsPanelHeader campaignId={_campaignId}/>

                <div className="flex gap-5 h-[580px]">
                    <div className={`flex-1 w-1/3 flex flex-col gap-5 ${broadcastType === "realtime" ? "opacity-50 pointer-events-none" : ""}`}>
                        <div>
                            <TitleWrap title="스케줄 재발신 설정" />
                            <div className="border p-2 rounded flex flex-col gap-2 py-[20px] px-[30px]">
                                <div className="flex items-center gap-2">
                                    <Label className="w-20 min-w-20">시작날짜</Label>
                                    <DatePicker
                                        onChange={handleDateChange}
                                        value={startDate}
                                        format="yyyy-MM-dd"
                                        className="w-full custom-calendar"
                                        calendarIcon={<CalendarIcon className="mr-2 h-4 w-4" color="#989898" />}
                                        clearIcon={null}
                                        dayPlaceholder="dd"
                                        monthPlaceholder="mm"
                                        yearPlaceholder="yyyy"
                                        disabled={broadcastType === "realtime"}
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Label className="w-20 min-w-20">시작시간</Label>
                                    <CustomInput
                                        className="w-full"
                                        type="text"
                                        value={startTime}
                                        onChange={handleTimeChange}
                                        maxLength={4}
                                        placeholder="0000"
                                        disabled={broadcastType === "realtime"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <TitleWrap title="예약 재발신 목록" />
                            <div className="border p-2 rounded h-[400px] py-[20px] px-[20px]">
                                <ul className="flex flex-col gap-2">
                                    {rebroadcastList.map((item, index) => (
                                        <li
                                            key={item.id}
                                            onClick={() => handleSelectRebroadcast(item.id)}
                                            className={`text-sm cursor-pointer p-[5px] ${selectedRebroadcastId === item.id
                                                    ? 'bg-[#FFFAEE]'
                                                    : item.isDummy
                                                        ? 'bg-[#F0F0F0]'
                                                        : 'hover:bg-[#FFFAEE]'
                                                }`}
                                        >
                                            {`${index + 1}번째 재발신`}
                                            {item.isDummy && <span className="text-xs text-gray-500 ml-2">(추가 중)</span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-1/3 flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <CustomCheckbox
                                id="outgoing-result"
                                checked={outgoingResultChecked}
                                onCheckedChange={(checked: boolean) => setOutgoingResultChecked(checked)}
                            />
                            <Label htmlFor="outgoing-result" className="text-sm">
                                발신결과
                            </Label>
                        </div>
                        <div className={`border p-2 rounded py-[20px] px-[20px] flex flex-col gap-2 ${!outgoingResultChecked ? "opacity-50 pointer-events-none" : ""}`} style={{ height: "calc(100% - 29px)" }}>
                            {Object.keys(selectedOutgoingResults).map((key) => (
                                <div key={key} className="flex gap-2 items-center">
                                    <CustomCheckbox
                                        id={key}
                                        checked={selectedOutgoingResults[key]}
                                        onCheckedChange={(checked: boolean) => handleOutgoingResultChange(key, checked)}
                                        disabled={!outgoingResultChecked}
                                    />
                                    <Label htmlFor={key} className="text-sm">
                                        {getOutgoingResultLabel(key)}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-1/3 flex flex-col gap-5">
                        <div className="flex flex-col gap-2 h-[40%]">
                            <div className="flex gap-2 items-center">
                                <CustomCheckbox
                                    id="outgoing-type"
                                    checked={outgoingTypeChecked}
                                    onCheckedChange={(checked: boolean) => setOutgoingTypeChecked(checked)}
                                />
                                <Label htmlFor="outgoing-type" className="text-sm">
                                    발신구분
                                </Label>
                            </div>
                            <div className={`border p-2 rounded py-[20px] px-[20px] flex flex-col gap-6 ${!outgoingTypeChecked ? "opacity-50 pointer-events-none" : ""}`} style={{ height: "calc(100% - 29px)" }}>
                                <div className="text-sm">재콜 구분을 선택합니다.</div>
                                <CommonRadio
                                    defaultValue="not-sent"
                                    className="flex gap-5 flex-col"
                                    disabled={!outgoingTypeChecked}
                                    value={callType}
                                    onValueChange={setCallType}
                                >
                                    <div className="flex items-center space-x-2">
                                        <CommonRadioItem value="not-sent" id="not-sent" disabled={!outgoingTypeChecked} />
                                        <Label htmlFor="not-sent">발신되지 않은 예약콜</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CommonRadioItem value="sent" id="sent" disabled={!outgoingTypeChecked} />
                                        <Label htmlFor="sent">발신되어진 예약콜</Label>
                                    </div>
                                </CommonRadio>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 h-[60%]">
                            <div className="flex gap-2 items-center">
                                <CustomCheckbox
                                    id="outgoing-time"
                                    checked={outgoingTimeChecked}
                                    onCheckedChange={(checked: boolean) => setOutgoingTimeChecked(checked)}
                                />
                                <Label htmlFor="outgoing-time" className="text-sm">
                                    발신시간
                                </Label>
                            </div>
                            <div className={`border p-2 rounded py-[20px] px-[20px] flex flex-col gap-6 ${!outgoingTimeChecked ? "opacity-50 pointer-events-none" : ""}`} style={{ height: "calc(100% - 29px)" }}>
                                <CommonRadio
                                    defaultValue="final-call-date"
                                    className="flex gap-5"
                                    disabled={!outgoingTimeChecked}
                                    value={timeType}
                                    onValueChange={setTimeType}
                                >
                                    <div className="flex items-center space-x-2">
                                        <CommonRadioItem value="final-call-date" id="final-call-date" disabled={!outgoingTimeChecked} />
                                        <Label htmlFor="final-call-date">최종 발신 날짜</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CommonRadioItem value="recall-date" id="recall-date" disabled={!outgoingTimeChecked} />
                                        <Label htmlFor="recall-date">재콜 예약 날짜</Label>
                                    </div>
                                </CommonRadio>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <Label className="w-20 min-w-20">시작날짜</Label>
                                        <DatePicker
                                            onChange={handleDateChange}
                                            disabled={!outgoingTimeChecked}
                                            value={startDate}
                                            format="yyyy-MM-dd"
                                            className="w-full custom-calendar"
                                            calendarIcon={<CalendarIcon className="mr-2 h-4 w-4" color="#989898" />}
                                            clearIcon={null}
                                            dayPlaceholder="dd"
                                            monthPlaceholder="mm"
                                            yearPlaceholder="yyyy"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Label className="w-20 min-w-20">종료날짜</Label>
                                        <DatePicker
                                            onChange={handleEndDateChange}
                                            disabled={!outgoingTimeChecked}
                                            value={endDate}
                                            format="yyyy-MM-dd"
                                            className="w-full custom-calendar"
                                            calendarIcon={<CalendarIcon className="mr-2 h-4 w-4" color="#989898" />}
                                            clearIcon={null}
                                            dayPlaceholder="dd"
                                            monthPlaceholder="mm"
                                            yearPlaceholder="yyyy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CustomAlert
                message={alertState.message}
                title={alertState.title}
                type={alertState.type}
                isOpen={alertState.isOpen}
                onClose={() => {
                    setAlertState((prev) => ({ ...prev, isOpen: false }));
                }}
                onCancle={() => {
                    setAlertState((prev) => ({ ...prev, isOpen: false }));
                }}
            />
        </div>
    );
};

export default RebroadcastSettingsPanel;