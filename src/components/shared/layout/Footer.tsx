// export default function Footer({
//   footerHeight,
//   startResizing,
// }: {
//   footerHeight: number;
//   startResizing: () => void;
// }) {
//   return (
//     <footer
//       className="border-t text-sm text-gray-600 bg-[#FBFBFB] flex flex-col z-10"
//       style={{
//         height: `${footerHeight}px`,
//       }}
//     >
//      <div
//       className="group relative bg-[#FBFBFB] h-[1px] cursor-ns-resize hover:h-[1px] hover:bg-[#5BC2C1] before:content-[''] before:absolute before:bg-transparent"
//       onMouseDown={startResizing}
//     ></div>

//       <div className="flex-none pt-[5px] pb-[4px] px-[20px] border-b bg-white">
//         <span className="text-[13px] text-[#333]">현재 진행 상태</span>
//       </div>

//       <div className="flex-1 overflow-auto py-[7px] px-[20px]">
//         <table className="w-full text-sm">
//           <tbody>
//             {[
//               { time: '17:56:27', type: 'Event', message: 'CIDS 작동 정지' },
//               { time: '17:56:12', type: 'Event', message: 'CIDS 작동 정지' },
//               {
//                 time: '17:56:27',
//                 type: 'Event',
//                 message:
//                   '캠페인 통계데이터 분석, 캠페인:아이디-7, 캠페인언어=pds_web_only, 통계서버 : S-1',
//               },
//             ].map((log, index) => (
//               <tr key={index} className="">
//                 <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
//                 <td className="whitespace-nowrap text-[13px]">[{log.type}]</td>
//                 <td className="text-[13px]">{log.message}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </footer>
//   );
// }

import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function Footer({
  footerHeight,
  startResizing,
}: {
  footerHeight: number;
  startResizing: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <footer
      className={`border-t text-sm text-gray-600 bg-[#FBFBFB] flex flex-col transition-all duration-300 ease-in-out ${
        isExpanded ? 'fixed left-0 right-0 bottom-0 z-50' : 'relative'
      }`}
      style={{
        height: isDrawerOpen ? `${footerHeight}px` : '32px',
      }}
    >
      <div
        className="group relative bg-[#FBFBFB] h-[1px] cursor-ns-resize hover:h-[1px] hover:bg-[#5BC2C1] before:content-[''] before:absolute before:bg-transparent"
        onMouseDown={startResizing}
      />

      <div className="flex-none pt-[5px] pb-[4px] px-[20px] border-b bg-white flex justify-between items-center">
        <span className="text-[13px] text-[#333]">현재 진행 상태</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-2 py-1 text-[12px] bg-gray-100 hover:bg-gray-200 rounded"
          >
            {isExpanded ? '1단 보기' : '2단 보기'}
          </button>
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="p-1 hover:bg-gray-100 rounded"
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
        <div className={`flex-1 flex overflow-hidden`}>
          <div className={`${isExpanded ? 'w-1/2' : 'w-full'} overflow-auto py-[7px] px-[20px] ${
            isExpanded ? 'border-r' : ''
          }`}>
            <table className="w-full text-sm">
              <tbody>
                {[
                  { time: '17:56:27', type: 'Event', message: 'CIDS 작동 정지' },
                  { time: '17:56:12', type: 'Event', message: 'CIDS 작동 정지' },
                  {
                    time: '17:56:27',
                    type: 'Event',
                    message:
                      '캠페인 통계데이터 분석, 캠페인:아이디-7, 캠페인언어=pds_web_only, 통계서버 : S-1',
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

          {isExpanded && (
            <div className="w-1/2 overflow-auto py-[7px] px-[20px]">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    { time: '17:56:27', type: 'System', message: '시스템 상태 정상' },
                    { time: '17:56:12', type: 'System', message: '메모리 사용량 45%' },
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