import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AgentStateMonitoringListResponse, IRequestTypeForFetchConsultantStatusMonitorData } from '../types/monitoringIndex';
import { fetchConsultantStatusMonitorData } from '../api/mainAgentStateMonitoringList';


/**
 * Custom hook to fetch consultant status monitoring data
 * @param credentials The credentials required for the API call
 * @param options Optional React Query options
 * @returns React Query result with monitoring data
 */
export const useApiForGetConsultantStatusMonitorData = (
    credentials: IRequestTypeForFetchConsultantStatusMonitorData,
    options?: Omit<UseQueryOptions<
        AgentStateMonitoringListResponse,
        Error,
        AgentStateMonitoringListResponse,
        ['consultantStatusMonitor', number, number]
    >, 'queryKey' | 'queryFn'>
) => {
    return useQuery<
        AgentStateMonitoringListResponse,
        Error,
        AgentStateMonitoringListResponse
    >({
        queryKey: ['consultantStatusMonitor', credentials.tenantId, credentials.campaignId],
        queryFn: () => fetchConsultantStatusMonitorData(credentials),
        // refetchInterval: 30000, // Refetch every 30 seconds by default
        // staleTime: 10000, // Consider data stale after 10 seconds
    });
};