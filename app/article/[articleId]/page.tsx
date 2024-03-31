import { revalidateTag } from 'next/cache'

import { getArticle, getRequestedArticle } from '@/app/_actions/articleActions'

import ArticleHeader from '../_components/articleHeader'
import ArticleResume from '../_components/articleResume'
import ArticleBody from '../_components/articleBody'

// import '@/styles/layout/article.scss'
import '@/styles/pages/article.scss'
import { checkAdminCookieExist } from '@/app/_actions/authActions'

interface Props{
  params: {
    articleId: string
  }
}

const Page: React.FC<Props> = async ({ params }) => {
  // const article = getArticleById(params.articleId)
  revalidateTag("articles")
  let article

  if(checkAdminCookieExist()) article = await getRequestedArticle(params.articleId);
  else article = await getArticle(params.articleId)

  if(!article) return <p>Articulo no encontrado</p>

  return (
    <article className="l-article">
      <ArticleHeader article={article} />

      <ArticleResume article={article} />
      
      <ArticleBody>
        <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </ArticleBody>
    </article>
  );
}

export default Page