import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface GridItem {
  id: string;
  memberType: string;
  phoneNumber: string;
}

interface CampaignLayoutProps {
  data: GridItem[];
  onCampaignSearchClick: () => void;
  selectedCampaign?: string;
}

export default function CampaignLayout({
  data,
  onCampaignSearchClick,
  selectedCampaign
}: CampaignLayoutProps) {
  return (
    <div className="flex gap-8">
      {/* 왼쪽 그리드 */}
      <div className="flex-1">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-medium text-gray-700">멤버십 아이디</TableHead>
              <TableHead className="font-medium text-gray-700">멤버십 마켓</TableHead>
              <TableHead className="font-medium text-gray-700">발신번호</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow 
                key={index}
                className="border-b hover:bg-gray-50"
              >
                <TableCell className="font-normal">{item.id}</TableCell>
                <TableCell className="font-normal">{item.memberType}</TableCell>
                <TableCell className="font-normal">{item.phoneNumber}</TableCell>
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
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web_only">web_only</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              variant="outline" 
              size="sm"
              onClick={onCampaignSearchClick}
            >
              캠페인조회
            </Button>
            <Input 
              type="text" 
              value={selectedCampaign} 
              readOnly 
              className="w-[150px] bg-gray-50"
            />
          </div>

          {/* 발신번호 영역 */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 w-24">발신번호</span>
            <Input 
              type="text" 
              placeholder="01012345678"
              readOnly
              className="w-[150px]"
            />
          </div>

          {/* 안내 텍스트 */}
          <div className="text-sm text-gray-500 space-y-1 mt-6">
            <p>• 멤버십 별로 발신번호를 설정할 수 있습니다.</p>
            <p>• 발신번호를 설정하시면은 그리드에서 카피도 할 늘칠 주시면자 신규 비트를 클릭해 주세요.</p>
            <p>• 변경된 정보는 멤버십의 발신 여부이 저장이 시 반영됩니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}