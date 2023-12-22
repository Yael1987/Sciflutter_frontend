"use client"
import React, { useLayoutEffect } from 'react'
import { redirect } from 'next/navigation'
import { useFormState, useFormStatus } from "react-dom";

import { login } from '@/app/_actions/userActions'

import { type FormState } from '@/app/_interfaces'
import { useUserStore } from '@/app/_stores/userStore'
import clsx from 'clsx'

const initialState: FormState = {
  success: false,
  message: ""
}

const LoginForm = () => {
  const [state, formAction] : [FormState, (payload: FormData) => void] = useFormState(login, initialState)
  const { setUser } = useUserStore()
  const { pending } = useFormStatus()

  useLayoutEffect(() => {
    if (state.success && state.user) {
      setUser(state.user)

      redirect("/me");
    }
  }, [state, setUser])

  return (
    <>
      {state.message && <p className="form__message">{state.message}</p>}

      <form className="form-formulary" action={formAction}>
        <div className="form-formulary-group">
          <label className="form-formulary__label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="Proporciona un correo electronico"
            className="form-formulary__input"
            name="email"
            id="email"
            required
          />
        </div>

        <div className="form-formulary-group">
          <label className="form-formulary__label" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            placeholder="Tu contraseña"
            className="form-formulary__input"
            name="password"
            id="password"
            required
          />
        </div>

        <button
          className={clsx(
            "form-formulary__button",
            pending && "form-formulary__button--pending"
          )}
        >
          {pending ? 'Verificando...' :'Iniciar sesion'}
        </button>
      </form>
    </>
  );
}

export default LoginForm