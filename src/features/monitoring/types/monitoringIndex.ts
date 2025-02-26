// src/features/monitoring/types/monitoringIndex.ts

// 캠페인진행정보 요청 
export interface CampaignProgressInformationRequest {
  tenantId: number;
  campaignId: number;
}

// 캠페인진행정보 응답 데이터 타입
export interface CampaignProgressInformationResponseDataType {
  tenantId: number;                   //테넌트ID
  detectMachineRoaming: number;       //해외로밍밍
  detectMachineEtc: number;           //기타기계음
  detectMachineMissingNumber: number; //결번
  detectSilenceCnt: number;           //10초 동안 묵음 지속
  detectMachineLineBusy: number;      //소리샘-통화중
  deleteBeforeDial: number;           //미발신 삭제
  nogautoPopNotDial: number;          //미발신 사유 코드 Autopreview시 Popup 수신후, 상담원 미발신 선택
  nogtimeOutCallback: number;         //미발신 사유 코드 콜백 Time over
  nogautoPopNoReady: number;          //미발신 사유 코드 Autopreview시 Popup 수신후, 상담원 상태 변경
  nogautoDialNoReady: number;         //미발신 사유 코드 Autopreview시 CIDS->CIOD 발신 여부 확인전, 상담원 상태변경
  nogtimeContradictory: number;       //미발신 사유 코드 발신방지, 예약시간 잘못 설정
  nogautoDialFailMode: number;        //미발신 사유 코드 Autopreview시 CIDS->CIOD 발신 여부 확인전, 상담원 모드변경
  agentNoAnswerCnt: number;           //상담사 무응답
  nogautoNoEmployeeId: number;        //미발신 사유 코드 SystemPreview시 발신리스트에 상담원 이름이 입력되지 않음
  nogautoPopNoAnswer: number;         //미발신 사유 코드 Autopreview시 Popup 수신후, 발신여부 선택 안함
  detectMachineNoanswer: number;      //소리샘-무응답
  customerOnHookCnt: number;          //고객이 바로 끊은 건수
  detectMachinePowerOff: number;      //소리샘-전원꺼짐
  nogautoPopFailMode: number;         //미발신 사유 코드 Autopreview시 Popup 수신후, 상담원 모드 변경
  reuseCnt: number;                   //캠페인 재사용 회수 : 1(최초발신), 2~(재발신)
  campId: number;                     //캠페인ID
  totLstCnt: number;                  //총 리스트 건수
  totDialCnt: number;                 //총 발신 건수
  acct: number;                       //기계음 실패 건수
  scct: number;                       //발신 성공 건수
  overDial: number;                   //Over Dial
  nonTTCT: number;                    //순수 발신 건수
  campListQuery: string;              //List Query
  tect: number;                       //전화번호 오류 건수
  blackList: number;                  //통화방지 리스트
  abct: number;                       //포기 분배 실패
  retryCall: number;                  //재시도 콜(현재 버퍼에 남은 Call 중 재시도 할 Call수)
  dialingCall: number;                //발신 중인 콜
  nonServiceCnt: number;              //고객 최대시간 초과
  firstCall: number;                  //최초 시도 콜(현재 버퍼에 남은 Call 중 최초시도 할 Call수)
  agentBusyCnt: number;               //상담사 통화 중
  blackListCall: number;              //통화방지 콜
  fileIndex: number;                  //
  recallCnt: number;                  //예약 리스트(현재 남은 Call 중 남은 예약 Call수)
  lineStopCnt: number;                //다이얼 실패 건수
  fact: number;                       //팩스/모뎀 실패 건수
  noAgentCnt: number;                 //멘트 청취 후 상담사 미연결
  nogdeleteGL: number;                //미발신 사유 코드 실시간 발신방지 건수
  nogaddBL: number;                   //미발신 사유 코드 실시간 블랙리스트 추가
  agentDropCnt: number;               //상담사 바로 끊음
  customerDropCnt: number;            //고객 포기
  nact: number;                       //무응답 실패 건수
  deleteAfterDial: number;            //발신 후 삭제
  etct: number;                       //기타 실패 건수
  timeoutRecall: number;              //타임아웃 콜(시간이 지나서 발신하지 않은 예약 호)
  dialToneSilence: number;            //다이얼 톤이 안 들림
  buct: number;                       //통화 중 실패 건수
  agentConnect: number;               //상담사 연결
  nognotDialAgent: number;            //미발신 사유 코드 지정상담원이 Dial이 아닐 때
  nogblockTime: number;               //미발신 사유 코드 발신방지 시각
  nognotDialReady: number;            //미발신 사유 코드 지정상담원이 Ready가 아닐 때
}

// 캠페인진행정보 응답
export interface CampaignProgressInformationResponse {
  code: string;
  message: string;
  progressInfoList: CampaignProgressInformationResponseDataType[];
}

// 캠페인 운영 이력 조회 요청 
export interface CampaignHistoryRequest {
  campaign_id: number[];
  dial_kind: number[];
}

// 캠페인 운영 이력 조회 응답 데이터 타입
export interface CampaignHistoryResponseDataType {
  campaign_id: number;
  campaign_sequence: number;
  tenant_id: number;
  campaign_name: string;
  dial_kind: number;
  delete_flag: number;
  complete_flag: number;
  start_date: string;
  start_time: string;
  end_time: string;
  running_time: number;
  list_count: number;
  agent_count: number;
  success_count: number;
  failure_count: number;
}

// 캠페인 운영 이력 조회 응답
export interface CampaignHistoryResponse {
  result_code: number;
  result_msg: string;
  result_count: number;
  total_count: number;
  result_data: CampaignHistoryResponseDataType[];
}

// 상담원 상태 모니터링 데이터 타입
export interface AgentStateMonitoringListDataResponse {
  counselorId: string;
  counselorName: string;
  statusCode: string;
  statusTime: string;
}

// 상담원 상태 모니터링 응답 
export interface AgentStateMonitoringListResponse {
  code: number;
  message: string;
  counselorStatusList: AgentStateMonitoringListDataResponse[];
}


// 모니터링 API 에러 타입
export interface MonitoringApiError {
  message: string;
  status: number;
}


