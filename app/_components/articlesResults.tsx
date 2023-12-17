"use client"
import React, { useEffect } from 'react'

import { type ArticlePreviewI } from '../_interfaces';

import ArticlePreview from './articlePreview';
import Pagination from './pagination';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  articles: ArticlePreviewI[]
}

const ArticlesResults: React.FC<Props> = ({ articles }) => {
  const { push } = useRouter()
  const searchParams = useSearchParams()

  const pages = Math.ceil(articles.length / 2)

  useEffect(() => {
    if (!searchParams.get("page")) {
      const params = new URLSearchParams(searchParams);
      
      params.set("page", "1");
      
      push(`?${params.toString()}`, {scroll: false});
    }
  }, [push, searchParams])

  return (
    <>
      <div className="results-articles">
        <ul className="more-articles__list">
          {articles.map((article) => (
            <ArticlePreview key={article.id} article={article} />
          ))}
        </ul>
      </div>

      <Pagination pages={pages}/>
    </>
  );
}

export default ArticlesResults