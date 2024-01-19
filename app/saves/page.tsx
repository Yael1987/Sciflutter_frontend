import { Metadata } from "next";
import { getToken } from "../_actions/userActions";
import ArticlePreview from "../_components/articlePreview";
import CardsList from "../_components/cardsList"
import { HeadingSecondary } from "../_components/headings";
import Message from "../_components/message";
import { ArticlePreviewI } from "../_interfaces";

import '@/styles/layout/saves.scss'

export const metadata: Metadata = {
  title: 'Saves'
}

const Page: React.FC = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/articles/saves`, {
    headers: {
      "Authorization": `Bearer ${await getToken()}`
    }
  })

  const data = await response.json()
  const saves = data.data.saves

  return (
    <section className="saves">
      <HeadingSecondary>Mis favoritos</HeadingSecondary>

      <CardsList type="articles">
        {data.data.saves.length === 0
          ? (
            <Message>Aun no hay articulos guardados</Message>
          ) : (
            saves.map((article: ArticlePreviewI) => (
              <ArticlePreview article={article} key={article.id} />
            ))
          )}
      </CardsList>
    </section>
  );
}

export default Page