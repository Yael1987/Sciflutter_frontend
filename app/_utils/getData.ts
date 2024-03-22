import { ArticlePreviewI, AuthorsPreviewI, SearchResultsI } from "../_interfaces";
import { ArticlePreview } from "../_interfaces/api";
import { sampleArticlesPreview, sampleAuthorsPreview, sampleMoreArticles } from "./data";

export const getSearchedArticles = ( searchTerm: string ): SearchResultsI => {
  const articleResults = sampleArticlesPreview.filter(
    (article) =>
      article.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.discipline.toLowerCase() === searchTerm.toLowerCase() ||
      article.author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const authorsResults = sampleAuthorsPreview.filter(
    (author) =>
      author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      author.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      author.discipline === searchTerm.toLowerCase()
  );

  return {
    articles: articleResults,
    authors: authorsResults,
  };
};

export const getUserById = (id: string): AuthorsPreviewI | null => {
  const user = sampleAuthorsPreview.filter(author => author.id === id)

  if (!user.length) return null

  return user[0]
}

export const getArticleById = (id: string): ArticlePreview | null => {
  const article = sampleArticlesPreview.filter((article) => article._id === id);

  if (!article.length) return null;

  return article[0];
}

export const getUsers = (): AuthorsPreviewI[] => {
  return sampleAuthorsPreview
}

export const getUserArticles = (userId: string) => {
  return sampleArticlesPreview.filter(article => article.author.id === userId)
}

export const getArticles = (): ArticlePreviewI[] => {
  return sampleMoreArticles
}