"use client"
import React, { createContext, useContext, useEffect, useMemo } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { useShallow } from "zustand/react/shallow"
import { permanentRedirect } from "next/navigation"
import clsx from "clsx"

import { type UserStore, useUserStore} from "../_store/userStore";

import Image from "next/image";

import type{ FormState } from "../_interfaces"
import type { ContextValue, FormHOCProps, HeaderProps } from "../_interfaces/formCompound"
import type { BaseComponent } from "../_interfaces/components"

import { checkCookieExist } from "../_actions/authActions"

import largeLogo from "@/public/img/logos/long.svg";
import "@/styles/layout/form-section.scss";
import "@/styles/components/form.scss";
import { AlertStore } from "../_store/alertSlice"


const FormContext = createContext<ContextValue>({})

const initialState: FormState = {
  success: false,
  message: ""
}

export const FormHOC: React.FC<FormHOCProps>= ({ children, serverAction }) => {
  const [state, formAction] = useFormState(serverAction, initialState)
  const setUser = useUserStore(useShallow((state: UserStore) => state.setUser));
  const setAlert = useUserStore(useShallow((state: UserStore & AlertStore) => state.setAlert));
  const { user } = useUserStore();

  useEffect(() => {
    if(!state.success) return setAlert('error', state.message!)

    if (state.success && state.user) {
      setUser(state.user);
      setAlert('success', state.message!);
    }

    
    if (checkCookieExist() && user) {
      permanentRedirect("/");
    }
  }, [state, setUser, user, setAlert]);

  return (
    <FormContext.Provider value={{ formAction, message: state.message, success: state.success }}>
      <section className="form-section">
        <Image src={largeLogo} alt="Main logo" className="form-section__img" />
        
        {children}
      </section>
    </FormContext.Provider>
  );
}

export const FormContainer: React.FC<BaseComponent> = ({children}) => {
  return (
    <div className="form">
      {children}
    </div>
  )
}

export const Header: React.FC<HeaderProps> = ({ description, title }) => {
  return (
    <div className="form-header">
      <h2 className="form-header__main">{title}</h2>
      <p className="form-header__text">
        {description}
      </p>
    </div>
  );
}

export const Form: React.FC<BaseComponent> = ({ children }) => {
  const {formAction} = useContext(FormContext)

  return (
    <form className="form-formulary" action={formAction}>
      {children}
    </form>
  );
}

export const MoreOptions: React.FC<BaseComponent> = ({ children }) => {
  return (
    <div className="form-section__links">
      {children}
    </div>
  );
}

export const Link: React.FC<BaseComponent> = ({ children }) => {
  return (
    <p className="form-section__link">
      {children}
    </p>
  )
}

export const SubmitButton: React.FC<BaseComponent> = ({children}) => {
  const { pending } = useFormStatus()

  return (
    <button
      className={clsx(
        "form-formulary__button",
        pending && "form-formulary__button--pending"
      )}
    >
      {pending ? "Verificando..." : children}
    </button>
  );
}