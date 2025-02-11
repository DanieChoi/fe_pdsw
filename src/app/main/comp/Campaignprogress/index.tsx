"use client";

import React, { useState, useMemo } from 'react';
import DataGrid, { Column } from 'react-data-grid';
import { ChevronRight, ChevronDown } from 'lucide-react';
import 'react-data-grid/lib/styles.css';
import TitleWrap from "@/components/shared/TitleWrap";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/CustomSelect";
import { Label } from "@/components/ui/label";
import { CommonButton } from "@/components/shared/CommonButton";
import Image from "next/image";

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
  미발신건수: number;
  총발신건수: number;
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
      미발신건수: 4,
      총발신건수: 0,
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
          미발신건수: 4,
          총발신건수: 0,
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
              미발신건수: 4,
              총발신건수: 0,
              children: [
                {
                  id: 'OG0147-00234-1',
                  parentId: 'campaign-7',
                  level: 3,
                  발신구분: '최초발신',
                  시작구분: '멈춤',
                  완료구분: '진행중',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4,
                  미발신건수: 4,
                  총발신건수: 12,
                },
                {
                  id: 'OG0147-00234-2',
                  parentId: 'campaign-7',
                  level: 3,
                  발신구분: '최초발신',
                  시작구분: '중지',
                  완료구분: '진행중',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4,
                  미발신건수: 4,
                  총발신건수: 0,
                },
                {
                  id: 'OG0147-00234-3',
                  parentId: 'campaign-7',
                  level: 3,
                  발신구분: '최초발신',
                  시작구분: '시작',
                  완료구분: '진행중',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4,
                  미발신건수: 4,
                  총발신건수: 0,
                }
              ]
            },
            {
              id: 'campaign-8',
              parentId: 'task-124752',
              level: 2,
              hasChildren: false,
              발신구분: '',
              시작구분: '시작',
              완료구분: '',
              진행률: 0,
              리스트대비성공률: 0,
              발신대비성공률: 0,
              총리스트건수: 0,
              순수발신건수: 0,
              미발신건수: 4,
              총발신건수: 0,
            },
            {
              id: 'campaign-9',
              parentId: 'task-124752',
              level: 2,
              hasChildren: false,
              발신구분: '',
              시작구분: '시작',
              완료구분: '',
              진행률: 0,
              리스트대비성공률: 0,
              발신대비성공률: 0,
              총리스트건수: 0,
              순수발신건수: 0,
              미발신건수: 4,
              총발신건수: 0,
            },
            {
              id: 'campaign-10',
              parentId: 'task-124752',
              level: 2,
              hasChildren: false,
              발신구분: '',
              시작구분: '멈춤',
              완료구분: '',
              진행률: 0,
              리스트대비성공률: 0,
              발신대비성공률: 0,
              총리스트건수: 0,
              순수발신건수: 0,
              미발신건수: 4,
              총발신건수: 0,
            },
            {
              id: 'campaign-11',
              parentId: 'task-124752',
              level: 2,
              hasChildren: true,
              발신구분: '',
              시작구분: '멈춤',
              완료구분: '',
              진행률: 0,
              리스트대비성공률: 0,
              발신대비성공률: 0,
              총리스트건수: 0,
              순수발신건수: 0,
              미발신건수: 4,
              총발신건수: 0,
              children: [
                {
                  id: 'OG0147-00234-4',
                  parentId: 'campaign-11',
                  level: 3,
                  발신구분: '4번째발신',
                  시작구분: '멈춤',
                  완료구분: '완료',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4,
                  미발신건수: 4,
                  총발신건수: 0,
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
                  순수발신건수: 4,
                  미발신건수: 4,
                  총발신건수: 0,
                },
                {
                  id: 'OG0147-00234-6',
                  parentId: 'campaign-11',
                  level: 3,
                  발신구분: '최초발신',
                  시작구분: '멈춤',
                  완료구분: '진행중',
                  진행률: 25,
                  리스트대비성공률: 0,
                  발신대비성공률: 0,
                  총리스트건수: 4,
                  순수발신건수: 4,
                  미발신건수: 4,
                  총발신건수: 0,
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set(['center-1', 'task-124752']));
  const [selectedCampaign, setSelectedCampaign] = useState<string>('전체보기');
  const [selectedSkill, setSelectedSkill] = useState<string>('스킬전체보기');
  const [selectedStatus, setSelectedStatus] = useState<string>('전체');
  const [isSortAscending, setIsSortAscending] = useState<boolean>(true);

  // 캠페인 ID 목록 생성
  const campaignOptions = useMemo(() => {
    const campaigns = new Set(['전체보기']);
    const getCampaignIds = (rows: TreeRow[]) => {
      rows.forEach(row => {
        if (row.level === 2) {
          campaigns.add(row.id.split('-')[1]);
        }
        if (row.children) {
          getCampaignIds(row.children);
        }
      });
    };
    getCampaignIds(initialData);
    return Array.from(campaigns).sort((a, b) => {
      if (a === '전체보기') return -1;
      if (b === '전체보기') return 1;
      return parseInt(a) - parseInt(b);
    });
  }, []);

  const getFilteredData = (data: TreeRow[]): TreeRow[] => {
    const filterRow = (row: TreeRow): TreeRow | null => {
      let filteredChildren: TreeRow[] = [];
      
      if (row.children) {
        filteredChildren = row.children
          .map(child => filterRow(child))
          .filter((child): child is TreeRow => child !== null);
      }

      // 캠페인 필터
      const matchesCampaign = selectedCampaign === '전체보기' || 
        (row.level === 2 && row.id.split('-')[1] === selectedCampaign);

      // 스킬 필터 (level 3에만 적용)
      const matchesSkill = selectedSkill === '스킬전체보기' || 
        (row.level !== 3) || 
        (row.level === 3 && selectedSkill.includes(row.id.split('-')[1][0]));

      // 상태 필터
      const matchesStatus = selectedStatus === '전체' || 
        row.시작구분 === selectedStatus;

      // 부모 노드는 항상 표시, 필터는 최하위 노드에만 적용
      if (row.level < 2 || filteredChildren.length > 0) {
        return {
          ...row,
          children: filteredChildren.length > 0 ? filteredChildren : undefined,
          hasChildren: filteredChildren.length > 0
        };
      }

      if (matchesCampaign && matchesSkill && matchesStatus) {
        return row;
      }

      return null;
    };

    return data.map(row => filterRow(row)).filter((row): row is TreeRow => row !== null);
  };

  // 정렬 함수
  const getSortedData = (data: TreeRow[]): TreeRow[] => {
    const sortChildren = (rows: TreeRow[]): TreeRow[] => {
      const campaignRows = rows.filter(row => row.level === 2);
      const nonCampaignRows = rows.filter(row => row.level !== 2);

      const sortedCampaignRows = [...campaignRows].sort((a, b) => {
        const idA = parseInt(a.id.split('-')[1]);
        const idB = parseInt(b.id.split('-')[1]);
        return isSortAscending ? idA - idB : idB - idA;
      });

      const sortedRows = [...nonCampaignRows, ...sortedCampaignRows].map(row => ({
        ...row,
        children: row.children ? sortChildren(row.children) : undefined
      }));

      return sortedRows;
    };

    return sortChildren(data);
  };

  const filteredAndSortedData = useMemo(() => {
    const filteredData = getFilteredData(initialData);
    return getSortedData(filteredData);
  }, [selectedCampaign, selectedSkill, selectedStatus, isSortAscending]);

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
          displayName = `캠페인 아이디: ${row.id.split('-')[1]}`;
        } else {
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
      renderCell: ({ row }) => (row.진행률 ? `${row.진행률}%` : '')
    },
    {
      key: '리스트대비성공률',
      name: '리스트 대비 성공률(%)',
      renderCell: ({ row }) => (row.리스트대비성공률 ? `${row.리스트대비성공률}%` : '')
    },
    {
      key: '발신대비성공률',
      name: '발신 대비 성공률(%)',
      renderCell: ({ row }) => (row.발신대비성공률 ? `${row.발신대비성공률}%` : '')
    },
    {
      key: '총리스트건수',
      name: '총 리스트 건수',
      renderCell: ({ row }) => row.총리스트건수 || ''
    },
    {
      key: '순수발신건수',
      name: '순수발신 건수',
      renderCell: ({ row }) => row.순수발신건수 || ''
    },
    {
      key: '미발신건수',
      name: '미발신건수',
      renderCell: ({ row }) => row.미발신건수 || ''
    },
    {
      key: '총발신건수',
      name: '총발신건수',
      renderCell: ({ row }) => row.총발신건수 || ''
    }
  ];

  return (
    <div className="limit-width">
      <TitleWrap
        className="border-b border-gray-300 pb-3"
        title="상담원 상태"
      />
      <div className="flex items-center justify-between pb-3">
        <div className="flex gap-5">
          <div className='flex items-center gap-2'>
            <Label className="pr-2">캠페인</Label>
            <div className="w-[120px]">
              <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="전체보기" />
                </SelectTrigger>
                <SelectContent>
                  {campaignOptions.map((campaign) => (
                    <SelectItem key={campaign} value={campaign}>
                      {campaign}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Label className="pr-2">스킬 별로 보기</Label>
            <div className="w-[120px]">
              <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="스킬전체보기" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="스킬전체보기">스킬전체보기</SelectItem>
                  <SelectItem value="1번스킬">1번스킬</SelectItem>
                  <SelectItem value="2번스킬">2번스킬</SelectItem>
                  <SelectItem value="3번스킬">3번스킬</SelectItem>
                  <SelectItem value="4번스킬">4번스킬</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Label className="pr-2">상태 별로 보기</Label>
            <div className="w-[120px]">
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="전체" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="전체">전체</SelectItem>
                  <SelectItem value="시작">시작</SelectItem>
                  <SelectItem value="멈춤">멈춤</SelectItem>
                  <SelectItem value="중지">중지</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <button onClick={() => setIsSortAscending(!isSortAscending)}>
            <Image src="/sort_button.svg" alt="오름,내림차순 버튼" width={12} height={12} />
          </button>
        </div>
        <div className="flex justify-end gap-2">
          <CommonButton variant="secondary">엑셀로 저장</CommonButton>
          <CommonButton variant="secondary">칼럼 설정</CommonButton>
        </div>
      </div>
      <div className="h-[500px] w-full grid-custom-wrap">
        <DataGrid
          columns={columns}
          rows={flattenRows(filteredAndSortedData)}
          rowKeyGetter={rowKeyGetter}
          className="w-full h-auto grid-custom"
          rowHeight={26}
          headerRowHeight={26}
          rowClass={(row) => {
            if (row.level === 0 || row.level === 1) {
              return 'bg-[#fafafa]';
            } else if (row.level === 2) {
              return 'bg-[#f5faff]';
            }
            return '';
          }}
        />
      </div>
    </div>
  );
}