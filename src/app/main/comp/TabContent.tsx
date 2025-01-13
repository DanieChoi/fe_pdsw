// src/app/main/comp/TabContent.tsx
"use client";

import CampaignList from './CampaignList';
import CampaignDetail from './CampaignDetail';
import { useTabStore } from '@/store/tabStore';

const TabContent = () => {
  const { activeTabId } = useTabStore();

  // 활성화된 탭 ID에 따라 다른 컨텐츠를 반환
  const renderContent = () => {
    switch (activeTabId) {
      case 1: // 캠페인 그룹관리
        return (
          <div className="space-y-6">
            <CampaignList />
            <CampaignDetail />
          </div>
        );
      case 2: // 캠페인 관리
        return <div className="p-4">캠페인 관리 컨텐츠</div>;
      case 3: // 통합모니터
        return <div className="p-4">통합모니터 컨텐츠</div>;
      case 4: // 총진행상황
        return <div className="p-4">총진행상황 컨텐츠</div>;
      case 5: // 발신전화상태
        return <div className="p-4">발신전화상태 컨텐츠</div>;
      case 6: // 채널 모니터
        return <div className="p-4">채널 모니터 컨텐츠</div>;
      case 7: // 리스트 매니저
        return <div className="p-4">리스트 매니저 컨텐츠</div>;
      case 8: // 예약콜 제한 설정
        return <div className="p-4">예약콜 제한 설정 컨텐츠</div>;
      case 9: // 분배호수 제한 설정
        return <div className="p-4">분배호수 제한 설정 컨텐츠</div>;
      case 10: // 시스템 설정
        return <div className="p-4">시스템 설정 컨텐츠</div>;
      case 11: // 운영 설정
        return <div className="p-4">운영 설정 컨텐츠</div>;
      case 12: // 환경 설정
        return <div className="p-4">환경 설정 컨텐츠</div>;
      default:
        return <div className="flex items-center justify-center h-[calc(100vh-12rem)] text-gray-500">탭을 선택해주세요</div>;
    }
  };

  if (!activeTabId) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm min-h-[calc(100vh-12rem)]">
      {renderContent()}
    </div>
  );
};

export default TabContent;