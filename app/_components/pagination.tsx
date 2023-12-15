import React from 'react'

import '@/styles/components/pagination.scss'

const Pagination: React.FC = () => {
  return (
    <div className="pagination">
      <button className="pagination__item pagination__item--arrow disable">
        <i className="ph ph-arrow-left"></i>
      </button>

      <button className="pagination__item active">1</button>
      <button className="pagination__item">2</button>
      <button className="pagination__item">3</button>
      <button className="pagination__item">4</button>
      <button className="pagination__item">5</button>

      <button className="pagination__item pagination__item--arrow">
        <i className="ph ph-arrow-right"></i>
      </button>
    </div>
  );
}

export default Pagination