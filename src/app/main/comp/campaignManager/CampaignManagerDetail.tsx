// components/main/CampaignDetail.tsx
import { useMainStore } from '@/store';
import TitleWrap from "@/components/shared/TitleWrap";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const dialModeList = [
  {dial_id:1, dial_name: 'Power'},
  {dial_id:2, dial_name: 'Progressive'},
  {dial_id:3, dial_name: 'Predictive'},
  {dial_id:4, dial_name: 'System Preview'},
];

export default function CampaignDetail() {
  const selectedCampaign = useMainStore((state) => state.selectedCampaign);
  const { tenants } = useMainStore();

  const handleSelectChange = (event:any) => {
    
  }

  return (
    <div>
      <TitleWrap
        className='border-b border-gray-300 pb-1'
        title="상세내역"
        buttons={[
            { label: "새 캠페인", onClick: () => console.log("") },
            { label: "캠페인 저장", onClick: () => console.log("") },
            { label: "캠페인 삭제", onClick: () => console.log("") },
            { label: "재발신", onClick: () => console.log(""), variant: "customblue"},
            { label: "리스트 적용", onClick: () => console.log(""), variant: "customblue"},
            { label: "리스트 삭제", onClick: () => console.log(""), variant: "customblue" },
            { label: "예약콜 제한건수설정", onClick: () => console.log(""),variant: "customblue" },
            { label: "분배호수 제한설정", onClick: () => console.log(""),variant: "customblue" },
        ]}
        />
        <div className="grid grid-cols-3 gap-x-4 gap-y-2">
        <div className='flex items-center gap-2'>
          <Label className="w-[5.6rem] min-w-[5.6rem]">캠페인 아이디</Label>
          <Input 
            value={selectedCampaign?.campaign_id || ''} 
            className="mt-1" 
            readOnly 
          />
        </div>

        <div className='flex items-center gap-2'>
          <Label className="w-[5.6rem] min-w-[5.6rem]">테넌트</Label>
          <Select
            onValueChange={(value) => handleSelectChange(value, 'tenant')}
            value={selectedCampaign?.tenant_id || ''}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="테넌트를 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              {tenants.map(option => (
                <SelectItem key={option.tenant_id} value={option.tenant_id.toString()}>
                  {option.tenant_name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='flex items-center gap-2'>
          <Label className="w-[5.6rem] min-w-[5.6rem]">캠페인명</Label>
          <Input 
            value={selectedCampaign?.campaign_name || ''} 
            className="mt-1" 
            readOnly 
          />
        </div>

        <div className='flex items-center gap-2'>
          <Label className="w-[5.6rem] min-w-[5.6rem]">다이얼 모드</Label>
          <Select
            onValueChange={(value) => handleSelectChange(value, 'dialMode')}
            value={selectedCampaign?.dial_mode || ''}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="다이얼 모드를 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              {dialModeList.map(option => (
                <SelectItem key={option.dial_id} value={option.dial_id.toString()}>
                  {option.dial_name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='flex items-center gap-2'>
          <Label className="w-[5.6rem] min-w-[5.6rem]">스킬</Label>
          <Select
            onValueChange={(value) => handleSelectChange(value, 'skill')}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="스킬을 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              {/* 스킬 옵션은 여기에 동적으로 추가 */}
            </SelectContent>
          </Select>
        </div>
        {/* ... 나머지 필드들 ... */}
      </div>
    </div>
  );
}