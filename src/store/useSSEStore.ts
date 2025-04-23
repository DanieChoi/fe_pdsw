'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SSEState {
  isConnected: boolean;
  url: string | null;
  eventSource: EventSource | null;
  lastConnectedAt: string | null;
  connectionCount: number;
  messageCount: number;
  
  // Methods
  initSSE: (userId: string, tenantId: string, messageHandler: (data: any) => void) => void;
  closeSSE: () => void;
  getConnectionInfo: () => {
    isConnected: boolean;
    url: string | null;
    connectionCount: number;
    messageCount: number;
    lastConnectedAt: string | null;
  };
}

export const useSSEStore = create<SSEState>()(
  persist(
    (set, get) => ({
      isConnected: false,
      url: null,
      eventSource: null,
      lastConnectedAt: null,
      connectionCount: 0,
      messageCount: 0,
      
      initSSE: (userId, tenantId, messageHandler) => {
        // Close existing connection if any
        const { closeSSE } = get();
        closeSSE();
        
        // Only run in browser environment
        if (typeof window === 'undefined' || !window.EventSource) {
          console.warn('SSE not supported in this environment');
          return;
        }
        
        try {
          // Connection URL
          const url = `/notification/${tenantId}/subscribe/${userId}`;
          
          // Create new EventSource
          const eventSource = new EventSource(url);
          
          // Set connected state on open
          eventSource.onopen = () => {
            console.log('🔌 [SSE] Connection established:', url);
            set(state => ({
              isConnected: true,
              url,
              eventSource,
              lastConnectedAt: new Date().toISOString(),
              connectionCount: state.connectionCount + 1
            }));
            
            // Store connection info in sessionStorage to prevent duplicate connections
            sessionStorage.setItem('SSE_CONNECTED', url);
            
            // Set global flag to prevent multiple connections
            (window as any).SSE_GLOBAL = true;
          };
          
          // Handle messages
          eventSource.addEventListener('message', (event) => {
            if (event.data !== "Connected!!") {
              try {
                const data = JSON.parse(event.data);
                messageHandler(data);
                
                // Update message count
                set(state => ({ messageCount: state.messageCount + 1 }));
              } catch (error) {
                console.error('🚨 [SSE] Failed to parse message:', error);
              }
            }
          });
          
          // Handle errors
          eventSource.onerror = (error) => {
            console.error('🚨 [SSE] Connection error:', error);
            
            // We don't set isConnected to false here as the browser will try to reconnect automatically
            // Only if we call closeSSE() explicitly should isConnected be set to false
          };
          
          // Set initial state
          set({ 
            eventSource,
            url,
            // Keep isConnected as false until onopen fires
          });
          
        } catch (error) {
          console.error('🚨 [SSE] Failed to initialize:', error);
          set({ isConnected: false, url: null, eventSource: null });
        }
      },
      
      closeSSE: () => {
        const { eventSource } = get();
        
        if (eventSource) {
          console.log('🔌 [SSE] Closing connection');
          eventSource.close();
          
          // Clear sessionStorage flag
          sessionStorage.removeItem('SSE_CONNECTED');
          
          // Clear global flag
          if (typeof window !== 'undefined') {
            (window as any).SSE_GLOBAL = false;
          }
        }
        
        set({ isConnected: false, eventSource: null });
      },
      
      getConnectionInfo: () => {
        const { isConnected, url, connectionCount, messageCount, lastConnectedAt } = get();
        return { isConnected, url, connectionCount, messageCount, lastConnectedAt };
      }
    }),
    {
      name: 'sse-storage',
      // Only persist these fields
      partialize: (state) => ({
        connectionCount: state.connectionCount,
        messageCount: state.messageCount,
        lastConnectedAt: state.lastConnectedAt,
      }),
    }
  )
);