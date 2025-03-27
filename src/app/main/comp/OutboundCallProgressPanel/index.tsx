'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { Table, TableRow, TableHeader, TableCell } from "@/components/ui/table-custom";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import DataGrid, { Column as DataGridColumn } from 'react-data-grid';
import { useApiForCallProgressStatus } from '@/features/monitoring/hooks/useApiForCallProgressStatus';
import { useMainStore, useCampainManagerStore } from '@/store';
import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';
import { useApiForPhoneDescription } from '@/features/campaignManager/hooks/useApiForPhoneDescription';
import { useEnvironmentStore } from '@/store/environmentStore';

// 타입 정의
interface Stats {
  waiting: number;
  firstCall: number;
  retryCall: number;
  distributing: number;
}

interface BarData {
  name: string;
  value: number;
}

interface GridData {
  skillId: string;
  campaignId: string;
  campaignName: string;
  priority: string;
  custKey: string;
  custName: string;
  phoneType: string;
  phone1: string;
  attempt1: string;
  phone2: string;
  attempt2: string;
  phone3: string;
  attempt3: string;
  phone4: string;
  attempt4: string;
  phone5: string;
  attempt5: string;
  result: string;
}

interface CampaignData {
  stats: Stats;
  barData: BarData[];
  gridData: GridData[];
}

interface CampaignDataMap {
  [key: string]: CampaignData;
}

interface Column extends DataGridColumn<GridData> {
  key: keyof GridData;
  name: string;
}

// 발신진행상태 목록 데이터 타입
interface SummaryCallProgressStatusDataType {
  campaignId: number;                 //캠페인ID
  campaignName: string;               //캠페인 이름
  event: number;                      //채널에 발생한 마지막 이벤트(0(NONE), 1(ON_HOOK), 2(OFF_HOOK), 3(PRESS_DIGIT), 4(NETWORK_DELAY), 5(INTERRUPT_CALL), 6(RINGBACK), 7(CONNECT), 8(DETECT_BEGIN), 9(DETECT_END), 10(ROUTE))
  dialSequence: number;               //발신 일련 번호
  dialResult: number;                 //발신 결과 코드(0(NONE), 1(MAN), 2(BUSY), 3(NO_ANSWER), 4(FAX_MODEM), 5(ANSWERING_MACHINE), 6(ETC_FAIL), 7(INVALID_NUMBER), 8(DIALING), 9(LINE_STOP), 10(CUSTOMER_ONHOOK), 11(SILENCE), 12(DIALTONE_SILENCE), 13(BLACK_LIST), 14(ROUTE_FAIL), 15(BEFORE_BLACKLIST), 2501(MACHINE_BUSY), 2502(MACHINE_NOANSWER), 2503(MACHINE_POWEROFF), 2504(MACHINE_ROAMING), 2505(MACHINE_MISSING_NUMBER), 2506(MACHINE_ETC))
  customerName: string;               //고객 이름
  customerKey: string;                //고객 키
  phoneNumber: string[];              //발신 번호
  phoneDialCount: number[];           //발신 번호 별 시도 회수
  dialedPhone: number;                //발신 번호 인덱스
  reuseCount: number;                 //캠페인 재사용 회수 : 1(최초발신), 2~(재발신)
  retryCall: number;                  //재시도 여부 : 0(재시도 없음), 1(재시도 있음)
  waiting: number;                    //대기상담원
  firstCall: number;                  //최초발신
  _retryCall: number;                 //재시도발신
  distributing: number;               //분배 대기
  result: string;                     //다이얼 결과
  phoneType: string;                  //발신번호 구분
}

interface OutboundCallProgressPanelProps {
  externalCampaignId?: string;
  onCampaignChange?: (campaignId: string) => void;
  onDataUpdate?: (data: CampaignData) => void;
}

const OutboundCallProgressPanel: React.FC<OutboundCallProgressPanelProps> = ({
  externalCampaignId,
  onCampaignChange,
  onDataUpdate
}) => {
  const [internalSelectedCampaign, setInternalSelectedCampaign] = useState<string>('all');
  const { campaigns } = useMainStore();
  const { campaignSkills, setCampaignSkills,phoneDescriptions, setPhoneDescriptions } = useCampainManagerStore();
  const [ _campaignData, _setCampaignData ] = useState<CampaignDataMap>({});
  const [ waitingCounselorCnt, setWaitingCounselorCnt ] = useState<number>(0);
  const { statisticsUpdateCycle } = useEnvironmentStore();

  // 실제 사용할 캠페인 ID 결정
  const selectedCampaign = externalCampaignId ?? internalSelectedCampaign;



  // 빈 데이터 정의
  const emptyData: CampaignData = {
    stats: {
      waiting: 0,
      firstCall: 0,
      retryCall: 0,
      distributing: 0
    },
    barData: [
      { name: '최초 발신용', value: 0 },
      { name: '재시도 발신용', value: 0 },
      { name: '분배 대기', value: 0 }
    ],
    gridData: []
  };

  // 캠페인별 데이터
  // const campaignData: CampaignDataMap = {
  //   test1: {
  //     stats: {
  //       waiting: 2,
  //       firstCall: 3,
  //       retryCall: 2,
  //       distributing: 1
  //     },
  //     barData: [
  //       { name: '최초 발신용', value: 80 },
  //       { name: '재시도 발신용', value: 50 },
  //       { name: '분배 대기', value: 30 }
  //     ],
  //     gridData: [
  //       {
  //         skillId: '1246',
  //         campaignId: '0125',
  //         campaignName: 'test1캠페인',
  //         priority: '2',
  //         custKey: '241545',
  //         custName: '김철수',
  //         phoneType: '일반전화',
  //         phone1: '01087654321',
  //         attempt1: '1',
  //         phone2: '01087654321',
  //         attempt2: '1',
  //         phone3: '01087654321',
  //         attempt3: '2',
  //         phone4: '01087654321',
  //         attempt4: '2',
  //         phone5: '01087654321',
  //         attempt5: '2',
  //         result: '실패'
  //       }
  //     ]
  //   },
  //   test2: {
  //     stats: {
  //       waiting: 1,
  //       firstCall: 2,
  //       retryCall: 1,
  //       distributing: 0
  //     },
  //     barData: [
  //       { name: '최초 발신용', value: 60 },
  //       { name: '재시도 발신용', value: 40 },
  //       { name: '분배 대기', value: 20 }
  //     ],
  //     gridData: [
  //       {
  //         skillId: '1247',
  //         campaignId: '0126',
  //         campaignName: 'test2캠페인',
  //         priority: '3',
  //         custKey: '241546',
  //         custName: '이영희',
  //         phoneType: '회사전화',
  //         phone1: '01098765432',
  //         attempt1: '2',
  //         phone2: '01098765432',
  //         attempt2: '1',
  //         phone3: '01098765432',
  //         attempt3: '1',
  //         phone4: '01087654321',
  //         attempt4: '2',
  //         phone5: '01087654321',
  //         attempt5: '2',
  //         result: '진행중'
  //       }
  //     ]
  //   }
  // };

  // 전체 데이터 계산을 위한 useMemo 훅 사용
  const allCampaignData = useMemo<CampaignData>(() => {
    if (Object.keys(_campaignData).length === 0) return emptyData;
    // 모든 캠페인의 통계 합계 계산
    const totalStats = Object.values(_campaignData).reduce((acc, campaign) => ({
      waiting: acc.waiting + campaign.stats.waiting,
      firstCall: acc.firstCall + campaign.stats.firstCall,
      retryCall: acc.retryCall + campaign.stats.retryCall,
      distributing: acc.distributing + campaign.stats.distributing
    }), { waiting: 0, firstCall: 0, retryCall: 0, distributing: 0 });

    // 모든 캠페인의 바 차트 데이터 합계 계산
    const totalBarData = [
      {
        name: '최초 발신용',
        value: Object.values(_campaignData).reduce((sum, campaign) =>
          sum + (campaign.barData.find(item => item.name === '최초 발신용')?.value ?? 0), 0
        )
      },
      {
        name: '재시도 발신용',
        value: Object.values(_campaignData).reduce((sum, campaign) =>
          sum + (campaign.barData.find(item => item.name === '재시도 발신용')?.value ?? 0), 0
        )
      },
      {
        name: '분배 대기',
        value: Object.values(_campaignData).reduce((sum, campaign) =>
          sum + (campaign.barData.find(item => item.name === '분배 대기')?.value ?? 0), 0
        )
      }
    ];

    // 모든 캠페인의 그리드 데이터 통합
    const totalGridData = Object.values(_campaignData).flatMap(campaign => campaign.gridData);

    return {
      stats: totalStats,
      barData: totalBarData,
      gridData: totalGridData
    };
  }, [_campaignData]);

 // 현재 선택된 캠페인의 데이터 (안전하게 처리)
 const currentData = useMemo(() => {
  if (selectedCampaign === 'all') return allCampaignData;
  if (!selectedCampaign) return emptyData;
  return _campaignData[selectedCampaign] || emptyData;
}, [selectedCampaign, allCampaignData, _campaignData]);

  // 데이터 업데이트 시 부모 컴포넌트에 알림
  useEffect(() => {
    if (onDataUpdate) {
      onDataUpdate(currentData);
    }
  }, [currentData, onDataUpdate]);

  // 그리드 컬럼 정의
  const columns: Column[] = [
    { key: 'skillId', name: '스킬아이디' },
    { key: 'campaignId', name: '캠페인아이디' },
    { key: 'campaignName', name: '캠페인이름' },
    { key: 'priority', name: '다이얼 순번' },
    { key: 'custKey', name: '고객키' },
    { key: 'custName', name: '고객이름' },
    { key: 'phoneType', name: '발신번호 구분' },
    { key: 'phone1', name: '전화번호1' },
    { key: 'attempt1', name: '시도횟수' },
    { key: 'phone2', name: '전화번호2' },
    { key: 'attempt2', name: '시도횟수' },
    { key: 'phone3', name: '전화번호3' },
    { key: 'attempt3', name: '시도횟수' },
    { key: 'phone4', name: '전화번호3' },
    { key: 'attempt4', name: '시도횟수' },
    { key: 'phone5', name: '전화번호3' },
    { key: 'attempt5', name: '시도횟수' },
    { key: 'result', name: '다이얼 결과' }
  ];

  // 캠페인 변경 핸들러
  const handleCampaignChange = (value: string): void => {
    if (onCampaignChange) {
      onCampaignChange(value);
    } else {
      setInternalSelectedCampaign(value);
    }
    if( value !== 'all'){
      const campaignInfo = campaigns.find(data => data.campaign_id === Number(value));
      fetchCallProgressStatus({
        tenantId: campaignInfo?.tenant_id+'' || '1',
        campaignId: campaignInfo?.campaign_id+'' || '0'
      });
    }else{
      fetchCallProgressStatus({
        tenantId: '1',
        campaignId: '0'
      });
    }
  };

  // Select 컴포넌트 렌더링 여부 결정
  const [ shouldRenderSelect , setShouldRenderSelect ] = useState<boolean>(false);

  // 발신 진행 정보 api 호출
  const { mutate: fetchCallProgressStatus } = useApiForCallProgressStatus({
    onSuccess: (data) => {  
      const tempList = data.sendingProgressStatusList;
      setWaitingCounselorCnt( data.waitingCounselorCnt );
      if( tempList.length > 0){
        const sumCallProgressStatus:SummaryCallProgressStatusDataType[] = [];
        for( let i=0;i<tempList.length;i++){
          const index = sumCallProgressStatus.findIndex((data) => data.campaignId === tempList[i].campaignId);
          if( index === -1){
            sumCallProgressStatus.push({...tempList[i],
              waiting: 0,  //대기상담원
              firstCall: tempList[i].reuseCount === 1 ? 1 : 0, //최초발신
              _retryCall: tempList[i].reuseCount === 2 ? 1 : 0, //재시도발신
              distributing: tempList[i].waitingLstCnt, //분배 대기
              result: campaigns.find((campaign) => campaign.campaign_id === tempList[i].campaignId)?.end_flag === 1 ? '진행중' : '완료',
              phoneType: (() => {
                const campaign = campaigns.find((campaign) => campaign.campaign_id === tempList[i].campaignId);
                const phoneDescription = phoneDescriptions.find((phoneDescription) => phoneDescription.description_id === campaign?.dial_phone_id);
                return phoneDescription ? (phoneDescription as any)[`phone${tempList[i].dialedPhone}`] || '' : '';
              })()
            });
          }else{
            // sumCallProgressStatus[index].waiting += tempList[i].waiting;
            sumCallProgressStatus[index].firstCall += tempList[i].reuseCount === 1 ? 1 : 0;
            sumCallProgressStatus[index].retryCall += tempList[i].reuseCount === 2 ? 1 : 0;
            sumCallProgressStatus[index].distributing += tempList[i].waitingLstCnt;
          }
        }

        const tempCampaignData: CampaignDataMap = {};
        for( let i=0;i<sumCallProgressStatus.length;i++){
          const _tempCampaignData: CampaignDataMap = {
            [sumCallProgressStatus[i].campaignId]: {
              stats: {
                waiting: sumCallProgressStatus[i].waiting,    //대기상담원
                firstCall: sumCallProgressStatus[i].firstCall,//최초발신
                retryCall: sumCallProgressStatus[i].retryCall,//재시도발신
                distributing: sumCallProgressStatus[i].distributing//분배 대기
              },
              barData: [
                { name: '최초 발신용', value: sumCallProgressStatus[i].firstCall },  //최초 발신용
                { name: '재시도 발신용', value: sumCallProgressStatus[i].retryCall },  //재시도 발신용
                { name: '분배 대기', value: sumCallProgressStatus[i].waiting - (sumCallProgressStatus[i].firstCall+sumCallProgressStatus[i].retryCall) }   //분배 대기
              ],
              gridData: [
                {
                  skillId: campaignSkills.filter((skill) => skill.campaign_id === sumCallProgressStatus[i].campaignId)
                  .map((data) => data.skill_id)
                  .join(','),
                  campaignId: sumCallProgressStatus[i].campaignId+'',
                  campaignName: sumCallProgressStatus[i].campaignName,
                  priority: sumCallProgressStatus[i].dialSequence+'', //다이얼 순번
                  custKey: sumCallProgressStatus[i].customerKey,
                  custName: sumCallProgressStatus[i].customerName,
                  phoneType: sumCallProgressStatus[i].phoneType,  
                  phone1: sumCallProgressStatus[i].phoneNumber[0]+'',
                  attempt1: sumCallProgressStatus[i].phoneDialCount[0]+'',
                  phone2: sumCallProgressStatus[i].phoneNumber[1]+'',
                  attempt2: sumCallProgressStatus[i].phoneDialCount[1]+'',
                  phone3: sumCallProgressStatus[i].phoneNumber[2]+'',
                  attempt3: sumCallProgressStatus[i].phoneDialCount[2]+'',
                  phone4: sumCallProgressStatus[i].phoneNumber[3]+'',
                  attempt4: sumCallProgressStatus[i].phoneDialCount[3]+'',
                  phone5: sumCallProgressStatus[i].phoneNumber[4]+'',
                  attempt5: sumCallProgressStatus[i].phoneDialCount[4]+'',
                  result: sumCallProgressStatus[i].result   
                }
              ]
            }
          };
          Object.assign(tempCampaignData, _tempCampaignData);
        }
        _setCampaignData(tempCampaignData);
      }else{
        _setCampaignData({
              ' ': {
                stats: {
                  waiting: data.waitingCounselorCnt,
                  firstCall: 0,
                  retryCall: 0,
                  distributing: 0
                },
                barData: [
                  { name: '최초 발신용', value: 0 },
                  { name: '재시도 발신용', value: 0 },
                  { name: '분배 대기', value: 0 }
                ],
                gridData: [
                ]
              }
        });
      }
      // setDataList(tempList);
      // setSelectedCall(tempList[0]);
      console.log("API 응답 데이터:", tempList); 
    } 
  });
  
  // 전화번호설명 템플릿 조회
  const { mutate: fetchPhoneDescriptions } = useApiForPhoneDescription({
    onSuccess: (data) => {
      setPhoneDescriptions(data.result_data);
    }
  });

  // 캠페인스킬 조회
  const { mutate: fetchCampaignSkills } = useApiForCampaignSkill({
    onSuccess: (data) => {
      setCampaignSkills(data.result_data);
    }
  });
  
  useEffect(() => {
    if( externalCampaignId ){
      const campaignInfo = campaigns.find(data => data.campaign_id === Number(externalCampaignId));
      fetchCallProgressStatus({
        tenantId: campaignInfo?.tenant_id+'' || '1',
        campaignId: campaignInfo?.campaign_id+'' || '0'
      });
      setShouldRenderSelect(false);
    }else{
      setShouldRenderSelect(true);
    }
  }, [externalCampaignId]);

  useEffect(() => {
    if( campaignSkills.length > 0 && phoneDescriptions.length > 0){
      fetchCallProgressStatus({
        tenantId: '1',
        campaignId: '0'
      });
    }
  }, [campaignSkills, phoneDescriptions]);

  useEffect(() => {
    let count = 0;
    if( campaignSkills.length === 0){
      fetchCampaignSkills({
        session_key: '',
        tenant_id: 0,
      });
      count++;
    }
    if( phoneDescriptions.length === 0){
      fetchPhoneDescriptions({
        session_key: '',
        tenant_id: 0,
      });
      count++;
    }
  }, []);

  return (
    <div className="flex flex-col gap-5 h-full out-wrap">
      {shouldRenderSelect && (
        <div className="flex items-center gap-2">
          <Label className="w-20 min-w-20">캠페인</Label>
          <Select onValueChange={handleCampaignChange} value={selectedCampaign}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="캠페인전체" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">캠페인전체</SelectItem>
              {campaigns.map(option => (
                <SelectItem key={option.campaign_id} value={option.campaign_id.toString()}>
                  [{option.campaign_id}]{option.campaign_name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="flex gap-5 h-[calc(100%-46px)] out-call-responsive-container">
        <div className="flex-1 out-call-responsive-left gap-5">
          <div className="">
            <Table>
              <thead>
                <TableRow>
                  <TableHeader className="!bg-[#DDF4F2] !text-center text-sm font-normal text-[#3A9D6C] !h-[30px]">
                    대기 상담원
                  </TableHeader>
                  <TableHeader className="!bg-[#FEE9EC] !text-center text-sm font-normal text-[#C95E5E] !h-[30px]">
                    최초발신
                  </TableHeader>
                  <TableHeader className="!bg-[#E8EFFA] !text-center text-sm font-normal text-[#338BD3] !h-[30px]">
                    재시도 발신
                  </TableHeader>
                  <TableHeader className="!bg-[#F6F0FA] !text-center text-sm font-normal text-[#9459BF] !h-[30px]">
                    분배대기
                  </TableHeader>
                </TableRow>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell className="!text-center text-sm !h-[30px]">{waitingCounselorCnt}</TableCell>
                  <TableCell className="!text-center text-sm !h-[30px]">{currentData.stats.firstCall}</TableCell>
                  <TableCell className="!text-center text-sm !h-[30px]">{currentData.stats.retryCall}</TableCell>
                  <TableCell className="!text-center text-sm !h-[30px]">{currentData.stats.distributing}</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </div>

          <div className="w-full h-[calc(100%-57px)]">
            <ResponsiveContainer width="100%" height="100%" className="m-auto">
              <BarChart
                data={currentData.barData}
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
                  fill="#4FD1C5"
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid-custom-wrap flex-1 out-call-responsive-right">
          <DataGrid
            columns={columns}
            rows={currentData.gridData}
            className="grid-custom"
            rowHeight={30}
            headerRowHeight={30}
          />
        </div>
      </div>
    </div>
  );
};

export default OutboundCallProgressPanel;