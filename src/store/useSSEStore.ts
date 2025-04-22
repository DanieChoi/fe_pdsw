// src/store/useSSEStore.ts
import { create } from 'zustand'

interface SSEStore {
  eventSource: EventSource | null
  connectionCount: number
  messageCount: number
  lastConnectedAt: string | null
  connectionsHistory: string[]
  initSSE: (id: string, tenant_id: number, onMessage: (data: any) => void) => void
  closeSSE: () => void
  getConnectionInfo: () => {
    isConnected: boolean
    url: string | null
    connectionCount: number
    messageCount: number
    lastConnectedAt: string | null
    connectionsHistory: string[]
    readyState?: number
  }
}

const MAX_HISTORY_LENGTH = 20

if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    sessionStorage.removeItem('SSE_CONNECTED')
  })
}

export const useSSEStore = create<SSEStore>((set, get) => ({
  eventSource: null,
  connectionCount: 0,
  messageCount: 0,
  lastConnectedAt: null,
  connectionsHistory: [],
  initSSE: (id, tenant_id, onMessage) => {
    if (get().eventSource) {
      console.log(`♻️ [SSE] 이미 연결됨: ${get().eventSource?.url}`)
      return
    }
    const DOMAIN = process.env.NEXT_PUBLIC_API_URL
    if (!DOMAIN) {
      console.error('🚨 [SSE] NEXT_PUBLIC_API_URL이 설정되지 않음')
      return
    }
    const url = `${DOMAIN}/notification/${tenant_id}/subscribe/${id}`
    if (sessionStorage.getItem('SSE_CONNECTED') === url) {
      console.log(`♻️ [SSE] sessionStorage 중복 방지: ${url}`)
      return
    }
    const es = new EventSource(url)
    if (typeof window !== 'undefined') {
      ;(window as any).SSE_GLOBAL = es
    }
    const now = new Date().toISOString()
    set(state => ({
      eventSource: es,
      connectionCount: state.connectionCount + 1,
      lastConnectedAt: now,
      connectionsHistory: [ `${now} - ${url}`, ...state.connectionsHistory ].slice(0, MAX_HISTORY_LENGTH)
    }))
    es.addEventListener('open', () => {
      console.log(`✅ [SSE 연결 성공]: ${url}`)
      sessionStorage.setItem('SSE_CONNECTED', url)
    })
    es.addEventListener('message', event => {
      if (event.data === 'Connected!!') {
        console.log('✅ [SSE Heartbeat]')
      } else {
        try {
          const parsed = JSON.parse(event.data)
          set(state => ({ messageCount: state.messageCount + 1 }))
          console.log(`📩 [메시지 #${get().messageCount}]`, parsed)
          onMessage(parsed)
        } catch {
          console.error('🚨 [SSE] 메시지 파싱 실패:', event.data)
        }
      }
    })
    es.onerror = err => {
      console.error('🚨 [SSE 오류]', err)
      get().closeSSE()
    }
  },
  closeSSE: () => {
    const current = get().eventSource
    if (current) {
      console.log(`🧹 [SSE 연결 종료]: ${current.url}`)
      current.close()
      if (typeof window !== 'undefined' && (window as any).SSE_GLOBAL === current) {
        delete (window as any).SSE_GLOBAL
      }
      sessionStorage.removeItem('SSE_CONNECTED')
      set({ eventSource: null })
    }
  },
  getConnectionInfo: () => {
    const current = get().eventSource
    const info = {
      isConnected: current !== null && current.readyState === EventSource.OPEN,
      url: current ? current.url : null,
      connectionCount: get().connectionCount,
      messageCount: get().messageCount,
      lastConnectedAt: get().lastConnectedAt,
      connectionsHistory: get().connectionsHistory,
      readyState: current?.readyState
    }
    console.log('ℹ️ [SSE 상태]', info)
    return info
  }
}))
