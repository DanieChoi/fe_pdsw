import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import OperationTimeTab from "./OperationTimeTab";
import OutgoingOrderTab from "./OutgoingOrderTab";
import OutgoingStrategyTab from "./OutgoingStrategyTab";
import OutgoingMethodTab from "./OutgoingMethodTab";
import CallPacingTab from "./CallPacingTab";
import CallbackTab from "./CallbackTab";
import NotificationTab from "./NotificationTab";
import AssignedAgentTab from "./AssignedAgentTab";
import AdditionalInfoTab from "./AdditionalInfoTab";
import { OperationTimeParam
  , OutgoingOrderTabParam
  , OutgoingStrategyTabParam 
  , OutgoingMethodTabParam
  , CallPacingTabParam
  , CallbackTabParam
  , NotificationTabParam
  , AdditionalInfoTabParam
} from './CampaignManagerDetail';
import { CampaignScheDuleListDataResponse } from '@/features/campaignManager/types/campaignManagerIndex';
import { MainDataResponse } from '@/features/auth/types/mainIndex';

type Props = {
  campaignSchedule: CampaignScheDuleListDataResponse;
  campaignInfo: MainDataResponse;
  campaignDialSpeedInfo: CallPacingTabParam;
  onCampaignScheduleChange: (param:OperationTimeParam) => void;
  onCampaignOutgoingOrderChange: (param:OutgoingOrderTabParam) => void;
  onCampaignOutgoingStrategyChange: (param:OutgoingStrategyTabParam) => void;
  onCampaignOutgoingMethodChange: (param:OutgoingMethodTabParam) => void;
  onHandleCallPacingTabChange: (param:CallPacingTabParam) => void;
  onHandleCallbackTabChange: (param:CallbackTabParam) => void;
  onHandleNotificationTabChange: (param:NotificationTabParam) => void;
  onHandleAdditionalInfoTabChange: (param:AdditionalInfoTabParam) => void;
};

const CampaignTab: React.FC<Props> = ({ campaignSchedule
  , campaignInfo
  , campaignDialSpeedInfo
  , onCampaignScheduleChange
  , onCampaignOutgoingOrderChange 
  , onCampaignOutgoingStrategyChange
  , onCampaignOutgoingMethodChange
  , onHandleCallPacingTabChange
  , onHandleCallbackTabChange
  , onHandleNotificationTabChange
  , onHandleAdditionalInfoTabChange
}) => {
  return (
    <Tabs defaultValue="tab1" className="w-full">
      <div className="tab-custom-wrap">
        <TabsList>
          <TabsTrigger value="tab1">동작시간</TabsTrigger>
          <TabsTrigger value="tab2">발신순서</TabsTrigger>
          <TabsTrigger value="tab3">발신전략</TabsTrigger>
          <TabsTrigger value="tab4">발신방법</TabsTrigger>
          <TabsTrigger value="tab5">콜페이싱</TabsTrigger>
          <TabsTrigger value="tab6">콜백</TabsTrigger>
          <TabsTrigger value="tab7">알림</TabsTrigger>
          <TabsTrigger value="tab8">할당상담원</TabsTrigger>
          <TabsTrigger value="tab9">기타정보</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="tab1">
        <OperationTimeTab campaignInfo={campaignInfo} campaignSchedule={campaignSchedule} onCampaignScheduleChange={onCampaignScheduleChange} />
      </TabsContent>
      <TabsContent value="tab2">
        <OutgoingOrderTab campaignInfo={campaignInfo} onCampaignOutgoingOrderChange={onCampaignOutgoingOrderChange} />
      </TabsContent>
      <TabsContent value="tab3">
        <OutgoingStrategyTab campaignInfo={campaignInfo} onCampaignOutgoingStrategyChange={onCampaignOutgoingStrategyChange} />
      </TabsContent>
      <TabsContent value="tab4">
        <OutgoingMethodTab campaignInfo={campaignInfo} onCampaignOutgoingMethodChange={onCampaignOutgoingMethodChange} />
      </TabsContent>
      <TabsContent value="tab5">
        <CallPacingTab campaignDialSpeedInfo={campaignDialSpeedInfo} onHandleCallPacingTabChange={onHandleCallPacingTabChange} />
      </TabsContent>
      <TabsContent value="tab6">
        <CallbackTab campaignInfo={campaignInfo} onHandleCallbackTabChange={onHandleCallbackTabChange} />
      </TabsContent>
      <TabsContent value="tab7">
        <NotificationTab campaignInfo={campaignInfo} onHandleNotificationTabChange={onHandleNotificationTabChange} />
      </TabsContent>
      <TabsContent value="tab8">
        <AssignedAgentTab />
      </TabsContent>
      <TabsContent value="tab9">
        <AdditionalInfoTab campaignInfo={campaignInfo} onHandleAdditionalInfoTabChange={onHandleAdditionalInfoTabChange} />
      </TabsContent>
    </Tabs>
  );
};

export default CampaignTab;