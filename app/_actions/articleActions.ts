"use server"

import type { ApiErrorResponse, ApiSuccessResponse, ArticlePreview } from "../_interfaces/api"

const REVALIDATE_TIME = 60 * 5

export const getArticlesOfAuthor = async (authorId: string): Promise<ArticlePreview[]> => {
  const response = await fetch(`${process.env.BACKEND_URL}/articles/?author=${authorId}`, { next: { revalidate: REVALIDATE_TIME } })
  const data: ApiErrorResponse | ApiSuccessResponse = await response.json()

  if(!data.success) return []

  return data.data.articles!
}