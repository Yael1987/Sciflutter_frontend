"use server"

import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { ApiErrorResponse, ApiSuccessResponse, User } from '../_interfaces/api'
import { type FormState } from '../_interfaces'

export const signup = async (prevState: FormState, formData: FormData) => {
  const loginData = {
    email: formData.get('email'),
    password: formData.get('password')
  }

  const response = await fetch('http://127.0.0.1:4000/api/v1/users/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData)
  })

  const data = await response.json()

  if (data.success) {
    const cookieOptions = {
      expires: new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: true
    };

    cookies().set('token_sciflutter', data.token, cookieOptions)
  }

  return data
}

export const login = async (prevState: FormState, formData: FormData): Promise<FormState> => {
  const loginData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch("http://127.0.0.1:4000/api/v1/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  const data: ApiErrorResponse | ApiSuccessResponse = await response.json();

  if (data.success && data.token) {
    const cookieOptions = {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
    };

    cookies().set("token_sciflutter", data.token, cookieOptions);

    return {
      success: data.success,
      user: data.data.user
    }
  }

  return {
    success: data.success,
    message: data.message
  };
}

export const checkIsLoggedIn = async () => {
  const token = cookies().get('token_sciflutter')

  if (!token) return {
    succes: false
  }

  const secret = new TextEncoder().encode("aatroxmecha")
  
  const { payload } = await jwtVerify(token.value, secret)

  const response = await fetch(`http://127.0.0.1:4000/api/v1/users/${payload.id}`)
  const data = await response.json()
  
  if (!data.success) return {
    success: false
  }

  return {
    success: true,
    user: {
      ...data.data
    }
  }
}

export const getLoggedUser = async (): Promise<User | null> => {
  const token = cookies().get('token_sciflutter')

  if(!token) return null

  const secret = new TextEncoder().encode("aatroxmecha")

  const { payload } = await jwtVerify(token.value, secret)

  const response = await fetch(`http://127.0.0.1:4000/api/v1/users/${payload.id}`, { cache: 'force-cache' });

  const data: ApiErrorResponse | ApiSuccessResponse = await response.json()

  if (!data.success) return null

  return (data.data as User) ?? null
}