import React from 'react'

import ArticlePreview from './articlePreview'

import '@/styles/layout/aside.scss'

import { sampleMoreArticles } from '../_utils/data'
import { HeadingSecondary } from './headings'
import CardsList from './cardsList'

const MoreArticles: React.FC = () => {
  return (
    <aside className="more-articles">
      <HeadingSecondary>Mas articulos</HeadingSecondary>

      <CardsList type="articles">
        {sampleMoreArticles.map((article) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </CardsList>
    </aside>
  );
}

export default MoreArticles