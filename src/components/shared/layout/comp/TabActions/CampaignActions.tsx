import { FilterType, SortType } from '@/features/campaignManager/types/typeForSidebar2';
import { FilterButtonForCampaign } from '../buttons/FilterButtonForCampaign';
import { SortButtonForCampaign } from '../buttons/SortButtonForCampaign';

interface CampaignActionsProps {
  onFilter: (type: FilterType) => void;
  onSort: (type: SortType) => void;
  selectedFilter: FilterType;
  selectedSort: SortType;
}

export function CampaignActions({
  onFilter,
  onSort,
  selectedFilter,
  selectedSort
}: CampaignActionsProps) {
  return (
    <div className="flex items-center gap-1">
      <FilterButtonForCampaign 
        onFilter={onFilter}
        selectedFilter={selectedFilter}
      />
      <SortButtonForCampaign 
        onSort={onSort}
        selectedSort={selectedSort}
      />
    </div>
  );
}