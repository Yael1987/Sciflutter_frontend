import { BaseComponent } from '../_interfaces/components'

import '@/styles/components/message.scss'

const Message: React.FC<BaseComponent> = ({ children }) => {
  return (
    <p className='message'>{children}</p>
  )
}

export default Message