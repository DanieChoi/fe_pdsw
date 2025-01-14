export default function Footer({
  footerHeight,
  startResizing,
}: {
  footerHeight: number;
  startResizing: () => void;
}) {
  return (
    <footer
      className="bg-gray-100 border-t text-sm text-gray-600 flex-shrink-0 relative"
      style={{
        height: `${footerHeight}px`, // 동적 높이 설정
      }}
    >
      {/* 드래그 핸들러 */}
      <div
        className="resize-handle bg-gray-300 h-2 cursor-ns-resize absolute top-0 left-0 w-full"
        onMouseDown={startResizing}
      ></div>
      <div className="text-sm py-2 px-4">현재 진행 상태</div>
      <div className="container mx-auto">
        <div className="flex space-x-4 overflow-x-auto text-xs">
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
            <div key={index} className="whitespace-nowrap">
              [{log.time}] [{log.type}] {log.message}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}