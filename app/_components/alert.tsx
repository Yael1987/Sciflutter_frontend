"use client"
import { useUserStore } from '../_store/userStore'
import clsx from 'clsx'

import '@/styles/components/alert.scss'
import { useEffect, useRef } from 'react'
import { useShallow } from 'zustand/react/shallow'

const Alert: React.FC = () => {
  const { alert } = useUserStore()
  const hiddeAlert = useUserStore(useShallow(state => state.hiddeAlert))
  const alertRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    
    const currentAlert = alertRef.current

    currentAlert?.addEventListener('click', () => {
      hiddeAlert()
    })
    
    return () => {
      currentAlert?.removeEventListener("click", () => {
        hiddeAlert();
      });
    }
    
  }, [hiddeAlert])

  return (
    
    <div className={clsx(`alert alert--${alert.type}`, Boolean(alert.message) && "alert-display")} ref={alertRef}>
      <p>{alert.message}</p>
    </div>
  )
}

export default Alert