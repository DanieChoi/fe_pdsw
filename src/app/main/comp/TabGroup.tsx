// "use client";

// import React from 'react';
// import { useDroppable } from '@dnd-kit/core';
// import { X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import DraggableTab from './DraggableTab';
// import { useTabStore } from '@/store/tabStore';
// import { TabItem } from '@/store/tabStore';
// import TabContent from './TabContent';

// interface TabGroupProps {
//   id: string;
//   tabs: TabItem[];
//   position: { x: number; y: number };
// }

// const TabGroup: React.FC<TabGroupProps> = ({ id, tabs, position }) => {
//   const { removeTabGroup, activeTabId, activeTabKey, setActiveTab, removeTab } = useTabStore();

//   const { setNodeRef, isOver } = useDroppable({
//     id: `group-${id}`,
//     data: {
//       type: 'group',
//       id
//     }
//   });

//   return (
//     <div
//       ref={setNodeRef}
//       className={`
//         bg-white rounded-lg shadow-sm border border-gray-200
//         ${isOver ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}
//       `}
//       style={{
//         transform: `translate(${position.x}px, ${position.y}px)`
//       }}
//     >
//       {/* 탭 그룹 헤더 */}
//       <div className="flex items-center justify-between p-2 border-b border-gray-200">
//         <div className="flex-1 flex space-x-1 overflow-x-auto">
//           {tabs.map((tab) => (
//             <DraggableTab
//               key={tab.uniqueKey}  // key를 uniqueKey로 변경
//               id={tab.id}
//               uniqueKey={tab.uniqueKey} // uniqueKey 추가
//               title={tab.title}
//               //icon={tab.icon}
//               isActive={activeTabId === tab.id && activeTabKey === tab.uniqueKey}
//               onRemove={() => removeTab(tab.id, tab.uniqueKey)} // uniqueKey 추가
//               onSelect={() => setActiveTab(tab.id, tab.uniqueKey)} // uniqueKey 추가
//               rowId={id}
//               sectionId={id}
//             />
//           ))}
//         </div>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => removeTabGroup(id)}
//           className="ml-2 p-1 hover:bg-gray-100 rounded-full"
//         >
//           <X className="h-4 w-4" />
//         </Button>
//       </div>

//       {/* 탭 그룹 컨텐츠 */}
//       <div className="p-4">
//         <TabContent />
//       </div>
//     </div>
//   );
// };

// export default TabGroup;

import React from 'react'

interface Props {
  id: string;
  tabs: { id: string; uniqueKey: string; title: string }[];
  position: { x: number; y: number };
}

const TabGroup = (props: Props) => {
  return (
    <div>
      
    </div>
  )
}

export default TabGroup
