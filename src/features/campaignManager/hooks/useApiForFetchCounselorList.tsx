// import { useMutation } from '@tanstack/react-query';
// import { MainCredentials, MainResponse } from '@/features/auth/types/mainIndex';
// import { fetchCounselorList } from '@/features/auth/api/main';

// interface Props {
//   onSuccess?: (data: any) => void;
//   onError?: (error: Error) => void;
// }

// const useApiForFetchCounselorList = (props: Props) => {
//   return useMutation({
//     mutationFn: (credentials: MainCredentials) => fetchCounselorList(credentials),
//     onSuccess: (data) => {
//       props.onSuccess?.(data);
//     },
//     onError: (error: Error) => {
//       props.onError?.(error);
//     },
//   });
// };

// export default useApiForFetchCounselorList;

import { useQuery } from '@tanstack/react-query';
import { MainCredentials, MainResponse } from '@/features/auth/types/mainIndex';
import { fetchCounselorList } from '@/features/auth/api/main';

interface Props {
  credentials: MainCredentials;
  enabled?: boolean;
}

const useApiForFetchCounselorList = ({ credentials, enabled }: Props) => {
  return useQuery({
    queryKey: ['counselorList', credentials],
    queryFn: () => fetchCounselorList(credentials),
    enabled : enabled !== undefined ? enabled : credentials.session_key !== "", // enabled 넣어준값이 있으면 그걸 설정하고, session_key가 있을 때만 (로그아웃시 호출 방지용)
  });
};

export default useApiForFetchCounselorList;