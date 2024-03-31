"use client"

import { BookmarkSimple } from "@phosphor-icons/react"
import { useUserStore } from "../_store/userStore"
import { saveArticle, unsaveArticle } from "../_actions/featuresActions"

interface Props {
  articleId: string
}

const BookmarkCard: React.FC<Props> = ({ articleId }) => {
  const { savedArticles, getSavedArticles, setAlert } = useUserStore()
  
  if (!savedArticles) return (
    <button className="c-article-preview__bookmark">
      <BookmarkSimple
        size={40}
        className="c-article-preview__icon"
      />
    </button>
  );
  
  const isSaved = savedArticles?.filter(savedArticle => savedArticle._id === articleId)[0]

  const handleClick = async () => {
    let apiResponse;
    if (!isSaved) apiResponse = await saveArticle(articleId);
    else apiResponse = await unsaveArticle(articleId);

    setAlert(apiResponse.success ? "success" : "error", apiResponse.message);
    await getSavedArticles();
  }

  return (
    <button className="c-article-preview__bookmark">
      <BookmarkSimple
        size={40}
        className="c-article-preview__icon"
        onClick={handleClick}
        weight={isSaved ? "fill" : "regular"}
      />
    </button>
  );
}

export default BookmarkCard