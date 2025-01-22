import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ChannelEditRequest, ChannelEditResponse } from "../types/SystemPreferences";
import { ApiError } from "next/dist/server/api-utils";
import { fetchChannelEdit } from "../api/channelEdit";

export function useApiForChannelEdit(
    options?: UseMutationOptions<ChannelEditResponse, ApiError, ChannelEditRequest>
) {
    return useMutation({
        mutationKey: ['channelEdit'],
        mutationFn: fetchChannelEdit,
        onSuccess: (data, variables, context) => {
            options?.onSuccess?.(data, variables, context);
        },
        onError: (error: ApiError, variables: ChannelEditRequest, context: unknown) => {
            options?.onError?.(error, variables, context);
        },
    });
} 