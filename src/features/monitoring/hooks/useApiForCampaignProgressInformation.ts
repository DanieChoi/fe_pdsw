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

export function useApiForCampaignProgressInformation(params: CampaignProgressInformationRequest) {
  const queryClient = useQueryClient();

  console.log("params.campaignId !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ", params.campaignId);
  console.log("typeof params.campaignId !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ", typeof params.campaignId);
  console.log("typeof params.campaignId !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ", typeof String(params.campaignId));
   

  // --- Use the specific query key ---
  const specificQueryKey = ['mainCampaignProgressInformation', params.tenantId, String(params.campaignId)];

  console.log("캠페인 진행 정보 api 실행 확인, Query Key:", specificQueryKey);

  const query = useQuery<CampaignProgressInformationResponse, MonitoringApiError>({
    // Use the specific key here
    queryKey: specificQueryKey,
    queryFn: () => fetchCampaignProgressInformation(params),
    // Enable only when valid IDs are present
    enabled: !!params.campaignId && params.campaignId !== 0 && !!params.tenantId,
    staleTime: 0,         // Data is immediately stale
    refetchOnMount: true, // Refetch when component mounts
    // refetchOnWindowFocus: true, // Optional: refetch on window focus
  });

  const invalidateCache = () => {
    // Invalidate using the specific key
    return queryClient.invalidateQueries({ queryKey: specificQueryKey });
  };

  const refetchData = async () => {
    await invalidateCache();
    return query.refetch();
  };

  return {
    ...query,
    invalidateCache, // Keep this if you need manual invalidation elsewhere
    refetchData, // Keep this if you need manual refetch elsewhere
  };
}