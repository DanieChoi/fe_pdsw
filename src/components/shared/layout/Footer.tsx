
'use client';

import { useState, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown, Bell, BellOff, Trash } from "lucide-react";
import { debounce, isEqual } from 'lodash';
import { useAuthStore, useMainStore } from '@/store';
import { Resizable } from "re-resizable";
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useEnvironmentStore } from "@/store/environmentStore";
import { toast, initToasts } from "./CustomToast";
import { useApiForGetTreeMenuDataForSideMenu } from "@/features/auth/hooks/useApiForGetTreeMenuDataForSideMenu";
import { useApiForGetTreeDataForCampaignGroupTab } from "@/features/campaignManager/hooks/useApiForGetTreeDataForCampaignGroupTab";

type FooterDataType = {
  time: string;
  type: string;
  message: string;
};

interface FooterProps {
  footerHeight: number;      // 열려 있을 때 푸터의 높이(px)
  startResizing?: () => void; // 드래그로 푸터 높이를 조절하기 위한 함수
  onToggleDrawer?: (isOpen: boolean) => void; // 부모 컴포넌트에 열림/닫힘 상태 전달
  onResizeHeight?: (height: number) => void; // 리사이즈된 높이를 부모 컴포넌트에 전달
  onResizeStart?: () => void; // 리사이즈 시작 이벤트
  onResizeEnd?: (height: number) => void; // 리사이즈 종료 이벤트 - height 매개변수 추가
}

export default function Footer({
  footerHeight,
  onToggleDrawer,
  onResizeHeight,
  onResizeStart,
  onResizeEnd
}: FooterProps) {
  const [isExpanded, setIsExpanded] = useState(false);   // D(1단) / W(2단) 모드 토글
  const [isDrawerOpen, setIsDrawerOpen] = useState(true); // 푸터 열기/닫기 토글
  const [footerDataList, setFooterDataList] = useState<FooterDataType[]>([]);
  const [currentHeight, setCurrentHeight] = useState(footerHeight);
  const { id, tenant_id, role_id } = useAuthStore();
  const { campaigns, setCampaigns } = useMainStore();
  const { useAlramPopup } = useEnvironmentStore();

  const { invalidateTreeMenuData } = useApiForGetTreeMenuDataForSideMenu();
  const { invalidateCampaignGroupTreeData } = useApiForGetTreeDataForCampaignGroupTab();

  const debouncedInvalidate = useCallback(
    debounce(() => {
      invalidateTreeMenuData();
      invalidateCampaignGroupTreeData();
    }, 500),
    [invalidateTreeMenuData, invalidateCampaignGroupTreeData]
  );

  useEffect(() => {
    initToasts();
  }, []);

  // 부모 컴포넌트에 열림/닫힘 상태 변경 알림
  useEffect(() => {
    if (onToggleDrawer) {
      onToggleDrawer(isDrawerOpen);
    }
  }, [isDrawerOpen, onToggleDrawer]);

  // D(1단) <-> W(2단) 전환
  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
    // 만약 닫혀 있었다면(32px 상태) W 모드 누를 때 자동 열기 (원치 않으면 제거)
    if (!isDrawerOpen) {
      setIsDrawerOpen(true);
      if (onToggleDrawer) {
        onToggleDrawer(true);
      }
    }
  };

  // 열기/닫기
  const toggleDrawer = () => {
    const newState = !isDrawerOpen;
    setIsDrawerOpen(newState);
    if (onToggleDrawer) {
      onToggleDrawer(newState);
    }
  };

  // 알림 모두 비우기 기능
  const handleClearNotifications = () => {
    setFooterDataList([]);
  };

  //캠페인 정보 조회 api 호출
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
    }
  });

  // Helper function to add a message to footerDataList
  const addMessageToFooterList = (time: string, type: string, message: string) => {
    if (message !== '') {
      setFooterDataList((prev) => [
        {
          time,
          type,
          message
        },
        ...prev.slice(0, 9) // 상위 10개만 보이게
      ]);
    }
  };

  const footerDataSet = useCallback((announce: string, command: string, data: any, kind: string,campaign_id: string, tempEventData: any): void => {
    //시간.
    const today = new Date();
    const _time = String(today.getHours()).padStart(2, '0') + ':' + String(today.getMinutes()).padStart(2, '0') + ':' + String(today.getSeconds()).padStart(2, '0');

    // Check if we need to invalidate tree menu data
    const shouldInvalidateTreeMenu = (
      // 캠페인 추가/수정/삭제
      (announce === '/pds/campaign' && ['INSERT', 'UPDATE', 'DELETE'].includes(command)) ||
      // 캠페인 상태 변경
      (announce === '/pds/campaign/status' && command === 'UPDATE') ||
      // 스킬 추가/수정/삭제
      (announce === '/pds/skill' && ['INSERT', 'UPDATE', 'DELETE'].includes(command)) ||
      // 캠페인 요구스킬 수정
      (announce === '/pds/campaign/skill' && command === 'UPDATE') ||
      // 상담사 리소스 수정/삭제
      (announce === 'update-agent' && ['UPDATE', 'DELETE'].includes(command))
    );

    // 필요한 경우 트리 메뉴 데이터 갱신
    if (shouldInvalidateTreeMenu) {
      debouncedInvalidate();
    }

    //타입.
    let _type = 'Event';
    if (kind === 'event') {
      _type = 'Event';
    } else if (kind === 'alram') {
      _type = 'Event';
    }

    //메시지.
    let _message = '';
    let _message2 = '';

    //운영설정>캠페인별 발신번호설정
    if (announce === '/pds/campaign/calling-number') {
      _message = '캠페인 : ';
      if (command === 'INSERT') {
        _message += '[' + campaign_id + '], 사용자 발신번호 설정 추가 성공';
      } else if (command === 'DELETE') {
        _message += '[' + campaign_id + '], 사용자 발신번호 설정 삭제 성공';
      } else if (command === 'UPDATE') {
        _message += '[' + campaign_id + '], 사용자 발신번호 설정 변경 성공';
      }
      addMessageToFooterList(_time, _type, _message);
    }
    //장비 사용, 장비 사용중지
    else if (announce === 'dialing-device') {
      if (command === 'UPDATE' && data['device_status'] === 'run') {
        _message = 'CIDS 작동중';
        // 커스텀 이벤트 발생 - 장비 상태 변경을 다른 컴포넌트에 알림
        const deviceStatusEvent = new CustomEvent('deviceStatusChange', {
          detail: {
            device_id: data['device_id'].toString(),
            device_status: 'run'
          }
        });
        window.dispatchEvent(deviceStatusEvent);
        addMessageToFooterList(_time, _type, _message);
      } else if (command === 'UPDATE' && data['device_status'] === 'down') {
        _message = 'CIDS 작동중지';
        // 커스텀 이벤트 발생 - 장비 상태 변경을 다른 컴포넌트에 알림
        const deviceStatusEvent = new CustomEvent('deviceStatusChange', {
          detail: {
            device_id: data['device_id'].toString(),
            device_status: 'down'
          }
        });
        window.dispatchEvent(deviceStatusEvent);
        addMessageToFooterList(_time, _type, _message);
      }
    }
    //캠페인수정>콜페이싱 수정
    else if (announce === '/pds/campaign/dial-speed') {
      _message = '[콜페이싱] ';
      if (command === 'UPDATE') {
        const tempCampaign = campaigns.find((campaign) => campaign.campaign_id === Number(campaign_id));
        if (tempCampaign && tempCampaign.dial_mode === 2) {
          _message += '캠페인 아이디 ' + campaign_id + ' , 현재 설정값 ' + data['dial_speed'] * 2;
        } else {
          _message += '캠페인 아이디 ' + campaign_id + ' , 현재 설정값 ' + data['dial_speed'] * 2;
        }
        addMessageToFooterList(_time, _type, _message);
      }
    }
    //캠페인.
    else if (announce === '/pds/campaign') {
      _message = '캠페인 ';
      let _start_flag = '';
      if (data['start_flag'] === 1) {
        _start_flag = '시작';
      } else if (data['start_flag'] === 2) {
        _start_flag = '멈춤';
      } else if (data['start_flag'] === 3) {
        _start_flag = '중지';
      }
      let _end_flag = '';
      if (data['end_flag'] === 1) {
        _end_flag = '진행중';
      } else if (data['end_flag'] === 2) {
        _end_flag = '완료';
      }

      if (command === 'INSERT') {
        _message += '추가, 캠페인 아이디 : ' + campaign_id + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag;
        _message2 = `[EVENT] [${campaign_id}] 캠페인 추가`;

        // 캠페인 추가 시 토스트 메시지
        if (useAlramPopup === 1) {
          toast.event(_message2, {
            duration: 6000
          });
        }
        addMessageToFooterList(_time, _type, _message);
      } else if (command === 'UPDATE') {
        _message += '수정, 캠페인 아이디 : ' + campaign_id + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag;
        _message2 = `[EVENT] [${campaign_id}] 캠페인 수정`;

        // 캠페인 수정 시 토스트 메시지
        if (useAlramPopup === 1) {
          toast.event(_message2, {
            duration: 6000
          });
        }
        addMessageToFooterList(_time, _type, _message);
      } else if (command === 'DELETE') {
        _message += '삭제, 캠페인 아이디 : ' + campaign_id;
        _message2 = `[EVENT] [${campaign_id}] 캠페인 삭제`;

        // 캠페인 삭제 시 토스트 메시지
        if (useAlramPopup === 1) {
          toast.event(_message2, {
            duration: 6000
          });
        }
        addMessageToFooterList(_time, _type, _message);
      }

      fetchMain({
        session_key: '',
        tenant_id: tenant_id,
      });

      if (data['start_flag'] === 3) {
        const statusMessage = '캠페인 동작상태 변경, 캠페인 아이디 : ' + campaign_id + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag;

        // 알림 설정이 활성화되어 있으면 토스트 표시
        if (useAlramPopup === 1) {
          toast.event(`[EVENT] [${campaign_id}] 캠페인 상태 변경`, {
            duration: 6000,
          });
        }

        // 이미 위에서 메시지를 추가했으므로 여기서는 추가하지 않음
      }
    }
    //스킬.
    else if (announce === '/pds/skill/agent-list') {
      const tempAgentIdList = data['agent_id'];
      const _skillId = data['skill_id'];

      if (tempAgentIdList && tempAgentIdList.length > 0) {
        let actionType = '';
        if (command === 'UPDATE' || command === 'INSERT') {
          actionType = '할당';
        } else if (command === 'DELETE') {
          actionType = '해제';
        }

        const _message = '[EVENT] 상담사 스킬 ' + actionType;
        addMessageToFooterList(_time, _type, _message);

        // 토스트 알림은 한 번만 표시
        if (useAlramPopup === 1) {
          toast.event(`[EVENT] [${_skillId}] 상담사 스킬 ${actionType}`, {
            duration: 6000
          });
        }
      }
    }
    //스킬편집
    else if (announce === '/pds/skill') {
      _message = '[스킬 ';
      if (command === 'INSERT') {
        _message += '추가] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
      } else if (command === 'UPDATE') {
        _message += '변경] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
      } else if (command === 'DELETE') {
        _message += '삭제] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
      }
      addMessageToFooterList(_time, _type, _message);
    }
    //캠페인 요구스킬 수정
    else if (announce === '/pds/campaign/skill') {
      if (command === 'UPDATE') {
        _message = '캠페인 요구스킬 수정, 캠페인 아이디 : ' + campaign_id;
        addMessageToFooterList(_time, _type, _message);
      }
    }
    //상담사 자원 수정/삭제
    else if (announce === 'update-agent') {
      _message = '[상담사 자원 ';
      if (command === 'UPDATE') {
        _message += '수정] 상담사 아이디 : ' + data['employee_id'] + ' , 상담사 이름 : ' + data['agent_name'];
      } else if (command === 'DELETE') {
        _message += '삭제] 상담사 아이디 : ' + data['employee_id'] + ' , 상담사 이름 : ' + data['agent_name'];
      }
      addMessageToFooterList(_time, _type, _message);
    }
    //캠페인수정>동작시간 추가
    else if (announce === '/pds/campaign/schedule') {
      _message = '캠페인 스케쥴';
      if (command === 'INSERT') {
        _message += '수정, 캠페인 아이디 : ' + campaign_id + ' , 캠페인 이름 : ' + data['campaign_name'];
        addMessageToFooterList(_time, _type, _message);
      }
      else if (command === 'UPDATE') {
        _message += '변경, 캠페인 아이디 : ' + campaign_id + ' , 캠페인 이름 : ' + data['campaign_name'];
        addMessageToFooterList(_time, _type, _message);
      }
      else if (command === 'DELETE') {
        _message += '삭제, 캠페인 아이디 : ' + campaign_id + ' , 캠페인 이름 : ' + data['campaign_name'];
        addMessageToFooterList(_time, _type, _message);
      }
    }
    //캠페인 동작상태 변경
    else if (announce === '/pds/campaign/status') {
      if (command === 'UPDATE') {
        let _start_flag = '';
        if (data['campaign_status'] === 1) {
          _start_flag = '시작';
        } else if (data['campaign_status'] === 2) {
          _start_flag = '멈춤';
        } else if (data['campaign_status'] === 3) {
          _start_flag = '중지';
        }

        // 푸터 로그 메시지
        _message = '캠페인 동작상태 변경, 캠페인 아이디 : ' + campaign_id + ', 동작상태: ' + _start_flag + ', 완료구분: 진행중';
        
        // 토스트 알림 표시 (한번만 표시)
        if (useAlramPopup === 1) {
          toast.event(`[EVENT] [${campaign_id}] 캠페인 상태 변경`, {
            duration: 6000,
          });
        }

        // 푸터 데이터 리스트에 추가
        addMessageToFooterList(_time, _type, _message);
      }
    }
    //발신리스트등록
    else if (announce === '/pds/campaign/calling-list') {
      if (command === 'INSERT') {
        let list_flag = '';
        if (data['list_flag'] === 'I') {
          list_flag = '신규리스트';
        } else if (data['list_flag'] === 'A') {
          list_flag = '추가리스트';
        } else if (data['list_flag'] === 'D') {
          list_flag = '삭제리스트';
        } else if (data['list_flag'] === 'L') {
          list_flag = '초기화';
        }
        _message = '발신리스트등록, 캠페인 아이디 : ' + campaign_id + ' , 리스트구분 : ' + list_flag;
        _message2 = `[EVENT] [${campaign_id}] 발신리스트 ${list_flag} 등록`;

        // 토스트 알림 표시
        if (useAlramPopup === 1) {
          toast.event(_message2, {
            duration: 6000
          });
        }

        addMessageToFooterList(_time, _type, _message);
      }
    }

  }, [campaigns, fetchMain, useAlramPopup, debouncedInvalidate, tenant_id]);

  // SSE 구독
  useEffect(() => {
    // 브라우저 환경인지 확인
    if (typeof window !== 'undefined' && window.EventSource && id !== '') {
      const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
      console.info(">>>>설정값: ", process.env.NEXT_PUBLIC_API_URL)
      const eventSource = new EventSource(
        `/notification/${tenant_id}/subscribe/${id}`
        // `${DOMAIN}/notification/${tenant_id}/subscribe/${id}`
      );

      let data: any = {};
      let announce = "";
      let command = "";
      let kind = "";
      let campaign_id = "";

      eventSource.addEventListener('message', (event) => {
        console.log("footer sse event = ", event.data);

        if (event.data !== "Connected!!") {
          const tempEventData = JSON.parse(event.data);
          if (
            announce !== tempEventData["announce"] ||
            !isEqual(data, tempEventData.data) ||
            !isEqual(data, tempEventData["data"]) ||
            kind !== tempEventData["kind"] ||
            campaign_id !== tempEventData["campaign_id"]
          ) {
            announce = tempEventData["announce"];
            command = tempEventData["command"];
            data = tempEventData["data"];
            kind = tempEventData["kind"];
            campaign_id = tempEventData["campaign_id"];

            footerDataSet(
              tempEventData["announce"],
              tempEventData["command"],
              tempEventData["data"],
              tempEventData["kind"],
              tempEventData["campaign_id"],
              tempEventData
            );
          }
        }
      });
    }
  }, [id, tenant_id, role_id]);


  // 높이 변경 핸들러
  const handleResizeStop = (e: any, direction: any, ref: any, d: any) => {
    const newHeight = currentHeight + d.height;
    setCurrentHeight(newHeight);

    if (onResizeHeight) {
      onResizeHeight(newHeight);
    }

    if (onResizeEnd) {
      onResizeEnd(newHeight);
    }
  };

  return (
    <Resizable
      size={{
        width: '100%',
        height: isDrawerOpen ? currentHeight : 32
      }}
      minHeight={100}
      maxHeight={500}
      enable={{
        top: isDrawerOpen,
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false
      }}
      className={`
        border-t text-sm text-gray-600 bg-[#FBFBFB] flex flex-col duration-300 ease-in-out group relative h-[1px] before:content-[''] before:absolute hover:before:bg-[#5BC2C1]
        ${isExpanded ? "fixed left-0 right-0 bottom-0 z-50" : "relative"}
      `}
      onResizeStart={onResizeStart}
      onResizeStop={handleResizeStop}
    >
      {/* 상단 바 영역 */}
      <div className="flex-none pt-[5px] pb-[4px] px-[20px] border-b bg-white flex justify-between items-center">
        <div className="flex items-center gap-1">
          <span className="text-[13px] text-[#333]">현재 진행 상태 </span>
          <span className="text-[12px] text-[#666] bg-gray-100 px-1 rounded">
            {footerDataList.length > 0 ? (
              <span className="text-[#666] bg-gray-100 px-1 rounded">
                {footerDataList.length}건
              </span>
            ) : (
              <span className="text-[#666] bg-gray-100 px-1 rounded">
                0건
              </span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {useAlramPopup === 1 ? (
            <>
              <span title="알림 활성화">
                <Bell className="w-4 h-4 text-blue-500" />
              </span>
              <button onClick={handleClearNotifications} title="알림 모두 비우기">
                <Trash className="w-4 h-4 text-gray-500" />
              </button>
            </>
          ) : (
            <span title="알림 비활성화">
              <BellOff className="w-4 h-4 text-gray-400" />
            </span>
          )}

          {/* 열기/닫기 버튼 */}
          <button
            onClick={toggleDrawer}
            className=""
            title={isDrawerOpen ? "닫기" : "열기"}
          >
            {isDrawerOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* 푸터 내부 콘텐츠: isDrawerOpen이 true일 때만 렌더링 */}
      {isDrawerOpen && (
        <div className="flex-1 flex overflow-hidden">
          {/* D(1단) -> w-full, W(2단) -> w-1/2 + 오른쪽 테이블 */}
          <div
            className={`
              ${isExpanded ? "w-1/2" : "w-full"}
              overflow-auto py-[7px] px-[20px]
              ${isExpanded ? "border-r" : ""}
            `}
          >
            <table className="w-full text-sm">
              <tbody>
                {footerDataList.map((log, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
                    <td className="whitespace-nowrap text-[13px] px-1 hidden">[{log.type}]</td>
                    <td className="text-[13px]">{log.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 2단(W) 모드일 때만 오른쪽 테이블 표시 */}
          {/* {isExpanded && (
            <div className="w-1/2 overflow-auto py-[7px] px-[20px]">
              <table className="w-full text-sm">
                <tbody>
                  {footerDataList.map((log, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
                      <td className="whitespace-nowrap text-[13px] px-1 hidden">[{log.type}]</td>
                      <td className="text-[13px]">{log.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )} */}
        </div>
      )}
    </Resizable>
  );
}