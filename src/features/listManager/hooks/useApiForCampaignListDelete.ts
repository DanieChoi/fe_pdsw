// C:\nproject\fe_pdsw\src\features\listManager\hooks\useApiForCampaignListDelete.ts
// import { useMutation } from '@tanstack/react-query';
// import { fetchCallingListDelete } from '../api/mainCallingListDelete';
// import { UseMutationOptions } from '@tanstack/react-query';
// import { DeleteResponse, ListManagerApiError } from '../types/listManagerIndex';

// export function useApiForCallingListDelete(
//   options?: UseMutationOptions<DeleteResponse, ListManagerApiError, number>
// ) {
//   return useMutation({
//     mutationKey: ['mainCallingListDelete'],
//     mutationFn: fetchCallingListDelete,
//     onSuccess: (data, variables, context) => {
//       console.log('API Response:', {
//         code: data.result_code,
//         message: data.result_msg,
//       });
//       options?.onSuccess?.(data, variables, context);
//     },
//     onError: (error: ListManagerApiError, variables: number, context: unknown) => {
//       // console.error('API Error:', error);
//       // toast.error(error.message || '데이터 로드에 실패했습니다.');
//       options?.onError?.(error, variables, context);
//     },
//   });
// }

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationOptions } from '@tanstack/react-query';
import { DeleteResponse, ListManagerApiError } from '../types/listManagerIndex';
import { fetchCallingListDelete } from '../api/mainCallingListDelete';

const useApiForCampaignListDelete = (
  options?: UseMutationOptions<DeleteResponse, ListManagerApiError, number>
) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ['campaignListDelete'],
    mutationFn: fetchCallingListDelete,
    onSuccess: (data, variables, context) => {
      console.log('API Response:', {
        code: data.result_code,
        message: data.result_msg,
      });
      
      // 캐시 무효화 (트리 메뉴 데이터 갱신을 위해)
      queryClient.invalidateQueries({ queryKey: ['treeMenuDataForSideMenu'] });
      
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: ListManagerApiError, variables: number, context: unknown) => {
      // console.error('API Error:', error);
      // toast.error(error.message || '데이터 로드에 실패했습니다.');
      options?.onError?.(error, variables, context);
    },
  });
};

export default useApiForCampaignListDelete;