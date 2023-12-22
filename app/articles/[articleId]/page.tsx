import React from 'react'

import '@/styles/layout/article.scss'
import { getArticleById } from '@/app/_utils/getData'
import ArticleHeader from '../_components/articleHeader'
import ArticleResume from '../_components/articleResume'
import ArticleBody from '../_components/articleBody'

interface Props{
  params: {
    articleId: string
  }
}

const Page: React.FC<Props> = ({ params }) => {
  const article = getArticleById(params.articleId)

  if(!article) return <p>Articulo no encontrado</p>

  return (
    <article className="article">
      <ArticleHeader article={article} />

      <ArticleResume />

      <ArticleBody>
        <h2>Introduccion</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet
          dolor iaculis, suscipit nibh eu, auctor lectus. Aliquam vel mi
          fermentum, tincidunt felis ut, malesuada sem. Sed scelerisque eros eu
          lorem pellentesque mollis in id nulla. Aenean elementum dapibus felis
          in tempus. Duis auctor diam quis felis viverra, placerat vestibulum
          risus ullamcorper. Vivamus fringilla est erat, sed molestie nibh
          gravida quis. Fusce interdum auctor nisl. Fusce enim ante, bibendum
          vitae diam ac, malesuada pharetra dui. Suspendisse dictum ullamcorper
          turpis, et dictum nisi faucibus vestibulum. Aliquam dignissim
          tincidunt augue sed maximus.
        </p>
        <p>
          Proin id pretium dui. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Donec id enim rutrum, varius arcu vulputate, consequat
          ante. Quisque eget bibendum arcu. Maecenas fermentum ante vel justo
          aliquet, vitae imperdiet lectus iaculis. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Integer et eros ex. Suspendisse vel
          augue ac libero rutrum tempor in eu ipsum. Morbi tincidunt velit
          laoreet enim posuere, eget tincidunt tellus interdum. Suspendisse
          sollicitudin elit vitae nunc ornare, pellentesque cursus sem
          hendrerit. Pellentesque elit eros, placerat sed lectus sit amet,
          suscipit scelerisque dui. Sed aliquam gravida suscipit. Vestibulum
          turpis magna, interdum quis ultricies ac, laoreet eu metus. Cras
          congue, orci sed gravida aliquam, nunc velit accumsan mi, vel feugiat
          mauris risus fringilla erat.
        </p>
        <p>
          Nam finibus felis mi, sed hendrerit tellus pharetra vel. Aliquam ut
          turpis non massa tempus finibus. Nunc magna tortor, mollis vitae nunc
          non, fermentum porttitor ligula. Quisque non tincidunt urna. Maecenas
          quis dui et leo convallis venenatis. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Phasellus congue, libero nec mollis consequat, lacus risus venenatis
          velit, vitae blandit mauris est nec neque. Donec venenatis arcu ut
          porta dignissim. In porta luctus justo, non molestie lacus tincidunt
          sit amet. Donec in leo nulla. Duis vel diam vitae magna vehicula
          convallis eget accumsan odio.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Praesent vitae rutrum mi, eget scelerisque
          urna. Duis ornare, risus at molestie sodales, erat orci euismod lorem,
          vitae aliquam purus eros ac tortor. Suspendisse dapibus massa suscipit
          commodo aliquam. In lacinia pellentesque nisi, sit amet condimentum
          libero aliquet id. Ut nec nulla quam. Cras sagittis vehicula risus
          vitae congue. Nullam massa odio, mattis ut viverra eget, tincidunt at
          purus. Praesent et accumsan ipsum. Etiam ac elit et massa porta tempor
          in ac eros. Donec vestibulum ultrices tortor ac dignissim. Etiam justo
          elit, porta a efficitur vel, porttitor nec nibh.
        </p>
        <h2>Introduccion</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet
          dolor iaculis, suscipit nibh eu, auctor lectus. Aliquam vel mi
          fermentum, tincidunt felis ut, malesuada sem. Sed scelerisque eros eu
          lorem pellentesque mollis in id nulla. Aenean elementum dapibus felis
          in tempus. Duis auctor diam quis felis viverra, placerat vestibulum
          risus ullamcorper. Vivamus fringilla est erat, sed molestie nibh
          gravida quis. Fusce interdum auctor nisl. Fusce enim ante, bibendum
          vitae diam ac, malesuada pharetra dui. Suspendisse dictum ullamcorper
          turpis, et dictum nisi faucibus vestibulum. Aliquam dignissim
          tincidunt augue sed maximus.
        </p>
      </ArticleBody>
    </article>
  );
}

export default Page