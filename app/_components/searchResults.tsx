import FilterSort from './filterSort'
import AuthorsResults from './authorsResults'

import '@/styles/layout/results.scss'
import SearchResume from './searchResume'
import Message from './message'
import ArticlesResults from './articlesResults'
import { getArticleFilters, getSearchArticles } from '../_actions/articleActions'
import { getAuthorFilters, getSearchAuthors } from '../_actions/userActions'

interface Props {
  articlesQueryString: string;
  authorsQueryString: string;
  searchQuery: string;
}

const SearchResults: React.FC<Props> = async ({ articlesQueryString, authorsQueryString, searchQuery }) => {
  const {articles, totalPages} = await getSearchArticles(
    searchQuery,
    articlesQueryString
  );
  const authors = await getSearchAuthors(
    searchQuery,
    authorsQueryString
  );

  const articleFilters = await getArticleFilters(searchQuery)
  const authorFilters = await getAuthorFilters(searchQuery)

  return (
    <section className="l-results">
      <SearchResume
        searchQuery={searchQuery}
        articlesResults={articles.length}
        authorsResults={authors.length}
      />

      {(articles?.length !== 0 || authors?.length !== 0) && (
        <FilterSort articleFilters={articleFilters} authorFilters={authorFilters}/>
      )}

      {articles.length === 0 && authors.length === 0 ? (
        <Message message='Al parecer no hubo coincidencias para los parametros de busqueda.' subMessage='Por favor intente con otros parametros.'/>
      ) : (
        <>
          {articles.length !== 0 && (
            <ArticlesResults articles={articles} pages={totalPages}/>
          )}

          {authors.length !== 0 && (
            <AuthorsResults authors={authors} />
          )}
        </>
      )}
    </section>
  );
}

export default SearchResults