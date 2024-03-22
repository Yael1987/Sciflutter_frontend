import Image from 'next/image'

import { checkAuthorFollow } from '@/app/_actions/featuresActions'

import '@/styles/components/article-options.scss'
import dynamic from 'next/dynamic'
import { checkCookieExist } from '@/app/_actions/authActions'

interface Props{
  authorId: string,
  authorImg: string,
  articleId: string,
}

const DynamicArticleLike = dynamic(() => import('./articleLike'), { ssr: false })
const DynamicArticleSave = dynamic(() => import('./articleSave'), { ssr: false })
const DynamicArticleFollow = dynamic(() => import('./articleFollow'), { ssr: false })

const ArticleOptions: React.FC<Props> = async ({ articleId, authorId, authorImg }) => {
  const isFollow = await checkAuthorFollow(authorId);
  const isLiked = await checkAuthorFollow(articleId);

  return (
    <menu className="c-article-options">
      <h3 className="c-article-options__heading">Opciones</h3>

      {checkCookieExist() && <DynamicArticleLike articleId={articleId} liked={isLiked} />}

      {checkCookieExist() && <DynamicArticleSave articleId={articleId} />}
      
      {checkCookieExist() && <DynamicArticleFollow authorId={authorId} follow={isFollow} />}

      <a href={`/user/${authorId}`} className="c-article-options__author">
        <Image alt='author picture' src={authorImg} width={64} height={64} />
        <strong>Ver perfil &rarr;</strong>
      </a>
    </menu>
  );
}

export default ArticleOptions