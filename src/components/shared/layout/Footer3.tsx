import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, Trash, Signal } from "lucide-react";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [currentHeight, setCurrentHeight] = useState(footerHeight);

  // useSseSubscribe 훅 사용
  const { footerDataList, clearAllMessages, isConnected } = useSseSubscribe();

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

  // 열기/닫기
  const toggleDrawer = () => {
    const newState = !isDrawerOpen;
    setIsDrawerOpen(newState);
    if (onToggleDrawer) {
      onToggleDrawer(newState);
    }
  };

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
      <div className="flex-none pt-[5px] pb-[4px] pl-[15px] pr-[15px] border-b bg-white flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[13px] text-[#333]">현재 진행 상태</span>
          
          {/* 연결 상태 아이콘 - 연결되면 표시 */}
          {isConnected && (
            <span className="ml-[5px] flex items-center text-[12px] text-green-600" title="SSE 연결됨">
              <Signal size={14} className="mr-1" />
              {/* 연결됨 */}
            </span>
          )}
        </div>

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