// SidebarContainer.tsx
import { useState, useEffect } from 'react';
import SidebarPresenter from './SidebarPresenter';

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

const treeDataByAccordion: Record<string, TreeData> = {
  accordion1: {
    label: 'NEXUS',
    items: [
      {
        id: 'nexus',
        label: 'NEXUS',
        type: 'folder',
        children: [
          { 
            id: 'default', 
            label: '[1] DEFAULT',
            type: 'folder'
          },
          {
            id: 'skt',
            label: '[2] SKT',
            type: 'folder',
            children: [
              { id: 'profile', label: '로밍홍보', type: 'campaign', status: 'stopped' },
              { id: 'test1', label: 'testtest_00124', type: 'campaign', status: 'pending' },
              { id: 'test2', label: 'testtest_00124', type: 'campaign', status: 'pending' },
              {
                id: '1247',
                label: '1247 그룹',
                type: 'folder',
                children: [
                  { id: 'kakao1', label: '카카오톡회원', type: 'campaign', status: 'active' },
                  { id: 'kakao2', label: '카카오톡회원', type: 'campaign', status: 'stopped' },
                  { id: 'kakao3', label: '카카오톡회원', type: 'campaign', status: 'pending' },
                ]
              },
              { id: 'pds', label: 'PDS_Web_Only', type: 'campaign', status: 'active' },
              { id: 'asdf', label: 'asldkjflkasdfkds', type: 'campaign', status: 'stopped' },
            ],
          },
          { 
            id: 'kakao', 
            label: '[3] KAKAO ENTER',
            type: 'folder'
          },
          { 
            id: 'sktenter', 
            label: '[4] SKT엔터키',
            type: 'folder'
          }
        ],
      },
    ],
  },
  accordion2: {
    label: '프로젝트 2',
    items: [
      {
        id: 'project2',
        label: 'Project 2',
        type: 'folder',
        children: [],
      },
    ],
  },
  accordion3: {
    label: '프로젝트 3',
    items: [
      {
        id: 'project3',
        label: 'Project 3',
        type: 'folder',
        children: [],
      },
    ],
  },
};

const getStatusIcon = (status?: string) => {
  switch (status) {
    case 'active':
      return '/sidebar-menu/tree_play.svg';
    case 'pending':
      return '/sidebar-menu/tree_pause.svg';
    case 'stopped':
      return '/sidebar-menu/tree_stop.svg';
    default:
      return null;
  }
};

export default function SidebarContainer() {
  const [width, setWidth] = useState(330);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('accordion1');
  const [isResizing, setIsResizing] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

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
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const handleAccordionClick = (key: string) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const handleNodeToggle = (nodeId: string) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  const handleResizeStart = () => {
    setIsResizing(true);
  };

  return (
    <SidebarPresenter
      width={width}
      activeAccordion={activeAccordion}
      isResizing={isResizing}
      expandedNodes={expandedNodes}
      treeDataByAccordion={treeDataByAccordion}
      getStatusIcon={getStatusIcon}
      onAccordionClick={handleAccordionClick}
      onNodeToggle={handleNodeToggle}
      onResizeStart={handleResizeStart}
    />
  );
}