
// import { FilterType, SortType } from '@/features/campaignManager/types/typeForSidebar2';
// import { FilterButtonForCampaign } from '../buttons/FilterButtonForCampaign';
// import { SortButtonForCampaign } from '../buttons/SortButtonForCampaign';
// import OptionButtonsForSideMenuAgentTab  from '../buttons/OptionButtonsForSideMenuAgentTab';
// import FilterButtonForCounsellorGroup from '../buttons/FilterButtonForCounsellorGroup';
// import SortButtonForCounsellorGroup from '../buttons/SortButtonForCounsellorGroup';
// import IButtonForFilterCampaignAboutCheckedSkils from './IButtonForFilterCampaignAboutCheckedSkils';
// import IFilterButtonForCampaignTabHeader from './IFilterButtonForCampaignTabHeader';

// // Zustand store for managing global sort state
// import { create } from 'zustand';

// // Define the sort state store
// interface SortState {
//   campaignSort: SortType;
//   setCampaignSort: (type: SortType) => void;
// }

// // Create the sort store
// export const useSortStore = create<SortState>((set) => ({
//   campaignSort: 'name', // Default sorting by name
//   setCampaignSort: (type: SortType) => set({ campaignSort: type }),
// }));

// interface TabActionsProps {
//   tabId: string;
//   onFilter?: (type: FilterType) => void;
//   onSort?: (type: SortType) => void;
//   selectedFilter?: FilterType;
//   selectedSort?: SortType;
// }

// export function TabActions({
//   tabId,
//   onFilter,
//   onSort,
//   selectedFilter,
//   selectedSort
// }: TabActionsProps) {
//   // Get the sort state and setter from the store
//   const { campaignSort, setCampaignSort } = useSortStore();
  
//   // Handle sort selection
//   const handleSort = (type: SortType) => {
//     // Update the global sort state
//     setCampaignSort(type);
    
//     // Call the onSort prop if provided (for backward compatibility)
//     if (onSort) {
//       onSort(type);
//     }
//   };

//   switch (tabId) {
//     case 'campaign':
//       return (
//         <div className="flex items-center gap-2">
//           {/* <IButtonForFilterCampaignAboutCheckedSkils /> */}
//           <IFilterButtonForCampaignTabHeader />
//           <SortButtonForCampaign
//             onSort={handleSort}
//             selectedSort={campaignSort} // Use the global state
//           />
//         </div>
//       );
//     case 'agent':
//       return (
//         <div className="flex items-center gap-2">
//           <OptionButtonsForSideMenuAgentTab
//           />
//         </div>
//       );
//     case 'agent-group':
//       return (
//         <div className="flex items-center gap-2">
//           <IFilterButtonForCampaignTabHeader />
//           <SortButtonForCounsellorGroup
//             // onSort={onSort}
//             // selectedSort={selectedSort}
//           />
//         </div>
//       );
//     default:
//       return null;
//   }
// }

import { FilterType, SortType } from '@/features/campaignManager/types/typeForSidebar2';
import { FilterButtonForCampaign } from '../buttons/FilterButtonForCampaign';
import { SortButtonForCampaign } from '../buttons/SortButtonForCampaign';
import OptionButtonsForSideMenuAgentTab  from '../buttons/OptionButtonsForSideMenuAgentTab';
import FilterButtonForCounsellorGroup from '../buttons/FilterButtonForCounsellorGroup';
import SortButtonForCounsellorGroup from '../buttons/SortButtonForCounsellorGroup';
import IButtonForFilterCampaignAboutCheckedSkils from './IButtonForFilterCampaignAboutCheckedSkils';
import IFilterButtonForCampaignTabHeader from './IFilterButtonForCampaignTabHeader';

// Zustand store for managing global sort state
import { create } from 'zustand';

// Define the sort state store
interface SortState {
  campaignSort: SortType;
  setCampaignSort: (type: SortType) => void;
}

// Create the sort store
export const useSortStore = create<SortState>((set) => ({
  campaignSort: 'name', // Default sorting by name
  setCampaignSort: (type: SortType) => set({ campaignSort: type }),
}));

interface TabActionsProps {
  tabId: string;
  onFilter?: (type: FilterType) => void;
  onSort?: (type: SortType) => void;
  selectedFilter?: FilterType;
  selectedSort?: SortType;
}

export function TabActions({
  tabId,
  onFilter,
  onSort,
  selectedFilter,
  selectedSort
}: TabActionsProps) {
  // Get the sort state and setter from the store
  const { campaignSort, setCampaignSort } = useSortStore();
  
  // Handle sort selection
  const handleSort = (type: SortType) => {
    // Update the global sort state
    setCampaignSort(type);
    
    // Call the onSort prop if provided (for backward compatibility)
    if (onSort) {
      onSort(type);
    }
  };

  switch (tabId) {
    case 'campaign':
      return (
        <div className="flex items-center gap-1 ml-auto">
          <IFilterButtonForCampaignTabHeader />
          <SortButtonForCampaign
            onSort={handleSort}
            selectedSort={campaignSort} // Use the global state
          />
        </div>
      );
    case 'agent':
      return (
        <div className="flex items-center gap-1 ml-auto">
          <OptionButtonsForSideMenuAgentTab
          />
        </div>
      );
    case 'agent-group':
      return (
        <div className="flex items-center gap-1 ml-auto">
          <IFilterButtonForCampaignTabHeader />
          <SortButtonForCounsellorGroup
            // onSort={onSort}
            // selectedSort={selectedSort}
          />
        </div>
      );
    default:
      return null;
  }
}