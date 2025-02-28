import React, { useState, useEffect, useCallback } from "react";
import TitleWrap from "@/components/shared/TitleWrap";
import CustomAlert from "@/components/shared/layout/CustomAlert";

export interface ColumnSetProps {
  isOpen: boolean;
  onConfirm: (selectedColumns: any[]) => void;
  onClose: () => void;
  columns: any[];
}

const DEFAULT_SELECTED_KEYS = [
  'senderType', 'start_flag', '완료구분', '진행률', '리스트대비성공률', 
  '총리스트건수', '순수발신건수', '미발신건수', '발신대비성공률', '총발신건수',
  'dialAttempt', 'dialSuccess', 'dialFail'
];

const ColumnSet: React.FC<ColumnSetProps> = ({ isOpen, onConfirm, onClose, columns }) => {
  // 전체 컬럼 목록
  const [allColumns, setAllColumns] = useState<any[]>([]);
  
  // 선택된 컬럼 목록 (오른쪽)
  const [rightItems, setRightItems] = useState<any[]>([]);
  
  // 선택된 항목
  const [selectedLeftKey, setSelectedLeftKey] = useState<string | null>(null);
  const [selectedRightIndex, setSelectedRightIndex] = useState<number | null>(null);
  
  console.log("선택 상태:", { selectedLeftKey, selectedRightIndex });

  // 초기 데이터 설정
  useEffect(() => {
    if (isOpen) {
      
      // 모든 가능한 컬럼
      const columnsData = [
        ...columns,
        { key: 'campaignId', name: '캠페인 아이디' },
        { key: 'dialAttempt', name: '발신 시도 건수' },
        { key: 'dialSuccess', name: '발신 성공 건수' },
        { key: 'dialFail', name: '발신 실패 건수' },
        { key: 'noAgent', name: '대기 상담원 없음' },
        { key: 'agentConnect', name: '상담원 연결' },
        { key: 'agentConnectFail', name: '상담원 연결 실패' },
        { key: 'agentNoResponse', name: '상담원 무응답' },
        { key: 'agentBusy', name: '상담원 통화중' },
        { key: 'agentHangup', name: '상담원 바로 끊음' },
        { key: 'customerGiveup', name: '고객포기' },
        { key: 'customerWaitTimeout', name: '고객 최대 대기시간 초과' },
        { key: 'noAgentAfterListen', name: '멘트 청취후 상담원 연결안함' },
        { key: 'failBusy', name: '통화중 실패' },
        { key: 'failNoResponse', name: '무응답 실패' },
        { key: 'failFax', name: '팩스/모뎀 실패' },
        { key: 'failOther', name: '기타 실패' },
        { key: 'failPhoneError', name: '전화번호 오류 실패' },
        { key: 'failLineError', name: '회선 오류 실패' },
        { key: 'failCustomerHangup', name: '고객바로 끊음 실패' },
        { key: 'failNoSound', name: '통화음 없음 실패' },
        { key: 'failNoDialtone', name: '다이얼톤 없음 실패' },
        { key: 'failMachineSound', name: '기계음 실패' },
        { key: 'scheduleWait', name: '스케줄 대기(발신가능)' },
        { key: 'blacklist', name: '블랙리스트' },
        { key: 'realtimeListDelete', name: '실시간 리스트 삭제' },
        { key: 'scheduleSettingFail', name: '스케줄 설정실패' },
        { key: 'callbackTimeout', name: '콜백 타임아웃' },
        { key: 'noDialSelectedByAgent', name: '팝업후 상담원 미발신 선택' },
        { key: 'popupNoDialSelect', name: '팝업후 발신 여부 미선택' },
        { key: 'popupAgentStateChange', name: '팝업후 상담원 상태 변경' },
        { key: 'popupAgentModeChange', name: '팝업후 상담원 모드 변경' },
        { key: 'agentStateChangeBeforeDial', name: '발신 확인전 상담원 상태 변경' },
        { key: 'agentModeChangeBeforeDial', name: '발신 확인전 상담원 모드 변경' },
        { key: 'noAgentInfo', name: '지정 상담원 정보 미입력' }
      ];
      
      setAllColumns(columnsData);
      
      // 기본 선택된 항목 (오른쪽에 표시)
      const selectedItems = columnsData.filter(col => DEFAULT_SELECTED_KEYS.includes(col.key));
      setRightItems(selectedItems);
      
      // 선택 상태 초기화
      setSelectedLeftKey(null);
      setSelectedRightIndex(null);
      
      console.log("초기 데이터 설정 완료");
    }
  }, [isOpen, columns]);

  // 왼쪽 항목 선택 핸들러
  const handleLeftItemClick = useCallback((e: React.MouseEvent, key: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 이미 오른쪽에 있는 항목인지 확인
    const isInRightList = rightItems.some(item => item.key === key);
    
    if (!isInRightList) {
      // 이미 선택된 항목이면 선택 해제, 아니면 선택
      setSelectedLeftKey(selectedLeftKey === key ? null : key);
      // 오른쪽 선택 해제
      setSelectedRightIndex(null);
    }
  }, [rightItems, selectedLeftKey]);

  // 오른쪽 항목 선택 핸들러
  const handleRightItemClick = useCallback((e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 이미 선택된 항목이면 선택 해제, 아니면 선택
    setSelectedRightIndex(selectedRightIndex === index ? null : index);
    // 왼쪽 선택 해제
    setSelectedLeftKey(null);
  }, [selectedRightIndex]);

  // 왼쪽에서 오른쪽으로 항목 이동
  const handleMoveToRight = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (selectedLeftKey) {
      // 선택된 왼쪽 항목 찾기
      const selectedItem = allColumns.find(col => col.key === selectedLeftKey);
      
      if (selectedItem) {
        // 이미 오른쪽에 있는지 확인
        const isAlreadyInRight = rightItems.some(item => item.key === selectedItem.key);
        
        if (!isAlreadyInRight) {
          // 오른쪽에 추가
          setRightItems([...rightItems, selectedItem]);
        }
        
        // 선택 상태 초기화
        setSelectedLeftKey(null);
      }
    }
  }, [allColumns, rightItems, selectedLeftKey]);

  // 오른쪽에서 왼쪽으로 항목 이동 (제거)
  const handleMoveToLeft = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (selectedRightIndex !== null) {
      // 선택된 항목 제거
      const newRightItems = [...rightItems];
      const removedItem = newRightItems.splice(selectedRightIndex, 1)[0];
      setRightItems(newRightItems);
      
      
      // 선택 상태 초기화
      setSelectedRightIndex(null);
    }
  }, [rightItems, selectedRightIndex]);

  // 오른쪽 항목을 위로 이동
  const handleMoveUp = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (selectedRightIndex !== null && selectedRightIndex > 0) {
      const newRightItems = [...rightItems];
      
      // 선택된 항목과 위 항목 교환
      const temp = newRightItems[selectedRightIndex];
      newRightItems[selectedRightIndex] = newRightItems[selectedRightIndex - 1];
      newRightItems[selectedRightIndex - 1] = temp;
      
      setRightItems(newRightItems);
      setSelectedRightIndex(selectedRightIndex - 1);
      
    }
  }, [rightItems, selectedRightIndex]);

  // 오른쪽 항목을 아래로 이동
  const handleMoveDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (selectedRightIndex !== null && selectedRightIndex < rightItems.length - 1) {
      const newRightItems = [...rightItems];
      
      // 선택된 항목과 아래 항목 교환
      const temp = newRightItems[selectedRightIndex];
      newRightItems[selectedRightIndex] = newRightItems[selectedRightIndex + 1];
      newRightItems[selectedRightIndex + 1] = temp;
      
      setRightItems(newRightItems);
      setSelectedRightIndex(selectedRightIndex + 1);
      
    }
  }, [rightItems, selectedRightIndex]);

  // 기본 설정 적용
  const handleDefaultSetting = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 기본 선택된 항목 (오른쪽에 표시)
    const defaultSelectedItems = allColumns.filter(col => DEFAULT_SELECTED_KEYS.includes(col.key));
    setRightItems(defaultSelectedItems);
    
    // 선택 상태 초기화
    setSelectedLeftKey(null);
    setSelectedRightIndex(null);
    
  }, [allColumns]);

  // 확인 버튼 클릭
  const handleConfirm = useCallback(() => {
    onConfirm(rightItems);
    onClose();
  }, [rightItems, onConfirm, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div className="w-full" onClick={(e) => e.stopPropagation()}>
      <div className="flex w-full gap-[20px]">
        <div className="flex gap-[20px] flex-1" onClick={(e) => e.stopPropagation()}>
           {/* 왼쪽 컬럼 목록 (모든 컬럼) */}
          <div className="w-full">
              <TitleWrap
                title="전체컬럼"
              />
              <div className="border rounded h-[478px] overflow-y-auto">
                {allColumns.map((item) => {
                  // 이미 오른쪽에 있는지 확인
                  const isInRightList = rightItems.some(rightItem => rightItem.key === item.key);
                  
                  return (
                    <div 
                      key={item.key}
                      onClick={(e) => handleLeftItemClick(e, item.key)}
                      className={`
                        py-1 px-2 cursor-pointer 
                        ${selectedLeftKey === item.key && !isInRightList ? "bg-[#FFFAEE]" : ""} 
                        ${isInRightList ? "text-gray-400" : "hover:bg-[#FFFAEE]"}
                      `}
                      role="button"
                      tabIndex={0}
                      data-key={item.key}
                      data-testid={`left-item-${item.key}`}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
          </div>
            {/* 가운데 화살표 */}
            <div className="w-[40px] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={handleMoveToRight}
                className={`
                  w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full 
                  flex items-center justify-center mb-2 
                  ${!selectedLeftKey || rightItems.some(item => item.key === selectedLeftKey) ? "opacity-50 cursor-not-allowed" : ""}
                `}
                disabled={!selectedLeftKey || rightItems.some(item => item.key === selectedLeftKey)}
                data-testid="move-right-button"
              >
                →
              </button>
              <button
                type="button"
                onClick={handleMoveToLeft}
                className={`
                  w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full 
                  flex items-center justify-center 
                  ${selectedRightIndex === null ? "opacity-50 cursor-not-allowed" : ""}
                `}
                disabled={selectedRightIndex === null}
                data-testid="move-left-button"
              >
                ←
              </button>
            </div>
        </div>
        
        <div className="flex gap-[20px] flex-1" onClick={(e) => e.stopPropagation()}>
          {/* 오른쪽 컬럼 목록 (선택된 항목) */}
          <div className="w-full">
            <TitleWrap
                title="선택된 컬럼"
                buttons={[
                  { label: "기본설정", 
                    onClick: () => handleDefaultSetting(null as any), 
                    variant: "secondary" },
                ]}
              />
              <div className="border rounded h-[478px] overflow-y-auto">
                {rightItems.map((item, index) => (
                  <div 
                    key={`right-${item.key}-${index}`}
                    onClick={(e) => handleRightItemClick(e, index)}
                    className={`
                      py-1 px-2 cursor-pointer 
                      ${selectedRightIndex === index ? "bg-[#FFFAEE]" : "hover:bg-[#FFFAEE]"}
                    `}
                    role="button"
                    tabIndex={0}
                    data-index={index}
                    data-testid={`right-item-${index}`}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div> 
             {/* 위아래버튼 */}
            <div className="flex flex-col items-center gap-2 min-w-[22px] justify-center">
              <button
                type="button"
                onClick={handleMoveUp}
                className={`
                  w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full 
                  flex items-center justify-center 
                  ${selectedRightIndex === null || selectedRightIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}
                `}
                disabled={selectedRightIndex === null || selectedRightIndex === 0}
                data-testid="move-up-button"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={handleMoveDown}
                className={`
                  w-[22px] h-[22px] bg-[#60C3CD] text-white rounded-full 
                  flex items-center justify-center
                  ${selectedRightIndex === null || selectedRightIndex === rightItems.length - 1 ? "opacity-50 cursor-not-allowed" : ""}
                `}
                disabled={selectedRightIndex === null || selectedRightIndex === rightItems.length - 1}
                data-testid="move-down-button"
              >
                ↓
              </button>
            </div>
        </div>
      </div>
    </div>
  );

  return (
    <CustomAlert
      isOpen={isOpen}
      title="칼럼설정"
      message={modalContent}
      type="1"
      onClose={handleConfirm}
      onCancle={onClose}
      width="max-w-modal-lm"
    />
  );
};

export default ColumnSet;