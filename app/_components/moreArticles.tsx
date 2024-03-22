import React from 'react'


import '@/styles/layout/more.scss'

import { sampleMoreArticles } from '../_utils/data'
import { HeadingSecondary } from './headings'
import ArticlePreviewList from './articlePreviewList'
import { ArticlePreview } from '../_interfaces/api'

const MoreArticles: React.FC = () => {
  // const sampleArt: ArticlePreview[] = [];

  return (
    <aside className="l-more">
      <HeadingSecondary>Mas articulos</HeadingSecondary>

      <ArticlePreviewList articleList={sampleMoreArticles} emptyMessage='There are no recommended articles'/>
    </aside>
  );
}

export default MoreArticles