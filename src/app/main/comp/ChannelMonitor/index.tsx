import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import DataGrid from 'react-data-grid';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import 'react-data-grid/lib/styles.css';
import { useApiForChannelStateMonitoringList } from '@/features/monitoring/hooks/useApiForChannelStateMonitoringList';
import { useEnvironmentStore } from '@/store/environmentStore';
import { useMainStore } from '@/store';
import { useApiForDialingDevice, useApiForDialingDeviceCreate, useApiForDialingDeviceDelete, useApiForDialingDeviceUpdate } from '@/features/preferences/hooks/useApiForDialingDevice';

type ChannelStatus = 'IDLE' | 'BUSY' | 'NONE';

interface ChannelData {
  CIDSNO: string;
  CHNO: string;
  status: ChannelStatus;
  equipmentNo?: string;
  campaignMode?: string;
  callMode?: string;
  channelGroupMode?:string;
  ChannelMode:string;
}

interface ItemType {
  key: string;
  name: string;
}

type FilterMode = '전체' | '장비번호' | '캠페인 모드' | '발신 모드' | '채널 그룹 모드';

const COLORS = {
  IDLE: '#4AD3C8',
  BUSY: '#FF8DA0',
  NONE: '#D398FF'
};

const secondModeAll = [
  {key:' ', name: '선택'},
];

const secondModeCampaignGroup = [
  {key:' ', name: '전체 채널그룹'},
  {key:'회선사용안함', name: '회선사용안함'},
  {key:'모든그룹아이디사용', name: '모든 그룹아이디 사용'},
];

const secondModeSender = [
  {key:' ', name: '전체발신모드'},
  {key:'0', name: '회선사용안함'},
  {key:'발신방법모두사용', name: '발신방법모두사용'},
  {key:'1', name: 'power mode'},
  {key:'2', name: 'progressive mode'},
  {key:'3', name: 'predictive mode'},
  {key:'5', name: 'system preview'}
];

const ChannelMonitor: React.FC = () => {
  const [firstSelect, setFirstSelect] = useState<FilterMode>('전체');
  const [secondSelect, setSecondSelect] = useState<string>('');
  const [thirdSelect, setThirdSelect] = useState<string>('상태전체');
  const [channelData, setChannelData] = useState<ChannelData[]>([]);
  const [filteredData, setFilteredData] = useState<ChannelData[]>([]);
  const { statisticsUpdateCycle } = useEnvironmentStore();
  const { tenants, campaigns } = useMainStore();
  const [ secondModeEquipment, setSecondModeEquipment ] = useState<ItemType[]>([]);
  const [ secondModeCampaign, setSecondModeCampaign ] = useState<ItemType[]>([]);
  const [ secondModeCampaignGroup, setSecondModeCampaignGroup ] = useState<ItemType[]>([]);

  // 첫 번째 Select의 옵션
  const firstSelectOptions = ['전체', '장비번호', '캠페인 모드', '발신 모드', '채널 그룹 모드'];

  // 두 번째 Select의 옵션 (첫 번째 선택에 따라 동적 변경)
  const getSecondSelectOptions = () => {
    switch (firstSelect) {
      case '장비번호':
        return secondModeEquipment;
      case '캠페인 모드':
        return secondModeCampaign;
      case '발신 모드':
        return secondModeSender;
      default:
        return secondModeAll;
    }
  };

  // 세 번째 Select의 옵션
  const thirdSelectOptions = ['상태전체', 'NONE', 'IDLE', 'BUSY'];

  // 필터링 로직
  useEffect(() => {
    let newData:ChannelData[] = channelData.sort((a,b)=>(parseInt(a.CIDSNO) - parseInt(b.CIDSNO)));
    if( channelData.length > 0 ){
      if (firstSelect !== '전체') {
        if (secondSelect && secondSelect !== ' ') {
          switch (firstSelect) {
            case '장비번호':
              newData = channelData.filter(item => item.CIDSNO && item.CIDSNO === secondSelect);
              break;
            case '캠페인 모드':
              newData = channelData.filter(item => item.campaignMode === secondSelect);
              break;
            case '발신 모드':
              newData = channelData.filter(item => item.callMode === secondSelect);
              break;
            case '채널 그룹 모드':
              newData = channelData.filter(item => item.channelGroupMode === secondSelect);
              break;
          }
        }else if(firstSelect === '캠페인 모드'){
          newData = channelData.filter(item => item.campaignMode != '');
        }else if(firstSelect === '발신 모드'){
          newData = channelData.filter(item => item.callMode != '');
        }else if(firstSelect === '채널 그룹 모드'){
          newData = channelData.filter(item => item.channelGroupMode != '');
        }
      }else{

      }

      if (thirdSelect !== '상태전체') {
        newData = newData.filter(item => item.status === thirdSelect);
      }

      setFilteredData(newData);
    }
  }, [firstSelect, secondSelect, thirdSelect, channelData]);

  // 상태별 카운트 계산
  const statusCounts = filteredData.reduce((acc, curr) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;
    return acc;
  }, {} as Record<ChannelStatus, number>);

  // 도넛 차트 데이터 준비
  const chartData = Object.entries(statusCounts).map(([name, value]) => ({
    name: name + ':' + value,
    value: (value / filteredData.length) * 100
  }));

  // 그리드 컬럼 정의
  const columns = [
    { key: 'CIDSNO', name: 'CIDSNO' },
    { key: 'CHNO', name: 'CHNO' },
    { 
      key: 'status', 
      name: '상태',
      formatter: ({ row }: { row: ChannelData }) => (
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
    setSecondSelect(' ');
  };

  // 채널 모니터링 api 호출
  const { mutate: fetchChannelStateMonitoringList } = useApiForChannelStateMonitoringList({
    onSuccess: (data) => {  
      const dataList = data.dialerChannelStatusList.sort((a, b) => parseInt(a.id) - parseInt(b.id))
      .map(item => ({
        CIDSNO: item.deviceId,
        CHNO: `CH${item.id}`,
        status: item.state === '0' ? 'NONE' : item.state === '1' ? 'IDLE' : 'BUSY' as ChannelStatus,
        ChannelMode: item.assign_kind,
        campaignMode: item.assign_kind === '0' ? item.dial_mode === '2147483647' ? '모든캠페인사용' : item.dial_mode === '0' ?'회선사용안함':item.dial_mode : '', 
        callMode: item.assign_kind === '1' ?item.dial_mode === '2147483647' ? '발신방법모두사용':item.dial_mode:'',
        channelGroupMode: item.assign_kind === '3' ? item.dial_mode === '2147483647' ? '모든그룹아이디사용' : item.dial_mode === '0' ?'회선사용안함':item.dial_mode : '',
      }));
      setChannelData(dataList);  

      const dataCampaignList = data.dialerChannelStatusList.filter(item => item.assign_kind === '0' && !(item.dial_mode == '0' || item.dial_mode == '2147483647') );
      if( dataCampaignList.length > 0){
        const tempData: ItemType[] = dataCampaignList.map(item => ({
          key: `${item.dial_mode}`,
          name: campaigns.filter(data => data.campaign_id === Number(item.dial_mode ))[0].campaign_name
        }));
        setSecondModeCampaign(tempData.sort((a,b) => parseInt(a.key) - parseInt(b.key)));
      }
      
      const dataGroupList = data.dialerChannelStatusList.filter(item => item.assign_kind === '3' && !(item.dial_mode == '0' || item.dial_mode == '2147483647') );
      if( dataGroupList.length > 0){
        const tempData: ItemType[] = dataGroupList.map(item => ({
          key: `${item.dial_mode}`,
          name: campaigns.filter(data => data.campaign_id === Number(item.dial_mode ))[0].campaign_name
        }));
        setSecondModeCampaignGroup(tempData.sort((a,b) => parseInt(a.key) - parseInt(b.key)));
      }
      
    }
  });

  // 장비 목록 조회
  const { mutate: fetchDialingDeviceList } = useApiForDialingDevice({
      onSuccess: (data) => {
        if( data.result_data.length > 0 ){
          const tempData: ItemType[] = data.result_data.map(item => ({
            key: `${item.device_id}`,
            name: item.device_name
          }));
          setSecondModeEquipment(tempData);
        }
        fetchChannelStateMonitoringList({deviceId:0});
      }
  });

  useEffect(() => {   
    fetchDialingDeviceList({
        tenant_id_array: tenants.map(tenant => tenant.tenant_id)
    });     
    // fetchChannelStateMonitoringList({deviceId:0});
    if( statisticsUpdateCycle > 0 ){        
      const interval = setInterval(() => {  
        fetchDialingDeviceList({
            tenant_id_array: tenants.map(tenant => tenant.tenant_id)
        });     
        // fetchChannelStateMonitoringList({deviceId:0});
      }, statisticsUpdateCycle * 1000);  
      return () => clearInterval(interval);
    }
  }, [statisticsUpdateCycle]);

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
                      fill={COLORS[entry.name.split(':')[0] as ChannelStatus]} 
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
              value={secondSelect}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder={secondSelect || "선택"} />
              </SelectTrigger>
              <SelectContent>
                {firstSelect === '장비번호' &&
                  <SelectItem key={' '} value={' '}>{'전체장비'}</SelectItem> 
                }
                {firstSelect === '캠페인 모드' &&
                <>
                  <SelectItem key={' '} value={' '}>{'전체캠페인'}</SelectItem> 
                  <SelectItem key={'회선사용안함'} value={'회선사용안함'}>{'회선사용안함'}</SelectItem> 
                  <SelectItem key={'모든캠페인사용'} value={'모든캠페인사용'}>{'모든캠페인사용'}</SelectItem> 
                </>
                }
                {firstSelect === '채널 그룹 모드' &&
                <>
                  <SelectItem key={' '} value={' '}>{'전체 채널그룹'}</SelectItem> 
                  <SelectItem key={'회선사용안함'} value={'회선사용안함'}>{'회선사용안함'}</SelectItem> 
                  <SelectItem key={'모든그룹아이디사용'} value={'모든그룹아이디사용'}>{'모든 그룹아이디 사용'}</SelectItem> 
                </>
                }
                {firstSelect === '장비번호'?
                  secondModeEquipment.map(option => (
                    <SelectItem key={option.key} value={option.key}>[{option.key}]{option.name}</SelectItem>
                  ))
                  :
                  firstSelect === '캠페인 모드'?
                  secondModeCampaign.map(option => (
                    <SelectItem key={option.key} value={option.key}>{option.name}</SelectItem>
                  ))
                  :
                  firstSelect === '발신 모드'?
                  secondModeSender.map(option => (
                    <SelectItem key={option.key} value={option.key}>{option.name}</SelectItem>
                  ))
                  :
                  firstSelect === '채널 그룹 모드'?
                  secondModeCampaignGroup.map(option => (
                    <SelectItem key={option.key} value={option.key}>{option.name}</SelectItem>
                  ))
                  :
                  secondModeAll.map(option => (
                    <SelectItem key={option.key} value={option.key}>{option.name}</SelectItem>
                  ))
                }
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
              rowHeight={30}
              headerRowHeight={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelMonitor;