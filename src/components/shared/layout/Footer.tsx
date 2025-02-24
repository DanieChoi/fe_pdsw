export default function Footer({
  footerHeight,
  startResizing,
}: {
  footerHeight: number;
  startResizing: () => void;
}) {
  return (
    <footer
      className="border-t text-sm text-gray-600 bg-[#FBFBFB] flex flex-col z-10"
      style={{
        height: `${footerHeight}px`,
      }}
    >
     <div
      className="group relative bg-[#FBFBFB] h-[1px] cursor-ns-resize hover:h-[1px] hover:bg-[#5BC2C1] before:content-[''] before:absolute before:bg-transparent"
      onMouseDown={startResizing}
    ></div>

      <div className="flex-none pt-[5px] pb-[4px] px-[20px] border-b bg-white">
        <span className="text-[13px] text-[#333]">현재 진행 상태</span>
      </div>

      <div className="flex-1 overflow-auto py-[7px] px-[20px]">
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