import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { fetchDialingDeviceList } from "../api/dialingdevicelist";
import { ApiError, DialingDeviceListCredentials, DialingDeviceListResponse } from "../types/SystemPreferences";

export function useApiForDialingDevice(
    options?: UseMutationOptions<DialingDeviceListResponse, ApiError, DialingDeviceListCredentials>
) {
    return useMutation({
        mutationKey: ['dialingDeviceList'],
        mutationFn: fetchDialingDeviceList,
        onSuccess: (data, variables, context) => {
            // console.log('API Response:', {
            //     code: data.result_code,
            //     message: data.result_msg,
            //     count: data.result_count,
            //     total: data.total_count,
            //     data: data.result_data
            // });
            options?.onSuccess?.(data, variables, context);
        },
        onError: (error: ApiError, variables: DialingDeviceListCredentials, context: unknown) => {
            options?.onError?.(error, variables, context);
        },
    });
}

