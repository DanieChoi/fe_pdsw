// lib/getRuntimeEnv.ts
declare global {
  interface Window {
    __RUNTIME_CONFIG__?: Record<string, string>;
  }
}

export const getRuntimeEnv = (key: string): string => {
    if (typeof window !== 'undefined') {
      return window.__RUNTIME_CONFIG__?.[key] ?? '';
    }
    return '';
  };
  