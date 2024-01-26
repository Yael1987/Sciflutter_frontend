import "@/styles/layout/profile-content.scss";
import "@/styles/components/details.scss";
import { HeadingSecondary } from '@/app/_components/headings';
import { Globe } from '@phosphor-icons/react/dist/ssr/Globe';
import { FacebookLogo } from '@phosphor-icons/react/dist/ssr/FacebookLogo';
import { PinterestLogo } from '@phosphor-icons/react/dist/ssr/PinterestLogo';
import { TwitterLogo } from '@phosphor-icons/react/dist/ssr/TwitterLogo';
import { User } from '@/app/_interfaces/api';
import { getArticlesOfAuthor } from '@/app/_actions/articleActions';
import ProfileArticles from "./profileArticles";

interface Props {
  user: User
}

const ProfileContent: React.FC<Props> = async ({ user }) => {
  const publishedArticles = await getArticlesOfAuthor(user._id)

  if(publishedArticles.length === 0) return (
    <section className="container--empty">
      <p className="heading--secondary">Aún no hay articulos publicados</p>
    </section>
  );

  return (
    <section className="profile-content">
      <div className="articles">
        <HeadingSecondary>Articulos publicados</HeadingSecondary>

        <ProfileArticles publishedArticles={publishedArticles}/>
      </div>

      <div className="details">
        {user.description && (
          <div className="details__box">
            <h4 className="details__box-heading">Sobre mi</h4>
            <p className="details__box-description">
              {user.description}
            </p>
          </div>
        )}

        {user.socialLinks.length > 0 && <aside className="details__box">
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
        </aside>}
      </div>
    </section>
  );
}

export default ProfileContent