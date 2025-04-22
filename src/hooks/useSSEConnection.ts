'use client';

import { useEffect, useRef } from 'react';
import { useAuthStore } from '@/store';
import { useSSEStore } from '@/store/useSSEStore';

// This hook manages the SSE connection lifecycle at the application level
export function useSSEConnection() {
  const { id, tenant_id } = useAuthStore();
  const { initSSE, closeSSE, getConnectionInfo } = useSSEStore();
  const messageHandlerRef = useRef<((data: any) => void) | null>(null);
  const isInitializedRef = useRef(false);

  // Create a consistent message handler function that won't change between renders
  useEffect(() => {
    if (!messageHandlerRef.current) {
      messageHandlerRef.current = (eventData) => {
        try {
          // You'll dispatch this event so any component can listen for SSE messages
          const sseEvent = new CustomEvent('sse-message', {
            detail: eventData
          });
          window.dispatchEvent(sseEvent);
        } catch (error) {
          console.error("🚨 [SSE 메시지 처리 오류]", error);
        }
      };
    }
  }, []);

  // Log connection status periodically (useful for debugging)
  useEffect(() => {
    // Only run in browser environment with valid user ID
    if (typeof window === 'undefined' || !id) return;

    const logConnectionStatus = () => {
      const connectionInfo = getConnectionInfo();
      console.log("📊 [SSE 연결 상태]", {
        연결됨: connectionInfo.isConnected,
        URL: connectionInfo.url,
        총연결횟수: connectionInfo.connectionCount,
        메시지수신횟수: connectionInfo.messageCount,
        마지막연결시간: connectionInfo.lastConnectedAt,
        연결ID: connectionInfo.connectionId,
      });
    };

    // Initial connection status log
    logConnectionStatus();

    // Set up interval for status logging
    const statusInterval = setInterval(logConnectionStatus, 30000);

    return () => {
      clearInterval(statusInterval);
    };
  }, [id, getConnectionInfo]);

  // Set up SSE connection and handle message processing
  useEffect(() => {
    // Only run in browser environment with valid user ID
    if (typeof window === 'undefined' || !window.EventSource || !id || !tenant_id) {
      return;
    }

    // Check for page visibility changes to handle tab switching
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const info = getConnectionInfo();
        // If we're not connected but should be, try to reconnect
        if (!info.isConnected && messageHandlerRef.current) {
          console.log('📱 [SSE] Tab became visible, checking connection...');
          // Slight delay to allow browser to settle
          setTimeout(() => {
            initSSE(id, tenant_id, messageHandlerRef.current!);
          }, 500);
        }
      }
    };

    // Handle before unload to potentially persist connection state
    const handleBeforeUnload = () => {
      // Store current timestamp so we can detect quick refreshes
      sessionStorage.setItem('SSE_LAST_UNLOAD', Date.now().toString());
    };

    // Add event listeners
    window.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    if (!isInitializedRef.current && messageHandlerRef.current) {
      console.log(`🔄 [SSE 연결 관리자] 연결 시도: 사용자 ID: ${id}, 테넌트 ID: ${tenant_id}`);
      
      // Check if we're coming back from a quick refresh
      const lastUnload = sessionStorage.getItem('SSE_LAST_UNLOAD');
      const isQuickRefresh = lastUnload && (Date.now() - parseInt(lastUnload)) < 3000;

      if (isQuickRefresh) {
        console.log('🔄 [SSE] Quick page refresh detected, attempting to reuse connection');
      }

      // Initialize the SSE connection using the store
      initSSE(id, tenant_id, messageHandlerRef.current);
      isInitializedRef.current = true;
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      
      // Don't close the connection on unmount if we're just refreshing
      // This helps with development hot reloading and normal page navigation
      // The actual cleanup is handled by the store's persistence
    };
  }, [id, tenant_id, initSSE, closeSSE, getConnectionInfo]);
  
  // Final cleanup on window unload (browser close or navigate away)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleUnload = () => {
      // Close the connection when the application is actually closed
      // (not just refreshed or navigating within the app)
      closeSSE();
    };
    
    // Use the more modern 'pagehide' event which better distinguishes
    // between page refreshes and actual application close
    window.addEventListener('pagehide', (e) => {
      if (e.persisted) {
        // Page is being cached for back-forward navigation, don't close
        console.log('📑 [SSE] Page cached for back-forward navigation');
      } else {
        // Actual navigation away from the site
        handleUnload();
      }
    });
    
    return () => {
      window.removeEventListener('pagehide', handleUnload);
    };
  }, [closeSSE]);
}

export default useSSEConnection;