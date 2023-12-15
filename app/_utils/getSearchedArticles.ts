import { SearchResultsI } from "../_interfaces";
import { sampleArticlesPreview, sampleAuthorsPreview } from "./data";

export const getSearchedArticles = (searchTerm: string): SearchResultsI => {
  const articleResults = sampleArticlesPreview.filter(article => (article.name.toLowerCase().includes(searchTerm.toLowerCase()) || article.discipline.toLowerCase() === searchTerm.toLowerCase() || article.author.name.toLowerCase().includes(searchTerm.toLowerCase())))
  
  const authorsResults = sampleAuthorsPreview.filter(author => (author.name.toLowerCase().includes(searchTerm.toLowerCase()) || author.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || author.discipline === searchTerm.toLowerCase()))

  return {
    articles: articleResults,
    authors: authorsResults
  }
}