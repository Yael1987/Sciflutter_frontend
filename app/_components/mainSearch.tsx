"use client"
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Image from 'next/image'

import { ArrowRight, MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import Button from "./button";

import logoMain from '@/public/img/logos/main.svg'
import '@/styles/components/mainSearch.scss'

const MainSearch: React.FC = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const [searchInput, setSearchInput] = useState<string>(searchParams.get("search")?.toString() || "")

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    
    setSearchInput(value)
  }

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams(searchParams);

    if (searchInput) {
      params.set("search", searchInput);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <section className='main-search'>
      <Image
        src={logoMain}
        alt='Main logo'
        className='main-search__logo'
        style={{
          width: 'auto'
        }}
      />

      <form className='main-search__search' onSubmit={handleSearch}>
        <label htmlFor='main-search'>
          <MagnifyingGlass
            size={32}
            weight='light'
            className='main-search__search-icon'
          />
        </label>

        <input
          className='main-search__search-input'
          type='search'
          name='main-search'
          id='main-search'
          placeholder='Buscar un tema o autor...'
          value={searchInput}
          onChange={handleUserInput}
        />

        <Button className="btn--main-search"> Buscar <ArrowRight size={32} weight='light' className='btn--main-search__icon' /></Button>
      </form>
    </section>
  )
}

export default MainSearch