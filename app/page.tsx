"use client"
import React, { useEffect, useState } from 'react'
import MainSearch from './_components/mainSearch'
import MoreArticles from './_components/moreArticles'
import MoreAuthors from './_components/moreAuthors'
import SearchResults from './_components/searchResults'

interface Props{
  searchParams: { search?: string }
}

const Home: React.FC<Props> = ({ searchParams }) => {
  return (
    <>
      <MainSearch />

      {searchParams.search && <SearchResults searchQuery={searchParams.search} />}

      <MoreArticles />

      <MoreAuthors />
    </>
  )
}

export default Home