"use client"
import { useUserStore } from '../_store/userStore'
import clsx from 'clsx'

import '@/styles/components/alert.scss'
import { useEffect, useRef } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { CheckSquare, Warning, XSquare } from '@phosphor-icons/react'

const ICON = {
  error: <XSquare size={32} className='alert__icon'/>,
  success: <CheckSquare size={32} className='alert__icon'/>,
  warn: <Warning size={32} className='alert__icon'/>
}

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
    
    <div className={clsx(`alert alert_${alert.type}`, Boolean(alert.message) && "is-display")} ref={alertRef}>
      <div className='alert__icon-box'>{ICON[alert.type]}</div>
      <p>{alert.message}</p>
    </div>
  )
}

export default Alert