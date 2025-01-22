// SidebarPresenter.tsx
import { Disclosure } from '@headlessui/react';
import { Button } from '@/components/ui/button';
import { Filter, SortAsc } from 'lucide-react';

type TreeItem = {
  id: string;
  label: string;
  type?: 'folder' | 'campaign';
  status?: 'active' | 'pending' | 'stopped';
  children?: TreeItem[];
};

type TreeData = {
  label: string;
  items: TreeItem[];
};

interface TreeNodeProps {
  item: TreeItem;
  level: number;
  expandedNodes: Set<string>;
  getStatusIcon: (status?: string) => string | null;
  onNodeToggle: (nodeId: string) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({
  item,
  level,
  expandedNodes,
  getStatusIcon,
  onNodeToggle
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedNodes.has(item.id);
  const statusIcon = getStatusIcon(item.status);

  return (
    <div className="select-none">
      <div 
        className="flex items-center hover:bg-gray-100 rounded px-2 py-1 cursor-pointer"
        onClick={() => hasChildren && onNodeToggle(item.id)}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        <div className="flex items-center w-full">
          {hasChildren ? (
            <img 
              src={`/sidebar-menu/arrow_${isExpanded ? 'minus' : 'plus'}.svg`}
              alt={isExpanded ? 'collapse' : 'expand'} 
              className="w-4 h-4 mr-1"
            />
          ) : (
            <span className="w-4 h-4 mr-1" />
          )}
          
          {item.type === 'folder' ? (
            <>
              {level === 0 && (
                <img src="/sidebar-menu/company_icon.svg" alt="company" className="w-4 h-4 mr-2" />
              )}
              {level > 0 && (
                <img src="/sidebar-menu/tree_folder.svg" alt="folder" className="w-4 h-4 mr-2" />
              )}
            </>
          ) : (
            statusIcon && <img src={statusIcon} alt="status" className="w-4 h-4 mr-2" />
          )}
          
          <span className="text-sm text-gray-800">{item.label}</span>
        </div>
      </div>
      {hasChildren && isExpanded && (
        <div>
          {item.children?.map(child => (
            <TreeNode 
              key={child.id} 
              item={child} 
              level={level + 1}
              expandedNodes={expandedNodes}
              getStatusIcon={getStatusIcon}
              onNodeToggle={onNodeToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface SidebarPresenterProps {
  width: number;
  activeAccordion: string | null;
  isResizing: boolean;
  expandedNodes: Set<string>;
  treeDataByAccordion: Record<string, TreeData>;
  getStatusIcon: (status?: string) => string | null;
  onAccordionClick: (key: string) => void;
  onNodeToggle: (nodeId: string) => void;
  onResizeStart: () => void;
}

export default function SidebarPresenter({
  width,
  activeAccordion,
  isResizing,
  expandedNodes,
  treeDataByAccordion,
  getStatusIcon,
  onAccordionClick,
  onNodeToggle,
  onResizeStart
}: SidebarPresenterProps) {
  return (
    <div className="flex h-full">
      <div className="bg-white border-r flex flex-col flex-none" style={{ width: `${width}px` }}>
        {/* 헤더 */}
        <div className="flex-none flex items-center justify-between p-2 bg-gray-50 px-3 border-b">
          <div className="flex items-center gap-2 py-1.5">
            <img src="/sidebar-menu/phone_icon.svg" alt="navigation" className="w-4 h-4" />
            <span className="text-sm text-gray-800 font-medium">캠페인</span>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs font-normal">
              필터
              <Filter className="h-3 w-3 ml-1" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs font-normal">
              정렬
              <SortAsc className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>

        {/* 메인 컨텐츠 영역 */}
        <div className="flex-1 min-h-0 overflow-auto">
          <div className="h-full flex flex-col">
            {/* 트리 메뉴 영역 */}
            <div className="flex-1 min-h-0 overflow-auto">
              {activeAccordion &&
                treeDataByAccordion[activeAccordion]?.items.map((item) => (
                  <TreeNode 
                    key={item.id} 
                    item={item} 
                    level={0}
                    expandedNodes={expandedNodes}
                    getStatusIcon={getStatusIcon}
                    onNodeToggle={onNodeToggle}
                  />
                ))}
            </div>

            {/* 하단 아코디언 */}
            <div className="flex-none border-t">
              {Object.entries(treeDataByAccordion).map(([key, data]) => (
                <Disclosure key={key} defaultOpen={key === 'accordion1'}>
                  {({ open }) => (
                    <div className="border-b last:border-b-0">
                      <Disclosure.Button
                        onClick={() => onAccordionClick(key)}
                        className={`w-full text-left py-2 px-4 hover:bg-gray-50 flex items-center justify-between ${
                          activeAccordion === key ? 'bg-gray-100' : ''
                        }`}
                      >
                        <div className="flex items-center">
                          <img 
                            src="/sidebar-menu/company_icon.svg" 
                            alt="company" 
                            className="w-4 h-4 mr-2" 
                          />
                          <span className={`text-sm ${activeAccordion === key ? 'text-blue-600' : 'text-gray-800'}`}>
                            {data.label}
                          </span>
                        </div>
                        <img 
                          src={`/sidebar-menu/arrow_${activeAccordion === key ? 'minus' : 'plus'}.svg`}
                          alt={activeAccordion === key ? 'collapse' : 'expand'}
                          className="w-4 h-4"
                        />
                      </Disclosure.Button>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 리사이즈 핸들 */}
      <div
        className="w-1 cursor-col-resize hover:bg-gray-300 active:bg-gray-400"
        onMouseDown={onResizeStart}
      />
    </div>
  );
}