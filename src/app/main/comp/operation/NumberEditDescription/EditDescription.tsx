import React, { useState, useMemo, useEffect } from 'react';
import DataGrid, { CellClickArgs } from 'react-data-grid';
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/shared/CustomInput";
import { CommonButton } from "@/components/shared/CommonButton";
import CustomAlert from '@/components/shared/layout/CustomAlert';
import { useAuthStore, useCampainManagerStore } from '@/store';
import { useApiForPhoneDescription } from '@/features/campaignManager/hooks/useApiForPhoneDescription';
import { useApiForPhoneDescriptionUpdate } from '@/features/campaignManager/hooks/useApiForPhoneDescriptionUpdate';
import { useApiForPhoneDescriptionInsert } from '@/features/campaignManager/hooks/useApiForPhoneDescriptionInsert';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useApiForPhoneDescriptionDelete } from '@/features/campaignManager/hooks/useApiForPhoneDescriptionDelete';

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

const errorMessage = {
  isOpen: false,
  message: '',
  title: '로그인',
  type: '2',
};

const EditDescription = () => {
  const { phoneDescriptions, setPhoneDescriptions } = useCampainManagerStore();
  const [selectedRow, setSelectedRow] = useState<PhoneRow | null>(null);
  const [inputId, setInputId] = useState('');
  const [inputPhone1, setInputPhone1] = useState('');
  const [inputPhone2, setInputPhone2] = useState('');
  const [inputPhone3, setInputPhone3] = useState('');
  const [inputPhone4, setInputPhone4] = useState('');
  const [inputPhone5, setInputPhone5] = useState('');
  const [isNewMode, setIsNewMode] = useState(false); // 신규 모드 상태 추가
  const { tenant_id } = useAuthStore();

  const router = useRouter();

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
      setPhoneDescriptions(data.result_data || []);
    },onError: (data) => {      
      if (data.message.split('||')[0] === '5') {
        setAlertState({
          ...errorMessage,
          isOpen: true,
          message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
          onConfirm: closeAlert,
          onCancel: () => {}
        });
        Cookies.remove('session_key');
        setTimeout(() => {
          router.push('/login');
        }, 1000);
      }
    }
  })

  // 전화번호설명 추가
  const { mutate: fetchPhoneDescriptionInsert } = useApiForPhoneDescriptionInsert({
    onSuccess: (data) => {
      fetchPhoneDescriptions({
        session_key: '',
        tenant_id: tenant_id,
      })
      showAlert('저장되었습니다');
    },onError: (error) => {
      if (error.message.split('||')[0] === '5') {
          setAlertState({
            ...errorMessage,
            isOpen: true,
            message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
            onConfirm: closeAlert,
            onCancel: () => {}
          });
          Cookies.remove('session_key');
          setTimeout(() => {
            router.push('/login');
          }, 1000);
      } else {
          showAlert('전화번호설명 저장 중 오류가 발생했습니다: ' + error.message);
      }
    }
  })

  // 전화번호설명 수정
  const { mutate: fetchPhoneDescriptionUpdate } = useApiForPhoneDescriptionUpdate({
    onSuccess: (data) => {
      fetchPhoneDescriptions({
        session_key: '',
        tenant_id: tenant_id,
      });
      showConfirm('수정되었습니다', () => {});
    },onError: (error) => {
      if (error.message.split('||')[0] === '5') {
          setAlertState({
            ...errorMessage,
            isOpen: true,
            message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
            onConfirm: closeAlert,
            onCancel: () => {}
          });
          Cookies.remove('session_key');
          setTimeout(() => {
            router.push('/login');
          }, 1000);
      } else {
          showAlert('전화번호설명 저장 중 오류가 발생했습니다: ' + error.message);
      }
    }
  })

  // 전화번호 설명 삭제
  const { mutate: fetchPhoneDescriptionDelete } = useApiForPhoneDescriptionDelete({
    onSuccess: (data) => {
      fetchPhoneDescriptions({
        session_key: '',
        tenant_id: tenant_id,
      });
      showAlert('삭제되었습니다');
    },onError: (error) => {
      if (error.message.split('||')[0] === '5') {
          setAlertState({
            ...errorMessage,
            isOpen: true,
            message: 'API 연결 세션이 만료되었습니다. 로그인을 다시 하셔야합니다.',
            onConfirm: closeAlert,
            onCancel: () => {}
          });
          Cookies.remove('session_key');
          setTimeout(() => {
            router.push('/login');
          }, 1000);
      } else {
          showAlert('전화번호설명 저장 중 오류가 발생했습니다: ' + error.message);
      }
    }
  })

  // 전화번호설명 템플릿 조회
  useEffect(() => {
    fetchPhoneDescriptions({
      session_key: '',
      tenant_id: tenant_id,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tenant_id]);
  
  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    title: '알림',
    type: '2',
    onConfirm: () => {},
    onCancel: () => {}
  });

  const showAlert = (message: string) => {
    setAlertState({
      isOpen: true,
      message,
      title: '알림',
      type: '2',
      onConfirm: closeAlert,
      onCancel: () => {}
    });
  };

  const showConfirm = (message: string, onConfirm: () => void) => {
    setAlertState({
      isOpen: true,
      message,
      title: '확인',
      type: '1',
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

  // 전화번호 설명 저장
  const handleSave = () => {
    if (!validateData()) return;

    const saveData = {
      description_id: Number(inputId),
      description: [inputPhone1, inputPhone2, inputPhone3, inputPhone4, inputPhone5]
    };

    if (selectedRow) {
      // 수정
      fetchPhoneDescriptionUpdate(saveData);
      showAlert('수정되었습니다');
    } else {
      // 신규 저장
      fetchPhoneDescriptionInsert(saveData);
      showAlert('저장되었습니다');
    }
  };

  // 전화번호 설명 삭제
  const handleDelete = () => {
    // 선택된 행이 없는 경우 알림
    if (!selectedRow) {
      showAlert('삭제할 항목을 선택해주세요.');
      return;
    }
  
    // 삭제 확인 메시지 표시
    showConfirm('선택된 전화번호 설명을 삭제하시겠습니까?\n\n ※주의:  삭제시 데이터베이스에서 완전 삭제됩니다. \n다시 한번 확인해 주시고 삭제해 주세요.', () => {
      // 선택된 행의 ID를 숫자로 변환하여 직접 전달
      const idToDelete = Number(selectedRow.id);
      
      fetchPhoneDescriptionDelete(idToDelete, {
        onSuccess: () => {
          
          // 2. 입력 필드 초기화
          setSelectedRow(null);
          setInputId('');
          setInputPhone1('');
          setInputPhone2('');
          setInputPhone3('');
          setInputPhone4('');
          setInputPhone5('');
          setIsNewMode(false);
        }
      });
    });
  };

  // 전화번호 설명 데이터 유효성 검사
  const validateData = () => {
    if (!inputId || !inputPhone1 || !inputPhone2 || !inputPhone3 || !inputPhone4 || !inputPhone5) {
      showAlert('모든 필드를 입력해주세요.');
      return false;
    }
    return true;
  };

  // 전화번호 설명 데이터 그리드 열 정의
  const columns = useMemo(() => [
    { key: 'id', name: '아이디' },
    { key: 'phone1', name: '전화번호1' },
    { key: 'phone2', name: '전화번호2' },
    { key: 'phone3', name: '전화번호3' },
    { key: 'phone4', name: '전화번호4' },
    { key: 'phone5', name: '전화번호5' },
  ], []);

  // 전화번호 설명 데이터 그리드 행 정의
  const rows = useMemo(() => {
    const phoneData = phoneDescriptions || [];
    return phoneData.length > 0 ? transformToGridData(phoneData) : [];
  }, [phoneDescriptions]);

  // 셀 클릭 핸들러
  const handleCellClick = ({ row }: CellClickArgs<PhoneRow>) => {
    setSelectedRow(row);
    setInputId(row.id);
    setInputPhone1(row.phone1);
    setInputPhone2(row.phone2);
    setInputPhone3(row.phone3);
    setInputPhone4(row.phone4);
    setInputPhone5(row.phone5);
    setIsNewMode(false);
  };

  // 신규 버튼 핸들러
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
    setIsNewMode(true);
  };
  
  const getRowClass = (row: PhoneRow) => {
    return selectedRow?.id === row.id ? 'bg-[#FFFAEE]' : '';
  };

  // 필드가 비활성화되어야 하는지 결정하는 함수
  const isFieldDisabled = () => {
    // 선택된 행이 없고 신규 모드도 아니면 비활성화
    return !selectedRow && !isNewMode;
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
            rowHeight={30}
            headerRowHeight={30}
            rowClass={getRowClass}
            enableVirtualization={false}
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
                disabled={isFieldDisabled()}
            />
            </div>
            
            <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">전화번호2</Label>
            <CustomInput
                type="text"
                value={inputPhone2}
                onChange={(e) => setInputPhone2(e.target.value)}
                className="w-full"
                disabled={isFieldDisabled()}
            />
            </div>
            
            <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">전화번호3</Label>
            <CustomInput
                type="text"
                value={inputPhone3}
                onChange={(e) => setInputPhone3(e.target.value)}
                className="w-full"
                disabled={isFieldDisabled()}
            />
            </div>

            <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">전화번호4</Label>
            <CustomInput
                type="text"
                value={inputPhone4}
                onChange={(e) => setInputPhone4(e.target.value)}
                className="w-full"
                disabled={isFieldDisabled()}
            />
            </div>

            <div className="flex items-center gap-2">
            <Label className="w-[5rem] min-w-[5rem]">전화번호5</Label>
            <CustomInput
                type="text"
                value={inputPhone5}
                onChange={(e) => setInputPhone5(e.target.value)}
                className="w-full"
                disabled={isFieldDisabled()}
            />
            </div>

            <div className="flex justify-end gap-2 pt-4">
            <CommonButton onClick={handleNew}>신규</CommonButton>
            <CommonButton onClick={handleSave}>저장</CommonButton>
            <CommonButton onClick={handleDelete}>삭제</CommonButton>
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