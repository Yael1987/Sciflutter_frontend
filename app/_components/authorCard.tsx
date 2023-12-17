import React from 'react'

import Image from 'next/image'

import ButtonLink from './buttonLink'

import { AuthorsPreviewI } from '../_interfaces'

import { ArrowRight } from '@phosphor-icons/react/dist/ssr/ArrowRight'
import { PenNib } from '@phosphor-icons/react/dist/ssr/PenNib'
import { Heart } from '@phosphor-icons/react/dist/ssr/Heart'
import { Users } from '@phosphor-icons/react/dist/ssr/Users'

import '@/styles/components/author-card.scss'

interface Props {
  author: AuthorsPreviewI
}

const AuthorCard: React.FC<Props> = ({ author }) => {
  return (
    <li className="author-card">
      <Image
        src={author.photos.profile}
        alt="author profile picture"
        className="author-card__img"
        width={144}
        height={144}
      />

      <h4 className="author-card__heading">{author.name}</h4>

      <p className="author-card__discipline">{author.discipline}</p>

      <div className="author-card__stats">
        <div className="author-card__stat">
          <PenNib weight="light" size={32} className="author-card__stat-icon" />
          <p className="author-card__stat-label">Articulos</p>
          <p className="author-card__stat-count">{author.articles}</p>
        </div>

        <div className="author-card__stat">
          <Heart weight="light" size={32} className="author-card__stat-icon" />
          <p className="author-card__stat-label">Likes</p>
          <p className="author-card__stat-count">{author.likes}</p>
        </div>

        <div className="author-card__stat">
          <Users weight="light" size={32} className="author-card__stat-icon" />
          <p className="author-card__stat-label">Seguidores</p>
          <p className="author-card__stat-count">{author.followers}</p>
        </div>
      </div>

      <ButtonLink href={`/users/${author.id}`} type="outline">
        Ver perfil <ArrowRight size={32} weight="regular" className="icon--btn" />
      </ButtonLink>
    </li>
  );
}

export default AuthorCard