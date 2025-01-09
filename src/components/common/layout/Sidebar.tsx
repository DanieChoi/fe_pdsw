"use client"

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

type TreeItem = {
  id: string;
  label: string;
  type: 'folder' | 'campaign';
  status?: 'active' | 'pending' | 'stopped';
  children?: TreeItem[];
}

interface TreeNodeProps {
  item: TreeItem;
  level?: number;
  defaultOpen?: boolean;
}

const treeData: TreeItem[] = [
  {
    id: 'nexus',
    label: 'NEXUS',
    type: 'folder',
    children: [
      {
        id: 'default',
        label: '[1] DEFAULT',
        type: 'folder',
      },
      {
        id: 'skt',
        label: '[2] SKT',
        type: 'folder',
        children: [
          {
            id: 'profile',
            label: '로밍홍보',
            type: 'campaign',
            status: 'active'
          },
          {
            id: 'test1',
            label: 'test_00124',
            type: 'campaign',
            status: 'pending'
          },
          {
            id: 'test2',
            label: 'test_00124',
            type: 'campaign',
            status: 'pending'
          },
          {
            id: '1247',
            label: '1247 그룹',
            type: 'folder',
            children: [
              {
                id: 'campaign1',
                label: '카카오톡회원',
                type: 'campaign',
                status: 'active'
              },
              {
                id: 'campaign2',
                label: '카카오톡회원',
                type: 'campaign',
                status: 'stopped'
              },
              {
                id: 'campaign3',
                label: 'PDS_Web_Only',
                type: 'campaign',
                status: 'active'
              },
              {
                id: 'campaign4',
                label: 'test_00124',
                type: 'campaign',
                status: 'pending'
              }
            ]
          }
        ]
      },
      {
        id: 'kakao',
        label: '[3] KAKAO ENTER',
        type: 'folder',
      },
      {
        id: 'sk',
        label: '[4] SK렌트카',
        type: 'folder',
      }
    ]
  }
]

const TreeNode = ({ item, level = 0, defaultOpen = false }: TreeNodeProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'active':
        return '/sidebar-menu/tree_play.svg';
      case 'pending':
        return '/sidebar-menu/tree_pausse.svg';
      case 'stopped':
        return '/sidebar-menu/tree_stop.svg';
      default:
        return null;
    }
  }

  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="select-none">
      <div
        className={`flex items-center hover:bg-[#f1f3f5] rounded px-2 py-1 cursor-pointer ${level === 0 ? 'mt-1' : ''}`}
        onClick={item.type === 'folder' ? toggleOpen : undefined}
      >
        {item.type === 'folder' ? (
          <>
            <span className="w-4 h-4 mr-1 flex items-center justify-center">
              {isOpen ? (
                <img src="/sidebar-menu/arrow_minus.svg" alt="minus" className="h-3 w-3" />
              ) : (
                <img src="/sidebar-menu/arrow_plus.svg" alt="plus" className="h-3 w-3" />
              )}
            </span>
            <img src="/sidebar-menu/tree_folder.svg" alt="folder" className="h-4 w-4 mr-1" />
          </>
        ) : (
          <>
            <span className="w-4 h-4 mr-1" />
            {getStatusIcon(item.status) && (
              <img 
                src={getStatusIcon(item.status)} 
                alt={item.status} 
                className="h-4 w-4 mr-1"
              />
            )}
          </>
        )}

        <span className="text-sm text-[#212529] font-normal">
          {item.label}
        </span>
      </div>

      {item.type === 'folder' && isOpen && (
        <div className="ml-4">
          {item.children?.map((child) => (
            <TreeNode key={child.id} item={child} level={level + 1} defaultOpen={defaultOpen} />
          ))}
        </div>
      )}
    </div>
  )
}

interface SidebarProps {
  isMenuOpen?: boolean;
}

export default function Sidebar({ isMenuOpen = false }: SidebarProps) {
  const [width, setWidth] = useState(330); 
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);

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
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className="flex">
      <div ref={sidebarRef} className="bg-white border-r min-h-screen relative" style={{ width: `${width}px` }}>
        <div>
          <div className="flex items-center justify-between p-2 bg-lightgray-100 px-3 border-b">
            <div className="flex items-center">
              <img src="/sidebar-menu/tree_folder.svg" alt="folder" className="h-4 w-4 mr-2" />
              <span className="text-sm text-[#212529] font-normal">캠페인</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="h-6 px-2 text-[#212529] font-normal">
                필터
                <Plus className="h-4 w-4 ml-1" />
              </Button>
              <Button variant="ghost" size="sm" className="h-6 px-2 text-[#212529] font-normal">
                정렬
                <Plus className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          <div className="">
            {treeData.map((item) => (
              <TreeNode key={item.id} item={item} defaultOpen={isMenuOpen} />
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-1 cursor-col-resize hover:bg-gray-300 active:bg-gray-400"
        onMouseDown={() => setIsResizing(true)}
      />
    </div>
  )
}