import { createContext, useContext, useEffect, useRef } from 'react'
import { type StoreApi, useStore } from 'zustand'
import { type NotificationStore, createNotificationStore } from './notificationStore'

interface Props{
  children: React.ReactNode
}

const NotificationsContext = createContext<StoreApi<NotificationStore> | null>(null)

export const NotificationProvider: React.FC<Props> = ({ children }) => {
  const storeRef = useRef<StoreApi<NotificationStore>>()

  if (!storeRef.current) {
    storeRef.current = createNotificationStore()
  }

  return (
    <NotificationsContext.Provider value={storeRef.current}>
      {children}
    </NotificationsContext.Provider>
  )
}

export const useNotificationStore = <T,>( selector: (store: NotificationStore) => T, ): T => {
  const counterStoreContext = useContext(NotificationsContext)

  if (!counterStoreContext) {
    throw new Error(`useNotificationStore must be use within NotificationStoreProvider`)
  }

  return useStore(counterStoreContext, selector)
}

