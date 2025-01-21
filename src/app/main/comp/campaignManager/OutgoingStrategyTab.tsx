import React, { useState } from 'react';
import TitleWrap from "@/components/shared/TitleWrap";
import { CommonButton } from "@/components/shared/CommonButton";
import DataGrid from 'react-data-grid';
import type { Column } from 'react-data-grid';

interface MaxCallsRow {
  call1: number;
  call2: number;
  call3: number;
  call4: number;
  call5: number;
}

interface MainRow {
  id: string;
  count1: number;
  duration1: number;
  count2: number;
  duration2: number;
  count3: number;
  duration3: number;
  count4: number;
  duration4: number;
  count5: number;
  duration5: number;
  count6: number;
  duration6: number;
}

// Column 타입을 확장하여 children 속성 추가
interface CustomColumn<R> extends Column<R> {
  children?: CustomColumn<R>[];
}

const EditableCell = ({ row, column, onRowChange }: any) => {
  return (
    <input
      className="w-full h-full text-center bg-white border-none outline-none"
      type="number"
      value={row[column.key]}
      onChange={(e) => {
        const newValue = parseInt(e.target.value) || 0;
        onRowChange({ ...row, [column.key]: newValue });
      }}
    />
  );
};

const OutgoingStrategyTab = () => {
  const [maxCallsRows, setMaxCallsRows] = useState<MaxCallsRow[]>([
    {
      call1: 3,
      call2: 7,
      call3: 7,
      call4: 7,
      call5: 7,
    }
  ]);

  const [rows, setRows] = useState<MainRow[]>([
    { id: '전화번호1', count1: 2, duration1: 0, count2: 1, duration2: 0, count3: 1, duration3: 0, count4: 1, duration4: 0, count5: 1, duration5: 0, count6: 1, duration6: 0 },
    { id: '전화번호2', count1: 1, duration1: 0, count2: 1, duration2: 0, count3: 1, duration3: 0, count4: 1, duration4: 0, count5: 1, duration5: 0, count6: 1, duration6: 0 },
    { id: '전화번호3', count1: 1, duration1: 0, count2: 1, duration2: 0, count3: 1, duration3: 0, count4: 1, duration4: 0, count5: 1, duration5: 0, count6: 1, duration6: 0 },
    { id: '전화번호4', count1: 1, duration1: 0, count2: 1, duration2: 0, count3: 1, duration3: 0, count4: 1, duration4: 0, count5: 1, duration5: 0, count6: 1, duration6: 0 },
    { id: '전화번호5', count1: 1, duration1: 0, count2: 1, duration2: 0, count3: 1, duration3: 0, count4: 1, duration4: 0, count5: 1, duration5: 0, count6: 1, duration6: 0 }
  ]);

  const maxCallsColumns: Column<MaxCallsRow>[] = [
    { key: 'call1', name: '고객 전화번호(1)', renderCell: EditableCell },
    { key: 'call2', name: '고객 전화번호(2)', renderCell: EditableCell },
    { key: 'call3', name: '고객 전화번호(3)', renderCell: EditableCell },
    { key: 'call4', name: '고객 전화번호(4)', renderCell: EditableCell },
    { key: 'call5', name: '고객 전화번호(5)', renderCell: EditableCell },
  ];

  const mainColumns: CustomColumn<MainRow>[] = [
    { 
      key: 'id', 
      name: '전화번호', 
      frozen: true,
      cellClass: 'bg-[#f8f8f8]',
      headerCellClass: '!p-0'
    },
    { 
      key: 'section1',
      name: '통화중 실패',
      children: [
        { key: 'count1', name: '횟수',  renderCell: EditableCell },
        { key: 'duration1', name: '긴급',  renderCell: EditableCell },
      ],
    },
    {
      key: 'section2',
      name: '무응답 실패',
      width: 120,
      children: [
        { key: 'count2', name: '횟수',  renderCell: EditableCell },
        { key: 'duration2', name: '긴급',  renderCell: EditableCell },
      ],
    },
    {
      key: 'section3',
      name: '목소/전화번호 오류',
      children: [
        { key: 'count3', name: '횟수',  renderCell: EditableCell },
        { key: 'duration3', name: '긴급',  renderCell: EditableCell },
      ],
    },
    {
      key: 'section4',
      name: '기계음 실패',
      children: [
        { key: 'count4', name: '횟수', renderCell: EditableCell },
        { key: 'duration4', name: '긴급', renderCell: EditableCell },
      ],
    },
    {
      key: 'section5',
      name: '기타 실패',
      children: [
        { key: 'count5', name: '횟수', renderCell: EditableCell },
        { key: 'duration5', name: '긴급',  renderCell: EditableCell },
      ],
    },
    {
      key: 'section6',
      name: '고객 바로 끊음',
      children: [
        { key: 'count6', name: '횟수', renderCell: EditableCell },
        { key: 'duration6', name: '긴급',  renderCell: EditableCell },
      ],
    },
  ];

  const handleMaxCallsRowsChange = (newRows: MaxCallsRow[]) => {
    setMaxCallsRows(newRows);
  };

  const handleMainRowsChange = (newRows: MainRow[]) => {
    setRows(newRows);
  };

  return (
    <div className="py-5">
      <div className="flex flex-col gap-4">
        <div>
          <TitleWrap
            className="pb-1"
            title="전화번호별 최대 링 횟수"
          />
          <div className="grid-custom-wrap w-full">
            <DataGrid
              columns={maxCallsColumns}
              rows={maxCallsRows}
              onRowsChange={handleMaxCallsRowsChange}
              className="grid-custom row-none"
              rowHeight={26}
            />
          </div>
        </div>
        <div>
          <TitleWrap
            className="pb-1"
            title="재시도 전략 설정"
            buttons={[
              { label: "초기화", onClick: () => console.log(""), variant: "secondary" },
          ]}
          />
          <div className="grid-custom-wrap overflow-auto w-full h-[184px]">
            <DataGrid
              columns={mainColumns}
              rows={rows}
              onRowsChange={handleMainRowsChange}
              className="grid-custom row-none"
              rowHeight={26}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-5">
        <CommonButton variant="secondary">확인</CommonButton>
        <CommonButton variant="secondary">취소</CommonButton>
      </div>
    </div>
  );
};

export default OutgoingStrategyTab;