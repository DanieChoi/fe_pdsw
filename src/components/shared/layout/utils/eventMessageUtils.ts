import { QueryClient } from "@tanstack/react-query";
import { toast } from "../CustomToast";

export type FooterDataType = {
    time: string;
    type: string;
    message: string;
};

type EventProcessResult = {
    message: string;
    messageList: FooterDataType[]; // 옵셔널(?) 제거, 항상 배열
    shouldFetchMain?: boolean;
    toastMessage?: string;
};

// 시간 포맷팅 유틸 함수
export const formatCurrentTime = (): string => {
    const today = new Date();
    return String(today.getHours()).padStart(2, '0') + ':' +
        String(today.getMinutes()).padStart(2, '0') + ':' +
        String(today.getSeconds()).padStart(2, '0');
};

// 캠페인 상태 문자열 변환 함수
export const getStatusFlagText = (statusFlag: number): string => {
    switch (statusFlag) {
        case 1: return '시작';
        case 2: return '멈춤';
        case 3: return '중지';
        default: return '';
    }
};

// 완료 구분 문자열 변환 함수
export const getEndFlagText = (endFlag: number): string => {
    switch (endFlag) {
        case 1: return '진행중';
        case 2: return '완료';
        default: return '';
    }
};

// 토스트 표시 함수
export const showEventToast = (
    message: string,
    colors: any,
    duration: number = 5000
): void => {
    setTimeout(() => {
        toast.event(message, {
            colors: colors,
            duration: duration
        });
    }, 0);
};

// 메인 이벤트 처리 함수
export const processEventMessage = (
    announce: string,
    command: string,
    data: any,
    kind: string,
    campaigns: any[],
    queryClient: QueryClient,
    tenant_id: string | number,
    role_id: string | number
): EventProcessResult => {
    // 현재 시간 가져오기
    const time = formatCurrentTime();

    // 메시지 타입 설정
    let type = 'Event';

    // 메시지 및 결과 초기화
    let message = '';
    let messageList: FooterDataType[] = [];
    let shouldFetchMain = false;
    let toastMessage = '';

    // 운영설정>캠페인별 발신번호설정
    if (announce === '/pds/campaign/calling-number') {
        message = '캠페인 : ';
        if (command === 'INSERT') {
            message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 추가 성공';
        } else if (command === 'DELETE') {
            message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 삭제 성공';
        } else if (command === 'UPDATE') {
            message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 변경 성공';
        }
    }

    // 장비 사용, 장비 사용중지
    else if (announce === 'dialing-device') {
        if (command === 'UPDATE' && data['device_status'] === 'run') {
            message = 'CIDS 작동중';
            // 커스텀 이벤트 발생 - 장비 상태 변경을 다른 컴포넌트에 알림
            const deviceStatusEvent = new CustomEvent('deviceStatusChange', {
                detail: {
                    device_id: data['device_id'].toString(),
                    device_status: 'run'
                }
            });
            window.dispatchEvent(deviceStatusEvent);
        } else if (command === 'UPDATE' && data['device_status'] === 'down') {
            message = 'CIDS 작동중지';
            // 커스텀 이벤트 발생 - 장비 상태 변경을 다른 컴포넌트에 알림
            const deviceStatusEvent = new CustomEvent('deviceStatusChange', {
                detail: {
                    device_id: data['device_id'].toString(),
                    device_status: 'down'
                }
            });
            window.dispatchEvent(deviceStatusEvent);
        }
    }

    // 캠페인수정>콜페이싱 수정
    else if (announce === '/pds/campaign/dial-speed') {
        message = '[콜페이싱] ';
        if (command === 'UPDATE') {
            const tempCampaign = campaigns.find((campaign) => campaign.campaign_id === data['campaign_id']);
            if (tempCampaign && tempCampaign.dial_mode === 2) {
                message += '캠페인 아이디 ' + data['campaign_id'] + ' , 현재 설정값 ' + data['dial_speed'] * 2;
            } else {
                message += '캠페인 아이디 ' + data['campaign_id'] + ' , 현재 설정값 ' + data['dial_speed'];
            }
        }
    }

    // 캠페인
    else if (announce === '/pds/campaign') {
        message = '캠페인 ';
        const startFlag = getStatusFlagText(data['start_flag']);
        const endFlag = getEndFlagText(data['end_flag']);

        if (command === 'INSERT') {
            message += '추가, 캠페인 아이디 : ' + data['campaign_id']
                + ' , 캠페인 이름 : ' + data['campaign_name']
                + ' , 동작상태 : ' + startFlag
                + ', 완료구분 : ' + endFlag;
            queryClient.invalidateQueries({ queryKey: ["treeMenuDataForSideMenu", tenant_id, role_id] });
            queryClient.invalidateQueries({ queryKey: ["campaignTreeDataForCampaignGroupTab", tenant_id] });
        } else if (command === 'UPDATE') {
            message += '수정, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : '
                + data['campaign_name']
                + ' , 동작상태 : ' + startFlag
                + ', 완료구분 : ' + endFlag;
            queryClient.invalidateQueries({ queryKey: ["treeMenuDataForSideMenu", tenant_id, role_id] });
            queryClient.invalidateQueries({ queryKey: ["campaignTreeDataForCampaignGroupTab", tenant_id] });
        } else if (command === 'DELETE') {
            message += '삭제, 캠페인 아이디 : ' + data['campaign_id'];
            queryClient.invalidateQueries({ queryKey: ["treeMenuDataForSideMenu", tenant_id, role_id] });
            queryClient.invalidateQueries({ queryKey: ["campaignTreeDataForCampaignGroupTab", tenant_id] });
        }

        shouldFetchMain = true;

        if (data['start_flag'] === 3) {
            messageList.push({
                time,
                type,
                message: '캠페인 동작상태 변경, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + startFlag + ', 완료구분 : ' + endFlag
            });

            toastMessage = ' , 캠페인 이름 : ' + ' , 동작상태 : ' + startFlag;
        }
    }

    // 스킬
    else if (announce === '/pds/skill/agent-list') {
        const tempAgentIdList = data['agent_id'];
        const skillId = data['skill_id'];

        for (let i = 0; i < tempAgentIdList.length; i++) {
            let actionMessage = '[스킬 ';
            if (command === 'UPDATE' || command === 'INSERT') {
                actionMessage += '추가] 스킬 아이디 : ' + skillId + ' , 상담원 아이디 : ' + tempAgentIdList[i];
            } else if (command === 'DELETE') {
                actionMessage += '해제] 스킬 아이디 : ' + skillId + ' , 상담원 아이디 : ' + tempAgentIdList[i];
            }

            messageList.push({
                time,
                type,
                message: actionMessage
            });
        }

        // 토스트 메시지 준비
        const actionType = command === 'UPDATE' || command === 'INSERT' ? '추가' : '해제';
        toastMessage = `[스킬 ${actionType}] 스킬 아이디 : ${skillId}\n${tempAgentIdList.length}명의 상담원 변경됨`;
    }

    // 스킬편집
    else if (announce === '/pds/skill') {
        message = '[스킬 ';
        if (command === 'INSERT') {
            message += '추가] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
        } else if (command === 'DELETE') {
            message += '삭제] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
        } else if (command === 'UPDATE') {
            message += '수정] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
        }
    }

    // 캠페인 요구스킬 수정
    else if (announce === '/pds/campaign/skill') {
        if (command === 'UPDATE') {
            message = '캠페인 요구스킬 수정, 캠페인 아이디 : ' + data['campaign_id'];
        }
    }

    // 상담원 자원 수정/삭제
    else if (announce === 'update-agent') {
        message = '[상담원 자원 ';
        if (command === 'UPDATE') {
            message += '수정] 상담원 아이디 : ' + data['employee_id'] + ' , 상담원 이름 : ' + data['agent_name'];
        } else if (command === 'DELETE') {
            message += '삭제] 상담원 아이디 : ' + data['employee_id'] + ' , 상담원 이름 : ' + data['agent_name'];
        }
    }

    // 캠페인수정>동작시간 추가
    else if (announce === '/pds/campaign/schedule') {
        if (command === 'INSERT') {
            message = '캠페인 스케쥴수정, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'];
        }
    }

    // 캠페인 동작상태 변경
    else if (announce === '/pds/campaign/status') {
        if (command === 'UPDATE') {
            let statusFlag = '';
            if (data['campaign_status'] === 1) {
                statusFlag = '시작';
            } else if (data['campaign_status'] === 2) {
                queryClient.invalidateQueries({ queryKey: ["treeMenuDataForSideMenu", tenant_id, role_id] });
                statusFlag = '멈춤';
            } else if (data['campaign_status'] === 3) {
                queryClient.invalidateQueries({ queryKey: ["treeMenuDataForSideMenu", tenant_id, role_id] });
                statusFlag = '중지';
            }

            const tempCampaign = campaigns.filter((campaign) => campaign && campaign.campaign_id === Number(data['campaign_id']));
            const campaignName = tempCampaign && tempCampaign.length > 0 ? tempCampaign[0].campaign_name : '';

            message = '캠페인 동작상태 변경, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + campaignName + ' , 동작상태 : ' + statusFlag + ' , 완료구분 : 진행중';

            // 토스트 메시지 준비
            toastMessage = `캠페인 이름 : ${campaignName}\n동작상태 : ${statusFlag}`;

            shouldFetchMain = true;
        }
    }

    // 발신리스트등록
    else if (announce === '/pds/campaign/calling-list') {
        if (command === 'INSERT') {
            let listFlag = '';
            if (data['list_flag'] === 'I') {
                listFlag = '신규리스트';
            } else if (data['list_flag'] === 'A') {
                listFlag = '추가리스트';
            } else if (data['list_flag'] === 'D') {
                listFlag = '삭제리스트';
            } else if (data['list_flag'] === 'L') {
                listFlag = '초기화';
            }

            message = '발신리스트등록, 캠페인 아이디 : ' + data['campaign_id'] + ' , 리스트구분 : ' + listFlag;
        }
    }

    return {
        message,
        messageList: messageList || [], // 또는 그냥 빈 배열로 초기화하여 사용
        shouldFetchMain,
        toastMessage
    };
};