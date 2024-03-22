"use server"

import { revalidatePath } from "next/cache"
import type { ApiErrorResponse, ApiSuccessResponse, Article, ArticlePreview } from "../_interfaces/api"
import { getToken } from "./userActions"

const REVALIDATE_TIME = 60 * 5

export const getArticlesOfAuthor = async (authorId: string): Promise<ArticlePreview[]> => {
  const response = await fetch(`${process.env.BACKEND_URL}/articles/?author=${authorId}`, { next: { revalidate: REVALIDATE_TIME } })
  const data: ApiErrorResponse | ApiSuccessResponse = await response.json()

  if(!data.success) return []

  return data.data.articles!
}

export const getArticle = async (articleId: string): Promise<Article | null> => {
  const response = await fetch(`${process.env.BACKEND_URL}/articles/${articleId}`, {next: {tags: ["articles"]}})
  const data: ApiErrorResponse | ApiSuccessResponse = await response.json()

  if(!data.success) return null

  return data.data.article!
}

export const getMyArticles = async (): Promise<ArticlePreview[]> => {
  const response = await fetch(`${process.env.BACKEND_URL}/articles/myArticles`, {
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    }
  });

  const data: ApiErrorResponse | ApiSuccessResponse = await response.json();

  if (!data.success) return [];

  return data.data.articles!;
}

export const deleteArticle = async (articleId: string): Promise<ApiErrorResponse | ApiSuccessResponse> => {
  const response = await fetch(`${process.env.BACKEND_URL}/articles/${articleId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${await getToken()}`
    }
  });

  const data: ApiErrorResponse | ApiSuccessResponse = await response.json();

  if(data.success) revalidatePath('/drafts', 'page')

  return data;
}