"use server"

import { getToken } from "./userActions"

export const checkAuthorFollow = async (authorId: string) => {
  const response = await fetch(`${process.env.BACKEND_URL}/features/follow/${authorId}`, {
    headers: {
      "Authorization": `Bearer ${await getToken()}`
    },
    cache: 'no-cache'
  })

  const data = await response.json()

  return data
}