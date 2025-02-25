// import { FilterType, SortType } from '@/features/campaignManager/types/typeForSidebar2';
// import { FilterButtonForCampaign } from '../buttons/FilterButtonForCampaign';
// import { SortButtonForCampaign } from '../buttons/SortButtonForCampaign';
// import { SortButtonForAgent } from '../buttons/SortButtonForAgent';
// import FilterButtonForCounsellorGroup from '../buttons/FilterButtonForCounsellorGroup';
// import SortButtonForCounsellorGroup from '../buttons/SortButtonForCounsellorGroup';
// import IButtonForFilterCampaignAboutCheckedSkils from './IButtonForFilterCampaignAboutCheckedSkils';

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
//   switch (tabId) {
//     case 'campaign':
//       return (
//         <div className="flex items-center gap-2">
//           {/* <IButtonForFilterCampaignAboutCheckedSkils /> */}

//         </div>
//       );
//     case 'agent':
//       return (
//         <div className="flex items-center gap-2">
//           <SortButtonForAgent
//             onSort={onSort}
//             selectedSort={selectedSort}
//           />
//         </div>
//       );
//     case 'agent-group':
//       return (
//         <div className="flex items-center gap-2">
//           <FilterButtonForCounsellorGroup
//             // onFilter={onFilter}
//             // selectedFilter={selectedFilter}
//           />
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
import { SortButtonForAgent } from '../buttons/SortButtonForAgent';
import FilterButtonForCounsellorGroup from '../buttons/FilterButtonForCounsellorGroup';
import SortButtonForCounsellorGroup from '../buttons/SortButtonForCounsellorGroup';
import IButtonForFilterCampaignAboutCheckedSkils from './IButtonForFilterCampaignAboutCheckedSkils';
import IFilterButtonForCampaignTabHeader from './IFilterButtonForCampaignTabHeader';

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
  switch (tabId) {
    case 'campaign':
      return (
        <div className="flex items-center gap-2">
          {/* <IButtonForFilterCampaignAboutCheckedSkils /> */}
          <IFilterButtonForCampaignTabHeader />
          <SortButtonForCampaign
            onSort={onSort}
            selectedSort={selectedSort}
          />
        </div>
      );
    case 'agent':
      return (
        <div className="flex items-center gap-2">
          <SortButtonForAgent
            onSort={onSort}
            selectedSort={selectedSort}
          />
        </div>
      );
    case 'agent-group':
      return (
        <div className="flex items-center gap-2">
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