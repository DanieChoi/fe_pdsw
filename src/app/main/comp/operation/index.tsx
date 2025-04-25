'use client'

import React, { useEffect, useState } from 'react'
import CampaignLayout from './CampaignNumberChange/CampaignLayout'
import EditDescription from './NumberEditDescription/EditDescription'
import CallLimitSetting from './CallLimitSetting'
import DistributionLimit from './DistributionLimit'
import SkillEdit from './SkillEdit'
// import ConsultResultSetting from './ConsultResultSetting'
import SuspendView from './SuspendView'
import Image from 'next/image'
import { useAuthStore, useTabStore } from '@/store'
import SystemCallBackTimeSetting from './SystemCallBackTimeSetting'

export default function OperationBoard() {
  // const [openSectionId, setOpenSectionId] = useState<string>('section1')
  const { activeTabId, openOperationSectionId, setOpenOperationSectionId } = useTabStore();
  const {tenant_id} = useAuthStore();

  useEffect(() => {
    if (activeTabId === 8) {
      setOpenOperationSectionId('section3')
    } else if (activeTabId === 9) {
      setOpenOperationSectionId('section4')
    }
  }, [activeTabId])

  const toggleSection = (sectionId: string) => {
    setOpenOperationSectionId(openOperationSectionId === sectionId ? '' : sectionId)
  }

  // 섹션 데이터를 배열로 정의
  const sections = [
    { id: 'section1', title: '캠페인별 발신번호 변경', component: CampaignLayout },
    { id: 'section2', title: '전화번호별 설명 편집', component: EditDescription },
    { id: 'section3', title: '예약콜 제한 설정', component: CallLimitSetting },
    { id: 'section8', title: '콜백 리스트 초기화 시각 설정', component: SystemCallBackTimeSetting },
    { id: 'section4', title: '분배호수 제한 설정', component: DistributionLimit },
    { id: 'section5', title: '스킬편집', component: SkillEdit },
    // { id: 'section6', title: '상담 결과코드 설정', component: ConsultResultSetting },
    { id: 'section7', title: '서스팬드', component: SuspendView },
  ]

  return (
    <div className="divide-y accordion-wrap limit-width">
      {sections.filter((section) => {
        // tenant_id가 0이 아니고 section.id가 section8인 경우(SystemCallBackTimeSetting 컴포넌트) 제외
        if (tenant_id !== 0 && section.id === 'section8' && section.component === SystemCallBackTimeSetting) {
          return false;
        }
        return true;
      }).map((section) => (
        <div key={section.id} className="accordion">
          <h2>
            <button
              type="button"
              className={`accordion-btn
                ${openOperationSectionId !== section.id ? 'border-b-0' : ''} 
                gap-[15px]`}
              onClick={() => toggleSection(section.id)}
              aria-expanded={openOperationSectionId === section.id}
            >
              <div className={`transform transition-transform duration-200 ${openOperationSectionId === section.id ? 'rotate-180' : ''}`}>
                <Image 
                  src="/chevron-down.svg"
                  alt="chevron"
                  width={10}
                  height={10}
                />
              </div>
              <span className='text-sm'>{section.title}</span>
            </button>
          </h2>
          <div
            className={`transition-[max-height,opacity] duration-200 ease-in-out overflow-hidden
              ${openOperationSectionId === section.id ? 'opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="py-[35px] px-[40px] border-t border-gray-200">
              {/* 컴포넌트를 조건부 렌더링 */}
              
              {openOperationSectionId === section.id && React.createElement(section.component)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}