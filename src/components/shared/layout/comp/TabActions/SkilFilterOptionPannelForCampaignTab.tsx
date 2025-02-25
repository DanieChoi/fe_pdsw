// // // src\components\shared\layout\comp\TabActions\SkilFilterOptionPannelForCampaignTab.tsx

// // "use client";

// // import React, { useState, useEffect } from "react";
// // import { Button } from "@/components/ui/button";
// // import { useAuthStore } from "@/store/authStore";
// // import { Checkbox } from "@/components/ui/checkbox";

// // src/components/shared/layout/comp/TabActions/SkilFilterOptionPannelForCampaignTab.tsx

// "use client";

// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { useAuthStore } from "@/store/authStore";
// import { Checkbox } from "@/components/ui/checkbox";
// import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";
// import { useAssignableSkills } from "@/features/preferences/hooks/useAssignableSkills";
// import { Popover } from "@/components/ui/popover";
// import { PopoverClose } from "@radix-ui/react-popover";

// interface Skill {
//     skill_id: number;
//     skill_name: string;
// }

// interface SkilFilterOptionPannelForCampaignTabProps {
//     shouldCloseOnConfirm?: boolean;
// }

// const SkilFilterOptionPannelForCampaignTab = ({
//     shouldCloseOnConfirm = false,
// }: SkilFilterOptionPannelForCampaignTabProps) => {
//     const { tenant_id } = useAuthStore(); // 현재 로그인한 사용자의 tenant_id 가져오기
//     console.log("🔥 tenant_id:", tenant_id);

//     // 할당 가능한 스킬 목록 가져오기
//     const { data: skills = [] as Skill[], isLoading, isError } = useAssignableSkills();
//     console.log("🔥 skills:", skills);

//     // zustand 스토어에서 skilIdsForCampaignTreeMenu(선택된 스킬 ID 목록) 가져오기
//     const { skilIdsForCampaignTreeMenu, setSkilIdsForCampaignTreeMenu } = useSideMenuCampaignTabStore();

//     // 로컬 상태로 체크 박스 선택 상태 관리
//     const [selectedSkills, setSelectedSkills] = useState<number[]>([]);

//     // 스토어에서 불러온 기존 선택된 스킬을 로컬 상태와 동기화
//     useEffect(() => {
//         setSelectedSkills(skilIdsForCampaignTreeMenu);
//     }, [skilIdsForCampaignTreeMenu]);

//     // 체크박스 변경 핸들러 (skill_id 기준)
//     const handleSkillChange = (skill_id: number) => {
//         setSelectedSkills((prev) =>
//             prev.includes(skill_id) ? prev.filter((id) => id !== skill_id) : [...prev, skill_id]
//         );
//     };

//     // 확인 버튼 → 선택한 스킬 ID를 zustand 스토어에 저장
//     const handleConfirm = () => {
//         console.log("✅ 선택한 스킬 ID 목록:", selectedSkills);
//         setSkilIdsForCampaignTreeMenu(selectedSkills);
//     };

//     return (
//         <div className="p-2 border rounded-lg">
//             <div className="font-semibold text-base mb-2">스킬 필터 옵션</div>

//             {/* 로딩/에러 처리 */}
//             {isLoading && <p className="text-gray-500 text-sm">로딩 중...</p>}
//             {isError && <p className="text-red-500 text-sm"></p>}

//             {/* 스킬 체크박스 목록 */}
//             <ul className="space-y-1">
//                 {skills.length > 0 ? (
//                     skills.map(({ skill_id, skill_name }: { skill_id: number; skill_name: string }) => (
//                         <li key={skill_id} className="p-1 border rounded-md flex items-center gap-2 border-gray-200">
//                             <Checkbox
//                                 id={`skill-${skill_id}`}
//                                 checked={selectedSkills.includes(skill_id)}
//                                 onCheckedChange={() => handleSkillChange(skill_id)}
//                             />
//                             <label htmlFor={`skill-${skill_id}`} className="cursor-pointer text-sm">
//                                 {skill_name}
//                             </label>
//                         </li>
//                     ))
//                 ) : (
//                     !isLoading && <p className="text-gray-500 text-sm">불러올 스킬이 없습니다.</p>
//                 )}
//             </ul>

//             {/* 확인/취소 버튼: 가운데 정렬 */}
//             <div className="mt-2 flex justify-center gap-2">
//                 {shouldCloseOnConfirm ? (
//                     <PopoverClose asChild>
//                         <Button onClick={handleConfirm} variant="outline" size="sm">
//                             확인
//                         </Button>
//                     </PopoverClose>
//                 ) : (
//                     <Button onClick={handleConfirm} variant="outline" size="sm">
//                         확인
//                     </Button>
//                 )}
//                 {/* 취소 버튼 클릭 시 창(팝오버)이 닫히도록 PopoverClose로 감싸줌 */}
//                 <PopoverClose asChild>
//                     <Button onClick={() => setSelectedSkills([])} variant="outline" size="sm" className="text-gray-500">
//                         취소
//                     </Button>
//                 </PopoverClose>
//             </div>

//             {/* 현재 스토어에 저장된 스킬 ID 목록 표시는 제거 (주석처리) */}
//         </div>
//     );
// };

// export default SkilFilterOptionPannelForCampaignTab;

"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { Checkbox } from "@/components/ui/checkbox";
import { useSideMenuCampaignTabStore } from "@/store/storeForSsideMenuCampaignTab";
import { useAssignableSkills } from "@/features/preferences/hooks/useAssignableSkills";
import { Popover } from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

interface Skill {
    skill_id: number;
    skill_name: string;
}

interface SkilFilterOptionPannelForCampaignTabProps {
    shouldCloseOnConfirm?: boolean;
}

const SkilFilterOptionPannelForCampaignTab = ({
    shouldCloseOnConfirm = false,
}: SkilFilterOptionPannelForCampaignTabProps) => {
    const { tenant_id } = useAuthStore(); // 현재 로그인한 사용자의 tenant_id 가져오기
    console.log("🔥 tenant_id:", tenant_id);

    // 할당 가능한 스킬 목록 가져오기
    const { data: skills = [] as Skill[], isLoading, isError } = useAssignableSkills();
    console.log("🔥 skills:", skills);

    // zustand 스토어에서 skilIdsForCampaignTreeMenu(선택된 스킬 ID 목록)와 필터 모드 가져오기
    const { 
        skilIdsForCampaignTreeMenu, 
        setSkilIdsForCampaignTreeMenu,
        setFilterMode 
    } = useSideMenuCampaignTabStore();

    // 로컬 상태로 체크 박스 선택 상태 관리
    const [selectedSkills, setSelectedSkills] = useState<number[]>([]);

    // 스토어에서 불러온 기존 선택된 스킬을 로컬 상태와 동기화
    useEffect(() => {
        setSelectedSkills(skilIdsForCampaignTreeMenu);
    }, [skilIdsForCampaignTreeMenu]);

    // 체크박스 변경 핸들러 (skill_id 기준)
    const handleSkillChange = (skill_id: number) => {
        setSelectedSkills((prev) =>
            prev.includes(skill_id) ? prev.filter((id) => id !== skill_id) : [...prev, skill_id]
        );
    };

    // 확인 버튼 → 선택한 스킬 ID를 zustand 스토어에 저장
    const handleConfirm = () => {
        console.log("✅ 선택한 스킬 ID 목록:", selectedSkills);
        setSkilIdsForCampaignTreeMenu(selectedSkills);
        
        // 선택된 스킬이 있으면 필터 모드를 'skill'로, 없으면 'all'로 설정
        setFilterMode(selectedSkills.length > 0 ? "skill" : "all");
    };

    // 취소 버튼 핸들러 (로컬 상태 초기화)
    const handleCancel = () => {
        setSelectedSkills([]);
    };

    return (
        <div className="p-2 border rounded-lg">
            <div className="font-semibold text-base mb-2">스킬 필터 옵션</div>

            {/* 로딩/에러 처리 */}
            {isLoading && <p className="text-gray-500 text-sm">로딩 중...</p>}
            {isError && <p className="text-red-500 text-sm">스킬 정보를 불러오는데 실패했습니다</p>}

            {/* 스킬 체크박스 목록 */}
            <ul className="space-y-1">
                {skills.length > 0 ? (
                    skills.map(({ skill_id, skill_name }: { skill_id: number; skill_name: string }) => (
                        <li key={skill_id} className="p-1 border rounded-md flex items-center gap-2 border-gray-200">
                            <Checkbox
                                id={`skill-${skill_id}`}
                                checked={selectedSkills.includes(skill_id)}
                                onCheckedChange={() => handleSkillChange(skill_id)}
                            />
                            <label htmlFor={`skill-${skill_id}`} className="cursor-pointer text-sm">
                                {skill_name}
                            </label>
                        </li>
                    ))
                ) : (
                    !isLoading && <p className="text-gray-500 text-sm">불러올 스킬이 없습니다.</p>
                )}
            </ul>

            {/* 확인/취소 버튼: 가운데 정렬 */}
            <div className="mt-2 flex justify-center gap-2">
                {shouldCloseOnConfirm ? (
                    <PopoverClose asChild>
                        <Button onClick={handleConfirm} variant="outline" size="sm">
                            확인
                        </Button>
                    </PopoverClose>
                ) : (
                    <Button onClick={handleConfirm} variant="outline" size="sm">
                        확인
                    </Button>
                )}
                {/* 취소 버튼 클릭 시 창(팝오버)이 닫히도록 PopoverClose로 감싸줌 */}
                <PopoverClose asChild>
                    <Button onClick={handleCancel} variant="outline" size="sm" className="text-gray-500">
                        취소
                    </Button>
                </PopoverClose>
            </div>
        </div>
    );
};

export default SkilFilterOptionPannelForCampaignTab;