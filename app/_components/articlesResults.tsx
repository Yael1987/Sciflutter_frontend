"use client"
import { useEffect } from 'react'

import Pagination from './pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import ArticlePreviewList from './articlePreviewList';
import { ArticlePreview } from '../_interfaces/api';

interface Props {
  articles: ArticlePreview[],
  pages: number
}

const ArticlesResults: React.FC<Props> = ({ articles, pages }) => {
  const { push } = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!searchParams.get("page")) {
      const params = new URLSearchParams(searchParams);
      
      params.set("page", "1");
      
      push(`?${params.toString()}`, {scroll: false});
    }
  }, [push, searchParams])

  return (
    <>
      <div className="l-results-articles">
        <ArticlePreviewList articleList={articles} emptyMessage=''/>
      </div>

      {pages > 1 && <Pagination pages={pages} />}
    </>
  );
}

export default ArticlesResults