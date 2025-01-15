"use client";

import React, { useState } from 'react';
import DataGrid, { Column } from 'react-data-grid';
import { ChevronRight, ChevronDown } from 'lucide-react';
import 'react-data-grid/lib/styles.css';

interface CampaignData {
  id: string;
  발신구분: string;
  시작구분: string;
  완료구분: string;
  진행률: number;
  리스트대비성공률: number;
  발신대비성공률: number;
  총리스트건수: number;
  순수발신건수: number;
}

interface TreeRow extends CampaignData {
  parentId?: string;
  isExpanded?: boolean;
  level: number;
  hasChildren?: boolean;
  children?: TreeRow[];
}

export default function CampaignMonitorDashboard() {
  const initialData: TreeRow[] = [
    {
      id: 'center-1',
      level: 0,
      hasChildren: true,
      발신구분: '',
      시작구분: '',
      완료구분: '',
      진행률: 0,
      리스트대비성공률: 0,
      발신대비성공률: 0,
      총리스트건수: 0,
      순수발신건수: 0,
      children: [
        {
          id: 'task-124752',
          parentId: 'center-1',
          level: 1,
          hasChildren: true,
          발신구분: '',
          시작구분: '',
          완료구분: '',
          진행률: 0,
          리스트대비성공률: 0,
          발신대비성공률: 0,
          총리스트건수: 0,
          순수발신건수: 0,
          children: [
            {
              id: 'campaign-7',
              parentId: 'task-124752',
              level: 2,
              hasChildren: true,
              발신구분: '',
              시작구분: '',
              완료구분: '',
              진행률: 0,
              리스트대비성공률: 0,
              발신대비성공률: 0,
              총리스트건수: 0,
              순수발신건수: 0,
              children: [
                {
                  id: 'OG0147-00234-1',
                  parentId: 'campaign-7',
                  level: 3,
                  발신구분: '최초발신',
                  시작구분: '업종',
                  완료구분: '진행중',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4
                },
                {
                  id: 'OG0147-00234-2',
                  parentId: 'campaign-7',
                  level: 3,
                  발신구분: '최초발신',
                  시작구분: '업종',
                  완료구분: '진행중',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4
                },
                {
                  id: 'OG0147-00234-3',
                  parentId: 'campaign-7',
                  level: 3,
                  발신구분: '최초발신',
                  시작구분: '업종',
                  완료구분: '진행중',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4
                }
              ]
            },
            {
              id: 'campaign-8',
              parentId: 'task-124752',
              level: 2,
              hasChildren: false,
              발신구분: '',
              시작구분: '',
              완료구분: '',
              진행률: 0,
              리스트대비성공률: 0,
              발신대비성공률: 0,
              총리스트건수: 0,
              순수발신건수: 0
            },
            {
              id: 'campaign-9',
              parentId: 'task-124752',
              level: 2,
              hasChildren: false,
              발신구분: '',
              시작구분: '',
              완료구분: '',
              진행률: 0,
              리스트대비성공률: 0,
              발신대비성공률: 0,
              총리스트건수: 0,
              순수발신건수: 0
            },
            {
              id: 'campaign-10',
              parentId: 'task-124752',
              level: 2,
              hasChildren: false,
              발신구분: '',
              시작구분: '',
              완료구분: '',
              진행률: 0,
              리스트대비성공률: 0,
              발신대비성공률: 0,
              총리스트건수: 0,
              순수발신건수: 0
            },
            {
              id: 'campaign-11',
              parentId: 'task-124752',
              level: 2,
              hasChildren: true,
              발신구분: '',
              시작구분: '',
              완료구분: '',
              진행률: 0,
              리스트대비성공률: 0,
              발신대비성공률: 0,
              총리스트건수: 0,
              순수발신건수: 0,
              children: [
                {
                  id: 'OG0147-00234-4',
                  parentId: 'campaign-11',
                  level: 3,
                  발신구분: '4번째발신',
                  시작구분: '중지',
                  완료구분: '완료',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4
                },
                {
                  id: 'OG0147-00234-5',
                  parentId: 'campaign-11',
                  level: 3,
                  발신구분: '2번째발신',
                  시작구분: '중지',
                  완료구분: '완료',
                  진행률: 12.5,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4
                },
                {
                  id: 'OG0147-00234-6',
                  parentId: 'campaign-11',
                  level: 3,
                  발신구분: '최초발신',
                  시작구분: '업종',
                  완료구분: '진행중',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  // 초기에는 센터, 태스크만 열림
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set(['center-1', 'task-124752']));

  const toggleRowExpand = (rowId: string) => {
    const newExpandedRows = new Set(expandedRows);
    if (expandedRows.has(rowId)) {
      newExpandedRows.delete(rowId);
    } else {
      newExpandedRows.add(rowId);
    }
    setExpandedRows(newExpandedRows);
  };

  function flattenRows(rows: TreeRow[]): TreeRow[] {
    let flat: TreeRow[] = [];
    rows.forEach((row) => {
      const isExpanded = expandedRows.has(row.id);
      flat.push({ ...row, isExpanded });
      if (row.children && isExpanded) {
        flat = flat.concat(flattenRows(row.children));
      }
    });
    return flat;
  }

  // 행 구분용 키 설정 (최신 react-data-grid에서 필수)
  const rowKeyGetter = (row: TreeRow) => row.id;

  const columns: Column<TreeRow>[] = [
    {
      key: 'campaignName',
      name: '캠페인 이름',
      width: 300,
      renderCell: ({ row }) => {
        const indent = row.level * 20;
        const showToggle = row.hasChildren;
        let displayName = '';

        if (row.level === 0) {
          displayName = '센터: NEXUS(1센터)';
        } else if (row.level === 1) {
          displayName = '태스크: 124752';
        } else if (row.level === 2) {
          // 예) campaign-7 → '7' 부분만 추출
          displayName = `캠페인 아이디: ${row.id.split('-')[1]}`;
        } else {
          // 레벨 3 이상: 실제 id 그대로
          displayName = row.id;
        }

        return (
          <div style={{ marginLeft: `${indent}px` }} className="flex items-center">
            {showToggle && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  toggleRowExpand(row.id);
                }}
                className="cursor-pointer mr-1"
              >
                {row.isExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </span>
            )}
            <span>{displayName}</span>
          </div>
        );
      }
    },
    { key: '발신구분', name: '발신구분', width: 100 },
    { key: '시작구분', name: '시작구분', width: 100 },
    { key: '완료구분', name: '완료구분', width: 100 },
    {
      key: '진행률',
      name: '진행률(%)',
      width: 100,
      renderCell: ({ row }) => (row.진행률 ? `${row.진행률}%` : '')
    },
    {
      key: '리스트대비성공률',
      name: '리스트 대비 성공률(%)',
      width: 150,
      renderCell: ({ row }) => (row.리스트대비성공률 ? `${row.리스트대비성공률}%` : '')
    },
    {
      key: '발신대비성공률',
      name: '발신 대비 성공률(%)',
      width: 150,
      renderCell: ({ row }) => (row.발신대비성공률 ? `${row.발신대비성공률}%` : '')
    },
    {
      key: '총리스트건수',
      name: '총 리스트 건수',
      width: 120,
      renderCell: ({ row }) => row.총리스트건수 || ''
    },
    {
      key: '순수발신건수',
      name: '순수발신 건수',
      width: 120,
      renderCell: ({ row }) => row.순수발신건수 || ''
    }
  ];

  return (
    <div className="p-4">
      <div className="h-[600px] w-full">
        <DataGrid
          columns={columns}
          rows={flattenRows(initialData)}
          rowKeyGetter={rowKeyGetter}
          className="w-full h-full"
          rowHeight={35}
          headerRowHeight={45}
        />
      </div>
    </div>
  );
}
