

import { useState, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown, Trash } from "lucide-react";
import { isEqual } from 'lodash';
import { useAuthStore, useMainStore } from '@/store';
import { Resizable } from "re-resizable";
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useEnvironmentStore } from "@/store/environmentStore";
import { initToasts, toast } from './CustomToast';
import { useQueryClient } from "@tanstack/react-query";
import CommonMiniButton from "../CommonMiniButton";
import { FooterDataType, processEventMessage } from "./utils/eventMessageUtils";
import { themeColors } from "@/features/auth/hooks/useSseSubscribe";


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
  const { tenant_id, role_id } = useAuthStore();
  const { campaigns, setCampaigns } = useMainStore();
  const { useAlramPopup } = useEnvironmentStore(); // Get useAlramPopup value

  const queryClient = useQueryClient();

  useEffect(() => {
    const toastContainer = document.getElementById('headless-toast-container');
    if (!toastContainer) {
      initToasts();
      console.log('Toast container initialized from Footer component');
    }
  }, []);

  // 부모 컴포넌트에 열림/닫힘 상태 변경 알림
  useEffect(() => {
    if (onToggleDrawer) {
      onToggleDrawer(isDrawerOpen);
    }
  }, [isDrawerOpen, onToggleDrawer]);

  const clearAllMessages = () => {
    setFooterDataList([]);
  };

  // 열기/닫기
  const toggleDrawer = () => {
    const newState = !isDrawerOpen;
    setIsDrawerOpen(newState);
    if (onToggleDrawer) {
      onToggleDrawer(newState);
    }
  };

  // 캠페인 정보 조회 api 호출
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
    }
  });

  // 유틸리티 함수를 사용하여 이벤트 처리
  const footerDataSet = useCallback((announce: string, command: string, data: any, kind: string, tempEventData: any): void => {
    console.log("footerDataSet announce = ", announce);
    console.log("footerDataSet command = ", command);
    console.log("footerDataSet data = ", data);
    console.log("footerDataSet kind = ", kind);
    console.log("footerDataSet tempEventData = ", tempEventData);

    // 유틸리티 함수 호출하여 이벤트 처리 결과 가져오기
    const result = processEventMessage(
      announce,
      command,
      data,
      kind,
      campaigns,
      queryClient,
      tenant_id,
      role_id
    );

    // Footer 데이터 업데이트
    if (result.messageList && result.messageList.length > 0) {
      setFooterDataList((prev) => [
        ...result.messageList,
        ...prev.slice(0, Math.max(0, 10 - result.messageList.length))
      ]);
    }

    // 토스트 알림 처리 - useAlramPopup이 1일 경우에만
    if (useAlramPopup === 1 && result.toastMessage) {
      try {
        setTimeout(() => {
          toast.event(
            result.toastMessage,
            {
              colors: themeColors.event,
              duration: 5000
            }
          );
          console.log('Toast message triggered:', result.toastMessage);
        }, 0);
      } catch (err) {
        console.error('Error showing toast:', err);
      }
    }

    // 필요한 경우 캠페인 정보 다시 가져오기
    if (result.shouldFetchMain) {
      fetchMain({
        session_key: '',
        tenant_id: tenant_id,
      });
    }

    // 장비 상태 변경 이벤트 처리
    if (result.shouldFireDeviceEvent && result.deviceEventDetails) {
      const deviceStatusEvent = new CustomEvent('deviceStatusChange', {
        detail: {
          device_id: result.deviceEventDetails.device_id,
          device_status: result.deviceEventDetails.device_status
        }
      });
      window.dispatchEvent(deviceStatusEvent);
    }
  }, [campaigns, queryClient, tenant_id, role_id, useAlramPopup, fetchMain]);

  // SSE 구독
  useEffect(() => {
    const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
    const eventSource = new EventSource(
      `${DOMAIN}/api/v1/notification/${tenant_id}/subscribe`
    );

    let data: any = {};
    let announce = "";
    let command = "";
    let kind = "";

    eventSource.addEventListener("message", (event) => {
      console.log("footer sse event = ", event.data);
      if (event.data !== "Connected!!") {
        try {
          const tempEventData = JSON.parse(event.data);
          if (
            announce !== tempEventData["announce"] ||
            !isEqual(data, tempEventData.data) ||
            !isEqual(data, tempEventData["data"]) ||
            kind !== tempEventData["kind"]
          ) {
            announce = tempEventData["announce"];
            command = tempEventData["command"];
            data = tempEventData["data"];
            kind = tempEventData["kind"];

            footerDataSet(
              tempEventData["announce"],
              tempEventData["command"],
              tempEventData["data"],
              tempEventData["kind"],
              tempEventData
            );
          }
        } catch (err) {
          console.error('Error processing SSE event:', err);
        }
      }
    });

    // 에러 처리 추가
    eventSource.addEventListener("error", (err) => {
      console.error('SSE connection error:', err);
      // 재연결 시도 (선택적)
    });

    return () => {
      eventSource.close();
    };
  }, [tenant_id, role_id, footerDataSet]);

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

  useEffect(() => {
    if (campaigns && campaigns.length === 0) {
      fetchMain({
        session_key: '',
        tenant_id: tenant_id,
      });
    }
  }, [campaigns, fetchMain, tenant_id]);

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
      <div className="flex-none pt-[5px] pb-[4px] pl-[15px] pr-[15px] border-b bg-white flex justify-between items-center">
        <span className="text-[13px] text-[#333]">현재 진행 상태</span>

        <div className="flex items-center gap-[5px]">
          {/* 모든 알림 삭제 버튼 */}
          <CommonMiniButton
            onClick={clearAllMessages}
            title="모든 알림 삭제"
          >
            <Trash className="w-4 h-4" />
          </CommonMiniButton>

          {/* 열기/닫기 버튼 */}
          <CommonMiniButton
            onClick={toggleDrawer}
            title={isDrawerOpen ? "닫기" : "열기"}
          >
            {isDrawerOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </CommonMiniButton>
        </div>
      </div>

      {/* 푸터 내부 콘텐츠: isDrawerOpen이 true일 때만 렌더링 */}
      {isDrawerOpen && (
        <div className="flex-1 overflow-hidden">
          <div className="w-full h-full overflow-auto py-[7px] px-[20px]">
            <table className="w-full text-sm table-fixed">
              <tbody>
                {footerDataList.map((log, index) => (
                  <tr key={`log-${index}`}>
                    <td className="whitespace-nowrap text-[13px] w-[120px]">[{log.time}]</td>
                    <td className="whitespace-nowrap text-[13px] px-1 w-[100px]">[{log.type}]</td>
                    <td className="text-[13px] break-words">{log.message}</td>
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