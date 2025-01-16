import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
 
export function CampaignManagerDetailTabArea() {
  return (
    <Tabs defaultValue="tab1">
    <TabsList>
      <TabsTrigger value="tab1">동작시간</TabsTrigger>
      <TabsTrigger value="tab2">발신순서</TabsTrigger>
      <TabsTrigger value="tab3">발신전략</TabsTrigger>
      <TabsTrigger value="tab4">콜페이싱</TabsTrigger>
      <TabsTrigger value="tab5">콜백</TabsTrigger>
      <TabsTrigger value="tab6">알림</TabsTrigger>
      <TabsTrigger value="tab7">할당상담원</TabsTrigger>
      <TabsTrigger value="tab8">기타정보</TabsTrigger>
    </TabsList>

    <TabsContent value="tab1">
      <h2>Content for Tab 1</h2>
      <p>Some content here...</p>
    </TabsContent>
    <TabsContent value="tab2">
      <h2>Content for Tab 2</h2>
      <p>Some other content...</p>
    </TabsContent>
    <TabsContent value="tab3">
      <h2>Content for Tab 3</h2>
      <p>More content...</p>
    </TabsContent>
    <TabsContent value="tab4">
      <h2>Content for Tab 3</h2>
      <p>More content...</p>
    </TabsContent>
    <TabsContent value="tab5">
      <h2>Content for Tab 3</h2>
      <p>More content...</p>
    </TabsContent>
    <TabsContent value="tab6">
      <h2>Content for Tab 3</h2>
      <p>More content...</p>
    </TabsContent>
    <TabsContent value="tab7">
      <h2>Content for Tab 3</h2>
      <p>More content...</p>
    </TabsContent>
    <TabsContent value="tab8">
      <h2>Content for Tab 3</h2>
      <p>More content...</p>
    </TabsContent>
  </Tabs>
  )
}