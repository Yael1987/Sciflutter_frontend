import React, { Suspense } from 'react'
import MainSearch from './_components/mainSearch'
import MoreArticles from './_components/moreArticles'
import MoreAuthors from './_components/moreAuthors'
import SearchResults from './_components/searchResults'
import dynamic from 'next/dynamic'

interface Props {
  searchParams: {
    search?: string;
    year?: string;
    month?: string;
    discipline?: string;
  };
}

const DynamicSearchResults = dynamic(()=> import('./_components/searchResults'))

const Home: React.FC<Props> = ({ searchParams }) => {
  const filters = {
    year: searchParams.year ?? null,
    month: searchParams.month ?? null,
    discipline: searchParams.discipline ?? null
  }

  return (
    <>
      <MainSearch />

      {searchParams.search && (
        <DynamicSearchResults searchQuery={searchParams.search} filters={filters} />
      )}

      <MoreArticles />

      <MoreAuthors />
    </>
  )
}

export default Home