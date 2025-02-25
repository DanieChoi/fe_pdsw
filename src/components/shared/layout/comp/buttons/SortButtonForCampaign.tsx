// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { Button } from "@/components/ui/button"
// import Image from 'next/image'
// import { SortType } from '@/features/campaignManager/types/typeForSidebar2';

// interface SortButtonForCampaignProps {
//   onSort?: (type: SortType) => void;
//   selectedSort?: SortType;
// }

// const campaignSortOptions: Array<{ id: any; label: string }> = [
//   { id: 'name', label: '이름으로 정렬' },
//   { id: 'id', label: '아이디로 정렬' }, // 예시로 'status'로 변경
// ];

// export function SortButtonForCampaign({ 
//   onSort, 
//   selectedSort 
// }: SortButtonForCampaignProps) {
//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button variant="ghost" size="sm" className="h-6 px-0 text-sm font-normal gap-1 text-[#888] hover:bg-transparent">
//           정렬
//           <Image 
//               src={`/tree-menu/array.png`} 
//               alt={`정렬`} 
//               width={9} 
//               height={10} 
//             />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-32 p-1" align="end">
//         <div className="flex flex-col">
//           {campaignSortOptions.map((option) => (
//             <button
//               key={option.id}
//               onClick={() => onSort?.(option.id)}
//               className={`flex items-center justify-between text-left px-2 py-1.5 text-xs hover:bg-gray-100 rounded
//                 ${selectedSort === option.id ? 'bg-blue-50 text-blue-600' : ''}`}
//             >
//               {option.label}
//               {selectedSort === option.id && (
//                 <svg className="w-4 h-4" viewBox="0 0 24 24">
//                   <path 
//                     fill="currentColor" 
//                     d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
//                   />
//                 </svg>
//               )}
//             </button>
//           ))}
//         </div>
//       </PopoverContent>
//     </Popover>
//   );
// }

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { SortType } from '@/features/campaignManager/types/typeForSidebar2';
import { AlignCenter, Hash, Check, SortAsc } from "lucide-react";

interface SortButtonForCampaignProps {
  onSort?: (type: SortType) => void;
  selectedSort?: SortType;
}

const campaignSortOptions: Array<{ id: any; label: string, icon: React.ReactNode }> = [
  { 
    id: 'name', 
    label: '이름으로 정렬',
    icon: <AlignCenter className="w-3 h-3 mr-1" />
  },
  { 
    id: 'id', 
    label: '아이디로 정렬',
    icon: <Hash className="w-3 h-3 mr-1" />
  },
];

export function SortButtonForCampaign({ 
  onSort, 
  selectedSort 
}: SortButtonForCampaignProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-6 px-2 text-sm font-normal gap-1 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          정렬
          <SortAsc className="w-3 h-3" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-1" align="end">
        <div className="flex flex-col">
          {campaignSortOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onSort?.(option.id)}
              className={`flex items-center justify-between text-left px-2 py-1.5 text-xs hover:bg-gray-100 rounded
                ${selectedSort === option.id ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-800'}`}
            >
              <div className="flex items-center">
                {option.icon}
                {option.label}
              </div>
              {selectedSort === option.id && (
                <Check className="w-4 h-4" />
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}