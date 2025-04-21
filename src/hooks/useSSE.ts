// src/hooks/useSSEForFooter.ts
"use client";

import { useEffect, useRef } from "react";
import isEqual from "lodash/isEqual";

interface SSEProps {
  id: string;
  tenant_id: number;
  onMessage: (
    announce: string,
    command: string,
    data: any,
    kind: string,
    campaign_id: string,
    fullData: any
  ) => void;
}

export function useSSEForFooter({ id, tenant_id, onMessage }: SSEProps) {
  const eventSourceRef = useRef<EventSource | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.EventSource || id === "") return;

    const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
    const url = `${DOMAIN}/notification/${tenant_id}/subscribe/${id}`;

    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }

    const eventSource = new EventSource(url);
    eventSourceRef.current = eventSource;

    let lastData: any = {};
    let lastAnnounce = "";
    let lastKind = "";
    let lastCampaignId = "";

    eventSource.addEventListener("message", (event) => {
      if (event.data !== "Connected!!") {
        const parsed = JSON.parse(event.data);
        const { announce, command, data, kind, campaign_id } = parsed;

        const isNew =
          announce !== lastAnnounce ||
          kind !== lastKind ||
          campaign_id !== lastCampaignId ||
          !isEqual(data, lastData);

        if (isNew) {
          lastAnnounce = announce;
          lastKind = kind;
          lastCampaignId = campaign_id;
          lastData = data;

          onMessage(announce, command, data, kind, campaign_id, parsed);
        }
      }
    });

    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
    };
  }, [id, tenant_id, onMessage]);
}
