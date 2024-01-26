import { getSavedArticles } from "@/app/_actions/featuresActions"
import CardsList from "@/app/_components/cardsList"
import Message from "@/app/_components/message"
import type { ArticlePreview } from "@/app/_interfaces/api"
import ArticlePreviewSkeleton from "@/app/_skeletons/articlePreviewSkeleton"
import dynamic from "next/dynamic"

const DynamicArticlePreview = dynamic(() => import('@/app/_components/articlePreview'), { loading: () => <ArticlePreviewSkeleton /> })

const SavesList = async () => {
  const savedArticles  = await getSavedArticles()

  return (
    <CardsList type="articles">
        {savedArticles.length === 0
          ? (
            <Message>Aun no hay articulos guardados</Message>
          ) : (
            savedArticles.map((article: ArticlePreview) => (
              <DynamicArticlePreview article={article} key={article._id} />
            ))
          )}
      </CardsList>
  )
}

export default SavesList