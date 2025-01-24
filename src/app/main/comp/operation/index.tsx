'use client'

import React, { useState } from 'react'
import CampaignLayout from './CampaignNumberChange/CampaignLayout'
import EditDescription from './NumberEditDescription/EditDescription'
import CallLimitSetting from './CallLimitSetting'
import DistributionLimit from './DistributionLimit'
import ConsultResultSetting from './ConsultResultSetting'
import Image from 'next/image'

export default function OperationBoard() {
  const [openSection, setOpenSection] = useState<{ [key: string]: boolean }>({
    section1: true,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
    section7: false,
  })

  const toggleSection = (section: string) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const sections = [
    { id: 'section1', title: '캠페인별 발신번호 변경', content: <CampaignLayout /> },
    { id: 'section2', title: '전화번호별 설명 편집', content: <EditDescription/> },
    { id: 'section3', title: '예약콜 제한 설정', content: <CallLimitSetting/> },
    { id: 'section4', title: '분배호수 제한 설정', content: '화면4'},
    { id: 'section5', title: '스킬편집', content: '화면5' },
    { id: 'section6', title: '상담 결과코드 설정', content: <ConsultResultSetting/> },
    { id: 'section7', title: '서스팬드', content: '화면7' },
  ]

  return (
    <div className="divide-y accordion-wrap">
      {sections.map((section) => (
        <div key={section.id} className="accordion">
          <h2>
            <button
              type="button"
              className={`accordion-btn
                ${!openSection[section.id] ? 'border-b-0' : ''} 
                gap-[15px]`}
              onClick={() => toggleSection(section.id)}
              aria-expanded={openSection[section.id]}
            >
              <div className={`transform transition-transform duration-200 ${openSection[section.id] ? 'rotate-180' : ''}`}>
                <Image 
                  src="/chevron-down.svg"  // public 폴더 내의 SVG 경로
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
              ${openSection[section.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
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