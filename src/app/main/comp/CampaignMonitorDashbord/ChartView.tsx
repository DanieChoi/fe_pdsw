import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import TitleWrap from "@/components/shared/TitleWrap";
import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
import { Label } from "@/components/ui/label";

interface ChartData {
  name: string;
  value: number;
  color: string;
}


const ChartView: React.FC = () => {
  // 발신 현황 데이터
  const callStatusData: ChartData[] = [
    { name: '발신시도', value: 50, color: '#40E0D0' },
    { name: '발신성공', value: 8, color: '#2CC7B5' },
    { name: '발신실패', value: 3, color: '#20AE9C' }
  ];

  // 리스트 상태 데이터
  const listStatusData: ChartData[] = [
    { name: '대기리스트', value: 5, color: '#87CEFA' },
    { name: '방지리스트', value: 5, color: '#FFB6C6' }
  ];

  const renderCustomizedLegend = (props: any) => {
    const { payload } = props;
    
    return (
      <div className="flex justify-center gap-4 mt-2">
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center gap-1">
            <div 
              className="w-3 h-3"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-xs">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, value, index } = props;
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 1.1; // 레이블을 바깥쪽으로 이동
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    const total = props.data.reduce((sum: number, entry: ChartData) => sum + entry.value, 0);
    const percentage = ((value / total) * 100).toFixed(0);

    return (
      <text
        x={x}
        y={y}
        fill="#666"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-[10px]"
      >
        {`${percentage}%`}
      </text>
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <TitleWrap title="리스트 현황" />
        <Table className='table-continued'>
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
              <TableHeader className="w-[120px]">
                <Label>순수발신</Label>
              </TableHeader>
              <TableCell className="text-center text-sm">
                0
              </TableCell>
              <TableHeader className="w-[120px]">
                <Label>미발신</Label>
              </TableHeader>
              <TableCell className="text-center text-sm">
                0
              </TableCell>
              <TableHeader className="w-[120px]">
                <Label>상담결과 예약</Label>
              </TableHeader>
              <TableCell className="text-center text-sm">
                0
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
        <div className="h-[370px] border border-[#ebebeb] rounded-b-[3px] p-2 flex justify-center items-center gap-5">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-center">총 발신 : 3, 발신대비 성공률 : 66.7%</p>
            <div className="relative">
              <PieChart width={260} height={250}>
                <Pie
                  data={callStatusData}
                  cx={130}
                  cy={100}
                  innerRadius={30}
                  outerRadius={70}
                  paddingAngle={0}
                  label={({ value, x, y }) => (
                    <text x={x} y={y} className="text-[10px]" textAnchor="middle">
                      {`${value}%`}
                    </text>
                  )}
                  dataKey="value"
                >
                  {callStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend 
                  content={renderCustomizedLegend}
                  payload={callStatusData.map(item => ({
                    value: item.name,
                    color: item.color,
                  }))}
                />
              </PieChart>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm text-center">미발신 : 1</p>
            <div className="relative">
              <PieChart width={260} height={250}>
                <Pie
                  data={listStatusData}
                  cx={130}
                  cy={100}
                  innerRadius={30}
                  outerRadius={70}
                  paddingAngle={0}
                  label={({ value, x, y }) => (
                    <text x={x} y={y} className="text-[10px]" textAnchor="middle">
                      {`${value}%`}
                    </text>
                  )}
                  dataKey="value"
                >
                  {listStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend 
                  content={renderCustomizedLegend}
                  payload={listStatusData.map(item => ({
                    value: item.name,
                    color: item.color,
                  }))}
                />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TitleWrap title="발신성공" />
        <Table className='table-continued'>
          <tbody>
            <TableRow>
              <TableHeader className="w-[120px] !text-center border-r border-b">
                <Label>대기 상담원 없음</Label>
              </TableHeader>
              <TableHeader className="w-[160px] !text-center border-r border-b">
                <Label>상담원연결</Label>
              </TableHeader>
              <TableHeader className="w-[120px] !text-center border-r border-b">
                <Label>상담원 연결실패</Label>
              </TableHeader>
              <TableHeader className="w-[120px] !text-center border-r border-b">
                <Label>상담원 무응답</Label>
              </TableHeader>
              <TableHeader className="w-[120px] !text-center">
                <Label>상담원 통화중</Label>
              </TableHeader>
            </TableRow>
            <TableRow>
              <TableCell className="text-sm !text-center">
                0
              </TableCell>
              <TableCell className="text-sm !text-center">
                0
              </TableCell>
              <TableCell className="text-sm !text-center">
                0
              </TableCell>
              <TableCell className="text-sm !text-center">
                0
              </TableCell>
              <TableCell className="text-sm !text-center">
                0
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader className="w-[120px] !text-center border-r border-b">
                <Label>상담원 바로 끊음</Label>
              </TableHeader>
              <TableHeader className="w-[160px] !text-center border-r border-b">
                <Label>고객 포기</Label>
              </TableHeader>
              <TableHeader className="w-[120px] !text-center border-r border-b">
                <Label>고객 최대 대기시간 초과</Label>
              </TableHeader>
              <TableHeader className="w-[120px] !text-center">
                <Label>멘트 청취 후 상담원 연결 안함</Label>
              </TableHeader>
            </TableRow>
            <TableRow>
              <TableCell className="text-sm !text-center">
                0
              </TableCell>
              <TableCell className="text-sm !text-center">
                0
              </TableCell>
              <TableCell className="text-sm !text-center">
                0
              </TableCell>
              <TableCell className="text-sm !text-center">
                0
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ChartView;