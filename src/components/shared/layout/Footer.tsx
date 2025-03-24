import { useState, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { isEqual } from 'lodash';
import { useAuthStore, useMainStore } from '@/store';
import { Resizable } from "re-resizable";
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';

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
  const { tenant_id, role_id } = useAuthStore();
  const { campaigns, setCampaigns } = useMainStore();

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
  
  //캠페인 정보 조회 api 호출
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      setCampaigns(data.result_data);
    }
  });

  const footerDataSet = useCallback((announce: string, command: string, data: any, kind: string, tempEventData: any): void => {
    //시간.
    const today = new Date();
    const _time = String(today.getHours()).padStart(2, '0')+':'+String(today.getMinutes()).padStart(2, '0')+':'+String(today.getSeconds()).padStart(2, '0');
    //타입.
    let _type = 'Event';
    if( kind === 'event' ){
      _type = 'Event';
    }else if( kind === 'alram' ){
      _type = 'Event';
    }
    //메시지.
    let _message = '';
    //운영설정>캠페인별 발신번호설정
    if( announce === '/pds/campaign/calling-number' ){
      _message = '캠페인 : '
      if( command === 'INSERT' ){
        _message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 추가 성공';
      }else if( command === 'DELETE' ){
        _message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 삭제 성공';
      }else if( command === 'UPDATE' ){
        _message += '[' + data['campaign_id'] + '], 사용자 발신번호 설정 변경 성공';
      }
    }
    //장비 사용, 장비 사용중지
    else if( announce === 'dialing-device' ){
      if( command === 'UPDATE' && data['device_status'] === 'run' ){
        _message = 'CIDS 작동중';
        // 커스텀 이벤트 발생 - 장비 상태 변경을 다른 컴포넌트에 알림
        const deviceStatusEvent = new CustomEvent('deviceStatusChange', {
          detail: {
            device_id: data['device_id'].toString(),
            device_status: 'run'
          }
        });
        window.dispatchEvent(deviceStatusEvent);
      }else if( command === 'UPDATE' && data['device_status'] === 'down' ){
        _message = 'CIDS 작동중지';
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
    //캠페인수정>콜페이싱 수정
    else if( announce === '/pds/campaign/dial-speed' ){
      _message = '[콜페이싱] '
      if( command === 'UPDATE' ){
        const tempCampaign = campaigns.find((campaign) => campaign.campaign_id === data['campaign_id']);
        if( tempCampaign && tempCampaign.dial_mode === 2){
          _message += '캠페인 아이디 ' + data['campaign_id'] + ' , 현재 설정값 ' + data['dial_speed']*2;
        }else{
          _message += '캠페인 아이디 ' + data['campaign_id'] + ' , 현재 설정값 ' + data['dial_speed'];
        }
      }
    }
    //캠페인.
    else if( announce === '/pds/campaign' ){
      _message = '캠페인 '
      let _start_flag = '';
      if( data['start_flag'] === 1){
        _start_flag = '시작';
      }else if( data['start_flag'] === 2){
        _start_flag = '멈춤';
      }else if( data['start_flag'] === 3){
        _start_flag = '중지';
      }
      let _end_flag = '';
      if( data['end_flag'] === 1){
        _end_flag = '진행중';
      }else if( data['end_flag'] === 2){
        _end_flag = '완료';
      }
      if( command === 'INSERT' ){
        _message += '추가, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : '+_start_flag+', 완료구분 : '+_end_flag;
      }else if( command === 'UPDATE' ){
        _message += '수정, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : '+_start_flag+', 완료구분 : '+_end_flag;
      }else if( command === 'DELETE' ){
        _message += '삭제, 캠페인 아이디 : ' + data['campaign_id'];
      }
      fetchMain({
        session_key: '',
        tenant_id: tenant_id,
      });
      if( data['start_flag'] === 3){
        setFooterDataList((prev) => [
          {
            time: _time,
            type: _type,
            message: '캠페인 동작상태 변경, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : '+_start_flag+', 완료구분 : '+_end_flag
          },
          ...prev
        ]);
      }
    }
    //스킬.
    else if( announce === '/pds/skill/agent-list' ){
      const tempAgentIdList = data['agent_id'];
      const _skillId = data['skill_id'];
      const tempFooterDataList:FooterDataType[] = [];
      for( let i=0;i<tempAgentIdList.length;i++){
        let __message = '[스킬 '
        if( command === 'UPDATE' ){
          __message += '추가] 스킬 아이디 : ' + _skillId + ' , 상담원 아이디 : ' + tempAgentIdList[i];
        }else if( command === 'DELETE' ){
          __message += '해제] 스킬 아이디 : ' + _skillId + ' , 상담원 아이디 : ' + tempAgentIdList[i];
        }else if( command === 'INSERT' ){
          __message += '추가] 스킬 아이디 : ' + _skillId + ' , 상담원 아이디 : ' + tempAgentIdList[i];
        }
        tempFooterDataList.push({
          time: _time,
          type: _type,
          message: __message
        });
      }
      setFooterDataList((prev) => [
        ...tempFooterDataList,
        ...prev.slice(0, 9) // 상위 10개만 보이게.
      ]);
      _message = '';
    }
    //스킬편집
    else if( announce === '/pds/skill' ){
      _message = '[스킬 '
      if( command === 'INSERT' ){
        _message += '추가] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
      }else if( command === 'DELETE' ){
        _message += '삭제] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
      }else if( command === 'UPDATE' ){
        _message += '수정] 스킬 아이디 : ' + data['skill_id'] + ' , 스킬 이름 : ' + data['skill_name'];
      }
    }
    //캠페인 요구스킬 수정
    else if( announce === '/pds/campaign/skill' ){
      _message = '캠페인 요구스킬 '
      if( command === 'UPDATE' ){
        _message += '수정, 캠페인 아이디 : ' + data['campaign_id'];
      }else{
        _message = '';
      }
    }
    //캠페인수정>동작시간 추가
    else if( announce === '/pds/campaign/schedule' ){
      _message = '캠페인 스케쥴'
      if( command === 'INSERT' ){
        _message += '수정, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'];
      }else{
        _message = '';
      }
    }
    if( _message !== ''){
      setFooterDataList((prev) => [
        {
          time: _time,
          type: _type,
          message: _message
        },
        ...prev.slice(0, 9) // 상위 10개만 보이게.
      ]);
    }
  }, [setFooterDataList]);

  // SSE 구독
  useEffect(() => {
    // if ( role_id < 4 ) {
    //   console.log("No tenant ID available, skipping SSE connection");
    //   return;
    // }
    // let tenantData = tenant_id;
    // if( role_id !== 4){
    //   tenantData = 0;
    // }
    const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
    const eventSource = new EventSource(
      `${DOMAIN}/api/v1/notification/${tenant_id}/subscribe`
    );
    
    let data: any = {};
    let announce = "";
    let command = "";
    let kind = "";

    eventSource.addEventListener("message", (event) => {
      //실시간 이벤트를 받아서 처리(함수로 처리하면 좋을 듯)
      console.log("footer sse event = ", event.data);
      if (event.data !== "Connected!!") {
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
      }
    });
    return () => {
      eventSource.close();
    };
  }, [tenant_id, role_id]);

  // 높이 변경 핸들러
  const handleResizeStop = (e: any, direction: any, ref: any, d: any) => {
    const newHeight = currentHeight + d.height;
    setCurrentHeight(newHeight);
    
    if (onResizeHeight) {
      onResizeHeight(newHeight);
    }
    
    if (onResizeEnd) {
      onResizeEnd(newHeight); // 수정: 높이 값을 인자로 전달
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
        border-t text-sm text-gray-600 bg-[#FBFBFB] flex flex-col transition-all duration-300 ease-in-out group relative h-[1px] before:content-[''] before:absolute hover:before:bg-[#5BC2C1]
        ${isExpanded ? "fixed left-0 right-0 bottom-0 z-50" : "relative"}
      `}
      onResizeStart={onResizeStart}
      onResizeStop={handleResizeStop}
    >
      {/* 상단 바 영역 */}
      <div className="flex-none pt-[5px] pb-[4px] px-[20px] border-b bg-white flex justify-between items-center">
        <span className="text-[13px] text-[#333]">현재 진행 상태</span>

        <div className="flex items-center gap-2">
          {/* 모드 전환 버튼 - 아이콘으로 변경 */}
          <button
            onClick={toggleExpanded}
            className="flex items-center"
            title={isExpanded ? "default mode" : "wide mode"}
          >
            {isExpanded ? (
              <PanelLeftOpen className="w-4 h-4" />
            ) : (
              <PanelLeftClose className="w-4 h-4" />
            )}
          </button>

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
                    <td className="whitespace-nowrap text-[13px] px-1">[{log.type}]</td>
                    <td className="text-[13px]">{log.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 2단(W) 모드일 때만 오른쪽 테이블 표시 */}
          {isExpanded && (
            <div className="w-1/2 overflow-auto py-[7px] px-[20px]">
              <table className="w-full text-sm">
                <tbody>
                  {footerDataList.map((log, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
                      <td className="whitespace-nowrap text-[13px] px-1">[{log.type}]</td>
                      <td className="text-[13px]">{log.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </Resizable>
  );
}

// import { useState, useEffect, useCallback, useRef } from "react";
// import { ChevronUp, ChevronDown, PanelLeftClose, PanelLeftOpen } from "lucide-react";
// import { isEqual } from 'lodash';
// import { useAuthStore } from '@/store';

// type FooterDataType = {
//   time: string;
//   type: string;
//   message: string;
// };

// interface FooterProps {
//   footerHeight: number;
//   onToggleDrawer?: (isOpen: boolean) => void;
//   onResizeHeight?: (height: number) => void;
//   onResizeStart?: () => void;
//   onResizeEnd?: (height: number) => void;
// }

// export default function Footer({ 
//   footerHeight, 
//   onToggleDrawer, 
//   onResizeHeight,
//   onResizeStart,
//   onResizeEnd
// }: FooterProps) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(true);
//   const [footerDataList, setFooterDataList] = useState<FooterDataType[]>([]);
//   const [currentHeight, setCurrentHeight] = useState(footerHeight);
//   const { tenant_id, role_id } = useAuthStore();
  
//   // References for optimization
//   const footerRef = useRef<HTMLDivElement>(null);
//   const resizeHandleRef = useRef<HTMLDivElement>(null);
//   const isResizingRef = useRef(false);
//   const startPosRef = useRef(0);
//   const startHeightRef = useRef(currentHeight);
//   const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
//   // Toggle drawer
//   const toggleDrawer = useCallback(() => {
//     const newState = !isDrawerOpen;
//     setIsDrawerOpen(newState);
//     onToggleDrawer?.(newState);
//   }, [isDrawerOpen, onToggleDrawer]);
  
//   // Toggle expanded mode
//   const toggleExpanded = useCallback(() => {
//     setIsExpanded((prev) => !prev);
//     if (!isDrawerOpen) {
//       setIsDrawerOpen(true);
//       onToggleDrawer?.(true);
//     }
//   }, [isDrawerOpen, onToggleDrawer]);

//   // Process event data
//   const footerDataSet = useCallback((announce: string, command: string, data: any, kind: string): void => {
//     // Create timestamp
//     const today = new Date();
//     const _time = String(today.getHours()).padStart(2, '0') + ':' + 
//                  String(today.getMinutes()).padStart(2, '0') + ':' + 
//                  String(today.getSeconds()).padStart(2, '0');
    
//     // Set type
//     const _type = kind === 'event' || kind === 'alram' ? 'Event' : 'Event';
    
//     // Format message based on announce type
//     let _message = '';
    
//     // Process based on announce type
//     if (announce === '/pds/campaign/calling-number') {
//       _message = `캠페인 : [${data['campaign_id']}], 사용자 발신번호 설정 ${
//         command === 'INSERT' ? '추가' : 
//         command === 'DELETE' ? '삭제' : 
//         command === 'UPDATE' ? '변경' : ''
//       } 성공`;
//     } 
//     else if (announce === 'dialing-device') {
//       if (command === 'UPDATE') {
//         _message = `CIDS ${data['device_status'] === 'run' ? '작동중' : '작동중지'}`;
        
//         // Dispatch device status change event
//         const deviceStatusEvent = new CustomEvent('deviceStatusChange', {
//           detail: {
//             device_id: data['device_id'].toString(),
//             device_status: data['device_status']
//           }
//         });
//         window.dispatchEvent(deviceStatusEvent);
//       }
//     }
//     // Add other condition handlers (excluded for brevity)
    
//     // Update footer data list if message exists
//     if (_message !== '') {
//       setFooterDataList(prev => [
//         {
//           time: _time,
//           type: _type,
//           message: _message
//         },
//         ...prev.slice(0, 9) // Keep only the top 10 messages
//       ]);
//     }
//   }, []);

//   // SSE subscription
//   useEffect(() => {
//     if (role_id < 4) {
//       console.log("No tenant ID available, skipping SSE connection");
//       return;
//     }
    
//     const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
//     const eventSource = new EventSource(
//       `${DOMAIN}/api/v1/notification/${tenant_id}/subscribe`
//     );
    
//     let prevData: any = {};
//     let prevAnnounce = "";
//     let prevCommand = "";
//     let prevKind = "";

//     const handleMessage = (event: MessageEvent) => {
//       if (event.data !== "Connected!!") {
//         try {
//           const eventData = JSON.parse(event.data);
//           const { announce, command, data, kind } = eventData;
          
//           // Only process if data changed
//           if (
//             announce !== prevAnnounce ||
//             !isEqual(data, prevData) ||
//             command !== prevCommand ||
//             kind !== prevKind
//           ) {
//             prevAnnounce = announce;
//             prevCommand = command;
//             prevData = data;
//             prevKind = kind;
            
//             footerDataSet(announce, command, data, kind);
//           }
//         } catch (error) {
//           console.error("Error processing SSE message:", error);
//         }
//       }
//     };

//     eventSource.addEventListener("message", handleMessage);
    
//     return () => {
//       eventSource.removeEventListener("message", handleMessage);
//       eventSource.close();
//     };
//   }, [tenant_id, role_id, footerDataSet]);

//   // Resize handlers
//   const handleResizeStart = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
//     e.preventDefault();
    
//     // Suspend transition effects
//     if (footerRef.current) {
//       footerRef.current.style.transition = 'none';
//     }
    
//     // Set initial values
//     isResizingRef.current = true;
//     startPosRef.current = e.clientY;
//     startHeightRef.current = currentHeight;
    
//     // Notify parent
//     onResizeStart?.();
    
//     // Prevent text selection
//     document.body.style.userSelect = 'none';
//   }, [currentHeight, onResizeStart]);

//   const handleMouseMove = useCallback((e: MouseEvent) => {
//     if (!isResizingRef.current) return;
    
//     // Calculate new height based on mouse movement
//     const delta = startPosRef.current - e.clientY;
//     const newHeight = Math.max(100, Math.min(500, startHeightRef.current + delta));
    
//     // Directly manipulate DOM for smooth performance
//     if (footerRef.current) {
//       footerRef.current.style.height = `${newHeight}px`;
//     }
    
//     // Debounce store updates for better performance
//     if (resizeTimeoutRef.current) {
//       clearTimeout(resizeTimeoutRef.current);
//     }
    
//     resizeTimeoutRef.current = setTimeout(() => {
//       onResizeHeight?.(newHeight);
//     }, 10);
//   }, [onResizeHeight]);

//   const handleMouseUp = useCallback(() => {
//     if (!isResizingRef.current) return;
    
//     isResizingRef.current = false;
    
//     // Restore transition effect
//     if (footerRef.current) {
//       footerRef.current.style.transition = '';
      
//       // Get final height from DOM
//       const computedStyle = window.getComputedStyle(footerRef.current);
//       const heightValue = computedStyle.height;
//       const newHeight = parseInt(heightValue, 10);
      
//       // Update state with final height
//       setCurrentHeight(newHeight);
//       onResizeHeight?.(newHeight);
//       onResizeEnd?.(newHeight);
//     }
    
//     // Clean up
//     document.body.style.userSelect = '';
    
//     if (resizeTimeoutRef.current) {
//       clearTimeout(resizeTimeoutRef.current);
//       resizeTimeoutRef.current = null;
//     }
//   }, [onResizeHeight, onResizeEnd]);

//   // Set up resize listeners
//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseup', handleMouseUp);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [handleMouseMove, handleMouseUp]);

//   return (
//     <div 
//       ref={footerRef}
//       className={`
//         border-gray-200 text-sm text-gray-600 bg-[#FBFBFB] flex flex-col relative
//         ${isExpanded ? "fixed left-0 right-0 bottom-0 z-50" : "relative"}
//         ${!isResizingRef.current ? "transition-all duration-300 ease-in-out" : ""}
//       `}
//       style={{ height: isDrawerOpen ? currentHeight : 32 }}
//     >
//       {/* Resize handle */}
//       {isDrawerOpen && (
//         <div
//           ref={resizeHandleRef}
//           className="absolute top-0 left-0 right-0 h-1 -mt-1 cursor-row-resize z-10 group/resize"
//           onMouseDown={handleResizeStart}
//         >
//           <div className="h-[1px] w-full bg-gray-300 group-hover/resize:bg-[#5BC2C1] group-active/resize:bg-[#5BC2C1]" />
//         </div>
//       )}
      
//       {/* Header bar */}
//       <div className="flex-none pt-[5px] pb-[4px] px-[20px] border-b bg-white flex justify-between items-center">
//         <span className="text-[13px] text-[#333]">현재 진행 상태</span>

//         <div className="flex items-center gap-2">
//           {/* Mode toggle button */}
//           <button
//             onClick={toggleExpanded}
//             className="flex items-center"
//             title={isExpanded ? "default mode" : "wide mode"}
//           >
//             {isExpanded ? (
//               <PanelLeftOpen className="w-4 h-4" />
//             ) : (
//               <PanelLeftClose className="w-4 h-4" />
//             )}
//           </button>

//           {/* Open/close button */}
//           <button 
//             onClick={toggleDrawer} 
//             className=""
//             title={isDrawerOpen ? "닫기" : "열기"}
//           >
//             {isDrawerOpen ? (
//               <ChevronDown className="w-4 h-4" />
//             ) : (
//               <ChevronUp className="w-4 h-4" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Footer content: only render when drawer is open */}
//       {isDrawerOpen && (
//         <div className="flex-1 flex overflow-hidden">
//           {/* Left panel (always visible) */}
//           <div
//             className={`
//               ${isExpanded ? "w-1/2" : "w-full"}
//               overflow-auto py-[7px] px-[20px]
//               ${isExpanded ? "border-r" : ""}
//             `}
//           >
//             <table className="w-full text-sm">
//               <tbody>
//                 {footerDataList.map((log, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
//                     <td className="whitespace-nowrap text-[13px] px-1">[{log.type}]</td>
//                     <td className="text-[13px]">{log.message}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Right panel (only in expanded mode) */}
//           {isExpanded && (
//             <div className="w-1/2 overflow-auto py-[7px] px-[20px]">
//               <table className="w-full text-sm">
//                 <tbody>
//                   {footerDataList.map((log, index) => (
//                     <tr key={index}>
//                       <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
//                       <td className="whitespace-nowrap text-[13px] px-1">[{log.type}]</td>
//                       <td className="text-[13px]">{log.message}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }