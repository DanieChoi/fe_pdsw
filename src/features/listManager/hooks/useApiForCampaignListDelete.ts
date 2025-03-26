// // C:\nproject\fe_pdsw\src\features\listManager\hooks\useApiForCampaignListDelete.ts
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { UseMutationOptions } from '@tanstack/react-query';
// import { DeleteResponse, ListManagerApiError } from '../types/listManagerIndex';
// import { fetchCallingListDelete } from '../api/mainCallingListDelete';
// import { toast } from 'react-toastify';

// const useApiForCampaignListDelete = (
//   options?: UseMutationOptions<DeleteResponse, ListManagerApiError, number> // number 타입 유지
// ) => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationKey: ['campaignListDelete'],
//     mutationFn: fetchCallingListDelete, // campaignId를 인자로 받음
//     onSuccess: (data, variables, context) => {
//       console.log('API Response:', {
//         code: data.result_code,
//         message: data.result_msg,
//       });

//       toast.success('캠페인 리스트 삭제 성공 check !!!!!!!!!!!');
//       // alert("캠페인 리스트 삭제 그리고 나는 기대 한다 뭐를? 발신 목록2의 실시간 삭제를 !!");

//       // 캐시 무효화 (트리 메뉴 데이터 갱신을 위해)
//       // 전체 트리 메뉴 데이터 무효화
//       queryClient.invalidateQueries({ 
//         queryKey: ['treeMenuDataForSideMenu'] 
//       });
      
//       // 모든 캠페인 진행 정보 무효화 (모든 캠페인 ID에 대해)
//       queryClient.refetchQueries({ 
//         queryKey: ['mainCampaignProgressInformation'],
//         exact: false  // 정확한 일치가 아닌 부분 일치도 포함
//       });
      
//       // 삭제된 특정 캠페인 진행 정보 무효화 (variables는 삭제된 캠페인 ID)
//       if (variables) {
//         queryClient.invalidateQueries({
//           queryKey: ['mainCampaignProgressInformation', 1, variables],
//           exact: false
//         });
//       }

//       options?.onSuccess?.(data, variables, context);
//     },
//     onError: (error: ListManagerApiError, variables: number, context: unknown) => {
//       console.error('API Error:', error);
//       // UI에 에러 메시지 표시 (필요한 경우 toast 주석 해제)
//       // toast.error(error.message || '데이터 삭제에 실패했습니다.');
//       options?.onError?.(error, variables, context);
//     },
//   });
// };

// export default useApiForCampaignListDelete;

// C:\nproject\fe_pdsw\src\features\listManager\hooks\useApiForCampaignListDelete.ts
import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import { DeleteResponse, ListManagerApiError } from '../types/listManagerIndex';
import { fetchCallingListDelete } from '../api/mainCallingListDelete';
import { toast } from 'react-toastify';
// ... other imports

const useApiForCampaignListDelete = (
  options?: UseMutationOptions<DeleteResponse, ListManagerApiError, number>
): ReturnType<typeof useMutation<DeleteResponse, ListManagerApiError, number>> => {
  const queryClient = useQueryClient();
  // Assuming you can get the tenantId, maybe from authStore?
  // If it's always 1, you can hardcode it.
  // const { tenant_id } = useAuthStore.getState(); // Example if needed dynamically

  return useMutation({
    mutationKey: ['campaignListDelete'],
    mutationFn: fetchCallingListDelete,
    onSuccess: (data, deletedCampaignId, context) => { // Renamed 'variables' for clarity
      console.log('API Response (Delete):', { /* ... */ });
      toast.success('캠페인 리스트 삭제 성공 check !!!!!!!!!!!');

      // --- Cache Invalidation ---

      // 1. Invalidate the side menu tree data
      queryClient.invalidateQueries({
        queryKey: ['treeMenuDataForSideMenu']
      });

      // 2. Invalidate the specific campaign's progress information
      //    Make sure tenantId is correct (using 1 as per previous code)
      const tenantIdForQueryKey = 1; // Or get dynamically if needed

      // alert("deletedCampaignId 확인 : " + deletedCampaignId);
      // alert("typeof deletedCampaignId 확인 : " + typeof deletedCampaignId);

      queryClient.invalidateQueries({
        queryKey: ['mainCampaignProgressInformation', tenantIdForQueryKey, deletedCampaignId]
      });

      // Optional: Invalidate the general key if other parts of the app
      // display aggregated progress info not tied to a specific campaignId in the key.
      // queryClient.invalidateQueries({ queryKey: ['mainCampaignProgressInformation'] });

      // Call original onSuccess if provided
      options?.onSuccess?.(data, deletedCampaignId, context);
    },
    onError: (error: ListManagerApiError, variables: number, context: unknown) => {
      console.error('API Error (Delete):', error);
      // toast.error(...)
      options?.onError?.(error, variables, context);
    },
  });
};

export default useApiForCampaignListDelete;