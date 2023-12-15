import React from 'react'

interface Props {
  children: React.ReactNode
}

import '@/styles/components/carrousel.scss'

const Carrousel: React.FC<Props> = ({ children }) => {
  return (
    <div className='carrousel'>
      <ul className='carrousel__list'>
        {children}
      </ul>
    </div>
  )
}

export default Carrousel