import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { SortAsc } from "lucide-react"
import { SortType } from '@/features/campaignManager/types/typeForSidebar2';

interface SortButtonForCampaignProps {
  onSort?: (type: SortType) => void;
  selectedSort?: SortType;
}

const campaignSortOptions: Array<{ id: SortType; label: string }> = [
  { id: 'name', label: '이름으로 정렬' },
  { id: 'status', label: '상태로 정렬' }, // 예시로 'status'로 변경
];

export function SortButtonForCampaign({ 
  onSort, 
  selectedSort 
}: SortButtonForCampaignProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs font-normal">
          정렬
          <SortAsc className="h-3 w-3 ml-1" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-1" align="end">
        <div className="flex flex-col">
          {campaignSortOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onSort?.(option.id)}
              className={`flex items-center justify-between text-left px-2 py-1.5 text-xs hover:bg-gray-100 rounded
                ${selectedSort === option.id ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              {option.label}
              {selectedSort === option.id && (
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path 
                    fill="currentColor" 
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}