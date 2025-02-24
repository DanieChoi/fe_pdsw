
// "use client";

// import { useState, useEffect } from "react";
// import { create } from "zustand";
// import { baseTabs, TabId } from "@/features/campaignManager/components/data/baseTabs";
// import { TreeMenusForCampaigns } from "@/features/campaignManager/components/treeMenus/TreeMenusForCampaigns";
// import { TreeMenusForAgentTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForAgentTab";
// import { TreeMenusForAgentGroupTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForAgentGroupTab";
// import { TabActions } from "./comp/TabActions";
// import { BottomTabsForSideMenu } from "./BottomTabsForSideMenu";
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface SidebarToggleButtonProps {
//   isOpen: boolean;
//   onClick: () => void;
// }

// function SidebarToggleButton({ isOpen, onClick }: SidebarToggleButtonProps) {
//   return (
//     <button
//       onClick={onClick}
//       className="absolute -right-0 top-[85px] w-7 h-9 flex items-center justify-center
//                 bg-white border border-gray-300 rounded-lg shadow-sm
//                 hover:bg-gray-100 hover:border-gray-400
//                 transition-all duration-300 ease-in-out z-30"
//     >
//       {isOpen ? (
//         <ChevronLeft className="w-5 h-5 text-gray-600" />
//       ) : (
//         <ChevronRight className="w-5 h-5 text-gray-600" />
//       )}
//     </button>
//   );
// }

// interface SidebarWidthState {
//   width: number;
//   isOpen: boolean;
//   setWidth: (width: number) => void;
//   setIsOpen: (isOpen: boolean) => void;
// }

// export const useSidebarWidthStore = create<SidebarWidthState>((set) => ({
//   width: 240,
//   isOpen: true,
//   setWidth: (width: number) => set({ width }),
//   setIsOpen: (isOpen: boolean) => set({ isOpen }),
// }));

// export default function SidebarContainer() {
//   const storeWidth = useSidebarWidthStore(state => state.width);
//   const storeIsOpen = useSidebarWidthStore(state => state.isOpen);
//   const setStoreWidth = useSidebarWidthStore(state => state.setWidth);
//   const setStoreIsOpen = useSidebarWidthStore(state => state.setIsOpen);

//   const [selectedTabId, setSelectedTabId] = useState<TabId>("campaign");
//   const [isResizing, setIsResizing] = useState(false);

//   const handleResizeStart = () => {
//     setIsResizing(true);
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isResizing) return;
//     const newWidth = e.clientX;
//     const clampedWidth = Math.max(200, Math.min(600, newWidth));
//     setStoreWidth(clampedWidth);
//   };

//   const handleMouseUp = () => {
//     setIsResizing(false);
//   };

//   const toggleSidebar = () => {
//     setStoreIsOpen(!storeIsOpen);
//   };

//   useEffect(() => {
//     if (isResizing) {
//       window.addEventListener("mousemove", handleMouseMove);
//       window.addEventListener("mouseup", handleMouseUp);
//     }
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [isResizing]);

//   const renderTreeMenu = () => {
//     switch (selectedTabId) {
//       case "campaign":
//         return <TreeMenusForCampaigns />;
//       case "agent":
//         return <TreeMenusForAgentTab />;
//       case "agent-group":
//         return <TreeMenusForAgentGroupTab />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex h-full bg-white border-r relative">
//       <div 
//         className="flex flex-col transition-all duration-300 ease-in-out relative"
//         style={{ 
//           width: storeIsOpen ? `${storeWidth}px` : '30px',
//           minWidth: '30px'
//         }}
//       >
//         {/* Main Content Area */}
//         <div className="flex-1 relative flex flex-col min-h-0"> {/* min-h-0 추가 */}
//           <div className={`absolute inset-0 flex flex-col transition-all duration-300 ease-in-out
//                         ${!storeIsOpen ? 'invisible' : ''}`}>
//             {/* 상단 헤더 */}
//             <div className="flex-none flex items-center justify-between py-1.5 px-[17px] border-b">
//               <div className="flex items-center gap-2">
//                 <div className="text-sm text-[#444] font-medium flex gap-2 items-center">
//                   <div>
//                     {selectedTabId && (
//                       <Image 
//                         src={baseTabs.find((tab) => tab.id === selectedTabId)?.icon || "/tree-menu/campaign_icon_for_sidemenu.png"} 
//                         alt={baseTabs.find((tab) => tab.id === selectedTabId)?.label || "탭아이콘"} 
//                         width={baseTabs.find((tab) => tab.id === selectedTabId)?.iconWidth || 13} 
//                         height={baseTabs.find((tab) => tab.id === selectedTabId)?.iconHeight || 13} 
//                       />
//                     )}
//                   </div>
//                   {baseTabs.find((tab) => tab.id === selectedTabId)?.label}
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <TabActions tabId={selectedTabId} />
//               </div>
//             </div>

//             {/* 트리메뉴 영역 */}
//             <div className="flex-1 overflow-hidden min-h-0"> {/* min-h-0와 overflow-hidden 추가 */}
//               {renderTreeMenu()}
//             </div>
//           </div>
//         </div>

//         {/* 하단 탭 메뉴 - Always visible */}
//         <div className={`flex-none transition-all duration-300 ease-in-out 
//                       ${!storeIsOpen ? 'scale-x-[0.125] origin-left' : ''}`}>
//           <BottomTabsForSideMenu
//             selectedTabId={selectedTabId}
//             onTabChange={setSelectedTabId}
//           />
//         </div>
//       </div>

//       {/* 토글 버튼 */}
//       <SidebarToggleButton isOpen={storeIsOpen} onClick={toggleSidebar} />

//       {/* 리사이즈 핸들 */}
//       {storeIsOpen && (
//         <div
//           className="w-[1px] cursor-col-resize bg-[#FBFBFB] hover:bg-[#5BC2C1] active:bg-[#5BC2C1] group_col"
//           onMouseDown={handleResizeStart}
//         />
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { create } from "zustand";
import { baseTabs, TabId } from "@/features/campaignManager/components/data/baseTabs";
import { TreeMenusForCampaigns } from "@/features/campaignManager/components/treeMenus/TreeMenusForCampaigns";
import { TreeMenusForAgentTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForAgentTab";
import { TreeMenusForAgentGroupTab } from "@/features/campaignManager/components/treeMenus/TreeMenusForAgentGroupTab";
import { TabActions } from "./comp/TabActions";
import { BottomTabsForSideMenu } from "./BottomTabsForSideMenu";
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SidebarToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

function SidebarToggleButton({ isOpen, onClick }: SidebarToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute -right-0 top-[85px] w-7 h-9 flex items-center justify-center
                bg-white border border-gray-300 rounded-lg shadow-sm
                hover:bg-gray-100 hover:border-gray-400
                transition-all duration-300 ease-in-out z-30"
    >
      {isOpen ? (
        <ChevronLeft className="w-4 h-4 text-gray-600" />
      ) : (
        <ChevronRight className="w-4 h-4 text-gray-600" />
      )}
    </button>
  );
}

interface SidebarWidthState {
  width: number;
  isOpen: boolean;
  setWidth: (width: number) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const useSidebarWidthStore = create<SidebarWidthState>((set) => ({
  width: 240,
  isOpen: true,
  setWidth: (width: number) => set({ width }),
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));

export default function SidebarContainer() {
  const storeWidth = useSidebarWidthStore(state => state.width);
  const storeIsOpen = useSidebarWidthStore(state => state.isOpen);
  const setStoreWidth = useSidebarWidthStore(state => state.setWidth);
  const setStoreIsOpen = useSidebarWidthStore(state => state.setIsOpen);

  const [selectedTabId, setSelectedTabId] = useState<TabId>("campaign");
  const [isResizing, setIsResizing] = useState(false);

  const handleResizeStart = () => {
    setIsResizing(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return;
    const newWidth = e.clientX;
    const clampedWidth = Math.max(200, Math.min(600, newWidth));
    setStoreWidth(clampedWidth);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const toggleSidebar = () => {
    setStoreIsOpen(!storeIsOpen);
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  const renderTreeMenu = () => {
    switch (selectedTabId) {
      case "campaign":
        return <TreeMenusForCampaigns />;
      case "agent":
        return <TreeMenusForAgentTab />;
      case "agent-group":
        return <TreeMenusForAgentGroupTab />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full bg-white border-r relative">
      <div 
        className="flex flex-col transition-all duration-300 ease-in-out relative"
        style={{ 
          width: storeIsOpen ? `${storeWidth}px` : '30px',
          minWidth: '30px'
        }}
      >
        {/* Main Content Area */}
        <div className="flex-1 relative flex flex-col min-h-0">
          <div className={`absolute inset-0 flex flex-col transition-all duration-300 ease-in-out
                        ${!storeIsOpen ? 'invisible' : ''}`}>
            {/* 상단 헤더 */}
            <div className="flex-none flex items-center justify-between py-1.5 px-[17px] border-b">
              <div className="flex items-center gap-2">
                <div className="text-sm text-[#444] font-medium flex gap-2 items-center">
                  <div>
                    {selectedTabId && (
                      <Image 
                        src={baseTabs.find((tab) => tab.id === selectedTabId)?.icon || "/tree-menu/campaign_icon_for_sidemenu.png"} 
                        alt={baseTabs.find((tab) => tab.id === selectedTabId)?.label || "탭아이콘"} 
                        width={baseTabs.find((tab) => tab.id === selectedTabId)?.iconWidth || 13} 
                        height={baseTabs.find((tab) => tab.id === selectedTabId)?.iconHeight || 13} 
                      />
                    )}
                  </div>
                  {baseTabs.find((tab) => tab.id === selectedTabId)?.label}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TabActions tabId={selectedTabId} />
              </div>
            </div>

            {/* 트리메뉴 영역 - 스크롤 가능한 컨테이너 */}
            <div className="flex-1 min-h-0 relative">
              <div id="tree-menu-container" className="absolute inset-0 overflow-y-auto">
                {renderTreeMenu()}
              </div>
            </div>
          </div>
        </div>

        {/* 하단 탭 메뉴 */}
        <div className={`flex-none transition-all duration-300 ease-in-out 
                      ${!storeIsOpen ? 'scale-x-[0.125] origin-left' : ''}`}>
          <BottomTabsForSideMenu
            selectedTabId={selectedTabId}
            onTabChange={setSelectedTabId}
          />
        </div>
      </div>

      {/* 토글 버튼 */}
      <SidebarToggleButton isOpen={storeIsOpen} onClick={toggleSidebar} />

      {/* 리사이즈 핸들 */}
      {storeIsOpen && (
        <div
          className="w-[1px] cursor-col-resize bg-[#FBFBFB] hover:bg-[#5BC2C1] active:bg-[#5BC2C1] group_col"
          onMouseDown={handleResizeStart}
        />
      )}
    </div>
  );
}