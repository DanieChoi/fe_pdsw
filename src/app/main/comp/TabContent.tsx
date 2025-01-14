"use client";

import React from 'react';
import { useTabStore } from '@/store/tabStore';

const TabContent = () => {
  const { activeTabId } = useTabStore();

  const renderContent = () => {
    switch (activeTabId) {
      case 1:
        return (
          <div className="space-y-0">
            <div>CampaignList 컴포넌트</div>
            <div>CampaignDetail 컴포넌트</div>
          </div>
        );
      case 2:
        return <div className="p-2">캠페인 관리 컨텐츠</div>;
      case 3:
        return <div className="p-2">통합모니터 컨텐츠</div>;
      case 4:
        return <div className="p-2">총진행상황 컨텐츠</div>;
      case 5:
        return <div className="p-2">발신전화상태 컨텐츠</div>;
      case 6:
        return <div className="p-2">채널 모니터 컨텐츠</div>;
      case 7:
        return <div className="p-2">리스트 매니저 컨텐츠</div>;
      case 8:
        return <div className="p-2">예약콜 제한 설정 컨텐츠</div>;
      case 9:
        return <div className="p-2">분배호수 제한 설정 컨텐츠</div>;
      case 10:
        return <div className="p-2">시스템 설정 컨텐츠</div>;
      case 11:
        return <div className="p-2">운영 설정 컨텐츠</div>;
      case 12:
        return <div className="p-2">환경 설정 컨텐츠</div>;
      default:
        return (
          <div className="flex items-center justify-center h-[calc(100vh-12rem)] text-gray-500">
            탭을 선택해주세요
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm min-h-[calc(100vh-8rem)]">
      {renderContent()}
    </div>
  );
};

export default TabContent;