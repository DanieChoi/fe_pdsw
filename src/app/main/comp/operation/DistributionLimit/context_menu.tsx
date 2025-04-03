import React, { useRef, useEffect, useState } from 'react';

interface ContextMenuProps {
  x: number;
  y: number;
  onDelete: () => void;
  onClose: () => void;
  level?: number;    // 추가
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, onDelete, onClose, level }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [adjustedPosition, setAdjustedPosition] = useState({ left: x, top: y });

  // 메뉴 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // 메뉴 위치 조정 (화면 경계 넘어가지 않게)
  useEffect(() => {
    if (menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      let newLeft = x;
      let newTop = y;
      
      // 우측 경계 확인
      if (x + menuRect.width > viewportWidth) {
        newLeft = x - menuRect.width;
      }
      
      // 하단 경계 확인
      if (y + menuRect.height > viewportHeight) {
        newTop = y - menuRect.height;
      }
      
      setAdjustedPosition({ left: newLeft, top: newTop });
    }
  }, [x, y]);

  // 레벨에 따른 메뉴 항목 텍스트 설정
  let menuText = "분배제한 정보 삭제";
  
  // 각 레벨에 따라 다른 텍스트 표시 (옵션)
  if (level === 1) {
    menuText = "상담그룹 분배제한 정보 삭제";
  } else if (level === 2) {
    menuText = "상담파트 분배제한 정보 삭제";
  } else if (level === 3) {
    menuText = "분배제한 정보 삭제";
  }

  return (
    <div
      ref={menuRef}
      className="absolute bg-white border border-gray-210 shadow-md rounded-md py-1 z-50"
      style={{
        position: 'fixed',
        left: `${adjustedPosition.left}px`,
        top: `${adjustedPosition.top}px`,
        fontSize: '14px',
        minWidth: 'auto',
        width: 'auto'
      }}
    >
      <div
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-red-600"
        onClick={onDelete}
      >
        <span>{menuText}</span>
      </div>
    </div>
  );
};

export default ContextMenu;
