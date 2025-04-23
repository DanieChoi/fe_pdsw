// src/store/useSseStore.ts
'use client';

import { create } from 'zustand';
import { connectSSE, OnMessage } from '@/lib/sseManager';

interface SSEState {
  lastMessage: any | null;
  start: (url: string) => void;
  stop: () => void;
}

export const useSseStore = create<SSEState>((set, get) => ({
  lastMessage: null,
  start: (url) => {
    const listener: OnMessage = (payload) => set({ lastMessage: payload });
    const dispose = connectSSE(url, listener);
    (get() as any).__dispose = dispose; // 내부 보관
  },
  stop: () => {
    (get() as any).__dispose?.();
    set({ lastMessage: null });
  },
}));
