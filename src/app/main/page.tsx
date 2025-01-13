"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect } from "react";
import useStore from '@/features/auth/hooks/store';
import { useApiForMain } from '@/features/auth/hooks/useApiForMain'

interface MainFormData {
  tenant_id: number
  session_key: string
}

export default function MainPage() {
  const { id, tenant_id, session_key } = useStore.getState();
  const msinData:MainFormData = {
    tenant_id: tenant_id,
    session_key: session_key
  }

  const { mutate: main } = useApiForMain({
    onSuccess: () => {
      // setIsPending(false);
      // router.push('/main') // 로그인 성공 시 리다이렉트
    },onError: () => {
      // setAlertMessage(e.message);
      // setAlertVisible(true);
      // setIsPending(false);
    }
  })

  useEffect(() => {
    console.log(id);
    console.log(tenant_id);
    console.log(session_key);
    main(msinData);
  }, []);

  return (
    <div className="space-y-6">
      {/* 상단 필터/검색 영역 */}
      <div className="flex space-x-4 items-center">
        <select className="p-2 border rounded">
          <option>skt</option>
        </select>
        <input 
          type="text" 
          placeholder="캠페인 그룹명" 
          className="p-2 border rounded"
        />
      </div>

      {/* 캠페인 그룹 정보 */}
      <Card>
        <CardHeader>
          <CardTitle>캠페인 그룹 검색목록 (총 2건)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border p-2 text-left">No.</th>
                  <th className="border p-2 text-left">테넌트</th>
                  <th className="border p-2 text-left">캠페인 그룹 아이디</th>
                  <th className="border p-2 text-left">캠페인 그룹명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">sk</td>
                  <td className="border p-2">1232</td>
                  <td className="border p-2">web_only</td>
                </tr>
                <tr>
                  <td className="border p-2">2</td>
                  <td className="border p-2">sk_test</td>
                  <td className="border p-2">1232</td>
                  <td className="border p-2">web_only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* 상세 정보 영역 */}
      <Card>
        <CardHeader>
          <CardTitle>상세내역</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">그룹 아이디</label>
              <input type="text" value="1" className="mt-1 p-2 border rounded w-full" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">테넌트</label>
              <input type="text" value="245" className="mt-1 p-2 border rounded w-full" readOnly />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}