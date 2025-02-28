import React, { useState, useMemo, useEffect } from 'react';
import DataGrid from "react-data-grid";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { CommonButton } from "@/components/shared/CommonButton";
import { CustomInput } from "@/components/shared/CustomInput";
import { Label } from "@/components/ui/label";
import CustomAlert from '@/components/shared/layout/CustomAlert';
import CampaignModal from '../CampaignModal';
import { useAuthStore, useMainStore } from '@/store';
import { useApiForCounselorList } from '@/features/preferences/hooks/useApiForCounselorList';
import { useApiForCreateMaxCall, useApiForMaxCallInitTimeList, useApiForMaxCallInitTimeUpdate, useApiForMaxCallList, useApiForUpdateMaxCall } from '@/features/preferences/hooks/useApiForMaxCall';
import { useApiForCampaignAgentList } from '@/features/preferences/hooks/useApiForCampaignAgent';

interface Row {
  center: string;
  group: string;
  part: string;
  agent_id: string;
  agent_name: string;
  max_dist: string;
  current_resp: string;
  fix_flag: string;
  isGroupHeader?: boolean;  // 그룹 헤더인지 여부
  isExpanded?: boolean;     // 확장 상태
  level?: number;           // 깊이 레벨 (0: 센터, 1: 그룹, 2: 파트, 3: 상담원)
  parentId?: string;       // 부모 ID
}

const DistributionLimit = () => {
  const { tenant_id, role_id } = useAuthStore();
  const { campaigns, setSelectedCampaign } = useMainStore();
  const [rawRows, setRawRows] = useState<Row[]>([]);
  const [displayRows, setDisplayRows] = useState<Row[]>([]);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  const [selectedRow, setSelectedRow] = useState<Row | null>(null);
  const [selectedCampaignId, setSelectedCampaignId] = useState('');
  const [selectedCampaignName, setSelectedCampaignName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [campaignAgents, setCampaignAgents] = useState<string[]>([]);
  const [initTime, setInitTime] = useState<string>('없음');
  const [viewFilter, setViewFilter] = useState('all');
  
  const [formData, setFormData] = useState({
    center: '',
    group: '',
    part: '',
    agentId: '',
    agentName: '',
    maxDist: '',
    currentResp: '',
    fix_flag: 'N'
  });

  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    title: '알림',
    type: '1',
    onConfirm: () => {},
    onCancel: () => {}
  });

  const showAlert = (message: string) => {
    setAlertState({
      isOpen: true,
      message,
      title: '알림',
      type: '2',
      onConfirm: closeAlert,
      onCancel: () => {}
    });
  };

  const showConfirm = (message: string, onConfirm: () => void) => {
    setAlertState({
      isOpen: true,
      message,
      title: '확인',
      type: '1',
      onConfirm: () => {
        onConfirm();
        closeAlert();
      },
      onCancel: closeAlert
    });
  };

  // 캠페인 ID Select 변경 핸들러
  const handleCampaignIdChange = (value: string) => {
    setSelectedCampaignId(value);
    const campaign = campaigns.find(c => c.campaign_id.toString() === value);
    if (campaign) {
      setSelectedCampaignName(campaign.campaign_name);
      setSelectedCampaign(campaign);
    }
    handleNew();
  };

  // 캠페인 모달에서 선택 시 핸들러
  const handleModalSelect = (campaignId: string, campaignName: string) => {
    setSelectedCampaignId(campaignId);
    setSelectedCampaignName(campaignName);
    const campaign = campaigns.find(c => c.campaign_id === Number(campaignId));
    if (campaign) {
      setSelectedCampaign(campaign);
    }
    handleNew(); 
  };

  // 필터링된 rows를 계산하는 함수
  const filteredRows = useMemo(() => {
    switch (viewFilter) {
      case 'remaining':
        // 잔여 호수가 남은 상담원 (최대 분배호수 > 현재 응답호수)
        return rawRows.filter(row => {
          if (row.isGroupHeader) return false;
          const maxDist = parseInt(row.max_dist);
          const currentResp = parseInt(row.current_resp);
          return maxDist > currentResp && (maxDist > 0 || currentResp > 0);
        });
      
      case 'no-remaining':
        // 잔여 호수가 없는 상담원 (최대 분배호수 = 현재 응답호수)
        return rawRows.filter(row => {
          if (row.isGroupHeader) return false;
          const maxDist = parseInt(row.max_dist);
          const currentResp = parseInt(row.current_resp);
          return maxDist === currentResp && (maxDist > 0 || currentResp > 0);
        });
      
      case 'no-limit':
        // 최대 분배호수가 설정되지 않은 상담원 (데이터가 없거나 둘 다 0인 경우)
        return rawRows.filter(row => {
          if (row.isGroupHeader) return false;
          const maxDist = parseInt(row.max_dist);
          const currentResp = parseInt(row.current_resp);
          return maxDist === 0 && currentResp === 0;
        });
      
      case 'has-limit':
        // 최대 분배호수가 설정된 상담원 (최대 분배호수나 현재 응답호수 중 하나라도 값이 있는 경우)
        return rawRows.filter(row => {
          if (row.isGroupHeader) return false;
          const maxDist = parseInt(row.max_dist);
          const currentResp = parseInt(row.current_resp);
          return maxDist > 0 || currentResp > 0;
        });
      
      default:
        // 전체 상담원
        return rawRows;
    }
  }, [rawRows, viewFilter]);

  // 행의 키 생성 함수
  const getRowKey = (row: Row): string => {
    if (row.level === 0) return row.center;
    if (row.level === 1) return `${row.parentId}-${row.group}`;
    if (row.level === 2) return `${row.parentId}-${row.part}`;
    return `agent-${row.agent_id}`;
  };

  // 계층 구조를 처리하여 표시할 rows 생성
  useEffect(() => {
    if (filteredRows.length === 0) {
      setDisplayRows([]);
      return;
    }

    // 데이터를 계층 구조로 변환
    const centers = new Set<string>();
    const groups = new Map<string, Set<string>>();
    const parts = new Map<string, Set<string>>();
    
    // 유니크한 센터, 그룹, 파트 수집
    filteredRows.forEach(row => {
      if (!row.isGroupHeader) {
        centers.add(row.center);
        
        const centerKey = row.center;
        if (!groups.has(centerKey)) {
          groups.set(centerKey, new Set());
        }
        groups.get(centerKey)?.add(row.group);
        
        const groupKey = `${row.center}-${row.group}`;
        if (!parts.has(groupKey)) {
          parts.set(groupKey, new Set());
        }
        parts.get(groupKey)?.add(row.part);
      }
    });

    const hierarchicalRows: Row[] = [];

    // 센터 레벨 추가
    [...centers].sort().forEach(center => {
      const isExpanded = expandedGroups[center] !== false; // 기본적으로 확장

      hierarchicalRows.push({
        center: center,
        group: '',
        part: '',
        agent_id: '',
        agent_name: '',
        max_dist: '',
        current_resp: '',
        fix_flag: '',
        isGroupHeader: true,
        isExpanded: isExpanded,
        level: 0,
      });

      if (isExpanded && groups.has(center)) {
        // 그룹 레벨 추가
        [...groups.get(center)!].sort().forEach(group => {
          const groupParentId = center;
          const groupKey = `${center}-${group}`;
          const isGroupExpanded = expandedGroups[groupKey] !== false; // 기본적으로 확장

          hierarchicalRows.push({
            center: '',
            group: group,
            part: '',
            agent_id: '',
            agent_name: '',
            max_dist: '',
            current_resp: '',
            fix_flag: '',
            isGroupHeader: true,
            isExpanded: isGroupExpanded,
            level: 1,
            parentId: groupParentId,
          });

          if (isGroupExpanded && parts.has(`${center}-${group}`)) {
            // 파트 레벨 추가 
            [...parts.get(`${center}-${group}`)!].sort().forEach(part => {
              const partParentId = groupKey;
              const partKey = `${groupKey}-${part}`;
              const isPartExpanded = expandedGroups[partKey] !== false; // 기본적으로 확장

              hierarchicalRows.push({
                center: '',
                group: '',
                part: part,
                agent_id: '',
                agent_name: '',
                max_dist: '',
                current_resp: '',
                fix_flag: '',
                isGroupHeader: true,
                isExpanded: isPartExpanded,
                level: 2,
                parentId: partParentId,
              });

              if (isPartExpanded) {
                // 에이전트 추가
                const agentsInPart = filteredRows.filter(
                  row => !row.isGroupHeader && row.center === center && row.group === group && row.part === part
                );
                
                // 에이전트 정렬
                agentsInPart.sort((a, b) => a.agent_id.localeCompare(b.agent_id)).forEach(agent => {
                  hierarchicalRows.push({
                    ...agent,
                    level: 3,
                    parentId: partKey
                  });
                });
              }
            });
          }
        });
      }
    });

    setDisplayRows(hierarchicalRows);
  }, [filteredRows, expandedGroups]);

  // 캠페인별 상담원 목록 조회
  const { mutate: fetchCampaignAgentList } = useApiForCampaignAgentList({
    onSuccess: (response) => {
      if (response?.result_data && response.result_data.length > 0) {
        // 캠페인에 소속된 상담사 ID 목록 저장
        const agentIds = response.result_data[0].agent_id;
        setCampaignAgents(agentIds);
      } else {
        setCampaignAgents([]);
      }
    },
    onError: (error) => {
      console.error('캠페인 상담원 목록 조회 실패:', error);
      setCampaignAgents([]);
    }
  });

  // 백엔드에서 가져온 상담원 리스트 정보 처리
  const { mutate: fetchCounselorList } = useApiForCounselorList({
    onSuccess: (response) => {
      if (response?.organizationList && selectedCampaignId) {
        const counselorRows: Row[] = [];
        
        response.organizationList.forEach(org => {
          const centerName = org.centerName;
          
          org.tenantInfo.forEach(tenant => {
            tenant.groupInfo.forEach(group => {
              group.teamInfo.forEach(team => {
                team.counselorInfo.forEach(counselor => {
                  // 캠페인에 소속된 상담사만 추가
                  if (campaignAgents.includes(counselor.counselorId)) {
                    counselorRows.push({
                      center: centerName,
                      group: group.groupId,
                      part: team.teamId,
                      agent_id: counselor.counselorId,
                      agent_name: counselor.counselorname,
                      max_dist: '0',
                      current_resp: '0',
                      fix_flag: 'N'
                    });
                  }
                });
              });
            });
          });
        });
        
        setRawRows(counselorRows);
      } else {
        setRawRows([]);
      }
    },
    onError: (error) => {
      console.error('상담원 목록 조회 실패:', error);
      setRawRows([]);
    }
  });

  // 운영설정 분배호수 제한 설정 리스트 API 호출
  const { mutate: fetchMaxCallList } = useApiForMaxCallList({
    onSuccess: (maxCallResponse) => {
      if (maxCallResponse?.result_data) {
        setRawRows(prevRows => {
          return prevRows.map(row => {
            const maxCallInfo = maxCallResponse.result_data.find(
              call => call.agent_id === row.agent_id
            );
            
            if (maxCallInfo) {
              return {
                ...row,
                max_dist: maxCallInfo.max_call.toString(),
                current_resp: maxCallInfo.answered_call.toString(),
                fix_flag: maxCallInfo.fix_flag === 1 ? 'Y' : 'N'  
              };
            }
            // 매칭되는 정보가 없으면 기존 row 반환
            return row;
          });
        });
      }
    },
    onError: (error) => {
      console.error('운영설정 분배호수 제한 설정 리스트 조회 실패:', error);
    }
  });

  const { mutate: createMaxCallMutation } = useApiForCreateMaxCall();
  const { mutate: updateMaxCallMutation } = useApiForUpdateMaxCall();
  const { mutate: fetchMaxCallInitTimeList } = useApiForMaxCallInitTimeList({
    onSuccess: (data) => {
      setInitTime(data.result_data.init_time);
    }
  });

  // 응답호수 초기화 시각 수정
  const { mutate: updateMaxCallInitTime } = useApiForMaxCallInitTimeUpdate({
    onSuccess: (data) => {
      if (data.result_code === 0) {
        // showAlert('초기화 시간이 성공적으로 변경되었습니다.');
        fetchMaxCallInitTimeList({}); // 변경 후 목록 재조회
      } else {
        showAlert(`초기화 시간 변경 실패: ${data.result_msg}`);
      }
    },
    onError: (error) => {
      showAlert(`초기화 시간 변경 중 오류가 발생했습니다: ${error.message}`);
    }
  });

  useEffect(() => {
    fetchMaxCallInitTimeList({});
    if (selectedCampaignId) {
      // 1. 먼저 캠페인 상담원 목록을 가져옴
      fetchCampaignAgentList({
        campaign_id: [Number(selectedCampaignId)]
      });
    } else {
      setCampaignAgents([]);
      setRawRows([]);
    }
  }, [selectedCampaignId, fetchCampaignAgentList, fetchMaxCallInitTimeList]);
  
  // campaignAgents가 업데이트되면 상담원 목록 조회
  useEffect(() => {
    if (selectedCampaignId && campaignAgents.length > 0) {
      fetchCounselorList({
        tenantId: tenant_id,
        roleId: role_id
      });
    }
  }, [tenant_id, role_id, selectedCampaignId, campaignAgents, fetchCounselorList]);

  // 캠페인이 선택되고 상담원 목록이 로드된 후에 분배호수 제한 설정 조회
  useEffect(() => {
    if (selectedCampaignId && rawRows.length > 0) {
      fetchMaxCallList({
        campaign_id: [Number(selectedCampaignId)]
      });
    }
  }, [selectedCampaignId, rawRows.length, fetchMaxCallList]);
  

  const [isTimeSettingOpen, setIsTimeSettingOpen] = useState(false);
  const [isTimeRemoveOpen, setIsTimeRemoveOpen] = useState(false);
  const [timeValue, setTimeValue] = useState('');

  const handleTimeSettingSave = () => {
    if (!timeValue) {
      showAlert('시간을 입력해주세요.');
      return;
    }

    // 시간 형식 검증 (0000-2359 사이의 4자리 숫자)
    const timeRegex = /^([0-1][0-9]|2[0-3])[0-5][0-9]$/;
    if (!timeRegex.test(timeValue)) {
      showAlert('올바른 시간 형식이 아닙니다. (예: 2300)');
      return;
    }

    updateMaxCallInitTime({ init_time: timeValue });
    setTimeValue('');
    setIsTimeSettingOpen(false);
  };

  const handleTimeRemove = () => {
    updateMaxCallInitTime({ init_time: "9999" }); // 초기화 시간을 "없음"으로 설정
    setIsTimeRemoveOpen(false);
  };

  const closeAlert = () => {
    setAlertState(prev => ({ ...prev, isOpen: false }));
  };

  const handleSave = () => {
    if (!selectedCampaignId) {
      showAlert('캠페인을 선택해주세요.');
      return;
    }
    if (!formData.center || !formData.agentId) {
      showAlert('필수 필드를 입력해주세요.');
      return;
    }
  
    const maxDist = parseInt(formData.maxDist);
    if (isNaN(maxDist) || maxDist < 0) {
      showAlert('최대 분배호수는 0 이상의 숫자로 입력해주세요.');
      return;
    }
  
    const saveData = {
      campaign_id: parseInt(selectedCampaignId),
      agent_id: formData.agentId,
      max_call: maxDist,
      fix_flag: formData.fix_flag === 'Y' ? 1 : 0
    };
  
    const existingRow = rawRows.find(row => row.agent_id === formData.agentId);
    const isUpdate = existingRow && existingRow.max_dist !== '0';
  
    showConfirm(`${isUpdate ? '수정' : '신규 등록'}하시겠습니까?`, () => {
      if (isUpdate) {
        updateMaxCallMutation(saveData, {
          onSuccess: (response) => {
            if (response.result_code === 0) {
              showAlert('성공적으로 수정되었습니다.');
              fetchMaxCallList({
                campaign_id: [parseInt(selectedCampaignId)]
              });
            } else {
              showAlert(`수정 실패: ${response.result_msg}`);
            }
          },
          onError: (error: any) => {
            showAlert(`수정 중 오류가 발생했습니다: ${error.message}`);
          }
        });
      } else {
        createMaxCallMutation(saveData, {
          onSuccess: (response) => {
            if (response.result_code === 0) {
              showAlert('성공적으로 등록되었습니다.');
              fetchMaxCallList({
                campaign_id: [parseInt(selectedCampaignId)]
              });
            } else {
              showAlert(`등록 실패: ${response.result_msg}`);
            }
          },
          onError: (error: any) => {
            showAlert(`등록 중 오류가 발생했습니다: ${error.message}`);
          }
        });
      }
    });
  };

  // 그룹 토글 핸들러
  const toggleGroupExpansion = (row: Row) => {
    if (row.isGroupHeader) {
      const key = getRowKey(row);
      setExpandedGroups(prev => ({
        ...prev,
        [key]: !(prev[key] !== false)
      }));
    }
  };

  const columns = useMemo(() => [
    { 
      key: 'center', 
      name: '상담센터',
      formatter: ({ row }: { row: Row }) => {
        if (row.level === 0) {
          // 센터 레벨
          const icon = row.isExpanded ? '-' : '+';
          return (
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => toggleGroupExpansion(row)}
            >
              <span className="mr-1">{icon}</span>
              <span className="font-medium">{row.center}</span>
            </div>
          );
        } else if (row.level === 1) {
          // 그룹 레벨
          const icon = row.isExpanded ? '-' : '+';
          return (
            <div 
              className="flex items-center cursor-pointer pl-4" 
              onClick={() => toggleGroupExpansion(row)}
            >
              <span className="mr-1">{icon}</span>
              <span className="font-medium">{row.group}</span>
            </div>
          );
        } else if (row.level === 2) {
          // 파트 레벨
          const icon = row.isExpanded ? '-' : '+';
          return (
            <div 
              className="flex items-center cursor-pointer pl-8" 
              onClick={() => toggleGroupExpansion(row)}
            >
              <span className="mr-1">{icon}</span>
              <span className="font-medium">{row.part}</span>
            </div>
          );
        } else {
          // 상담원 레벨 (이 열에서는 빈 값)
          return <div className="pl-12"></div>;
        }
      }
    },
    { 
      key: 'group', 
      name: '상담그룹',
      formatter: ({ row }: { row: Row }) => {
        return row.level === 3 ? row.group : '';
      }
    },
    { 
      key: 'part', 
      name: '상담파트',
      formatter: ({ row }: { row: Row }) => {
        return row.level === 3 ? row.part : '';
      }
    },
    { 
      key: 'agent_id', 
      name: '상담원 아이디',
      formatter: ({ row }: { row: Row }) => {
        return row.level === 3 ? row.agent_id : '';
      }
    },
    { 
      key: 'agent_name', 
      name: '상담원 이름',
      formatter: ({ row }: { row: Row }) => {
        return row.level === 3 ? row.agent_name : '';
      }
    },
    { 
      key: 'max_dist', 
      name: '최대 분배호수',
      formatter: ({ row }: { row: Row }) => {
        return row.level === 3 ? row.max_dist : '';
      }
    },
    { 
      key: 'current_resp', 
      name: '현재 응답호수',
      formatter: ({ row }: { row: Row }) => {
        return row.level === 3 ? row.current_resp : '';
      }
    },
    { 
      key: 'fix_flag', 
      name: '호수 고정',
      formatter: ({ row }: { row: Row }) => {
        return row.level === 3 ? row.fix_flag : '';
      }
    }
  ], []);
  
  const handleCellClick = ({ row }: { row: Row }) => {
    // 상담원 행만 선택 가능
    if (row.level === 3) {
      setSelectedRow(row);
      setFormData({
        center: row.center,
        group: row.group,
        part: row.part,
        agentId: row.agent_id,
        agentName: row.agent_name,
        maxDist: row.max_dist,
        currentResp: row.current_resp,
        fix_flag: row.fix_flag
      });
    } else if (row.isGroupHeader) {
      // 헤더 행 클릭 시 토글
      toggleGroupExpansion(row);
    }
  };

  const handleNew = () => {
    setSelectedRow(null);
    setFormData({
      center: '',
      group: '',
      part: '',
      agentId: '',
      agentName: '',
      maxDist: '',
      currentResp: '',
      fix_flag: 'N'
    });
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getRowClass = (row: Row) => {
    // 선택된 행은 강조 표시
    if (selectedRow && row.level === 3 && row.agent_id === selectedRow.agent_id) {
      return 'bg-[#FFFAEE]';
    }
    
    return '';
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex title-background justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <Label className="w-20 min-w-20">캠페인 아이디</Label>
            <Select
              value={selectedCampaignId}
              onValueChange={handleCampaignIdChange}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="캠페인선택" />
              </SelectTrigger>
              <SelectContent style={{ maxHeight: '300px', overflowY: 'auto' }}> 
                {campaigns.map(campaign => (
                  <SelectItem 
                    key={campaign.campaign_id} 
                    value={campaign.campaign_id.toString()}
                  >
                    {campaign.campaign_id}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <CommonButton 
            variant="outline" 
            size="sm"
            onClick={() => {
              setSelectedCampaignId('');
              setSelectedCampaignName('');
              setSelectedCampaign(null);
              setIsModalOpen(true);
            }}
          >
            캠페인조회
          </CommonButton>
          <CustomInput 
            value={selectedCampaignName}
            readOnly 
            className="w-[140px]"
            disabled={true}
          />
          <div className="text-sm">
            응답호수 초기화 시간: {initTime === "9999" ? "없음" : `${initTime.slice(0, 2)}:${initTime.slice(2)}`}
          </div>
        </div>
        <div className="flex gap-2">
          <CommonButton onClick={() => setIsTimeSettingOpen(true)}>초기화시간 변경</CommonButton>
          <CommonButton onClick={() => setIsTimeRemoveOpen(true)}>초기화시간 설정해제</CommonButton>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="w-[800px] flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="text-sm">할당 상담원 목록</div>
            <div className="flex items-center gap-2">
              <Label className="w-20 min-w-20">보기설정</Label>
              <Select 
                value={viewFilter}
                onValueChange={setViewFilter}
                defaultValue='all'
              >
                <SelectTrigger className="w-[250px]">
                  <SelectValue placeholder="해당 상담원 전체" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>해당 상담원 전체</SelectItem>
                  <SelectItem value='remaining'>잔여 호수가 남은 상담원</SelectItem>
                  <SelectItem value='no-remaining'>잔여 호수가 없는 상담원</SelectItem>
                  <SelectItem value='no-limit'>최대 분배호수가 설정되지 않은 상담원</SelectItem>
                  <SelectItem value='has-limit'>최대 분배호수가 설정된 상담원</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='grid-custom-wrap h-[400px]'>
            <DataGrid
              columns={columns}
              rows={displayRows} 
              className="grid-custom"
              onCellClick={handleCellClick}
              rowKeyGetter={getRowKey}
              selectedRows={selectedRow ? new Set<string>([getRowKey(selectedRow)]) : new Set<string>()}
              rowHeight={30}
              headerRowHeight={30}
              rowClass={getRowClass}
            />
          </div>
        </div>

        <div className="w-[513px]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">상담센터</Label>
              <CustomInput 
                value={formData.center}
                onChange={(e) => handleInputChange('center', e.target.value)}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">상담그룹</Label>
              <CustomInput 
                value={formData.group}
                onChange={(e) => handleInputChange('group', e.target.value)}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">상담파트</Label>
              <CustomInput 
                value={formData.part}
                onChange={(e) => handleInputChange('part', e.target.value)}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">상담원 아이디</Label>
              <CustomInput 
                value={formData.agentId}
                onChange={(e) => handleInputChange('agentId', e.target.value)}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">상담원 이름</Label>
              <CustomInput 
                value={formData.agentName}
                onChange={(e) => handleInputChange('agentName', e.target.value)}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">최대 분배호수</Label>
              <CustomInput 
                value={formData.maxDist}
                onChange={(e) => handleInputChange('maxDist', e.target.value)}
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">현재 응답호수</Label>
              <CustomInput 
                value={formData.currentResp}
                onChange={(e) => handleInputChange('currentResp', e.target.value)}
                className="w-full"
                disabled
              />
            </div>

            <div className="flex items-center gap-2">
              <Label className="w-[8rem] min-w-[8rem]">호수 고정</Label>
              <Select 
                value={formData.fix_flag}
                onValueChange={(value) => handleInputChange('fix_flag', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Y'>고정</SelectItem>
                  <SelectItem value='N'>미고정</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <CommonButton onClick={handleSave}>저장</CommonButton>
            </div>

            <div className="mt-[20px] text-sm">
              <ul className='space-y-1 notice-li'>
                <li>• 상담원에게 분배하는 콜 수를 제한합니다.</li>
                <li>• 운영시간 중의 일괄처리(Batch)작업은 많은 부하를 발생시켜 정상적인 운영이 불가능 할 수 있습니다.</li>
                <li>• 일괄처리작업의 경우, 발신 량이 적은 시간이나, 업무 종료 후 작업하시기를 권장합니다.</li>
              </ul>
            </div>
          </div>
        </div>

        <CampaignModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelect={handleModalSelect}
        />

        <CustomAlert
          isOpen={isTimeSettingOpen}
          message={
            <div className="flex flex-col gap-4">
              <div>현재 설정 값이 없습니다. 시간을 입력하세요</div>
              <CustomInput 
                type="text" 
                value={timeValue}
                onChange={(e) => setTimeValue(e.target.value)}
                placeholder="예) 23시00분은 2300"
                className="w-full"
              />
            </div>
          }
          title="초기화 시간 설정"
          type="2"
          onClose={handleTimeSettingSave}
          onCancle={() => setIsTimeSettingOpen(false)}
        />

        <CustomAlert
          isOpen={isTimeRemoveOpen}
          message="초기화 시간이 성공적으로 변경되었습니다."
          title="초기화 시간 설정해제"
          type="2"
          onClose={handleTimeRemove}
          onCancle={() => setIsTimeRemoveOpen(false)}
        />

        <CustomAlert
          isOpen={alertState.isOpen}
          message={alertState.message}
          title={alertState.title}
          type={alertState.type}
          onClose={alertState.onConfirm}
          onCancle={alertState.onCancel}
        />
      </div>
    </div>
  );
};

export default DistributionLimit;