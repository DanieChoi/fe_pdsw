import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MainDataResponse } from '@/features/auth/types/mainIndex';
import { useMainStore } from '@/store';
import CampaignModal from './CampaignModal';

function CampaignLayout() {
  const { 
    campaigns, 
    callingNumbers, 
    setSelectedCampaign,
  } = useMainStore();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCampaignValue, setSelectedCampaignValue] = useState('');
  const [selectedCallingNumber, setSelectedCallingNumber] = useState('');
  const [selectedCampaign, setSelectedCampaignState] = useState<any>(null);

  const handleRowClick = (campaign: MainDataResponse) => {
    setSelectedCampaign(campaign);
    setSelectedCampaignState(campaign);
    const callingNumber = callingNumbers.find(
      (number) => number.campaign_id === campaign.campaign_id
    );
    setSelectedCallingNumber(callingNumber?.calling_number || '');
  };

  const handleCampaignSelect = (tenantName: string) => {
    setSelectedCampaignValue(tenantName);
  };

  return (
    <div className="flex gap-8">
      {/* 왼쪽 그리드 */}
      <div className="flex-1">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-medium text-gray-700 text-center">캠페인 아이디</TableHead>
              <TableHead className="font-medium text-gray-700 text-center">캠페인 이름</TableHead>
              <TableHead className="font-medium text-gray-700 text-center">발신번호</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow 
                key={campaign.campaign_id}
                onClick={() => handleRowClick(campaign)}
                className={`border-b hover:bg-gray-50 cursor-pointer ${
                  selectedCampaign?.campaign_id === campaign.campaign_id ? 'bg-cyan-50' : ''
                }`}
              >
                <TableCell className="font-normal text-center ">{campaign.campaign_id}</TableCell>
                <TableCell className="font-normal text-center">{campaign.campaign_name}</TableCell>
                <TableCell className="font-normal text-center">
                  {callingNumbers
                    .filter((callingNumber) => callingNumber.campaign_id === campaign.campaign_id)
                    .map((data) => data.calling_number)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* 오른쪽 섹션 */}
      <div className="w-[500px]">
        <div className="space-y-4">
          {/* 대상캠페인 영역 */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 w-24">대상캠페인</span>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web_only">web_only</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsModalOpen(true)}
            >
              캠페인조회
            </Button>
            <Input 
              type="text" 
              value={selectedCampaignValue} 
              readOnly 
              className="w-[150px] bg-gray-50"
            />
          </div>

          {/* 발신번호 영역 */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 w-24">발신번호</span>
            <Input 
              type="text" 
              value={selectedCallingNumber}
              placeholder="그리드에서 선택"
              disabled
              className="w-[150px] bg-gray-50 cursor-not-allowed"
            />
          </div>

          {/* 버튼 영역 */}
          <div className="flex justify-end gap-2 pt-4">
            <Button 
              variant="outline"
              className="bg-cyan-500 text-white hover:bg-cyan-600 border-none"
            >
              신규
            </Button>
            <Button 
              variant="outline"
              className="bg-cyan-500 text-white hover:bg-cyan-600 border-none"
            >
              저장
            </Button>
          </div>

          {/* 안내 텍스트 */}
          <div className="text-sm text-gray-500 space-y-1 mt-6">
            <p>• 멤버십 별로 발신번호를 설정할 수 있습니다.</p>
            <p>• 발신번호를 설정하시면은 그리드에서 카피도 할 늘칠 주시면자 신규 비트를 클릭해 주세요.</p>
            <p>※ 변경된 정보는 멤버십의 발신 여부이 저장이 시 반영됩니다.</p>
          </div>
        </div>
      </div>

      {/* Campaign Modal */}
      <CampaignModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleCampaignSelect}
      />
    </div>
  );
};

export default CampaignLayout;