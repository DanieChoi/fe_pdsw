import { useState, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { isEqual } from 'lodash';
import { useAuthStore } from '@/store';

type FooterDataType = {
  time: string;
  type: string;
  message: string;
};

interface FooterProps {
  footerHeight: number;      // 열려 있을 때 푸터의 높이(px)
  startResizing?: () => void; // 드래그로 푸터 높이를 조절하기 위한 함수
  onToggleDrawer?: (isOpen: boolean) => void; // 부모 컴포넌트에 열림/닫힘 상태 전달
  onResizeHeight ? : any;
  onResizeStart ? : any;
  onResizeEnd ? : any;
}

export default function Footer({ footerHeight, startResizing, onToggleDrawer }: FooterProps) {
  const [isExpanded, setIsExpanded] = useState(false);   // D(1단) / W(2단) 모드 토글
  const [isDrawerOpen, setIsDrawerOpen] = useState(true); // 푸터 열기/닫기 토글
  const [footerDataList, setFooterDataList] = useState<FooterDataType[]>([]);
  const { tenant_id } = useAuthStore();

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
  
  const footerDataSet = useCallback((announce: string, command: string, data: any, kind: string, tempEventData: any): void => {
    //시간.
    const today = new Date();
    const _time = String(today.getHours()).padStart(2, '0')+':'+String(today.getMinutes()).padStart(2, '0')+':'+String(today.getSeconds()).padStart(2, '0');
    //타입.
    let _type = '';
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
      if( command === 'UPDATE' && data['skill_id'] === 'run' ){
        _message = 'CIDS 작동중';
      }else if( command === 'UPDATE' && data['skill_id'] === 'down' ){
        _message = 'CIDS 작동중지';
      }
    }
    //캠페인수정>콜페이싱 수정
    else if( announce === '/pds/campaign/dial-speed' ){
      _message = '[콜페이싱] '
      if( command === 'UPDATE' ){
        _message += '캠페인 아이디 ' + data['campaign_id'] + ' , 현재 설정값 ' + data['dial_speed'];
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
        _message += '삭제, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'] + ' , 동작상태 : '+_start_flag+', 완료구분 : '+_end_flag;
      }
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
      }
    }
    //캠페인수정>동작시간 추가
    else if( announce === '/pds/campaign/schedule' ){
      _message = '캠페인 스케쥴'
      if( command === 'INSERT' ){
        _message += '수정, 캠페인 아이디 : ' + data['campaign_id'] + ' , 캠페인 이름 : ' + data['campaign_name'];
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
    const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
    const eventSource = new EventSource(
      `http://10.10.30.228/api/v1/notification/${tenant_id}/subscribe`
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
  }, [tenant_id]);
  
    return (
      <footer
      className={`
        border-t text-sm text-gray-600 bg-[#FBFBFB] flex flex-col transition-all duration-300 ease-in-out
        ${isExpanded ? "fixed left-0 right-0 bottom-0 z-50" : "relative"}
      `}
      style={{
        // 열려 있으면 footerHeight, 닫혀 있으면 32px
        height: isDrawerOpen ? `${footerHeight}px` : "32px",
        transition: "height 0.3s ease-in-out",
      }}
    >
      {/* 푸터 높이 드래그 조절 핸들러 */}
      <div
        className="group relative bg-[#FBFBFB] h-[1px] cursor-ns-resize hover:h-[1px] hover:bg-[#5BC2C1] before:content-[''] before:absolute before:bg-transparent"
        onMouseDown={startResizing}
      />

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
    </footer>
  );
}

// "use client";

// import { useState, useEffect, useCallback } from "react";
// import {
//   ChevronUp,
//   ChevronDown,
//   PanelLeftClose,
//   PanelLeftOpen,
// } from "lucide-react";
// import { isEqual } from "lodash";
// import { useAuthStore } from "@/store";

// // re-resizable import
// import {
//   Resizable,
//   ResizeCallback,
//   ResizeDirection,
//   NumberSize,
// } from "re-resizable";

// type FooterDataType = {
//   time: string;
//   type: string;
//   message: string;
// };

// interface FooterProps {
//   footerHeight: number; // 열려 있을 때 푸터 높이(px)
//   onToggleDrawer?: (isOpen: boolean) => void; // 열림/닫힘 상태 전달
//   onResizeHeight?: (height: number) => void; // 새로 추가: 높이 변경 콜백
//   onResizeStart?: () => void; // 리사이징 시작 알림
//   onResizeEnd?: (height: number) => void; // 리사이징 종료 알림
// }

// export default function Footer({
//   footerHeight,
//   onToggleDrawer,
//   onResizeHeight,
//   onResizeStart,
//   onResizeEnd,
// }: FooterProps) {
//   // SSE 로그 목록
//   const [footerDataList, setFooterDataList] = useState<FooterDataType[]>([]);

//   // 열림/닫힘
//   const [isDrawerOpen, setIsDrawerOpen] = useState(true);

//   // D(1단)/W(2단) 모드 (와이드 모드)
//   const [isExpanded, setIsExpanded] = useState(false);

//   // 현재 리사이즈 가능한 높이(기본 footerHeight)
//   const [resizableHeight, setResizableHeight] = useState<number>(footerHeight);

//   // 드래그 중인지 여부 (트랜지션 on/off 구분)
//   const [isResizing, setIsResizing] = useState(false);

//   // 예시) AuthStore 에서 tenant_id
//   const { tenant_id } = useAuthStore();

//   // footerHeight prop이 바뀌면 내부 상태 갱신 (부모->자식 동기화)
//   useEffect(() => {
//     if (!isResizing) { // 리사이징 중에는 상태 업데이트 방지
//       setResizableHeight(footerHeight);
//     }
//   }, [footerHeight, isResizing]);

//   // 푸터 열림/닫힘 상태를 부모로 알림
//   useEffect(() => {
//     onToggleDrawer?.(isDrawerOpen);
//   }, [isDrawerOpen, onToggleDrawer]);

//   // SSE 로직 (원본 그대로)
//   const footerDataSet = useCallback(
//     (
//       announce: string,
//       command: string,
//       data: any,
//       kind: string,
//       tempEventData: any
//     ) => {
//       const today = new Date();
//       const _time =
//         String(today.getHours()).padStart(2, "0") +
//         ":" +
//         String(today.getMinutes()).padStart(2, "0") +
//         ":" +
//         String(today.getSeconds()).padStart(2, "0");

//       let _type = "";
//       if (kind === "event" || kind === "alram") {
//         _type = "Event";
//       }

//       let _message = "";
//       // (원본) 예시 발신번호 설정 / 캠페인 / 스킬 ...
//       if (announce === "/pds/campaign/calling-number") {
//         _message = "캠페인 : ";
//         if (command === "INSERT") {
//           _message += `[${data["campaign_id"]}], 사용자 발신번호 설정 추가 성공`;
//         } else if (command === "DELETE") {
//           _message += `[${data["campaign_id"]}], 사용자 발신번호 설정 삭제 성공`;
//         } else if (command === "UPDATE") {
//           _message += `[${data["campaign_id"]}], 사용자 발신번호 설정 변경 성공`;
//         }
//       }
//       // ... (기타 로직 동일)

//       if (_message !== "") {
//         setFooterDataList((prev) => [
//           { time: _time, type: _type, message: _message },
//           ...prev.slice(0, 9),
//         ]);
//       }
//     },
//     []
//   );

//   // SSE 구독
//   useEffect(() => {
//     const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
//     // const eventSource = new EventSource(
//     //   `${DOMAIN}/api/v1/notification/${tenant_id}/subscribe`
//     // );
//     const eventSource = new EventSource(`http://10.10.30.228:4000/api/v1/notification/${tenant_id}/subscribe`);
//     console.log("footer event ready... ");

//     let data: any = {};
//     let announce = "";
//     let command = "";
//     let kind = "";

//     const handleEvent = (event: MessageEvent) => {
//       console.log("event = ", event.data);
//       if (event.data !== "Connected!!") {
//         const tempEventData = JSON.parse(event.data);
//         if (
//           announce !== tempEventData["announce"] ||
//           !isEqual(data, tempEventData.data) ||
//           !isEqual(data, tempEventData["data"]) ||
//           kind !== tempEventData["kind"]
//         ) {
//           announce = tempEventData["announce"];
//           command = tempEventData["command"];
//           data = tempEventData["data"];
//           kind = tempEventData["kind"];

//           footerDataSet(
//             tempEventData["announce"],
//             tempEventData["command"],
//             tempEventData["data"],
//             tempEventData["kind"],
//             tempEventData
//           );
//         }
//       }
//     };
//     eventSource.addEventListener("message", handleEvent);

//     return () => {
//       eventSource.removeEventListener("message", handleEvent);
//       eventSource.close();
//     };
//   }, []);

//   /** 열림/닫힘 토글 */
//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   /** D(1단)/W(2단) 모드 토글 */
//   const toggleExpanded = () => {
//     setIsExpanded((prev) => !prev);
//     // 닫혀 있으면 자동 열기
//     if (!isDrawerOpen) {
//       setIsDrawerOpen(true);
//     }
//   };

//   // 리사이즈 시작
//   const onResizeStartHandler = () => {
//     setIsResizing(true);
//     onResizeStart?.(); // 부모에게 알림
//   };

//   // 리사이즈 중
//   const onResizeHandler: ResizeCallback = (
//     event,
//     direction: ResizeDirection,
//     elementRef: HTMLElement,
//     delta: NumberSize
//   ) => {
//     // 리사이즈 중에는 내부 상태만 업데이트
//     const newHeight = resizableHeight + delta.height;
    
//     // 리사이즈 중에 부모에게 실시간으로 높이 변경 알림
//     onResizeHeight?.(newHeight);
//   };

//   // 리사이즈 종료
//   const onResizeStopHandler: ResizeCallback = (
//     event,
//     direction: ResizeDirection,
//     elementRef: HTMLElement,
//     delta: NumberSize
//   ) => {
//     const newHeight = resizableHeight + delta.height;
//     setResizableHeight(newHeight);
//     setIsResizing(false);
    
//     // 부모에게 최종 높이 알림
//     onResizeEnd?.(newHeight);
//   };

//   // 열려 있으면 resizableHeight, 닫혀 있으면 32
//   const finalHeight = isDrawerOpen ? resizableHeight : 32;

//   return (
//     <div
//       className={`
//         text-sm text-gray-600 bg-[#FBFBFB] flex flex-col
//         ${isExpanded ? "fixed left-0 right-0 bottom-0 z-50" : "relative"}
//       `}
//     >
//       <Resizable
//         size={{ width: "100%", height: finalHeight }}
//         enable={{
//           top: true,
//           right: false,
//           bottom: false,
//           left: false,
//           topRight: false,
//           bottomRight: false,
//           bottomLeft: false,
//           topLeft: false,
//         }}
//         minHeight={32}
//         onResizeStart={onResizeStartHandler}
//         onResize={onResizeHandler}
//         onResizeStop={onResizeStopHandler}
//         style={{
//           transition: isResizing ? "none" : "height 0.3s ease-in-out",
//           backgroundColor: "#FBFBFB",
//           display: "flex",
//           flexDirection: "column",
//         }}
//         handleComponent={{
//           top: (
//             <div
//               className="
//                 group relative bg-[#FBFBFB] h-[1px] cursor-ns-resize
//                 hover:h-[1px] hover:bg-[#5BC2C1]
//                 before:content-[''] before:absolute before:bg-transparent
//               "
//             />
//           ),
//         }}
//       >
//         {/* 푸터 내부 컨텐츠 */}
//         <footer className="flex flex-col h-full border-t">
//           {/* 상단 바 영역 */}
//           <div className="flex-none pt-[5px] pb-[4px] px-[20px] border-b bg-white flex justify-between items-center">
//             <span className="text-[13px] text-[#333]">현재 진행 상태</span>

//             <div className="flex items-center gap-2">
//               {/* 와이드 모드 버튼 */}
//               <button
//                 onClick={toggleExpanded}
//                 className="flex items-center"
//                 title={isExpanded ? "default mode" : "wide mode"}
//               >
//                 {isExpanded ? (
//                   <PanelLeftOpen className="w-4 h-4" />
//                 ) : (
//                   <PanelLeftClose className="w-4 h-4" />
//                 )}
//               </button>

//               {/* 열림/닫힘 버튼 */}
//               <button
//                 onClick={toggleDrawer}
//                 className=""
//                 title={isDrawerOpen ? "닫기" : "열기"}
//               >
//                 {isDrawerOpen ? (
//                   <ChevronDown className="w-4 h-4" />
//                 ) : (
//                   <ChevronUp className="w-4 h-4" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* 내부 콘텐츠: 열려 있으면 표시 */}
//           {isDrawerOpen && (
//             <div className="flex-1 flex overflow-hidden">
//               {/* 1단이면 w-full, 2단이면 왼쪽 w-1/2 + 오른쪽 */}
//               <div
//                 className={`
//                   ${isExpanded ? "w-1/2" : "w-full"}
//                   overflow-auto py-[7px] px-[20px]
//                   ${isExpanded ? "border-r" : ""}
//                 `}
//               >
//                 <table className="w-full text-sm">
//                   <tbody>
//                     {footerDataList.map((log, idx) => (
//                       <tr key={idx}>
//                         <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
//                         <td className="whitespace-nowrap text-[13px] px-1">[{log.type}]</td>
//                         <td className="text-[13px]">{log.message}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* 와이드 모드일 때 오른쪽 목록 */}
//               {isExpanded && (
//                 <div className="w-1/2 overflow-auto py-[7px] px-[20px]">
//                   <table className="w-full text-sm">
//                     <tbody>
//                       {footerDataList.map((log, idx) => (
//                         <tr key={idx}>
//                           <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
//                           <td className="whitespace-nowrap text-[13px] px-1">[{log.type}]</td>
//                           <td className="text-[13px]">{log.message}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           )}
//         </footer>
//       </Resizable>
//     </div>
//   );
// }