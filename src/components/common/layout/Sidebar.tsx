"use client"

import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronRight, Phone, Folder } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

type TreeItem = {
  id: string;
  label: string;
  type: 'folder' | 'campaign';
  status?: 'active' | 'pending' | 'stopped';
  children?: TreeItem[];
}

const treeData: TreeItem[] = [
  {
    id: 'nexus',
    label: 'NEXUS',
    type: 'folder',
    children: [
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
            label: 'testtest_00124',
            type: 'campaign',
            status: 'pending'
          },
          {
            id: 'test2',
            label: 'testtest_00124',
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
                label: 'asldkfjlkasdfkds',
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

const TreeNode = ({ item, level = 0 }: { item: TreeItem; level?: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'active':
        return 'text-green-500';
      case 'pending':
        return 'text-blue-500';
      case 'stopped':
        return 'text-red-500';
      default:
        return 'text-gray-400';
    }
  }

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'active':
      case 'pending':
      case 'stopped':
        return '●';
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
                <ChevronDown className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </span>
            {hasChildren && <Folder className="h-4 w-4 mr-1 text-gray-400" />}
          </>
        ) : (
          <span className="w-4 h-4 mr-1 flex items-center justify-center">
            <Phone className="h-4 w-4 text-gray-400" />
          </span>
        )}

        <span className={getStatusColor(item.status)}>
          {item.status && (
            <span className="mr-1">{getStatusIcon(item.status)}</span>
          )}
        </span>

        <span className="text-sm text-[#212529] font-normal">
          {item.label}
        </span>
      </div>

      {item.type === 'folder' && isOpen && (
        <div className="ml-4">
          {item.children?.map((child) => (
            <TreeNode key={child.id} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Sidebar() {
  const [width, setWidth] = useState(330); // Default width 256px
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      
      const newWidth = e.clientX;
      if (newWidth >= 200 && newWidth <= 600) { // Min and max width constraints
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
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm text-[#212529] font-normal">캠페인</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="h-6 px-2 text-[#212529] font-normal">
                필터
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
              <Button variant="ghost" size="sm" className="h-6 px-2 text-[#212529] font-normal">
                정렬
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          <div className="">
            {treeData.map((item) => (
              <TreeNode key={item.id} item={item} />
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