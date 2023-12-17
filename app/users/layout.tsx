import React from 'react'
import MoreArticles from '../_components/moreArticles'
import MoreAuthors from '../_components/moreAuthors'

interface Props{
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}

      <MoreArticles />

      <MoreAuthors />
    </>
  )
}

export default Layout