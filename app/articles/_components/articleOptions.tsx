import React from 'react'

import '@/styles/components/article-options.scss'
import { Heart } from '@phosphor-icons/react/dist/ssr/Heart'
import { BookmarkSimple } from '@phosphor-icons/react/dist/ssr/BookmarkSimple'
import { UserPlus } from '@phosphor-icons/react/dist/ssr/UserPlus'

const ArticleOptions = () => {
  return (
    <menu className="article-options">
      <h3 className="article-options-heading">Opciones</h3>
      <button className="article-option">
        Me gusta <Heart size={32} className="article-option__icon" />{" "}
      </button>
      <button className="article-option">
        Guardar <BookmarkSimple size={32} className="article-option__icon" />{" "}
      </button>

      {/* <!-- <a class="article-author-link" href="">Ver perfil &rarr;;</a> --> */}
      <button className="article-option">
        Seguir autor <UserPlus size={32} />{" "}
      </button>

      <a href="#" className="article-author">
        <img src="./img/users/ari.jpg" alt="author picture" />
        <strong>Ver perfil &rarr;</strong>
      </a>
    </menu>
  );
}

export default ArticleOptions