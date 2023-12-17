import React from 'react'

import '@/styles/layout/article.scss'
import { getArticleById } from '@/app/_utils/getData'
import ArticleHeader from '../_components/articleHeader'

interface Props{
  params: {
    articleId: string
  }
}

const Page: React.FC<Props> = ({ params }) => {
  const article = getArticleById(params.articleId)

  if(!article) return <p>Articulo no encontrado</p>

  return (
    <article className='article'>
      <ArticleHeader article={article}/>
    </article>
  );
}

export default Page