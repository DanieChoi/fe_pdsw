"use client";

import React, { ReactNode, useCallback } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
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
  // 모든 이벤트 전파 방지 함수
  const stopPropagation = useCallback((e: React.UIEvent) => {
    e.stopPropagation();
  }, []);

  // 다이얼로그 상태 변경 핸들러
  const handleOpenChange = useCallback((open: boolean) => {
    if (!open) {
      // 약간의 지연을 주어 이벤트 루프 분리
      setTimeout(() => {
        onClose();
      }, 50);
    }
  }, [onClose]);

  // 오버레이 클릭 핸들러
  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    
    // 약간의 지연을 주어 이벤트 루프 분리
    setTimeout(() => {
      onClose(e);
    }, 50);
  }, [onClose]);

  // 닫기 버튼 클릭 핸들러
  const handleCloseClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 약간의 지연을 주어 이벤트 루프 분리
    setTimeout(() => {
      onClose(e);
    }, 50);
  }, [onClose]);

  return (
    <DialogPrimitive.Root 
      open={isOpen} 
      onOpenChange={handleOpenChange}
    >
      <DialogPrimitive.Portal>
        {/* 오버레이 - 클릭 시 다이얼로그 닫힘 */}
        <DialogPrimitive.Overlay
          className="fixed inset-0 z-40 bg-black/40"
          onClick={handleOverlayClick}
          onPointerDown={stopPropagation}
        />
        
        {/* 컨텐츠 */}
        <DialogPrimitive.Content
          className={cn(
            "fixed z-50 top-1/2 left-1/2 w-[400px]",
            "-translate-x-1/2 -translate-y-1/2",
            "border border-gray-300 bg-white shadow-md p-4 rounded-md"
          )}
          onClick={stopPropagation}
          onPointerDown={stopPropagation}
          onPointerDownOutside={(e) => {
            e.preventDefault();
            handleOverlayClick(e as unknown as React.MouseEvent);
          }}
          onEscapeKeyDown={(e) => {
            e.preventDefault();
            onClose(e);
          }}
          onInteractOutside={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {/* 타이틀 */}
          {title ? (
            <DialogPrimitive.Title 
              className="text-lg font-semibold"
              onClick={stopPropagation}
            >
              {title}
            </DialogPrimitive.Title>
          ) : (
            <VisuallyHidden>
              <DialogPrimitive.Title>Dialog</DialogPrimitive.Title>
            </VisuallyHidden>
          )}
          
          {/* 설명 */}
          {description && (
            <DialogPrimitive.Description 
              className="mt-1 text-sm text-gray-500"
              onClick={stopPropagation}
            >
              {description}
            </DialogPrimitive.Description>
          )}
          
          {/* 콘텐츠 영역 */}
          <div 
            className="mt-4" 
            onClick={stopPropagation}
            onPointerDown={stopPropagation}
          >
            {children}
          </div>
          
          {/* 닫기 버튼 */}
          <DialogPrimitive.Close
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Close"
            onClick={handleCloseClick}
            onPointerDown={stopPropagation}
          >
            ✕
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default CommonDialogForSideMenu;