    // src/app/main/comp/TabContent.tsx
"use client";

import CampaignList from './CampaignList';
import CampaignDetail from './CampaignDetail';
import { useTabStore } from '@/features/store';

const TabContent = () => {
  const { activeTabId } = useTabStore();

  // 활성화된 탭 ID에 따라 다른 컨텐츠를 반환
  const renderContent = () => {
    switch (activeTabId) {
      case 1: // 캠페인 그룹관리
        return (
          <>
            <CampaignList />
            <CampaignDetail />
          </>
        );
      case 2: // 캠페인 관리
        return <div>캠페인 관리 컨텐츠</div>;
      case 3: // 통합모니터
        return <div>통합모니터 컨텐츠</div>;
      case 4: // 총진행상황
        return <div>총진행상황 컨텐츠</div>;
      case 5: // 발신전화상태
        return <div>발신전화상태 컨텐츠</div>;
      case 6: // 채널 모니터
        return <div>채널 모니터 컨텐츠</div>;
      case 7: // 리스트 매니저
        return <div>리스트 매니저 컨텐츠</div>;
      case 8: // 예약콜 제한 설정
        return <div>예약콜 제한 설정 컨텐츠</div>;
      case 9: // 분배호수 제한 설정
        return <div>분배호수 제한 설정 컨텐츠</div>;
      case 10: // 시스템 설정
        return <div>시스템 설정 컨텐츠</div>;
      case 11: // 운영 설정
        return <div>운영 설정 컨텐츠</div>;
      case 12: // 환경 설정
        return <div>환경 설정 컨텐츠</div>;
      default:
        return <div>탭을 선택해주세요</div>;
    }
  };

  return (
    <div className="p-6">
      {renderContent()}
    </div>
  );
};

export default TabContent;