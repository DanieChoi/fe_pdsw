import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const CampaignTab = () => {
  return (
    <Tabs defaultValue="tab1" className="w-full">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">This is Tab 1 content</TabsContent>
      <TabsContent value="tab2">This is Tab 2 content</TabsContent>
      <TabsContent value="tab3">This is Tab 3 content</TabsContent>
    </Tabs>
  )
}

export default CampaignTab
