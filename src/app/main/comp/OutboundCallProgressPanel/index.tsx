// src\app\main\comp\OutboundCallProgressPanel\index.tsx
import React from 'react';

const OutboundCallProgressPanel = () => {
  return (
    <div className="grid grid-cols-4 gap-6 p-3 h-full">
      {/* Left Section - Campaign Info */}
      <div className="col-span-1 bg-white rounded-lg shadow-lg border border-gray-100">
        <div className="p-2 font-medium text-lg">캠페인 정보</div>
        <div className="p-2 space-y-5">
          <div className="h-32 bg-gray-50 rounded-md"></div>
          <div className="h-32 bg-gray-50 rounded-md"></div>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-3 grid grid-rows-2 gap-6">
        {/* Top Row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Call Failure Status */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100">
            <div className="p-2 font-medium text-lg">발신 실패사유 현황</div>
            <div className="p-2">
              <div className="h-48 bg-gray-50 rounded-md"></div>
            </div>
          </div>

          {/* Success Rate */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100">
            <div className="p-2 font-medium text-lg">발신 성공률</div>
            <div className="p-2">
              <div className="h-48 bg-gray-50 rounded-md"></div>
            </div>
          </div>
        </div>

        {/* Bottom Row - List Status */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100">
          <div className="p-2 font-medium text-lg">리스트 현황</div>
          <div className="p-2">
            <div className="h-48 bg-gray-50 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutboundCallProgressPanel;