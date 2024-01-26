"use client"

import { ArrowRight, MagnifyingGlass } from "@phosphor-icons/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

import '@/styles/components/search-bar.scss'

const SearchBar: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {push} = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  const [searchInput, setSearchInput] = useState<string>(
    searchParams.get("search")?.toString() ?? ""
  );

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchInput(value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams(searchParams);

    if (searchInput) {
      params.set("search", searchInput);
      params.delete("page");
    } else {
      params.delete("search");
      params.delete("page");
    }

    push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <form className="c-search-bar" onSubmit={handleSearch}>
      <div className="c-search-bar__bar">
        <label htmlFor="main-search" className="c-search-bar__label">
          <MagnifyingGlass
            size={32}
            weight="regular"
            className="c-search-bar__icon"
          />
        </label>

        <input
          className="c-search-bar__input"
          type="search"
          name="main-search"
          id="main-search"
          placeholder="Buscar un tema o autor..."
          value={searchInput}
          onChange={handleUserInput}
          ref={inputRef}
        />
      </div>

      <button className="c-search-bar__btn">
        <span>
          Buscar{" "}
          <ArrowRight size={32} weight="light" className="c-search-bar__icon" />
        </span>
      </button>
    </form>
  );
}

export default SearchBar