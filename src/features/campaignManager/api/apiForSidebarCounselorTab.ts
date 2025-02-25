// C:\Users\terec\fe_pdsw\src\features\campaignManager\api\apiForSidebarCounselorTab.ts
import { MainCredentials2 } from "@/features/auth/types/mainIndex";
import { axiosInstance, axiosRedisInstance } from "@/lib/axios";
import { Counselor, CounselorNode, GroupNode, TabData, TeamNode, TenantNode } from "../types/typeForSideBarCounselorTab";
import { IParmaterForFetchCounsolorList } from "../types/typeForSideBarCounselorTab2";

export async function apiToFetchCounselorListForSideBar({
  tenant_id,
  roleId
}: IParmaterForFetchCounsolorList) {
  const response = await axiosRedisInstance.get(
    `/counselor/list?tenantId=${tenant_id}&roleId=${roleId}`
  );
  
  console.log("response.data at 상담원 api 함수 ! : ", response.data);
  

  return response.data;
}