"use client";
// components/main/CampaignManager.tsx
import { useMainStore } from '@/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CampaignManagerHeader from './CampaignManagerHeader';

// 테넌트 조회 응답 데이터 리스트 타입
interface CampaignManagerProps {
  campaign_id?: number;
}

export default function CampaignManager({ campaign_id }: CampaignManagerProps) {
  const selectedCampaign = useMainStore((state) => state.selectedCampaign);
  const { campaigns, totalCount, setSelectedCampaign } = useMainStore();

  return (
    <Card>
      <CardHeader>
        <CampaignManagerHeader />
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  );
}