import React from 'react'
import CardsList from './cardsList';
import dynamic from 'next/dynamic';
import ArticlePreviewSkeleton from '../_skeletons/articlePreviewSkeleton';
import { ArticlePreview } from '../_interfaces/api';

const DynamicArticlePreview = dynamic(() => import('./articlePreview'), { loading: () => <ArticlePreviewSkeleton /> })

interface Props{
  articleList: ArticlePreview[];
}

const ArticlePreviewList: React.FC<Props> = ({articleList}) => {
  return (
    <CardsList type="articles">
      {articleList.map((article: ArticlePreview) => (
        <DynamicArticlePreview article={article} key={article._id} />
      ))}
    </CardsList>
  );
}

export default ArticlePreviewList