import Image from 'next/image';

import '@/styles/components/article-preview.scss'
import type { ArticlePreview as ArticlePreviewI } from "../_interfaces/api";
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

import ButtonLink from './buttonLink';
import { formatDate } from '../_utils/dateUtils';
import dynamic from 'next/dynamic';
import { BookmarkSimple } from '@phosphor-icons/react/dist/ssr/BookmarkSimple';

interface Props {
  article: ArticlePreviewI
}

const DynamicBookmark = dynamic(() => import("./bookmarkCard"), {
  loading: () => (
    <div className="article-preview__bookmark">
      <BookmarkSimple size={40} className="icon--bookmark" />
    </div>
  ),
  ssr: false,
});

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

          <ButtonLink href={`/articles/${article._id}`} type="outline">
            Leer articulo{" "}
            <ArrowRight size={32} weight="regular" className="icon--btn" />
          </ButtonLink>
        </div>
      </div>

      <DynamicBookmark articleId={article._id} />
    </li>
  );
}

export default ArticlePreview