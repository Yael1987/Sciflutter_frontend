"use client"
import { useEffect, useState } from 'react'

import FilterSort from './filterSort'
import ArticlesResults from './articlesResults'
import AuthorsResults from './authorsResults'

import { getSearchedArticles } from '../_utils/getData'
import { filterArticles, filterAuthors } from '../_utils/filter'

import '@/styles/layout/results.scss'
import SearchResume from './searchResume'
import Message from './message'

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
    <section className="l-results">
      <SearchResume
        searchQuery={searchQuery}
        articlesResults={filteredArticles.length}
        authorsResults={filteredAuthors.length}
      />

      {articles?.length !== 0 && authors?.length !== 0 && (
        <FilterSort articles={articles ?? []} />
      )}

      {filteredArticles.length === 0 && filteredAuthors.length === 0 ? (
        <Message message='Al parecer no hubo coincidencias para los parametros de busqueda.' subMessage='Por favor intente con otros parametros.'/>
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