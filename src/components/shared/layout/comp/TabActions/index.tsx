// import { FilterType } from '@/features/campaignManager/types/typeForSidebar2';
// import { SortButtonForCampaign } from '../buttons/SortButtonForCampaign';
// import OptionButtonsForSideMenuAgentTab from '../buttons/OptionButtonsForSideMenuAgentTab';
// import SortButtonForCounsellorGroup from '../buttons/SortButtonForCounsellorGroup';
// import IFilterButtonForCampaignTabHeader from './IFilterButtonForCampaignTabHeader';
// import { useSortStore, SortOption } from '@/store/storeForSideBarCampaignSort';
// import ISearchButtonForFindForGroupOrCampaign from '../buttons/ISearchButtonForFindForGroupOrCampaign';

// interface TabActionsProps {
//   tabId: string;
//   onFilter?: (type: FilterType) => void;
//   // These props are for backward compatibility
//   onSort?: (type: any) => void;
//   selectedFilter?: FilterType;
//   selectedSort?: any;
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

//   // Handle sort selection with new option format
//   const handleSort = (option: SortOption) => {
//     // Update the global sort state
//     setCampaignSort(option);

//     // Call the onSort prop if provided (for backward compatibility)
//     if (onSort) {
//       // Only pass the type for backward compatibility
//       onSort(option.type);
//     }
//   };

//   switch (tabId) {
//     case 'campaign':
//       return (
//         <div className="flex items-center gap-[10px]">
//           <IFilterButtonForCampaignTabHeader />
//           <SortButtonForCampaign
//             onSort={handleSort}
//             selectedSort={campaignSort} // Use the global state
//           />
//         </div>
//       );
//     case 'agent':
//       return (
//         <div className="flex items-center gap-[10px]">
//           <OptionButtonsForSideMenuAgentTab />
//         </div>
//       );
//     case 'campaign-group':
//       return (
//         <div className="flex items-center gap-[10px]">
//           {/* The search button now directly uses the store */}
//           <ISearchButtonForFindForGroupOrCampaign />
//           <IFilterButtonForCampaignGroupTabHeader />
//         </div>
//       );
//     default:
//       return null;
//   }
// }

import { FilterType } from '@/features/campaignManager/types/typeForSidebar2';
import { SortButtonForCampaign } from '../buttons/SortButtonForCampaign';
import OptionButtonsForSideMenuAgentTab from '../buttons/OptionButtonsForSideMenuAgentTab';
import SortButtonForCounsellorGroup from '../buttons/SortButtonForCounsellorGroup';
import IFilterButtonForCampaignTabHeader from './IFilterButtonForCampaignGroupTabHeader';
import { useSortStore, SortOption } from '@/store/storeForSideBarCampaignSort';
import ISearchButtonForFindForGroupOrCampaign from '../buttons/ISearchButtonForFindForGroupOrCampaign';
import IFilterButtonForCampaignGroupTabHeader from './IFilterButtonForCampaignGroupTabHeader';

interface TabActionsProps {
  tabId: string;
  onFilter?: (type: FilterType) => void;
  // These props are for backward compatibility
  onSort?: (type: any) => void;
  selectedFilter?: FilterType;
  selectedSort?: any;
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

  // Handle sort selection with new option format
  const handleSort = (option: SortOption) => {
    // Update the global sort state
    setCampaignSort(option);

    // Call the onSort prop if provided (for backward compatibility)
    if (onSort) {
      // Only pass the type for backward compatibility
      onSort(option.type);
    }
  };

  switch (tabId) {
    case 'campaign':
      return (
        <div className="flex items-center gap-[10px]">
          <IFilterButtonForCampaignTabHeader />
          <SortButtonForCampaign
            onSort={handleSort}
            selectedSort={campaignSort} // Use the global state
          />
        </div>
      );
    case 'agent':
      return (
        <div className="flex items-center gap-[10px]">
          <OptionButtonsForSideMenuAgentTab />
        </div>
      );
    case 'campaign-group':
      return (
        <div className="flex items-center gap-[10px]">
          <ISearchButtonForFindForGroupOrCampaign />
          <IFilterButtonForCampaignGroupTabHeader />
        </div>
      );
    default:
      return null;
  }
}