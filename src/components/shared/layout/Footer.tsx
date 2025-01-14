export default function Footer({
  footerHeight,
  startResizing,
}: {
  footerHeight: number;
  startResizing: () => void;
}) {
  return (
    <footer
      className="border-t text-sm text-gray-600 flex-shrink-0 relative bg-[#FBFBFB]"
      style={{
        height: `${footerHeight}px`, // 동적 높이 설정
      }}
    >
      {/* 드래그 핸들러 */}
      <div
      className="resize-handle bg-gray-300 h-[1px] cursor-ns-resize absolute top-0 left-0 w-full hover:h-[4px] hover:bg-[#5BC2C1] before:content-[''] before:absolute before:top-[-4px] before:bottom-[-4px] before:left-0 before:right-0 before:bg-transparent"
      onMouseDown={startResizing}
    ></div>

      {/* 상태 제목 */}
      <div className="py-[7px] px-[20px] border-b bg-white">
        <span className="text-[13px]">현재 진행 상태</span>
      </div>

      {/* 로그 테이블 */}
      <div className="flex-1 overflow-auto p-4 py-[7px] px-[20px]">
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
              <tr key={index} className="">
                <td className="whitespace-nowrap text-[13px]">[{log.time}]</td>
                <td className="whitespace-nowrap text-[13px]">[{log.type}]</td>
                <td className="text-[13px]">{log.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </footer>
  );
}