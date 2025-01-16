// C:\Users\terec\fe_pdsw\src\app\main\comp\CampaignManager\index.tsx
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CampaignManagerHeader from './CampaignManagerHeader';
import CampaignManagerDetail from './CampaignManagerDetail';
import CampaignManagerList from './CampaignManagerList';

type Props = {}

const CampaignManager = (props: Props) => {
  return (
    <div>      
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
    </div>
  )
}

export default CampaignManager