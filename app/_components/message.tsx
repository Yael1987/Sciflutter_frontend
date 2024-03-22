import '@/styles/components/message.scss'
import '@/styles/layout/container-empty.scss'

interface Props{
  message: string,
  subMessage?: string
}

const Message: React.FC<Props> = ({ message, subMessage = "" }) => {
  return (
    <div className='l-container-empty'>
      <p className='c-message'>{message}</p>
      {subMessage && <p className='c-message_sub'>{subMessage}</p>}
    </div>
  )
}

export default Message