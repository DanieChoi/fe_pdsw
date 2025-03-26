// CustomToast.tsx
import React, { Fragment, useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircle, AlertCircle, Info, AlertTriangle, X, User } from 'lucide-react';
import { createRoot } from 'react-dom/client';

// 색상 타입 정의
export type ToastColors = {
  bgColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  textColor?: string;
};

// 토스트 타입 정의
export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'event';

// 토스트 메시지 타입 정의
export interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
  // 색상 커스터마이징 추가
  colors?: ToastColors;
}

// 토스트 컴포넌트 props
interface ToastProps {
  toast: ToastMessage;
  onClose: (id: string) => void;
}

// 기본 색상 설정
const defaultColors: Record<ToastType, ToastColors> = {
  success: {
    bgColor: 'bg-[#5BC2C1]', // NEXPOS 테마 색상 (청록색)
    textColor: 'text-white',
  },
  error: {
    bgColor: 'bg-[#F86B68]', // 오류 메시지용 레드 계열
    textColor: 'text-white',
  },
  info: {
    bgColor: 'bg-[#3D8BF8]', // 정보 메시지용 블루 계열
    textColor: 'text-white',
  },
  warning: {
    bgColor: 'bg-[#F8B53D]', // 경고 메시지용 옐로우 계열
    textColor: 'text-white',
  },
  event: {
    // 보라색에서 푸른색 계열로 변경
    bgColor: 'bg-[#4A90E2]',
    gradientFrom: 'from-[#5A9FE8]',
    gradientTo: 'to-[#3A80D2]',
    textColor: 'text-white',
  },
};

// 토스트 컴포넌트
const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  const { id, type, message, duration = 5000, colors } = toast;

  // 타입별 스타일 및 아이콘 설정
  const config = {
    success: {
      icon: CheckCircle,
      title: '성공'
    },
    error: {
      icon: AlertCircle,
      title: '오류'
    },
    info: {
      icon: Info,
      title: '안내'
    },
    warning: {
      icon: AlertTriangle,
      title: '주의'
    },
    event: {
      icon: User, // 상담원 아이콘으로 사용
      title: 'EVENT'
    },
  };

  // 커스텀 색상 또는 기본 색상 사용
  const typeColors = defaultColors[type];
  const customColors = colors || {};
  
  const bgColor = customColors.bgColor || typeColors.bgColor;
  const gradientFrom = customColors.gradientFrom || typeColors.gradientFrom;
  const gradientTo = customColors.gradientTo || typeColors.gradientTo;
  const textColor = customColors.textColor || typeColors.textColor;
  
  const { icon: Icon, title } = config[type];
  
  // 그라데이션 사용 여부에 따른 배경 클래스
  let bgColorClass = bgColor;
  if (gradientFrom && gradientTo) {
    bgColorClass = `bg-gradient-to-br ${gradientFrom} ${gradientTo}`;
  }

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
          ${bgColorClass}
          shadow-md rounded-lg max-w-xs w-56 mb-3
          transform transition-all duration-300 ease-in-out
          overflow-hidden
        `}
        style={{ height: 'auto', maxHeight: '6rem' }} // 높이 조절
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between p-1.5 border-b border-white/20">
          <div className="flex items-center">
            <div className={`flex-shrink-0 ${textColor} ml-1 mr-1.5`}>
              <Icon size={14} />
            </div>
            <span className={`font-medium text-xs ${textColor}`}>
              {title}
            </span>
          </div>
          <button
            onClick={() => onClose(id)}
            className={`${textColor} hover:${textColor}/80 focus:outline-none mr-1`}
          >
            <X size={14} />
          </button>
        </div>
        
        {/* 컨텐츠 */}
        <div className="p-2 text-xs">
          <p className={`font-medium leading-5 whitespace-pre-line ${textColor} line-clamp-2`}>
            {message}
          </p>
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
      setToasts((prev) => [toast, ...prev.slice(0, 4)]); // 최대 5개만 표시
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
      <div className="flex flex-col items-end space-y-2">
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onClose={removeToast} />
        ))}
      </div>
    </div>
  );
};

// 토스트 생성 함수
interface CreateToastOptions {
  duration?: number;
  colors?: ToastColors;
}

const createToast = (
  type: ToastType, 
  message: string, 
  options: CreateToastOptions = {}
) => {
  // 고유한 ID 생성 방식으로 변경 - 타임스탬프와 랜덤 문자열 조합
  const toast: ToastMessage = {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    type,
    message,
    duration: options.duration || 5000,
    colors: options.colors
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
  success: (message: string, options?: CreateToastOptions) => 
    createToast('success', message, options),
  error: (message: string, options?: CreateToastOptions) => 
    createToast('error', message, options),
  info: (message: string, options?: CreateToastOptions) => 
    createToast('info', message, options),
  warning: (message: string, options?: CreateToastOptions) => 
    createToast('warning', message, options),
  event: (message: string, options?: CreateToastOptions) => 
    createToast('event', message, options),
};

// 앱 시작 시 토스트 컨테이너 생성
export const initToasts = () => {
  // 이미 존재하는지 확인
  if (document.getElementById('headless-toast-container')) return;
  
  // DOM에 토스트 컨테이너 요소 추가
  const toastContainer = document.createElement('div');
  toastContainer.id = 'headless-toast-container';
  document.body.appendChild(toastContainer);

  // 컨테이너에 렌더링
  const root = createRoot(toastContainer);
  root.render(<ToastContainer />);
};