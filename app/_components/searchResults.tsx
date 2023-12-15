import React, { useEffect, useState } from 'react'

import FilterSort from './filterSort'

import { getSearchedArticles } from '../_utils/getSearchedArticles'

import '@/styles/layout/results.scss'
import ArticlePreview from './articlePreview'
import Pagination from './pagination'
import Carrousel from './carrousel'
import AuthorCard from './authorCard'

interface Props{
  searchQuery: string
}

const SearchResults: React.FC<Props> = ({ searchQuery }) => {
  const [{ articles, authors }, setSearchResults] = useState(getSearchedArticles(searchQuery))

  useEffect(() => {
    setSearchResults(getSearchedArticles(searchQuery))
  }, [searchQuery])

  return (
    <section className="results-section">
      <div className="results-resume">
        <p className="results-resume__search">Resultados para &quot;{searchQuery}&quot;</p>
        <p className="results-resume__count">
          {articles?.length} articulos, {authors?.length} autores
        </p>
      </div>

      {!articles?.length && !authors?.length ? (
        <p>No hay resultados</p>
      ) : (
        <>
          <FilterSort />

          {articles?.length && (    
            <>  
              <div className="results-articles">
                <ul className="more-articles__list">
                  {articles.map(article => (
                    <ArticlePreview key={article.id} article={article}/>  
                  ))}    
                </ul>
              </div>

              <Pagination />
            </>
          )}

          {authors?.length && (
            <div className='results-authors'>
              <Carrousel>
                {authors.map(author => (
                  <AuthorCard key={author.id} author={author} />  
                ))}    
              </Carrousel>
            </div>
          )}  
        </>
      )}
    </section>
  );
}

export default SearchResults