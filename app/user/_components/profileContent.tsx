import React from 'react'

import "@/styles/layout/profile-content.scss";
import "@/styles/components/details.scss";
import { HeadingSecondary } from '@/app/_components/headings';
import { getUserArticles } from '@/app/_utils/getData';
import CardsList from '@/app/_components/cardsList';
import ArticlePreview from '@/app/_components/articlePreview';
import { Globe } from '@phosphor-icons/react/dist/ssr/Globe';
import { FacebookLogo } from '@phosphor-icons/react/dist/ssr/FacebookLogo';
import { PinterestLogo } from '@phosphor-icons/react/dist/ssr/PinterestLogo';
import { TwitterLogo } from '@phosphor-icons/react/dist/ssr/TwitterLogo';
import { User } from '@/app/_interfaces/api';
import { getArticlesOfAuthor } from '@/app/_actions/articleActions';

interface Props {
  user: User
}

const ProfileContent: React.FC<Props> = async ({ user }) => {
  const apiResponse = await getArticlesOfAuthor(user._id)
  const publishedArticles = apiResponse.data

  if(publishedArticles.length === 0) return (
    <section className="container--empty">
      <p className="heading--secondary">Aún no hay articulos publicados</p>
    </section>
  );

  return (
    <section className="profile-content">
      <div className="articles">
        <HeadingSecondary>Articulos publicados</HeadingSecondary>

        <CardsList type="articles">
          {publishedArticles.map((article: any) => (
            <ArticlePreview article={article} key={article.id} />
          ))}
        </CardsList>
      </div>

      <div className="details">
        <div className="details__box">
          <h4 className="details__box-heading">Sobre mi</h4>
          <p className="details__box-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            vulputate ipsum ac vehicula sagittis. Aliquam erat ligula,
            sollicitudin at sem aliquet, eleifend maximus risus. Nulla nisi
            nibh, elementum eu sem eu, ornare cursus orci. Suspendisse vel
            condimentum ante. Cras at libero congue, bibendum mi tempus, euismod
            diam.
          </p>
        </div>

        <aside className="details__box">
          <h4 className="details__box-heading">Contacto</h4>

          <ul className="details__list">
            <li>
              <a href="#" className="details__list-link">
                <Globe weight='fill' size={32}/>

                <p>mi-pagina-web.com</p>
              </a>
            </li>
            <li>
              <a href="#" className="details__list-link">
                <FacebookLogo weight='fill' size={32}/>

                <p>Mi facebook</p>
              </a>
            </li>
            <li>
              <a href="#" className="details__list-link">
                <PinterestLogo weight='fill' size={32}/>

                <p>Mi pinteres</p>
              </a>
            </li>
            <li>
              <a href="#" className="details__list-link">
                <TwitterLogo weight='fill' size={32}/>

                <p>Mi X</p>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default ProfileContent