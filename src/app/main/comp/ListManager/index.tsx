import React, { useState, useMemo, useEffect } from "react";
import * as XLSX from 'xlsx';

// 공통 컴포넌트
import TitleWrap from "@/components/shared/TitleWrap";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { CustomCheckbox } from "@/components/shared/CustomCheckbox";
import CustomAlert,{CustomAlertRequest} from "@/components/shared/layout/CustomAlert";
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
import SenderList from './SenderList';
import { useMainStore, useTabStore } from '@/store';
import { CallingListInsertDataType
  , CallingListInsertRequest
} from '@/features/listManager/types/listManagerIndex';
import { useApiForCallingListInsert } from '@/features/listManager/hooks/useApiForCallingListInsert';

// 데이터그리드
import DataGrid, { Column, CellClickArgs } from "react-data-grid";

// 모달
import FileFormat,{FormatRowData, FormatRow} from './FileFormat';
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

// 발신 리스트 추가 요청 데이터 타입
const callListInsertDataType: CallingListInsertDataType = {
  customer_key: '',
  sequence_number: 0,
  customer_name: '',
  phone_number1: '',
  phone_number2: '',
  phone_number3: '',
  phone_number4: '',
  phone_number5: '',
  reserved_time: '',
  token_data: ''
}

// 발신 리스트 추가 요청 
const callListInsertData: CallingListInsertRequest = {
  campaign_id: 0,
  list_flag: 'I',
  calling_list: [] as CallingListInsertDataType[]
}

const errorMessage: CustomAlertRequest = {
  isOpen: false,
  message: '',
  title: '캠페인',
  type: '1',
  onClose: () => {},
  onCancle: () => {},
};

interface ProgressRow {
  id: number;
  datetime: string;
  message: string;
}

const ListManager: React.FC = () => {
  const { campaigns } = useMainStore();
  const { campaignIdForUpdateFromSideMenu } = useTabStore();
  const [delimiter, setDelimiter] = useState<string>('');
  const [_callListInsertData, setCallListInsertData] = useState<CallingListInsertRequest>(callListInsertData);
  const [fileFormat,setFileFormat ] = useState<string>('excel');
  const [deleteData, setDeleteData] = useState(true);  // 기존 캠페인 데이터 삭제.
  const [campaignIdDisabled,setCampaignIdDisabled] = useState<boolean>(false);
  const [alertState, setAlertState] = useState<CustomAlertRequest>(errorMessage);
  const [headerColumnData,setHeaderColumnData] = useState<FormatRow[]>([]);
  const [originaldataYn, setOriginaldataYn] = useState<boolean>(false);
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

  //캠페인 발신번호 추가 api 호출
  const { mutate: fetchCallingListInsert } = useApiForCallingListInsert({
    onSuccess: (data) => {   
    }
  });
  
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
  const handleFileFormatOpen = () => {    
    setUploadedFiles([]);
    setSendList([]);
    setIsFileFormatOpen(true);
  } 
  const handleFileFormatClose = () => setIsFileFormatOpen(false);

  const [sendColumns, setSendColumns] = useState<Column<SendRow>[]>([]);
  const [sendList, setSendList] = useState<SendRow[]>([]);
  
  //파일포맷설정 확인 이벤트.
  const handleFileFormatConfirm = (data:FormatRowData) => {
    setIsFileFormatOpen(false);
    setDelimiter(data.delimiter);
    setOriginaldataYn(data.originDataSaveYn);
    setHeaderColumnData(data.datalist);
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
      try{
        setIsLoading(true);
        const file = files[0];
        if( fileFormat === 'excel' && file.name.indexOf('.xls') === -1 ){              
          setAlertState({
            ...errorMessage,
            isOpen: true,
            message: "파일형식을 확인해 주세요.",
            type: '2',
            onClose: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
          });
        }else if( fileFormat === 'txt' && file.name.indexOf('.xls') > -1 ){    
          setAlertState({
            ...errorMessage,
            isOpen: true,
            message: "파일형식을 확인해 주세요.",
            type: '2',
            onClose: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
          });
        }else{          
          const newFileData: FileRow = {
            id: nextId,
            fileName: file.name,
            campaignId: targetType === "general" ? "G123" : "B456",
            fileSize: (file.size / 1024).toFixed(2) + " KB",
            deletable: false,
          };
          setUploadedFiles((prev) => [...prev, newFileData]);
          setSelectedFileName(file.name);

          const reader = new FileReader();
          if( fileFormat === 'excel' && file.name.indexOf('.xls') > -1 ){
            reader.onload = (event) => {
              const fileContent = event.target?.result;
              
              if (fileContent) {
                const workbook = XLSX.read(fileContent, { type: 'array' });
        
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
        
                const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); 
        
                if( data.length > 0 ){
                  let index = 0;
                  const tempSendList: SendRow[] = [];
                  for(let i=0; i< data.length;i++){
                    const row = data[i] as unknown[];
                    index = index+1;

                    const tempData: SendRow = {
                      id: nextId+'::'+index,
                      fileId: nextId,
                      CSKE: '',
                      CSK2: '',
                      CSK3: '',
                      CSNA: '',
                      TNO1: '',
                      TNO2: '',
                      TNO3: '',
                      TNO4: '',
                      TNO5: '',
                      CSC1: '',
                      CSC2: '',
                      CSC3: '',
                      CSC4: '',
                      CSC5: '',
                      CSC6: '',
                      EMPLOYEEID: '',
                      TKDA: '',
                    };
                    if( row.length > 0){
                      let _length = row.length;
                      if( _length > sendColumns.length){
                        _length = sendColumns.length;
                      }
                      for (let j = 0; j < _length; j++) {
                        const key = sendColumns[j].key as keyof SendRow;
                        if (key in tempData) {
                          if (typeof key === 'string' && key in tempData) {
                            if (typeof key === 'string' && key in tempData) {
                              (tempData as any)[key] = row[j] as string || '';
                            }
                          }
                        }
                      }
                      tempSendList.push(tempData);
                    }
                    
                  }
                  setSendList(prev => [...prev, ...tempSendList]);
                }

              }

            };
            reader.readAsArrayBuffer(file);
          }else if( fileFormat === 'txt' && file.name.indexOf('.xls') == -1 ){
            reader.onload = (event) => {
              const fileContent = event.target?.result;       
              console.log("File content:", fileContent);
              if( fileContent != null && fileContent !== '' ){
                const tempdata = (fileContent+'').split('\r\n');
                let index = 0;
                const tempSendList: SendRow[] = [];
                for( let i=0;i<tempdata.length;i++){
                  // const row = tempdata[i].split(delimiter) as unknown[];
                  index = index+1;

                  const tempData: SendRow = {
                    id: nextId+'::'+index,
                    fileId: nextId,
                    CSKE: '',
                    CSK2: '',
                    CSK3: '',
                    CSNA: '',
                    TNO1: '',
                    TNO2: '',
                    TNO3: '',
                    TNO4: '',
                    TNO5: '',
                    CSC1: '',
                    CSC2: '',
                    CSC3: '',
                    CSC4: '',
                    CSC5: '',
                    CSC6: '',
                    EMPLOYEEID: '',
                    TKDA: '',
                  };
                  //길이체크인 경우 
                  if( delimiter === '' ){
                    for(let k=0;k<headerColumnData.length;k++){
                      const key = headerColumnData[k].field as keyof SendRow;
                      if (key in tempData) {
                        if (typeof key === 'string' && key in tempData) {
                          if (typeof key === 'string' && key in tempData) {
                            (tempData as any)[key] = tempdata[i].substring(headerColumnData[k].start-1, headerColumnData[k].start + headerColumnData[k].length -1) as string || '';
                          }
                        }
                      }
                    }
                    tempSendList.push(tempData);                  
                    //구분자인 경우
                  }else{ 
                    const row = tempdata[i].split(delimiter) as unknown[];
                    if( row.length > 0){
                      let _length = row.length;
                      if( _length > sendColumns.length){
                        _length = sendColumns.length;
                      }
                      for (let j = 0; j < _length; j++) {
                        const key = sendColumns[j].key as keyof SendRow;
                        if (key in tempData) {
                          if (typeof key === 'string' && key in tempData) {
                            if (typeof key === 'string' && key in tempData) {
                              (tempData as any)[key] = row[j] as string || '';
                            }
                          }
                        }
                      }
                      tempSendList.push(tempData);
                    }
                  }
                }
                setSendList(prev => [...prev, ...tempSendList]);
              }
              // Now, you can process fileContent here
            };
            reader.readAsText(file);
          }else{          
            setAlertState({
              ...errorMessage,
              isOpen: true,
              message: "파일형식을 확인해 주세요.",
              type: '2',
              onClose: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
            });
          }
          // Handle file reading errors
          reader.onerror = (error) => {
            console.error("Error reading file:", error);
          };
        }
      } catch (e) {
        console.error("Error processing file:", e);
  
      }finally{
        setNextId(nextId + 1);
        setIsLoading(false);
      }
    }// 파일 업로드 후 input 값 초기화
    e.target.value = '';
  };
 
  // 새 작업대상 핸들러
  const handleNewTarget = () => {
    setSelectedFileName("");
    setTargetType("general");
    setSelectedFile(null);
    setUploadedFiles([]);
    setSendList([]);
  };

  // 작업대상 올리기
  const triggerFileInput = () => {
    if( sendColumns.length === 0 ){
      setAlertState({
        ...errorMessage,
        isOpen: true,
        message: "파일포맷 설정을 실행해 주세요.",
        type: '2',
        onClose: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
      });
    }else{
      const fileInput = document.getElementById("fileInput") as HTMLInputElement;
      if (fileInput) fileInput.click();
    }
  };

  // 삭제 핸들러
  const handleDeleteFile = () => {
    if (selectedFile) {
      setUploadedFiles(prev => prev.filter(file => file.id !== selectedFile.id));
      setSendList(prev => prev.filter(data => data.fileId !== selectedFile.id));
      setSelectedFile(null);
      setSelectedFileName("");
    }
  };

  // 행 클릭 핸들러
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

  // 작업시작 버튼 클릭 시
  const handleWorkStart = () => {
    if (uploadedFiles.length === 0) {
      // 작업대상이 선택되지 않은 경우 경고 알림창 표시
      // showAlert('작업 지정 대상을 선택해주세요.');
      setAlertState({
        ...errorMessage,
        isOpen: true,
        message: "발신목록이 없습니다.",
        type: '2',
        onClose: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
      });
    } else if ( _callListInsertData.campaign_id === 0) {
      setAlertState({
        ...errorMessage,
        isOpen: true,
        message: "대상 캠페인을 선택해 주세요.",
        type: '2',
        onClose: () => setAlertState((prev) => ({ ...prev, isOpen: false }))
      });
    } else {
      // 작업대상이 선택된 경우 로딩 창 표시
      //setIsLoading(true);
      const callingListInsertData: CallingListInsertRequest = {
        ..._callListInsertData
        , campaign_id: _callListInsertData.campaign_id
        , list_flag: _callListInsertData.list_flag+''
        ,calling_list: sendList.map((data, index) => ({
          ...callListInsertDataType,
          customer_key: data.CSKE+'',
          sequence_number: index + 1,
          customer_name: data.CSNA+'',
          phone_number1: data.TNO1+'',
          phone_number2: data.TNO2+'',
          phone_number3: data.TNO3+'',
          phone_number4: data.TNO4+'',
          phone_number5: data.TNO5+'',
          reserved_time: data.TKDA+'',
          token_data: data.CSC1+''
        }))
      };

      fetchCallingListInsert(callingListInsertData);
      // 실제 작업 로직 수행
      // ...
      // fetchCallingListInsert();
      
      // 작업 완료 후 로딩 창 숨기기
      //setIsLoading(true);

      // 테스트를 위해 2초간 로딩 모달 표시
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);

    }
  };

  //select data change
  const handleSelectChange = (value: string, type: string) => {
    if( type === 'campaignId' ){
      setCallListInsertData({
        ..._callListInsertData,
        campaign_id: Number(value)
      });
    }  
    if( type === 'listFlag'){
      setCallListInsertData({
        ..._callListInsertData,
        list_flag: value
      });
    }
  }

  //checkbox checked change
  const handleCheckbox = (checked:boolean, type:string) => {
    if( type === 'deleteData' ){  //체크 I 안하면 A
      setDeleteData(checked);
      if( checked ){
        setCallListInsertData({
          ..._callListInsertData,
          list_flag: 'I'
        });
      }else{
        setCallListInsertData({
          ..._callListInsertData,
          list_flag: 'A'
        });
      }
    }  
  }

  useEffect(() => {
    if( campaignIdForUpdateFromSideMenu ){
      setCallListInsertData({
        ..._callListInsertData,
        campaign_id: Number(campaignIdForUpdateFromSideMenu)
      });
      setCampaignIdDisabled(true);
    }else{
      setCallListInsertData({
        ..._callListInsertData,
        campaign_id: 0
      });
      setCampaignIdDisabled(false);
    }
  }, [campaignIdForUpdateFromSideMenu]);

  // useEffect(() => {
  //   if( headerColumnData.length > 0 ){
  //     console.log('headerColumnData ' + headerColumnData.length);
  //   }
  // }, [headerColumnData]);

  return (
    <div className="flex flex-col gap-5 limit-width">
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
                <Select value={_callListInsertData.campaign_id+''} 
                onValueChange={(value) => handleSelectChange(value, 'campaignId')}
                defaultValue="0" disabled={campaignIdDisabled}
                >
                  <SelectTrigger className="w-[300px]">
                    <SelectValue placeholder="대상캠페인" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem key='0' value='0'>-선택-</SelectItem>
                    {campaigns.map(option => (
                      <SelectItem key={option.campaign_id} value={option.campaign_id.toString()}>
                        [{option.campaign_id}]{option.campaign_name}
                      </SelectItem>
                    ))}
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
                  value={fileFormat}
                  onValueChange={(value) => setFileFormat(value)}
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
                    <CustomCheckbox id="deleteData" checked={deleteData}
                      onCheckedChange={(checked) => handleCheckbox(checked === true, 'deleteData')} />
                    <Label htmlFor="deleteData" className="text-sm">
                      기존 캠페인 데이터 삭제
                    </Label>
                  </div>
                ) : (
                  <Select value={_callListInsertData.list_flag} 
                  onValueChange={(value) => handleSelectChange(value, 'listFlag')}
                  defaultValue="I"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Insert: 기존리스트 삭제 후 등록" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="I">Insert</SelectItem>
                      <SelectItem value="A">Append</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
      <SenderList headerData={sendColumns} _sendList={sendList} />
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
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        isOpen={alertState.isOpen}
        onClose={() => {
          alertState.onClose()
        }}
        onCancle={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}/>
      
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