"use server"

import { cookies } from "next/headers"
import type { FormState } from "../_interfaces"
import type { ApiErrorResponse, ApiResponseBase, ApiSuccessResponse } from "../_interfaces/api";

export const signup = async (prevState: FormState, formData: FormData): Promise<FormState> => {
  const registerData = {
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
    passwordConfirm: formData.get("passwordConfirm"),
  };

  const response = await fetch(`http://127.0.0.1:4000/api/v1/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  });

  const data: ApiErrorResponse | ApiSuccessResponse = await response.json();

  if (data.success && data.token) {
    const cookieOptions = {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      samesite: null,
    };

    cookies().set("token_sciflutter", data.token, cookieOptions);
    return {
      success: data.success,
      user: data.data.user,
    };
  } else {
    return {
      success: data.success,
      message: data.message,
    };
  }
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
      samesite: null
    };

    cookies().set("token_sciflutter", data.token, cookieOptions);

    return {
      success: data.success,
      user: data.data.user
    }
  } else { 
    return {
      success: data.success,
      message: data.message
    };
  }
}

export const requestResetPassword = async (prevState: FormState, formData: FormData): Promise<FormState> => {
  const body = {
    email: formData.get('email')
  }

  const response = await fetch('http://127.0.0.1:4000/api/v1/users/forgotPassword', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    cache: 'no-cache'
  })

  const data: ApiErrorResponse | ApiSuccessResponse = await response.json()

  return {
    success: data.success,
    message: data.message
  }
}

export const changePassword = async (prevState: FormState, formData: FormData): Promise<FormState> => {
  const newPassword = {
    password: formData.get('password'),
    passwordConfirm: formData.get('passwordConfirm'),
  }

  const response = await fetch(`http://127.0.0.1:4000/api/v1/users/resetPassword/${formData.get('token')}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPassword),
    cache: 'no-cache'
  })

  const data: ApiErrorResponse | ApiSuccessResponse = await response.json()

  return {
    success: data.success,
    message: data.message
  }
}

export const confirmAccount = async (token: string): Promise<ApiErrorResponse | ApiResponseBase> => {
  const response = await fetch(`http://127.0.0.1:4000/api/v1/users/confirm/${token}`, { cache: "no-cache", method: 'PATCH' });

  return await response.json()
}

export const checkCookieExist = (): boolean => {
  const token = cookies().get('token_sciflutter')

  return Boolean(token)
}

export const signout = (): void => {
  cookies().delete('token_sciflutter')
}