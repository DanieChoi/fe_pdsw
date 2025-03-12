"use client";

import React, { ReactNode, Fragment, useState, useCallback } from 'react';
import { Transition } from '@headlessui/react';

interface CommonContextMenuProps {
  trigger: ReactNode;
  children: ReactNode;
}

interface CommonMenuItemProps {
  onClick: () => void;
  children: ReactNode;
}

const CommonContextMenu: React.FC<CommonContextMenuProps> = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 컨텍스트 메뉴의 위치를 마우스 포인터 위치로 설정
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // 다른 곳을 클릭하면 메뉴 닫기
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      setIsOpen(false);
    };

    const handleContextMenuOutside = (e: MouseEvent) => {
      // 다른 곳에서 오른쪽 클릭하면 현재 메뉴 닫기
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('contextmenu', handleContextMenuOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('contextmenu', handleContextMenuOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left">
      {/* 트리거 요소에 onContextMenu 이벤트 추가 */}
      <div 
        onContextMenu={handleContextMenu} 
        onClick={(e) => e.stopPropagation()}
      >
        {trigger}
      </div>

      {/* 포털을 사용하여 메뉴를 body에 직접 렌더링 */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
          onContextMenu={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
        >
          <Transition
            show={isOpen}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div 
              className="fixed z-50 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              style={{ 
                left: `${position.x}px`, 
                top: `${position.y}px`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="py-1">
                {React.Children.map(children, child => 
                  React.isValidElement(child) ? 
                    React.cloneElement(child as React.ReactElement<CommonMenuItemProps>, { 
                      onClick: () => {
                        (child as React.ReactElement<CommonMenuItemProps>).props.onClick();
                        handleClose();
                      }
                    }) 
                  : child
                )}
              </div>
            </div>
          </Transition>
        </div>
      )}
    </div>
  );
};

const CommonMenuItem: React.FC<CommonMenuItemProps> = ({ onClick, children }) => (
  <button
    className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
  >
    {children}
  </button>
);

export { CommonContextMenu, CommonMenuItem };