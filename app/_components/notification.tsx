import React from 'react'
import { BaseComponent } from '../_interfaces/components'

import '@/styles/components/notification.scss'

interface Props extends BaseComponent{
  type: string
}

const Notification: React.FC<Props> = ({ children, type }) => {
  return (
    <div className={`notification notification--${type}`}>
      <h2>{type}</h2>
      <p>{children}</p>
    </div>
  )
}

export default Notification