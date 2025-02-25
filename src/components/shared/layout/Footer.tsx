

// import { useState } from 'react';
// import { ChevronUp, ChevronDown } from 'lucide-react';

// export default function Footer({
//   footerHeight,
//   startResizing,
// }: {
//   footerHeight: number;
//   startResizing: () => void;
// }) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(true);

//   return (
//     <footer
//       className={`border-t text-sm text-gray-600 bg-[#FBFBFB] flex flex-col transition-all duration-300 ease-in-out ${
//         isExpanded ? 'fixed left-0 right-0 bottom-0 z-50' : 'relative'
//       }`}
//       style={{
//         height: isDrawerOpen ? `${footerHeight}px` : '32px',
//       }}
//     >
//       <div
//         className="group relative bg-[#FBFBFB] h-[1px] cursor-ns-resize hover:h-[1px] hover:bg-[#5BC2C1] before:content-[''] before:absolute before:bg-transparent"
//         onMouseDown={startResizing}
//       />

//       <div className="flex-none pt-[5px] pb-[4px] px-[20px] border-b bg-white flex justify-between items-center">
//         <span className="text-[13px] text-[#333]">현재 진행 상태</span>
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="px-2 py-1 text-[12px] bg-gray-100 hover:bg-gray-200 rounded"
//           >
//             {isExpanded ? '1단 보기' : '2단 보기'}
//           </button>
//           <button
//             onClick={() => setIsDrawerOpen(!isDrawerOpen)}
//             className="p-1 hover:bg-gray-100 rounded"
//           >
//             {isDrawerOpen ? (
//               <ChevronDown className="w-4 h-4" />
//             ) : (
//               <ChevronUp className="w-4 h-4" />
//             )}
//           </button>
//         </div>
//       </div>

//       {isDrawerOpen && (
//         <div className={`flex-1 flex overflow-hidden`}>
//           <div className={`${isExpanded ? 'w-1/2' : 'w-full'} overflow-auto py-[7px] px-[20px] ${
//             isExpanded ? 'border-r' : ''
//           }`}>
//             <table className="w-full text-sm">
//               <tbody>
//                 {[
//                   { time: '17:56:27', type: 'Event', message: 'CIDS 작동 정지' },
//                   { time: '17:56:12', type: 'Event', message: 'CIDS 작동 정지' },
//                   {
//                     time: '17:56:27',
//                     type: 'Event',
//                     message:
//                       '캠페인 통계데이터 분석, 캠페인:아이디-7, 캠페인언어=pds_web_only, 통계서버 : S-1',
//                   },
//                 ].map((log, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
//                     <td className="whitespace-nowrap text-[13px] px-1">[{log.type}]</td>
//                     <td className="text-[13px]">{log.message}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {isExpanded && (
//             <div className="w-1/2 overflow-auto py-[7px] px-[20px]">
//               <table className="w-full text-sm">
//                 <tbody>
//                   {[
//                     { time: '17:56:27', type: 'System', message: '시스템 상태 정상' },
//                     { time: '17:56:12', type: 'System', message: '메모리 사용량 45%' },
//                   ].map((log, index) => (
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
//     </footer>
//   );
// }

// src/components/shared/layout/Footer.tsx

import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface FooterProps {
  footerHeight: number;      // 열려 있을 때 푸터의 높이(px)
  startResizing: () => void; // 드래그로 푸터 높이를 조절하기 위한 함수
  onToggleDrawer?: (isOpen: boolean) => void; // 부모 컴포넌트에 열림/닫힘 상태 전달
}

export default function Footer({ footerHeight, startResizing, onToggleDrawer }: FooterProps) {
  const [isExpanded, setIsExpanded] = useState(false);   // D(1단) / W(2단) 모드 토글
  const [isDrawerOpen, setIsDrawerOpen] = useState(true); // 푸터 열기/닫기 토글

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

  return (
    <footer
      // 2단(W) 모드면 fixed bottom-0, 1단(D) 모드면 relative
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
          {/* 모드 전환 버튼 */}
          <button
            onClick={toggleExpanded}
            className="px-2 py-1 text-[12px] bg-gray-100 hover:bg-gray-200 rounded"
          >
            {/* isExpanded가 true면 2단(W) 상태이므로 "1단 보기" 버튼 표시 */}
            {isExpanded ? "1단 보기(D)" : "2단 보기(W)"}
          </button>

          {/* 열기/닫기 버튼 - 항상 표시 */}
          <button onClick={toggleDrawer} className="p-1 hover:bg-gray-100 rounded">
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
                {[
                  { time: "17:56:27", type: "Event", message: "CIDS 작동 정지" },
                  { time: "17:56:12", type: "Event", message: "CIDS 작동 정지" },
                  {
                    time: "17:56:27",
                    type: "Event",
                    message:
                      "캠페인 통계데이터 분석, 캠페인:아이디-7, 캠페인언어=pds_web_only, 통계서버 : S-1",
                  },
                ].map((log, index) => (
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
                  {[
                    { time: "17:56:27", type: "System", message: "시스템 상태 정상" },
                    { time: "17:56:12", type: "System", message: "메모리 사용량 45%" },
                  ].map((log, index) => (
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