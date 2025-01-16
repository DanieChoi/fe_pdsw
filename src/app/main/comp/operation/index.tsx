'use client'

import React, { useState } from 'react'
import CampaignLayout from './CampaignLayout';

export default function OperationBoard() {
  const [openSection, setOpenSection] = useState<{ [key: string]: boolean }>({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
    section7: false,
  });

  const toggleSection = (section: string) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">

        <div className="border border-gray-200 dark:border-gray-700">
            <h2>
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 
                    ${!openSection.section1 ? 'border-b-0' : ''} 
                    focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 
                    dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                    onClick={() => toggleSection('section1')}
                    aria-expanded={openSection.section1}
                >
                    <span>캠페인별 발신번호 변경</span>
                {/* <svg
                className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
                    openSection.section1 ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                />
                </svg> */}
                </button>
            </h2>
            <div
            className={`transition-[max-height,opacity] duration-200 ease-in-out overflow-hidden
                ${openSection.section1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <CampaignLayout data={[]} onCampaignSearchClick={function (): void {
                          throw new Error('Function not implemented.');
                      } } />
                </div>
            </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700">
            <h2>
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 
                    ${!openSection.section2 ? 'border-b-0' : ''} 
                    focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 
                    dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                    onClick={() => toggleSection('section2')}
                    aria-expanded={openSection.section2}
                >
                    <span>전화번호별 설명 편집</span>
                </button>
            </h2>
            <div
            className={`transition-[max-height,opacity] duration-200 ease-in-out overflow-hidden
                ${openSection.section2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    화면2
                </div>
            </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700">
            <h2>
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 
                    ${!openSection.section3 ? 'border-b-0' : ''} 
                    focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 
                    dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                    onClick={() => toggleSection('section3')}
                    aria-expanded={openSection.section3}
                >
                    <span>예약콜 제한 설정</span>
                </button>
            </h2>
            <div
            className={`transition-[max-height,opacity] duration-200 ease-in-out overflow-hidden
                ${openSection.section3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    화면3
                </div>
            </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700">
            <h2>
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 
                    ${!openSection.section4 ? 'border-b-0' : ''} 
                    focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 
                    dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                    onClick={() => toggleSection('section4')}
                    aria-expanded={openSection.section4}
                >
                    <span>분배호수 제한 설정</span>
                </button>
            </h2>
            <div
            className={`transition-[max-height,opacity] duration-200 ease-in-out overflow-hidden
                ${openSection.section4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    화면4
                </div>
            </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700">
            <h2>
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 
                    ${!openSection.section5 ? 'border-b-0' : ''} 
                    focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 
                    dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                    onClick={() => toggleSection('section5')}
                    aria-expanded={openSection.section5}
                >
                    <span>스킬편집</span>
                </button>
            </h2>
            <div
            className={`transition-[max-height,opacity] duration-200 ease-in-out overflow-hidden
                ${openSection.section5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    화면5
                </div>
            </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700">
            <h2>
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 
                    ${!openSection.section6 ? 'border-b-0' : ''} 
                    focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 
                    dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                    onClick={() => toggleSection('section6')}
                    aria-expanded={openSection.section6}
                >
                    <span>상담 결과코드 설정</span>
                </button>
            </h2>
            <div
            className={`transition-[max-height,opacity] duration-200 ease-in-out overflow-hidden
                ${openSection.section6 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    화면6
                </div>
            </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700">
            <h2>
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 
                    ${!openSection.section7 ? 'border-b-0' : ''} 
                    focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 
                    dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                    onClick={() => toggleSection('section7')}
                    aria-expanded={openSection.section7}
                >
                    <span>서스팬드</span>
                </button>
            </h2>
            <div
            className={`transition-[max-height,opacity] duration-200 ease-in-out overflow-hidden
                ${openSection.section7 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    화면7
                </div>
            </div>
        </div>

    </div>
  );
}