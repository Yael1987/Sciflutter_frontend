import ArticlePreview from "../_components/articlePreview";
import CardsList from "../_components/cardsList"
import { HeadingSecondary } from "../_components/headings";
import { getArticles } from "../_utils/getData"

import '@/styles/layout/saves.scss'

const Page: React.FC = () => {
  const saves = getArticles();

  return (
    <section className="saves">
      <HeadingSecondary>Mis favoritos</HeadingSecondary>

      <CardsList type="articles">
        {saves.map((article) => (
          <ArticlePreview article={article} key={article.id} />
        ))}
      </CardsList>
    </section>
  );
}

export default Page