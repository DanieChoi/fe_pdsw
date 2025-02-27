"use client";

import React, { useEffect } from 'react';
import { useTabStore } from '@/store/tabStore';
import CommonButton from '@/components/shared/CommonButton';

interface Props {
    campaignId?: string;
    campaignName?: string;
}

const CampaignDeletePanel = ({ campaignId, campaignName }: Props) => {
    // 탭 스토어에서 필요한 함수 가져오기
    const { activeTabKey, closeAllTabs, rows } = useTabStore();
    
    // 삭제 처리 함수
    const handleDelete = () => {
        // 여기에 실제 삭제 로직 구현
        console.log(`캠페인 ${campaignId} 삭제 처리`);
        handleCloseTab();
    };
    
    // 현재 탭이 포함된, 행과 섹션 ID 찾기
    const findCurrentTabLocation = () => {
        for (const row of rows) {
            for (const section of row.sections) {
                if (section.tabs.some(tab => tab.uniqueKey === activeTabKey)) {
                    return { rowId: row.id, sectionId: section.id };
                }
            }
        }
        return { rowId: 'row-1', sectionId: 'default' }; // 기본값
    };
    
    // 탭 닫기 함수
    const handleCloseTab = () => {
        const { rowId, sectionId } = findCurrentTabLocation();
        
        // setTimeout을 사용하여 상태 업데이트를 비동기적으로 처리
        setTimeout(() => {
            closeAllTabs(rowId, sectionId);
        }, 100);
    };
    
    // ESC 키 이벤트 처리
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleCloseTab();
            }
        };

        // 이벤트 리스너 등록
        window.addEventListener('keydown', handleEscapeKey);
        
        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);
    
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* 배경 오버레이 (클릭 시 모달 닫힘) */}
            <div 
                className="absolute inset-0 bg-black/10" 
                onClick={handleCloseTab}
            />
            
            {/* 모달 컨텐츠 */}
            <div className="bg-white rounded-md shadow-lg w-full max-w-sm relative z-10 overflow-hidden">
                {/* 헤더 */}
                <div className="bg-[#5DC2BD] px-4 py-2">
                    <h2 className="text-base font-medium text-white">캠페인 삭제</h2>
                </div>
                
                {/* 내용 */}
                <div className="p-4">
                    <div className="text-center mb-4">
                        <p className="mb-4">
                            정말로 {campaignName || ''} 를 삭제하시겠습니까?
                        </p>
                        <p className="text-sm text-gray-500">
                            이 작업은 되돌릴 수 없습니다.
                        </p>
                    </div>
                    
                    <div className="flex justify-center gap-2 mt-6">
                        <CommonButton
                            variant="destructive"
                            onClick={handleDelete}
                            size="default"
                        >
                            삭제하기
                        </CommonButton>
                        <CommonButton 
                            variant="outline"
                            onClick={handleCloseTab}
                            size="default"
                        >
                            취소
                        </CommonButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDeletePanel;