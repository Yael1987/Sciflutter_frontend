import React from 'react'

import Link from 'next/link'
import Image from 'next/image';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr/ArrowRight';

import '@/styles/components/article-preview.scss'
import { ArticlePreviewI } from '../_interfaces';
import { BookmarkSimple } from '@phosphor-icons/react/dist/ssr/BookmarkSimple';
import Button from './button';
import ButtonLink from './buttonLink';
import { formatDate } from '../_utils/dateUtils';

interface Props {
  article: ArticlePreviewI
}

const ArticlePreview: React.FC<Props> = ({ article }) => {
  return (
    <li className="article-preview-card">
      <div className="article-preview-img">
        <Image
          src={article.image}
          alt="article preview image"
          width={300}
          height={500}
          style={{width: "100%", height: "auto"}}
        />
      </div>

      <div className="article-preview-text-box">
        <h4>{article.name}</h4>
        <p>{article.resume}</p>

        <div className="article-preview-footer">
          <div className="article-preview-author">
            <Image
              src={article.author.photos.profile}
              alt="author picture"
              width={40}
              height={40}
            />

            <div className="article-preview-author__info">
              <p>
                {article.author.name} {article.author.lastName}
              </p>

              <p>{formatDate(article.createdAt)}</p>
            </div>
          </div>

          <ButtonLink href="#" type="outline">
            Leer articulo <ArrowRight size={32} weight="regular" className="icon--btn" />
          </ButtonLink>
        </div>
      </div>

      <Button className="article-preview__bookmark">
        <BookmarkSimple size={40} className="icon--bookmark" />
      </Button>
    </li>
  );
}

export default ArticlePreview