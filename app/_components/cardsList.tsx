import React from 'react'
import "@/styles/layout/aside.scss";

interface Props{
  type: 'authors' | 'articles',
  children: React.ReactNode
}

const CardsList: React.FC<Props> = ({ children, type }) => {
  return (
    <ul className={`more-${type}__list`}>
      {children}
    </ul>
  )
}

export default CardsList