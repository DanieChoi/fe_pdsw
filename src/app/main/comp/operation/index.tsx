'use client'

import React, { useEffect, useState } from 'react'
import CampaignLayout from './CampaignNumberChange/CampaignLayout'
import EditDescription from './NumberEditDescription/EditDescription'
import CallLimitSetting from './CallLimitSetting'
import DistributionLimit from './DistributionLimit'
import SkillEdit from './SkillEdit'
import ConsultResultSetting from './ConsultResultSetting'
import SuspendView from './SuspendView'
import Image from 'next/image'
import { useTabStore } from '@/store'

export default function OperationBoard() {
  const [openSectionId, setOpenSectionId] = useState<string>('section1')
  const { activeTabId } = useTabStore()

  useEffect(() => {
    if (activeTabId === 8) {
      setOpenSectionId('section3')
    } else if (activeTabId === 9) {
      setOpenSectionId('section4')
    }
  }, [activeTabId])

  const toggleSection = (sectionId: string) => {
    setOpenSectionId(openSectionId === sectionId ? '' : sectionId)
  }

  const sections = [
    { id: 'section1', title: '캠페인별 발신번호 변경', content: <CampaignLayout /> },
    { id: 'section2', title: '전화번호별 설명 편집', content: <EditDescription/> },
    { id: 'section3', title: '예약콜 제한 설정', content: <CallLimitSetting/> },
    { id: 'section4', title: '분배호수 제한 설정', content: <DistributionLimit/>},
    { id: 'section5', title: '스킬편집', content: <SkillEdit/> },
    // { id: 'section6', title: '상담 결과코드 설정', content: <ConsultResultSetting/> },
    { id: 'section7', title: '서스팬드', content: <SuspendView/> },
  ]

  return (
    <div className="divide-y accordion-wrap limit-width">
      {sections.map((section) => (
        <div key={section.id} className="accordion">
          <h2>
            <button
              type="button"
              className={`accordion-btn
                ${openSectionId !== section.id ? 'border-b-0' : ''} 
                gap-[15px]`}
              onClick={() => toggleSection(section.id)}
              aria-expanded={openSectionId === section.id}
            >
              <div className={`transform transition-transform duration-200 ${openSectionId === section.id ? 'rotate-180' : ''}`}>
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
              ${openSectionId === section.id ? 'opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="py-[35px] px-[40px] border-t border-gray-200">
              {section.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}