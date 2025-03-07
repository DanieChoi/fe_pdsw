'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useAuthStore } from '@/store';
import ChannelMonitor from '@/app/main/comp/ChannelMonitor';
import AgentStatusMonitoring from '@/app/main/comp/AgentStatusMonitoring';
import OutboundCallProgressPanel from '@/app/main/comp/OutboundCallProgressPanel';
import CampaignMonitorDashbord from '@/app/main/comp/CampaignMonitorDashbord';
import Image from "next/image";
import CustomAlert from '@/components/shared/layout/CustomAlert';
import CampaignManager from '@/app/main/comp/CampaignManager';
import RebroadcastSettingsPanel from '@/app/main/comp/RebroadcastSettingsPanel';
import SkillListPopup from '@/components/shared/layout/SkillListPopup';
import CampaignInfo from './components/CampaignInfo';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';


// 타입 정의
interface Sizes {
  topHeight: number;
  topRow: {
    left: number;
    middle: number;
    right: number;
  };
  bottomRow: {
    left: number;
    right: number;
  };
}

interface Section {
  id: string;
  title: string;
  position: 'top-left' | 'top-middle' | 'top-right' | 'bottom-left' | 'bottom-right';
  width: string;  // 너비 정보 추가
}

type DraggerId = 'vertical' | 'top-1' | 'top-2' | 'bottom';
type CampaignStatus = '시작' | '멈춤' | '중지';

interface Campaign {
  id: string;
  name: string;
  skills?: string[];
  endTime?: string;
  startFlag?: string;
  callPacing?: number;
  stats?: {
    waiting: number;
    firstCall: number;
    retryCall: number;
    distributing: number;
  };
}



const MonitorPage = () => {

   // 인증 관련 상태
   const { tenant_id } = useAuthStore();

   // 드래그 관련 상태
   const containerRef = useRef<HTMLDivElement>(null);
   const [isDragging, setIsDragging] = useState<boolean>(false);
   const [activeDragger, setActiveDragger] = useState<DraggerId | null>(null);
   const initialPositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
   const initialSizesRef = useRef<Sizes | null>(null);
 
   // 모달/팝업 상태
   const [isCampaignManagerOpen, setIsCampaignManagerOpen] = useState(false);
   const [isRebroadcastOpen, setIsRebroadcastOpen] = useState(false);
   const [isSkillPopupOpen, setIsSkillPopupOpen] = useState(false);
 
   // 크기 조정 상태
   const [sizes, setSizes] = useState<Sizes>({
     topHeight: 40,
     topRow: { left: 15, middle: 55, right: 30 },
     bottomRow: { left: 40, right: 60 }
   });
   

  // 캠페인 관련 상태(가짜 데이터)
  const [campaigns] = useState<Campaign[]>([
    { 
      id: '1', 
      name: '캠페인 1',
      skills: ['1', '2'],
      endTime: '02:24:20'
    },
    { 
      id: '2', 
      name: '캠페인 2',
      skills: ['3', '4'],
      endTime: '03:15:30'
    },
  ]);

  const [selectedCampaign, setSelectedCampaign] = useState<string>('');
  const [campaignStatus, setCampaignStatus] = useState<CampaignStatus>('멈춤');
  const [callPacing, setCallPacing] = useState<number>(100);
  const [_campaigns, _setCampaigns] = useState<Campaign[]>([]);
  const [campaignList, setCampaignList ] = useState<any[]>([]);
  const [campaignSkillList, setCampaignSkillList ] = useState<any[]>([]);

  // 섹션 상태
  const [sections, setSections] = useState<Section[]>([
    { 
      id: 'campaign-info', 
      title: '캠페인정보', 
      position: 'top-left', 
      width: `${sizes.topRow.left}%` 
    },
    { 
      id: 'outbound-progress', 
      title: '발신 진행 상태', 
      position: 'top-middle', 
      width: `${sizes.topRow.middle}%` 
    },
    { 
      id: 'agent-status', 
      title: '상담원 상태모니터', 
      position: 'top-right', 
      width: `${sizes.topRow.right}%` 
    },
    { 
      id: 'channel-monitor', 
      title: '채널모니터', 
      position: 'bottom-left', 
      width: `${sizes.bottomRow.left}%` 
    },
    { 
      id: 'campaign-progress', 
      title: '캠페인 진행 정보', 
      position: 'bottom-right', 
      width: `${sizes.bottomRow.right}%` 
    }
  ]);

   // 첫 캠페인 자동 선택 로직
   useEffect(() => {
    if (_campaigns.length > 0 && !selectedCampaign) {
      const firstCampaign = _campaigns[0];
      setSelectedCampaign(firstCampaign.id);
      handleCampaignSelect(firstCampaign.id);
    }
  }, [_campaigns]);

   // 현재 선택된 캠페인 정보
   const currentCampaign = _campaigns.find(c => c.id === selectedCampaign);

   // 캠페인 데이터 통합 관리 핸들러
   const handleCampaignDataUpdate = useCallback((campaignId: string, data: any) => {
    console.log('Campaign data updated:', campaignId, data);
    // TODO: 필요한 상태 업데이트 로직 추가
  }, []);
  
  // 드래그 시작 핸들러
  const handleMouseDown = useCallback((e: React.MouseEvent, draggerId: DraggerId) =>  {
    e.preventDefault();
    setIsDragging(true);
    setActiveDragger(draggerId);
    
    initialPositionRef.current = {
      x: e.clientX,
      y: e.clientY
    };
    initialSizesRef.current = {...sizes};
    
    document.body.style.userSelect = 'none';
    document.body.style.cursor = draggerId === 'vertical' ? 'row-resize' : 'col-resize';
  }, [sizes]);

  // 마우스 이동 중 크기 조정 핸들러
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !containerRef.current || !initialSizesRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const deltaX = e.clientX - initialPositionRef.current.x;
    const deltaY = e.clientY - initialPositionRef.current.y;
    const deltaXPercent = (deltaX / containerRect.width) * 100;
    const deltaYPercent = (deltaY / containerRect.height) * 100;

    setSizes(prevSizes => {
      const newSizes = {...prevSizes};

      if (activeDragger === 'vertical') {
        let newTopHeight = initialSizesRef.current!.topHeight + deltaYPercent;
        newTopHeight = Math.max(20, Math.min(80, newTopHeight));
        newSizes.topHeight = newTopHeight;
      }
      else if (activeDragger === 'top-1') {
        let newLeftWidth = initialSizesRef.current!.topRow.left + deltaXPercent;
        newLeftWidth = Math.max(10, Math.min(40, newLeftWidth));
        
        const remainingWidth = 100 - newLeftWidth;
        const middleRightRatio = initialSizesRef.current!.topRow.middle / 
          (initialSizesRef.current!.topRow.middle + initialSizesRef.current!.topRow.right);
        
        newSizes.topRow = {
          left: newLeftWidth,
          middle: remainingWidth * middleRightRatio,
          right: remainingWidth * (1 - middleRightRatio)
        };
      }
      else if (activeDragger === 'top-2') {
        let newMiddleWidth = initialSizesRef.current!.topRow.middle + deltaXPercent;
        const availableWidth = 100 - newSizes.topRow.left;
        newMiddleWidth = Math.max(20, Math.min(availableWidth - 20, newMiddleWidth));
        
        newSizes.topRow = {
          ...newSizes.topRow,
          middle: newMiddleWidth,
          right: 100 - newSizes.topRow.left - newMiddleWidth
        };
      }
      else if (activeDragger === 'bottom') {
        let newLeftWidth = initialSizesRef.current!.bottomRow.left + deltaXPercent;
        newLeftWidth = Math.max(20, Math.min(80, newLeftWidth));
        
        newSizes.bottomRow = {
          left: newLeftWidth,
          right: 100 - newLeftWidth
        };
      }

      return newSizes;
    });
  }, [isDragging, activeDragger]);

   // 캠페인 관련 핸들러
   const handleStatusChange = useCallback((newStatus: string) => {
    setCampaignStatus(newStatus as CampaignStatus);
    // API 호출 로직 추가
  }, []);

    const handleCampaignSelect = useCallback((campaignId: string) => {
      setSelectedCampaign(campaignId);
      // API 호출 로직 추가
    }, []);

    const handleCallPacingChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value);
      if (!isNaN(value) && value >= 0) {
        setCallPacing(value);
      }
    }, []);

    const handleCallPacingApply = useCallback(() => {
      console.log('Applying call pacing:', callPacing);
      // TODO: API 호출하여 콜페이싱 값 적용
    }, [callPacing]);

    // 스킬 관련 핸들러
    const handleSkillPopupClose = () => {
      setIsSkillPopupOpen(false);
    };
  
    const handleSkillModify  = () => {
      setIsSkillPopupOpen(true);
    };
  
    const handleSkillConfirm = (selectedSkills: string) => {
      // 여기서 선택된 스킬 처리
      console.log('Selected skills:', selectedSkills);
      setIsSkillPopupOpen(false);
    };

    // 섹션 드래그 관련 핸들러
    const handleDragStart = useCallback((e: React.DragEvent, sectionId: string) => {
      e.dataTransfer.setData('text/plain', sectionId);
      e.dataTransfer.effectAllowed = 'move';
    }, []);
  
    const handleDragOver = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      e.currentTarget.classList.add('drag-over');
    }, []);
  
    const handleDragLeave = useCallback((e: React.DragEvent) => {
      e.currentTarget.classList.remove('drag-over');
    }, []);
  
    const handleDrop = useCallback((e: React.DragEvent, targetPosition: Section['position']) => {
      e.preventDefault();
      e.currentTarget.classList.remove('drag-over');
      const sourceSectionId = e.dataTransfer.getData('text/plain');
      
      setSections(prevSections => {
        const newSections = [...prevSections];
        
        const sourceIndex = newSections.findIndex(s => s.id === sourceSectionId);
        const targetIndex = newSections.findIndex(s => s.position === targetPosition);
        
        if (sourceIndex !== -1 && targetIndex !== -1) {
          const temp = newSections[sourceIndex].position;
          newSections[sourceIndex].position = newSections[targetIndex].position;
          newSections[targetIndex].position = temp;
        }
        
        return newSections;
      });
    }, []);



  // 드래그 종료 핸들러
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setActiveDragger(null);
    document.body.style.userSelect = '';
    document.body.style.cursor = '';
  }, []);


  // 마우스 이벤트 리스너
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseleave', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);


  // 드래그 위치 바꾸는 함수들
  
  const renderSectionContent = useCallback((sectionId?: string) => {
    switch (sectionId) {
      case 'campaign-info':
        return (
          <CampaignInfo 
            currentCampaign={currentCampaign}
            selectedCampaign={selectedCampaign}
            campaignStatus={campaignStatus}
            callPacing={callPacing}
            campaigns={_campaigns}
            onCampaignSelect={handleCampaignSelect}
            onStatusChange={handleStatusChange}
            onCallPacingChange={handleCallPacingChange}
            onCallPacingApply={handleCallPacingApply}
            onCampaignEdit={() => setIsCampaignManagerOpen(true)}
            onSkillEdit={handleSkillModify}
            onRebroadcastEdit={() => setIsRebroadcastOpen(true)}
          />
        );
      case 'outbound-progress':
        return (
          <OutboundCallProgressPanel
            externalCampaignId={selectedCampaign}
            onCampaignChange={(campaignId) => {
              setSelectedCampaign(campaignId);
              handleCampaignDataUpdate(campaignId, null);
            }}
            onDataUpdate={(data) => handleCampaignDataUpdate(selectedCampaign, data)}
          />
        );
      case 'agent-status':
        return <AgentStatusMonitoring campaignId={Number(selectedCampaign)} _campaigns={campaignList}/>;
      case 'channel-monitor':
        return <ChannelMonitor />;
      case 'campaign-progress':
        return <CampaignMonitorDashbord campaignId={selectedCampaign} _campaigns={campaignList} />;
      default:
        return null;
    }
  }, [
    currentCampaign, selectedCampaign, campaignStatus, callPacing, 
    _campaigns, handleCampaignSelect, handleStatusChange, 
    handleCallPacingChange, handleCallPacingApply, 
    handleCampaignDataUpdate
  ]);


  const getSectionWidth = useCallback((position: Section['position']) => {
    switch (position) {
      case 'top-left':
        return sizes.topRow.left;
      case 'top-middle':
        return sizes.topRow.middle;
      case 'top-right':
        return sizes.topRow.right;
      case 'bottom-left':
        return sizes.bottomRow.left;
      case 'bottom-right':
        return sizes.bottomRow.right;
      default:
        return 0;
    }
  }, [sizes]);

  // 캠페인스킬 조회
  const { mutate: fetchCampaignSkills } = useApiForCampaignSkill({
    onSuccess: (data) => {
      setCampaignSkillList( data.result_data);
    }
  });
  // 캠페인 목록 조회
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      fetchCampaignSkills({
        session_key: '',
        tenant_id: 0,
      });
      if( tenant_id === 0){
        setCampaignList( data.result_data);
      }else{
        setCampaignList(data.result_data.filter(data=>data.tenant_id === tenant_id));
      }
    }
  });
  
  useEffect(() => {
    if( campaignList.length > 0 ){
      let updatedCampaigns = [];
      if( campaignSkillList.length === 0 ){
        updatedCampaigns = campaignList.map((data) => ({
          id: data.campaign_id,
          name: `[${data.campaign_id}]${data.campaign_name}`,
          skills: [],
          endTime: '',
          startFlag: data.start_flag
        }));
      }else{
        updatedCampaigns = campaignList.map((data) => ({
          id: data.campaign_id,
          name: `[${data.campaign_id}]${data.campaign_name}`,
          skills: campaignSkillList.filter((skill) => skill.campaign_id === data.campaign_id)
              .map((data) => data.skill_id)
              .join(',').split(','),
          endTime: '',
          startFlag: data.start_flag
        }));
      }      
      _setCampaigns(updatedCampaigns);
      if( selectedCampaign === '' ){
        setSelectedCampaign(updatedCampaigns[0].id);
      }
    }
  }, [campaignList,campaignSkillList]);

  useEffect(() => {     
    fetchMain({
      session_key: '',
      tenant_id: tenant_id,
    });
    const interval = setInterval(() => {           
      fetchMain({
        session_key: '',
        tenant_id: tenant_id,
      });
    }, 30000);  
    return () => clearInterval(interval);
  }, [tenant_id]);

 
const renderTopRow = () => {
  const topSections = sections.filter(s => 
    s.position === 'top-left' || 
    s.position === 'top-middle' || 
    s.position === 'top-right'
  ).sort((a, b) => {
    const positions = ['top-left', 'top-middle', 'top-right'];
    return positions.indexOf(a.position) - positions.indexOf(b.position);
  });

  return topSections.map((section, index) => {
    const isNotLast = index < topSections.length - 1;
    return (
      <React.Fragment key={`top-section-${section.position}`}>
        <div 
          className="border border-[#ebebeb] overflow-auto p-3 flex flex-col"
          style={{ width: `${getSectionWidth(section.position)}%` }}
          draggable
          onDragStart={(e) => handleDragStart(e, section.id)}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, section.position)}
        >
          <h2 className="text-sm text-[#333] font-bold flex gap-2 cursor-move">
            <Image src="/move.svg" alt="drag" width={7} height={10} />
            {section.title}
          </h2>
          <div className="h-[calc(100%-20px)] p-2">
            {renderSectionContent(section.id)}
          </div>
        </div>
        {isNotLast && (
          <div
            key={`top-divider-${index}`}
            className="w-1 bg-gray-200 hover:bg-[#55BEC8] active:bg-[#55BEC8] cursor-col-resize select-none"
            onMouseDown={(e) => handleMouseDown(e, `top-${index + 1}` as DraggerId)}
          />
        )}
      </React.Fragment>
    );
  });
};

const renderBottomRow = () => {
  const bottomSections = sections.filter(s => 
    s.position === 'bottom-left' || 
    s.position === 'bottom-right'
  ).sort((a, b) => {
    const positions = ['bottom-left', 'bottom-right'];
    return positions.indexOf(a.position) - positions.indexOf(b.position);
  });

  return bottomSections.map((section, index) => {
    const isNotLast = index < bottomSections.length - 1;
    return (
      <React.Fragment key={`bottom-section-${section.position}`}>
        <div 
          className="border border-[#ebebeb] overflow-auto p-3 flex flex-col"
          style={{ width: `${getSectionWidth(section.position)}%` }}
          draggable
          onDragStart={(e) => handleDragStart(e, section.id)}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, section.position)}
        >
          <h2 className="text-sm text-[#333] font-bold flex gap-2 cursor-move">
            <Image src="/move.svg" alt="drag" width={7} height={10} />
            {section.title}
          </h2>
          <div className="h-[calc(100%-20px)] p-2">
            {renderSectionContent(section.id)}
          </div>
        </div>
        {isNotLast && (
          <div
            key={`bottom-divider-${index}`}
            className="w-1 bg-gray-200 hover:bg-[#55BEC8] active:bg-[#55BEC8] cursor-col-resize select-none"
            onMouseDown={(e) => handleMouseDown(e, 'bottom')}
          />
        )}
      </React.Fragment>
    );
  });
};


  return (
    <div ref={containerRef} className="w-full h-screen bg-white overflow-hidden p-4 flex flex-col">
      {/* 상단 섹션 */}
      <div 
        className="flex transition-all duration-75"
        style={{ height: `${sizes.topHeight}%` }}
      >

        {renderTopRow()}
      </div>

       {/* 세로 구분선 */}
       <div className="w-full h-1 group cursor-row-resize select-none flex items-center hover:bg-gray-50 transition-colors">
        <div
          className="w-full h-1 bg-gray-200 group-hover:bg-[#55BEC8] group-active:bg-[#55BEC8]"
          onMouseDown={(e) => handleMouseDown(e, 'vertical')}
        />
      </div>


      {/* 하단 섹션 */}
      <div 
        className="flex transition-all duration-75"
        style={{ height: `${100 - sizes.topHeight}%` }}
      >
         {renderBottomRow()}
      </div>
       {/* 캠페인 매니저 모달 */}
        <CustomAlert
          isOpen={isCampaignManagerOpen}
          title="캠페인 수정"
          message={<CampaignManager campaignId={selectedCampaign} />}
          type="1"
          onClose={() => setIsCampaignManagerOpen(false)}
          onCancle={() => setIsCampaignManagerOpen(false)}
          width="max-w-[1300px]"
        />
        {/* 스킬 리스트 팝업 */}
        <SkillListPopup 
          isOpen={isSkillPopupOpen}
          param={currentCampaign?.skills?.map(Number) || []}
          tenantId={tenant_id}
          type="1" 
          onConfirm={handleSkillConfirm}
          onCancle={handleSkillPopupClose}
        />

         {/* 재발신 설정 팝업 */}
          <CustomAlert
            isOpen={isRebroadcastOpen}
            title="재발신 설정"
            message={<RebroadcastSettingsPanel />}
            type="1"
            onClose={() => setIsRebroadcastOpen(false)}
            onCancle={() => setIsRebroadcastOpen(false)}
            width="max-w-[1300px]"
          />

    </div>
  );
};

export default MonitorPage;