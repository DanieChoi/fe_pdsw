

import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip, CartesianGrid } from 'recharts';
import TitleWrap from "@/components/shared/TitleWrap";
import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
import { Label } from "@/components/ui/label";


interface CallStatusData {
  name: string;
  value: number;
  color: string;
}

interface SuccessRateData {
  name: string;
  value: number;
  color: string;
}

const GridView: React.FC = () => {
  const pieChartData = [
    { name: '통화중', value: 25, color: '#4AD3C8' },
    { name: '팩스/모뎀', value: 25, color: '#19BEB2' },
    { name: '전화번호 오류', value: 5, color: '#20A99F' },
    { name: '고객 바로 끊음', value: 5, color: '#1A948B' },
    { name: '다이얼음 없음', value: 10, color: '#8EAEE4' },
    { name: '무응답', value: 10, color: '#5085DB' },
    { name: '기타', value: 10, color: '#336BC7' },
    { name: '회선오류', value: 10, color: '#785CCF' },
    { name: '통화음 없음', value: 10, color: '#9C82EC' },
    { name: '기계음', value: 10, color: '#C98DF6' },
  ];

  const barChartData: SuccessRateData[] = [
    { name: '발신대비(%)', value: 70, color: '#FF8DA0' },
    { name: '리스트대비(%)', value: 45, color: '#88B3FC' }
  ];

  return (
      <div className="flex flex-col gap-2">
          
          <div className="flex gap-5">
              <div className="w-1/2">
                <TitleWrap title="발신구분" />
                <div className="border rounded h-[170px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={35}
                        outerRadius={55}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ value }) => `${value}%`}
                        labelLine={{ stroke: '#999999', strokeWidth: 1 }}
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend 
                        content={({ payload }) => {
                          if (!payload) return null;
                          const halfLength = Math.ceil(payload.length / 2);
                          
                          return (
                            <div className="flex gap-4 px-2">
                              <div className="flex flex-col gap-1">
                                {payload.slice(0, halfLength).map((entry, index) => (
                                  <div key={`legend-${index}`} className="flex items-center gap-1">
                                    <div 
                                      className="w-2 h-2 rounded-full"
                                      style={{ backgroundColor: entry.color }}
                                    />
                                    <span className="text-xs text-gray-600">{entry.value}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="flex flex-col gap-1">
                                {payload.slice(halfLength).map((entry, index) => (
                                  <div key={`legend-${index}`} className="flex items-center gap-1">
                                    <div 
                                      className="w-2 h-2 rounded-full"
                                      style={{ backgroundColor: entry.color }}
                                    />
                                    <span className="text-xs text-gray-600">{entry.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        }}
                        layout="vertical"
                        align="right"
                        verticalAlign="middle"
                        wrapperStyle={{
                          right: 20,
                          top: '50%',
                          transform: 'translateY(-50%)'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="w-1/2">
                <TitleWrap title="발신 성공률" />
                <div className="border rounded h-[170px] p-4">
                  <ResponsiveContainer width="100%" height="100%" className="m-auto">
                    <BarChart
                      data={barChartData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      layout="vertical" 
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
                      <XAxis 
                        type="number" 
                        tick={{ fontSize: 13 }}
                        axisLine={{ stroke: '#999' }}
                        />  
                      <YAxis 
                        type="category" 
                        dataKey="name" 
                        width={100}
                        tick={{ fontSize: 13 }}
                        axisLine={{ stroke: '#999' }}
                      />
                      <Tooltip />
                      <Bar 
                        dataKey="value" 
                        barSize={20}
                      >
                        {barChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
          </div>

          <div>
            <TitleWrap title="리스트현황" />
             <Table>
              <tbody>
                <TableRow>
                  <TableHeader className="w-[120px]">
                    <Label>진행률(%)</Label>
                  </TableHeader>
                  <TableCell className="text-center text-sm">
                      0
                  </TableCell>
                  <TableHeader className="w-[160px]">
                    <Label>리스트 대비 성공률 (%)</Label>
                  </TableHeader>
                  <TableCell className="text-center text-sm">
                      0
                  </TableCell>
                  <TableHeader className="w-[120px]">
                    <Label>총 리스트</Label>
                  </TableHeader>
                  <TableCell className="text-center text-sm">
                      0
                  </TableCell>
                  <TableHeader className="w-[120px] !bg-[#DDF4F2]">
                    <Label>순수발신</Label>
                  </TableHeader>
                  <TableCell className="text-center text-sm">
                      0
                  </TableCell>
                  <TableHeader className="w-[120px] !bg-[#DDF4F2]">
                    <Label>미발신</Label>
                  </TableHeader>
                  <TableCell className="text-center text-sm">
                      0
                  </TableCell>
                  <TableHeader className="w-[120px] !bg-[#DDF4F2]">
                    <Label>상담결과 예약</Label>
                  </TableHeader>
                  <TableCell className="text-center text-sm">
                      0
                  </TableCell>
                </TableRow>
              </tbody>
            </Table>
          </div>

          <div>
            <TitleWrap title="발신현황" />
            <Table>
              <tbody>
                {/* 첫 번째 행 */}
                <TableRow>
                  <TableHeader rowSpan={2} className="!border-b-0 w-[120px]">
                    <Label>발신 대비<br/> 성공률(%)</Label>
                  </TableHeader>
                  <TableCell rowSpan={2} className="text-center text-sm !border-b-0">
                    66.7
                  </TableCell>
                  <TableHeader className="!bg-[#DDF4F2] w-[120px]"><Label>총발신</Label></TableHeader>
                  <TableCell className="text-center text-sm">7</TableCell>
                  <TableHeader className="!bg-[#FEE9EC] w-[120px]"><Label>발신 시도</Label></TableHeader>
                  <TableCell className="text-center text-sm">7</TableCell>
                  <TableHeader className="!bg-[#FEE9EC] w-[120px]"><Label>발신 성공</Label></TableHeader>
                  <TableCell className="text-center text-sm">7</TableCell>
                  <TableHeader className="!bg-[#FEE9EC] w-[120px]"><Label>발신 실패</Label></TableHeader>
                  <TableCell className="text-center text-sm">7</TableCell>
                </TableRow>

                {/* 두 번째 행 */}
                <TableRow>
                  <TableHeader className="!bg-[#DDF4F2] w-[120px]"><Label>총발신</Label></TableHeader>
                  <TableCell className="text-center text-sm">7</TableCell>
                  <TableHeader className="!bg-[#FEE9EC] w-[120px]"><Label>대기리스트</Label></TableHeader>
                  <TableCell className="text-center text-sm">7</TableCell>
                  <TableHeader className="!bg-[#FEE9EC] w-[120px]"><Label>방지리스트</Label></TableHeader>
                  <TableCell colSpan={3} className="text-sm text-center">7</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </div>
          
          <div className="flex gap-5">
              <div className="w-1/2">
                <TitleWrap title="총발신 건수" />
                <div className="flex gap-5">
                  <div className="w-1/2">
                    <Table>
                      <tbody>
                        <TableRow>
                          <TableHeader className="!bg-[#FEE9EC] w-[170px]"><Label>발신시도</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="!bg-[#FEE9EC] w-[170px]"><Label>발신성공</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>대기 상담원 없음</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>상담원 연결</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>상담원 연결 실패</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>상담원 무응답</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>상담원 통화중</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>상담원 바로 끊음</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>고객 포기</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>고객 최대 대기 시간초과</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                      </tbody>
                    </Table>
                  </div>
                  <div className="w-1/2">
                    <Table>
                      <tbody>
                        <TableRow>
                          <TableHeader className="!bg-[#FEE9EC] w-[170px]"><Label>발신실패</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>통화중</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>무응답</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>팩스/모뎀</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>기타</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>전화번호 오류</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>회선 오류</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>고객 바로 끊음</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>통화음 없음</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>다이얼음 없음</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <TitleWrap title="미발신" />

                <div className="flex gap-5">
                  <div className="w-1/2">
                    <Table>
                      <tbody>
                        <TableRow>
                          <TableHeader className="!bg-[#FEE9EC] w-[170px]"><Label>대기리스트</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>진행 대기</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[170px]"><Label>스케줄 대기</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                      </tbody>
                    </Table>
                  </div>
                  <div className="w-1/2">
                    <Table>
                      <tbody>
                        <TableRow>
                          <TableHeader className="!bg-[#FEE9EC] w-[200px]"><Label>방지 리스트</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[200px]"><Label>블랙리스트</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[200px]"><Label>실시간 리스트 삭제</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[200px]"><Label>스케줄 설정 실패</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[200px]"><Label>콜백 타임 아웃</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[200px]"><Label>팝업 후 상담원 미발신 선택</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[200px]"><Label>팝업 후 발신 여부 미선택</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[200px]"><Label>팝업 후 상담원 상태 변경</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[200px]"><Label>팝업 후 상담원 모드 변경</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableHeader className="w-[200px]"><Label>발신확인 전 상담원 상태 변경</Label></TableHeader>
                          <TableCell className="text-center text-sm">0</TableCell>
                        </TableRow>
                      </tbody>
                    </Table>
                  </div>
                </div>

              </div>
          </div>
      </div>
  );
};

export default GridView;