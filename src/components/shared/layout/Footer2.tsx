'use client';

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronUp, ChevronDown, Bell, BellOff, Trash } from "lucide-react";
import { debounce, isEqual } from 'lodash';
import { useAuthStore, useMainStore } from '@/store';
import { Resizable } from "re-resizable";
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useEnvironmentStore } from "@/store/environmentStore";
import { toast, initToasts } from "./CustomToast";
import { useApiForGetTreeMenuDataForSideMenu } from "@/features/auth/hooks/useApiForGetTreeMenuDataForSideMenu";
import { useApiForGetTreeDataForCampaignGroupTab } from "@/features/campaignManager/hooks/useApiForGetTreeDataForCampaignGroupTab";
import { useSSEStore } from "@/store/useSSEStore";
import { cn } from "@/lib/utils";

type FooterDataType = {
  time: string;
  type: string;
  message: string;
};

interface FooterProps {
  footerHeight: number;
  startResizing?: () => void;
  onToggleDrawer?: (isOpen: boolean) => void;
  onResizeHeight?: (height: number) => void;
  onResizeStart?: () => void;
  onResizeEnd?: (height: number) => void;
}

export default function Footer({
  footerHeight,
  onToggleDrawer,
  onResizeHeight,
  onResizeStart,
  onResizeEnd
}: FooterProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [footerDataList, setFooterDataList] = useState<FooterDataType[]>([]);
  const [currentHeight, setCurrentHeight] = useState(footerHeight);
  const { id, tenant_id, role_id } = useAuthStore();
  const { campaigns, setCampaigns } = useMainStore();
  const { useAlramPopup } = useEnvironmentStore();
  const [isResizing, setIsResizing] = useState(false);
  const [isHeightToggled, setIsHeightToggled] = useState(false);

  const { invalidateTreeMenuData } = useApiForGetTreeMenuDataForSideMenu();
  const { invalidateCampaignGroupTreeData } = useApiForGetTreeDataForCampaignGroupTab();

  const { initSSE, closeSSE, getConnectionInfo } = useSSEStore();

  const lastProcessedMessageRef = useRef<string | null>(null);

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

  useEffect(() => {
    if (onToggleDrawer) {
      onToggleDrawer(isDrawerOpen);
    }
  }, [isDrawerOpen, onToggleDrawer]);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
    if (!isDrawerOpen) {
      setIsDrawerOpen(true);
      if (onToggleDrawer) {
        onToggleDrawer(true);
      }
    }
  };

  const toggleDrawer = () => {
    const newState = !isDrawerOpen;
    setIsDrawerOpen(newState);
    if (onToggleDrawer) {
      onToggleDrawer(newState);
    }
  };

  const handleClearNotifications = () => {
    setFooterDataList([]);
  };

  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
    }
  });

  const addMessageToFooterList = (time: string, type: string, message: string) => {
    if (message !== '') {
      setFooterDataList((prev) => [
        {
          time,
          type,
          message
        },
        ...prev.slice(0, 9)
      ]);
    }
  };

  const footerDataSet = useCallback((announce: string, command: string, data: any, kind: string, campaign_id: string, skill_id: string, tempEventData: any): void => {
    const today = new Date();
    const _time = String(today.getHours()).padStart(2, '0') + ':' + String(today.getMinutes()).padStart(2, '0') + ':' + String(today.getSeconds()).padStart(2, '0');

    const shouldInvalidateTreeMenu = (
      (announce === '/pds/campaign' && ['INSERT', 'UPDATE', 'DELETE'].includes(command)) ||
      (announce === '/pds/campaign/status' && command === 'UPDATE') ||
      (announce === '/pds/skill' && ['INSERT', 'UPDATE', 'DELETE'].includes(command)) ||
      (announce === '/pds/campaign/skill' && command === 'UPDATE') ||
      (announce === 'update-agent' && ['UPDATE', 'DELETE'].includes(command))
    );

    if (shouldInvalidateTreeMenu) {
      debouncedInvalidate();
    }

    let _type = 'Event';
    if (kind === 'event') {
      _type = 'Event';
    } else if (kind === 'alram') {
      _type = 'Event';
    }

    let _message = '';
    let _message2 = '';

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
    else if (announce === 'dialing-device') {
      if (command === 'UPDATE' && data['device_status'] === 'run') {
        _message = 'CIDS 작동중';
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

        if (useAlramPopup === 1) {
          toast.event(_message2, {
            duration: 6000
          });
        }
        addMessageToFooterList(_time, _type, _message);
      } else if (command === 'UPDATE') {
        _message += '수정, 캠페인 아이디 : ' + campaign_id + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : ' + _start_flag + ', 완료구분 : ' + _end_flag;
        _message2 = `[EVENT] [${campaign_id}] 캠페인 수정`;

        if (useAlramPopup === 1) {
          toast.event(_message2, {
            duration: 6000
          });
        }
        addMessageToFooterList(_time, _type, _message);
      } else if (command === 'DELETE') {
        _message += '삭제, 캠페인 아이디 : ' + campaign_id;
        _message2 = `[EVENT] [${campaign_id}] 캠페인 삭제`;

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

        if (useAlramPopup === 1) {
          toast.event(`[EVENT] [${campaign_id}] 캠페인 상태 변경`, {
            duration: 6000,
          });
        }
      }
    }
    else if (announce === '/pds/skill/agent-list') {
      const tempAgentIdList = data['agent_id'];
      const _skillId = skill_id;

      if (tempAgentIdList && tempAgentIdList.length > 0) {
        let actionType = '';
        if (command === 'UPDATE' || command === 'INSERT') {
          actionType = '할당';
        } else if (command === 'DELETE') {
          actionType = '해제';
        }

        const _message = '[EVENT] 상담사 스킬 ' + actionType;
        addMessageToFooterList(_time, _type, _message);

        if (useAlramPopup === 1) {
          toast.event(`[EVENT] [${_skillId}] 상담사 스킬 ${actionType}`, {
            duration: 6000
          });
        }
      }
    }
    else if (announce === '/pds/skill') {
      _message = '[스킬 ';
      if (command === 'INSERT') {
        _message += '추가] 스킬 아이디 : ' + skill_id + ' , 스킬 이름 : ' + data['skill_name'];
      } else if (command === 'UPDATE') {
        _message += '변경] 스킬 아이디 : ' + skill_id + ' , 스킬 이름 : ' + data['skill_name'];
      } else if (command === 'DELETE') {
        _message += '삭제] 스킬 아이디 : ' + skill_id + ' , 스킬 이름 : ' + data['skill_name'];
      }
      addMessageToFooterList(_time, _type, _message);
    }
    else if (announce === '/pds/campaign/skill') {
      if (command === 'UPDATE') {
        _message = '캠페인 요구스킬 수정, 캠페인 아이디 : ' + campaign_id;
        addMessageToFooterList(_time, _type, _message);
      }
    }
    else if (announce === 'update-agent') {
      _message = '[상담사 자원 ';
      if (command === 'UPDATE') {
        _message += '수정] 상담사 아이디 : ' + data['employee_id'] + ' , 상담사 이름 : ' + data['agent_name'];
      } else if (command === 'DELETE') {
        _message += '삭제] 상담사 아이디 : ' + data['employee_id'] + ' , 상담사 이름 : ' + data['agent_name'];
      }
      addMessageToFooterList(_time, _type, _message);
    }
    else if (announce === '/pds/campaign/schedule') {
      _message = '캠페인 스케쥴';
      if (command === 'INSERT') {
        _message += '수정, 캠페인 아이디 : ' + campaign_id;
        addMessageToFooterList(_time, _type, _message);
      }
      else if (command === 'UPDATE') {
        _message += '변경, 캠페인 아이디 : ' + campaign_id;
        addMessageToFooterList(_time, _type, _message);
      }
      else if (command === 'DELETE') {
        _message += '삭제, 캠페인 아이디 : ' + campaign_id;
        addMessageToFooterList(_time, _type, _message);
      }
    }
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

        _message = '캠페인 동작상태 변경, 캠페인 아이디 : ' + campaign_id + ', 동작상태: ' + _start_flag + ', 완료구분: 진행중';

        if (useAlramPopup === 1) {
          toast.event(`[EVENT] [${campaign_id}] 캠페인 상태 변경`, {
            duration: 6000,
          });
        }

        addMessageToFooterList(_time, _type, _message);
      }
    }
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

        if (useAlramPopup === 1) {
          toast.event(_message2, {
            duration: 6000
          });
        }

        addMessageToFooterList(_time, _type, _message);
      }
    }
  }, [campaigns, fetchMain, useAlramPopup, debouncedInvalidate, tenant_id]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleBeforeUnload = () => {
        localStorage.removeItem('SSE_ACTIVE_CONNECTION');
        localStorage.removeItem('SSE_CONNECTION_URL');
        localStorage.removeItem('SSE_CONNECTED_AT');
      };
      
      window.addEventListener('beforeunload', handleBeforeUnload);
      
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.EventSource && id !== '') {
      const url = `/notification/${tenant_id}/subscribe/${id}`;
      
      const activeConnection = localStorage.getItem('SSE_ACTIVE_CONNECTION');
      const connectionUrl = localStorage.getItem('SSE_CONNECTION_URL');
      const connectionTimestamp = localStorage.getItem('SSE_CONNECTED_AT');
      
      if (activeConnection && connectionUrl === url && connectionTimestamp) {
        const lastConnected = new Date(connectionTimestamp).getTime();
        const now = new Date().getTime();
        const timeDiff = now - lastConnected;
        
        if (timeDiff < 600000) {
          return;
        } else {
          localStorage.removeItem('SSE_ACTIVE_CONNECTION');
          localStorage.removeItem('SSE_CONNECTION_URL');
          localStorage.removeItem('SSE_CONNECTED_AT');
        }
      }
      
      const eventSource = new EventSource(url);
      
      localStorage.setItem('SSE_ACTIVE_CONNECTION', 'true');
      localStorage.setItem('SSE_CONNECTION_URL', url);
      localStorage.setItem('SSE_CONNECTED_AT', new Date().toISOString());
      
      let data: any = {};
      let announce = "";
      let command = "";
      let kind = "";
      let campaign_id = "";
      
      eventSource.addEventListener('message', (event) => {
        if (event.data !== "Connected!!") {
          try {
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
                tempEventData["skill_id"] || "",
                tempEventData
              );
            }
          } catch (error) {
            console.error("SSE 메시지 파싱 오류:", error);
          }
        }
      });
      
      eventSource.onerror = () => {
        localStorage.removeItem('SSE_ACTIVE_CONNECTION');
        localStorage.removeItem('SSE_CONNECTION_URL');
        localStorage.removeItem('SSE_CONNECTED_AT');
      };
      
      return () => {
        eventSource.close();
        localStorage.removeItem('SSE_ACTIVE_CONNECTION');
        localStorage.removeItem('SSE_CONNECTION_URL');
        localStorage.removeItem('SSE_CONNECTED_AT');
      };
    }
  }, [id, tenant_id, footerDataSet]);

  const handleSSEMessage = (tempEventData: any) => {
    try {
      const { announce, command, data, kind, campaign_id, skill_id } = tempEventData;

      const messageId = `${announce}_${command}_${campaign_id}_${skill_id}_${JSON.stringify(data)}`;

      if (lastProcessedMessageRef.current === messageId) {
        return;
      }

      lastProcessedMessageRef.current = messageId;

      footerDataSet(
        announce,
        command,
        data,
        kind,
        campaign_id,
        skill_id,
        tempEventData
      );
    } catch (error) {
      console.error("SSE 메시지 처리 오류:", error);
    }
  };

  const logConnectionStatus = useCallback(() => {
    const connectionInfo = getConnectionInfo();
  }, [getConnectionInfo]);

  const handleResizeStartInternal = () => {
    setIsResizing(true);
    onResizeStart?.();
  };

  const handleResizing = (e: any, direction: any, ref: any, d: any) => {
    const newHeight = ref.offsetHeight;
    setCurrentHeight(newHeight);
    onResizeHeight?.(newHeight);
  };

  const handleResizeStop = (e: any, direction: any, ref: any, d: any) => {
    setIsResizing(false);
    const newHeight = ref.offsetHeight;
    setCurrentHeight(newHeight);
    onResizeHeight?.(newHeight);
    onResizeEnd?.(newHeight);
  };

  const handleToggleHeight = () => {
    const minRowHeight = 24;
    const padding = 60;
    const rowCount = footerDataList.length;
    const calculatedHeight = Math.min(500, Math.max(100, rowCount * minRowHeight + padding));

    setCurrentHeight(isHeightToggled ? 111 : calculatedHeight);
    onResizeHeight?.(isHeightToggled ? 111 : calculatedHeight);
    setIsHeightToggled(!isHeightToggled);
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
      className={cn(
        "border-t text-sm text-gray-600 bg-[#FBFBFB] flex flex-col group relative h-[1px]",
        isExpanded ? "fixed left-0 right-0 bottom-0 z-50" : "relative",
        !isResizing && "duration-300 ease-in-out",
      )}
      onResizeStart={handleResizeStartInternal}
      onResizeStop={handleResizeStop}
      onResize={handleResizing}
    >
      <div className="flex-none pt-[5px] pb-[4px] px-[20px] border-b bg-white flex justify-between items-center">
        <div className="flex items-center gap-1">
          <span className="text-[13px] text-[#333]">현재 진행 상태 </span>
          <span className="text-[12px] text-[#666] bg-gray-100 px-1 rounded">
            {footerDataList.length > 0 ? (
              <button
                onClick={handleToggleHeight}
                className="text-[12px] text-[#666] bg-gray-100 px-1 rounded cursor-pointer hover:bg-gray-200 transition"
              >
                {footerDataList.length}건
              </button>
            ) : (
              <span className="text-[12px] text-[#666] bg-gray-100 px-1 rounded">
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

      {isDrawerOpen && (
        <div className="flex-1 flex overflow-hidden">
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
        </div>
      )}
    </Resizable>
  );
}