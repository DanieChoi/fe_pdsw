// store/useSSEStore.ts
'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type EventData = {
  announce: string;
  command: string;
  data: any;
  kind: string;
  campaign_id: string;
  skill_id?: string;
  [key: string]: any;
};

// Define the type for the message handler function
type MessageHandler = (data: EventData) => void;

type SSEState = {
  eventSource: EventSource | null;
  isConnected: boolean;
  userId: string | null;
  tenantId: string | null;
  messageHandler: MessageHandler | null; // Store the handler reference

  // --- Methods ---
  // Initializes or re-initializes the SSE connection
  initSSE: (userId: string, tenantId: string, handler: MessageHandler) => void;
  // Internal connect logic
  connect: () => void;
  // Disconnects the SSE connection
  disconnect: () => void;
  // Attempts to restore connection after page load/refresh
  restoreConnection: (handler: MessageHandler) => void; // Handler needed on restore
};

export const useSSEStore = create<SSEState>()(
  persist(
    (set, get) => ({
      eventSource: null,
      isConnected: false,
      userId: null,
      tenantId: null,
      messageHandler: null, // Initialize handler as null

      initSSE: (userId, tenantId, handler) => {
        console.log("🔌 [SSE Store] Initializing SSE with:", { userId, tenantId });
        // Disconnect any existing connection first
        get().disconnect();
        // Store user info and the handler
        set({ userId, tenantId, messageHandler: handler, isConnected: false });
        // Attempt to connect
        get().connect();
      },

      connect: () => {
        const { userId, tenantId, messageHandler, eventSource: currentEventSource, isConnected } = get();

        // Prevent multiple connections, or connecting without necessary info/handler
        if (currentEventSource || isConnected || !userId || !tenantId || !messageHandler) {
          if (!userId || !tenantId) console.warn('⚠️ [SSE Store] Cannot connect: userId or tenantId missing.');
          if (!messageHandler) console.warn('⚠️ [SSE Store] Cannot connect: messageHandler missing.');
          if (currentEventSource || isConnected) console.log('ℹ️ [SSE Store] Connection attempt skipped: Already connected or connecting.');
          return;
        }

        // Check browser environment
        if (typeof window === 'undefined' || !window.EventSource) {
          console.warn('⚠️ [SSE Store] Cannot connect: Not in a browser environment or EventSource not supported.');
          return;
        }

        const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
        if (!DOMAIN) {
          console.error('🚨 [SSE Store] Connection failed: NEXT_PUBLIC_API_URL is not defined.');
          return;
        }

        const sseUrl = `${DOMAIN}/notification/${tenantId}/subscribe/${userId}`;
        console.log(`🔌 [SSE Store] Attempting to connect to: ${sseUrl}`);

        try {
          const newEventSource = new EventSource(sseUrl);

          newEventSource.onopen = () => {
            console.log('✅ [SSE Store] Connection established:', sseUrl);
            set({ eventSource: newEventSource, isConnected: true });
          };

          newEventSource.onerror = (error) => {
            console.error('🚨 [SSE Store] Connection error:', error);
            // Close the errored source and reset state
            newEventSource.close();
            set({ eventSource: null, isConnected: false });

            // Optional: Implement a simple retry mechanism here if needed, e.g.,
            // setTimeout(() => {
            //   console.log('🔄 [SSE Store] Retrying connection...');
            //   get().connect(); // Be careful with infinite loops
            // }, 5000); // Retry after 5 seconds
          };

          newEventSource.addEventListener('message', (event) => {
            if (event.data === "Connected!!") {
              console.log("👍 [SSE Store] Received connection confirmation.");
              return;
            }

            try {
              const eventData: EventData = JSON.parse(event.data);
              // Basic validation
              if (typeof eventData !== 'object' || eventData === null) {
                 console.warn("⚠️ [SSE Store] Received non-object message data:", event.data);
                 return;
              }
              // console.log("✉️ [SSE Store] Message received:", eventData); // Log raw message if needed
              // Call the stored handler
              messageHandler(eventData);
            } catch (parseError) {
              console.error('🚨 [SSE Store] Failed to parse message data:', event.data, parseError);
            }
          });

           // Store the new event source instance immediately (before onopen)
           // This helps prevent race conditions if connect is called again quickly
           set({ eventSource: newEventSource });

        } catch (connectError) {
          console.error('🚨 [SSE Store] Failed to create EventSource:', connectError);
          set({ eventSource: null, isConnected: false });
        }
      },

      disconnect: () => {
        const { eventSource } = get();
        if (eventSource) {
          console.log('🔌 [SSE Store] Disconnecting...');
          eventSource.close();
          set({ eventSource: null, isConnected: false });
        }
      },

      restoreConnection: (handler: MessageHandler) => {
         const { userId, tenantId, isConnected, eventSource } = get();
         console.log('🔄 [SSE Store] Attempting to restore connection...');
         if (userId && tenantId && !isConnected && !eventSource) {
            console.log('   Restoring with:', { userId, tenantId });
            set({ messageHandler: handler }); // Ensure handler is up-to-date
            get().connect();
         } else {
            if (!userId || !tenantId) console.log('   Restore skipped: No user/tenant ID found in state.');
            if (isConnected || eventSource) console.log('   Restore skipped: Already connected or connection attempt in progress.');
         }
      }

    }),
    {
      name: 'sse-connection-storage', // Unique name for localStorage key
      storage: createJSONStorage(() => localStorage),
      // Only persist userId and tenantId. `eventSource` and `messageHandler` cannot be serialized.
      // `isConnected` could be persisted, but it's safer to re-establish connection on load.
      partialize: (state) => ({
        userId: state.userId,
        tenantId: state.tenantId,
        // isConnected: state.isConnected // Optionally persist connection status flag
      }),
      // Optional: Handle rehydration (when state is loaded from storage)
      onRehydrateStorage: (state) => {
        console.log('💧 [SSE Store] State rehydrated from storage');
        // We don't automatically reconnect here, `restoreConnection` should be called explicitly
        // from the application logic (e.g., in a main layout component)
        return (state, error) => {
          if (error) {
            console.error('🚨 [SSE Store] Failed to rehydrate state:', error);
          }
          // Reset transient state on rehydration
          if (state) {
            state.eventSource = null;
            state.isConnected = false;
            state.messageHandler = null;
          }
        }
      }
    }
  )
);

// Optional: Add logic outside the store to attempt restoration on load,
// but this requires knowing the correct message handler. It's often better
// to call restoreConnection from your main App/Layout component.
// if (typeof window !== 'undefined') {
//   window.addEventListener('load', () => {
//     setTimeout(() => {
//       // You MUST provide the correct handler here!
//       // const appMessageHandler = (data) => { /* ... your handler logic ... */ };
//       // useSSEStore.getState().restoreConnection(appMessageHandler);
//       console.log("⚠️ [SSE Store] Auto-restore on load is not fully configured without a message handler.");
//     }, 1000); // Delay slightly
//   });
// }