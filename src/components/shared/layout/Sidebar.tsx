"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";
import { useMainStore } from "@/store";

import { useApiForMain } from "@/features/auth/hooks/useApiForMain";
import { useApiForTenants } from "@/features/auth/hooks/useApiForTenants";
import CustomAlert from "@/components/shared/layout/CustomAlert";
import { MainDataResponse } from "@/features/auth/types/mainIndex";
import { useApiForSkills } from "@/features/campaignManager/hooks/useApiForSkills";
import { useApiForSchedules } from "@/features/campaignManager/hooks/useApiForSchedules";
import { useApiForCallingNumber } from "@/features/campaignManager/hooks/useApiForCallingNumber";
import { useApiForCampaignSkill } from "@/features/campaignManager/hooks/useApiForCampaignSkill";
import { useApiForPhoneDescription } from "@/features/campaignManager/hooks/useApiForPhoneDescription";
import ISideBarMenuItemList from "./comp/ISideBarMenuItemList";

// 새로 만든 컴포넌트 import
// ↑ 자신의 경로에 맞게 import 경로를 수정하세요.

const errorMessage = {
  isOpen: false,
  message: "",
  title: "로그인",
  type: "0",
};

interface SidebarProps {
  isMenuOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isMenuOpen, toggleSidebar }: SidebarProps) {
  const router = useRouter();
  const [width, setWidth] = useState(330);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [alertState, setAlertState] = useState(errorMessage);
  const [expandedTenants, setExpandedTenants] = useState<number[]>([]);

  const _sessionKey = Cookies.get("session_key") || "";
  const _tenantId = Number(Cookies.get("tenant_id"));

  console.log("Current session key:", _sessionKey);
  console.log("Current tenant ID:", _tenantId);

  const {
    setCampaigns,
    setTenants,
    setSelectedCampaign,
    campaigns,
    tenants,
  } = useMainStore();

  // API hooks
  const { mutate: fetchMain } = useApiForMain({
    onSuccess: (data) => {
      console.log("Main API response:", data);
      setCampaigns(data.result_data);
      fetchCallingNumbers({
        session_key: _sessionKey,
        tenant_id: _tenantId,
      });
    },
  });

  const { mutate: fetchSkills } = useApiForSkills({
    onSuccess: (data) => {
      console.log("Skills API response:", data);
      fetchMain({
        session_key: _sessionKey,
        tenant_id: _tenantId,
      });
    },
  });

  const { mutate: fetchSchedules } = useApiForSchedules({
    onSuccess: (data) => {
      console.log("Schedules API response:", data);
    },
  });

  const { mutate: fetchCallingNumbers } = useApiForCallingNumber({
    onSuccess: (data) => {
      console.log("Calling Numbers API response:", data);
      fetchCampaignSkills({
        session_key: _sessionKey,
        tenant_id: _tenantId,
      });
    },
  });

  const { mutate: fetchCampaignSkills } = useApiForCampaignSkill({
    onSuccess: (data) => {
      console.log("Campaign Skills API response:", data);
      fetchPhoneDescriptions({
        session_key: _sessionKey,
        tenant_id: _tenantId,
      });
    },
  });

  const { mutate: fetchPhoneDescriptions } = useApiForPhoneDescription({
    onSuccess: (data) => {
      console.log("Phone Descriptions API response:", data);
    },
  });

  const { mutate: fetchTenants } = useApiForTenants({
    onSuccess: (data) => {
      console.log("Tenants API response:", data);
      if (data.result_code === 5) {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: "로그인 정보가 없습니다.",
        });
        Cookies.remove("session_key");
        router.push("/login");
      } else {
        setTenants(data.result_data);
        const tempTenantIdArray = data.result_data.map((tenant) =>
          Number(tenant.tenant_id)
        );
        fetchSkills({
          tenant_id_array: tempTenantIdArray,
        });
        fetchSchedules({
          tenant_id_array: tempTenantIdArray,
        });
      }
    },
    onError: (error) => {
      console.error("Tenants API error:", error);
      if (error.message.split("||")[0] === "5") {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: "로그인 정보가 없습니다.",
        });
        Cookies.remove("session_key");
        router.push("/login");
      }
    },
  });

  useEffect(() => {
    console.log("Fetching tenants with:", { _sessionKey, _tenantId });
    fetchTenants({
      session_key: _sessionKey,
      tenant_id: _tenantId,
    });
  }, [fetchTenants, _sessionKey, _tenantId]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      const newWidth = e.clientX;
      if (newWidth >= 200 && newWidth <= 600) {
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  // 캠페인을 클릭했을 때의 로직
  const handleCampaignClick = (campaign: MainDataResponse) => {
    console.log("Campaign clicked:", campaign);
    setSelectedCampaign(campaign);
  };

  // 테넌트를 열고 닫는 로직
  const toggleTenant = (tenantId: number) => {
    setExpandedTenants((prev) =>
      prev.includes(tenantId)
        ? prev.filter((id) => id !== tenantId)
        : [...prev, tenantId]
    );
  };

  return (
    <div className="flex">
      <aside
        ref={sidebarRef}
        style={{ width: isMenuOpen ? `${width}px` : "0" }}
        className="transition-all duration-300 ease-in-out bg-white border-r shadow-sm flex flex-col min-h-screen relative"
      >
        <nav className="h-full relative">
          <button
            onClick={toggleSidebar}
            className="toggle-btn transition-transform flex items-center justify-center"
          >
            <Image
              src="/sidebar-menu/sidebar-icon.svg"
              alt="Sidebar Toggle"
              width={24}
              height={24}
              className="object-contain"
            />
          </button>
          <div className="py-4">
            {isMenuOpen && (
              <>
                <h2 className="px-4 text-lg font-semibold mb-4">캠페인 목록</h2>
                <ISideBarMenuItemList
                  _tenantId={_tenantId}
                  tenants={tenants}
                  campaigns={campaigns}
                  expandedTenants={expandedTenants}
                  toggleTenant={toggleTenant}
                  handleCampaignClick={handleCampaignClick}
                />
              </>
            )}
          </div>
        </nav>

        <CustomAlert
          message={alertState.message}
          title={alertState.title}
          type={alertState.type}
          isOpen={alertState.isOpen}
          onClose={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
        />
      </aside>
      <div
        className="w-1 cursor-col-resize hover:bg-gray-300 active:bg-gray-400"
        onMouseDown={() => setIsResizing(true)}
      />
    </div>
  );
}
