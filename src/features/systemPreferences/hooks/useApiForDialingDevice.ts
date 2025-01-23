import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { DialingDeviceCreateRequest, DialingDeviceCreateResponse, DialingDeviceListCredentials, DialingDeviceListResponse } from "../types/SystemPreferences";
import { ApiError } from "next/dist/server/api-utils";
import { createDialingDevice, fetchDialingDeviceList, updateDialingDevice } from "../api/dialingdevice";

// 장비 리스트 요청을 위한 hook
export function useApiForDialingDevice(
    options?: UseMutationOptions<DialingDeviceListResponse, ApiError, DialingDeviceListCredentials>
) {
    return useMutation({
        mutationKey: ['dialingDeviceList'],
        mutationFn: fetchDialingDeviceList,
        onSuccess: (data, variables, context) => {
            options?.onSuccess?.(data, variables, context);
        },
        onError: (error: ApiError, variables: DialingDeviceListCredentials, context: unknown) => {
            options?.onError?.(error, variables, context);
        },
    });
}



// 신규 등록을 위한 hook
export function useApiForDialingDeviceCreate(
    options?: UseMutationOptions<DialingDeviceCreateResponse, ApiError, DialingDeviceCreateRequest>
) {
    return useMutation({
        mutationKey: ['dialingDeviceCreate'],
        mutationFn: createDialingDevice,
        ...options,
    });
}

// 수정을 위한 hook
export function useApiForDialingDeviceUpdate(
    options?: UseMutationOptions<DialingDeviceCreateResponse, ApiError, DialingDeviceCreateRequest>
) {
    return useMutation({
        mutationKey: ['dialingDeviceUpdate'],
        mutationFn: updateDialingDevice,
        ...options,
    });
}