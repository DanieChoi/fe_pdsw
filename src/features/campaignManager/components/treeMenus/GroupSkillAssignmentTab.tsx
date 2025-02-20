"use client";

import { useCounselorFilterStore } from "@/store/storeForSideMenuCounselorTab";

export function GroupSkillAssignmentTab() {
  const { candidateMembersForSkilAssign } = useCounselorFilterStore();

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">그룹 스킬 할당</h2>
      <div className="space-y-4">
        <h3 className="text-md font-medium">소속 상담원 목록</h3>
        <div className="space-y-2">
          {candidateMembersForSkilAssign.map((counselor: any) => (
            <div 
              key={counselor.counselorId}
              className="p-2 border rounded-lg hover:bg-gray-50"
            >
              <p className="text-sm">{counselor.counselorname}</p>
              <p className="text-xs text-gray-500">ID: {counselor.counselorId}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}