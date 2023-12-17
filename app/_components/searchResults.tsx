import React, { useEffect, useState } from 'react'

import FilterSort from './filterSort'

import { getSearchedArticles } from '../_utils/getData'

import '@/styles/layout/results.scss'
import ArticlesResults from './articlesResults'
import AuthorsResults from './authorsResults'
import { filterArticles, filterAuthors } from '../_utils/filter'

interface Props{
  searchQuery: string,
  filters: {
    year?: string | null,
    month?: string | null,
    discipline?: string | null
  }
}

const SearchResults: React.FC<Props> = ({ searchQuery, filters }) => {
  const [{ articles, authors }, setSearchResults] = useState(getSearchedArticles(searchQuery))

  let filteredArticles = filterArticles(articles ?? [], filters)
  let filteredAuthors = filterAuthors(authors ?? [], filters.discipline ?? null)

  useEffect(() => {
    setSearchResults(getSearchedArticles(searchQuery))
  }, [searchQuery])

  return (
    <section className="results-section">
      <div className="results-resume">
        <p className="results-resume__search">
          Resultados para &quot;{searchQuery}&quot;
        </p>

        <p className="results-resume__count">
          {filteredArticles.length} articulos, {filteredAuthors.length} autores
        </p>
      </div>

      {(articles?.length !== 0 && authors?.length !== 0) && <FilterSort articles={articles ?? []} />}

      {filteredArticles.length === 0 && filteredAuthors.length === 0 ? (
        <div>
          <p className='results__message'>Al parecer no hubo coincidencias para los parametros de busqueda.</p>
          <p className='results__message-sub'>Por favor intente con otros parametros.</p>
        </div>
      ) : (
        <>
          {filteredArticles.length !== 0 && (
            <ArticlesResults articles={filteredArticles} />
          )}

          {filteredAuthors.length !== 0 && (
            <AuthorsResults authors={filteredAuthors} />
          )}
        </>
      )}
    </section>
  );
}

export default SearchResults