"use client";
import React from 'react'
import { useSideMenuStore } from '@/store/sideMenuStore'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CampaignMonitorDashbord = () => {
 const selectedNodeId = useSideMenuStore((state) => state.selectedNodeId)

 return (
   <Card className="w-96">
     <CardHeader>
       <CardTitle className="text-lg font-medium">캠페인 정보</CardTitle>
     </CardHeader>
     <CardContent>
       <div className="flex items-center gap-2">
         <div className="text-sm text-gray-500">캠페인 아이디</div>
         <div className="font-medium">{selectedNodeId || '-'}</div>
       </div>
     </CardContent>
   </Card>
 )
}

export default CampaignMonitorDashbord