import { ArticlePreviewI } from '@/app/_interfaces'
import { formatLongDate } from '@/app/_utils/dateUtils'
import Image from 'next/image'
import React from 'react'

interface Props{
  article: ArticlePreviewI
}

const ArticleHeader: React.FC<Props> = ({ article }) => {
  return (
    <header className="article-header">
      <div className="article-header__details">
        <div className="article-header__details-author">
          <Image src={article.author.photos.profile} alt='author picture' width={48} height={48}/>

          <div className="article-header__details-author__text">
            <strong>{article.author.name} {article.author.lastName}</strong>

            <p>{article.discipline}</p>
          </div>
        </div>

        <p className="article-header__details-date">{formatLongDate(article.createdAt)}</p>
      </div>
      <h1 className="article-header__heading">{article.name}</h1>
    </header>
  )
}

export default ArticleHeader