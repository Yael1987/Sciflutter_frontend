"use server"
import { cookies } from 'next/headers'
import { ApiErrorResponse, ApiSuccessResponse, User } from '../_interfaces/api'
import { revalidateTag } from 'next/cache'

export const getLoggedUser = async (): Promise<User | null> => {
  const token = cookies().get('token_sciflutter')

  if(!token) return null

  const response = await fetch('http://127.0.0.1:4000/api/v1/users/me', {
    cache: 'no-store',
    headers: {
      "Authorization": `Bearer ${token.value}`
    }
  })

  const data: ApiErrorResponse | ApiSuccessResponse = await response.json()

  if (!data.success) {
    cookies().delete('token_sciflutter')

    return null
  }

  return (data.data.user as User) ?? null
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

export const updateUserData = async (formData: FormData): Promise<{success: boolean, message: string, user?: User}> => {
  const response = await fetch("http://127.0.0.1:4000/api/v1/users/me", {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
    body: formData,
    cache: "no-cache",
  });

  const data: ApiErrorResponse | ApiSuccessResponse = await response.json();

  if (!data.success) return { success: data.success, message: data.message }
  
  return { success: data.success, message: data.message, user: (data.data as User) }
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