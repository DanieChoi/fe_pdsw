import React, { useState, useMemo, useEffect } from 'react';
import DataGrid, { CellClickArgs } from 'react-data-grid';
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { CommonButton } from "@/components/shared/CommonButton";
import CustomAlert from '@/components/shared/layout/CustomAlert';
import { useCampainManagerStore } from '@/store';
import { useApiForPhoneDescription } from '@/features/campaignManager/hooks/useApiForPhoneDescription';
import { fetchPhoneDescriptionUpdate } from '../../../../../features/campaignManager/api/mainPhoneDescriptionUpdate';
import { useApiForPhoneDescriptionUpdate } from '@/features/campaignManager/hooks/useApiForPhoneDescriptionUpdate';
import { useApiForPhoneDescriptionInsert } from '@/features/campaignManager/hooks/useApiForPhoneDescriptionInsert';

interface PhoneRow {
  id: string;
  phone1: string;
  phone2: string;
  phone3: string;
  phone4: string;
  phone5: string;
}

interface PhoneDescription {
  description_id: number;
  description: string[];
}

const EditDescription = () => {
  const { phoneDescriptions, setPhoneDescriptions } = useCampainManagerStore();
  const [selectedRow, setSelectedRow] = useState<PhoneRow | null>(null);
  const [inputId, setInputId] = useState('');
  const [inputPhone1, setInputPhone1] = useState('');
  const [inputPhone2, setInputPhone2] = useState('');
  const [inputPhone3, setInputPhone3] = useState('');
  const [inputPhone4, setInputPhone4] = useState('');
  const [inputPhone5, setInputPhone5] = useState('');

  // api 응답 데이터를 그리드 형식으로 변환하는 함수
  const transformToGridData = (apiData: PhoneDescription[]): PhoneRow[] => {
    return apiData.map(item => ({
      id: item.description_id.toString(),
      phone1: item.description[0] || '',
      phone2: item.description[1] || '',
      phone3: item.description[2] || '',
      phone4: item.description[3] || '',
      phone5: item.description[4] || ''
    }));
  };

  //전화번호설명 템플릿 조회
  const { mutate: fetchPhoneDescriptions } = useApiForPhoneDescription({
    onSuccess: (data) => {
      const sortedData = [...data.result_data].sort((a, b) => a.description_id - b.description_id);
      setPhoneDescriptions(sortedData);
    }
  })

  // 전화번호설명 추가
  const { mutate: fetchPhoneDescriptionInsert } = useApiForPhoneDescriptionInsert({
    onSuccess: (data) => {
      fetchPhoneDescriptions({
        session_key: '',
        tenant_id: 0,
      })
      showConfirm('저장되었습니다', () => {});
    }
  })

  // 전화번호설명 수정
  const { mutate: fetchPhoneDescriptionUpdate } = useApiForPhoneDescriptionUpdate({
    onSuccess: (data) => {
      fetchPhoneDescriptions({
        session_key: '',
        tenant_id: 0,
      });
      showConfirm('수정되었습니다', () => {});
    }
  })

  useEffect(() => {
    fetchPhoneDescriptions({
      session_key: '',
      tenant_id: 0,
    });
  }, [])
  
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

  const handleSave = () => {
    if (!validateData()) return;

    const saveData = {
      description_id: Number(inputId),
      description: [inputPhone1, inputPhone2, inputPhone3, inputPhone4, inputPhone5]
    };

    if (selectedRow) {
      // 수정
      fetchPhoneDescriptionUpdate(saveData);
      showConfirm('수정되었습니다', () => {});
    } else {
      // 신규 저장
      fetchPhoneDescriptionInsert(saveData);
      showConfirm('저장되었습니다', () => {});
    }
  };

  const validateData = () => {
    if (!inputId || !inputPhone1 || !inputPhone2 || !inputPhone3 || !inputPhone4 || !inputPhone5) {
      showConfirm('모든 필드를 입력해주세요.', () => {});
      return false;
    }
    return true;
  };

  const columns = useMemo(() => [
    { key: 'id', name: '아이디' },
    { key: 'phone1', name: '전화번호1' },
    { key: 'phone2', name: '전화번호2' },
    { key: 'phone3', name: '전화번호3' },
    { key: 'phone4', name: '전화번호4' },
    { key: 'phone5', name: '전화번호5' },
  ], []);

  const rows = useMemo(() => {
    return transformToGridData(phoneDescriptions || []);
  }, [phoneDescriptions]);

  const handleCellClick = ({ row }: CellClickArgs<PhoneRow>) => {
    setSelectedRow(row);
    setInputId(row.id);
    setInputPhone1(row.phone1);
    setInputPhone2(row.phone2);
    setInputPhone3(row.phone3);
    setInputPhone4(row.phone4);
    setInputPhone5(row.phone5);
  };

  const handleNew = () => {
    setSelectedRow(null);
    // 그리드의 마지막 ID를 찾아서 +1 한 값을 설정
    if (rows.length > 0) {
      const lastId = Math.max(...rows.map(row => parseInt(row.id)));
      setInputId((lastId + 1).toString());
    } else {
      setInputId('1'); // 데이터가 없는 경우 1부터 시작
    }
    setInputPhone1('');
    setInputPhone2('');
    setInputPhone3('');
    setInputPhone4('');
    setInputPhone5('');
  };
  
  const getRowClass = (row: PhoneRow) => {
    return selectedRow?.id === row.id ? 'bg-[#FFFAEE]' : '';
  };

  return (
    <div className="flex gap-8">
      <div className="w-[580px]">
        <div className="grid-custom-wrap h-[230px]">
        <DataGrid<PhoneRow>
            columns={columns}
            rows={rows}
            className="grid-custom"
            onCellClick={handleCellClick}
            rowKeyGetter={(row) => row.id}
            selectedRows={selectedRow ? new Set([selectedRow.id]) : new Set()}
            rowHeight={26}
            headerRowHeight={26}
            rowClass={getRowClass}
          />
        </div>
      </div>

      <div className="w-[513px]">
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">아이디</Label>
            <CustomInput
                type="text"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
                className="w-full"
                disabled={true}
            />
            </div>

            <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">전화번호1</Label>
            <CustomInput
                type="text"
                value={inputPhone1}
                onChange={(e) => setInputPhone1(e.target.value)}
                className="w-full"
            />
            </div>
            
            <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">전화번호2</Label>
            <CustomInput
                type="text"
                value={inputPhone2}
                onChange={(e) => setInputPhone2(e.target.value)}
                className="w-full"
            />
            </div>
            
            <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">전화번호3</Label>
            <CustomInput
                type="text"
                value={inputPhone3}
                onChange={(e) => setInputPhone3(e.target.value)}
                className="w-full"
            />
            </div>

            <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">전화번호4</Label>
            <CustomInput
                type="text"
                value={inputPhone4}
                onChange={(e) => setInputPhone4(e.target.value)}
                className="w-full"
            />
            </div>

            <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">전화번호5</Label>
            <CustomInput
                type="text"
                value={inputPhone5}
                onChange={(e) => setInputPhone5(e.target.value)}
                className="w-full"
            />
            </div>

            <div className="flex justify-end gap-2 pt-4">
            <CommonButton onClick={handleNew}>신규</CommonButton>
            <CommonButton onClick={handleSave}>저장</CommonButton>
            </div>
        </div>
      </div>

      <CustomAlert
        isOpen={alertState.isOpen}
        message={alertState.message}
        title={alertState.title}
        type={alertState.type}
        onClose={alertState.onConfirm}
        onCancle={alertState.onCancel}
      />
    </div>
  );
};

export default EditDescription;