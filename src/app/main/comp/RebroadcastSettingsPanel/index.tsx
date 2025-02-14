"use client";

import React, { useState, useEffect } from "react";
import { CustomInput } from "@/components/shared/CustomInput";
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
        'outgoing-success-ok': '발신 성공 상담원 연결 성공',
        'outgoing-success-no': '발신 성공 상담원 연결 실패',
        'fail-busy': '통화중 실패',
        'fail-no-answer': '무응답 실패',
        'fail-fax': '팩스/모뎀 실패',
        'fail-machine': '기계음 실패',
        'fail-etc': '기타실패',
        'fail-wrong-num': '전화번호 오류 실패',
        'fail-line': '회선오류 실패',
        'fail-hangup': '고객 바로끊음 실패',
        'fail-no-tone': '통화음 없음 실패',
        'fail-no-dial': '다이얼톤 없음 실패',
        'outgoing-attempt': '발신 시도 건수',
    };
    return labels[key] || key;
};

const initOutgoingResult = {
    'outgoing-success-ok': false,
    'outgoing-success-no': true,
    'fail-busy': true,
    'fail-no-answer': true,
    'fail-fax': false,
    'fail-machine': true,
    'fail-etc': false,
    'fail-wrong-num': false,
    'fail-line': false,
    'fail-hangup': true,
    'fail-no-tone': false,
    'fail-no-dial': false,
    'outgoing-attempt': true
};

const RebroadcastSettingsPanel = () => {
    // TabStore에서 현재 활성화된 탭 정보 가져오기
    const { campaigns } = useMainStore();
    const { campaignIdForUpdateFromSideMenu } = useTabStore();

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
    const [rebroadcastList, setRebroadcastList] = useState<RebroadcastItem[]>([]);
    const [selectedRebroadcastId, setSelectedRebroadcastId] = useState<number | null>(null);
    const [selectedRebroadcastDetails, setSelectedRebroadcastDetails] = useState<RebroadcastItem | null>(null);

    const [_campaignId, set_campaignId] = useState<string>('0');
    const [listRedialQuery, setListRedialQuery] = useState<string>('');

    // 발신결과 체크박스 상태 관리
    const [selectedOutgoingResults, setSelectedOutgoingResults] = useState<{ [key: string]: boolean }>(initOutgoingResult);

    const resetAllStates = () => {
        setStartDate(new Date());
        setEndDate(new Date());
        setStartTime("");
        setTimeType("final-call-date"); //발신시간.
        setCallType("not-sent");
        if( broadcastType === 'realtime'){
            setSelectedOutgoingResults(initOutgoingResult);
        }else{
            if( listRedialQuery !== ''){
                let outgoingSuccessOk = false;  //80954, "발신 성공 상담원 연결 성공"
                if( listRedialQuery.indexOf('35233') > -1 ){   
                    outgoingSuccessOk = true;
                }
                let outgoingSuccessNo = false;  //80955, "발신 성공 상담원 연결 실패"
                if( listRedialQuery.indexOf('35223@35213') > -1 ){   
                    outgoingSuccessNo = true;
                }
                if( listRedialQuery.indexOf('35210') > -1 ){   
                    outgoingSuccessOk = true;
                    outgoingSuccessNo = true;
                }
                let failBusy = false;           //80174, "통화중 실패"
                if( listRedialQuery.indexOf('26232') > -1 ){   
                    // 2018.07.10 Gideon #24364 삼성화재(중국) 장애현상 수정 - 아래 || str == "0026232" 부분 추가
                    const tempList = listRedialQuery.split('@');
                    if( tempList.filter(data => data === '26232' || data === '0026232').length > 0 ){
                        failBusy = true;
                    }
                }
                let failNoAnswer = false;       //80175, "무응답 실패"
                if( listRedialQuery.indexOf('26233') > -1 ){   
                    failNoAnswer = true;
                }
                let failFax = false;            //80176, "팩스/모뎀 실패"
                if( listRedialQuery.indexOf('26234') > -1 ){   
                    failFax = true;
                }
                let failMachine = false;        //80177, "기계음 실패"
                if( listRedialQuery.indexOf('26235') > -1 ){   
                    failMachine = true;
                }
                let failEtc = false;            //80178, "기타실패"
                if( listRedialQuery.indexOf('26236') > -1 ){   
                    failEtc = true;
                }
                let failWrongNum = false;       //80179, "전화번호 오류 실패"
                if( listRedialQuery.indexOf('26237') > -1 ){   
                    failWrongNum = true;
                }
                let failLine = false;           //80180, "회선오류 실패"
                if( listRedialQuery.indexOf('26239') > -1 ){   
                    failLine = true;
                }
                let failHangup = false;         //80181, "고객 바로끊음 실패"
                if( listRedialQuery.indexOf('262310') > -1 ){   
                    failHangup = true;
                }
                let failNoTone = false;         //80182, "통화음 없음 실패"
                if( listRedialQuery.indexOf('262311') > -1 ){   
                    failNoTone = true;
                }
                let failNoDial = false;         //80183, "다이얼톤 없음 실패
                if( listRedialQuery.indexOf('262312') > -1 ){   
                    failNoDial = true;
                }
                let outgoingAttempt = false;//80185, "발신 시도 건수"
                if( listRedialQuery.indexOf('26238') > -1 || listRedialQuery.indexOf('0026238') > -1 ){   
                    outgoingAttempt = true;
                }
                //발신결과 체크박스.
                setSelectedOutgoingResults({...initOutgoingResult
                    , 'outgoing-success-ok': outgoingSuccessOk
                    , 'outgoing-success-no': outgoingSuccessNo
                    , 'fail-busy': failBusy
                    , 'fail-no-answer': failNoAnswer
                    , 'fail-fax': failFax
                    , 'fail-machine': failMachine
                    , 'fail-etc': failEtc
                    , 'fail-wrong-num': failWrongNum
                    , 'fail-line': failLine
                    , 'fail-hangup': failHangup
                    , 'fail-no-tone': failNoTone
                    , 'fail-no-dial': failNoDial
                    , 'outgoing-attempt': outgoingAttempt
                });
                if (listRedialQuery.indexOf("(") > 0 || listRedialQuery.indexOf("235959") > 0){
                    if( listRedialQuery.indexOf("(") > 0 ){
                        const strTimes = listRedialQuery.split(/[()]/);
                        if (strTimes[1].indexOf("2714") > 0) // 최종발신날짜
                        {
                            setTimeType("final-call-date");
                            setStartDate(strTimes[1].substring(4, 4) + "-" + strTimes[1].substring(8, 2) + "-" + strTimes[1].substring(10, 2));
                            setEndDate(strTimes[1].substring(24, 4) + "-" + strTimes[1].substring(28, 2) + "-" + strTimes[1].substring(30, 2));
                        } else {// 재콜예약날짜
                            setTimeType("recall-date");
                            setStartDate(strTimes[1].substring(4, 4) + "-" + strTimes[1].substring(8, 2) + "-" + strTimes[1].substring(10, 2));
                            setEndDate(strTimes[1].substring(24, 4) + "-" + strTimes[1].substring(28, 2) + "-" + strTimes[1].substring(30, 2));
                        }
                    }
                }
                //발신되지 않은 예약콜
                if( listRedialQuery.indexOf('402399') > -1 ){   
                    setCallType("not-sent");
                }
                //발신되어진 예약콜
                if( listRedialQuery.indexOf('4023100') > -1 ){   
                    setCallType('sent');
                }
            }else{
                setSelectedOutgoingResults(initOutgoingResult);
            }
        }
        setSelectedRebroadcastId(null);
        setSelectedRebroadcastDetails(null);

        // 모드별 체크박스 상태 설정
        setOutgoingResultChecked(true);
        setOutgoingTypeChecked(false);
        setOutgoingTimeChecked(false);
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

    const handleOutgoingResultChange = (id: string, checked: boolean) => {
        setSelectedOutgoingResults(prev => ({
            ...prev,
            [id]: checked
        }));
    };

    //추가 버튼 클릭 이벤트.
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

    //예약, 실시간 변경 이벤트.
    const handleBroadcastTypeChange = (param:string) => {
        setBroadcastType(param);        
        resetAllStates();
    };
    
    useEffect(() => {
        if( campaigns && campaignIdForUpdateFromSideMenu && campaignIdForUpdateFromSideMenu !== '' ){
            set_campaignId(campaignIdForUpdateFromSideMenu);
            setSettings(prev => ({
                ...prev,
                campaignId: campaignIdForUpdateFromSideMenu
            }));
            setListRedialQuery(campaigns.filter(data=> Number(campaignIdForUpdateFromSideMenu) === data.campaign_id)[0].list_redial_query);
        }
    }, [campaignIdForUpdateFromSideMenu,campaigns]);

    return (
        <div className="limit-width">
            <div className="flex flex-col gap-6">
                <RebroadcastSettingsPanelHeader campaignId={_campaignId} 
                    handleBroadcastTypeChange={handleBroadcastTypeChange} 
                    handleAddRebroadcast={handleAddRebroadcast}
                    handleRemoveRebroadcast={handleRemoveRebroadcast}
                    handleApplyRebroadcast={handleApplyRebroadcast}
                />

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