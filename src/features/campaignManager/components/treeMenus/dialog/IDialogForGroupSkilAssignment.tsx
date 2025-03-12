// "use client";

// import React, { useEffect, useState } from "react";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Card } from "@/components/ui/card";
// import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
// import { Button } from "@/components/ui/button";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { toast } from "react-toastify";
// import CommonDialogForSideMenu from "@/components/shared/CommonDialog/CommonDialogForSideMenu";
// import { useApiForDeleteCounselorsForSpecificSkill } from "@/features/campaignManager/hooks/useApiForDeleteCounselorsForSpecificSkill";
// import { useApiForAddCounselorsForSpecificSkill } from "@/features/campaignManager/hooks/useApiForAddCounselorsForSpecificSkill";
// import { useAssignableSkills } from "@/features/preferences/hooks/useAssignableSkills";
// import Image from "next/image";

// interface IDialogForGroupSkilAssignmentProps {
//   isOpen: boolean;
//   onClose: () => void;
//   groupId: string;
//   groupName: string;
//   groupMembers: any[];
//   tenantId: string;
// }

// export function IDialogForGroupSkilAssignment({
//   isOpen,
//   onClose,
//   groupId,
//   groupName,
//   groupMembers,
//   tenantId
// }: IDialogForGroupSkilAssignmentProps) {
//   const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
//   const [showCounselors, setShowCounselors] = useState(false);

//   console.log(`그룹 스킬 할당 다이얼로그 열림 - 그룹 ID: ${groupId}, 이름: ${groupName}, 테넌트: ${tenantId}, 멤버 수: ${groupMembers.length}`);

//   // 할당 가능한 스킬 목록 조회
//   const { data: assignableSkills, isLoading: isSkillsLoading, error: skillsError } = useAssignableSkills(Number(tenantId));

//   const deleteCounselorMutation = useApiForDeleteCounselorsForSpecificSkill(tenantId ?? "0");
//   const addCounselorMutation = useApiForAddCounselorsForSpecificSkill(tenantId ?? "0");

//   // 유효한 상담원 ID 배열 생성 함수
//   const getValidCounselorIds = (): string[] => {
//     if (!groupMembers || groupMembers.length === 0) {
//       console.warn("⚠️ 유효한 상담원 배열이 없습니다.");
//       return [];
//     }

//     // 유효한 ID만 필터링
//     const validIds = groupMembers
//       .filter(counselor => {
//         // 데이터 구조에 따라 ID 추출
//         const id = (counselor.data && counselor.data.counselorId) || counselor.counselorId;
//         return id && id !== '-';
//       })
//       .map(counselor => {
//         // ID 추출
//         return (counselor.data && counselor.data.counselorId) || counselor.counselorId;
//       });
    
//     console.log("✅ 추출된 상담원 ID 목록:", validIds, "개수:", validIds.length);
    
//     return validIds;
//   };

//   // 스킬 선택/해제 핸들러
//   const handleSkillToggle = (skillId: number) => {
//     const counselorIds = getValidCounselorIds();

//     if (counselorIds.length === 0) {
//       toast.error('유효한 상담원이 없습니다.');
//       return;
//     }

//     setSelectedSkills((prev) => {
//       const isCurrentlySelected = prev.includes(skillId);

//       if (isCurrentlySelected) {
//         console.log("📌 체크 해제된 스킬 정보:", {
//           skillId: skillId,
//           counselorIds: counselorIds,
//           counselorCount: counselorIds.length
//         });

//         deleteCounselorMutation.mutate({
//           skillId: skillId,
//           counselorIds: counselorIds
//         }, {
//           onSuccess: () => {
//             toast.success('스킬이 해제되었습니다.');
//           },
//           onError: (error) => {
//             console.error('스킬 해제 오류:', error);
//             toast.error('스킬 해제 중 오류가 발생했습니다.');
//           }
//         });
//       } else {
//         console.log("📌 체크된 스킬 정보:", {
//           skillId: skillId,
//           counselorIds: counselorIds,
//           counselorCount: counselorIds.length
//         });

//         addCounselorMutation.mutate({
//           skillId: skillId,
//           counselorIds: counselorIds
//         }, {
//           onSuccess: () => {
//             toast.success('스킬이 할당되었습니다.');
//           },
//           onError: (error) => {
//             console.error('스킬 할당 오류:', error);
//             toast.error('스킬 할당 중 오류가 발생했습니다.');
//           }
//         });
//       }

//       return isCurrentlySelected
//         ? prev.filter(id => id !== skillId)
//         : [...prev, skillId];
//     });
//   };

//   // 상담원 목록 토글
//   const toggleCounselors = () => {
//     setShowCounselors(!showCounselors);
//   };

//   // 취소 버튼 핸들러
//   const handleCancel = () => {
//     onClose();
//   };

//   // 확인 버튼 핸들러
//   const handleConfirm = () => {
//     // 다이얼로그에서 스킬 선택/해제할 때마다 바로 API를 호출하므로,
//     // 확인 버튼은 단순히 다이얼로그를 닫는 역할만 수행합니다.
//     toast.success('스킬 할당 작업이 완료되었습니다.');
//     onClose();
//   };

//   const isLoading = isSkillsLoading;
//   const error = skillsError;

//   const renderContent = () => {
//     if (error) {
//       return <div className="text-red-500 p-4">Error: {String(error)}</div>;
//     }

//     if (isLoading) {
//       return (
//         <div className="p-6 flex flex-col items-center">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
//           <div>데이터를 불러오는 중입니다...</div>
//         </div>
//       );
//     }

//     // 상담원이 없는 경우 UI
//     if (!groupMembers || groupMembers.length === 0) {
//       return (
//         <div className="px-[30px] py-[20px]">
//           <div className="flex items-center">
//             <Image src="/tree-menu/group_icon_for_tree.png" alt="그룹" width={15} height={12} className="mr-2" />
//             <span className="text-sm text-[#333]">상담원 정보를 찾을 수 없습니다</span>
//           </div>
//           <p className="text-[#333] mb-4 text-sm">
//             선택된 그룹의 상담원 정보를 불러올 수 없습니다.<br />
//             다시 시도하거나 관리자에게 문의하세요.
//           </p>
//         </div>
//       );
//     }

//     return (
//       <div className="px-[30px] py-[20px]">
//         <div className="text-sm text-gray-600 mb-4">
//           그룹의 모든 상담원({groupMembers.length}명)에게 스킬을 일괄 할당<br />
//         </div>

//         {/* 상담원 목록 표시 */}
//         <div className="mb-4">
//           <div
//             className="flex justify-between items-center p-2 border rounded cursor-pointer bg-gray-50 hover:bg-gray-100"
//             onClick={toggleCounselors}
//           >
//             <div className="flex items-center">
//               <Image src="/tree-menu/group_icon_for_tree.png" alt="그룹" width={15} height={12} className="mr-2" />
//               <span className="text-sm text-[#333]">{groupName}</span>
//             </div>
            
//             <div className="flex items-center">
//               <span className="text-sm text-[#333]">{groupMembers.length}명</span>
//               {showCounselors ? (
//                 <ChevronUp className="h-4 w-4 text-gray-500" />
//               ) : (
//                 <ChevronDown className="h-4 w-4 text-gray-500" />
//               )}
//             </div>
//           </div>

//           {showCounselors && (
//             <div className="mt-2 max-h-[150px] overflow-y-auto border rounded">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]" style={{ height: '30px' }}>ID</TableHead>
//                     <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]" style={{ height: '30px' }}>이름</TableHead>
//                     <TableHead className="w-16 text-center bg-[#F8F8F8] text-[#333]" style={{ height: '30px' }}>테넌트 ID</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {groupMembers.map((counselor, index) => {
//                     // 필드에 올바르게 접근
//                     const id = counselor.data?.counselorId || counselor.counselorId || '-';
//                     const name = counselor.data?.counselorname || counselor.counselorname || '-';
//                     const currentTenantId = counselor.data?.tenantId || counselor.tenantId || '-';

//                     return (
//                       <TableRow key={`counselor-${index}`} className="custom-hover">
//                         <TableCell className="py-1 text-sm text-center text-[#444]">{id}</TableCell>
//                         <TableCell className="py-1 text-sm text-center text-[#444]">{name}</TableCell>
//                         <TableCell className="py-1 text-sm text-center text-[#444]">{currentTenantId}</TableCell>
//                       </TableRow>
//                     );
//                   })}
//                 </TableBody>
//               </Table>
//             </div>
//           )}
//         </div>

//         {/* 테넌트 ID 정보 */}
//         {/* <div className="p-2 bg-gray-50 border rounded text-sm text-[#333] mb-4">
//           <span>테넌트 ID: {tenantId || 'N/A'}</span>
//         </div> */}

//         {/* 스킬 목록 테이블 */}
//         <div className="max-h-[250px] overflow-y-auto border rounded">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]" style={{ height: '30px' }}>선택</TableHead>
//                 <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]" style={{ height: '30px' }}>아이디</TableHead>
//                 <TableHead className="w-16 text-center bg-[#F8F8F8] text-[#333]" style={{ height: '30px' }}>이름</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {assignableSkills && assignableSkills.length > 0 ? (
//                 assignableSkills.map((skill) => (
//                   <TableRow key={`skill-${skill.skill_id}`} className="custom-hover">
//                     <TableCell className="text-center text-[#444]" style={{ height: '30px' , padding:0}}>
//                       <CustomCheckbox
//                         checked={selectedSkills.includes(skill.skill_id)}
//                         onCheckedChange={() => handleSkillToggle(skill.skill_id)}
//                       />
//                     </TableCell>
//                     <TableCell className="text-center text-[#444]" style={{ height: '30px' , padding:0}}>{skill.skill_id}</TableCell>
//                     <TableCell className="text-center text-[#444]" style={{ height: '30px' , padding:0}}>{skill.skill_name}</TableCell>
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={3} className="text-center py-4">
//                     할당 가능한 스킬이 없습니다.
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>

//         <div className="mt-6 flex justify-center gap-2">
//           <Button
//             onClick={handleConfirm}
//             className="px-6 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
//           >
//             확인
//           </Button>
//           <Button
//             variant="outline"
//             onClick={handleCancel}
//             className="px-6 py-1.5 border border-gray-300 rounded text-sm"
//           >
//             취소
//           </Button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <CommonDialogForSideMenu
//       isOpen={isOpen}
//       onClose={onClose}
//       title={`그룹 스킬 할당 - ${groupName || ''}`}
//     >
//       {renderContent()}
//     </CommonDialogForSideMenu>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "react-toastify";
import CommonDialogForSideMenu from "@/components/shared/CommonDialog/CommonDialogForSideMenu";
import { useApiForDeleteCounselorsForSpecificSkill } from "@/features/campaignManager/hooks/useApiForDeleteCounselorsForSpecificSkill";
import { useApiForAddCounselorsForSpecificSkill } from "@/features/campaignManager/hooks/useApiForAddCounselorsForSpecificSkill";
import { useAssignableSkills } from "@/features/preferences/hooks/useAssignableSkills";
import Image from "next/image";

interface IDialogForGroupSkilAssignmentProps {
  isOpen: boolean;
  onClose: () => void;
  groupId: string;
  groupName: string;
  groupMembers: any[];
  tenantId: string;
}

export function IDialogForGroupSkilAssignment({
  isOpen,
  onClose,
  groupId,
  groupName,
  groupMembers,
  tenantId
}: IDialogForGroupSkilAssignmentProps) {
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const [showCounselors, setShowCounselors] = useState(false);

  console.log(`그룹 스킬 할당 다이얼로그 열림 - 그룹 ID: ${groupId}, 이름: ${groupName}, 테넌트: ${tenantId}, 멤버 수: ${groupMembers.length}`);

  // 할당 가능한 스킬 목록 조회
  const { data: assignableSkills, isLoading: isSkillsLoading, error: skillsError } = useAssignableSkills(Number(tenantId));

  const deleteCounselorMutation = useApiForDeleteCounselorsForSpecificSkill(tenantId ?? "0");
  const addCounselorMutation = useApiForAddCounselorsForSpecificSkill(tenantId ?? "0");

  // 유효한 상담원 ID 배열 생성 함수
  const getValidCounselorIds = (): string[] => {
    if (!groupMembers || groupMembers.length === 0) {
      console.warn("⚠️ 유효한 상담원 배열이 없습니다.");
      return [];
    }

    // 유효한 ID만 필터링
    const validIds = groupMembers
      .filter(counselor => {
        // 데이터 구조에 따라 ID 추출
        const id = (counselor.data && counselor.data.counselorId) || counselor.counselorId;
        return id && id !== '-';
      })
      .map(counselor => {
        // ID 추출
        return (counselor.data && counselor.data.counselorId) || counselor.counselorId;
      });
    
    console.log("✅ 추출된 상담원 ID 목록:", validIds, "개수:", validIds.length);
    
    return validIds;
  };

  // 스킬 선택/해제 핸들러
  const handleSkillToggle = (skillId: number) => {
    const counselorIds = getValidCounselorIds();

    if (counselorIds.length === 0) {
      toast.error('유효한 상담원이 없습니다.');
      return;
    }

    setSelectedSkills((prev) => {
      const isCurrentlySelected = prev.includes(skillId);

      if (isCurrentlySelected) {
        console.log("📌 체크 해제된 스킬 정보:", {
          skillId: skillId,
          counselorIds: counselorIds,
          counselorCount: counselorIds.length
        });

        deleteCounselorMutation.mutate({
          skillId: skillId,
          counselorIds: counselorIds
        }, {
          onSuccess: () => {
            toast.success('스킬이 해제되었습니다.');
          },
          onError: (error) => {
            console.error('스킬 해제 오류:', error);
            toast.error('스킬 해제 중 오류가 발생했습니다.');
          }
        });
      } else {
        console.log("📌 체크된 스킬 정보:", {
          skillId: skillId,
          counselorIds: counselorIds,
          counselorCount: counselorIds.length
        });

        addCounselorMutation.mutate({
          skillId: skillId,
          counselorIds: counselorIds
        }, {
          onSuccess: () => {
            toast.success('스킬이 할당되었습니다.');
          },
          onError: (error) => {
            console.error('스킬 할당 오류:', error);
            toast.error('스킬 할당 중 오류가 발생했습니다.');
          }
        });
      }

      return isCurrentlySelected
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId];
    });
  };

  // 상담원 목록 토글
  const toggleCounselors = () => {
    setShowCounselors(!showCounselors);
  };

  // 취소 버튼 핸들러
  const handleCancel = () => {
    onClose();
  };

  // 확인 버튼 핸들러
  const handleConfirm = () => {
    // 다이얼로그에서 스킬 선택/해제할 때마다 바로 API를 호출하므로,
    // 확인 버튼은 단순히 다이얼로그를 닫는 역할만 수행합니다.
    toast.success('스킬 할당 작업이 완료되었습니다.');
    onClose();
  };

  const isLoading = isSkillsLoading;
  const error = skillsError;

  const renderContent = () => {
    if (error) {
      return <div className="text-red-500 p-4">Error: {String(error)}</div>;
    }

    if (isLoading) {
      return (
        <div className="p-6 flex flex-col items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
          <div>데이터를 불러오는 중입니다...</div>
        </div>
      );
    }

    // 상담원이 없는 경우 UI
    if (!groupMembers || groupMembers.length === 0) {
      return (
        <div className="px-6 py-4">
          <div className="flex items-center">
            <Image src="/tree-menu/group_icon_for_tree.png" alt="그룹" width={15} height={12} className="mr-2" />
            <span className="text-sm text-[#333]">상담원 정보를 찾을 수 없습니다</span>
          </div>
          <p className="text-[#333] mb-4 text-sm">
            선택된 그룹의 상담원 정보를 불러올 수 없습니다.<br />
            다시 시도하거나 관리자에게 문의하세요.
          </p>
        </div>
      );
    }

    return (
      <div className="p-4">
        {/* 공통 설명 영역 */}
        <div className="text-sm text-gray-600 mb-4">
          그룹의 모든 상담원({groupMembers.length}명)에게 스킬을 일괄 할당합니다.
        </div>

        {/* 2등분 레이아웃 */}
        <div className="flex flex-row gap-6">
          {/* 왼쪽 영역: 그룹 정보 및 상담원 목록 */}
          <div className="w-1/2">
            <div className="mb-2 font-medium text-sm">그룹 정보</div>
            {/* 상담원 목록 토글 헤더 */}
            <div
              className="flex justify-between items-center p-2 border rounded cursor-pointer bg-gray-50 hover:bg-gray-100 mb-2"
              onClick={toggleCounselors}
            >
              <div className="flex items-center">
                <Image src="/tree-menu/group_icon_for_tree.png" alt="그룹" width={15} height={12} className="mr-2" />
                <span className="text-sm text-[#333]">{groupName}</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-sm text-[#333] mr-2">{groupMembers.length}명</span>
                {showCounselors ? (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </div>
            </div>

            {/* 상담원 목록 (토글되는 영역) */}
            {showCounselors && (
              <div className="border rounded" style={{ maxHeight: '300px', overflow: 'auto' }}>
                <Table>
                  <TableHeader className="sticky top-0 z-10">
                    <TableRow>
                      <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]" style={{ height: '30px' }}>ID</TableHead>
                      <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]" style={{ height: '30px' }}>이름</TableHead>
                      <TableHead className="w-16 text-center bg-[#F8F8F8] text-[#333]" style={{ height: '30px' }}>테넌트 ID</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {groupMembers.map((counselor, index) => {
                      // 필드에 올바르게 접근
                      const id = counselor.data?.counselorId || counselor.counselorId || '-';
                      const name = counselor.data?.counselorname || counselor.counselorname || '-';
                      const currentTenantId = counselor.data?.tenantId || counselor.tenantId || '-';

                      return (
                        <TableRow key={`counselor-${index}`} className="custom-hover">
                          <TableCell className="py-1 text-sm text-center text-[#444]">{id}</TableCell>
                          <TableCell className="py-1 text-sm text-center text-[#444]">{name}</TableCell>
                          <TableCell className="py-1 text-sm text-center text-[#444]">{currentTenantId}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>

          {/* 오른쪽 영역: 스킬 목록 */}
          <div className="w-1/2">
            <div className="mb-2 font-medium text-sm">할당할 스킬 선택</div>
            
            {/* 스킬 목록 테이블 */}
            <div className="border rounded" style={{ maxHeight: '350px', overflow: 'auto' }}>
              <Table>
                <TableHeader className="sticky top-0 z-10">
                  <TableRow>
                    <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]" style={{ height: '30px' }}>선택</TableHead>
                    <TableHead className="w-16 text-center bg-[#F8F8F8] border-r text-[#333]" style={{ height: '30px' }}>아이디</TableHead>
                    <TableHead className="w-16 text-center bg-[#F8F8F8] text-[#333]" style={{ height: '30px' }}>이름</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assignableSkills && assignableSkills.length > 0 ? (
                    assignableSkills.map((skill) => (
                      <TableRow key={`skill-${skill.skill_id}`} className="custom-hover">
                        <TableCell className="text-center text-[#444]" style={{ height: '30px', padding: 0 }}>
                          <CustomCheckbox
                            checked={selectedSkills.includes(skill.skill_id)}
                            onCheckedChange={() => handleSkillToggle(skill.skill_id)}
                          />
                        </TableCell>
                        <TableCell className="text-center text-[#444]" style={{ height: '30px', padding: 0 }}>{skill.skill_id}</TableCell>
                        <TableCell className="text-center text-[#444]" style={{ height: '30px', padding: 0 }}>{skill.skill_name}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center py-4">
                        할당 가능한 스킬이 없습니다.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* 하단 버튼 영역 */}
        <div className="mt-6 flex justify-center gap-2">
          <Button
            onClick={handleConfirm}
            className="px-6 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
          >
            확인
          </Button>
          <Button
            variant="outline"
            onClick={handleCancel}
            className="px-6 py-1.5 border border-gray-300 rounded text-sm"
          >
            취소
          </Button>
        </div>
      </div>
    );
  };

  return (
    <CommonDialogForSideMenu
      isOpen={isOpen}
      onClose={onClose}
      title={`그룹 스킬 할당 - ${groupName || ''}`}
      // 다이얼로그 너비를 70%로 설정하고 최대 너비 지정
      dialogClassName="w-[70%] max-w-[1200px] min-w-[800px]"
    >
      {renderContent()}
    </CommonDialogForSideMenu>
  );
}