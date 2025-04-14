// src\components\shared\CustomNoticePopUpForBrowser\index.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Bell, AlertTriangle, Check, Clock } from 'lucide-react';
import { showPushNotification } from '@/lib/notificationUtils';

// 알림 타입 정의
export type InAppNotificationType = 'info' | 'success' | 'warning' | 'error';
export type InAppNotificationPriority = 'low' | 'normal' | 'high';

interface InAppNotificationProps {
  id: string;
  title: string;
  message: string;
  type?: InAppNotificationType;
  priority?: InAppNotificationPriority;
  duration?: number; // 밀리초 단위 (자동으로 사라지는 시간)
  actions?: Array<{
    label: string;
    onClick: () => void;
  }>;
  onClose?: () => void;
}

// 개별 알림 컴포넌트
const InAppNotification: React.FC<InAppNotificationProps> = ({
  id,
  title,
  message,
  type = 'info',
  priority = 'normal',
  duration = 5000, // 기본 5초 후 사라짐
  actions = [],
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // 타입별 스타일과 아이콘 결정
  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          containerClass: 'bg-green-50 border-green-200',
          iconClass: 'text-green-500',
          icon: <Check size={20} />
        };
      case 'warning':
        return {
          containerClass: 'bg-yellow-50 border-yellow-200',
          iconClass: 'text-yellow-500',
          icon: <AlertTriangle size={20} />
        };
      case 'error':
        return {
          containerClass: 'bg-red-50 border-red-200',
          iconClass: 'text-red-500',
          icon: <AlertTriangle size={20} />
        };
      case 'info':
      default:
        // 연한 파란색 테마 (스크린샷과 유사하게)
        return {
          containerClass: 'bg-blue-50 border-blue-200',
          iconClass: 'text-blue-500',
          icon: <Bell size={20} />
        };
    }
  };

  // 우선순위별 추가 스타일
  const getPriorityStyles = () => {
    switch (priority) {
      case 'high':
        return 'border-l-4 shadow-md';
      case 'low':
        return 'opacity-90';
      default:
        return '';
    }
  };

  const { containerClass, iconClass, icon } = getTypeStyles();
  const priorityClass = getPriorityStyles();

  // 자동으로 사라지는 타이머 설정
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (duration > 0) {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          onClose?.();
        }, 300); // 애니메이션 완료 후 실제로 제거
      }, duration);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [duration, onClose]);

  // 닫기 처리
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300); // 애니메이션 완료 후 실제로 제거
  };

  return (
    <div
      className={`
        ${containerClass} ${priorityClass}
        p-4 rounded-md shadow border
        transform transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}
        mb-2 max-w-md w-full
      `}
      role="alert"
    >
      <div className="flex items-start">
        {/* 아이콘 */}
        <div className={`mr-3 flex-shrink-0 ${iconClass}`}>
          {icon}
        </div>

        {/* 내용 */}
        <div className="flex-grow mr-2">
          <h4 className="text-sm font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{message}</p>
          
          {/* 액션 버튼들 */}
          {actions.length > 0 && (
            <div className="flex mt-2 space-x-2">
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => {
                    action.onClick();
                    if (!action.label.toLowerCase().includes('나중')) {
                      handleClose();
                    }
                  }}
                  className="text-xs px-2 py-1 rounded bg-white border border-gray-200 hover:bg-gray-50 text-gray-700"
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="닫기"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

// 알림 컨테이너 관리자
export const InAppNotificationContainer = () => {
  const [notifications, setNotifications] = useState<InAppNotificationProps[]>([]);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // 전역 이벤트 리스너 설정 (알림 추가용)
    const handleAddNotification = (event: CustomEvent) => {
      const notification = event.detail;
      if (notification) {
        setNotifications(prev => [...prev, { ...notification, id: notification.id || Date.now().toString() }]);
      }
    };
    
    window.addEventListener('add-notification' as any, handleAddNotification as EventListener);
    
    return () => {
      window.removeEventListener('add-notification' as any, handleAddNotification as EventListener);
    };
  }, []);
  
  // 알림 제거 핸들러
  const handleRemoveNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };
  
  if (!mounted) return null;
  
  return createPortal(
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end space-y-2 w-full max-w-md pointer-events-none">
      {notifications.map(notification => (
        <div key={notification.id} className="pointer-events-auto w-full">
          <InAppNotification
            {...notification}
            onClose={() => handleRemoveNotification(notification.id)}
          />
        </div>
      ))}
    </div>,
    document.body
  );
};

// 알림 표시 헬퍼 함수
export const showInAppNotification = (
  title: string,
  message: string,
  options: Partial<InAppNotificationProps> = {}
) => {
  // 브라우저 환경에서만 실행
  if (typeof window !== 'undefined') {
    const notification = {
      id: options.id || Date.now().toString(),
      title,
      message,
      type: options.type || 'info',
      priority: options.priority || 'normal',
      duration: options.duration || 5000,
      actions: options.actions || [],
    };
    
    // 커스텀 이벤트로 알림 추가 요청
    window.dispatchEvent(
      new CustomEvent('add-notification', { detail: notification })
    );
    
    return notification.id;
  }
  
  return '';
};

// 두 가지 알림 방식을 함께 사용 (브라우저 알림 + 앱 내 알림)
// 브라우저 알림 방식은 기존 코드 그대로 유지
export const showCombinedNotification = async (
  title: string,
  message: string,
  options: {
    priority?: "low" | "normal" | "high";
    taskId?: string;
    category?: string;
    inAppOnly?: boolean;
    browserOnly?: boolean;
    duration?: number;
  } = {}
) => {
  // 앱 내 알림 표시 (inAppOnly가 true가 아닌 경우)
  if (!options.browserOnly) {
    const actionButtons = [
      {
        label: '확인',
        onClick: () => {
          console.log('알림 확인 클릭:', title);
          if (options.taskId) {
            // 작업 상세 페이지로 이동 (예시)
            window.location.href = `/tasks/${options.taskId}`;
          }
        }
      }
    ];
    
    // "나중에" 버튼 (선택적)
    if (options.priority !== 'low') {
      actionButtons.push({
        label: '나중에',
        onClick: () => {
          console.log('나중에 알림:', title);
          // 15분 후 다시 알림
          setTimeout(() => {
            showInAppNotification(
              `[다시 알림] ${title}`,
              message,
              {
                type: 'info',
                priority: options.priority,
                actions: [actionButtons[0]] // "확인" 버튼만 포함
              }
            );
          }, 15 * 60 * 1000); // 15분
        }
      });
    }
    
    // 인앱 알림 표시
    showInAppNotification(title, message, {
      type: options.priority === 'high' ? 'error' : options.priority === 'low' ? 'success' : 'info',
      priority: options.priority,
      duration: options.duration || 8000,
      actions: actionButtons
    });
  }
  
  // 브라우저 알림 표시 (inAppOnly가 true가 아닌 경우)
  if (!options.inAppOnly) {
    try {
      // 기존 브라우저 알림 함수 호출 (외부에서 정의된 함수)
      if (typeof showPushNotification === 'function') {
        await showPushNotification(
          title,
          message,
          options.category ? `${options.category}-notification` : 'task-notification',
          {
            priority: options.priority || 'normal',
            taskId: options.taskId,
            category: options.category
          }
        );
      } else {
        console.warn('브라우저 알림 함수(showPushNotification)가 정의되지 않았습니다.');
      }
    } catch (err) {
      console.error('브라우저 알림 표시 오류:', err);
    }
  }
};

// 앱에 포함할 컴포넌트
export const AppNotificationSetup = () => {
  return <InAppNotificationContainer />;
};