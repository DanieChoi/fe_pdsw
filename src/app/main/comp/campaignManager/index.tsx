// C:\Users\terec\fe_pdsw\src\app\main\comp\CampaignManager\index.tsx
import React from 'react'
import CampaignManagerHeader from './CampaignManagerHeader';
import CampaignManagerDetail from './CampaignManagerDetail';
import CampaignManagerList from './CampaignManagerList';

type Props = {}

const CampaignManager = (props: Props) => {
  return (
    <div>
      <div className='flex flex-col gap-4'>
          <CampaignManagerHeader />
          <div className="grid grid-cols-2 gap-4">
            <CampaignManagerList />
            <CampaignManagerDetail />
          </div>
        </div>
    </div>
  )
}

export default CampaignManager