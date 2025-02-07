import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import DataGrid from 'react-data-grid';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import 'react-data-grid/lib/styles.css';

type ChannelStatus = 'IDLE' | 'BUSY' | 'NONE';

interface ChannelData {
  CIDSNO: string;
  CHNO: string;
  status: ChannelStatus;
  equipmentNo?: string;
  campaignMode?: string;
  callMode?: string;
}

type FilterMode = '전체' | '장비번호' | '캠페인 모드' | '발신 모드';

const COLORS = {
  IDLE: '#4AD3C8',
  BUSY: '#FF8DA0',
  NONE: '#D398FF'
};

// 초기 데이터에 추가 필드 포함
const INITIAL_DATA: ChannelData[] = Array(20).fill(null).map((_, index) => ({
  CIDSNO: '1',
  CHNO: `CH${index}`,
  status: ['IDLE', 'BUSY', 'NONE'][Math.floor(Math.random() * 3)] as ChannelStatus,
  equipmentNo: `[${Math.floor(Math.random() * 2) + 1}]IPPDS${Math.floor(Math.random() * 2) + 1}`,
  campaignMode: ['회선사용안함', '모든캠페인사용'][Math.floor(Math.random() * 2)],
  callMode: ['power mode', 'progressive mode', 'predictive mode', 'system preview'][Math.floor(Math.random() * 4)]
}));

const ChannelMonitor: React.FC = () => {
  const [firstSelect, setFirstSelect] = useState<FilterMode>('전체');
  const [secondSelect, setSecondSelect] = useState<string>('');
  const [thirdSelect, setThirdSelect] = useState<string>('상태전체');
  const [filteredData, setFilteredData] = useState<ChannelData[]>(INITIAL_DATA);

  // 첫 번째 Select의 옵션
  const firstSelectOptions = ['전체', '장비번호', '캠페인 모드', '발신 모드'];

  // 두 번째 Select의 옵션 (첫 번째 선택에 따라 동적 변경)
  const getSecondSelectOptions = () => {
    switch (firstSelect) {
      case '장비번호':
        return ['전체장비', '[1]IPPDS1', '[2]IPPDS3'];
      case '캠페인 모드':
        return ['전체캠페인', '회선사용안함', '모든캠페인사용'];
      case '발신 모드':
        return ['전체발신모드', '회선사용안함', '발신방법모두사용', 'power mode', 
                'progressive mode', 'predictive mode', 'system preview'];
      default:
        return [];
    }
  };

  // 세 번째 Select의 옵션
  const thirdSelectOptions = ['상태전체', 'NONE', 'IDLE', 'BUSY'];

  // 필터링 로직
  useEffect(() => {
    let newData = [...INITIAL_DATA];

    if (firstSelect !== '전체') {
      if (secondSelect && secondSelect !== '전체장비' && 
          secondSelect !== '전체캠페인' && secondSelect !== '전체발신모드') {
        switch (firstSelect) {
          case '장비번호':
            newData = newData.filter(item => item.equipmentNo === secondSelect);
            break;
          case '캠페인 모드':
            newData = newData.filter(item => item.campaignMode === secondSelect);
            break;
          case '발신 모드':
            newData = newData.filter(item => item.callMode === secondSelect);
            break;
        }
      }
    }

    if (thirdSelect !== '상태전체') {
      newData = newData.filter(item => item.status === thirdSelect);
    }

    setFilteredData(newData);
  }, [firstSelect, secondSelect, thirdSelect]);

  // 상태별 카운트 계산
  const statusCounts = filteredData.reduce((acc, curr) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;
    return acc;
  }, {} as Record<ChannelStatus, number>);

  // 도넛 차트 데이터 준비
  const chartData = Object.entries(statusCounts).map(([name, value]) => ({
    name,
    value: (value / filteredData.length) * 100
  }));

  // 그리드 컬럼 정의
  const columns = [
    { key: 'CIDSNO', name: 'CIDSNO' },
    { key: 'CHNO', name: 'CHNO' },
    { 
      key: 'status', 
      name: '상태',
      formatter: ({ row }) => (
        <div
          className="px-2 py-1 rounded text-center"
          style={{ 
            backgroundColor: COLORS[row.status as ChannelStatus],
            color: 'white'
          }}
        >
          {row.status}
        </div>
      )
    }
  ];

  // 첫 번째 Select 변경 시 두 번째 Select 초기화
  const handleFirstSelectChange = (value: FilterMode) => {
    setFirstSelect(value);
    setSecondSelect('');
  };

  return (
    <div className="h-full">
      <div className="flex gap-5 h-full">
        {/* 도넛 차트 */}
        <div className="w-full lg:w-1/2 h-full flex flex-col gap-5">
          <div className="text-sm h-[26px] min-h-[26px] flex flex-col justify-center">
            TOTAL {filteredData.length} CH
          </div>
          <div className="border p-2 rounded h-[calc(100%-46px)]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={100}
                  fill="#8884d8"
                  label={({ value }) => `${value.toFixed(1)}%`}
                >
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[entry.name as ChannelStatus]} 
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend 
                    verticalAlign="bottom" 
                    align="center"
                    wrapperStyle={{ 
                        position: 'relative',
                        bottom: '20%'
                    }}
                    />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 데이터 그리드 */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <div className="flex gap-2">
            <Select onValueChange={handleFirstSelectChange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder={firstSelect} />
              </SelectTrigger>
              <SelectContent>
                {firstSelectOptions.map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select 
              disabled={firstSelect === '전체'}
              onValueChange={setSecondSelect}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder={secondSelect || "선택"} />
              </SelectTrigger>
              <SelectContent>
                {getSecondSelectOptions().map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select onValueChange={setThirdSelect}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder={thirdSelect} />
              </SelectTrigger>
              <SelectContent>
                {thirdSelectOptions.map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid-custom-wrap h-[calc(100%-46px)]">
            <DataGrid
              columns={columns}
              rows={filteredData}
              className="grid-custom"
              rowHeight={26}
              headerRowHeight={26}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelMonitor;