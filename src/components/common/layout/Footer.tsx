export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-2 px-4 text-sm text-gray-600">
      <div className="container mx-auto">
        <div className="flex space-x-4 overflow-x-auto text-xs">
          {[
            { time: '17:56:27', type: 'Event', message: 'CIDS 작동 정지' },
            { time: '17:56:12', type: 'Event', message: 'CIDS 작동 정지' },
            { time: '17:56:27', type: 'Event', message: '캠페인 통계데이터 분석, 캠페인:아이디-7, 캠페인언어=pds_web_only, 통계서버 : S-1' },
          ].map((log, index) => (
            <div key={index} className="whitespace-nowrap">
              [{log.time}] [{log.type}] {log.message}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}