"use client";

import React, { useState, useEffect } from 'react';
import CommonButton from '@/components/shared/CommonButton';
import CustomAlert from '@/components/shared/layout/CustomAlert';
import { useApiForCampaignManagerDelete } from '@/features/campaignManager/hooks/useApiForCampaignManagerDelete';
import { useApiForCampaignScheduleDelete } from '@/features/campaignManager/hooks/useApiForCampaignScheduleDelete';
import { useApiForCampaignSkillUpdate } from '@/features/campaignManager/hooks/useApiForCampaignSkillUpdate';
import { useAuthStore, useCampainManagerStore } from '@/store';
import { fetchCallingNumberDelete } from '@/features/campaignManager/api/mainCallingNumberDelete';
import { fetchReservedCallDelete } from '@/features/campaignManager/api/mainReservedCallDelete';
import { useSideMenuCampaignGroupTabStore } from '@/store/storeForSideMenuCampaignGroupTab';
import { toast } from 'react-toastify';
import { useTabStore } from '@/store/tabStore';
import { removeNodeByCampaignIdForCampaignTab } from '../utils/treeUtils';

interface Props {
  campaignId?: string | number;
  campaignName?: string;
  variant?: 'outline' | 'destructive' | 'default' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  buttonText?: string;
  isDisabled?: boolean;
  isOpen?: boolean;
  tenant_id?: number;
  onOpenChange?: (open: boolean) => void;
}

const IDialogButtonForCampaingDelete: React.FC<Props> = ({
  campaignId,
  campaignName = '캠페인',
  variant = 'destructive',
  size = 'sm',
  className = '',
  buttonText = '삭제',
  isDisabled = false,
  isOpen: externalIsOpen,
  onOpenChange,
  tenant_id,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isDialogOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const [isDeleting, setIsDeleting] = useState(false);

  const { refetchTreeDataForCampaignGroupTab } = useSideMenuCampaignGroupTabStore();
  const { callingNumbers, campaignSkills } = useCampainManagerStore();
  const {
    activeTabKey,
    closeAllTabs,
    rows,
    removeTab,
    setCampaignIdForUpdateFromSideMenu,
    campaignIdForUpdateFromSideMenu,
    setDeletedCampaignId,
  } = useTabStore();

  const { mutate: updateCampaignSkill } = useApiForCampaignSkillUpdate({
    onSuccess: () => console.log('캠페인 스킬 할당 해제 성공'),
    onError: (error) => console.error('캠페인 스킬 할당 해제 실패:', error),
  });

  const { mutate: deleteCampaignSchedule } = useApiForCampaignScheduleDelete({
    onSuccess: () => {
      const relatedSkills = campaignSkills
        .filter((skill) => skill.campaign_id === Number(campaignId))
        .map((data) => data.skill_id);

      if (relatedSkills.length > 0) {
        updateCampaignSkill({ campaign_id: Number(campaignId), skill_id: [] });
      }

      const relatedCallingNumbers = callingNumbers
        .filter((callingNumber) => callingNumber.campaign_id === Number(campaignId))
        .map((data) => data.calling_number);

      if (relatedCallingNumbers.length > 0) {
        fetchCallingNumberDelete({
          campaign_id: Number(campaignId),
          calling_number: relatedCallingNumbers.join(','),
        });
      }

      fetchReservedCallDelete({
        campaign_id: Number(campaignId),
        tenant_id: Number(tenant_id),
        delete_dial_list: 1,
      });

      // refetchTreeDataForCampaignGroupTab();
    },
  });

  const { mutate: deleteCampaign, isPending } = useApiForCampaignManagerDelete({
    onSuccess: () => {
      toast.success(`'${campaignName}' 캠페인이 삭제되었습니다.`);

      if (campaignId) {
        setDeletedCampaignId(campaignId.toString());

        // 캠페인 탭 트리 메뉴 업데이트
        if (window.originalTreeItems) {
          window.originalTreeItems = removeNodeByCampaignIdForCampaignTab(
            window.originalTreeItems,
            Number(campaignId)
          );
          window.treeForceUpdate?.();
          window.treeSetSelectedNodeId?.(undefined);
        }

        // 캠페인 그룹 탭 트리 메뉴 업데이트 (추가된 부분)
        if (window.removeCampaignFromGroupTree) {
          window.removeCampaignFromGroupTree(campaignId);
          console.log(`캠페인 그룹 탭 트리에서 캠페인 ID ${campaignId} 제거 완료`);
        }

        setCampaignIdForUpdateFromSideMenu(null)
        
        // 캠페인 탭 삭제
        const { rowId, sectionId } = findCurrentTabLocation();
        if (rowId && activeTabKey) {
          removeTab(Number(rowId), activeTabKey);
        }


      }

      deleteCampaignSchedule({
        campaign_id: Number(campaignId),
        tenant_id: Number(tenant_id),
        delete_dial_list: 1,
      });

      closeDialog();
      setIsDeleting(false);
    },
    onError: (error) => {
      console.error('캠페인 삭제 실패:', error);
      toast.error(`캠페인 삭제에 실패했습니다: ${error.message || '알 수 없는 오류'}`);
      setIsDeleting(false);
    },
  });

  const findCurrentTabLocation = () => {
    for (const row of rows) {
      for (const section of row.sections) {
        if (section.tabs.some((tab) => tab.uniqueKey === activeTabKey)) {
          return { rowId: row.id, sectionId: section.id };
        }
      }
    }
    return { rowId: 'row-1', sectionId: 'default' };
  };

  const handleDelete = () => {
    if (!campaignId) {
      toast.error('삭제할 캠페인 정보가 없습니다.');
      return;
    }
    setIsDeleting(true);
    deleteCampaign({
      campaign_id: Number(campaignId),
      tenant_id: Number(tenant_id),
      delete_dial_list: 1,
    });
  };

  const openDialog = () => (onOpenChange ? onOpenChange(true) : setInternalIsOpen(true));
  const closeDialog = () => (onOpenChange ? onOpenChange(false) : setInternalIsOpen(false));

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDialog();
      }
    };
    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const alertMessage = `캠페인 아이디: ${campaignId} 캠페인 이름: ${campaignName} 삭제된 캠페인은 복구가 불가능합니다 캠페인을 삭제하시겠습니까?`;

  return (
    <>
      <CommonButton
        variant={variant}
        size={size}
        className={className}
        onClick={openDialog}
        disabled={isDisabled || isPending}
      >
        {buttonText}
      </CommonButton>

      {isDialogOpen && (
        <CustomAlert
          isOpen={isDialogOpen}
          title="캠페인 삭제"
          message={alertMessage}
          onClose={handleDelete}
          onCancle={closeDialog}
          type="1"
          confirmDisabled={isDeleting}
        />
      )}
    </>
  );
};

export default IDialogButtonForCampaingDelete;
