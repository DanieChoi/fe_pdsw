import { useMutation } from '@tanstack/react-query';
import { MainCredentials, MainResponse } from '@/features/auth/types/mainIndex';
import { fetchCounselorList } from '@/features/auth/api/main';

interface Props {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

const useApiForFetchCounselorList = (props: Props) => {
  return useMutation({
    mutationFn: (credentials: MainCredentials) => fetchCounselorList(credentials),
    onSuccess: (data) => {
      props.onSuccess?.(data);
    },
    onError: (error: Error) => {
      props.onError?.(error);
    },
  });
};

export default useApiForFetchCounselorList;