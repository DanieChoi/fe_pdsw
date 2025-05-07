
// src/features/store/mainStore.ts
import { create } from 'zustand';
import { MainDataResponse, TenantListDataResponse } from '../features/auth/types/mainIndex';
import { campaignChannel } from '@/lib/broadcastChannel';
import { devtools } from 'zustand/middleware';

// Define the DataProps type for selectedCampaignRow
export interface DataProps {
  no: number;
  campaignId: number;
  idName: string;
  startDate: string;
  endDate: string;
  skill: string;
  dialMode: string;
  callingNumber: string;
}

export interface FormatRow {
  id?: string;
  name: string;
  start: number;
  length: number;
  field: string;
}

interface MainState {
  campaigns: MainDataResponse[];
  tenants: TenantListDataResponse[];
  counselers: any[];
  selectedCampaign: MainDataResponse | null;
  selectedCampaignRow: DataProps | null; // Added selectedCampaignRow
  totalCount: number;
  reBroadcastType: string;
  sendingStatusCampaignId: string;
  listManagerFileFormatRows: FormatRow[];
  sseInputMessage: string;
  listManagerDelimiter: string;
  reBroadcastRedialCondition: string;
  // 테넌트 상태
  tenantsLoaded: boolean;  // 테넌트 데이터 로딩 여부
  tenantsLoading: boolean; // 테넌트 데이터 로딩 중 여부
  // 캠페인 상태
  campaignsLoaded: boolean;  // 캠페인 데이터 로딩 여부
  campaignsLoading: boolean; // 캠페인 데이터 로딩 중 여부
  // 채널 모니터
  channelMonitorFirstSelect: string;
  channelMonitorSecondSelect: string;
  channelMonitorThirdSelect: string;
  campaignProgressInfoViewType: string;
}

interface MainActions {
  setCampaigns: (campaigns: MainDataResponse[]) => void;
  setTenants: (tenants: TenantListDataResponse[]) => void;
  setCounselers: (counselers: any[]) => void;
  setSelectedCampaign: (campaign: MainDataResponse | null) => void;
  setSelectedCampaignRow: (row: DataProps | null) => void; // Added setter for selectedCampaignRow
  setTotalCount: (count: number) => void;
  setReBroadcastType: (reBroadcastType: string) => void;
  setSendingStatusCampaignId: (sendingStatusCampaignId: string) => void;
  setListManagerFileFormatRows: (listManagerFileFormatRows: FormatRow[]) => void;
  setSseInputMessage: (sseInputMessage: string) => void;
  setListManagerDelimiter: (listManagerDelimiter: string) => void;
  setReBroadcastRedialCondition: (reBroadcastRedialCondition: string) => void;
  // 테넌트 액션
  setTenantsLoaded: (loaded: boolean) => void;
  setTenantsLoading: (loading: boolean) => void;
  // 캠페인 액션
  setCampaignsLoaded: (loaded: boolean) => void;
  setCampaignsLoading: (loading: boolean) => void;
  setChannelMonitorFirstSelect: (channelMonitorFirstSelect: string) => void;
  setChannelMonitorSecondSelect: (channelMonitorSecondSelect: string) => void;
  setChannelMonitorThirdSelect: (channelMonitorThirdSelect: string) => void;
  setCampaignProgressInfoViewType: (campaignProgressInfoViewType: string) => void;
  updateCampaignStatus: (campaignId: number, newStatus: number) => void;

}

type MainStore = MainState & MainActions;

// Redux 개발자 도구 미들웨어 추가
export const useMainStore = create<MainStore>()(
  devtools(
    (set) => ({
      campaigns: [],
      tenants: [],
      counselers: [],
      selectedCampaign: null,
      selectedCampaignRow: null, // Initialize selectedCampaignRow as null
      totalCount: 0,
      reBroadcastType: '',
      sendingStatusCampaignId: '',
      listManagerFileFormatRows: [],
      sseInputMessage: '',
      listManagerDelimiter: '',
      reBroadcastRedialCondition: '',
      // 테넌트 상태 초기화
      tenantsLoaded: false,
      tenantsLoading: false,
      // 캠페인 상태 초기화
      campaignsLoaded: false,
      campaignsLoading: false,
      channelMonitorFirstSelect: '',
      channelMonitorSecondSelect: '',
      channelMonitorThirdSelect: '',
      campaignProgressInfoViewType: '',

      setCampaigns: (campaigns) => set({
        campaigns,
        campaignsLoaded: true,
        campaignsLoading: false
      }, false, 'setCampaigns'),
      setTenants: (tenants) => set({
        tenants,
        tenantsLoaded: true,
        tenantsLoading: false
      }, false, 'setTenants'),
      setCounselers: (counselers) => set({ counselers }, false, 'setCounselers'),
      setSelectedCampaign: (campaign) => set({ selectedCampaign: campaign }, false, 'setSelectedCampaign'),
      setSelectedCampaignRow: (row) => set({ selectedCampaignRow: row }, false, 'setSelectedCampaignRow'), // Set selectedCampaignRow
      setTotalCount: (totalCount) => set({ totalCount }, false, 'setTotalCount'),
      setReBroadcastType: (reBroadcastType) => set({ reBroadcastType }, false, 'setReBroadcastType'),
      setSendingStatusCampaignId: (sendingStatusCampaignId) => set({ sendingStatusCampaignId }, false, 'setSendingStatusCampaignId'),
      setListManagerFileFormatRows: (listManagerFileFormatRows) => set({ listManagerFileFormatRows }, false, 'setListManagerFileFormatRows'),
      setSseInputMessage: (sseInputMessage) => {
        set({ sseInputMessage }, false, 'setSseInputMessage');
        campaignChannel.postMessage({
          type: sseInputMessage,
        });
      },
      setListManagerDelimiter: (listManagerDelimiter) => set({ listManagerDelimiter }, false, 'setListManagerDelimiter'),
      setReBroadcastRedialCondition: (reBroadcastRedialCondition) => set({ reBroadcastRedialCondition }, false, 'setReBroadcastRedialCondition'),
      // 테넌트 액션
      setTenantsLoaded: (loaded) => set({ tenantsLoaded: loaded }, false, 'setTenantsLoaded'),
      setTenantsLoading: (loading) => set({ tenantsLoading: loading }, false, 'setTenantsLoading'),
      // 캠페인 액션
      setCampaignsLoaded: (loaded) => set({ campaignsLoaded: loaded }, false, 'setCampaignsLoaded'),
      setCampaignsLoading: (loading) => set({ campaignsLoading: loading }, false, 'setCampaignsLoading'),
      setChannelMonitorFirstSelect: (channelMonitorFirstSelect) => set({ channelMonitorFirstSelect }, false, 'setChannelMonitorFirstSelect'),
      setChannelMonitorSecondSelect: (channelMonitorSecondSelect) => set({ channelMonitorSecondSelect }, false, 'setChannelMonitorSecondSelect'),
      setChannelMonitorThirdSelect: (channelMonitorThirdSelect) => set({ channelMonitorThirdSelect }, false, 'setChannelMonitorThirdSelect'),
      setCampaignProgressInfoViewType: (campaignProgressInfoViewType) => set({ campaignProgressInfoViewType }, false, 'setCampaignProgressInfoViewType'),

      updateCampaignStatus: (campaignId: number, newStatus: number) => set(state => {
        // Find the campaign in the array
        const updatedCampaigns = state.campaigns.map(campaign => {
          if (campaign.campaign_id === campaignId) {
            // Return a new object with the updated status
            return {
              ...campaign,
              campaign_status: newStatus
            };
          }
          return campaign;
        });

        // Update the selectedCampaign if it matches the updated campaignId
        let updatedSelectedCampaign = state.selectedCampaign;
        if (state.selectedCampaign && state.selectedCampaign.campaign_id === campaignId) {
          updatedSelectedCampaign = {
            ...state.selectedCampaign,
            campaign_status: newStatus
          };
        }

        return {
          campaigns: updatedCampaigns,
          selectedCampaign: updatedSelectedCampaign
        };
      }, false, 'updateCampaignStatus'),

    }),
    {
      name: 'main-store', // 개발자 도구에 표시될 스토어 이름
      enabled: process.env.NODE_ENV === 'development', // 개발 환경에서만 활성화
    }
  )
);