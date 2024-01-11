"use server"
import { JWTPayload, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { ApiErrorResponse, ApiSuccessResponse, User } from '../_interfaces/api'
import { revalidateTag } from 'next/cache'

export const getLoggedUser = async (): Promise<User | null> => {
  const token = cookies().get('token_sciflutter')

  if(!token) return null

  const secret = new TextEncoder().encode("aatroxmecha")

  const { payload }: { payload: JWTPayload } = await jwtVerify(token.value, secret)

  const response = await fetch(`http://127.0.0.1:4000/api/v1/users/${payload.id}`, { next: {tags: ['logged-user']} });

  const data: ApiErrorResponse | ApiSuccessResponse = await response.json()

  if (!data.success) return null

  return (data.data as User) ?? null
}

export const getUser = async (userId: string): Promise<{success: boolean, message: string, user?: User}> => {
  const response = await fetch(`http://127.0.0.1:4000/api/v1/users/${userId}`, {next: {tags: ['users']}})
  const data: ApiErrorResponse | ApiSuccessResponse = await response.json()

  if (!data.success) return {
    success: false,
    message: "Usuario no encontrado"
  }

  return {
    success: true,
    message: data.message,
    user: (data.data as User)
  }
}

export const getToken = async (): Promise<string | null> => {
  const token = cookies().get("token_sciflutter");

  if (!token) return null;

  return token.value
}

export const revalidateUsers = async () => {
  revalidateTag('users')
}

export const revalidateLoggedUser = async () => {
  revalidateTag('logged-user')
}