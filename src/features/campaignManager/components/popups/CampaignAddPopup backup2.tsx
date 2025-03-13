import React, { useState, useMemo, useEffect } from 'react';
import DataGrid from "react-data-grid";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { CommonButton } from "@/components/shared/CommonButton";
import TitleWrap from "@/components/shared/TitleWrap";
import 'react-data-grid/lib/styles.css';
import { useAuthStore } from '@/store';
import CommonDialogForSideMenu from '@/components/shared/CommonDialog/CommonDialogForSideMenu';
import { useApiForGetSkillsWithCampaigns } from '@/widgets/sidebar/hooks/useApiForGetSkillsWithCampaigns';

interface SkillsWithCampaignsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

// 스킬과 캠페인 정보를 조합한 인터페이스
interface SkillWithCampaignRow {
  id: string;
  skill_id: number;
  skill_name: string;
  campaign_id: number;
  campaign_name: string;
  tenant_id: number;
}

const SkillsWithCampaignsPopup: React.FC<SkillsWithCampaignsPopupProps> = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  // 인증 스토어에서 테넌트 ID 가져오기
  const authStore = useAuthStore();
  
  // 기본 상태 관리
  const [tenantId, setTenantId] = useState<string>(authStore.tenant_id?.toString() || '');
  const [searchText, setSearchText] = useState<string>('');
  
  // 테넌트 ID가 변경될 때마다 상태 업데이트
  useEffect(() => {
    if (authStore.tenant_id) {
      setTenantId(authStore.tenant_id.toString());
    }
  }, [authStore.tenant_id]);
  
  // React Query로 캠페인에 할당된 스킬 목록 가져오기 - 팝업이 열릴 때만 요청
  const { 
    data: skillsWithCampaignsData, 
    isLoading, 
    error, 
    refetch 
  } = useApiForGetSkillsWithCampaigns(
    undefined, // 모든 캠페인을 가져옵니다
    isOpen // 팝업이 열릴 때만 API 호출
  );
  
  // 스킬과 캠페인 데이터 변환 및 필터링
  const skillsWithCampaigns = useMemo(() => {
    if (!skillsWithCampaignsData?.result_data) return [];
    
    // 데이터를 스킬 ID와 캠페인 ID 조합으로 변환
    const rows: SkillWithCampaignRow[] = [];
    
    skillsWithCampaignsData.result_data.forEach(item => {
      // 각 캠페인에 할당된 스킬 목록을 순회
      item.skill_id.forEach(skillId => {
        // 실제 환경에서는 스킬 정보를 가져오는 추가 로직이 필요할 수 있습니다
        rows.push({
          id: `${item.campaign_id}-${skillId}`,
          skill_id: skillId,
          skill_name: `스킬 ${skillId}`, // 실제 스킬 이름 필요
          campaign_id: item.campaign_id,
          campaign_name: `캠페인 ${item.campaign_id}`, // 실제 캠페인 이름 필요
          tenant_id: item.tenant_id
        });
      });
    });
    
    // 검색어에 따른 필터링
    if (searchText) {
      return rows.filter(
        row => 
          row.skill_name.toLowerCase().includes(searchText.toLowerCase()) ||
          row.campaign_name.toLowerCase().includes(searchText.toLowerCase()) ||
          row.skill_id.toString().includes(searchText) ||
          row.campaign_id.toString().includes(searchText)
      );
    }
    
    return rows;
  }, [skillsWithCampaignsData, searchText]);
  
  // 스킬 목록 컬럼 정의
  const columns = useMemo(() => [
    { key: 'skill_id', name: '스킬ID', width: 80 },
    { key: 'skill_name', name: '스킬명', width: 150 },
    { key: 'campaign_id', name: '캠페인ID', width: 100 },
    { key: 'campaign_name', name: '캠페인명', width: 200 },
    { key: 'tenant_id', name: '테넌트ID', width: 100 }
  ], []);

  // 조회 버튼 클릭 핸들러
  const handleSearch = () => {
    // 목록 다시 불러오기
    refetch();
  };

  return (
    <CommonDialogForSideMenu
      isOpen={isOpen}
      onClose={onClose}
      title="스킬과 캠페인 연결 목록"
      dialogClassName="w-[1000px] max-h-[90vh] overflow-hidden" // 넓은 다이얼로그
    >
      <div className="flex flex-col h-full p-4">
        {/* 검색 영역 */}
        <div className="flex justify-between items-center mb-6 p-4 rounded bg-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Label className="pr-[15px] font-medium">테넌트ID</Label>
              <CustomInput
                type="text"
                className="w-[180px]"
                value={tenantId}
                disabled={true}
              />
            </div>
            <div className="flex items-center">
              <Label className="pr-[15px] font-medium">검색</Label>
              <CustomInput
                type="text"
                className="w-[180px]"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="스킬명, 캠페인명, ID 검색"
              />
            </div>
          </div>
          <div>
            <CommonButton onClick={handleSearch}>조회</CommonButton>
          </div>
        </div>

        {/* 데이터 그리드 영역 */}
        <div className="flex-1 overflow-hidden">
          <TitleWrap title="스킬-캠페인 연결 목록" totalCount={skillsWithCampaigns.length} />
          {isLoading ? (
            <div className="flex justify-center items-center h-[500px]">
              <p>로딩 중...</p>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-[500px]">
              <p>데이터를 불러오는데 실패했습니다: {(error as Error).message}</p>
            </div>
          ) : (
            <div className="grid-custom-wrap h-[500px]">
              <DataGrid
                columns={columns}
                rows={skillsWithCampaigns}
                className="grid-custom"
                rowKeyGetter={(row) => row.id}
                rowHeight={40}
                headerRowHeight={40}
                style={{ height: '100%', width: '100%' }}
              />
            </div>
          )}
        </div>

        {/* 버튼 영역 */}
        <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-200">
          <CommonButton onClick={onConfirm} className="bg-blue-500 text-white">확인</CommonButton>
          <CommonButton onClick={onClose} className="bg-gray-200 text-gray-800">취소</CommonButton>
        </div>
      </div>
    </CommonDialogForSideMenu>
  );
};

export default SkillsWithCampaignsPopup;