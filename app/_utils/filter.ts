import { ArticlePreviewI, AuthorsPreviewI } from "../_interfaces";
import { getMonth } from "./dateUtils";

export const filterArticles = (articles: ArticlePreviewI[], filters: {
  year?: string | null;
  month?: string | null;
  discipline?: string | null;
}): ArticlePreviewI[] => {
  if (articles.length === 0) return []
  
  return articles
    .filter(article => filters.year ? new Date(article.createdAt).getFullYear().toString() === filters.year : article)
    .filter(article => filters.month ? getMonth(article.createdAt) === filters.month : article)
    .filter(article => filters.discipline ? article.discipline === filters.discipline : article)
};

export const filterAuthors = (authors: AuthorsPreviewI[], filter: string | null): AuthorsPreviewI[] => {
  if(authors.length === 0) return authors

  return authors.filter(author => filter ? author.discipline === filter : author)
}