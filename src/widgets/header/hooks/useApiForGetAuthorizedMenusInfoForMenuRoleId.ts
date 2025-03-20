// src\widgets\header\hooks\useApiForGetAuthorizedMenusInfoForMenuRoleId.ts\

import { useState, useEffect } from 'react';
import { 
  apiForGetAuthorizedMenusInfoForMenuRoleId 
} from '../api/apiForHeader';
import { 
  IMenuInfo, 
  IResponseTypeForGetAuthorizedMenusInfoForMenuRoleId 
} from '../api/typeForMenusAuthorityInfo';

interface UseApiForGetAuthorizedMenusInfoForMenuRoleIdProps {
  roleId: number;
  enabled?: boolean;
}

interface UseApiForGetAuthorizedMenusInfoForMenuRoleIdReturn {
  data: IResponseTypeForGetAuthorizedMenusInfoForMenuRoleId | null;
  menuList: IMenuInfo[];
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  refetch: () => Promise<void>;
}

/**
 * 권한이 있는 메뉴 정보를 가져오는 custom hook
 * @param roleId 역할 ID (1: 시스템관리자, 2: 테넌트관리자01, 3: 테넌트관리자02)
 * @param enabled 자동으로 API 호출을 시작할지 여부 (기본값: true)
 * @returns 메뉴 데이터, 로딩 상태, 에러 상태, refetch 함수
 */
export const useApiForGetAuthorizedMenusInfoForMenuRoleId = ({
  roleId,
  enabled = true
}: UseApiForGetAuthorizedMenusInfoForMenuRoleIdProps): UseApiForGetAuthorizedMenusInfoForMenuRoleIdReturn => {
  const [data, setData] = useState<IResponseTypeForGetAuthorizedMenusInfoForMenuRoleId | null>(null);
  const [menuList, setMenuList] = useState<IMenuInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  const fetchData = async (): Promise<void> => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await apiForGetAuthorizedMenusInfoForMenuRoleId({ roleId });
      setData(response);
      setMenuList(response.availableMenuList || []);
    } catch (err) {
      console.error('Error fetching authorized menus:', err);
      setIsError(true);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [roleId, enabled]);

  return {
    data,
    menuList,
    isLoading,
    isError,
    error,
    refetch: fetchData
  };
};