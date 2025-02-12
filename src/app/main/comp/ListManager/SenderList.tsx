import React, { useState, useEffect } from "react";

// 공통 컴포넌트
import TitleWrap from "@/components/shared/TitleWrap";
// 데이터그리드
import DataGrid, { Column, CellClickArgs } from "react-data-grid";

interface SendRow {
  id: string;    
  fileId: number;
  CSKE: string;
  CSK2: string;
  CSK3: string;
  CSNA: string;
  TNO1: string;
  TNO2: string;
  TNO3: string;
  TNO4: string;
  TNO5: string;
  CSC1: string;
  CSC2: string;
  CSC3: string;
  CSC4: string;
  CSC5: string;
  CSC6: string;
  EMPLOYEEID: string;
  TKDA: string;
}

interface DataProps {
  no: number;
  division: number;
  startTime: string;
  endTime: string;
}

interface SenderListProps {
  headerData: Column<SendRow>[];
  _sendList: SendRow[];
}

const SenderList: React.FC<SenderListProps> = ({ headerData, _sendList }) => {
  
  // 그리드 선택 상태
  const [selectedSendRow, setSelectedSendRow] = useState<SendRow | null>(null);

  // 목록 데이터 상태
  const [sendList, setSendList] = useState<SendRow[]>([]);

  const [sendColumns, setSendColumns] = useState<Column<SendRow>[]>([]);
  
  // 행 클릭 핸들러
  const handleSendRowClick = ({ row }: CellClickArgs<SendRow>) => {
    setSelectedSendRow(row);
  };

  const getSendRowClass = (row: SendRow) => {
    return selectedSendRow?.id === row.id ? 'bg-[#FFFAEE]' : '';
  };
  
  useEffect(() => {
    if( headerData.length > 0 ) {     
      setSendColumns(headerData);
    }
    setSendList(_sendList);
  }, [headerData, _sendList]);
  
  return (
        <div className="w-1/2">
          <TitleWrap
            title="발신 목록"
            totalCount={sendList.length}
          />
          <div className="h-[300px] grid-custom-wrap">
            <DataGrid<SendRow>
              columns={sendColumns}
              rows={sendList}
              className="grid-custom cursor-pointer"
              rowHeight={26}
              headerRowHeight={26}
              rowKeyGetter={(row) => row.id}
              rowClass={getSendRowClass}
              onCellClick={handleSendRowClick}
              selectedRows={selectedSendRow ? new Set([selectedSendRow.id]) : new Set()}
            />
          </div>
        </div>

  );
};

export default SenderList;