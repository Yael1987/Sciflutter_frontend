"use server"

import { cookies } from "next/headers"

export const checkCookieExist = (): boolean => {
  const token = cookies().get('token_sciflutter')

  return Boolean(token)
}