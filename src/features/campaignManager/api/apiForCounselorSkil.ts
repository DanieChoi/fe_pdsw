// src/features/campaignManager/api/apiForCounselorSkill.ts
import { axiosInstance } from "@/lib/axios";
import {
  CounselorSkillApiError,
  CounselorSkillAssignmentRequest,
  CounselorSkillAssignmentResponse,
  CounselorSkillListResponse,
  CounselorSkillRequestData
} from "../types/typeForCounselorSkill";

// apiForAsignmentSkillForCounselor
// 엔드 포인트:
// skills/{skill_id}/agent-list

// req 예시:
// {
//     "request_data": {
//         "agent_id": [
//             "2002",
//             "KICC3402"
//         ]
//     }
// }

// res 예시:
// {
//     "result_code": 0,
//     "result_msg": "Success"
// }

/**
 * 상담원에게 선택한 스킬들을 한 번에 할당합니다.
 * 각 스킬에 대해 API 요청을 보내고, 모든 요청이 완료될 때까지 기다립니다.
 *
 * @param counselorIds 상담원 ID 배열 (여러 명 가능)
 * @param selectedSkills 선택한 스킬 ID 배열
 * @returns 각 요청의 응답 결과 배열
 */
export async function assignSkillsToCounselor(
  counselorIds: string[],  // ❗ counselorId 하나가 아니라 배열로 변경
  selectedSkills: number[]
): Promise<CounselorSkillAssignmentResponse[]> {

  console.log("✅ API for 상담원 스킬 할당 check!");
  console.log("🎯 상담원 목록:", counselorIds);
  console.log("🔗 할당할 스킬 목록:", selectedSkills);

  // 선택한 각 스킬에 대해 상담원 목록을 한 번에 요청 (여러 상담원 추가 가능)
  const requests = selectedSkills.map((skillId) =>
    axiosInstance
      .put<CounselorSkillAssignmentResponse>(
        `skills/${skillId}/agent-list`,
        {
          request_data: {
            agent_id: counselorIds, // ❗ 여러 명의 상담원을 한 번에 추가
          } as CounselorSkillAssignmentRequest["request_data"],
        }
      )
      .then((response) => response.data)
  );

  // 모든 요청이 완료될 때까지 기다림
  return Promise.all(requests);
}


export const apiForGetSkillListForCounselor = async (tenantId: number): Promise<CounselorSkillListResponse> => {
  const skillRequestData: CounselorSkillRequestData = {
    filter: {
      skill_id: {
        start: 1,
        end: 9999999,
      },
      //   tenant_id: [tenantId],
      tenant_id: [1],
    },
    sort: {
      skill_id: 0,
      tenant_id: 0,
    },
  };

  try {
    const { data } = await axiosInstance.post<CounselorSkillListResponse>(
      '/collections/skill',
      skillRequestData
    );

    if (data.result_code === 0 && data.result_msg === "Success") {
      console.log("api for counselor skill data check : ", data);
      return data;
    } else {
      throw new Error(`API Error: ${data.result_msg}`);
    }
  } catch (error) {
    const typedError = error as CounselorSkillApiError;
    throw new Error(
      typedError.response?.data?.result_msg || '상담원 스킬 목록을 가져오는데 실패했습니다.'
    );
  }
};