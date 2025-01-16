// C:\Users\terec\fe_pdsw\src\app\main\comp\CampaignManager\index.tsx
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CampaignManagerHeader from './CampaignManagerHeader';
import CampaignManagerList from './CampaignManagerList';
import CampaignManagerDetail from './CampaignManagerDetail';

type Props = {}

const CampaignManager = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <CampaignManagerHeader />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <CampaignManagerList />
          <CampaignManagerDetail />
        </div>
      </CardContent>
    </Card>
  )
}

export default CampaignManager