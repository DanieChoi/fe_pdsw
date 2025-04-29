
import React, { useRef, useEffect, useState, useCallback } from "react";
import { useTabStore } from "@/store/tabStore";
import { useDroppable } from "@dnd-kit/core";
import Image from "next/image";
import { CommonButton } from "@/components/shared/CommonButton";
import DraggableTab from "./DraggableTab";
import { Trash2  } from "lucide-react";

// Tab 타입 정의
interface Tab {
    id: number;
    uniqueKey: string;
    title: string;
    campaignId?: string;
    campaignName?: string;
    params?: Record<string, any>;
}

// 개별 탭 아이템 - Hook 호출 문제 해결을 위한 별도 컴포넌트
const TabItem = React.memo(({
    tab,
    isActive,
    rowId,
    sectionId,
    openedTab
}: {
    tab: Tab;
    isActive: boolean;
    rowId: string;
    sectionId: string;
    openedTab?: Tab;
}) => {
    const { removeTab, setSectionActiveTab, setOpenOperationSectionId } = useTabStore();

    // onRemove 핸들러
    const handleRemove = useCallback(() => {
        if (tab.id === 11) setOpenOperationSectionId("section1");
        removeTab(tab.id, tab.uniqueKey);
    }, [tab.id, tab.uniqueKey, removeTab, setOpenOperationSectionId]);

    // onSelect 핸들러
    const handleSelect = useCallback(() => {
        setSectionActiveTab(rowId, sectionId, tab.uniqueKey);
    }, [rowId, sectionId, tab.uniqueKey, setSectionActiveTab]);

    return (
        <DraggableTab
            id={tab.id}
            uniqueKey={tab.uniqueKey}
            title={openedTab?.title || tab.title || `탭 ${tab.id}`}
            isActive={isActive}
            onRemove={handleRemove}
            onSelect={handleSelect}
            rowId={rowId}
            sectionId={sectionId}
        />
    );
});
// Add display name for TabItem
TabItem.displayName = 'TabItem';

// TabHeader 컴포넌트
const TabHeader = ({
    rowId,
    sectionId,
    section,
    openedTabs,
    activeTabId,
    activeTabKey,
    canRemove,
}: {
    rowId: string;
    sectionId: string;
    section: { tabs: Tab[], activeTabKey?: string };
    openedTabs: any[];
    activeTabId: number | null;
    activeTabKey: string | null;
    canRemove: boolean;
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const [scrolling, setScrolling] = useState<"left" | "right" | null>(null);
    const prevTabsLengthRef = useRef<number | null>(null);

    // 섹션 ID 일관성 있게 생성
    const droppableId = `section-${rowId}-${sectionId}`;

    const { isOver, setNodeRef } = useDroppable({
        id: droppableId,
        data: {
            type: "section",
            rowId,
            sectionId
        },
    });

    const {
        removeSection,
        rows,
        addSectionAndMoveTab,
        closeAllTabs
    } = useTabStore();

    // 현재 탭 수 가져오기
    const currentTabsLength = section?.tabs?.length || 0;

    // 오른쪽 끝으로 스크롤하는 함수
    const scrollToEnd = useCallback(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
        }
    }, []);

    // 탭 추가 감지 및 자동 스크롤 처리
    useEffect(() => {
        // 처음 렌더링이 아니고, 이전 탭 개수보다 현재 탭 개수가 많아졌을 경우
        if (prevTabsLengthRef.current !== null && currentTabsLength > prevTabsLengthRef.current) {
            // 오른쪽 끝으로 스크롤
            if (scrollRef.current) {
                // 즉시 실행과 약간의 지연 후 실행(애니메이션이나 렌더링 완료 후)
                scrollToEnd();

                // 추가로 약간의 지연을 두고 한 번 더 스크롤 (렌더링이 완전히 끝난 후)
                setTimeout(scrollToEnd, 100);
            }
        }

        // 현재 탭 개수 저장
        prevTabsLengthRef.current = currentTabsLength;
    }, [currentTabsLength, scrollToEnd]);

    useEffect(() => {
        return () => {
            if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
        };
    }, []);

    const scroll = useCallback((dir: "left" | "right") => {
        if (!scrollRef.current) return;
        const delta = dir === "left" ? -100 : 100;
        scrollRef.current.scrollBy({ left: delta, behavior: "smooth" });
    }, []);

    const startScroll = useCallback((dir: "left" | "right") => {
        setScrolling(dir);
        if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
        scroll(dir);
        scrollIntervalRef.current = setInterval(() => scroll(dir), 150);
    }, [scroll]);

    const stopScroll = useCallback(() => {
        if (scrollIntervalRef.current) {
            clearInterval(scrollIntervalRef.current);
            scrollIntervalRef.current = null;
        }
        setScrolling(null);
    }, []);

    // 섹션 삭제 핸들러
    const handleSectionRemove = useCallback(() => {
        // 섹션 삭제 전에 업데이트된 removeSection 함수 호출
        removeSection(rowId, sectionId);
    }, [removeSection, rowId, sectionId]);

    // 현재 행에 섹션이 여러 개인지 확인
    const row = rows.find(r => r.id === rowId);
    const hasMultipleSections = (row?.sections?.length || 0) > 1;

    return (
        <div
            ref={setNodeRef}
            className={`flex-none border-b border-gray-200 transition-colors duration-200 ${isOver
                ? "bg-blue-100 shadow-inner ring-2 ring-blue-300" // 강조된 하이라이트 스타일
                : "bg-white"
                }`}
            data-section-id={sectionId}
            data-row-id={rowId}
        >
            {/* 높이를 일관되게 맞춘 컨테이너 */}
            <div className="flex items-stretch">
                {/* Left scroll - 높이를 동일하게 */}
                <CommonButton
                    variant="tabEtc"
                    size="sm"
                    className={`flex-none flex items-center justify-center px-3 ${scrolling === "left" ? "bg-gray-100" : ""}`}
                    onMouseDown={() => startScroll("left")}
                    onMouseUp={stopScroll}
                    onMouseLeave={stopScroll}
                    onTouchStart={() => startScroll("left")}
                    onTouchEnd={stopScroll}
                >
                    <Image src="/header-menu/leftArrow.svg" alt="left" width={8} height={8} />
                </CommonButton>

                {/* Tabs container - 높이와 정렬 일치 */}
                <div
                    ref={scrollRef}
                    className={`flex-1 flex items-stretch overflow-x-auto scrollbar-none ${isOver ? "bg-blue-50" : ""
                        }`}
                    data-droppable-tabs-container={true}
                >
                    {section.tabs.map((tab) => {
                        // openedTabs에서 실제 탭 정보 찾기
                        const openedTab = openedTabs.find(
                            (t) => t.id === tab.id && t.uniqueKey === tab.uniqueKey
                        );

                        // 섹션 활성 탭 확인 및 전역 활성 탭 확인
                        const isActiveInSection = section.activeTabKey === tab.uniqueKey;
                        const isActiveGlobal = tab.id === activeTabId && tab.uniqueKey === activeTabKey;
                        const isActive = isActiveInSection || isActiveGlobal;

                        return (
                            <TabItem
                                key={tab.uniqueKey}
                                tab={tab}
                                isActive={isActive}
                                rowId={rowId}
                                sectionId={sectionId}
                                openedTab={openedTab}
                            />
                        );
                    })}
                </div>

                {/* Right scroll - 높이를 동일하게 */}
                <CommonButton
                    variant="tabEtc"
                    size="sm"
                    className={`flex-none flex items-center justify-center px-3 ${scrolling === "right" ? "bg-gray-100" : ""}`}
                    onMouseDown={() => startScroll("right")}
                    onMouseUp={stopScroll}
                    onMouseLeave={stopScroll}
                    onTouchStart={() => startScroll("right")}
                    onTouchEnd={stopScroll}
                >
                    <Image src="/header-menu/rightArrow.svg" alt="right" width={8} height={8} />
                </CommonButton>

                {/* Remove section - 높이를 동일하게 */}
                {canRemove && hasMultipleSections && (
                    <CommonButton
                        variant="tabEtc"
                        size="sm"
                        className="flex-none flex items-center justify-center px-3"
                        onClick={handleSectionRemove}
                    >
                        <Image src="/header-menu/tab_minus.svg" alt="remove" width={8} height={8} />
                    </CommonButton>
                )}

                {/* 섹션 분할 버튼 추가 */}
                {section.tabs.length > 0 && !hasMultipleSections && (
                    <CommonButton
                        variant="tabEtc"
                        size="sm"
                        className="flex-none flex items-center justify-center px-3"
                        onClick={() => {
                            // 현재 섹션의 활성 탭이 있으면 그 탭을 분할
                            if (section.activeTabKey) {
                                const activeTab = section.tabs.find(t => t.uniqueKey === section.activeTabKey);
                                if (activeTab) {
                                    addSectionAndMoveTab(activeTab.id, activeTab.uniqueKey, rowId, sectionId);
                                }
                            }
                        }}
                    >
                        <Image src="/header-menu/tab_plus.svg" alt="split" width={8} height={8} />
                    </CommonButton>
                )}


                {/* 모든 탭 닫기 버튼 */}
                {section.tabs.length > 0 && (
                    <CommonButton
                        variant="tabEtc"
                        size="sm"
                        className="flex-none flex items-center justify-center px-3"
                        onClick={() => closeAllTabs(rowId, sectionId)}
                        title="모든 탭 닫기"
                    >
                        <Trash2 size={12} className="text-gray-600" />
                    </CommonButton>
                )}

            </div>

            {/* 추가: 드롭 가능한 영역에 대한 시각적 표시 */}
            {isOver && (
                <div className="absolute inset-0 pointer-events-none border-2 border-blue-400 bg-blue-50 bg-opacity-30 z-10"></div>
            )}
        </div>
    );
};

// Add display name for TabHeader
TabHeader.displayName = 'TabHeader';

export default React.memo(TabHeader);