"use server"

import type { ApiErrorResponse, ApiSuccessResponse, ArticlePreview } from "../_interfaces/api"
import { getToken } from "./userActions"

export const checkAuthorFollow = async (authorId: string): Promise<boolean> => {
  const response = await fetch(`${process.env.BACKEND_URL}/features/follow/${authorId}`, {
    headers: {
      "Authorization": `Bearer ${await getToken()}`
    },
    cache: 'no-cache'
  })

  const data: ApiSuccessResponse = await response.json()  

  return data.data?.follow! ?? false
}

export const getSavedArticles = async (): Promise<ArticlePreview[]> => {
  const response = await fetch(`${process.env.BACKEND_URL}/articles/saves`, {
    headers: {
      'Authorization': `Bearer ${await getToken()}`
    },
    cache: 'no-cache'
  })

  const data: ApiErrorResponse | ApiSuccessResponse = await response.json()

  if (!data.success) return []
  
  return data.data.saves!
}