// src/components/ui/PulseBarsLoader.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface PulseBarsLoaderProps {
  /** 로더 전체 크기 (px) */
  size?: number;
  /** 바 색상 */
  primaryColor?: string;
  accentColor?: string;
  /** 메시지 */
  message?: string;
  /** 메시지 표시 여부 */
  showMessage?: boolean;
}

/**
 * PulseBarsLoader: 3개의 세로 막대가 파동처럼 스케일 애니메이션을 수행
 * 간결하지만 눈에 띄는 파스텔 블루 계열 디자인
 */
export const PulseBarsLoader: React.FC<PulseBarsLoaderProps> = ({
  size = 60,
  primaryColor = "#93C5FD",   // Tailwind sky-300
  accentColor = "#DBEAFE",    // Tailwind sky-200
  message = "로딩 중입니다...",
  showMessage = true,
}) => {
  const barCount = 3;
  const barWidth = size / 8;
  const barHeight = size * 0.5;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-3">
      <div
        className="flex items-end justify-center"
        style={{ height: size, width: size }}
      >
        {Array.from({ length: barCount }).map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full"
            style={{
              width: barWidth,
              height: barHeight,
              marginLeft: i > 0 ? barWidth / 2 : 0,
            }}
            initial={{ scaleY: 0.4, backgroundColor: primaryColor }}
            animate={{
              scaleY: [0.4, 1, 0.4],
              backgroundColor: [primaryColor, accentColor, primaryColor],
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        ))}
      </div>
      {showMessage && (
        <p className="text-xs text-gray-600 animate-pulse">{message}</p>
      )}
    </div>
  );
};
