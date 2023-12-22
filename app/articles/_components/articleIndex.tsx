import React from 'react'

import '@/styles/components/article-index.scss'

const ArticleIndex: React.FC = () => {
  return (
    <nav className="article-index">
      <h3 className="article-index__header">Indice</h3>

      <ul className="article-index__list">
        <li>
          <a href="#" className="article-index__list-link">
            Resumen
          </a>
        </li>
        <li>
          <a href="#" className="article-index__list-link">
            Introduccion
          </a>
        </li>
        <li>
          <a href="#" className="article-index__list-link">
            Subtema 1
          </a>
        </li>
        <li>
          <a href="#" className="article-index__list-link">
            Subtema 2
          </a>
        </li>
        <li>
          <a href="#" className="article-index__list-link">
            Subtema 3
          </a>
        </li>
        <li>
          <a href="#" className="article-index__list-link">
            Subtema 4
          </a>
        </li>
        <li>
          <a href="#" className="article-index__list-link">
            Subtema 5
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default ArticleIndex