import React from 'react'
import ArticleSection from './articleSection'

interface Props{
  children: React.ReactNode
}

const ArticleBody: React.FC<Props> = ({ children }) => {
  return (
    <main className='article-body'>
      <ArticleSection>{children}</ArticleSection>
    </main>
  )
}

export default ArticleBody