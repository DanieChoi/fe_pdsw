import CommonButton from "@/components/shared/CommonButton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { Label } from "@/components/ui/label";
import { useApiForSystemCallBackTimeSetting, useApiForSystemCallBackTimeUpdate } from "@/features/preferences/hooks/useApiForSystemCallBackTimeSetting";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { SystemCallBackTimeUpdateRequest } from "@/features/preferences/types/SystemPreferences";

interface SystemCallBackTimeData {
    use_flag : number; // 0: 미사용, 1: 사용
    init_hour? : string; // "01" string
}

const errorMessage = {
    isOpen: false,
    message: '',
    title: '로그인',
    type: '2',
};


const SystemCallBackTimeSetting = () => {

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

    // response_data
    // use_flag -- 필수 값 0: 미사용, 1: 사용 number
    // init_time -- "01" string

    // request_data
    // init_flag  -- 필수 값 number
    // init_hour -- 옵셔널값  init_flag 가 1이면 보내야하고, 0이면 안보낸다 string

    const [selectSystemCallBackTime, setSelectSystemCallBackTime] = useState<string>(''); // 시스템 콜백 리스트 초기화 시간 설정  
    const [systemCallBackTimeData, setSystemCallBackTimeData] = useState<SystemCallBackTimeData>(); // response 시스템 콜백 리스트 초기화 시간 설정 데이터

    // 시스템 콜백 리스트 초기화 시간 설정 리스트
    const systemCallBackTimeList = ['미사용', '0시', '1시', '2시', '3시', '4시', '5시', '6시', '7시', '8시', '9시',
        '10시', '11시', '12시', '13시', '14시', '15시', '16시', '17시', '18시', '19시', '20시', '21시', '22시', '23시'];

    
    // 콜백 리스트 초기화 시각 조회
    const { mutate: fetchSystemCallBackTime } = useApiForSystemCallBackTimeSetting({
        onSuccess: (data) => {

            const { use_flag, init_hour } = data.result_data;

            const formattedHour = use_flag === 0
                ? '미사용'
                : parseInt(init_hour ?? '0').toString() + '시'; // "0100" -> "1시"

            setSystemCallBackTimeData(data.result_data);
            setSelectSystemCallBackTime(formattedHour);
            // setSystemCallBackTimeData(data.result_data); // 시스템 콜백 리스트 초기화 시간 설정
            // setSelectSystemCallBackTime(data.result_data?.use_flag === 0 ? '미사용' : data.result_data.init_hour || ''); // 시스템 콜백 리스트 초기화 시간 설정
        },
        onError: (data) => {     
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
                showAlert(`조회 실패: ${data.message}`);
            }
        }
    }); // end of useApiForSystemCallBackTimeSetting


    // 콜백 리스트 초기화 시간 수정
    const { mutate: updateSystemCallBackTime } = useApiForSystemCallBackTimeUpdate({
        onSuccess: (data) => {
            if (data.result_code === 0) {
                showAlert('수정되었습니다.');
                fetchSystemCallBackTime(); // 수정 후 다시 조회
            } else {
                showAlert(`수정 실패: ${data.result_msg}`);
            }
        },
        onError: (data) => {      
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
                showAlert(`수정 실패: ${data.message}`);
            }
        }
    }); // end of useApiForSystemCallBackTimeUpdate


    useEffect(() => {
        fetchSystemCallBackTime();
    }, []);

    
    // 시스템 콜백 리스트 초기화 시간 설정 상태 업데이트
    const handleSystemCallBackTimeChange = (value: string) => {
        // console.log('Selected value:', value);
        setSelectSystemCallBackTime(value);
    }; // end of handleSystemCallBackTimeChange


    // 선택한 시스템 콜백 리스트 초기화 시간을 설정
    const handleSystemCallBackTimeSave = () => {

        if(selectSystemCallBackTime === null || selectSystemCallBackTime.trim() === '') {
            alert('시간을 선택해주세요.');
            return;
        }
        // init_flag 값 설정
        const use_flag = selectSystemCallBackTime === '미사용' ? 0 : 1;

        // selectSystemCallBackTime가 0시부터 9시까지는 "0"을 더해서 00, 01, 02, ... 형식으로 변환하고 10, 11.. 으론 그대로
        const formattedTime = selectSystemCallBackTime === '미사용'
            ? '00'
            : `${selectSystemCallBackTime.replace('시', '').padStart(2, '0')}`;
        
        // 요청 데이터 생성
        const requestData: SystemCallBackTimeUpdateRequest = {
            use_flag,
            ...(use_flag === 1 && { init_hour: formattedTime }), // init_flag가 1일 때만 init_hour 포함
        };
        
        // console.log('Request Data:', requestData);

        updateSystemCallBackTime(requestData); // API 호출

        /*
        showConfirm('저장하시겠습니까?', () => {
            console.log('Saving...');
            // updateSystemCallBackTime(requestData); // API 호출
        });
        */

    }; // end of handleSystemCallBackTimeSave

    
    return (

        <div className="flex gap-3">
            <div className="w-[580px]">
                <div className='pt-3 flex items-center gap-3'>
                <Label className="w-[15rem] min-w-[15rem]">콜백 리스트 초기화 시각 설정</Label>
                    <Select
                    value={selectSystemCallBackTime} // "01" -> "1시" 
                    onValueChange={handleSystemCallBackTimeChange}
                    >
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="시간설정" />
                        </SelectTrigger>
                        <SelectContent style={{ maxHeight: '300px', overflowY: 'auto' }}> 
                            {systemCallBackTimeList.map(time => (
                                <SelectItem 
                                    key={time} 
                                    value={time === '미사용' ? '미사용' : time} // "미사용"은 그대로 사용하고, 나머지는 "시"를 제거한 값으로 설정
                                >
                                    {time}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <CommonButton onClick={()=>handleSystemCallBackTimeSave()}>적용</CommonButton>
                </div>
            </div>
        </div>    
    );
}

export default SystemCallBackTimeSetting;