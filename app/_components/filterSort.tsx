import React from 'react'
import '@/styles/components/filter-sort.scss'

const FilterSort: React.FC = () => {
  return (
    <div className="filter-sort">
      <div className="filters">
        <div className="filter-sort-item">
          <p className="filter-sort-item__title">Año</p>
          <select className="filter-sort-item__options">
            <option value="valor">Opcion 1</option>
          </select>
        </div>

        <div className="filter-sort-item">
          <p className="filter-sort-item__title">Mes</p>
          <select className="filter-sort-item__options">
            <option value="valor">Opcion 1</option>
          </select>
        </div>

        <div className="filter-sort-item">
          <p className="filter-sort-item__title">Area</p>
          <select className="filter-sort-item__options">
            <option value="valor">Opcion 1</option>
          </select>
        </div>
      </div>

      <div className="sort">
        <div className="filter-sort-item">
          <p className="filter-sort-item__title">Ordenar por</p>
          <select className="filter-sort-item__options">
            <option value="valor">Opcion 1</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterSort