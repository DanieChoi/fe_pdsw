// src/app/main/MainPage.tsx
"use client";

import React, { useEffect } from "react";
import { useTabStore } from "@/store/tabStore";
import TabContainer from "./comp/TabContainer";

export default function MainPage() {
  const { splitTabAreaV2 } = useTabStore();

  // 처음 페이지 로드 시, 3분할로 설정 (원하면 4로 변경 가능)
  useEffect(() => {
    splitTabAreaV2(1); 
    // 만약 4분할을 원하면 splitTabAreaV2(4);
  }, [splitTabAreaV2]);

  return (
    <div className="flex flex-col w-full h-full">
      {/* TabContainer는 useTabStore의 areas/areaWidths/activeTabGlobalId 등을 활용하여
          다중 분할 UI, 탭 이동, 순서 교체 등을 처리합니다. */}
      <TabContainer />
    </div>
  );
}
