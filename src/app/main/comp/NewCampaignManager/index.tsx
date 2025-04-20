// C:\Users\terec\fe_pdsw\src\app\main\comp\CampaignManager\index.tsx
import React, { useEffect } from 'react'
import NewCampaignManagerDetail from './NewCampaignManagerDetail';

type Props = {
  tenantId?: string;
}

const NewCampaignManager = ({tenantId}: Props) => {
  
  return (
    <div>
      <div className='flex flex-col gap-[15px]'>
          <div className="flex gap-[30px]">
            <NewCampaignManagerDetail tenantId={tenantId}/>
          </div> 
        </div>
    </div>
  )
}

export default NewCampaignManager