'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react"
import { useDebouncedCallback } from 'use-debounce'

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {push} = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  const [searchInput, setSearchInput] = useState<string>(
    searchParams.get("search")?.toString() ?? ""
  )

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchInput(value)
    handleSearch(value)
  }

  const handleSearch = useDebouncedCallback((searchInput: string) => {
    const params = new URLSearchParams(searchParams);

    if (searchInput) {
      params.set("search", searchInput);
      params.delete("page");
    } else {
      params.delete("search");
      params.delete("page");
    }

    push(`${pathname}?${params.toString()}`, {scroll: false});
  }, 300)

  return (
    <div className="c-requests-options__search-bar">
      <input
        type="search"
        placeholder="Search request by id"
        value={searchInput}
        onChange={handleUserInput}
        ref={inputRef}
      />
    </div>
  );
}

export default SearchBar