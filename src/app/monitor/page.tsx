// src\app\monitor\page.tsx
'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useAuthStore, useMainStore, useCampainManagerStore, useTabStore } from '@/store';
import ChannelMonitor from '@/app/main/comp/ChannelMonitor';
import AgentStatusMonitoring from '@/app/main/comp/AgentStatusMonitoring';
import OutboundCallProgressPanel from '@/app/main/comp/OutboundCallProgressPanel';
import CampaignMonitorDashbord from '@/app/main/comp/CampaignMonitorDashbord';
import Image from "next/image";
import CustomAlert, { CustomAlertRequest } from '@/components/shared/layout/CustomAlert';
import CampaignManager from '@/app/main/comp/CampaignManager';
import RebroadcastSettingsPanel from '@/app/main/comp/RebroadcastSettingsPanel';
import SkillListPopup from '@/components/shared/layout/SkillListPopup';
import CampaignInfo from './components/CampaignInfo';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain';
import { useApiForCampaignSkill } from '@/features/campaignManager/hooks/useApiForCampaignSkill';
import { useApiForTenants } from '@/features/auth/hooks/useApiForTenants';
import { useApiForSkills } from '@/features/campaignManager/hooks/useApiForSkills';
import { useApiForCampaignStatusUpdate } from '@/features/campaignManager/hooks/useApiForCampaignStatusUpdate';
import { CheckCampaignSaveReturnCode } from '@/components/common/common';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useApiForDialSpeedUpdate } from '@/features/campaignManager/hooks/useApiForDialSpeedUpdate';
import { campaignChannel } from '@/lib/broadcastChannel';
import { toast } from 'react-toastify';
import { useApiForCampaignSkillUpdate } from '@/features/campaignManager/hooks/useApiForCampaignSkillUpdate';
import CounsellorGroupActions from '@/components/shared/layout/comp/TabActions/CounsellorGroupActions';
import { useCampaignDialStatusStore } from '@/store/campaignDialStatusStore';


const errorMessage: CustomAlertRequest = {
  isOpen: false,
  message: '',
  title: '캠페인',
  type: '1',
  onClose: () => { },
  onCancel: () => { },
};

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
  skills?: number[];
  endTime?: string;
  startFlag?: number;
  callPacing?: number;
  tenant_id?: number;
  stats?: {
    waiting: number;
    firstCall: number;
    retryCall: number;
    distributing: number;
  };
}

const initData: Campaign = {
  id: '',
  name: '',
  skills: [],
  endTime: '',
  startFlag: 0,
  callPacing: 0,
  tenant_id: 0,
  stats: {
    waiting: 0,
    firstCall: 0,
    retryCall: 0,
    distributing: 0
  }
};


const MonitorPage = () => {
  const { tenants, setTenants, campaigns, setCampaigns } = useMainStore();
  const { setCampaignIdForUpdateFromSideMenu } = useTabStore();
  const { skills, setSkills } = useCampainManagerStore();

  // 인증 관련 상태
  const { tenant_id, session_key } = useAuthStore();

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
  const [alertState, setAlertState] = useState<CustomAlertRequest>(errorMessage);
  const router = useRouter();
  const [modifiedCampaign, setModifiedCampaign] = useState<string>('');
  const [channelMonitorInit, setChannelMonitorInit ] = useState<boolean>(false);

  // 크기 조정 상태
  const [sizes, setSizes] = useState<Sizes>({
    topHeight: 40,
    topRow: { left: 15, middle: 55, right: 30 },
    bottomRow: { left: 40, right: 60 }
  });

  // 캠페인 관련 상태(가짜 데이터)
  // const [campaigns] = useState<Campaign[]>([
  //   { 
  //     id: '1', 
  //     name: '캠페인 1',
  //     skills: ['1', '2'],
  //     endTime: '02:24:20'
  //   },
  //   { 
  //     id: '2', 
  //     name: '캠페인 2',
  //     skills: ['3', '4'],
  //     endTime: '03:15:30'
  //   },
  // ]);

  const [selectedCampaign, setSelectedCampaign] = useState<string>('');
  const [campaignStatus, setCampaignStatus] = useState<CampaignStatus>('멈춤');
  const [callPacing, setCallPacing] = useState<number>(0);
  const [dialMode, setDialMode] = useState<number>(0);
  const [_campaigns, _setCampaigns] = useState<Campaign[]>([]);
  const [campaignList, setCampaignList] = useState<any[]>([]);
  const [campaignSkillList, setCampaignSkillList] = useState<any[]>([]);

    
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
      title: '상담사 상태모니터',
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
  const [currentCampaign, setCurrentCampaign] = useState<Campaign>(initData);

  // 캠페인 데이터 통합 관리 핸들러
  const handleCampaignDataUpdate = useCallback((campaignId: string, data: any) => {
    // console.log('Campaign data updated:', campaignId, data);
    // TODO: 필요한 상태 업데이트 로직 추가
  }, []);

  // 드래그 시작 핸들러
  const handleMouseDown = useCallback((e: React.MouseEvent, draggerId: DraggerId) => {
    e.preventDefault();
    setIsDragging(true);
    setActiveDragger(draggerId);

    initialPositionRef.current = {
      x: e.clientX,
      y: e.clientY
    };
    initialSizesRef.current = { ...sizes };

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
      const newSizes = { ...prevSizes };

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

  //캠페인 상태 변경 api 호출
  const { mutate: fetchCampaignStatusUpdate } = useApiForCampaignStatusUpdate({
    onSuccess: (data) => {
      if (!(data.result_code === 0 || data.result_code === -13)) {
        //
        // -8000 : '캠페인이 상태 변경 중이므로, 캠페인을 시작할 수 없습니다.'
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: CheckCampaignSaveReturnCode(data.reason_code),
          onClose: () => setAlertState((prev) => ({ ...prev, isOpen: false })),
          onCancel: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
        });
        setCampaignStatus(currentCampaign.startFlag === 1 ? '시작' : currentCampaign.startFlag === 2 ? '멈춤' : '중지');
      } else {
        fetchMain({
          session_key: '',
          tenant_id: tenant_id,
        });
      }
    }, onError: (data) => {
      if (data.message.split('||')[0] === '5') {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
        });
        Cookies.remove('session_key');
        setTimeout(() => {
          router.push('/login');
        }, 1000);
      }
    }
  });

  //캠페인 발신 속도 수정 api 호출
  const { mutate: fetchDialSpeedUpdate } = useApiForDialSpeedUpdate({
    onSuccess: (data, variables) => {

      // 현재 선택된 캠페인의 발신속도를 업데이트해서 최신 상태 반영
      setCurrentCampaign((prev) => ({
        ...prev,
        callPacing: variables.dial_speed,
      }));
      // 캠페인 목록 다시 가져오기
      fetchMain({
        session_key: '',
        tenant_id: tenant_id,
      });

    }, onError: (data) => {
      if (data.message.split('||')[0] === '5') {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
        });
        Cookies.remove('session_key');
        setTimeout(() => {
          router.push('/login');
        }, 1000);
      }
    }
  });

  // 캠페인 스킬 수정 API 호출
  const { mutate: fetchCampaignSkillUpdate } = useApiForCampaignSkillUpdate({
    onSuccess: (data, variables) => {

      if (data.result_code === 0) {
        // 현재 선택된 캠페인의 스킬을 업데이트해서 최신 상태 반영
        setCurrentCampaign((prev) => ({
          ...prev,
          skills: variables.skill_id[0] === 0 ? [] : variables.skill_id,
        }));
        // 캠페인 목록 다시 가져오기
        fetchMain({
          session_key: '',
          tenant_id: tenant_id,
        });
      } // end of if result_code
    },
    onError: (data) => {
      // 세션이 만료되었을때 팝업창을 닫는 로직처리를 위한 것
      if (data.message.split('||')[0] === '5') {
        if (window.opener) {
          window.opener.postMessage({ type: "sessionFailed" }, "*");
          // 자기 자신 닫기
          window.close();
        }  
      }
    }
  });

  // const campaignDialStatus = useCampaignDialStatusStore(state => state.campaignDialStatus);

  // useEffect(() => {
  //   console.log('📦 상태가 바뀜:', campaignDialStatus);
  // }, [campaignDialStatus]);


  // 캠페인 관련 핸들러
  const handleStatusChange = async  (newStatus: string) => {
    
    const currentStatus = useCampaignDialStatusStore.getState().campaignDialStatus;
    

    // console.log("얘는 읽냐? campaignDialStatus : ", campaignDialStatus);
    // fetchMain({
    //   session_key: '',
    //   tenant_id: tenant_id,
    // });
    

    const isCurrentCampaignStatus =  campaigns.filter(data => data.campaign_id === Number(selectedCampaign))[0].start_flag;
    // console.log('######## isCurrentCampaignStatus : ', isCurrentCampaignStatus);

    
    // console.log( '타입 일치여부 : ',
    //   currentStatus.map((item) => ({
    //     campaign_id: item.campaign_id,
    //     status: item.status,
    //     match: item.campaign_id.toString() === selectedCampaign.toString()
    //   }))
    // );
    
    // 현재 캠페인의 상태가 정지중이거나 멈춤중일때
    const existDial = currentStatus.some((item) => 
                      (item.campaign_id.toString() === selectedCampaign.toString()) && 
                      (item.status?.toString() === '5' || item.status?.toString() === '6') );
    
    console.log('existDial : ', existDial);

    
    const waitConfirm = () => {
      setCampaignStatus(newStatus as CampaignStatus);
      fetchCampaignStatusUpdate({
        campaign_id: Number(selectedCampaign),
        campaign_status: newStatus === '시작' ? 1 : newStatus === '멈춤' ? 2 : 3,
      });
    };
    
    if (existDial) {
      setAlertState({
        ...errorMessage,
        title: '캠페인 상태 변경',
        isOpen: true,
        message:
          '발신중인 데이터 처리 중 입니다. 기다려 주시길 바랍니다. \n강제로 상태 변경을 하실 경우에는 발신 데이터 처리가 되지 않으며 \n재시작 시에는 중복 발신이 될 수도 있습니다.\n그래도 진행하시겠습니까?',
        onClose: () => {
          setAlertState((prev) => ({ ...prev, isOpen: false }));
          waitConfirm(); // 여기에 캠페인 상태 변경 로직 실행
        },
        onCancel: () => {
          setAlertState((prev) => ({ ...prev, isOpen: false }));
          // 취소시 아무 일도 안 함
        },
      });

      return;
    }
      
    waitConfirm(); // if문에 걸리지 않는다면 바로 처리*/
    
  };

  const handleCampaignSelect = (campaignId: string) => {
    setSelectedCampaign(campaignId);
    const tempCampaignInfo = campaigns.find(c => c.campaign_id === Number(campaignId));
    setCallPacing(tempCampaignInfo?.dial_mode === 2 ? tempCampaignInfo.dial_speed * 2 : tempCampaignInfo?.dial_mode === 3 ? tempCampaignInfo.dial_speed : 0);
    setDialMode(tempCampaignInfo?.dial_mode || 0);
    // API 호출 로직 추가
  };
  

  const handleCallPacingChange = (value: string) => {
    // const value = parseInt(e.target.value);
    if(dialMode === 2 && Number(value) > 500){
      setCallPacing(500);
    }else if( dialMode === 2 && Number(value) < 25){
      setCallPacing(25);
    }else if( dialMode && Number(value) > 100){
      setCallPacing(100);
    }else if( dialMode && Number(value) < 50){ 
      setCallPacing(50);
    }else if (!isNaN(Number(value)) && Number(value) >= 0) {
      setCallPacing(Number(value));
    }
  };

  const handleCallPacingApply = () => {
    console.log('Applying call pacing:', callPacing);
    const tempCampaign = campaigns.find(c => c.campaign_id === Number(selectedCampaign));
    //캠페인 발신 속도 수정 api 호출
    fetchDialSpeedUpdate({
      campaign_id: Number(selectedCampaign),
      dial_speed: tempCampaign?.dial_mode === 2 ? Math.floor(callPacing / 2) : tempCampaign?.dial_mode === 3 ? callPacing : 0,
      tenant_id: tempCampaign?.tenant_id ?? 0
    });
    // dial_mode 이 2인 경우는 C# 코드와 동일하게 발신 속도를 2로 나누고 소수점이 있을경우 내림처리
  };

  const handleRebroadcastEdit = () => {
    setCampaignIdForUpdateFromSideMenu(selectedCampaign + '');
    setIsRebroadcastOpen(true);
  };

  // 스킬 관련 핸들러
  const handleSkillPopupClose = () => {
    setIsSkillPopupOpen(false);
  };

  const handleSkillModify = () => {
    setIsSkillPopupOpen(true);
  };

  // 해당 캠페인 스킬 수정 API 호출
  const handleSkillConfirm = (selectedSkills: string) => {
    
    // 선택된 스킬로 수정 시작
    const skillArray = selectedSkills.split(',').map(Number);

    const requestData = {
      campaign_id: Number(selectedCampaign),
      skill_id: skillArray,
    };

    // 캠페인 스킬 수정 API 호출
    fetchCampaignSkillUpdate(requestData);

    handleSkillPopupClose();
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

  const handleChannelMonitorInit = (init: boolean) => {
    setChannelMonitorInit(init);
  };


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
            dialMode={dialMode}
            campaigns={_campaigns}
            onCampaignSelect={handleCampaignSelect}
            onStatusChange={handleStatusChange}
            onCallPacingChange={handleCallPacingChange}
            onCallPacingApply={handleCallPacingApply}
            onCampaignEdit={() => setIsCampaignManagerOpen(true)}
            onSkillEdit={handleSkillModify}
            onRebroadcastEdit={handleRebroadcastEdit}
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
        return <AgentStatusMonitoring campaignId={Number(selectedCampaign)}
          sessionKey={session_key}
          tenantId={campaigns.find(c => c.campaign_id === Number(selectedCampaign))?.tenant_id + ''}
        />;
      case 'channel-monitor':
        return <ChannelMonitor init={channelMonitorInit} onInit={handleChannelMonitorInit}/>;
      case 'campaign-progress':
        return <CampaignMonitorDashbord campaignId={selectedCampaign} />;
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
      const dataList = data.result_data;
      
      setCampaignSkillList(dataList);
      if (skills.length === 0) {
        const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id);
        fetchSkills({
          tenant_id_array: tempTenantIdArray
        });
        

      }
      if( selectedCampaign === modifiedCampaign ){
        const tempCampaign = _campaigns.find(c => c.id === selectedCampaign) || initData;
        setCurrentCampaign({...tempCampaign
          , skills: dataList.find(data=> data.campaign_id === Number(selectedCampaign))?.skill_id.join(',').split(',').map((data) => Number(data))
        });
        setCampaignStatus(tempCampaign.startFlag === 1 ? '시작' : tempCampaign.startFlag === 2 ? '멈춤' : '중지');
        const tempCampaignInfo = campaigns.find(c => c.campaign_id === Number(tempCampaign.id));
        setCallPacing(tempCampaignInfo?.dial_mode === 2 ? tempCampaignInfo.dial_speed * 2 : tempCampaignInfo?.dial_mode === 3 ? tempCampaignInfo.dial_speed : 0);
        setDialMode(tempCampaignInfo?.dial_mode || 0);
      }
    }
  });
  // 캠페인 목록 조회
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      fetchCampaignSkills({
        session_key: session_key,
        tenant_id: tenant_id,
      });
      if (tenant_id === 0) {
        setCampaignList(data.result_data);
        setCampaigns(data.result_data);
      } else {
        setCampaignList(data.result_data.filter(data => data.tenant_id === tenant_id));
        setCampaigns(data.result_data.filter(data => data.tenant_id === tenant_id));
      }
      
    }
  });

  const { mutate: fetchTenants } = useApiForTenants({
    onSuccess: (data) => {
      if (tenant_id === 0) {
        setTenants(data.result_data);
      } else {
        setTenants(data.result_data.filter(data => data.tenant_id === tenant_id));
      }
    }
  });

  // 스킬 조회
  const { mutate: fetchSkills } = useApiForSkills({
    onSuccess: (data) => {
      setSkills(data.result_data);
    }
  });

  const handleCampaignPopupClose = () => {
    setIsCampaignManagerOpen(false);
    fetchMain({
      session_key: '',
      tenant_id: tenant_id,
    });
  };

  useEffect(() => {
    if (selectedCampaign !== '') {
      const tempCampaign = _campaigns.find(c => c.id === selectedCampaign) || initData;
      setCurrentCampaign(tempCampaign);
      setCampaignStatus(tempCampaign.startFlag === 1 ? '시작' : tempCampaign.startFlag === 2 ? '멈춤' : '중지');
      const tempCampaignInfo = campaigns.find(c => c.campaign_id === Number(tempCampaign.id));
      setCallPacing(tempCampaignInfo?.dial_mode === 2 ? tempCampaignInfo.dial_speed * 2 : tempCampaignInfo?.dial_mode === 3 ? tempCampaignInfo.dial_speed : 0);
      setDialMode(tempCampaignInfo?.dial_mode || 0);
    }
  }, [selectedCampaign]);

  useEffect(() => {
    if (campaignList.length > 0 && campaignSkillList.length > 0) {
      const updatedCampaigns: Campaign[] = campaignList.map((data) => ({
        id: data.campaign_id,
        name: `[${data.campaign_id}]${data.campaign_name}`,
        skills: campaignSkillList
        .filter((skill) => skill.campaign_id === data.campaign_id)
        .map((data) => data.skill_id)
        .join(',')
        .split(',')
        .map((data) => Number(data))[0] === 0
          ? [] // skill_id가 [0]이면 빈 배열 반환
          : campaignSkillList
              .filter((skill) => skill.campaign_id === data.campaign_id)
              .map((data) => data.skill_id)
              .join(',')
              .split(',')
              .map((data) => Number(data)),
        endTime: '',
        startFlag: data.start_flag,
        tenant_id: data.tenant_id,
      }));
      if (selectedCampaign === '') {
        setSelectedCampaign(updatedCampaigns[0].id);
      }
      _setCampaigns(updatedCampaigns);
    }

  }, [campaignList, campaignSkillList]);

  useEffect(() => {
    fetchMain({
      session_key: '',
      tenant_id: tenant_id,
    });
    // const interval = setInterval(() => {           
    //   fetchMain({
    //     session_key: '',
    //     tenant_id: tenant_id,
    //   });
    // }, 30000);  
    // return () => clearInterval(interval);
  }, [tenant_id]);

  useEffect(() => {
    if (tenants.length === 0) {
      fetchTenants({
        session_key: '',
        tenant_id: tenant_id,
      });
    }
  }, [tenants]);


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

  // tofix a2 0417
  // 새창 열기로 모니터 페이지가 열리기 때문에 캠페인 매니저에서 수정된 캠페인 정보가 반영되지 않음
  // 캠페인 관리 페이지에서 broadcast api 를 통해 수정 업데이트 후에 campaignId 를 전달받아 캠페인 정보 업데이트 해야 함
  // src\app\monitor\page.tsx
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const { type, campaignId } = event.data;
     
      if( type === 'skills_info_update' ){
        const tempTenantIdArray = tenants.map((tenant) => tenant.tenant_id);
        fetchSkills({
            tenant_id_array: tempTenantIdArray
        });
      }else if( type === 'channel:' ){
        setChannelMonitorInit(true);
      }else if( type.split(':')[0] === 'campaign_status'){

        console.log('####### 캠페인 상태 변경 이벤트 수신:', type);
        // 'campaign_status:' + '시작(캠페인 상태)' +':' + (1 ~ 6)
        // type.split(':')[0 ~ 2] ==> 'campaign_status' , '시작(캠페인 상태)', 1 ~ 6 
        if(type.split(':')[2] === '2' || type.split(':')[2] === '3'){
          useCampaignDialStatusStore.getState().removeCampaignDialStatus({campaign_id : campaignId});
        } else {
          useCampaignDialStatusStore.getState().addCampaignDialStatus({campaign_id : campaignId, status : type.split(':')[2]});
        }
        setCampaignStatus(type.split(':')[1]);
      }else if( typeof campaignId != 'undefined'){
        setModifiedCampaign(campaignId);        
      }
      fetchMain({
        session_key: '',
        tenant_id: tenant_id,
      });
    };

    // todo:
    // 캠페인 모니터 데이터 갱신 for campaignId

    campaignChannel.addEventListener("message", handleMessage);

    return () => {
      campaignChannel.removeEventListener("message", handleMessage);
    };
  }, []);

  // 모니터 페이지 렌더링
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
        message={<CampaignManager campaignId={selectedCampaign} isOpen={isCampaignManagerOpen} onCampaignPopupClose={handleCampaignPopupClose} />}
        type="3"
        onClose={() => setIsCampaignManagerOpen(false)}
        onCancel={() => setIsCampaignManagerOpen(false)}
        width="max-w-[1300px]"
      />
      {/* 스킬 리스트 팝업 */}
      <SkillListPopup
        isOpen={isSkillPopupOpen}
        param={currentCampaign.skills || []}
        tenantId={Number(currentCampaign.tenant_id)}
        type="1"
        onConfirm={handleSkillConfirm}
        onCancel={handleSkillPopupClose}
      />

      {/* 재발신 설정 팝업 */}
      <CustomAlert
        isOpen={isRebroadcastOpen}
        title="재발신 설정"
        message={<RebroadcastSettingsPanel reBroadCastOption={'realtime'} />}
        type="1"
        onClose={() => setIsRebroadcastOpen(false)}
        onCancel={() => setIsRebroadcastOpen(false)}
        width="max-w-[1300px]"
      />

      <CustomAlert
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onClose={() => {
          alertState.onClose()
        }}
        onCancel={() => setAlertState((prev) => ({ ...prev, isOpen: false }))} />
    </div>
  );
};

export default MonitorPage;