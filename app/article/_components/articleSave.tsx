"use client"
import { saveArticle, unsaveArticle } from "@/app/_actions/featuresActions";
import { useUserStore } from "@/app/_store/userStore";
import { BookmarkSimple } from "@phosphor-icons/react";
import clsx from "clsx";

interface Props{
  articleId: string
}

const ArticleSave: React.FC<Props> = ({ articleId }) => {
  const {savedArticles, getSavedArticles, setAlert} = useUserStore();

  const isSaved = savedArticles?.filter(
    (savedArticle) => savedArticle._id === articleId
  )[0];

  const handleClick = async () => {
    let apiResponse;
    if (!isSaved) apiResponse = await saveArticle(articleId);
    else apiResponse = await unsaveArticle(articleId);

    setAlert(apiResponse.success ? "success" : "error", apiResponse.message);
    await getSavedArticles();
  };

  return (
    <button className={clsx("c-article-options__option", isSaved && "is-fill")} onClick={handleClick}>
      {isSaved ? "Unsave" : "Save"}{" "}
      <BookmarkSimple
        size={32}
        className="article-option__icon"
        weight={isSaved ? "fill" : "regular"}
      />
    </button>
  );
}

export default ArticleSave