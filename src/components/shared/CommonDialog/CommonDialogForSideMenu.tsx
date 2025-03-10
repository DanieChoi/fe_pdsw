"use client";

import React, { ReactNode, useCallback } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils"; // shadcn-ui 설치 시 생성된 유틸, 없다면 제거

interface CommonDialogForSideMenuProps {
  isOpen: boolean;
  onClose: (e?: React.MouseEvent | React.KeyboardEvent | Event) => void;
  title?: string;
  description?: string;
  children?: ReactNode;
}

const CommonDialogForSideMenu = ({
  isOpen,
  onClose,
  title,
  description,
  children,
}: CommonDialogForSideMenuProps) => {
  // 모든 클릭 이벤트 전파 방지 - React.UIEvent 대신에 any 타입 사용
  const stopPropagation = useCallback((e: any) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
  }, []);

  // 다이얼로그 상태 변경 핸들러 - 메모이제이션
  const handleOpenChange = useCallback((open: boolean) => {
    if (!open) {
      // setTimeout으로 이벤트 루프 분리
      setTimeout(() => {
        // 이벤트 객체 없이 onClose 호출
        onClose();
      }, 10);
    }
  }, [onClose]);

  // 닫기 버튼 클릭 핸들러
  const handleCloseClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // setTimeout으로 이벤트 루프 분리
    setTimeout(() => {
      onClose(e);
    }, 10);
  }, [onClose]);

  return (
    <DialogPrimitive.Root 
      open={isOpen} 
      onOpenChange={handleOpenChange}
    >
      <DialogPrimitive.Portal>
        {/* Overlay에 이벤트 전파 방지 강화 */}
        <DialogPrimitive.Overlay 
          className="fixed inset-0 z-40 bg-black/40"
          onClick={stopPropagation}
          onPointerDown={stopPropagation}
          onMouseDown={stopPropagation}
        />
        
        {/* Content에 모든 이벤트에 대한 전파 방지 적용 */}
        <DialogPrimitive.Content
          className={cn(
            "fixed z-50 top-1/2 left-1/2 w-[400px]",
            "-translate-x-1/2 -translate-y-1/2",
            "border border-gray-300 bg-white shadow-md p-4 rounded-md"
          )}
          onClick={stopPropagation}
          onPointerDown={stopPropagation}
          onMouseDown={stopPropagation}
          onKeyDown={stopPropagation}
          onPointerDownOutside={stopPropagation}
          onInteractOutside={stopPropagation}
          onEscapeKeyDown={stopPropagation}
        >
          {/* 다이얼로그 헤더 (타이틀, 설명) */}
          {title && (
            <DialogPrimitive.Title 
              className="text-lg font-semibold"
              onClick={stopPropagation}
            >
              {title}
            </DialogPrimitive.Title>
          )}
          {description && (
            <DialogPrimitive.Description 
              className="mt-1 text-sm text-gray-500"
              onClick={stopPropagation}
            >
              {description}
            </DialogPrimitive.Description>
          )}

          {/* 컨텐츠 영역 */}
          <div 
            className="mt-4" 
            onClick={stopPropagation}
            onPointerDown={stopPropagation}
            onMouseDown={stopPropagation}
          >
            {children}
          </div>

          {/* 닫기 버튼 (오른쪽 상단) */}
          <DialogPrimitive.Close
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Close"
            onClick={handleCloseClick}
            onPointerDown={stopPropagation}
            onMouseDown={stopPropagation}
          >
            ✕
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default CommonDialogForSideMenu;