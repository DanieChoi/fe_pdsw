import React, { useState, useMemo } from "react";
import * as XLSX from 'xlsx';

// 공통 컴포넌트
import TitleWrap from "@/components/shared/TitleWrap";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
import CustomAlert from "@/components/shared/layout/CustomAlert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/CustomSelect";
import {
  CommonRadio,
  CommonRadioItem,
} from "@/components/shared/CommonRadio";

// 데이터그리드
import DataGrid, { Column, CellClickArgs } from "react-data-grid";

// 모달
import FileFormat,{FormatRowData} from './FileFormat';
import LoadingModal from './LoadingModal';


// 인터페이스
interface FileRow {
  id: number;
  fileName: string;
  campaignId: string;
  fileSize: string;
  deletable: boolean;
}

interface SendRow {
  id: number;    
  no: string;
  no2: string;
  no3: string;
  name: string;
  number: string;
  number2: string;
  number3: string;
}

interface ProgressRow {
  id: number;
  datetime: string;
  message: string;
}

const ListManager: React.FC = () => {
  const [delimiter, setDelimiter] = useState<string>('');
  // 아이디 생성용 카운터
  const [nextId, setNextId] = useState(1);
  
  // 모달 상태
  const [isFileFormatOpen, setIsFileFormatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // 파일 관련 상태
  const [targetType, setTargetType] = useState<"general" | "blacklist">("general");
  const [uploadedFiles, setUploadedFiles] = useState<FileRow[]>([]);
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  
  // 그리드 선택 상태
  const [selectedSendRow, setSelectedSendRow] = useState<SendRow | null>(null);
  const [selectedProgressRow, setSelectedProgressRow] = useState<ProgressRow | null>(null);
  const [selectedFile, setSelectedFile] = useState<FileRow | null>(null);

  // 목록 데이터 상태
  const [sendList] = useState<SendRow[]>([
    {
      id: 1,
      no: "0001",
      no2: "",
      no3: "",
      name: "홍길동",
      number: "0102234567",
      number2: "",  
      number3: "", 
    },
    {
      id: 2,
      no: "0001",
      no2: "홍보몰",
      no3: "",
      name: "홍길동",
      number: "0102234567",
      number2: "",
      number3: "",
    },
  ]);

  const [progressList] = useState<ProgressRow[]>([
    {
      id: 1,
      datetime: "10:54:28",
      message: "현재 작업을 진행 하겠습니다. 진행하겠습니다. [ 1 ]",
    },
    {
      id: 2,
      datetime: "10:54:28",
      message: "파일분석시작 : C:/Users/WDeskstop/Work/발신리스트_20250228.txt...",
    },
  ]);

  // 모달 핸들러
  const handleFileFormatOpen = () => setIsFileFormatOpen(true);
  const handleFileFormatClose = () => setIsFileFormatOpen(false);

  const tempSendColumns = useMemo<Column<SendRow>[]>(() => [
    { key: "no", name: "고객키[1]" },
    { key: "no2", name: "고객키[2]" },
    { key: "no3", name: "고객키[3]" },
    { key: "name", name: "고객이름" },
    { key: "number", name: "고객전화번호[1]" },
    { key: "number2", name: "고객전화번호[2]" },
    { key: "number3", name: "고객전화번호[3]" },
  ], []);

  const [sendColumns, setSendColumns] = useState<Column<SendRow>[]>(tempSendColumns);
  
  //파일포맷설정 확인 이벤트.
  const handleFileFormatConfirm = (data:FormatRowData) => {
    setIsFileFormatOpen(false);
    setDelimiter(data.delimiter);
    const tempList: Column<SendRow>[] = data.datalist.map((tempData) => ({
      key: tempData.field,
      name: tempData.name
    }));  
    setSendColumns(tempList);
  };

  // 파일 관련 핸들러
  const handleTargetTypeChange = (value: string) => {
    setTargetType(value as "general" | "blacklist");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const newFileData: FileRow = {
        id: nextId,
        fileName: file.name,
        campaignId: targetType === "general" ? "G123" : "B456",
        fileSize: (file.size / 1024).toFixed(2) + " KB",
        deletable: false,
      };
      setUploadedFiles((prev) => [...prev, newFileData]);
      setSelectedFileName(file.name);
      setNextId(nextId + 1);


      const reader = new FileReader();
      if( file.name.indexOf('.xls') > -1 ){
        reader.onload = (event) => {
          const fileContent = event.target?.result;
          
          if (fileContent) {
            const workbook = XLSX.read(fileContent, { type: 'array' });
    
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
    
            const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); // `header: 1` means treat the first row as header
    
            console.log("Excel Data:", data);
          }

        };
        reader.readAsArrayBuffer(file);
      }else{
        reader.onload = (event) => {
          const fileContent = event.target?.result;        
          // Now, you can process fileContent here
          console.log("File content:", fileContent);
        };
        reader.readAsText(file);
      }
      // Handle file reading errors
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
    }
  };
 
  // 새 작업대상 핸들러
  const handleNewTarget = () => {
    setSelectedFileName("");
    setTargetType("general");
    setSelectedFile(null);
  };

  // 작업대상 올리기
  const triggerFileInput = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    if (fileInput) fileInput.click();
  };

  // 삭제 핸들러
  const handleDeleteFile = () => {
    if (selectedFile) {
      setUploadedFiles(prev => prev.filter(file => file.id !== selectedFile.id));
      setSelectedFile(null);
      setSelectedFileName("");
    }
  };

  // 행 클릭 핸들러
  const handleSendRowClick = ({ row }: CellClickArgs<SendRow>) => {
    setSelectedSendRow(row);
  };

  const handleProgressRowClick = ({ row }: CellClickArgs<ProgressRow>) => {
    setSelectedProgressRow(row);
  };

  const handleFileRowClick = ({ row }: CellClickArgs<FileRow>) => {
    setSelectedFile(row);
    setSelectedFileName(row.fileName);
    setTargetType(row.campaignId.startsWith('G') ? 'general' : 'blacklist');
  };

  // rowClass 함수들
  const getFileRowClass = (row: FileRow) => {
    return selectedFile?.id === row.id ? 'bg-[#FFFAEE]' : '';
  };
  
  const getSendRowClass = (row: SendRow) => {
    return selectedSendRow?.id === row.id ? 'bg-[#FFFAEE]' : '';
  };
  
  const getProgressRowClass = (row: ProgressRow) => {
    return selectedProgressRow?.id === row.id ? 'bg-[#FFFAEE]' : '';
  };

  // 데이터그리드 컬럼 정의
  const columns = useMemo<Column<FileRow>[]>(() => [
    { key: "fileName", name: "파일 이름" },
    { key: "campaignId", name: "캠페인 ID" },
    { key: "fileSize", name: "파일 크기" },
    {
      key: "deletable",
      name: "삭제 여부",
      formatter: ({ row }: { row: FileRow }) => (
        <CustomCheckbox
          checked={row.deletable}
          onChange={() =>
            setUploadedFiles((prev) =>
              prev.map((file) =>
                file.id === row.id
                  ? { ...file, deletable: !file.deletable }
                  : file
              )
            )
          }
        />
      ),
    },
  ], []);

  const progressColumns = useMemo<Column<ProgressRow>[]>(() => [
    { key: "datetime", name: "시간" },
    { key: "message", name: "처리내용" },
  ], []);

  // selectedRows 메모이제이션
  const selectedFileRows = useMemo<Set<number>>(() => 
    selectedFile ? new Set([selectedFile.id]) : new Set()
  , [selectedFile]);

  const selectedSendRows = useMemo(() => 
    selectedSendRow ? new Set([selectedSendRow.id]) : new Set()
  , [selectedSendRow]);

  const selectedProgressRows = useMemo(() => 
    selectedProgressRow ? new Set([selectedProgressRow.id]) : new Set()
  , [selectedProgressRow]);



   // 알림창 관련 상태
   const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    title: '알림',
    type: '1',
    onConfirm: () => {},
    onCancel: () => {}
  });

  const showAlert = (message: string) => {
    setAlertState({
      isOpen: true,
      message,
      title: '알림',
      type: '1',
      onConfirm: closeAlert,
      onCancel: () => {}
    });
  };

  const showConfirm = (message: string, onConfirm: () => void) => {
    setAlertState({
      isOpen: true,
      message,
      title: '확인',
      type: '2',
      onConfirm: () => {
        onConfirm();
        closeAlert();
      },
      onCancel: closeAlert
    });
  };

  const closeAlert = () => {
    setAlertState(prev => ({ ...prev, isOpen: false }));
  };

  // 작업시작 버튼 클릭 시
  const handleWorkStart = () => {
    if (!selectedFile) {
      // 작업대상이 선택되지 않은 경우 경고 알림창 표시
      showAlert('작업 지정 대상을 선택해주세요.');
    } else {
      // 작업대상이 선택된 경우 로딩 창 표시
      //setIsLoading(true);

      // 실제 작업 로직 수행
      // ...

      // 작업 완료 후 로딩 창 숨기기
      //setIsLoading(true);

      // 테스트를 위해 2초간 로딩 모달 표시
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);

    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        {/* 작업대상목록 */}
        <div className="w-1/2 flex-1 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <TitleWrap
              title="작업대상목록"
              className="border-b border-gray-300 pb-1"
              buttons={[
                { label: "파일 포맷 설정", onClick: handleFileFormatOpen },
                { label: "작업시작" , onClick: handleWorkStart},
              ]}
            />
            <div className="h-[200px] grid-custom-wrap">
              <div className="grid-top-subject h-[26px]">
                Loading File(s)
              </div>
              <DataGrid<FileRow>
                columns={columns}
                rows={uploadedFiles}
                className="grid-custom cursor-pointer h-custom-important"
                rowHeight={26}
                headerRowHeight={26}
                rowClass={getFileRowClass}
                rowKeyGetter={(row) => row.id}
                onCellClick={handleFileRowClick}
                selectedRows={selectedFileRows}
              />
            </div>
          </div>
        </div>

        {/* 작업대상 내역 */}
        <div className="w-1/2 flex-1 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <TitleWrap
              title="작업대상 내역"
              className="border-b border-gray-300 pb-1"
              buttons={[
                { label: "새 작업대상", onClick: handleNewTarget},
                { label: "작업대상 올리기", onClick: triggerFileInput },
                { label: "작업대상 삭제" ,  onClick: handleDeleteFile, disabled: !selectedFile},
              ]}
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Label className="w-[100px] min-w-[100px]">대상캠페인</Label>
                <Select>
                  <SelectTrigger className="w-[300px]">
                    <SelectValue placeholder="대상캠페인" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">test1</SelectItem>
                    <SelectItem value="2">test2</SelectItem>
                    <SelectItem value="3">test3</SelectItem>
                  </SelectContent>
                </Select>
                <CustomInput
                  className="w-full"
                  value={selectedFileName}
                  disabled
                />
              </div>
              <div className="flex items-center gap-1 h-[26px]">
                <Label className="w-[100px] min-w-[100px]">파일형식</Label>
                <CommonRadio
                  defaultValue="auto"
                  className="flex gap-8"
                  onValueChange={(value) => console.log(value)}
                >
                  <div className="flex items-center space-x-2">
                    <CommonRadioItem value="excel" id="excel" />
                    <Label htmlFor="excel">EXCEL</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CommonRadioItem value="txt" id="txt" />
                    <Label htmlFor="txt">TXT</Label>
                  </div>
                </CommonRadio>
              </div>
              <div className="flex items-center gap-1 h-[26px]">
                <Label className="w-[100px] min-w-[100px]">작업대상 구분</Label>
                <CommonRadio
                  defaultValue="general"
                  className="flex gap-8 w-[200px] min-w-[200px]"
                  onValueChange={handleTargetTypeChange}
                >
                  <div className="flex items-center space-x-2">
                    <CommonRadioItem value="general" id="general" />
                    <Label htmlFor="general">일반</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CommonRadioItem value="blacklist" id="blacklist" />
                    <Label htmlFor="blacklist">블랙리스트</Label>
                  </div>
                </CommonRadio>

                {targetType === "general" ? (
                  <div className="flex gap-2">
                    <CustomCheckbox id="deleteData" />
                    <Label htmlFor="deleteData" className="text-sm">
                      기존 캠페인 데이터 삭제
                    </Label>
                  </div>
                ) : (
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Insert: 기존리스트 삭제 후 등록" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="insert">Insert</SelectItem>
                      <SelectItem value="append">Append</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
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
        <div className="w-1/2">
          <div className="h-[300px] grid-custom-wrap mt-[28px]">
            <div className="grid-top-subject h-[26px]">
              Progress Status
            </div>
            <DataGrid<ProgressRow>
              columns={progressColumns}
              rows={progressList}
              className="grid-custom cursor-pointer h-custom-important"
              rowHeight={26}
              headerRowHeight={26}
              rowKeyGetter={(row) => row.id}
              rowClass={getProgressRowClass}
              onCellClick={handleProgressRowClick}
              selectedRows={selectedProgressRow ? new Set([selectedProgressRow.id]) : new Set()}
            />
          </div>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        id="fileInput"
        className="hidden"
        onChange={handleFileUpload}
      />

       {/* 파일포맷모달 */}
       <FileFormat 
        isOpen={isFileFormatOpen}
        onConfirm={handleFileFormatConfirm}
        onClose={handleFileFormatClose}
      />

      {/* 얼럿 창 */}
      <CustomAlert
        isOpen={alertState.isOpen}
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        onClose={alertState.onConfirm}
        onCancle={alertState.onCancel}
      />
      
      {/* 로딩 모달 */}
       <LoadingModal 
       isLoading={isLoading} 
       onClose={() => setIsLoading(false)} 
       totalCount={100} 
       completedCount={50} 
       outboundProgress={75} 
       />
    </div>
  );
};

export default ListManager;