
import { useState, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown, Trash, Signal, Bell } from "lucide-react";
import { Resizable } from "re-resizable";
import { initToasts } from './CustomToast';
import CommonMiniButton from "../CommonMiniButton";
import { useSseSubscribe } from '@/features/auth/hooks/useSseSubscribe';

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
  // 모든 상태는 컴포넌트 최상위 레벨에서 선언
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [currentHeight, setCurrentHeight] = useState(footerHeight);
  const [previousHeight, setPreviousHeight] = useState(footerHeight);
  const [autoAdjustHeight, setAutoAdjustHeight] = useState(false);

  // useSseSubscribe 훅 사용 - 항상 최상위 레벨에서만 호출
  const { footerDataList, clearAllMessages, isConnected } = useSseSubscribe();

  // Toast 컨테이너 초기화
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
  
  // 메시지 목록이 변경되어도 자동 높이 조정하지 않음
  // (빈 의존성 배열을 사용하지 않고, 명시적으로 의존성을 표시)
  useEffect(() => {
    // 자동 조정 모드가 비활성화되면 아무 것도 하지 않음
  }, [footerDataList.length, autoAdjustHeight, isDrawerOpen]);

  // 열기/닫기
  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(prevState => {
      const newState = !prevState;
      if (onToggleDrawer) {
        onToggleDrawer(newState);
      }
      return newState;
    });
  }, [onToggleDrawer]);

  // 높이 변경 핸들러 - 메모이제이션하여 성능 최적화
  const handleResizeStop = useCallback((e: MouseEvent | TouchEvent, direction: string, ref: HTMLElement, d: { height: number; width: number }) => {
    const newHeight = currentHeight + d.height;
    setCurrentHeight(newHeight);
    
    // 수동으로 높이 변경 시 자동 조정 모드 비활성화
    if (autoAdjustHeight) {
      setAutoAdjustHeight(false);
    }
    
    if (onResizeHeight) {
      onResizeHeight(newHeight);
    }
    
    if (onResizeEnd) {
      onResizeEnd(newHeight);
    }
  }, [currentHeight, autoAdjustHeight, onResizeHeight, onResizeEnd]);

  // 리사이즈 중 매 프레임마다 높이 업데이트 (드래그 중 실시간 반영)
  const handleResize = useCallback((e: MouseEvent | TouchEvent, direction: string, ref: HTMLElement) => {
    const height = parseInt(ref.style.height, 10);
    if (onResizeHeight) {
      onResizeHeight(height);
    }
  }, [onResizeHeight]);
  
  // 벨 아이콘 클릭 시 메시지 개수에 맞게 높이 조정 토글
  const handleBellClick = useCallback(() => {
    // 드로어가 닫혀있으면 열기
    if (!isDrawerOpen) {
      setIsDrawerOpen(true);
      if (onToggleDrawer) {
        onToggleDrawer(true);
      }
    }
    
    // 자동 조정 토글
    const newAutoAdjustState = !autoAdjustHeight;
    setAutoAdjustHeight(newAutoAdjustState);
    
    if (newAutoAdjustState) {
      // 현재 높이를 저장
      setPreviousHeight(currentHeight);
      
      // 메시지 개수에 따라 높이 계산
      const headerHeight = 35; // 헤더 높이
      const tablePadding = 20; // 테이블 패딩
      const messageHeight = 26; // 한 메시지 높이
      const extraSpace = 15; // 여유 공간
      
      // 새 높이 계산
      const newHeight = Math.max(
        headerHeight + tablePadding + (footerDataList.length * messageHeight) + extraSpace,
        100 // 최소 높이
      );
      
      // 상태 업데이트
      setCurrentHeight(newHeight);
      
      // 부모 컴포넌트에 알림
      if (onResizeHeight) {
        onResizeHeight(newHeight);
      }
      
      if (onResizeEnd) {
        onResizeEnd(newHeight);
      }
    } else {
      // 원래 높이로 복원
      setCurrentHeight(previousHeight);
      
      // 부모 컴포넌트에 알림
      if (onResizeHeight) {
        onResizeHeight(previousHeight);
      }
      
      if (onResizeEnd) {
        onResizeEnd(previousHeight);
      }
    }
  }, [footerDataList.length, isDrawerOpen, autoAdjustHeight, currentHeight, previousHeight, onToggleDrawer, onResizeHeight, onResizeEnd]);

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
        border-t text-sm text-gray-600 bg-[#FBFBFB] flex flex-col group relative h-[1px] before:content-[''] before:absolute hover:before:bg-[#5BC2C1]
        ${isExpanded ? "fixed left-0 right-0 bottom-0 z-50" : "relative"}
      `}
      onResizeStart={onResizeStart}
      onResize={handleResize}
      onResizeStop={handleResizeStop}
    >
      {/* 상단 바 영역 */}
      <div className="flex-none pt-[5px] pb-[4px] pl-[15px] pr-[15px] border-b bg-white flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[13px] text-[#333] mr-2">현재 진행 상태</span>
          
          {/* 알림 메시지 개수 표시 */}
          {footerDataList.length > 0 && (
            <div 
              className={`flex items-center py-[3px] px-[8px] rounded-full ${autoAdjustHeight ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'} cursor-pointer hover:bg-blue-50 transition-colors mr-2`}
              onClick={handleBellClick}
              title={autoAdjustHeight ? "자동 높이 조정 해제" : "메시지 개수에 맞게 높이 조정"}
            >
              <Bell size={13} className={`${autoAdjustHeight ? 'text-blue-500' : 'text-gray-500'} mr-1`} />
              <span className="text-[11px] font-medium">
                {footerDataList.length > 999 ? '999+' : footerDataList.length}
              </span>
            </div>
          )}
          
          {/* 연결 상태 아이콘 - 연결되면 표시 */}
          {isConnected && (
            <div className="flex items-center" title="SSE 연결됨">
              <Signal size={14} className="text-green-600" />
            </div>
          )}
        </div>

        <div className="flex items-center">
          {/* 모든 알림 삭제 버튼 */}
          <button
            onClick={clearAllMessages}
            title="모든 알림 삭제"
            className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
          >
            <Trash size={14} />
          </button>

          {/* 열기/닫기 버튼 */}
          <button
            onClick={toggleDrawer}
            title={isDrawerOpen ? "닫기" : "열기"}
            className="p-1 ml-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
          >
            {isDrawerOpen ? (
              <ChevronDown size={14} />
            ) : (
              <ChevronUp size={14} />
            )}
          </button>
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