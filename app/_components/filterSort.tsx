"use client"
import React from 'react'

import { ArticlePreviewI } from '../_interfaces'

import { getMonth } from '../_utils/dateUtils'
import '@/styles/components/filter-sort.scss'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const SORT_OPTIONS = [
  { value: "year", name: "Mas reciente" },
  { value: "-year", name: "Mas antiguo" },
  { value: "alphabetic", name: "A-Z" },
  { value: "-aplhabetic", name: "Z-A" }
]

interface Props{
  articles: ArticlePreviewI[]
}

const FilterSort: React.FC<Props> = ({ articles }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const years = Array.from(new Set(articles.map(article => new Date(article.createdAt).getFullYear().toString())))
  const months = Array.from(new Set(articles.map(article => getMonth(article.createdAt))))
  const disciplines = Array.from(new Set(articles.map(article => article.discipline)))

  const changeFilter = (filter: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(filter, value);
    } else {
      params.delete(filter);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>, filter: string) => {
    changeFilter(filter, event.target.value)
  }

  return (
    <div className="c-filter-sort">
      <div className="c-filter-sort__filters">
        <div className="c-filter-sort__item">
          <p className="c-filter-sort__item-title">Year</p>
          <select
            className="c-filter-sort__item-options"
            defaultValue={searchParams.get("year") ?? ""}
            onChange={(e) => handleSelectOption(e, "year")}
          >
            <option value="">---</option>
            {years.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="c-filter-sort__item">
          <p className="c-filter-sort__item-title">Month</p>
          <select
            className="c-filter-sort__item-options"
            defaultValue={searchParams.get("month") ?? ""}
            onChange={(e) => handleSelectOption(e, "month")}
          >
            <option value="">---</option>
            {months.map((month) => (
              <option value={month} key={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className="c-filter-sort__item">
          <p className="c-filter-sort__item-title">Discipline</p>
          <select
            className="c-filter-sort__item-options"
            defaultValue={searchParams.get('discipline') ?? ""}
            onChange={(e) => handleSelectOption(e, "discipline")}
          >
            <option value="">---</option>
            {disciplines.map((discipline) => (
              <option value={discipline} key={discipline}>
                {discipline}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="sort">
        <div className="c-filter-sort__item">
          <p className="c-filter-sort__item-title">Sort by</p>

          <select className="c-filter-sort__item-options">
            {SORT_OPTIONS.map((option) => (
              <option value={option.value} key={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterSort