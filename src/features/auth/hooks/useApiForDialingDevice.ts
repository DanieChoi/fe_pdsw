import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { DialingDeviceListCredentials, DialingDeviceListResponse } from "../types/mainIndex";
import { AuthApiError } from "../types/loginIndex";
import { fetchDialingDeviceList } from "../api/dialingdevicelist";

export function useApiForDialingDevice(
    options?: UseMutationOptions<DialingDeviceListResponse, AuthApiError, DialingDeviceListCredentials>
) {
    return useMutation({
        mutationKey: ['dialingDeviceList'],
        mutationFn: fetchDialingDeviceList,
        onSuccess: (data, variables, context) => {
            console.log('API Response:', {
                code: data.result_code,
                message: data.result_msg,
                count: data.result_count,
                total: data.total_count,
                data: data.result_data
            });
            options?.onSuccess?.(data, variables, context);
        },
        onError: (error: AuthApiError, variables: DialingDeviceListCredentials, context: unknown) => {
            options?.onError?.(error, variables, context);
        },
    });
}

