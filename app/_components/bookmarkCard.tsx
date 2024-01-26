"use client"

import { BookmarkSimple } from "@phosphor-icons/react"
import { useUserStore } from "../_store/userStore"
import Button from "./button"

interface Props {
  articleId: string
}

const BookmarkCard: React.FC<Props> = ({ articleId }) => {
  const { savedArticles } = useUserStore()
  
  if (!savedArticles) return (
    <Button className="article-preview__bookmark">
      <BookmarkSimple
      size={40}
      className="icon--bookmark"
      />
    </Button>
  );
  
  const isSaved = savedArticles?.filter(savedArticle => savedArticle._id === articleId)[0]

  return (
    <Button className="article-preview__bookmark">
      <BookmarkSimple
        size={40}
        className="icon--bookmark"
        weight={isSaved ? "fill" : "regular"}
      />
    </Button>
  );
}

export default BookmarkCard