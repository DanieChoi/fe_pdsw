// HeadlessToast.tsx
import React, { Fragment, useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircle, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';
import { createRoot } from 'react-dom/client';

// 토스트 타입 정의
export type ToastType = 'success' | 'error' | 'info' | 'warning';

// 토스트 메시지 타입 정의
export interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

// 토스트 컴포넌트 props
interface ToastProps {
  toast: ToastMessage;
  onClose: (id: string) => void;
}

// 토스트 컴포넌트
const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  const { id, type, message, duration = 5000 } = toast;

  // 타입별 스타일 및 아이콘 설정
  const config = {
    success: {
      icon: CheckCircle,
      bgColor: 'bg-white dark:bg-gray-800',
      borderColor: 'border-l-4 border-green-500',
      textColor: 'text-gray-800 dark:text-gray-200',
      iconColor: 'text-green-500',
    },
    error: {
      icon: AlertCircle,
      bgColor: 'bg-white dark:bg-gray-800',
      borderColor: 'border-l-4 border-red-500',
      textColor: 'text-gray-800 dark:text-gray-200',
      iconColor: 'text-red-500',
    },
    info: {
      icon: Info,
      bgColor: 'bg-white dark:bg-gray-800',
      borderColor: 'border-l-4 border-blue-500',
      textColor: 'text-gray-800 dark:text-gray-200',
      iconColor: 'text-blue-500',
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-white dark:bg-gray-800',
      borderColor: 'border-l-4 border-yellow-500',
      textColor: 'text-gray-800 dark:text-gray-200',
      iconColor: 'text-yellow-500',
    },
  };

  const { icon: Icon, bgColor, borderColor, textColor, iconColor } = config[type];

  // 자동 닫힘 타이머
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [id, duration, onClose]);

  return (
    <Transition
      appear
      show={true}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transition ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div 
        className={`
          ${bgColor} ${borderColor}
          shadow-lg rounded-md max-w-md w-full mb-3
          transform transition-all duration-300 ease-in-out
        `}
      >
        <div className="flex items-start p-3">
          <div className={`flex-shrink-0 mt-0.5 ${iconColor}`}>
            <Icon size={20} />
          </div>
          <div className={`ml-3 flex-1 ${textColor}`}>
            <p className="text-sm font-medium leading-5 whitespace-pre-line">
              {message}
            </p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={() => onClose(id)}
              className="inline-flex text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:text-gray-600"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
};

// 토스트 컨테이너
export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // 전역 토스트 이벤트 리스너
  useEffect(() => {
    const handleToast = (event: CustomEvent) => {
      const { toast } = event.detail;
      setToasts((prev) => [toast, ...prev]);
    };

    // 커스텀 이벤트 리스너 등록
    window.addEventListener('toast' as any, handleToast as any);

    return () => {
      window.removeEventListener('toast' as any, handleToast as any);
    };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 flex items-end justify-end px-4 py-6 pointer-events-none sm:p-6 z-50"
    >
      <div className="flex flex-col items-end space-y-2 w-full max-w-sm">
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onClose={removeToast} />
        ))}
      </div>
    </div>
  );
};

// 토스트 트리거 함수
const createToast = (type: ToastType, message: string, duration: number = 5000) => {
  const toast: ToastMessage = {
    id: Date.now().toString(),
    type,
    message,
    duration,
  };

  // 커스텀 이벤트 발생시켜 토스트 생성
  window.dispatchEvent(
    new CustomEvent('toast', {
      detail: { toast },
    })
  );
};

// 토스트 API
export const toast = {
  success: (message: string, duration?: number) => createToast('success', message, duration),
  error: (message: string, duration?: number) => createToast('error', message, duration),
  info: (message: string, duration?: number) => createToast('info', message, duration),
  warning: (message: string, duration?: number) => createToast('warning', message, duration),
};

// 앱 시작 시 토스트 컨테이너 생성
export const initToasts = () => {
  // DOM에 토스트 컨테이너 요소 추가
  const toastContainer = document.createElement('div');
  toastContainer.id = 'headless-toast-container';
  document.body.appendChild(toastContainer);

  // 컨테이너에 렌더링
  const root = createRoot(toastContainer);
  root.render(<ToastContainer />);
};