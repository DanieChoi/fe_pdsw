// "use client";
// import React from 'react'
// import { useSideMenuStore } from '@/store/sideMenuStore'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// const CampaignMonitorDashbord = () => {
//  const selectedNodeId = useSideMenuStore((state) => state.selectedNodeId)

//  return (
//    <Card className="w-96">
//      <CardHeader>
//        <CardTitle className="text-lg font-medium">캠페인 정보</CardTitle>
//      </CardHeader>
//      <CardContent>
//        <div className="flex items-center gap-2">
//          <div className="text-sm text-gray-500">캠페인 아이디</div>
//          <div className="font-medium">{selectedNodeId || '-'}</div>
//        </div>
//      </CardContent>
//    </Card>
//  )
// }

// export default CampaignMonitorDashbord

import React from 'react';
import { useSideMenuStore } from '@/store/sideMenuStore';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell } from 'recharts';

const CampaignMonitorDashboard = () => {
  const selectedNodeId = useSideMenuStore((state) => state.selectedNodeId);
  
  const data = [
    { name: '동의중', value: 25 },
    { name: '대기/포기', value: 25 },
    { name: '전화번호오류', value: 5 },
    { name: '고객 비접 경험', value: 5 },
    { name: '다이얼링 완료', value: 10 },
    { name: '통화중', value: 10 },
    { name: '부재중', value: 10 },
    { name: '기타', value: 10 }
  ];

  const COLORS = ['#40E0D0', '#40E0D0', '#4169E1', '#4169E1', '#4169E1', '#9370DB', '#9370DB', '#9370DB'];

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* 왼쪽 설정 영역 */}
      <div className="col-span-3 bg-red-50 p-4">
        <h2 className="font-bold mb-4">캠페인 정보</h2>
        <div className="space-y-2">
          <div>캠페인 아이디: {selectedNodeId || 7}</div>
          <div>캠페인 이름: web_only</div>
        </div>
      </div>

      {/* 오른쪽 대시보드 영역 */}
      <div className="col-span-9 bg-blue-50 p-4">
        <div className="grid grid-cols-2 gap-4">
          {/* 파이 차트 */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">발신 진행사유 현황</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 w-full flex justify-center">
                <PieChart width={250} height={250}>
                  <Pie
                    data={data}
                    cx={125}
                    cy={125}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </div>
            </CardContent>
          </Card>

          {/* 진행률 바 */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">발신 상공률</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm mb-2">발신성공</div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-pink-400 h-4 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2">리스트대비</div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-400 h-4 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 하단 통계 그리드 */}
        <div className="grid grid-cols-5 gap-4 mt-4">
          {['총 리스트', '순수발신', '미발신', '발신 성공', '실담결과 예약'].map((title, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-sm">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">
                  {i === 0 ? '15' : i === 1 ? '0' : i === 2 ? '15' : i === 3 ? '7' : '0'}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignMonitorDashboard;