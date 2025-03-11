// CallSettingBulkUpdateFormForCampaingGroup.tsx
"use client";
import React from "react";

interface CallSettingBulkUpdateFormForCampaingGroupProps {
  groupId?: string | number;
}

export function CallSettingBulkUpdateFormForCampaingGroup({
  groupId
}: CallSettingBulkUpdateFormForCampaingGroupProps = {}) {
  // 전화번호 탭 목록
  const phoneNumbers = [
    { id: 1, label: '고객 전화번호(1)' },
    { id: 2, label: '고객 전화번호(2)' },
    { id: 3, label: '고객 전화번호(3)' },
    { id: 4, label: '고객 전화번호(4)' },
    { id: 5, label: '고객 전화번호(5)' }
  ];
  
  return (
    <div className="bg-white p-3 flex flex-col h-full">
      {/* Phone ID 선택기와 전화번호 탭 */}
      <div className="flex mb-2">
        <div className="flex items-center mr-4">
          <label className="text-sm mr-2">Phone ID</label>
          <select className="border border-gray-300 px-2 py-1 w-36">
            <option value="">선택</option>
          </select>
        </div>
        
        <div className="flex border border-gray-300">
          {phoneNumbers.map((phone, index) => (
            <button 
              key={phone.id}
              className={`px-3 py-1 text-sm ${index === 0 ? 'bg-white' : 'bg-gray-200'} ${index < phoneNumbers.length - 1 ? 'border-r border-gray-300' : ''}`}
            >
              {phone.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* 전화번호별 발신순서 편집 */}
      <div className="border border-gray-300 p-2 flex-1">
        <div className="text-sm font-medium mb-2">전화번호별 발신순서 편집</div>
        
        <div className="flex h-[calc(100%-2rem)]">
          {/* 왼쪽 전화번호 목록 */}
          <div className="w-48 border border-gray-300 mr-2">
            {phoneNumbers.map((phone, index) => (
              <div 
                key={phone.id}
                className={`p-1 text-sm ${index === 0 ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
              >
                {phone.label}
              </div>
            ))}
          </div>
          
          {/* 중앙 이동 버튼 */}
          <div className="flex flex-col justify-center space-y-4 mr-2">
            <button className="w-8 h-8 bg-gray-300 hover:bg-gray-400 flex items-center justify-center">▶</button>
            <button className="w-8 h-8 bg-gray-300 hover:bg-gray-400 flex items-center justify-center">◀</button>
          </div>
          
          {/* 오른쪽 전화번호 그룹 편집 */}
          <div className="flex-1 border border-gray-300 flex flex-col">
            <div className="flex border-b border-gray-300">
              <select className="border-r border-gray-300 px-2 py-1 text-sm w-24">
                <option>순서</option>
              </select>
              <div className="flex-1 text-center py-1 text-sm">전화번호 그룹</div>
            </div>
            <div className="flex-1">
              {/* 전화번호 그룹 목록이 표시될 영역 */}
            </div>
          </div>
          
          {/* 오른쪽 수직 이동 버튼 */}
          <div className="flex flex-col justify-center space-y-4 ml-2">
            <button className="w-8 h-8 bg-gray-300 hover:bg-gray-400 flex items-center justify-center">▲</button>
            <button className="w-8 h-8 bg-gray-300 hover:bg-gray-400 flex items-center justify-center">▼</button>
          </div>
        </div>
      </div>
    </div>
  );
}