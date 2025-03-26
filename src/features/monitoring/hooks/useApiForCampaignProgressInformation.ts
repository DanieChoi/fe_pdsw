// // src/features/campaignManager/hooks/useApiForCallingNumber.ts
// import { useMutation } from '@tanstack/react-query';
// import { fetchCampaignProgressInformation } from '../api/mainCampaignProgressInformation';
// import { UseMutationOptions } from '@tanstack/react-query';
// import { CampaignProgressInformationRequest, CampaignProgressInformationResponse, MonitoringApiError } from '../types/monitoringIndex';

// export function useApiForCampaignProgressInformation(
//   options?: UseMutationOptions<CampaignProgressInformationResponse, MonitoringApiError, CampaignProgressInformationRequest>
// ) {
//   return useMutation({
//     mutationKey: ['mainCampaignProgressInformation'],
//     mutationFn: fetchCampaignProgressInformation,
//     onSuccess: (data, variables, context) => {
//       console.log('API Response:', {
//         code: data.code,
//         message: data.message,
//         data: data.progressInfoList
//       });
//       options?.onSuccess?.(data, variables, context);
//     },
//     onError: (error: MonitoringApiError, variables: CampaignProgressInformationRequest, context: unknown) => {
//       // console.error('API Error:', error);
//       // toast.error(error.message || '데이터 로드에 실패했습니다.');
//       options?.onError?.(error, variables, context);
//     },
//   });
// }

// src/features/campaignManager/hooks/useApiForCallingNumber.ts
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchCampaignProgressInformation } from '../api/mainCampaignProgressInformation';
import { CampaignProgressInformationRequest, CampaignProgressInformationResponse, MonitoringApiError } from '../types/monitoringIndex';

/**
 * 캠페인 진행 정보를 조회하는 훅 - 순수 useQuery 방식
 */
export function useApiForCampaignProgressInformation(params: CampaignProgressInformationRequest) {
  const queryClient = useQueryClient();
  // alert("useApiForCampaignProgressInformation 실행 check")

  console.log("캠페인 진행 정보 api 실행 확인 !!");
  

  const query = useQuery<CampaignProgressInformationResponse, MonitoringApiError>({
    // queryKey: ['mainCampaignProgressInformation', params.tenantId, params.campaignId],
    queryKey: ['mainCampaignProgressInformation'],
    queryFn: () => fetchCampaignProgressInformation(params),
    // enabled: !!params.campaignId && !!params.tenantId,
    // staleTime: 5 * 60 * 1000, // 5분 캐싱 (필요에 따라 주석 해제)
    staleTime: 0,         // 데이터가 즉시 stale 상태가 되도록 설정
    refetchOnMount: true, // 컴포넌트가 마운트될 때마다 다시 요청
    // refetchOnWindowFocus: true, //
  });
  
  // 캐시 무효화 함수 추가
  const invalidateCache = () => {
    return queryClient.invalidateQueries({ 
      queryKey: ['mainCampaignProgressInformation', params.tenantId, params.campaignId] 
    });
  };
  
  // 캐시 무효화 후 다시 불러오는 함수 추가
  const refetchData = async () => {
    await invalidateCache();
    return query.refetch();
  };
  
  return {
    ...query,
    invalidateCache,
    refetchData,
  };
}