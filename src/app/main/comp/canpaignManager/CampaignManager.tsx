"use client";
// components/main/CampaignManager.tsx
import { useMainStore } from '@/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CampaignManagerHeader from './CampaignManagerHeader';

export default function CampaignManager() {
  const selectedCampaign = useMainStore((state) => state.selectedCampaign);

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