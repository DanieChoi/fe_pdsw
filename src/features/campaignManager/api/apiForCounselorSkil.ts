// src/features/campaignManager/api/apiForCounselorSkill.ts
import { axiosInstance } from "@/lib/axios";
import {
  CounselorSkillApiError,
  CounselorSkillAssignmentRequest,
  CounselorSkillAssignmentResponse,
  CounselorSkillListResponse,
  CounselorSkillRequestData
} from "../types/typeForCounselorSkill";

/**
 * 상담원에게 선택한 스킬들을 할당하는 API
 * @param counselorIds 상담원 ID 배열 (여러 명 가능)
 * @param selectedSkills 선택한 스킬 ID 배열
 * @returns 각 요청의 응답 결과 배열
 */
export async function assignSkillsToCounselor(
  counselorIds: string[],
  selectedSkills: number[]
): Promise<CounselorSkillAssignmentResponse[]> {
  console.log("✅ 상담원 스킬 할당 API 호출!");
  console.log("🎯 상담원 목록:", counselorIds);
  console.log("🔗 할당할 스킬 목록:", selectedSkills);

  const requests = selectedSkills.map((skillId) =>
    axiosInstance.put<CounselorSkillAssignmentResponse>(
      `skills/${skillId}/agent-list`,
      {
        request_data: {
          agent_id: counselorIds,
        } as CounselorSkillAssignmentRequest["request_data"],
      }
    ).then((response) => response.data)
  );

  return Promise.all(requests);
}

/**
 * 상담원에게 할당 가능한 스킬 목록을 조회하는 API
 * @param tenantId 테넌트 ID
 * @returns 할당 가능한 스킬 목록
 */
export const getAssignableSkillsForCounselor = async (tenantId: number): Promise<CounselorSkillListResponse> => {
  const skillRequestData: CounselorSkillRequestData = {
    filter: {
      skill_id: { start: 1, end: 9999999 },
      tenant_id: [tenantId],
    },
    sort: {
      skill_id: 0,
      tenant_id: 0,
    },
  };

  try {
    const { data } = await axiosInstance.post<CounselorSkillListResponse>(
      "/collections/skill",
      skillRequestData
    );

    if (data.result_code === 0 && data.result_msg === "Success") {
      console.log("✅ 상담원 할당 가능 스킬 목록 조회 성공:", data);
      return data;
    } else {
      throw new Error(`API Error: ${data.result_msg}`);
    }
  } catch (error) {
    const typedError = error as CounselorSkillApiError;
    throw new Error(
      typedError.response?.data?.result_msg || "상담원 스킬 목록을 가져오는 데 실패했습니다."
    );
  }
};

/**
 * 상담원이 보유한 스킬 목록을 조회하는 API
 * @param counselorId 상담원 ID
 * @returns 상담원이 현재 보유한 스킬 목록
 */
export const getAssignedSkillsForCounselor = async (
  counselorId: string
): Promise<CounselorSkillListResponse> => {
  console.log("📌 상담원 스킬 데이터 조회 시작:", counselorId);

  try {
    const { data } = await axiosInstance.post<CounselorSkillListResponse>(
      "/collections/agent-skill",
      {
        filter: { agent_id: [counselorId] },
        sort: {},
        page: { index: 1, items: 10 },
      }
    );

    console.log("✅ 상담원이 보유한 스킬 목록 조회 성공:", data);
    return data;
  } catch (error) {
    const typedError = error as CounselorSkillApiError;
    console.error("❌ 상담원 스킬 목록 조회 실패:", error);
    throw new Error(
      typedError.response?.data?.result_msg || "상담원의 스킬 목록을 가져오는 데 실패했습니다."
    );
  }
};

/**
 * 상담원이 보유한 스킬과 할당 가능한 스킬을 동시에 가져오는 API
 * @param counselorId 상담원 ID
 * @param tenantId 테넌트 ID
 * @returns 상담원이 보유한 스킬 목록과 할당 가능한 스킬 목록
 */
export const apiForGetRelatedInfoForAssignSkilToCounselor = async (
  counselorId: string,
  tenantId: number
): Promise<{ assignedSkills: CounselorSkillListResponse; assignableSkills: CounselorSkillListResponse }> => {
  console.log("📌 상담원 스킬 데이터 조회 시작:", counselorId, tenantId);

  try {
    const [assignedSkills, assignableSkills] = await Promise.all([
      getAssignedSkillsForCounselor(counselorId), // 상담원이 보유한 스킬
      getAssignableSkillsForCounselor(tenantId), // 할당 가능한 스킬 목록
    ]);

    console.log("✅ 상담원이 보유한 스킬 목록:", assignedSkills);
    console.log("✅ 상담원에게 할당 가능한 스킬 목록:", assignableSkills);

    return { assignedSkills, assignableSkills };
  } catch (error) {
    console.error("❌ 상담원 스킬 조회 실패:", error);
    throw new Error("스킬 데이터를 가져오는 중 오류가 발생했습니다.");
  }
};

// 스킬을 가진 상담사 리스트에서 특정 상담사를 제외하는 api 요청 함수
// skills/{skill_id}/agent-lis , apiForDeleteCounselorsForSpecificSkil
/**
 * 특정 스킬을 가진 상담사 목록에서 지정된 상담사들을 제외하는 API
 * @param skillId 스킬 ID
 * @param counselorIds 제외할 상담사 ID 배열
 * @returns API 응답 결과
 */
export const apiForDeleteCounselorsForSpecificSkill = async (
  skillId: number,
  counselorIds: string[]
): Promise<CounselorSkillAssignmentResponse> => {
  console.log("📌 스킬에서 상담사 제외 시작");
  console.log("🎯 대상 스킬 ID:", skillId);
  console.log("🔗 제외할 상담사 목록:", counselorIds);

  try {
    const { data } = await axiosInstance.delete<CounselorSkillAssignmentResponse>(
      `skills/${skillId}/agent-list`,
      {
        data: {                // request_data를 data 안에 넣음
          request_data: {
            agent_id: counselorIds
          }
        }
      }
    );

    console.log("✅ 스킬을 가진 상담사 목록에서 특정 상담사들 제외 성공:", data);
    return data;
  } catch (error) {
    console.error("❌ 스킬에서 상담사 제외 실패:", error);
    const typedError = error as CounselorSkillApiError;
    throw new Error(
      typedError.response?.data?.result_msg || "스킬에서 상담사 제외 중 오류가 발생했습니다."
    );
  }
};

// apiForDeleteCounselorsForSpecificSkill 를 post 로 바꾸면 된다 to apiForAddCounselorsForSpecificSkills
// 특정 스킬에 대한 상담사 목록에 대한 추가 api 이다 apiForDeleteCounselorsForSpecificSkill 와 url 같고 http method 만 post 야 구현해줘 copilot 아래에 구현 해줘
export const apiForAddCounselorsForSpecificSkill = async (
  skillId: number,
  counselorIds: string[]
): Promise<CounselorSkillAssignmentResponse> => {
  console.log("📌 스킬에 상담사 추가 시작");
  console.log("🎯 대상 스킬 ID:", skillId);
  console.log("🔗 추가할 상담사 목록:", counselorIds);

  try {
    const { data } = await axiosInstance.post<CounselorSkillAssignmentResponse>(
      `skills/${skillId}/agent-list`,
      {
        request_data: {
          agent_id: counselorIds
        }
      }
    );

    console.log("✅ 스킬을 가진 상담사 목록에 특정 상담사들 추가 성공:", data);
    return data;
  } catch (error) {
    console.error("❌ 스킬에 상담사 추가 실패:", error);
    const typedError = error as CounselorSkillApiError;
    throw new Error(
      typedError.response?.data?.result_msg || "스킬에 상담사 추가 중 오류가 발생했습니다."
    );
  }
};