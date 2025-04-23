// app/_components/NotificationSetup.tsx (Example)
"use client";

import { useEffect } from "react";
import { useSseStore } from "@/store/sseStore"; // Adjust path
import { useAuthStore } from "@/store";
// Assume you get id and tenant_id from context or props

export function NotificationSetup() {
  // Get connection parameters (replace with your actual method)
  const { id, tenant_id, /* other auth state */ } = useAuthStore(); // Example

  // Get actions and state from the Zustand store
  const { connect, disconnect, isConnected, latestMessage } = useSseStore();

  // Retrieve API URL from runtime config
  const apiUrl = typeof window !== 'undefined' && window.__RUNTIME_CONFIG__
    ? window.__RUNTIME_CONFIG__.NEXT_PUBLIC_API_URL
    : process.env.NEXT_PUBLIC_API_URL; // Fallback maybe? Or handle loading state

  useEffect(() => {
    // Make sure we have the necessary info and the API URL is loaded
    if (id && tenant_id && apiUrl) {
      console.log(`NotificationSetup: Attempting to connect SSE for user ${id}, tenant ${tenant_id}`);
      connect(tenant_id.toString(), id, apiUrl);

      // The cleanup (disconnecting) is now handled internally by the store's
      // disconnect action, which gets correctly set up within the connect action.
      // When id, tenant_id, or apiUrl changes, this effect re-runs,
      // calling connect again, which handles closing the old connection via the service.
      // The return function here ensures cleanup if NotificationSetup itself unmounts.
      return () => {
          console.log("NotificationSetup: Unmounting or dependencies changed, ensuring disconnect.");
          // It's generally safer to let the store manage the disconnect logic
          // based on subsequent `connect` calls or explicit `disconnect` needs.
          // Calling disconnect() here might be redundant if dependencies change
          // and connect() is immediately called again, but safe for unmount.
          // disconnect(); // Consider if needed based on your app structure
      };
    } else {
      // If we lose ID/Tenant, disconnect
      console.log("NotificationSetup: Missing id, tenant_id, or apiUrl. Disconnecting.");
      disconnect();
    }
  }, [id, tenant_id, apiUrl, connect, disconnect]); // Add store actions as dependencies

  // You can use `isConnected` and `latestMessage` here or in other components
  // subscribed to useSseStore if needed for UI feedback.
  useEffect(() => {
      if (latestMessage) {
          console.log("NotificationSetup: New message processed from store:", latestMessage);
          // Trigger your footerDataSet or other UI updates here
          // footerDataSet(
          //   latestMessage.announce,
          //   latestMessage.command,
          //   latestMessage.data,
          //   latestMessage.kind,
          //   latestMessage.campaign_id,
          //   latestMessage.skill_id || "",
          //   latestMessage // Pass the whole object
          // );
      }
  }, [latestMessage /*, footerDataSet */]); // Add your update function dependency


  // This component might not render anything itself, just manage the connection
  return null;
}