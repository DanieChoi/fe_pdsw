// src/features/listManager/types/listManagerIndex.ts

export const apiUrl: string = 'http://localhost:4000/api/v1/counselor';

// 리스트매니저 API 에러 타입
export interface ListManagerApiError {
  message: string;
  status: number;
}

// 발신 리스트 추가 요청 데이터 타입
export interface CallingListInsertDataType {
  customer_key: string;
  sequence_number: number;
  customer_name: string;
  phone_number1: string;
  phone_number2: string;
  phone_number3: string;
  phone_number4: string;
  phone_number5: string;
  reserved_time: string;
  token_data: string;
}
// 발신 리스트 추가 요청 
export interface CallingListInsertRequest {
  campaign_id: number;
  list_flag: string;
  calling_list: CallingListInsertDataType[];
}

// 발신 리스트 추가 응답 데이터 타입
export interface CallingListInsertResponseDataType {
  customer_key: string;
  sequence_number: number;
  customer_name: string;
  phone_number1: string;
  reserved_time: string;
  token_data: string;
}

// 발신 리스트 추가 응답
export interface CallingListInsertResponse {
  result_code: number;
  result_msg: string;
  result_count: number;
  request_count: number;
  result_data: CallingListInsertResponseDataType[];
}

// 삭제 응답 타입
export interface DeleteResponse {
  result_code: number;
  result_msg: string;
}


