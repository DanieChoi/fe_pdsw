// C:\Users\terec\fe_pdsw\src\app\main\comp\CampaignManager\index.tsx
import React, { useState } from 'react'
import CampaignManagerHeader, {CampaignHeaderSearch} from './CampaignManagerHeader';
import CampaignManagerDetail from './CampaignManagerDetail';
import CampaignManagerList from './CampaignManagerList';

type Props = {
  campaignId?: string;
}

const CampaignManager = ({campaignId}: Props) => {
  const [campaignHeaderSearchParam,setCampaignHeaderSearchParam] = useState<CampaignHeaderSearch>();
  const handleCampaignHeaderSearch = (param:CampaignHeaderSearch) => {
    setCampaignHeaderSearchParam(param);
  };
  return (
    <div>
      <div className='flex flex-col gap-4'>
          <CampaignManagerHeader campaignId={campaignId} onSearch={handleCampaignHeaderSearch}/>
          <div className="grid grid-cols-[4fr_6fr] gap-5">
            <CampaignManagerList campaignId={campaignId} campaignHeaderSearchParam={campaignHeaderSearchParam}/>
            <CampaignManagerDetail />
          </div>
        </div>
    </div>
  )
}

export default CampaignManager