"use client"
import React from 'react'

import '@/styles/components/pagination.scss'
import { useRouter, useSearchParams } from 'next/navigation'
import Button from './button'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import clsx from 'clsx'

interface Props{
  pages: number
}

const Pagination: React.FC<Props> = ({ pages }) => {
  const searchParams = useSearchParams()
  const {push} = useRouter()
  const currPage = searchParams.get("page") ?? 1
  const params = new URLSearchParams(searchParams);

  const pagesNumbers = Array.from(Array(pages).keys())

  
  const handleClickPage = (page: string) => {
    params.set("page", page);

    push(`?${params.toString()}`, { scroll: false });
  }

  const handleBackPage = () => {
    if (currPage === 1) return

    params.set("page", (+currPage - 1).toString());
    push(`?${params.toString()}`, { scroll: false });
  }

  const handleNextPage = () => {
    if (+currPage === pages) return

    params.set("page", (+currPage + 1).toString());
    push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="pagination">
      <Button
        className={clsx("pagination__item pagination__item--arrow", +currPage === 1 && "disable")}
        onClick={handleBackPage}
        disabled={+currPage === 1}
      >
        <ArrowLeft size={32} />
      </Button>

      {pagesNumbers.map(pageNumber => 
        <Button
          key={pageNumber}
          className={clsx("pagination__item", +currPage === pageNumber + 1 && "active")}
          onClick={() => handleClickPage((pageNumber + 1).toString())}
        >
          {pageNumber + 1}
        </Button>
      )}

      <Button
        className={clsx("pagination__item pagination__item--arrow", +currPage === pages && "disable")}
        onClick={handleNextPage}
        disabled={+currPage !== pages}
      >
        <ArrowRight size={32} />
      </Button>
    </div>
  );
}

export default Pagination